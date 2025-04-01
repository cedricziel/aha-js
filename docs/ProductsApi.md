# ProductsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**productsGet**](#productsget) | **GET** /products | List products in the account|
|[**productsProductIdCommentsGet**](#productsproductidcommentsget) | **GET** /products/{product_id}/comments | List comments in a product|

# **productsGet**
> ProductsListResponse productsGet()

Retrieves a list of all products in the account.

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let updatedSince: string; //UTC timestamp (in ISO8601 format). If provided, only products updated after the timestamp will be returned. (optional) (default to undefined)

const { status, data } = await apiInstance.productsGet(
    updatedSince
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatedSince** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only products updated after the timestamp will be returned. | (optional) defaults to undefined|


### Return type

**ProductsListResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsProductIdCommentsGet**
> EpicsEpicIdCommentsGet200Response productsProductIdCommentsGet()

Retrieves a list of comments associated with the specified product.

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.productsProductIdCommentsGet(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**EpicsEpicIdCommentsGet200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of comments |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

