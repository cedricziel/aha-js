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
import type { Attachment } from './attachment';
// May contain unused imports in some cases
// @ts-ignore
import type { TodoTaskable } from './todo-taskable';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface Todo
 */
export interface Todo {
    /**
     * Unique identifier for the to-do
     * @type {string}
     * @memberof Todo
     */
    'id': string;
    /**
     * Name of the to-do
     * @type {string}
     * @memberof Todo
     */
    'name': string;
    /**
     * Description of the to-do
     * @type {string}
     * @memberof Todo
     */
    'body': string;
    /**
     * Due date of the to-do
     * @type {string}
     * @memberof Todo
     */
    'due_date'?: string | null;
    /**
     * Status of the to-do
     * @type {string}
     * @memberof Todo
     */
    'status': TodoStatusEnum;
    /**
     * Position of the to-do in the list
     * @type {number}
     * @memberof Todo
     */
    'position'?: number;
    /**
     * When the to-do was created
     * @type {string}
     * @memberof Todo
     */
    'created_at': string;
    /**
     * When the to-do was last updated
     * @type {string}
     * @memberof Todo
     */
    'updated_at': string;
    /**
     * ID of the product this to-do belongs to
     * @type {string}
     * @memberof Todo
     */
    'product_id': string;
    /**
     * Users assigned to this to-do
     * @type {Array<User>}
     * @memberof Todo
     */
    'assigned_to_users'?: Array<User>;
    /**
     * 
     * @type {User}
     * @memberof Todo
     */
    'created_by_user'?: User;
    /**
     * Attachments associated with this to-do
     * @type {Array<Attachment>}
     * @memberof Todo
     */
    'attachments'?: Array<Attachment>;
    /**
     * URL to view the to-do in the web interface
     * @type {string}
     * @memberof Todo
     */
    'url'?: string;
    /**
     * API URL for this to-do
     * @type {string}
     * @memberof Todo
     */
    'resource'?: string;
    /**
     * Number of comments on this to-do
     * @type {number}
     * @memberof Todo
     */
    'comments_count'?: number;
    /**
     * 
     * @type {TodoTaskable}
     * @memberof Todo
     */
    'taskable'?: TodoTaskable;
}

export const TodoStatusEnum = {
    PENDING: 'pending',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed'
} as const;

export type TodoStatusEnum = typeof TodoStatusEnum[keyof typeof TodoStatusEnum];


