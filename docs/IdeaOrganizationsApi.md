# IdeaOrganizationsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ideaOrganizationsCreate**](#ideaorganizationscreate) | **POST** /idea_organizations | Create an idea organization|
|[**ideaOrganizationsDelete**](#ideaorganizationsdelete) | **DELETE** /idea_organizations/{id} | Delete an idea organization|
|[**ideaOrganizationsGet**](#ideaorganizationsget) | **GET** /idea_organizations/{id} | Get an idea organization|
|[**ideaOrganizationsList**](#ideaorganizationslist) | **GET** /idea_organizations | List idea organizations|
|[**ideaOrganizationsUpdate**](#ideaorganizationsupdate) | **PUT** /idea_organizations/{id} | Update an idea organization|

# **ideaOrganizationsCreate**
> IdeaOrganizationGetResponse ideaOrganizationsCreate(ideaOrganizationCreateRequest)

Creates a new idea organization.

### Example

```typescript
import {
    IdeaOrganizationsApi,
    Configuration,
    IdeaOrganizationCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeaOrganizationsApi(configuration);

let ideaOrganizationCreateRequest: IdeaOrganizationCreateRequest; //

const { status, data } = await apiInstance.ideaOrganizationsCreate(
    ideaOrganizationCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaOrganizationCreateRequest** | **IdeaOrganizationCreateRequest**|  | |


### Return type

**IdeaOrganizationGetResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ideaOrganizationsDelete**
> ideaOrganizationsDelete()

Deletes an idea organization.

### Example

```typescript
import {
    IdeaOrganizationsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeaOrganizationsApi(configuration);

let id: string; //Numeric ID of the idea organization (default to undefined)
let deleteProxyVotes: boolean; //Delete the organization even if it has proxy votes (optional) (default to false)

const { status, data } = await apiInstance.ideaOrganizationsDelete(
    id,
    deleteProxyVotes
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID of the idea organization | defaults to undefined|
| **deleteProxyVotes** | [**boolean**] | Delete the organization even if it has proxy votes | (optional) defaults to false|


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
|**204** | No content (successfully deleted) |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Idea organization not found |  -  |
|**409** | Conflict (organization has proxy votes and delete_proxy_votes is false) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ideaOrganizationsGet**
> IdeaOrganizationGetResponse ideaOrganizationsGet()

Retrieves a specific idea organization by ID.

### Example

```typescript
import {
    IdeaOrganizationsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeaOrganizationsApi(configuration);

let id: string; //Numeric ID of the idea organization (default to undefined)

const { status, data } = await apiInstance.ideaOrganizationsGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID of the idea organization | defaults to undefined|


### Return type

**IdeaOrganizationGetResponse**

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
|**404** | Idea organization not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ideaOrganizationsList**
> IdeaOrganizationsListResponse ideaOrganizationsList()

Retrieves a list of idea organizations with optional filtering.

### Example

```typescript
import {
    IdeaOrganizationsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeaOrganizationsApi(configuration);

let q: string; //Search term to match against organization name (optional) (default to undefined)
let emailDomain: string; //Returns organizations with matching email domain (optional) (default to undefined)
let page: number; //Page number for pagination (optional) (default to 1)
let perPage: number; //Number of organizations per page (optional) (default to 20)

const { status, data } = await apiInstance.ideaOrganizationsList(
    q,
    emailDomain,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Search term to match against organization name | (optional) defaults to undefined|
| **emailDomain** | [**string**] | Returns organizations with matching email domain | (optional) defaults to undefined|
| **page** | [**number**] | Page number for pagination | (optional) defaults to 1|
| **perPage** | [**number**] | Number of organizations per page | (optional) defaults to 20|


### Return type

**IdeaOrganizationsListResponse**

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

# **ideaOrganizationsUpdate**
> IdeaOrganizationGetResponse ideaOrganizationsUpdate(ideaOrganizationUpdateRequest)

Updates an existing idea organization.

### Example

```typescript
import {
    IdeaOrganizationsApi,
    Configuration,
    IdeaOrganizationUpdateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeaOrganizationsApi(configuration);

let id: string; //Numeric ID of the idea organization (default to undefined)
let ideaOrganizationUpdateRequest: IdeaOrganizationUpdateRequest; //

const { status, data } = await apiInstance.ideaOrganizationsUpdate(
    id,
    ideaOrganizationUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaOrganizationUpdateRequest** | **IdeaOrganizationUpdateRequest**|  | |
| **id** | [**string**] | Numeric ID of the idea organization | defaults to undefined|


### Return type

**IdeaOrganizationGetResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Idea organization not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

