#!/usr/bin/env node
// Fetches Aha's published OpenAPI document and prepares it for openapi-generator.
//
// Aha serves the spec at https://www.aha.io/openapi.json. It is authoritative -
// it carries every documented endpoint with real response schemas - but it is
// emitted from their docs site, one page per operation, and arrives with four
// defects that a generator either rejects or silently mistranslates. Each repair
// below is narrow and complains when upstream stops needing it, so this never
// quietly papers over a new kind of breakage.

import { writeFileSync } from 'node:fs';

const SPEC_URL = process.env.AHA_SPEC_URL ?? 'https://www.aha.io/openapi.json';
const OUT = process.argv[2] ?? 'openapi.json';

// Paths whose template embeds a query string. These are not valid OpenAPI path
// templates, and each one duplicates a path already present without the query,
// so the query-carrying variant is dropped rather than merged.
const QUERY_IN_PATH = /\?/;

// Two operations share a path template once parameter names are erased, because
// Aha documents the same URL twice with differently-named parameters. A
// generator sees them as one path and the second silently wins, so they are
// merged deliberately: the {integration_id} spelling is kept, and the
// {service_name} variant's operations fold in under any verb still free.
const COLLISIONS = [
  ['/features/{feature_id}/integrations/{integration_id}/fields',
   '/features/{feature_id}/integrations/{service_name}/fields'],
  ['/products/{product_id}/integrations/{integration_id}',
   '/products/{product_id}/integrations/{service_name}'],
];

const VERBS = ['get', 'put', 'post', 'patch', 'delete', 'head', 'options'];

const res = await fetch(SPEC_URL, { headers: { Accept: 'application/json' } });
if (!res.ok) throw new Error(`GET ${SPEC_URL} -> ${res.status} ${res.statusText}`);
const spec = await res.json();

const report = { dropped: [], merged: [], restored: [], unnamed: [], named: 0 };

// 1. Drop path templates containing a query string.
for (const path of Object.keys(spec.paths)) {
  if (!QUERY_IN_PATH.test(path)) continue;
  const base = path.split('?')[0];
  if (!spec.paths[base]) {
    throw new Error(
      `${path} carries a query string but its base path ${base} is absent; ` +
      `dropping it would lose coverage. Fold its parameters in by hand.`
    );
  }
  delete spec.paths[path];
  report.dropped.push(path);
}

// 2. Merge the parameter-name collisions.
for (const [keep, drop] of COLLISIONS) {
  if (!spec.paths[drop]) continue;
  if (!spec.paths[keep]) {
    throw new Error(`Cannot merge ${drop} into absent ${keep}.`);
  }
  for (const verb of VERBS) {
    const op = spec.paths[drop][verb];
    if (!op) continue;
    if (spec.paths[keep][verb]) continue; // keep the canonical spelling
    spec.paths[keep][verb] = op;
  }
  delete spec.paths[drop];
  report.merged.push(`${drop} -> ${keep}`);
}

// 3. Restore the update operations that upstream overwrote.
//
// Aha builds this document by walking their docs site, one page per operation,
// and a later page silently overwrites an earlier one that shares a path. The
// "create a custom table record link associated with a <record>" pages all
// document a PUT to that record's own endpoint, so they landed on top of
// "update a <record>" for eight core resources plus custom table records.
//
// What survived is the giveaway: the 200 still references <Resource>PutResponse,
// so the operation really is the update. Only the summary, tag and request body
// were lost. Those are rebuilt here from the create request, widened to accept
// custom_object_links and anything else Aha's thin create schema omits.
const LINK_TAG = 'Custom table record links';
const CUSTOM_OBJECT_PATH = '/custom_object_records/{id}';
const schemaPrefix = (tag) => {
  const flat = tag.replace(/[^A-Za-z0-9]/g, '');
  return flat.charAt(0).toUpperCase() + flat.slice(1).toLowerCase();
};

for (const [path, item] of Object.entries(spec.paths)) {
  const put = item.put;
  if (!put || put.tags?.[0] !== LINK_TAG) continue;

  // The genuine link-only endpoint keeps its identity.
  if (path === CUSTOM_OBJECT_PATH && !spec.components.schemas.CustomtablerecordsPutResponse) continue;

  // Recover the resource's real tag from a sibling verb on the same path.
  const sibling = ['get', 'delete', 'post'].map((v) => item[v]).find((o) => o?.tags?.[0] && o.tags[0] !== LINK_TAG);
  if (!sibling) continue;
  const tag = sibling.tags[0];
  const prefix = schemaPrefix(tag);

  const createRef = `${prefix}PostRequest`;
  const create = spec.components.schemas[createRef];
  if (!create) continue;

  // Widen a copy of the create body: same documented fields, plus the link
  // field this page was really about, plus room for what Aha under-documents.
  const body = structuredClone(create);
  for (const wrapper of Object.values(body.properties ?? {})) {
    if (wrapper?.type !== 'object') continue;
    wrapper.properties ??= {};
    wrapper.properties.custom_object_links = {
      type: 'object',
      additionalProperties: { type: 'array', items: { type: 'string' } },
      description: 'Custom table records to link, keyed by many-to-many custom field name. Replaces the existing list.',
    };
    wrapper.additionalProperties = true;
  }

  const updateRef = `${prefix}PutRequest`;
  spec.components.schemas[updateRef] = body;

  const singular = tag.toLowerCase().replace(/s$/, '');
  put.tags = [tag];
  put.summary = `Update a ${singular}`;
  put.description =
    `Updates the ${singular} identified by the path. Pass \`custom_object_links\` to replace ` +
    `its custom table record links.\n\n${put.description ?? ''}`.trim();
  put.requestBody = {
    required: true,
    content: { 'application/json': { schema: { $ref: `#/components/schemas/${updateRef}` } } },
  };
  report.restored.push(`${path} -> ${tag}`);
}

if (report.restored.length === 0) {
  console.warn(
    'WARNING: no clobbered update operations found. Aha may have fixed their ' +
    'generator, in which case this repair can be deleted - verify that ' +
    'PUT /features/{id} accepts a feature update body before removing it.'
  );
}

// 4. Drop parameters whose name is not a usable identifier.
//
// A handful arrive named literally "{}" - an unsubstituted placeholder from
// Aha's extraction. The generator emits them verbatim, producing TypeScript
// that does not parse (`capacityScenariosByIdGet: async (id: string, ?: string`).
const VALID_PARAM = /^[A-Za-z_][A-Za-z0-9_\-.[\]]*$/;
for (const [path, item] of Object.entries(spec.paths)) {
  for (const verb of VERBS) {
    const op = item[verb];
    if (!op?.parameters) continue;
    const kept = op.parameters.filter((prm) => VALID_PARAM.test(prm.name ?? ''));
    if (kept.length === op.parameters.length) continue;
    for (const prm of op.parameters) {
      if (VALID_PARAM.test(prm.name ?? '')) continue;
      if (prm.in === 'path') {
        throw new Error(
          `${verb.toUpperCase()} ${path} has an unusable *path* parameter ` +
          `${JSON.stringify(prm.name)}; dropping it would break the URL.`
        );
      }
      report.unnamed.push(`${verb.toUpperCase()} ${path} (${prm.in} ${JSON.stringify(prm.name)})`);
    }
    op.parameters = kept;
  }
}

// 5. Give every operation a stable operationId.
//
// Aha ships none, and without them the generator derives method names from the
// path, producing collisions and names that churn whenever a path is reworded.
// Deriving them here keeps the client's surface deterministic: the same spec
// always yields the same method names.
const seen = new Map();
for (const [path, item] of Object.entries(spec.paths)) {
  for (const verb of VERBS) {
    const op = item[verb];
    if (!op || op.operationId) continue;
    const segments = path.split('/').filter(Boolean).map((s) =>
      s.startsWith('{') ? `by_${s.slice(1, -1).replace(/_id$/, '')}` : s
    );
    const base = [...segments, verb].join('_').replace(/[^a-zA-Z0-9_]/g, '_');
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    op.operationId = n === 1 ? base : `${base}_${n}`;
    report.named++;
  }
}

writeFileSync(OUT, JSON.stringify(spec, null, 2));

const ops = Object.values(spec.paths)
  .flatMap((i) => VERBS.filter((v) => i[v])).length;
console.log(`${OUT}: ${Object.keys(spec.paths).length} paths, ${ops} operations`);
console.log(`  dropped query-in-path: ${report.dropped.length}`);
for (const p of report.dropped) console.log(`    ${p}`);
console.log(`  merged collisions: ${report.merged.length}`);
for (const m of report.merged) console.log(`    ${m}`);
console.log(`  restored update operations: ${report.restored.length}`);
for (const r of report.restored) console.log(`    ${r}`);
console.log(`  dropped unusable parameters: ${report.unnamed.length}`);
for (const u of report.unnamed) console.log(`    ${u}`);
console.log(`  operationIds assigned: ${report.named}`);
