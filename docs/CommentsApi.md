# CommentsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**commentsCreateEpic**](#commentscreateepic) | **POST** /epics/{epic_id}/comments | Create a comment on an epic|
|[**commentsCreateFeature**](#commentscreatefeature) | **POST** /features/{feature_id}/comments | Create a comment on a feature|
|[**commentsCreateIdea**](#commentscreateidea) | **POST** /ideas/{idea_id}/comments | Create a comment on an idea|
|[**commentsCreateInitiative**](#commentscreateinitiative) | **POST** /initiatives/{initiative_id}/comments | Create a comment on an initiative|
|[**commentsCreateRequirement**](#commentscreaterequirement) | **POST** /requirements/{requirement_id}/comments | Create a comment on a requirement|
|[**commentsGetEpic**](#commentsgetepic) | **GET** /epics/{epic_id}/comments | List comments on an epic|
|[**commentsGetGoal**](#commentsgetgoal) | **GET** /goals/{goal_id}/comments | List comments on a goal|
|[**commentsGetIdea**](#commentsgetidea) | **GET** /ideas/{idea_id}/comments | List comments on an idea|
|[**commentsGetInitiative**](#commentsgetinitiative) | **GET** /initiatives/{initiative_id}/comments | List comments on an initiative|
|[**commentsGetProduct**](#commentsgetproduct) | **GET** /products/{product_id}/comments | List comments in a product|
|[**commentsGetRelease**](#commentsgetrelease) | **GET** /releases/{release_id}/comments | List comments on a release|
|[**commentsGetReleasePhase**](#commentsgetreleasephase) | **GET** /release_phases/{release_phase_id}/comments | List comments on a release phase|
|[**commentsGetRequirement**](#commentsgetrequirement) | **GET** /requirements/{requirement_id}/comments | List comments on a requirement|
|[**commentsGetTodo**](#commentsgettodo) | **GET** /todos/{todo_id}/comments | List comments on a to-do|

# **commentsCreateEpic**
> Comment commentsCreateEpic(commentCreateRequest)

Adds a new comment to the specified epic.

### Example

```typescript
import {
    CommentsApi,
    Configuration,
    CommentCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let epicId: string; // (default to undefined)
let commentCreateRequest: CommentCreateRequest; //

const { status, data } = await apiInstance.commentsCreateEpic(
    epicId,
    commentCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentCreateRequest** | **CommentCreateRequest**|  | |
| **epicId** | [**string**] |  | defaults to undefined|


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
|**404** | Epic not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsCreateFeature**
> Comment commentsCreateFeature(commentCreateRequest)

Adds a new comment to the specified feature.

### Example

```typescript
import {
    CommentsApi,
    Configuration,
    CommentCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let featureId: string; // (default to undefined)
let commentCreateRequest: CommentCreateRequest; //

const { status, data } = await apiInstance.commentsCreateFeature(
    featureId,
    commentCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentCreateRequest** | **CommentCreateRequest**|  | |
| **featureId** | [**string**] |  | defaults to undefined|


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
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Feature not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsCreateIdea**
> Comment commentsCreateIdea(commentCreateRequest)

Adds a new comment to the specified idea.

### Example

```typescript
import {
    CommentsApi,
    Configuration,
    CommentCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let ideaId: string; // (default to undefined)
let commentCreateRequest: CommentCreateRequest; //

const { status, data } = await apiInstance.commentsCreateIdea(
    ideaId,
    commentCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentCreateRequest** | **CommentCreateRequest**|  | |
| **ideaId** | [**string**] |  | defaults to undefined|


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
|**404** | Idea not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsCreateInitiative**
> Comment commentsCreateInitiative(commentCreateRequest)

Adds a new comment to the specified initiative.

### Example

```typescript
import {
    CommentsApi,
    Configuration,
    CommentCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let initiativeId: string; // (default to undefined)
let commentCreateRequest: CommentCreateRequest; //

const { status, data } = await apiInstance.commentsCreateInitiative(
    initiativeId,
    commentCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentCreateRequest** | **CommentCreateRequest**|  | |
| **initiativeId** | [**string**] |  | defaults to undefined|


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
|**404** | Initiative not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsCreateRequirement**
> Comment commentsCreateRequirement(commentCreateRequest)

Adds a new comment to the specified requirement.

### Example

```typescript
import {
    CommentsApi,
    Configuration,
    CommentCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

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

# **commentsGetEpic**
> CommentsGetEpic200Response commentsGetEpic()

Retrieves a list of comments associated with the specified epic.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let epicId: string; // (default to undefined)

const { status, data } = await apiInstance.commentsGetEpic(
    epicId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **epicId** | [**string**] |  | defaults to undefined|


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
|**404** | Epic not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsGetGoal**
> CommentsGetEpic200Response commentsGetGoal()

Retrieves a list of comments associated with the specified goal.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let goalId: string; // (default to undefined)

const { status, data } = await apiInstance.commentsGetGoal(
    goalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goalId** | [**string**] |  | defaults to undefined|


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
|**404** | Goal not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsGetIdea**
> CommentsGetEpic200Response commentsGetIdea()

Retrieves a list of comments associated with the specified idea.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let ideaId: string; // (default to undefined)

const { status, data } = await apiInstance.commentsGetIdea(
    ideaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaId** | [**string**] |  | defaults to undefined|


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
|**404** | Idea not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsGetInitiative**
> CommentsGetEpic200Response commentsGetInitiative()

Retrieves a list of comments associated with the specified initiative.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let initiativeId: string; // (default to undefined)

const { status, data } = await apiInstance.commentsGetInitiative(
    initiativeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiativeId** | [**string**] |  | defaults to undefined|


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
|**404** | Initiative not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsGetProduct**
> CommentsGetEpic200Response commentsGetProduct()

Retrieves a list of comments associated with the specified product.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.commentsGetProduct(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


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
|**404** | Product not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsGetRelease**
> CommentsGetEpic200Response commentsGetRelease()

Retrieves a list of comments associated with the specified release.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let releaseId: string; // (default to undefined)

const { status, data } = await apiInstance.commentsGetRelease(
    releaseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releaseId** | [**string**] |  | defaults to undefined|


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
|**404** | Release not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsGetReleasePhase**
> CommentsGetEpic200Response commentsGetReleasePhase()

Retrieves a list of comments associated with the specified release phase.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

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

# **commentsGetRequirement**
> CommentsGetEpic200Response commentsGetRequirement()

Retrieves a list of comments associated with the specified requirement.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

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

# **commentsGetTodo**
> CommentsGetEpic200Response commentsGetTodo()

Retrieves a list of comments associated with the specified to-do.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let todoId: string; // (default to undefined)

const { status, data } = await apiInstance.commentsGetTodo(
    todoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **todoId** | [**string**] |  | defaults to undefined|


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
|**404** | To-do not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

