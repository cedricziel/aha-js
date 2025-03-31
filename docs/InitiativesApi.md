# InitiativesApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**initiativesInitiativeIdCommentsGet**](#initiativesinitiativeidcommentsget) | **GET** /initiatives/{initiative_id}/comments | List comments on an initiative|
|[**initiativesInitiativeIdEpicsGet**](#initiativesinitiativeidepicsget) | **GET** /initiatives/{initiative_id}/epics | List epics associated with an initiative|

# **initiativesInitiativeIdCommentsGet**
> EpicsEpicIdCommentsGet200Response initiativesInitiativeIdCommentsGet()

Retrieves a list of comments associated with the specified initiative.

### Example

```typescript
import {
    InitiativesApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new InitiativesApi(configuration);

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

# **initiativesInitiativeIdEpicsGet**
> ProductsProductIdEpicsGet200Response initiativesInitiativeIdEpicsGet()

Retrieves a list of epics associated with the specified initiative.

### Example

```typescript
import {
    InitiativesApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new InitiativesApi(configuration);

let initiativeId: string; //Numeric ID or key of the initiative (default to undefined)

const { status, data } = await apiInstance.initiativesInitiativeIdEpicsGet(
    initiativeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiativeId** | [**string**] | Numeric ID or key of the initiative | defaults to undefined|


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
|**404** | Initiative not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

