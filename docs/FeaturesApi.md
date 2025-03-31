# FeaturesApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**featuresIdCustomFieldsPut**](#featuresidcustomfieldsput) | **PUT** /features/{id}/custom_fields | Update a feature\&#39;s custom fields|
|[**featuresIdCustomFieldsTagPut**](#featuresidcustomfieldstagput) | **PUT** /features/{id}/custom_fields/tag | Update a feature\&#39;s custom fields with tag-like value|
|[**featuresIdCustomFieldsWorksheetPut**](#featuresidcustomfieldsworksheetput) | **PUT** /features/{id}/custom_fields/worksheet | Update a feature\&#39;s custom worksheet fields|
|[**featuresIdDelete**](#featuresiddelete) | **DELETE** /features/{id} | Delete a feature|
|[**featuresIdEpicPut**](#featuresidepicput) | **PUT** /features/{id}/epic | Update a feature\&#39;s epic|
|[**featuresIdGet**](#featuresidget) | **GET** /features/{id} | Get a specific feature|
|[**featuresIdGoalsPut**](#featuresidgoalsput) | **PUT** /features/{id}/goals | Update a feature\&#39;s goals|
|[**featuresIdProgressPut**](#featuresidprogressput) | **PUT** /features/{id}/progress | Update a feature\&#39;s progress|
|[**featuresIdPut**](#featuresidput) | **PUT** /features/{id} | Update a feature|
|[**releasesReleaseIdFeaturesGet**](#releasesreleaseidfeaturesget) | **GET** /releases/{release_id}/features | List features in a release|
|[**releasesReleaseIdFeaturesPost**](#releasesreleaseidfeaturespost) | **POST** /releases/{release_id}/features | Create a feature|

# **featuresIdCustomFieldsPut**
> Feature featuresIdCustomFieldsPut(featuresIdCustomFieldsPutRequest)

Updates the custom fields of an existing feature. 

### Example

```typescript
import {
    FeaturesApi,
    Configuration,
    FeaturesIdCustomFieldsPutRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new FeaturesApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)
let featuresIdCustomFieldsPutRequest: FeaturesIdCustomFieldsPutRequest; //

const { status, data } = await apiInstance.featuresIdCustomFieldsPut(
    id,
    featuresIdCustomFieldsPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featuresIdCustomFieldsPutRequest** | **FeaturesIdCustomFieldsPutRequest**|  | |
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
|**200** | Feature custom fields updated |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Feature not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featuresIdCustomFieldsTagPut**
> Feature featuresIdCustomFieldsTagPut(featuresIdCustomFieldsTagPutRequest)

Updates the custom fields of an existing feature with tag-like values. 

### Example

```typescript
import {
    FeaturesApi,
    Configuration,
    FeaturesIdCustomFieldsTagPutRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new FeaturesApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)
let featuresIdCustomFieldsTagPutRequest: FeaturesIdCustomFieldsTagPutRequest; //

const { status, data } = await apiInstance.featuresIdCustomFieldsTagPut(
    id,
    featuresIdCustomFieldsTagPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featuresIdCustomFieldsTagPutRequest** | **FeaturesIdCustomFieldsTagPutRequest**|  | |
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
|**200** | Feature custom fields with tag-like value updated |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Feature not found |  -  |

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

# **featuresIdDelete**
> featuresIdDelete()

Deletes the specified feature.

### Example

```typescript
import {
    FeaturesApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new FeaturesApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)

const { status, data } = await apiInstance.featuresIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the feature | defaults to undefined|


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
|**204** | No Content |  -  |
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

# **featuresIdGet**
> FeatureGetResponse featuresIdGet()

Retrieves the details of a specific feature.

### Example

```typescript
import {
    FeaturesApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new FeaturesApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)

const { status, data } = await apiInstance.featuresIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the feature | defaults to undefined|


### Return type

**FeatureGetResponse**

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

# **featuresIdPut**
> Feature featuresIdPut(featuresIdPutRequest)

Updates an existing feature with the provided attributes. 

### Example

```typescript
import {
    FeaturesApi,
    Configuration,
    FeaturesIdPutRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new FeaturesApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)
let featuresIdPutRequest: FeaturesIdPutRequest; //

const { status, data } = await apiInstance.featuresIdPut(
    id,
    featuresIdPutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featuresIdPutRequest** | **FeaturesIdPutRequest**|  | |
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
|**200** | Feature updated |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Feature not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasesReleaseIdFeaturesGet**
> FeaturesListResponse releasesReleaseIdFeaturesGet()

Returns a list of features associated with a specific release. 

### Example

```typescript
import {
    FeaturesApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new FeaturesApi(configuration);

let releaseId: string; //Numeric ID or key of the release (default to undefined)
let q: string; //Search term to match against feature name (optional) (default to undefined)
let updatedSince: string; //UTC timestamp (in ISO8601 format). If provided, only features updated after the timestamp will be returned (optional) (default to undefined)
let tag: string; //String tag value. If provided, only features with the associated tag will be returned (optional) (default to undefined)
let assignedToUser: string; //ID or email address of a user. If provided, only features assigned to that user will be returned (optional) (default to undefined)

const { status, data } = await apiInstance.releasesReleaseIdFeaturesGet(
    releaseId,
    q,
    updatedSince,
    tag,
    assignedToUser
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releaseId** | [**string**] | Numeric ID or key of the release | defaults to undefined|
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
|**200** | A list of features in the release |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Release not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasesReleaseIdFeaturesPost**
> Feature releasesReleaseIdFeaturesPost(featureCreateRequest)

Adds a new feature to a specified release. Features belong to releases. This means that if you want to create one then you must scope it to a release.

### Example

```typescript
import {
    FeaturesApi,
    Configuration,
    FeatureCreateRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new FeaturesApi(configuration);

let releaseId: string; //Numeric ID or key of the release (default to undefined)
let featureCreateRequest: FeatureCreateRequest; //

const { status, data } = await apiInstance.releasesReleaseIdFeaturesPost(
    releaseId,
    featureCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featureCreateRequest** | **FeatureCreateRequest**|  | |
| **releaseId** | [**string**] | Numeric ID or key of the release | defaults to undefined|


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
|**200** | Feature created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

