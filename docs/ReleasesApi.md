# ReleasesApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**releasesReleaseIdCommentsGet**](#releasesreleaseidcommentsget) | **GET** /releases/{release_id}/comments | List comments on a release|

# **releasesReleaseIdCommentsGet**
> EpicsEpicIdCommentsGet200Response releasesReleaseIdCommentsGet()

Retrieves a list of comments associated with the specified release.

### Example

```typescript
import {
    ReleasesApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasesApi(configuration);

let releaseId: string; // (default to undefined)

const { status, data } = await apiInstance.releasesReleaseIdCommentsGet(
    releaseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releaseId** | [**string**] |  | defaults to undefined|


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

