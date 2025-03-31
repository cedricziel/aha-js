# GoalsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**goalsGoalIdEpicsGet**](#goalsgoalidepicsget) | **GET** /goals/{goal_id}/epics | List epics associated with a goal|

# **goalsGoalIdEpicsGet**
> ProductsProductIdEpicsGet200Response goalsGoalIdEpicsGet()

Retrieves a list of epics associated with the specified goal.

### Example

```typescript
import {
    GoalsApi,
    Configuration
} from 'aha-js';

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

