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
 * @interface ProductsListResponseProductsInner
 */
export interface ProductsListResponseProductsInner {
    /**
     * Unique identifier of the product
     * @type {string}
     * @memberof ProductsListResponseProductsInner
     */
    'id'?: string;
    /**
     * Reference prefix of the product
     * @type {string}
     * @memberof ProductsListResponseProductsInner
     */
    'reference_prefix'?: string;
    /**
     * Name of the product
     * @type {string}
     * @memberof ProductsListResponseProductsInner
     */
    'name'?: string;
    /**
     * Whether the product is a product line
     * @type {boolean}
     * @memberof ProductsListResponseProductsInner
     */
    'product_line'?: boolean;
    /**
     * Creation date of the product
     * @type {string}
     * @memberof ProductsListResponseProductsInner
     */
    'created_at'?: string;
    /**
     * Type of workspace (product_workspace, marketing_workspace, etc.)
     * @type {string}
     * @memberof ProductsListResponseProductsInner
     */
    'workspace_type'?: string;
    /**
     * URL to view the product in the Aha! web application
     * @type {string}
     * @memberof ProductsListResponseProductsInner
     */
    'url'?: string;
}

