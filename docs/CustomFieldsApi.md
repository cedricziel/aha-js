# CustomFieldsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**customFieldsCreateOption**](#customfieldscreateoption) | **POST** /custom_field_definitions/{custom_field_definition_id}/options | Create a custom field option|
|[**customFieldsListAll**](#customfieldslistall) | **GET** /custom_field_definitions | List all custom fields|
|[**customFieldsListOptions**](#customfieldslistoptions) | **GET** /custom_field_definitions/{custom_field_definition_id}/options | List options for a custom field|

# **customFieldsCreateOption**
> CustomFieldsCreateOption201Response customFieldsCreateOption(customFieldOptionCreateRequest)

Creates a new option for a custom field.

### Example

```typescript
import {
    CustomFieldsApi,
    Configuration,
    CustomFieldOptionCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CustomFieldsApi(configuration);

let customFieldDefinitionId: string; //Numeric ID of the custom field (default to undefined)
let customFieldOptionCreateRequest: CustomFieldOptionCreateRequest; //

const { status, data } = await apiInstance.customFieldsCreateOption(
    customFieldDefinitionId,
    customFieldOptionCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldOptionCreateRequest** | **CustomFieldOptionCreateRequest**|  | |
| **customFieldDefinitionId** | [**string**] | Numeric ID of the custom field | defaults to undefined|


### Return type

**CustomFieldsCreateOption201Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Custom field option created successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Custom field not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customFieldsListAll**
> CustomFieldsListAll200Response customFieldsListAll()

Retrieves a list of all custom field definitions.

### Example

```typescript
import {
    CustomFieldsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CustomFieldsApi(configuration);

const { status, data } = await apiInstance.customFieldsListAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CustomFieldsListAll200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of custom field definitions |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customFieldsListOptions**
> CustomFieldsListOptions200Response customFieldsListOptions()

Retrieves a list of options for a specific custom field.  This is useful for custom fields that include options, such as tags and choice lists. 

### Example

```typescript
import {
    CustomFieldsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CustomFieldsApi(configuration);

let customFieldDefinitionId: string; //Numeric ID of the custom field (default to undefined)

const { status, data } = await apiInstance.customFieldsListOptions(
    customFieldDefinitionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customFieldDefinitionId** | [**string**] | Numeric ID of the custom field | defaults to undefined|


### Return type

**CustomFieldsListOptions200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of custom field options |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Custom field not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

