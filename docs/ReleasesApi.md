# ReleasesApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**commentsGetRelease**](#commentsgetrelease) | **GET** /releases/{release_id}/comments | List comments on a release|
|[**productReleasesList**](#productreleaseslist) | **GET** /products/{product_id}/releases | List releases for a product|
|[**releasesCreate**](#releasescreate) | **POST** /products/{product_id}/releases | Create a release|
|[**releasesDelete**](#releasesdelete) | **DELETE** /releases/{id} | Delete a release|
|[**releasesGet**](#releasesget) | **GET** /releases/{id} | Get a release|
|[**releasesList**](#releaseslist) | **GET** /releases | List releases|
|[**releasesUpdate**](#releasesupdate) | **PUT** /releases/{id} | Update a release|

# **commentsGetRelease**
> CommentsGetEpic200Response commentsGetRelease()

Retrieves a list of comments associated with the specified release.

### Example

```typescript
import {
    ReleasesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasesApi(configuration);

let releaseId: string; // (default to undefined)

const { status, data } = await apiInstance.commentsGetRelease(
    releaseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releaseId** | [**string**] |  | defaults to undefined|


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
|**404** | Release not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productReleasesList**
> ReleasesListResponse productReleasesList()

Retrieves a list of all releases for a specific product.

### Example

```typescript
import {
    ReleasesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasesApi(configuration);

let productId: string; //Numeric ID or key of the product (default to undefined)
let q: string; //Search term to match against release name. (optional) (default to undefined)
let updatedSince: string; //UTC timestamp (in ISO8601 format). If provided, only releases updated after the timestamp will be returned. (optional) (default to undefined)
let status: string; //Status filter for releases. (optional) (default to undefined)
let parkingLot: boolean; //When true, returns only parking lot releases. (optional) (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let perPage: number; //Number of releases per page. (optional) (default to 20)

const { status, data } = await apiInstance.productReleasesList(
    productId,
    q,
    updatedSince,
    status,
    parkingLot,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | Numeric ID or key of the product | defaults to undefined|
| **q** | [**string**] | Search term to match against release name. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only releases updated after the timestamp will be returned. | (optional) defaults to undefined|
| **status** | [**string**] | Status filter for releases. | (optional) defaults to undefined|
| **parkingLot** | [**boolean**] | When true, returns only parking lot releases. | (optional) defaults to undefined|
| **page** | [**number**] | Page number for pagination. | (optional) defaults to 1|
| **perPage** | [**number**] | Number of releases per page. | (optional) defaults to 20|


### Return type

**ReleasesListResponse**

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
|**404** | Product not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasesCreate**
> ReleaseGetResponse releasesCreate(releaseCreateRequest)

Creates a new release for the specified product.

### Example

```typescript
import {
    ReleasesApi,
    Configuration,
    ReleaseCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasesApi(configuration);

let productId: string; //Numeric ID or key of the product (default to undefined)
let releaseCreateRequest: ReleaseCreateRequest; //

const { status, data } = await apiInstance.releasesCreate(
    productId,
    releaseCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releaseCreateRequest** | **ReleaseCreateRequest**|  | |
| **productId** | [**string**] | Numeric ID or key of the product | defaults to undefined|


### Return type

**ReleaseGetResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release created |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Product not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasesDelete**
> releasesDelete()

Deletes a specific release by its ID or reference number.

### Example

```typescript
import {
    ReleasesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasesApi(configuration);

let id: string; //Numeric ID or reference number of the release (default to undefined)

const { status, data } = await apiInstance.releasesDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or reference number of the release | defaults to undefined|


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
|**204** | Release deleted |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Release not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasesGet**
> ReleaseGetResponse releasesGet()

Retrieves a specific release by its ID or reference number.

### Example

```typescript
import {
    ReleasesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasesApi(configuration);

let id: string; //Numeric ID or reference number of the release (default to undefined)

const { status, data } = await apiInstance.releasesGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or reference number of the release | defaults to undefined|


### Return type

**ReleaseGetResponse**

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
|**404** | Release not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasesList**
> ReleasesListResponse releasesList()

Retrieves a list of all releases in the account.

### Example

```typescript
import {
    ReleasesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasesApi(configuration);

let page: number; //Page number for pagination (starts at 1) (optional) (default to 1)
let perPage: number; //Number of items per page (max 200) (optional) (default to 30)
let fields: string; //Comma-separated list of fields to include in response for customization (optional) (default to undefined)
let q: string; //Search term to match against release name. (optional) (default to undefined)
let updatedSince: string; //UTC timestamp (in ISO8601 format). If provided, only releases updated after the timestamp will be returned. (optional) (default to undefined)
let assignedToUser: string; //ID or email address of a user. If provided, returns only releases assigned to that user. (optional) (default to undefined)
let status: string; //Status filter for releases. (optional) (default to undefined)
let parkingLot: boolean; //When true, returns only parking lot releases. (optional) (default to undefined)

const { status, data } = await apiInstance.releasesList(
    page,
    perPage,
    fields,
    q,
    updatedSince,
    assignedToUser,
    status,
    parkingLot
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number for pagination (starts at 1) | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page (max 200) | (optional) defaults to 30|
| **fields** | [**string**] | Comma-separated list of fields to include in response for customization | (optional) defaults to undefined|
| **q** | [**string**] | Search term to match against release name. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only releases updated after the timestamp will be returned. | (optional) defaults to undefined|
| **assignedToUser** | [**string**] | ID or email address of a user. If provided, returns only releases assigned to that user. | (optional) defaults to undefined|
| **status** | [**string**] | Status filter for releases. | (optional) defaults to undefined|
| **parkingLot** | [**boolean**] | When true, returns only parking lot releases. | (optional) defaults to undefined|


### Return type

**ReleasesListResponse**

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

# **releasesUpdate**
> ReleaseGetResponse releasesUpdate(releaseUpdateRequest)

Updates a specific release by its ID or reference number.

### Example

```typescript
import {
    ReleasesApi,
    Configuration,
    ReleaseUpdateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasesApi(configuration);

let id: string; //Numeric ID or reference number of the release (default to undefined)
let releaseUpdateRequest: ReleaseUpdateRequest; //

const { status, data } = await apiInstance.releasesUpdate(
    id,
    releaseUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releaseUpdateRequest** | **ReleaseUpdateRequest**|  | |
| **id** | [**string**] | Numeric ID or reference number of the release | defaults to undefined|


### Return type

**ReleaseGetResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Release updated |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Release not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

