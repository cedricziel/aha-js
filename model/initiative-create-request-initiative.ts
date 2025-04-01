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
import type { InitiativeCreateRequestInitiativeTimeFrame } from './initiative-create-request-initiative-time-frame';
// May contain unused imports in some cases
// @ts-ignore
import type { InitiativeCreateRequestInitiativeWorkflowStatus } from './initiative-create-request-initiative-workflow-status';

/**
 * 
 * @export
 * @interface InitiativeCreateRequestInitiative
 */
export interface InitiativeCreateRequestInitiative {
    /**
     * Name of the initiative
     * @type {string}
     * @memberof InitiativeCreateRequestInitiative
     */
    'name': string;
    /**
     * 
     * @type {InitiativeCreateRequestInitiativeWorkflowStatus}
     * @memberof InitiativeCreateRequestInitiative
     */
    'workflow_status': InitiativeCreateRequestInitiativeWorkflowStatus;
    /**
     * Description of the initiative — may include HTML formatting
     * @type {string}
     * @memberof InitiativeCreateRequestInitiative
     */
    'description'?: string;
    /**
     * Effort required for the initiative
     * @type {number}
     * @memberof InitiativeCreateRequestInitiative
     */
    'effort'?: number;
    /**
     * Value the initiative brings to the business
     * @type {number}
     * @memberof InitiativeCreateRequestInitiative
     */
    'value'?: number;
    /**
     * ID of an initiative to roll up to in the parent line
     * @type {string}
     * @memberof InitiativeCreateRequestInitiative
     */
    'parent_id'?: string;
    /**
     * Used to sort initiatives
     * @type {number}
     * @memberof InitiativeCreateRequestInitiative
     */
    'position'?: number;
    /**
     * Whether this initiative is shown on charts
     * @type {boolean}
     * @memberof InitiativeCreateRequestInitiative
     */
    'presented'?: boolean;
    /**
     * Start date for the initiative in format YYYY-MM-DD
     * @type {string}
     * @memberof InitiativeCreateRequestInitiative
     */
    'start_date'?: string;
    /**
     * End date for the initiative in format YYYY-MM-DD
     * @type {string}
     * @memberof InitiativeCreateRequestInitiative
     */
    'end_date'?: string;
    /**
     * 
     * @type {InitiativeCreateRequestInitiativeTimeFrame}
     * @memberof InitiativeCreateRequestInitiative
     */
    'time_frame'?: InitiativeCreateRequestInitiativeTimeFrame;
    /**
     * Source for calculating progress on the initiative
     * @type {string}
     * @memberof InitiativeCreateRequestInitiative
     */
    'progress_source'?: InitiativeCreateRequestInitiativeProgressSourceEnum;
    /**
     * Progress completed on the initiative. May only be set when the progress_source is manual.
     * @type {number}
     * @memberof InitiativeCreateRequestInitiative
     */
    'progress'?: number;
    /**
     * Source for automatically calculating start and end dates
     * @type {string}
     * @memberof InitiativeCreateRequestInitiative
     */
    'duration_source'?: InitiativeCreateRequestInitiativeDurationSourceEnum;
}

export const InitiativeCreateRequestInitiativeProgressSourceEnum = {
    PROGRESS_MANUAL: 'progress_manual',
    PROGRESS_FROM_FEATURES: 'progress_from_features',
    PROGRESS_FROM_RELEASES: 'progress_from_releases',
    PROGRESS_FROM_CHILDREN: 'progress_from_children',
    PROGRESS_FROM_FEATURES_COMPLETED: 'progress_from_features_completed',
    PROGRESS_FROM_EPICS: 'progress_from_epics'
} as const;

export type InitiativeCreateRequestInitiativeProgressSourceEnum = typeof InitiativeCreateRequestInitiativeProgressSourceEnum[keyof typeof InitiativeCreateRequestInitiativeProgressSourceEnum];
export const InitiativeCreateRequestInitiativeDurationSourceEnum = {
    DURATION_MANUAL: 'duration_manual',
    DURATION_FROM_CHILDREN: 'duration_from_children',
    DURATION_FROM_RELEASES: 'duration_from_releases',
    DURATION_FROM_FEATURES_EPICS: 'duration_from_features_epics'
} as const;

export type InitiativeCreateRequestInitiativeDurationSourceEnum = typeof InitiativeCreateRequestInitiativeDurationSourceEnum[keyof typeof InitiativeCreateRequestInitiativeDurationSourceEnum];


