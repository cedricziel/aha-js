# CommentsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**epicsEpicIdCommentsGet**](#epicsepicidcommentsget) | **GET** /epics/{epic_id}/comments | List comments on an epic|
|[**featuresFeatureIdCommentsPost**](#featuresfeatureidcommentspost) | **POST** /features/{feature_id}/comments | Create a comment on a feature|
|[**goalsGoalIdCommentsGet**](#goalsgoalidcommentsget) | **GET** /goals/{goal_id}/comments | List comments on a goal|
|[**ideasIdeaIdCommentsGet**](#ideasideaidcommentsget) | **GET** /ideas/{idea_id}/comments | List comments on an idea|
|[**initiativesInitiativeIdCommentsGet**](#initiativesinitiativeidcommentsget) | **GET** /initiatives/{initiative_id}/comments | List comments on an initiative|
|[**productsProductIdCommentsGet**](#productsproductidcommentsget) | **GET** /products/{product_id}/comments | List comments in a product|
|[**releasePhasesReleasePhaseIdCommentsGet**](#releasephasesreleasephaseidcommentsget) | **GET** /release_phases/{release_phase_id}/comments | List comments on a release phase|
|[**releasesReleaseIdCommentsGet**](#releasesreleaseidcommentsget) | **GET** /releases/{release_id}/comments | List comments on a release|
|[**requirementsRequirementIdCommentsGet**](#requirementsrequirementidcommentsget) | **GET** /requirements/{requirement_id}/comments | List comments on a requirement|
|[**todosTodoIdCommentsGet**](#todostodoidcommentsget) | **GET** /todos/{todo_id}/comments | List comments on a to-do|

# **epicsEpicIdCommentsGet**
> EpicsEpicIdCommentsGet200Response epicsEpicIdCommentsGet()

Retrieves a list of comments associated with the specified epic.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let epicId: string; // (default to undefined)

const { status, data } = await apiInstance.epicsEpicIdCommentsGet(
    epicId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **epicId** | [**string**] |  | defaults to undefined|


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
|**400** | Invalid input |  -  |
|**404** | Epic not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featuresFeatureIdCommentsPost**
> Comment featuresFeatureIdCommentsPost(commentCreateRequest)

Adds a new comment to the specified feature.

### Example

```typescript
import {
    CommentsApi,
    Configuration,
    CommentCreateRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let featureId: string; // (default to undefined)
let commentCreateRequest: CommentCreateRequest; //

const { status, data } = await apiInstance.featuresFeatureIdCommentsPost(
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **goalsGoalIdCommentsGet**
> EpicsEpicIdCommentsGet200Response goalsGoalIdCommentsGet()

Retrieves a list of comments associated with the specified goal.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let goalId: string; // (default to undefined)

const { status, data } = await apiInstance.goalsGoalIdCommentsGet(
    goalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goalId** | [**string**] |  | defaults to undefined|


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

# **ideasIdeaIdCommentsGet**
> EpicsEpicIdCommentsGet200Response ideasIdeaIdCommentsGet()

Retrieves a list of comments associated with the specified idea.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

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

# **initiativesInitiativeIdCommentsGet**
> EpicsEpicIdCommentsGet200Response initiativesInitiativeIdCommentsGet()

Retrieves a list of comments associated with the specified initiative.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let initiativeId: string; // (default to undefined)

const { status, data } = await apiInstance.initiativesInitiativeIdCommentsGet(
    initiativeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiativeId** | [**string**] |  | defaults to undefined|


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

# **productsProductIdCommentsGet**
> EpicsEpicIdCommentsGet200Response productsProductIdCommentsGet()

Retrieves a list of comments associated with the specified product.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.productsProductIdCommentsGet(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


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

# **releasePhasesReleasePhaseIdCommentsGet**
> EpicsEpicIdCommentsGet200Response releasePhasesReleasePhaseIdCommentsGet()

Retrieves a list of comments associated with the specified release phase.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let releasePhaseId: string; // (default to undefined)

const { status, data } = await apiInstance.releasePhasesReleasePhaseIdCommentsGet(
    releasePhaseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releasePhaseId** | [**string**] |  | defaults to undefined|


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

# **releasesReleaseIdCommentsGet**
> EpicsEpicIdCommentsGet200Response releasesReleaseIdCommentsGet()

Retrieves a list of comments associated with the specified release.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

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

# **requirementsRequirementIdCommentsGet**
> EpicsEpicIdCommentsGet200Response requirementsRequirementIdCommentsGet()

Retrieves a list of comments associated with the specified requirement.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

let requirementId: string; // (default to undefined)

const { status, data } = await apiInstance.requirementsRequirementIdCommentsGet(
    requirementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requirementId** | [**string**] |  | defaults to undefined|


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
|**400** | Invalid input |  -  |
|**404** | Requirement not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **todosTodoIdCommentsGet**
> EpicsEpicIdCommentsGet200Response todosTodoIdCommentsGet()

Retrieves a list of comments associated with the specified to-do.

### Example

```typescript
import {
    CommentsApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new CommentsApi(configuration);

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

