/* tslint:disable */
/* eslint-disable */
/**
 * Aha! REST API
 * API for interacting with Aha! product management platform.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface IdeasListResponseIdeasInnerDescription
 */
export interface IdeasListResponseIdeasInnerDescription {
    /**
     * Unique identifier of the description
     * @type {string}
     * @memberof IdeasListResponseIdeasInnerDescription
     */
    'id'?: string;
    /**
     * Content of the description
     * @type {string}
     * @memberof IdeasListResponseIdeasInnerDescription
     */
    'body'?: string;
    /**
     * Creation date of the description
     * @type {string}
     * @memberof IdeasListResponseIdeasInnerDescription
     */
    'created_at'?: string;
    /**
     * Last update date of the description
     * @type {string}
     * @memberof IdeasListResponseIdeasInnerDescription
     */
    'updated_at'?: string;
    /**
     * Attachments to the description
     * @type {Array<object>}
     * @memberof IdeasListResponseIdeasInnerDescription
     */
    'attachments'?: Array<object>;
}

