# ReleasePhasesApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**commentsGetReleasePhase**](#commentsgetreleasephase) | **GET** /release_phases/{release_phase_id}/comments | List comments on a release phase|

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

