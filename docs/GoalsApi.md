# GoalsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**goalsGoalIdCommentsGet**](#goalsgoalidcommentsget) | **GET** /goals/{goal_id}/comments | List comments on a goal|
|[**goalsGoalIdEpicsGet**](#goalsgoalidepicsget) | **GET** /goals/{goal_id}/epics | List epics associated with a goal|

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

