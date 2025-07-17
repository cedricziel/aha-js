# ReleasesApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**productsProductIdReleasesGet**](#productsproductidreleasesget) | **GET** /products/{product_id}/releases | List releases for a product|
|[**productsProductIdReleasesPost**](#productsproductidreleasespost) | **POST** /products/{product_id}/releases | Create a release|
|[**releasesGet**](#releasesget) | **GET** /releases | List releases|
|[**releasesIdDelete**](#releasesiddelete) | **DELETE** /releases/{id} | Delete a release|
|[**releasesIdGet**](#releasesidget) | **GET** /releases/{id} | Get a release|
|[**releasesIdPut**](#releasesidput) | **PUT** /releases/{id} | Update a release|
|[**releasesReleaseIdCommentsGet**](#releasesreleaseidcommentsget) | **GET** /releases/{release_id}/comments | List comments on a release|

# **productsProductIdReleasesGet**
> ReleasesListResponse productsProductIdReleasesGet()

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

const { status, data } = await apiInstance.productsProductIdReleasesGet(
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

# **productsProductIdReleasesPost**
> ReleaseGetResponse productsProductIdReleasesPost(releaseCreateRequest)

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

const { status, data } = await apiInstance.productsProductIdReleasesPost(
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

# **releasesGet**
> ReleasesListResponse releasesGet()

Retrieves a list of all releases in the account.

### Example

```typescript
import {
    ReleasesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new ReleasesApi(configuration);

let q: string; //Search term to match against release name. (optional) (default to undefined)
let updatedSince: string; //UTC timestamp (in ISO8601 format). If provided, only releases updated after the timestamp will be returned. (optional) (default to undefined)
let assignedToUser: string; //ID or email address of a user. If provided, returns only releases assigned to that user. (optional) (default to undefined)
let status: string; //Status filter for releases. (optional) (default to undefined)
let parkingLot: boolean; //When true, returns only parking lot releases. (optional) (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let perPage: number; //Number of releases per page. (optional) (default to 20)

const { status, data } = await apiInstance.releasesGet(
    q,
    updatedSince,
    assignedToUser,
    status,
    parkingLot,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Search term to match against release name. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only releases updated after the timestamp will be returned. | (optional) defaults to undefined|
| **assignedToUser** | [**string**] | ID or email address of a user. If provided, returns only releases assigned to that user. | (optional) defaults to undefined|
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasesIdDelete**
> releasesIdDelete()

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

const { status, data } = await apiInstance.releasesIdDelete(
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

# **releasesIdGet**
> ReleaseGetResponse releasesIdGet()

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

const { status, data } = await apiInstance.releasesIdGet(
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

# **releasesIdPut**
> ReleaseGetResponse releasesIdPut(releaseUpdateRequest)

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

const { status, data } = await apiInstance.releasesIdPut(
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

# **releasesReleaseIdCommentsGet**
> EpicsEpicIdCommentsGet200Response releasesReleaseIdCommentsGet()

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

const { status, data } = await apiInstance.releasesReleaseIdCommentsGet(
    releaseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releaseId** | [**string**] |  | defaults to undefined|


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

