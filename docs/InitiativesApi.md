# InitiativesApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**commentsCreateInitiative**](#commentscreateinitiative) | **POST** /initiatives/{initiative_id}/comments | Create a comment on an initiative|
|[**commentsGetInitiative**](#commentsgetinitiative) | **GET** /initiatives/{initiative_id}/comments | List comments on an initiative|
|[**epicsListByInitiative**](#epicslistbyinitiative) | **GET** /initiatives/{initiative_id}/epics | List epics associated with an initiative|
|[**initiativesCreate**](#initiativescreate) | **POST** /products/{product_id}/initiatives | Create an initiative|
|[**initiativesGet**](#initiativesget) | **GET** /initiatives/{id} | Get a specific initiative|
|[**initiativesList**](#initiativeslist) | **GET** /initiatives | List initiatives|

# **commentsCreateInitiative**
> Comment commentsCreateInitiative(commentCreateRequest)

Adds a new comment to the specified initiative.

### Example

```typescript
import {
    InitiativesApi,
    Configuration,
    CommentCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new InitiativesApi(configuration);

let initiativeId: string; // (default to undefined)
let commentCreateRequest: CommentCreateRequest; //

const { status, data } = await apiInstance.commentsCreateInitiative(
    initiativeId,
    commentCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentCreateRequest** | **CommentCreateRequest**|  | |
| **initiativeId** | [**string**] |  | defaults to undefined|


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
|**400** | Invalid input |  -  |
|**404** | Initiative not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsGetInitiative**
> CommentsGetEpic200Response commentsGetInitiative()

Retrieves a list of comments associated with the specified initiative.

### Example

```typescript
import {
    InitiativesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new InitiativesApi(configuration);

let initiativeId: string; // (default to undefined)

const { status, data } = await apiInstance.commentsGetInitiative(
    initiativeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiativeId** | [**string**] |  | defaults to undefined|


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
|**404** | Initiative not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epicsListByInitiative**
> EpicsList200Response epicsListByInitiative()

Retrieves a list of epics associated with the specified initiative.

### Example

```typescript
import {
    InitiativesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new InitiativesApi(configuration);

let initiativeId: string; //Numeric ID or key of the initiative (default to undefined)
let q: string; //Search term to match against epic name (optional) (default to undefined)
let updatedSince: string; //UTC timestamp for filtering recently updated epics (optional) (default to undefined)
let tag: string; //String tag to filter epics (optional) (default to undefined)
let assignedToUser: string; //User ID or email to filter by assignee (optional) (default to undefined)

const { status, data } = await apiInstance.epicsListByInitiative(
    initiativeId,
    q,
    updatedSince,
    tag,
    assignedToUser
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiativeId** | [**string**] | Numeric ID or key of the initiative | defaults to undefined|
| **q** | [**string**] | Search term to match against epic name | (optional) defaults to undefined|
| **updatedSince** | [**string**] | UTC timestamp for filtering recently updated epics | (optional) defaults to undefined|
| **tag** | [**string**] | String tag to filter epics | (optional) defaults to undefined|
| **assignedToUser** | [**string**] | User ID or email to filter by assignee | (optional) defaults to undefined|


### Return type

**EpicsList200Response**

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

# **initiativesCreate**
> InitiativeResponse initiativesCreate(initiativeCreateRequest)

Creates a new initiative for the specified product.

### Example

```typescript
import {
    InitiativesApi,
    Configuration,
    InitiativeCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new InitiativesApi(configuration);

let productId: string; //Numeric ID or key of the product (default to undefined)
let initiativeCreateRequest: InitiativeCreateRequest; //

const { status, data } = await apiInstance.initiativesCreate(
    productId,
    initiativeCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiativeCreateRequest** | **InitiativeCreateRequest**|  | |
| **productId** | [**string**] | Numeric ID or key of the product | defaults to undefined|


### Return type

**InitiativeResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Initiative created |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Product not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiativesGet**
> InitiativeResponse initiativesGet()

Retrieves the details of a specific initiative.

### Example

```typescript
import {
    InitiativesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new InitiativesApi(configuration);

let id: string; //Numeric ID of the initiative (default to undefined)

const { status, data } = await apiInstance.initiativesGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID of the initiative | defaults to undefined|


### Return type

**InitiativeResponse**

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
|**404** | Initiative not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiativesList**
> InitiativesListResponse initiativesList()

Retrieves a list of all initiatives in the account.

### Example

```typescript
import {
    InitiativesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new InitiativesApi(configuration);

let page: number; //Page number for pagination (starts at 1) (optional) (default to 1)
let perPage: number; //Number of items per page (max 200) (optional) (default to 30)
let fields: string; //Comma-separated list of fields to include in response for customization (optional) (default to undefined)
let q: string; //Search term to match against initiative name. (optional) (default to undefined)
let updatedSince: string; //UTC timestamp (in ISO8601 format). If provided, only initiatives updated after the timestamp will be returned. (optional) (default to undefined)
let assignedToUser: string; //ID or email address of a user. If provided, returns only initiatives assigned to that user. (optional) (default to undefined)
let onlyActive: boolean; //When true, returns only active initiatives. (optional) (default to undefined)

const { status, data } = await apiInstance.initiativesList(
    page,
    perPage,
    fields,
    q,
    updatedSince,
    assignedToUser,
    onlyActive
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number for pagination (starts at 1) | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page (max 200) | (optional) defaults to 30|
| **fields** | [**string**] | Comma-separated list of fields to include in response for customization | (optional) defaults to undefined|
| **q** | [**string**] | Search term to match against initiative name. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only initiatives updated after the timestamp will be returned. | (optional) defaults to undefined|
| **assignedToUser** | [**string**] | ID or email address of a user. If provided, returns only initiatives assigned to that user. | (optional) defaults to undefined|
| **onlyActive** | [**boolean**] | When true, returns only active initiatives. | (optional) defaults to undefined|


### Return type

**InitiativesListResponse**

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

