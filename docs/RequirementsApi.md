# RequirementsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**requirementsRequirementIdCommentsGet**](#requirementsrequirementidcommentsget) | **GET** /requirements/{requirement_id}/comments | List comments on a requirement|

# **requirementsRequirementIdCommentsGet**
> EpicsEpicIdCommentsGet200Response requirementsRequirementIdCommentsGet()

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

