# UsersApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersGet**](#usersget) | **GET** /users/{id} | Get a specific user|
|[**usersList**](#userslist) | **GET** /users | List users|

# **usersGet**
> User usersGet()

Retrieves details of a specific user by their ID.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.usersGet(
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
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersList**
> Array<User> usersList()

Fetches a list of users associated with the Aha! account.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.usersList();
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
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

