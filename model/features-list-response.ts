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
import type { FeaturesListResponseFeaturesInner } from './features-list-response-features-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { FeaturesListResponsePagination } from './features-list-response-pagination';

/**
 * 
 * @export
 * @interface FeaturesListResponse
 */
export interface FeaturesListResponse {
    /**
     * 
     * @type {Array<FeaturesListResponseFeaturesInner>}
     * @memberof FeaturesListResponse
     */
    'features'?: Array<FeaturesListResponseFeaturesInner>;
    /**
     * 
     * @type {FeaturesListResponsePagination}
     * @memberof FeaturesListResponse
     */
    'pagination'?: FeaturesListResponsePagination;
}

