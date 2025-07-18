# ToDosApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**commentsGetTodo**](#commentsgettodo) | **GET** /todos/{todo_id}/comments | List comments on a to-do|
|[**todosCreate**](#todoscreate) | **POST** /todos | Create a to-do|
|[**todosDelete**](#todosdelete) | **DELETE** /todos/{id} | Delete a to-do|
|[**todosGet**](#todosget) | **GET** /todos/{id} | Get a specific to-do|
|[**todosList**](#todoslist) | **GET** /todos | List to-dos|
|[**todosUpdate**](#todosupdate) | **PUT** /todos/{id} | Update a to-do|

# **commentsGetTodo**
> CommentsGetEpic200Response commentsGetTodo()

Retrieves a list of comments associated with the specified to-do.

### Example

```typescript
import {
    ToDosApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ToDosApi(configuration);

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

# **todosCreate**
> TodosCreate201Response todosCreate(todoCreateRequest)

Creates a new to-do.

### Example

```typescript
import {
    ToDosApi,
    Configuration,
    TodoCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ToDosApi(configuration);

let todoCreateRequest: TodoCreateRequest; //

const { status, data } = await apiInstance.todosCreate(
    todoCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **todoCreateRequest** | **TodoCreateRequest**|  | |


### Return type

**TodosCreate201Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | To-do created successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **todosDelete**
> todosDelete()

Deletes the specified to-do.

### Example

```typescript
import {
    ToDosApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ToDosApi(configuration);

let id: string; //Numeric ID of the to-do (default to undefined)

const { status, data } = await apiInstance.todosDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID of the to-do | defaults to undefined|


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
|**204** | To-do deleted successfully |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | To-do not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **todosGet**
> TodosCreate201Response todosGet()

Retrieves details of a specific to-do.

### Example

```typescript
import {
    ToDosApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ToDosApi(configuration);

let id: string; //Numeric ID of the to-do (default to undefined)

const { status, data } = await apiInstance.todosGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID of the to-do | defaults to undefined|


### Return type

**TodosCreate201Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | To-do details |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | To-do not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **todosList**
> TodosList200Response todosList()

Retrieves a list of all to-dos.

### Example

```typescript
import {
    ToDosApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ToDosApi(configuration);

const { status, data } = await apiInstance.todosList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TodosList200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of to-dos |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **todosUpdate**
> TodosCreate201Response todosUpdate(todoUpdateRequest)

Updates the specified to-do.

### Example

```typescript
import {
    ToDosApi,
    Configuration,
    TodoUpdateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ToDosApi(configuration);

let id: string; //Numeric ID of the to-do (default to undefined)
let todoUpdateRequest: TodoUpdateRequest; //

const { status, data } = await apiInstance.todosUpdate(
    id,
    todoUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **todoUpdateRequest** | **TodoUpdateRequest**|  | |
| **id** | [**string**] | Numeric ID of the to-do | defaults to undefined|


### Return type

**TodosCreate201Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | To-do updated successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | To-do not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

