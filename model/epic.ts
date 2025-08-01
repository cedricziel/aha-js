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
import type { EpicDescription } from './epic-description';
// May contain unused imports in some cases
// @ts-ignore
import type { FeatureWorkflowStatus } from './feature-workflow-status';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface Epic
 */
export interface Epic {
    /**
     * 
     * @type {string}
     * @memberof Epic
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Epic
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Epic
     */
    'reference_num'?: string;
    /**
     * 
     * @type {string}
     * @memberof Epic
     */
    'initiative_reference_num'?: string;
    /**
     * 
     * @type {number}
     * @memberof Epic
     */
    'position'?: number;
    /**
     * 
     * @type {number}
     * @memberof Epic
     */
    'score'?: number;
    /**
     * 
     * @type {string}
     * @memberof Epic
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof Epic
     */
    'updated_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof Epic
     */
    'start_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof Epic
     */
    'due_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof Epic
     */
    'product_id'?: string;
    /**
     * 
     * @type {number}
     * @memberof Epic
     */
    'progress'?: number;
    /**
     * 
     * @type {User}
     * @memberof Epic
     */
    'created_by'?: User;
    /**
     * 
     * @type {FeatureWorkflowStatus}
     * @memberof Epic
     */
    'workflow_status'?: FeatureWorkflowStatus;
    /**
     * 
     * @type {EpicDescription}
     * @memberof Epic
     */
    'description'?: EpicDescription;
    /**
     * 
     * @type {string}
     * @memberof Epic
     */
    'url'?: string;
    /**
     * 
     * @type {string}
     * @memberof Epic
     */
    'resource'?: string;
}

