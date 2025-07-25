/* tslint:disable */
/* eslint-disable */
/**
 * Aha! REST API
 * API for interacting with Aha! product management platform.  ## Rate Limiting The API enforces rate limits to ensure fair usage: - **300 requests per minute** per account - **20 requests per second** per account  When rate limits are exceeded, the API returns a `429 Too Many Requests` response with a `retry_after` header indicating when to retry.  ## Authentication The API supports two authentication methods: - **OAuth 2.0**: For web applications and integrations requiring user consent - **API Tokens**: For server-to-server integrations and personal access  ## Request Headers - **User-Agent**: Required header to identify the client application - **Content-Type**: Set to `application/json` for POST/PUT requests - **Authorization**: Bearer token or OAuth access token  ## Response Format All responses are in JSON format. List endpoints include pagination metadata in the `meta.pagination` object.  ## Error Handling The API uses standard HTTP status codes and includes detailed error messages in the response body for debugging. 
 *
 * The version of the OpenAPI document: 1.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { FeatureIntegrationFieldsInner } from './feature-integration-fields-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { IdeasListResponseIdeasInnerDescription } from './ideas-list-response-ideas-inner-description';
// May contain unused imports in some cases
// @ts-ignore
import type { IdeasListResponseIdeasInnerWorkflowStatus } from './ideas-list-response-ideas-inner-workflow-status';
// May contain unused imports in some cases
// @ts-ignore
import type { InitiativeResponseInitiativeProject } from './initiative-response-initiative-project';
// May contain unused imports in some cases
// @ts-ignore
import type { ReleasePhasesInner } from './release-phases-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { ReleaseWorkflowStatusTimesInner } from './release-workflow-status-times-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface Release
 */
export interface Release {
    /**
     * Unique identifier of the release
     * @type {string}
     * @memberof Release
     */
    'id'?: string;
    /**
     * Name of the release
     * @type {string}
     * @memberof Release
     */
    'name'?: string;
    /**
     * Reference number of the release
     * @type {string}
     * @memberof Release
     */
    'reference_num'?: string;
    /**
     * Date when development started
     * @type {string}
     * @memberof Release
     */
    'development_started_on'?: string | null;
    /**
     * Planned start date of the release
     * @type {string}
     * @memberof Release
     */
    'start_date'?: string | null;
    /**
     * Planned release date
     * @type {string}
     * @memberof Release
     */
    'release_date'?: string | null;
    /**
     * Actual release date
     * @type {string}
     * @memberof Release
     */
    'released_on'?: string | null;
    /**
     * External release date visible to customers
     * @type {string}
     * @memberof Release
     */
    'external_release_date'?: string | null;
    /**
     * Theme or focus of the release
     * @type {string}
     * @memberof Release
     */
    'theme'?: string;
    /**
     * Whether this release is a parking lot
     * @type {boolean}
     * @memberof Release
     */
    'parking_lot'?: boolean;
    /**
     * Position for sorting releases
     * @type {number}
     * @memberof Release
     */
    'position'?: number;
    /**
     * Creation date of the release
     * @type {string}
     * @memberof Release
     */
    'created_at'?: string;
    /**
     * Last update date of the release
     * @type {string}
     * @memberof Release
     */
    'updated_at'?: string;
    /**
     * ID of the product the release belongs to
     * @type {string}
     * @memberof Release
     */
    'product_id'?: string;
    /**
     * Progress completed on the release (0-100)
     * @type {number}
     * @memberof Release
     */
    'progress'?: number;
    /**
     * Source for calculating progress on the release
     * @type {string}
     * @memberof Release
     */
    'progress_source'?: string;
    /**
     * URL to view the release in the Aha! web application
     * @type {string}
     * @memberof Release
     */
    'url'?: string;
    /**
     * API resource URL for the release
     * @type {string}
     * @memberof Release
     */
    'resource'?: string;
    /**
     * 
     * @type {InitiativeResponseInitiativeProject}
     * @memberof Release
     */
    'project'?: InitiativeResponseInitiativeProject;
    /**
     * 
     * @type {IdeasListResponseIdeasInnerWorkflowStatus}
     * @memberof Release
     */
    'workflow_status'?: IdeasListResponseIdeasInnerWorkflowStatus;
    /**
     * 
     * @type {IdeasListResponseIdeasInnerDescription}
     * @memberof Release
     */
    'description'?: IdeasListResponseIdeasInnerDescription;
    /**
     * Attachments to the release
     * @type {Array<object>}
     * @memberof Release
     */
    'attachments'?: Array<object>;
    /**
     * 
     * @type {User}
     * @memberof Release
     */
    'owner'?: User;
    /**
     * 
     * @type {User}
     * @memberof Release
     */
    'assigned_to_user'?: User;
    /**
     * 
     * @type {User}
     * @memberof Release
     */
    'created_by_user'?: User;
    /**
     * Number of comments on the release
     * @type {number}
     * @memberof Release
     */
    'comments_count'?: number;
    /**
     * Goals associated with the release
     * @type {Array<object>}
     * @memberof Release
     */
    'goals'?: Array<object>;
    /**
     * Integration fields for the release
     * @type {Array<FeatureIntegrationFieldsInner>}
     * @memberof Release
     */
    'integration_fields'?: Array<FeatureIntegrationFieldsInner>;
    /**
     * Workflow status times for the release
     * @type {Array<ReleaseWorkflowStatusTimesInner>}
     * @memberof Release
     */
    'workflow_status_times'?: Array<ReleaseWorkflowStatusTimesInner>;
    /**
     * Custom fields for the release
     * @type {Array<object>}
     * @memberof Release
     */
    'custom_fields'?: Array<object>;
    /**
     * Tags associated with the release
     * @type {Array<string>}
     * @memberof Release
     */
    'tags'?: Array<string>;
    /**
     * Full tag objects with metadata
     * @type {Array<object>}
     * @memberof Release
     */
    'full_tags'?: Array<object>;
    /**
     * Release phases
     * @type {Array<ReleasePhasesInner>}
     * @memberof Release
     */
    'phases'?: Array<ReleasePhasesInner>;
}

