# FeaturesApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**featuresGet**](#featuresget) | **GET** /features | List features|
|[**featuresIdCustomFieldsWorksheetPut**](#featuresidcustomfieldsworksheetput) | **PUT** /features/{id}/custom_fields/worksheet | Update a feature\&#39;s custom worksheet fields|
|[**featuresIdEpicPut**](#featuresidepicput) | **PUT** /features/{id}/epic | Update a feature\&#39;s epic|
|[**featuresIdGoalsPut**](#featuresidgoalsput) | **PUT** /features/{id}/goals | Update a feature\&#39;s goals|
|[**featuresIdProgressPut**](#featuresidprogressput) | **PUT** /features/{id}/progress | Update a feature\&#39;s progress|

# **featuresGet**
> FeaturesListResponse featuresGet()

Returns a list of features. You can filter by various criteria like name, modification date, tag, or assignee. Features belong to releases, so they are scoped to a release. 

### Example

```typescript
import {
    FeaturesApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new FeaturesApi(configuration);

let q: string; //Search term to match against feature name (optional) (default to undefined)
let updatedSince: string; //UTC timestamp (in ISO8601 format). If provided, only features updated after the timestamp will be returned (optional) (default to undefined)
let tag: string; //String tag value. If provided, only features with the associated tag will be returned (optional) (default to undefined)
let assignedToUser: string; //ID or email address of a user. If provided, only features assigned to that user will be returned (optional) (default to undefined)

const { status, data } = await apiInstance.featuresGet(
    q,
    updatedSince,
    tag,
    assignedToUser
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Search term to match against feature name | (optional) defaults to undefined|
| **updatedSince** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only features updated after the timestamp will be returned | (optional) defaults to undefined|
| **tag** | [**string**] | String tag value. If provided, only features with the associated tag will be returned | (optional) defaults to undefined|
| **assignedToUser** | [**string**] | ID or email address of a user. If provided, only features assigned to that user will be returned | (optional) defaults to undefined|


### Return type

**FeaturesListResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of features |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featuresIdCustomFieldsWorksheetPut**
> Feature featuresIdCustomFieldsWorksheetPut(featuresIdCustomFieldsWorksheetPutRequest)

Updates the custom worksheet fields of an existing feature. 

### Example

```typescript
import {
    FeaturesApi,
    Configuration,
    FeaturesIdCustomFieldsWorksheetPutRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new FeaturesApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)
let featuresIdCustomFieldsWorksheetPutRequest: FeaturesIdCustomFieldsWorksheetPutRequest; //

const { status, data } = await apiInstance.featuresIdCustomFieldsWorksheetPut(
    id,
    featuresIdCustomFieldsWorksheetPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featuresIdCustomFieldsWorksheetPutRequest** | **FeaturesIdCustomFieldsWorksheetPutRequest**|  | |
| **id** | [**string**] | Numeric ID or key of the feature | defaults to undefined|


### Return type

**Feature**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Feature custom worksheet fields updated |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Feature not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featuresIdEpicPut**
> Feature featuresIdEpicPut(featuresIdEpicPutRequest)

Updates the epic of an existing feature. 

### Example

```typescript
import {
    FeaturesApi,
    Configuration,
    FeaturesIdEpicPutRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new FeaturesApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)
let featuresIdEpicPutRequest: FeaturesIdEpicPutRequest; //

const { status, data } = await apiInstance.featuresIdEpicPut(
    id,
    featuresIdEpicPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featuresIdEpicPutRequest** | **FeaturesIdEpicPutRequest**|  | |
| **id** | [**string**] | Numeric ID or key of the feature | defaults to undefined|


### Return type

**Feature**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Feature epic updated |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Feature not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featuresIdGoalsPut**
> Feature featuresIdGoalsPut(featuresIdGoalsPutRequest)

Updates the goals of an existing feature. 

### Example

```typescript
import {
    FeaturesApi,
    Configuration,
    FeaturesIdGoalsPutRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new FeaturesApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)
let featuresIdGoalsPutRequest: FeaturesIdGoalsPutRequest; //

const { status, data } = await apiInstance.featuresIdGoalsPut(
    id,
    featuresIdGoalsPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featuresIdGoalsPutRequest** | **FeaturesIdGoalsPutRequest**|  | |
| **id** | [**string**] | Numeric ID or key of the feature | defaults to undefined|


### Return type

**Feature**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Feature goals updated |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Feature not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featuresIdProgressPut**
> Feature featuresIdProgressPut(featuresIdProgressPutRequest)

Updates the progress of an existing feature. May only be set when the progress_source is manual. 

### Example

```typescript
import {
    FeaturesApi,
    Configuration,
    FeaturesIdProgressPutRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new FeaturesApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)
let featuresIdProgressPutRequest: FeaturesIdProgressPutRequest; //

const { status, data } = await apiInstance.featuresIdProgressPut(
    id,
    featuresIdProgressPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featuresIdProgressPutRequest** | **FeaturesIdProgressPutRequest**|  | |
| **id** | [**string**] | Numeric ID or key of the feature | defaults to undefined|


### Return type

**Feature**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Feature progress updated |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Feature not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

