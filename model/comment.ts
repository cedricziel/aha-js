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


// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    'body'?: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    'created_at'?: string;
    /**
     * 
     * @type {User}
     * @memberof Comment
     */
    'user'?: User;
}

