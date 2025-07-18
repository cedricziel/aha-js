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



/**
 * The release this phase belongs to
 * @export
 * @interface ReleasePhaseRelease
 */
export interface ReleasePhaseRelease {
    /**
     * ID of the release
     * @type {string}
     * @memberof ReleasePhaseRelease
     */
    'id'?: string;
    /**
     * Name of the release
     * @type {string}
     * @memberof ReleasePhaseRelease
     */
    'name'?: string;
    /**
     * Reference number of the release
     * @type {string}
     * @memberof ReleasePhaseRelease
     */
    'reference_num'?: string;
    /**
     * URL to view the release in the web interface
     * @type {string}
     * @memberof ReleasePhaseRelease
     */
    'url'?: string;
    /**
     * API URL for the release
     * @type {string}
     * @memberof ReleasePhaseRelease
     */
    'resource'?: string;
    /**
     * ID of the product
     * @type {string}
     * @memberof ReleasePhaseRelease
     */
    'product_id'?: string;
}

