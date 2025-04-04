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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { EpicsEpicIdCommentsGet200Response } from '../model';
/**
 * ReleasesApi - axios parameter creator
 * @export
 */
export const ReleasesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a list of comments associated with the specified release.
         * @summary List comments on a release
         * @param {string} releaseId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        releasesReleaseIdCommentsGet: async (releaseId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'releaseId' is not null or undefined
            assertParamExists('releasesReleaseIdCommentsGet', 'releaseId', releaseId)
            const localVarPath = `/releases/{release_id}/comments`
                .replace(`{${"release_id"}}`, encodeURIComponent(String(releaseId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReleasesApi - functional programming interface
 * @export
 */
export const ReleasesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReleasesApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves a list of comments associated with the specified release.
         * @summary List comments on a release
         * @param {string} releaseId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async releasesReleaseIdCommentsGet(releaseId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EpicsEpicIdCommentsGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.releasesReleaseIdCommentsGet(releaseId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReleasesApi.releasesReleaseIdCommentsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ReleasesApi - factory interface
 * @export
 */
export const ReleasesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReleasesApiFp(configuration)
    return {
        /**
         * Retrieves a list of comments associated with the specified release.
         * @summary List comments on a release
         * @param {ReleasesApiReleasesReleaseIdCommentsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        releasesReleaseIdCommentsGet(requestParameters: ReleasesApiReleasesReleaseIdCommentsGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<EpicsEpicIdCommentsGet200Response> {
            return localVarFp.releasesReleaseIdCommentsGet(requestParameters.releaseId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReleasesApi - interface
 * @export
 * @interface ReleasesApi
 */
export interface ReleasesApiInterface {
    /**
     * Retrieves a list of comments associated with the specified release.
     * @summary List comments on a release
     * @param {ReleasesApiReleasesReleaseIdCommentsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReleasesApiInterface
     */
    releasesReleaseIdCommentsGet(requestParameters: ReleasesApiReleasesReleaseIdCommentsGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<EpicsEpicIdCommentsGet200Response>;

}

/**
 * Request parameters for releasesReleaseIdCommentsGet operation in ReleasesApi.
 * @export
 * @interface ReleasesApiReleasesReleaseIdCommentsGetRequest
 */
export interface ReleasesApiReleasesReleaseIdCommentsGetRequest {
    /**
     * 
     * @type {string}
     * @memberof ReleasesApiReleasesReleaseIdCommentsGet
     */
    readonly releaseId: string
}

/**
 * ReleasesApi - object-oriented interface
 * @export
 * @class ReleasesApi
 * @extends {BaseAPI}
 */
export class ReleasesApi extends BaseAPI implements ReleasesApiInterface {
    /**
     * Retrieves a list of comments associated with the specified release.
     * @summary List comments on a release
     * @param {ReleasesApiReleasesReleaseIdCommentsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReleasesApi
     */
    public releasesReleaseIdCommentsGet(requestParameters: ReleasesApiReleasesReleaseIdCommentsGetRequest, options?: RawAxiosRequestConfig) {
        return ReleasesApiFp(this.configuration).releasesReleaseIdCommentsGet(requestParameters.releaseId, options).then((request) => request(this.axios, this.basePath));
    }
}

