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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { User } from '../model';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves details of a specific user by their ID.
         * @summary Get a specific user
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersGet: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersGet', 'id', id)
            const localVarPath = `/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
        /**
         * Fetches a list of users associated with the Aha! account.
         * @summary List users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersList: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
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
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves details of a specific user by their ID.
         * @summary Get a specific user
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersGet(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.usersGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Fetches a list of users associated with the Aha! account.
         * @summary List users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersList(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersList(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.usersList']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * Retrieves details of a specific user by their ID.
         * @summary Get a specific user
         * @param {UsersApiUsersGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersGet(requestParameters: UsersApiUsersGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.usersGet(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches a list of users associated with the Aha! account.
         * @summary List users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersList(options?: RawAxiosRequestConfig): AxiosPromise<Array<User>> {
            return localVarFp.usersList(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - interface
 * @export
 * @interface UsersApi
 */
export interface UsersApiInterface {
    /**
     * Retrieves details of a specific user by their ID.
     * @summary Get a specific user
     * @param {UsersApiUsersGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    usersGet(requestParameters: UsersApiUsersGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<User>;

    /**
     * Fetches a list of users associated with the Aha! account.
     * @summary List users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    usersList(options?: RawAxiosRequestConfig): AxiosPromise<Array<User>>;

}

/**
 * Request parameters for usersGet operation in UsersApi.
 * @export
 * @interface UsersApiUsersGetRequest
 */
export interface UsersApiUsersGetRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiUsersGet
     */
    readonly id: string
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI implements UsersApiInterface {
    /**
     * Retrieves details of a specific user by their ID.
     * @summary Get a specific user
     * @param {UsersApiUsersGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersGet(requestParameters: UsersApiUsersGetRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersGet(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetches a list of users associated with the Aha! account.
     * @summary List users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersList(options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersList(options).then((request) => request(this.axios, this.basePath));
    }
}

