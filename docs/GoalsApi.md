# GoalsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**goalsGet**](#goalsget) | **GET** /goals | List goals|
|[**goalsGoalIdCommentsGet**](#goalsgoalidcommentsget) | **GET** /goals/{goal_id}/comments | List comments on a goal|
|[**goalsGoalIdEpicsGet**](#goalsgoalidepicsget) | **GET** /goals/{goal_id}/epics | List epics associated with a goal|
|[**goalsIdDelete**](#goalsiddelete) | **DELETE** /goals/{id} | Delete a goal|
|[**goalsIdGet**](#goalsidget) | **GET** /goals/{id} | Get a goal|
|[**goalsIdProgressPut**](#goalsidprogressput) | **PUT** /goals/{id}/progress | Update goal progress|
|[**goalsIdPut**](#goalsidput) | **PUT** /goals/{id} | Update a goal|
|[**goalsPost**](#goalspost) | **POST** /goals | Create a goal|

# **goalsGet**
> GoalsListResponse goalsGet()

Retrieves a list of all goals in the account.

### Example

```typescript
import {
    GoalsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new GoalsApi(configuration);

let q: string; //Search term to match against goal name. (optional) (default to undefined)
let updatedSince: string; //UTC timestamp (in ISO8601 format). If provided, only goals updated after the timestamp will be returned. (optional) (default to undefined)
let assignedToUser: string; //ID or email address of a user. If provided, returns only goals assigned to that user. (optional) (default to undefined)
let status: string; //Status filter for goals. (optional) (default to undefined)
let startDateAfter: string; //Filter goals with start date after this date. (optional) (default to undefined)
let endDateBefore: string; //Filter goals with end date before this date. (optional) (default to undefined)
let progressMin: number; //Filter goals with progress greater than or equal to this value. (optional) (default to undefined)
let progressMax: number; //Filter goals with progress less than or equal to this value. (optional) (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let perPage: number; //Number of goals per page. (optional) (default to 20)

const { status, data } = await apiInstance.goalsGet(
    q,
    updatedSince,
    assignedToUser,
    status,
    startDateAfter,
    endDateBefore,
    progressMin,
    progressMax,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Search term to match against goal name. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only goals updated after the timestamp will be returned. | (optional) defaults to undefined|
| **assignedToUser** | [**string**] | ID or email address of a user. If provided, returns only goals assigned to that user. | (optional) defaults to undefined|
| **status** | [**string**] | Status filter for goals. | (optional) defaults to undefined|
| **startDateAfter** | [**string**] | Filter goals with start date after this date. | (optional) defaults to undefined|
| **endDateBefore** | [**string**] | Filter goals with end date before this date. | (optional) defaults to undefined|
| **progressMin** | [**number**] | Filter goals with progress greater than or equal to this value. | (optional) defaults to undefined|
| **progressMax** | [**number**] | Filter goals with progress less than or equal to this value. | (optional) defaults to undefined|
| **page** | [**number**] | Page number for pagination. | (optional) defaults to 1|
| **perPage** | [**number**] | Number of goals per page. | (optional) defaults to 20|


### Return type

**GoalsListResponse**

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **goalsGoalIdCommentsGet**
> EpicsEpicIdCommentsGet200Response goalsGoalIdCommentsGet()

Retrieves a list of comments associated with the specified goal.

### Example

```typescript
import {
    GoalsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new GoalsApi(configuration);

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

# **goalsGoalIdEpicsGet**
> ProductsProductIdEpicsGet200Response goalsGoalIdEpicsGet()

Retrieves a list of epics associated with the specified goal.

### Example

```typescript
import {
    GoalsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new GoalsApi(configuration);

let goalId: string; //Numeric ID or key of the goal (default to undefined)

const { status, data } = await apiInstance.goalsGoalIdEpicsGet(
    goalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goalId** | [**string**] | Numeric ID or key of the goal | defaults to undefined|


### Return type

**ProductsProductIdEpicsGet200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of epics |  -  |
|**404** | Goal not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **goalsIdDelete**
> goalsIdDelete()

Deletes a specific goal by its ID or reference number.

### Example

```typescript
import {
    GoalsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new GoalsApi(configuration);

let id: string; //Numeric ID or reference number of the goal (default to undefined)

const { status, data } = await apiInstance.goalsIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or reference number of the goal | defaults to undefined|


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
|**204** | Goal deleted |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Goal not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **goalsIdGet**
> GoalGetResponse goalsIdGet()

Retrieves a specific goal by its ID or reference number.

### Example

```typescript
import {
    GoalsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new GoalsApi(configuration);

let id: string; //Numeric ID or reference number of the goal (default to undefined)

const { status, data } = await apiInstance.goalsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or reference number of the goal | defaults to undefined|


### Return type

**GoalGetResponse**

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
|**404** | Goal not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **goalsIdProgressPut**
> GoalGetResponse goalsIdProgressPut(goalProgressUpdateRequest)

Updates the progress of a specific goal and its key results.

### Example

```typescript
import {
    GoalsApi,
    Configuration,
    GoalProgressUpdateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new GoalsApi(configuration);

let id: string; //Numeric ID or reference number of the goal (default to undefined)
let goalProgressUpdateRequest: GoalProgressUpdateRequest; //

const { status, data } = await apiInstance.goalsIdProgressPut(
    id,
    goalProgressUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goalProgressUpdateRequest** | **GoalProgressUpdateRequest**|  | |
| **id** | [**string**] | Numeric ID or reference number of the goal | defaults to undefined|


### Return type

**GoalGetResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Goal progress updated |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Goal not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **goalsIdPut**
> GoalGetResponse goalsIdPut(goalUpdateRequest)

Updates a specific goal by its ID or reference number.

### Example

```typescript
import {
    GoalsApi,
    Configuration,
    GoalUpdateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new GoalsApi(configuration);

let id: string; //Numeric ID or reference number of the goal (default to undefined)
let goalUpdateRequest: GoalUpdateRequest; //

const { status, data } = await apiInstance.goalsIdPut(
    id,
    goalUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goalUpdateRequest** | **GoalUpdateRequest**|  | |
| **id** | [**string**] | Numeric ID or reference number of the goal | defaults to undefined|


### Return type

**GoalGetResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Goal updated |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Goal not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **goalsPost**
> GoalGetResponse goalsPost(goalCreateRequest)

Creates a new goal in the account.

### Example

```typescript
import {
    GoalsApi,
    Configuration,
    GoalCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new GoalsApi(configuration);

let goalCreateRequest: GoalCreateRequest; //

const { status, data } = await apiInstance.goalsPost(
    goalCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goalCreateRequest** | **GoalCreateRequest**|  | |


### Return type

**GoalGetResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Goal created |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

