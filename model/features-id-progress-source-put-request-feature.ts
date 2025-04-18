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
 * @interface FeaturesIdProgressSourcePutRequestFeature
 */
export interface FeaturesIdProgressSourcePutRequestFeature {
    /**
     * Source for calculating progress on the feature
     * @type {string}
     * @memberof FeaturesIdProgressSourcePutRequestFeature
     */
    'progress_source'?: FeaturesIdProgressSourcePutRequestFeatureProgressSourceEnum;
}

export const FeaturesIdProgressSourcePutRequestFeatureProgressSourceEnum = {
    PROGRESS_MANUAL: 'progress_manual',
    PROGRESS_FROM_REQUIREMENTS: 'progress_from_requirements',
    PROGRESS_FROM_REMAINING_ESTIMATE: 'progress_from_remaining_estimate',
    PROGRESS_FROM_TODOS: 'progress_from_todos'
} as const;

export type FeaturesIdProgressSourcePutRequestFeatureProgressSourceEnum = typeof FeaturesIdProgressSourcePutRequestFeatureProgressSourceEnum[keyof typeof FeaturesIdProgressSourcePutRequestFeatureProgressSourceEnum];


