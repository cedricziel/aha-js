# ReleasePhasesApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**commentsGetReleasePhase**](#commentsgetreleasephase) | **GET** /release_phases/{release_phase_id}/comments | List comments on a release phase|
|[**releasePhasesCreate**](#releasephasescreate) | **POST** /release_phases | Create a release phase|
|[**releasePhasesDelete**](#releasephasesdelete) | **DELETE** /release_phases/{id} | Delete a release phase|
|[**releasePhasesGet**](#releasephasesget) | **GET** /release_phases/{id} | Get a specific release phase|
|[**releasePhasesList**](#releasephaseslist) | **GET** /release_phases | List release phases in the account|
|[**releasePhasesUpdate**](#releasephasesupdate) | **PUT** /release_phases/{id} | Update a release phase|

# **commentsGetReleasePhase**
> CommentsGetEpic200Response commentsGetReleasePhase()

Retrieves a list of comments associated with the specified release phase.

### Example

```typescript
import {
    ReleasePhasesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasePhasesApi(configuration);

let releasePhaseId: string; // (default to undefined)

const { status, data } = await apiInstance.commentsGetReleasePhase(
    releasePhaseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releasePhaseId** | [**string**] |  | defaults to undefined|


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
|**404** | Release phase not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasePhasesCreate**
> ReleasePhasesCreate201Response releasePhasesCreate(releasePhaseCreateRequest)

Creates a new release phase.

### Example

```typescript
import {
    ReleasePhasesApi,
    Configuration,
    ReleasePhaseCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasePhasesApi(configuration);

let releasePhaseCreateRequest: ReleasePhaseCreateRequest; //

const { status, data } = await apiInstance.releasePhasesCreate(
    releasePhaseCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releasePhaseCreateRequest** | **ReleasePhaseCreateRequest**|  | |


### Return type

**ReleasePhasesCreate201Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Release phase created successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasePhasesDelete**
> releasePhasesDelete()

Deletes the specified release phase.

### Example

```typescript
import {
    ReleasePhasesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasePhasesApi(configuration);

let id: string; //Numeric ID of the release phase (default to undefined)

const { status, data } = await apiInstance.releasePhasesDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID of the release phase | defaults to undefined|


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
|**204** | Release phase deleted successfully |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Release phase not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasePhasesGet**
> ReleasePhasesCreate201Response releasePhasesGet()

Retrieves details of a specific release phase.

### Example

```typescript
import {
    ReleasePhasesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasePhasesApi(configuration);

let id: string; //Numeric ID of the release phase (default to undefined)

const { status, data } = await apiInstance.releasePhasesGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID of the release phase | defaults to undefined|


### Return type

**ReleasePhasesCreate201Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release phase details |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Release phase not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasePhasesList**
> ReleasePhasesList200Response releasePhasesList()

Retrieves a list of release phases in the account.

### Example

```typescript
import {
    ReleasePhasesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasePhasesApi(configuration);

const { status, data } = await apiInstance.releasePhasesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ReleasePhasesList200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of release phases |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasePhasesUpdate**
> ReleasePhasesCreate201Response releasePhasesUpdate(releasePhaseUpdateRequest)

Updates the specified release phase.

### Example

```typescript
import {
    ReleasePhasesApi,
    Configuration,
    ReleasePhaseUpdateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasePhasesApi(configuration);

let id: string; //Numeric ID of the release phase (default to undefined)
let releasePhaseUpdateRequest: ReleasePhaseUpdateRequest; //

const { status, data } = await apiInstance.releasePhasesUpdate(
    id,
    releasePhaseUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releasePhaseUpdateRequest** | **ReleasePhaseUpdateRequest**|  | |
| **id** | [**string**] | Numeric ID of the release phase | defaults to undefined|


### Return type

**ReleasePhasesCreate201Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release phase updated successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Release phase not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

