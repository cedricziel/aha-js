# ProductsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**commentsGetProduct**](#commentsgetproduct) | **GET** /products/{product_id}/comments | List comments in a product|
|[**productsGet**](#productsget) | **GET** /products/{id} | Get a specific product|
|[**productsList**](#productslist) | **GET** /products | List products in the account|

# **commentsGetProduct**
> CommentsGetEpic200Response commentsGetProduct()

Retrieves a list of comments associated with the specified product.

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.commentsGetProduct(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**CommentsGetEpic200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of comments |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Product not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsGet**
> ProductGetResponse productsGet()

Retrieves the details of a specific product.

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let id: string; //Numeric ID or key of the product (default to undefined)

const { status, data } = await apiInstance.productsGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the product | defaults to undefined|


### Return type

**ProductGetResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Product details |  -  |
|**401** | Unauthorized - Invalid or missing authentication |  -  |
|**403** | Forbidden - Insufficient permissions |  -  |
|**404** | Product not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsList**
> ProductsListResponse productsList()

Retrieves a list of all products in the account.

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let page: number; //Page number for pagination (starts at 1) (optional) (default to 1)
let perPage: number; //Number of items per page (max 200) (optional) (default to 30)
let fields: string; //Comma-separated list of fields to include in response for customization (optional) (default to undefined)
let updatedSince: string; //UTC timestamp (in ISO8601 format). If provided, only products updated after the timestamp will be returned. (optional) (default to undefined)

const { status, data } = await apiInstance.productsList(
    page,
    perPage,
    fields,
    updatedSince
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number for pagination (starts at 1) | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page (max 200) | (optional) defaults to 30|
| **fields** | [**string**] | Comma-separated list of fields to include in response for customization | (optional) defaults to undefined|
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
|**429** | Rate limit exceeded - Too many requests |  -  |
|**504** | Gateway timeout - Request timed out |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

