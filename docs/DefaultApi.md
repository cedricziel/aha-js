# DefaultApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**competitorsCompetitorIdDelete**](#competitorscompetitoriddelete) | **DELETE** /competitors/{competitor_id} | Delete a competitor|
|[**competitorsCompetitorIdGet**](#competitorscompetitoridget) | **GET** /competitors/{competitor_id} | Get a specific competitor|
|[**competitorsCompetitorIdPut**](#competitorscompetitoridput) | **PUT** /competitors/{competitor_id} | Update a competitor|
|[**epicsEpicIdCommentsGet**](#epicsepicidcommentsget) | **GET** /epics/{epic_id}/comments | List comments on an epic|
|[**featuresFeatureIdCommentsPost**](#featuresfeatureidcommentspost) | **POST** /features/{feature_id}/comments | Create a comment on a feature|
|[**goalsGoalIdCommentsGet**](#goalsgoalidcommentsget) | **GET** /goals/{goal_id}/comments | List comments on a goal|
|[**ideasIdeaIdCommentsGet**](#ideasideaidcommentsget) | **GET** /ideas/{idea_id}/comments | List comments on an idea|
|[**initiativesInitiativeIdCommentsGet**](#initiativesinitiativeidcommentsget) | **GET** /initiatives/{initiative_id}/comments | List comments on an initiative|
|[**productsProductIdCommentsGet**](#productsproductidcommentsget) | **GET** /products/{product_id}/comments | List comments in a product|
|[**productsProductIdCompetitorsGet**](#productsproductidcompetitorsget) | **GET** /products/{product_id}/competitors | List competitors in a product|
|[**productsProductIdCompetitorsPost**](#productsproductidcompetitorspost) | **POST** /products/{product_id}/competitors | Create a competitor|
|[**releasePhasesReleasePhaseIdCommentsGet**](#releasephasesreleasephaseidcommentsget) | **GET** /release_phases/{release_phase_id}/comments | List comments on a release phase|
|[**releasesReleaseIdCommentsGet**](#releasesreleaseidcommentsget) | **GET** /releases/{release_id}/comments | List comments on a release|
|[**requirementsRequirementIdCommentsGet**](#requirementsrequirementidcommentsget) | **GET** /requirements/{requirement_id}/comments | List comments on a requirement|
|[**todosTodoIdCommentsGet**](#todostodoidcommentsget) | **GET** /todos/{todo_id}/comments | List comments on a to-do|
|[**usersGet**](#usersget) | **GET** /users | List users|
|[**usersIdGet**](#usersidget) | **GET** /users/{id} | Get a specific user|

# **competitorsCompetitorIdDelete**
> competitorsCompetitorIdDelete()

Removes the specified competitor.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let competitorId: string; // (default to undefined)

const { status, data } = await apiInstance.competitorsCompetitorIdDelete(
    competitorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **competitorId** | [**string**] |  | defaults to undefined|


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
|**204** | Competitor deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **competitorsCompetitorIdGet**
> Competitor competitorsCompetitorIdGet()

Retrieves details of the specified competitor.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let competitorId: string; // (default to undefined)

const { status, data } = await apiInstance.competitorsCompetitorIdGet(
    competitorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **competitorId** | [**string**] |  | defaults to undefined|


### Return type

**Competitor**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Competitor details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **competitorsCompetitorIdPut**
> Competitor competitorsCompetitorIdPut(competitorUpdateRequest)

Updates the details of the specified competitor.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CompetitorUpdateRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let competitorId: string; // (default to undefined)
let competitorUpdateRequest: CompetitorUpdateRequest; //

const { status, data } = await apiInstance.competitorsCompetitorIdPut(
    competitorId,
    competitorUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **competitorUpdateRequest** | **CompetitorUpdateRequest**|  | |
| **competitorId** | [**string**] |  | defaults to undefined|


### Return type

**Competitor**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Competitor updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epicsEpicIdCommentsGet**
> EpicsEpicIdCommentsGet200Response epicsEpicIdCommentsGet()

Retrieves a list of comments associated with the specified epic.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

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
    DefaultApi,
    Configuration,
    CommentCreateRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

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
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

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
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

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
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

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
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

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

# **productsProductIdCompetitorsGet**
> ProductsProductIdCompetitorsGet200Response productsProductIdCompetitorsGet()

Retrieves a list of competitors associated with the specified product.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.productsProductIdCompetitorsGet(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ProductsProductIdCompetitorsGet200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of competitors |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsProductIdCompetitorsPost**
> Competitor productsProductIdCompetitorsPost(competitorCreateRequest)

Adds a new competitor to the specified product.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CompetitorCreateRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let productId: string; // (default to undefined)
let competitorCreateRequest: CompetitorCreateRequest; //

const { status, data } = await apiInstance.productsProductIdCompetitorsPost(
    productId,
    competitorCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **competitorCreateRequest** | **CompetitorCreateRequest**|  | |
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**Competitor**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Competitor created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasePhasesReleasePhaseIdCommentsGet**
> EpicsEpicIdCommentsGet200Response releasePhasesReleasePhaseIdCommentsGet()

Retrieves a list of comments associated with the specified release phase.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

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
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

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
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

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
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

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

# **usersGet**
> Array<User> usersGet()

Fetches a list of users associated with the Aha! account.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.usersGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<User>**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of users |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersIdGet**
> User usersIdGet()

Retrieves details of a specific user by their ID.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.usersIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**User**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A single user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

