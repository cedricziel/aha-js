# EpicsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**commentsCreateEpic**](#commentscreateepic) | **POST** /epics/{epic_id}/comments | Create a comment on an epic|
|[**commentsGetEpic**](#commentsgetepic) | **GET** /epics/{epic_id}/comments | List comments on an epic|
|[**epicsCreateInProduct**](#epicscreateinproduct) | **POST** /products/{product_id}/epics | Create an epic in a product|
|[**epicsCreateInRelease**](#epicscreateinrelease) | **POST** /releases/{release_id}/epics | Create an epic in a release|
|[**epicsDelete**](#epicsdelete) | **DELETE** /epics/{epic_id} | Delete an epic|
|[**epicsGet**](#epicsget) | **GET** /epics/{epic_id} | Get a specific epic|
|[**epicsList**](#epicslist) | **GET** /epics | List epics|
|[**epicsListByGoal**](#epicslistbygoal) | **GET** /goals/{goal_id}/epics | List epics associated with a goal|
|[**epicsListByInitiative**](#epicslistbyinitiative) | **GET** /initiatives/{initiative_id}/epics | List epics associated with an initiative|
|[**epicsListInProduct**](#epicslistinproduct) | **GET** /products/{product_id}/epics | List epics in a product|
|[**epicsListInRelease**](#epicslistinrelease) | **GET** /releases/{release_id}/epics | List epics in a release|
|[**epicsUpdate**](#epicsupdate) | **PUT** /epics/{epic_id} | Update an epic|

# **commentsCreateEpic**
> Comment commentsCreateEpic(commentCreateRequest)

Adds a new comment to the specified epic.

### Example

```typescript
import {
    EpicsApi,
    Configuration,
    CommentCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let epicId: string; // (default to undefined)
let commentCreateRequest: CommentCreateRequest; //

const { status, data } = await apiInstance.commentsCreateEpic(
    epicId,
    commentCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commentCreateRequest** | **CommentCreateRequest**|  | |
| **epicId** | [**string**] |  | defaults to undefined|


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
|**404** | Epic not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commentsGetEpic**
> CommentsGetEpic200Response commentsGetEpic()

Retrieves a list of comments associated with the specified epic.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let epicId: string; // (default to undefined)

const { status, data } = await apiInstance.commentsGetEpic(
    epicId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **epicId** | [**string**] |  | defaults to undefined|


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
|**400** | Invalid input |  -  |
|**404** | Epic not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epicsCreateInProduct**
> Epic epicsCreateInProduct(epicCreateRequest)

Creates a new epic in the specified product.

### Example

```typescript
import {
    EpicsApi,
    Configuration,
    EpicCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let productId: string; //Numeric ID or key of the product the epic should be created in (default to undefined)
let epicCreateRequest: EpicCreateRequest; //

const { status, data } = await apiInstance.epicsCreateInProduct(
    productId,
    epicCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **epicCreateRequest** | **EpicCreateRequest**|  | |
| **productId** | [**string**] | Numeric ID or key of the product the epic should be created in | defaults to undefined|


### Return type

**Epic**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Epic created |  -  |
|**400** | Invalid input |  -  |
|**404** | Product not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epicsCreateInRelease**
> Epic epicsCreateInRelease(epicCreateRequest)

Creates a new epic in the specified release.

### Example

```typescript
import {
    EpicsApi,
    Configuration,
    EpicCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let releaseId: string; //Numeric ID or key of the release the epic should be created in (default to undefined)
let epicCreateRequest: EpicCreateRequest; //

const { status, data } = await apiInstance.epicsCreateInRelease(
    releaseId,
    epicCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **epicCreateRequest** | **EpicCreateRequest**|  | |
| **releaseId** | [**string**] | Numeric ID or key of the release the epic should be created in | defaults to undefined|


### Return type

**Epic**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Epic created |  -  |
|**400** | Invalid input |  -  |
|**404** | Release not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epicsDelete**
> epicsDelete()

Deletes the specified epic.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let epicId: string; //Numeric ID or key of the epic (default to undefined)

const { status, data } = await apiInstance.epicsDelete(
    epicId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **epicId** | [**string**] | Numeric ID or key of the epic | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Epic deleted successfully (no content returned) |  -  |
|**404** | Epic not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epicsGet**
> Epic epicsGet()

Retrieves details of a specific epic by its ID.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let epicId: string; //Numeric ID or key of the epic (default to undefined)

const { status, data } = await apiInstance.epicsGet(
    epicId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **epicId** | [**string**] | Numeric ID or key of the epic | defaults to undefined|


### Return type

**Epic**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Epic details |  -  |
|**404** | Epic not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epicsList**
> EpicsList200Response epicsList()

Retrieves a list of epics with optional filtering by search term, updated date, tags, and assignee.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let q: string; //Search term to match against epic name (optional) (default to undefined)
let updatedSince: string; //UTC timestamp for filtering recently updated epics (optional) (default to undefined)
let tag: string; //String tag to filter epics (optional) (default to undefined)
let assignedToUser: string; //User ID or email to filter by assignee (optional) (default to undefined)

const { status, data } = await apiInstance.epicsList(
    q,
    updatedSince,
    tag,
    assignedToUser
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epicsListByGoal**
> EpicsList200Response epicsListByGoal()

Retrieves a list of epics associated with the specified goal.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let goalId: string; //Numeric ID or key of the goal (default to undefined)
let q: string; //Search term to match against epic name (optional) (default to undefined)
let updatedSince: string; //UTC timestamp for filtering recently updated epics (optional) (default to undefined)
let tag: string; //String tag to filter epics (optional) (default to undefined)
let assignedToUser: string; //User ID or email to filter by assignee (optional) (default to undefined)

const { status, data } = await apiInstance.epicsListByGoal(
    goalId,
    q,
    updatedSince,
    tag,
    assignedToUser
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goalId** | [**string**] | Numeric ID or key of the goal | defaults to undefined|
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
|**404** | Goal not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epicsListByInitiative**
> EpicsList200Response epicsListByInitiative()

Retrieves a list of epics associated with the specified initiative.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

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

# **epicsListInProduct**
> EpicsList200Response epicsListInProduct()

Retrieves a list of epics associated with the specified product.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let productId: string; //Numeric ID or key of the product (default to undefined)
let q: string; //Search term to match against epic name (optional) (default to undefined)
let updatedSince: string; //UTC timestamp for filtering recently updated epics (optional) (default to undefined)
let tag: string; //String tag to filter epics (optional) (default to undefined)
let assignedToUser: string; //User ID or email to filter by assignee (optional) (default to undefined)

const { status, data } = await apiInstance.epicsListInProduct(
    productId,
    q,
    updatedSince,
    tag,
    assignedToUser
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | Numeric ID or key of the product | defaults to undefined|
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
|**404** | Product not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epicsListInRelease**
> EpicsList200Response epicsListInRelease()

Retrieves a list of epics associated with the specified release.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let releaseId: string; //Numeric ID or key of the release (default to undefined)
let q: string; //Search term to match against epic name (optional) (default to undefined)
let updatedSince: string; //UTC timestamp for filtering recently updated epics (optional) (default to undefined)
let tag: string; //String tag to filter epics (optional) (default to undefined)
let assignedToUser: string; //User ID or email to filter by assignee (optional) (default to undefined)

const { status, data } = await apiInstance.epicsListInRelease(
    releaseId,
    q,
    updatedSince,
    tag,
    assignedToUser
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releaseId** | [**string**] | Numeric ID or key of the release | defaults to undefined|
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
|**404** | Release not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epicsUpdate**
> Epic epicsUpdate(epicUpdateRequest)

Updates the details of the specified epic.

### Example

```typescript
import {
    EpicsApi,
    Configuration,
    EpicUpdateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let epicId: string; //Numeric ID or key of the epic (default to undefined)
let epicUpdateRequest: EpicUpdateRequest; //

const { status, data } = await apiInstance.epicsUpdate(
    epicId,
    epicUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **epicUpdateRequest** | **EpicUpdateRequest**|  | |
| **epicId** | [**string**] | Numeric ID or key of the epic | defaults to undefined|


### Return type

**Epic**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Epic updated |  -  |
|**400** | Invalid input |  -  |
|**404** | Epic not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

