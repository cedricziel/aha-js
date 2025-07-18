# RequirementsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**commentsCreateRequirement**](#commentscreaterequirement) | **POST** /requirements/{requirement_id}/comments | Create a comment on a requirement|
|[**commentsGetRequirement**](#commentsgetrequirement) | **GET** /requirements/{requirement_id}/comments | List comments on a requirement|

# **commentsCreateRequirement**
> Comment commentsCreateRequirement(commentCreateRequest)

Adds a new comment to the specified requirement.

### Example

```typescript
import {
    RequirementsApi,
    Configuration,
    CommentCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new RequirementsApi(configuration);

let requirementId: string; // (default to undefined)
let commentCreateRequest: CommentCreateRequest; //

const { status, data } = await apiInstance.commentsCreateRequirement(
    requirementId,
    commentCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentCreateRequest** | **CommentCreateRequest**|  | |
| **requirementId** | [**string**] |  | defaults to undefined|


### Return type

**Comment**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Comment created |  -  |
|**400** | Invalid input |  -  |
|**404** | Requirement not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsGetRequirement**
> CommentsGetEpic200Response commentsGetRequirement()

Retrieves a list of comments associated with the specified requirement.

### Example

```typescript
import {
    RequirementsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new RequirementsApi(configuration);

let requirementId: string; // (default to undefined)

const { status, data } = await apiInstance.commentsGetRequirement(
    requirementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requirementId** | [**string**] |  | defaults to undefined|


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
|**400** | Invalid input |  -  |
|**404** | Requirement not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

