# ToDosApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**todosTodoIdCommentsGet**](#todostodoidcommentsget) | **GET** /todos/{todo_id}/comments | List comments on a to-do|

# **todosTodoIdCommentsGet**
> EpicsEpicIdCommentsGet200Response todosTodoIdCommentsGet()

Retrieves a list of comments associated with the specified to-do.

### Example

```typescript
import {
    ToDosApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ToDosApi(configuration);

let todoId: string; // (default to undefined)

const { status, data } = await apiInstance.todosTodoIdCommentsGet(
    todoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **todoId** | [**string**] |  | defaults to undefined|


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

