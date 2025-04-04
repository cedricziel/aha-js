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
import type { Competitor } from '../model';
// @ts-ignore
import type { CompetitorCreateRequest } from '../model';
// @ts-ignore
import type { CompetitorUpdateRequest } from '../model';
// @ts-ignore
import type { ProductsProductIdCompetitorsGet200Response } from '../model';
/**
 * CompetitorsApi - axios parameter creator
 * @export
 */
export const CompetitorsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Removes the specified competitor.
         * @summary Delete a competitor
         * @param {string} competitorId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        competitorsCompetitorIdDelete: async (competitorId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'competitorId' is not null or undefined
            assertParamExists('competitorsCompetitorIdDelete', 'competitorId', competitorId)
            const localVarPath = `/competitors/{competitor_id}`
                .replace(`{${"competitor_id"}}`, encodeURIComponent(String(competitorId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Retrieves details of the specified competitor.
         * @summary Get a specific competitor
         * @param {string} competitorId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        competitorsCompetitorIdGet: async (competitorId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'competitorId' is not null or undefined
            assertParamExists('competitorsCompetitorIdGet', 'competitorId', competitorId)
            const localVarPath = `/competitors/{competitor_id}`
                .replace(`{${"competitor_id"}}`, encodeURIComponent(String(competitorId)));
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
         * Updates the details of the specified competitor.
         * @summary Update a competitor
         * @param {string} competitorId 
         * @param {CompetitorUpdateRequest} competitorUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        competitorsCompetitorIdPut: async (competitorId: string, competitorUpdateRequest: CompetitorUpdateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'competitorId' is not null or undefined
            assertParamExists('competitorsCompetitorIdPut', 'competitorId', competitorId)
            // verify required parameter 'competitorUpdateRequest' is not null or undefined
            assertParamExists('competitorsCompetitorIdPut', 'competitorUpdateRequest', competitorUpdateRequest)
            const localVarPath = `/competitors/{competitor_id}`
                .replace(`{${"competitor_id"}}`, encodeURIComponent(String(competitorId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(competitorUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a list of competitors associated with the specified product.
         * @summary List competitors in a product
         * @param {string} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsProductIdCompetitorsGet: async (productId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('productsProductIdCompetitorsGet', 'productId', productId)
            const localVarPath = `/products/{product_id}/competitors`
                .replace(`{${"product_id"}}`, encodeURIComponent(String(productId)));
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
         * Adds a new competitor to the specified product.
         * @summary Create a competitor
         * @param {string} productId 
         * @param {CompetitorCreateRequest} competitorCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsProductIdCompetitorsPost: async (productId: string, competitorCreateRequest: CompetitorCreateRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            assertParamExists('productsProductIdCompetitorsPost', 'productId', productId)
            // verify required parameter 'competitorCreateRequest' is not null or undefined
            assertParamExists('productsProductIdCompetitorsPost', 'competitorCreateRequest', competitorCreateRequest)
            const localVarPath = `/products/{product_id}/competitors`
                .replace(`{${"product_id"}}`, encodeURIComponent(String(productId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(competitorCreateRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CompetitorsApi - functional programming interface
 * @export
 */
export const CompetitorsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CompetitorsApiAxiosParamCreator(configuration)
    return {
        /**
         * Removes the specified competitor.
         * @summary Delete a competitor
         * @param {string} competitorId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async competitorsCompetitorIdDelete(competitorId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.competitorsCompetitorIdDelete(competitorId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CompetitorsApi.competitorsCompetitorIdDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves details of the specified competitor.
         * @summary Get a specific competitor
         * @param {string} competitorId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async competitorsCompetitorIdGet(competitorId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Competitor>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.competitorsCompetitorIdGet(competitorId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CompetitorsApi.competitorsCompetitorIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Updates the details of the specified competitor.
         * @summary Update a competitor
         * @param {string} competitorId 
         * @param {CompetitorUpdateRequest} competitorUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async competitorsCompetitorIdPut(competitorId: string, competitorUpdateRequest: CompetitorUpdateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Competitor>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.competitorsCompetitorIdPut(competitorId, competitorUpdateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CompetitorsApi.competitorsCompetitorIdPut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Retrieves a list of competitors associated with the specified product.
         * @summary List competitors in a product
         * @param {string} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async productsProductIdCompetitorsGet(productId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProductsProductIdCompetitorsGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.productsProductIdCompetitorsGet(productId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CompetitorsApi.productsProductIdCompetitorsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Adds a new competitor to the specified product.
         * @summary Create a competitor
         * @param {string} productId 
         * @param {CompetitorCreateRequest} competitorCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async productsProductIdCompetitorsPost(productId: string, competitorCreateRequest: CompetitorCreateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Competitor>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.productsProductIdCompetitorsPost(productId, competitorCreateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CompetitorsApi.productsProductIdCompetitorsPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CompetitorsApi - factory interface
 * @export
 */
export const CompetitorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CompetitorsApiFp(configuration)
    return {
        /**
         * Removes the specified competitor.
         * @summary Delete a competitor
         * @param {CompetitorsApiCompetitorsCompetitorIdDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        competitorsCompetitorIdDelete(requestParameters: CompetitorsApiCompetitorsCompetitorIdDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.competitorsCompetitorIdDelete(requestParameters.competitorId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves details of the specified competitor.
         * @summary Get a specific competitor
         * @param {CompetitorsApiCompetitorsCompetitorIdGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        competitorsCompetitorIdGet(requestParameters: CompetitorsApiCompetitorsCompetitorIdGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<Competitor> {
            return localVarFp.competitorsCompetitorIdGet(requestParameters.competitorId, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the details of the specified competitor.
         * @summary Update a competitor
         * @param {CompetitorsApiCompetitorsCompetitorIdPutRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        competitorsCompetitorIdPut(requestParameters: CompetitorsApiCompetitorsCompetitorIdPutRequest, options?: RawAxiosRequestConfig): AxiosPromise<Competitor> {
            return localVarFp.competitorsCompetitorIdPut(requestParameters.competitorId, requestParameters.competitorUpdateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a list of competitors associated with the specified product.
         * @summary List competitors in a product
         * @param {CompetitorsApiProductsProductIdCompetitorsGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsProductIdCompetitorsGet(requestParameters: CompetitorsApiProductsProductIdCompetitorsGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<ProductsProductIdCompetitorsGet200Response> {
            return localVarFp.productsProductIdCompetitorsGet(requestParameters.productId, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds a new competitor to the specified product.
         * @summary Create a competitor
         * @param {CompetitorsApiProductsProductIdCompetitorsPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsProductIdCompetitorsPost(requestParameters: CompetitorsApiProductsProductIdCompetitorsPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<Competitor> {
            return localVarFp.productsProductIdCompetitorsPost(requestParameters.productId, requestParameters.competitorCreateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CompetitorsApi - interface
 * @export
 * @interface CompetitorsApi
 */
export interface CompetitorsApiInterface {
    /**
     * Removes the specified competitor.
     * @summary Delete a competitor
     * @param {CompetitorsApiCompetitorsCompetitorIdDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitorsApiInterface
     */
    competitorsCompetitorIdDelete(requestParameters: CompetitorsApiCompetitorsCompetitorIdDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * Retrieves details of the specified competitor.
     * @summary Get a specific competitor
     * @param {CompetitorsApiCompetitorsCompetitorIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitorsApiInterface
     */
    competitorsCompetitorIdGet(requestParameters: CompetitorsApiCompetitorsCompetitorIdGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<Competitor>;

    /**
     * Updates the details of the specified competitor.
     * @summary Update a competitor
     * @param {CompetitorsApiCompetitorsCompetitorIdPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitorsApiInterface
     */
    competitorsCompetitorIdPut(requestParameters: CompetitorsApiCompetitorsCompetitorIdPutRequest, options?: RawAxiosRequestConfig): AxiosPromise<Competitor>;

    /**
     * Retrieves a list of competitors associated with the specified product.
     * @summary List competitors in a product
     * @param {CompetitorsApiProductsProductIdCompetitorsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitorsApiInterface
     */
    productsProductIdCompetitorsGet(requestParameters: CompetitorsApiProductsProductIdCompetitorsGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<ProductsProductIdCompetitorsGet200Response>;

    /**
     * Adds a new competitor to the specified product.
     * @summary Create a competitor
     * @param {CompetitorsApiProductsProductIdCompetitorsPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitorsApiInterface
     */
    productsProductIdCompetitorsPost(requestParameters: CompetitorsApiProductsProductIdCompetitorsPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<Competitor>;

}

/**
 * Request parameters for competitorsCompetitorIdDelete operation in CompetitorsApi.
 * @export
 * @interface CompetitorsApiCompetitorsCompetitorIdDeleteRequest
 */
export interface CompetitorsApiCompetitorsCompetitorIdDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof CompetitorsApiCompetitorsCompetitorIdDelete
     */
    readonly competitorId: string
}

/**
 * Request parameters for competitorsCompetitorIdGet operation in CompetitorsApi.
 * @export
 * @interface CompetitorsApiCompetitorsCompetitorIdGetRequest
 */
export interface CompetitorsApiCompetitorsCompetitorIdGetRequest {
    /**
     * 
     * @type {string}
     * @memberof CompetitorsApiCompetitorsCompetitorIdGet
     */
    readonly competitorId: string
}

/**
 * Request parameters for competitorsCompetitorIdPut operation in CompetitorsApi.
 * @export
 * @interface CompetitorsApiCompetitorsCompetitorIdPutRequest
 */
export interface CompetitorsApiCompetitorsCompetitorIdPutRequest {
    /**
     * 
     * @type {string}
     * @memberof CompetitorsApiCompetitorsCompetitorIdPut
     */
    readonly competitorId: string

    /**
     * 
     * @type {CompetitorUpdateRequest}
     * @memberof CompetitorsApiCompetitorsCompetitorIdPut
     */
    readonly competitorUpdateRequest: CompetitorUpdateRequest
}

/**
 * Request parameters for productsProductIdCompetitorsGet operation in CompetitorsApi.
 * @export
 * @interface CompetitorsApiProductsProductIdCompetitorsGetRequest
 */
export interface CompetitorsApiProductsProductIdCompetitorsGetRequest {
    /**
     * 
     * @type {string}
     * @memberof CompetitorsApiProductsProductIdCompetitorsGet
     */
    readonly productId: string
}

/**
 * Request parameters for productsProductIdCompetitorsPost operation in CompetitorsApi.
 * @export
 * @interface CompetitorsApiProductsProductIdCompetitorsPostRequest
 */
export interface CompetitorsApiProductsProductIdCompetitorsPostRequest {
    /**
     * 
     * @type {string}
     * @memberof CompetitorsApiProductsProductIdCompetitorsPost
     */
    readonly productId: string

    /**
     * 
     * @type {CompetitorCreateRequest}
     * @memberof CompetitorsApiProductsProductIdCompetitorsPost
     */
    readonly competitorCreateRequest: CompetitorCreateRequest
}

/**
 * CompetitorsApi - object-oriented interface
 * @export
 * @class CompetitorsApi
 * @extends {BaseAPI}
 */
export class CompetitorsApi extends BaseAPI implements CompetitorsApiInterface {
    /**
     * Removes the specified competitor.
     * @summary Delete a competitor
     * @param {CompetitorsApiCompetitorsCompetitorIdDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitorsApi
     */
    public competitorsCompetitorIdDelete(requestParameters: CompetitorsApiCompetitorsCompetitorIdDeleteRequest, options?: RawAxiosRequestConfig) {
        return CompetitorsApiFp(this.configuration).competitorsCompetitorIdDelete(requestParameters.competitorId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves details of the specified competitor.
     * @summary Get a specific competitor
     * @param {CompetitorsApiCompetitorsCompetitorIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitorsApi
     */
    public competitorsCompetitorIdGet(requestParameters: CompetitorsApiCompetitorsCompetitorIdGetRequest, options?: RawAxiosRequestConfig) {
        return CompetitorsApiFp(this.configuration).competitorsCompetitorIdGet(requestParameters.competitorId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates the details of the specified competitor.
     * @summary Update a competitor
     * @param {CompetitorsApiCompetitorsCompetitorIdPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitorsApi
     */
    public competitorsCompetitorIdPut(requestParameters: CompetitorsApiCompetitorsCompetitorIdPutRequest, options?: RawAxiosRequestConfig) {
        return CompetitorsApiFp(this.configuration).competitorsCompetitorIdPut(requestParameters.competitorId, requestParameters.competitorUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a list of competitors associated with the specified product.
     * @summary List competitors in a product
     * @param {CompetitorsApiProductsProductIdCompetitorsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitorsApi
     */
    public productsProductIdCompetitorsGet(requestParameters: CompetitorsApiProductsProductIdCompetitorsGetRequest, options?: RawAxiosRequestConfig) {
        return CompetitorsApiFp(this.configuration).productsProductIdCompetitorsGet(requestParameters.productId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Adds a new competitor to the specified product.
     * @summary Create a competitor
     * @param {CompetitorsApiProductsProductIdCompetitorsPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompetitorsApi
     */
    public productsProductIdCompetitorsPost(requestParameters: CompetitorsApiProductsProductIdCompetitorsPostRequest, options?: RawAxiosRequestConfig) {
        return CompetitorsApiFp(this.configuration).productsProductIdCompetitorsPost(requestParameters.productId, requestParameters.competitorCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

