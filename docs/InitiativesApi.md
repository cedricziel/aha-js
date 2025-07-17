# InitiativesApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**initiativesCreate**](#initiativescreate) | **POST** /products/{product_id}/initiatives | Create an initiative|
|[**initiativesGet**](#initiativesget) | **GET** /initiatives/{id} | Get a specific initiative|
|[**initiativesInitiativeIdCommentsGet**](#initiativesinitiativeidcommentsget) | **GET** /initiatives/{initiative_id}/comments | List comments on an initiative|
|[**initiativesInitiativeIdEpicsGet**](#initiativesinitiativeidepicsget) | **GET** /initiatives/{initiative_id}/epics | List epics associated with an initiative|
|[**initiativesList**](#initiativeslist) | **GET** /initiatives | List initiatives|

# **initiativesCreate**
> InitiativeResponse initiativesCreate(initiativeCreateRequest)

Creates a new initiative for the specified product.

### Example

```typescript
import {
    InitiativesApi,
    Configuration,
    InitiativeCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new InitiativesApi(configuration);

let productId: string; //Numeric ID or key of the product (default to undefined)
let initiativeCreateRequest: InitiativeCreateRequest; //

const { status, data } = await apiInstance.initiativesCreate(
    productId,
    initiativeCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiativeCreateRequest** | **InitiativeCreateRequest**|  | |
| **productId** | [**string**] | Numeric ID or key of the product | defaults to undefined|


### Return type

**InitiativeResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Initiative created |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Product not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiativesGet**
> InitiativeResponse initiativesGet()

Retrieves the details of a specific initiative.

### Example

```typescript
import {
    InitiativesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new InitiativesApi(configuration);

let id: string; //Numeric ID of the initiative (default to undefined)

const { status, data } = await apiInstance.initiativesGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID of the initiative | defaults to undefined|


### Return type

**InitiativeResponse**

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
|**404** | Initiative not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiativesInitiativeIdCommentsGet**
> EpicsEpicIdCommentsGet200Response initiativesInitiativeIdCommentsGet()

Retrieves a list of comments associated with the specified initiative.

### Example

```typescript
import {
    InitiativesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new InitiativesApi(configuration);

let initiativeId: string; // (default to undefined)

const { status, data } = await apiInstance.initiativesInitiativeIdCommentsGet(
    initiativeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiativeId** | [**string**] |  | defaults to undefined|


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

# **initiativesInitiativeIdEpicsGet**
> ProductsProductIdEpicsGet200Response initiativesInitiativeIdEpicsGet()

Retrieves a list of epics associated with the specified initiative.

### Example

```typescript
import {
    InitiativesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new InitiativesApi(configuration);

let initiativeId: string; //Numeric ID or key of the initiative (default to undefined)

const { status, data } = await apiInstance.initiativesInitiativeIdEpicsGet(
    initiativeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiativeId** | [**string**] | Numeric ID or key of the initiative | defaults to undefined|


### Return type

**ProductsProductIdEpicsGet200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of epics |  -  |
|**404** | Initiative not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiativesList**
> InitiativesListResponse initiativesList()

Retrieves a list of all initiatives in the account.

### Example

```typescript
import {
    InitiativesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new InitiativesApi(configuration);

let q: string; //Search term to match against initiative name. (optional) (default to undefined)
let updatedSince: string; //UTC timestamp (in ISO8601 format). If provided, only initiatives updated after the timestamp will be returned. (optional) (default to undefined)
let assignedToUser: string; //ID or email address of a user. If provided, returns only initiatives assigned to that user. (optional) (default to undefined)
let onlyActive: boolean; //When true, returns only active initiatives. (optional) (default to undefined)

const { status, data } = await apiInstance.initiativesList(
    q,
    updatedSince,
    assignedToUser,
    onlyActive
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Search term to match against initiative name. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only initiatives updated after the timestamp will be returned. | (optional) defaults to undefined|
| **assignedToUser** | [**string**] | ID or email address of a user. If provided, returns only initiatives assigned to that user. | (optional) defaults to undefined|
| **onlyActive** | [**boolean**] | When true, returns only active initiatives. | (optional) defaults to undefined|


### Return type

**InitiativesListResponse**

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

