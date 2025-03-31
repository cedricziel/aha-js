# IdeasApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ideasIdeaIdCommentsGet**](#ideasideaidcommentsget) | **GET** /ideas/{idea_id}/comments | List comments on an idea|

# **ideasIdeaIdCommentsGet**
> EpicsEpicIdCommentsGet200Response ideasIdeaIdCommentsGet()

Retrieves a list of comments associated with the specified idea.

### Example

```typescript
import {
    IdeasApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let ideaId: string; // (default to undefined)

const { status, data } = await apiInstance.ideasIdeaIdCommentsGet(
    ideaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaId** | [**string**] |  | defaults to undefined|


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

