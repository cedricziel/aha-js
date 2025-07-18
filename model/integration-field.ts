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
import type { IntegrationFieldIntegratable } from './integration-field-integratable';

/**
 * 
 * @export
 * @interface IntegrationField
 */
export interface IntegrationField {
    /**
     * Unique identifier for the integration field
     * @type {string}
     * @memberof IntegrationField
     */
    'id': string;
    /**
     * Name of the integration field (e.g., key, id, url)
     * @type {string}
     * @memberof IntegrationField
     */
    'name': string;
    /**
     * Value of the integration field (e.g., JRA-123, 435)
     * @type {string}
     * @memberof IntegrationField
     */
    'value': string;
    /**
     * ID of the associated integration
     * @type {number}
     * @memberof IntegrationField
     */
    'integration_id': number;
    /**
     * Service name of the integration (e.g., jira, github)
     * @type {string}
     * @memberof IntegrationField
     */
    'service_name': string;
    /**
     * When the integration field was created
     * @type {string}
     * @memberof IntegrationField
     */
    'created_at'?: string;
    /**
     * 
     * @type {IntegrationFieldIntegratable}
     * @memberof IntegrationField
     */
    'integratable'?: IntegrationFieldIntegratable;
}

