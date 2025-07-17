# StrategicModelsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**strategicModelsGet**](#strategicmodelsget) | **GET** /strategic_models | List strategic models|
|[**strategicModelsIdDelete**](#strategicmodelsiddelete) | **DELETE** /strategic_models/{id} | Delete a strategic model|
|[**strategicModelsIdGet**](#strategicmodelsidget) | **GET** /strategic_models/{id} | Get a strategic model|
|[**strategicModelsIdPut**](#strategicmodelsidput) | **PUT** /strategic_models/{id} | Update a strategic model|
|[**strategicModelsPost**](#strategicmodelspost) | **POST** /strategic_models | Create a strategic model|

# **strategicModelsGet**
> StrategicModelsListResponse strategicModelsGet()

Retrieves a list of all strategic models in the account.

### Example

```typescript
import {
    StrategicModelsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new StrategicModelsApi(configuration);

let q: string; //Search term to match against strategic model name. (optional) (default to undefined)
let type: 'swot' | 'porter_five_forces' | 'ansoff_matrix' | 'value_proposition_canvas' | 'business_model_canvas' | 'lean_canvas' | 'custom'; //Filter by strategic model type. (optional) (default to undefined)
let updatedSince: string; //UTC timestamp (in ISO8601 format). If provided, only strategic models updated after the timestamp will be returned. (optional) (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let perPage: number; //Number of strategic models per page. (optional) (default to 20)

const { status, data } = await apiInstance.strategicModelsGet(
    q,
    type,
    updatedSince,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Search term to match against strategic model name. | (optional) defaults to undefined|
| **type** | [**&#39;swot&#39; | &#39;porter_five_forces&#39; | &#39;ansoff_matrix&#39; | &#39;value_proposition_canvas&#39; | &#39;business_model_canvas&#39; | &#39;lean_canvas&#39; | &#39;custom&#39;**]**Array<&#39;swot&#39; &#124; &#39;porter_five_forces&#39; &#124; &#39;ansoff_matrix&#39; &#124; &#39;value_proposition_canvas&#39; &#124; &#39;business_model_canvas&#39; &#124; &#39;lean_canvas&#39; &#124; &#39;custom&#39;>** | Filter by strategic model type. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only strategic models updated after the timestamp will be returned. | (optional) defaults to undefined|
| **page** | [**number**] | Page number for pagination. | (optional) defaults to 1|
| **perPage** | [**number**] | Number of strategic models per page. | (optional) defaults to 20|


### Return type

**StrategicModelsListResponse**

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

# **strategicModelsIdDelete**
> strategicModelsIdDelete()

Deletes a specific strategic model by its ID.

### Example

```typescript
import {
    StrategicModelsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new StrategicModelsApi(configuration);

let id: string; //Numeric ID of the strategic model (default to undefined)

const { status, data } = await apiInstance.strategicModelsIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID of the strategic model | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Strategic model deleted |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Strategic model not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strategicModelsIdGet**
> StrategicModelGetResponse strategicModelsIdGet()

Retrieves a specific strategic model by its ID.

### Example

```typescript
import {
    StrategicModelsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new StrategicModelsApi(configuration);

let id: string; //Numeric ID of the strategic model (default to undefined)

const { status, data } = await apiInstance.strategicModelsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID of the strategic model | defaults to undefined|


### Return type

**StrategicModelGetResponse**

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
|**404** | Strategic model not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strategicModelsIdPut**
> StrategicModelGetResponse strategicModelsIdPut(strategicModelUpdateRequest)

Updates a specific strategic model by its ID.

### Example

```typescript
import {
    StrategicModelsApi,
    Configuration,
    StrategicModelUpdateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new StrategicModelsApi(configuration);

let id: string; //Numeric ID of the strategic model (default to undefined)
let strategicModelUpdateRequest: StrategicModelUpdateRequest; //

const { status, data } = await apiInstance.strategicModelsIdPut(
    id,
    strategicModelUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **strategicModelUpdateRequest** | **StrategicModelUpdateRequest**|  | |
| **id** | [**string**] | Numeric ID of the strategic model | defaults to undefined|


### Return type

**StrategicModelGetResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Strategic model updated |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Strategic model not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **strategicModelsPost**
> StrategicModelGetResponse strategicModelsPost(strategicModelCreateRequest)

Creates a new strategic model in the account.

### Example

```typescript
import {
    StrategicModelsApi,
    Configuration,
    StrategicModelCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new StrategicModelsApi(configuration);

let strategicModelCreateRequest: StrategicModelCreateRequest; //

const { status, data } = await apiInstance.strategicModelsPost(
    strategicModelCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **strategicModelCreateRequest** | **StrategicModelCreateRequest**|  | |


### Return type

**StrategicModelGetResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Strategic model created |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

