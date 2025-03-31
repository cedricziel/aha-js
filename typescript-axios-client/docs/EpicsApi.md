# EpicsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**epicsEpicIdDelete**](#epicsepiciddelete) | **DELETE** /epics/{epic_id} | Delete an epic|
|[**epicsEpicIdGet**](#epicsepicidget) | **GET** /epics/{epic_id} | Get a specific epic|
|[**epicsEpicIdPut**](#epicsepicidput) | **PUT** /epics/{epic_id} | Update an epic|
|[**goalsGoalIdEpicsGet**](#goalsgoalidepicsget) | **GET** /goals/{goal_id}/epics | List epics associated with a goal|
|[**initiativesInitiativeIdEpicsGet**](#initiativesinitiativeidepicsget) | **GET** /initiatives/{initiative_id}/epics | List epics associated with an initiative|
|[**productsProductIdEpicsGet**](#productsproductidepicsget) | **GET** /products/{product_id}/epics | List epics in a product|
|[**productsProductIdEpicsPost**](#productsproductidepicspost) | **POST** /products/{product_id}/epics | Create an epic in a product|
|[**releasesReleaseIdEpicsGet**](#releasesreleaseidepicsget) | **GET** /releases/{release_id}/epics | List epics in a release|
|[**releasesReleaseIdEpicsPost**](#releasesreleaseidepicspost) | **POST** /releases/{release_id}/epics | Create an epic in a release|

# **epicsEpicIdDelete**
> epicsEpicIdDelete()

Deletes the specified epic.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from 'aha-api-client';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let epicId: string; //Numeric ID or key of the epic (default to undefined)

const { status, data } = await apiInstance.epicsEpicIdDelete(
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
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Epic deleted |  -  |
|**404** | Epic not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **epicsEpicIdGet**
> Epic epicsEpicIdGet()

Retrieves details of a specific epic by its ID.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from 'aha-api-client';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let epicId: string; //Numeric ID or key of the epic (default to undefined)

const { status, data } = await apiInstance.epicsEpicIdGet(
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

# **epicsEpicIdPut**
> Epic epicsEpicIdPut(epicUpdateRequest)

Updates the details of the specified epic.

### Example

```typescript
import {
    EpicsApi,
    Configuration,
    EpicUpdateRequest
} from 'aha-api-client';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let epicId: string; //Numeric ID or key of the epic (default to undefined)
let epicUpdateRequest: EpicUpdateRequest; //

const { status, data } = await apiInstance.epicsEpicIdPut(
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

# **goalsGoalIdEpicsGet**
> ProductsProductIdEpicsGet200Response goalsGoalIdEpicsGet()

Retrieves a list of epics associated with the specified goal.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from 'aha-api-client';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let goalId: string; //Numeric ID or key of the goal (default to undefined)

const { status, data } = await apiInstance.goalsGoalIdEpicsGet(
    goalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **goalId** | [**string**] | Numeric ID or key of the goal | defaults to undefined|


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
|**404** | Goal not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiativesInitiativeIdEpicsGet**
> ProductsProductIdEpicsGet200Response initiativesInitiativeIdEpicsGet()

Retrieves a list of epics associated with the specified initiative.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from 'aha-api-client';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

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

# **productsProductIdEpicsGet**
> ProductsProductIdEpicsGet200Response productsProductIdEpicsGet()

Retrieves a list of epics associated with the specified product.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from 'aha-api-client';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let productId: string; //Numeric ID or key of the product (default to undefined)

const { status, data } = await apiInstance.productsProductIdEpicsGet(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | Numeric ID or key of the product | defaults to undefined|


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
|**404** | Product not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsProductIdEpicsPost**
> Epic productsProductIdEpicsPost(epicCreateRequest)

Creates a new epic in the specified product.

### Example

```typescript
import {
    EpicsApi,
    Configuration,
    EpicCreateRequest
} from 'aha-api-client';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let productId: string; //Numeric ID or key of the product the epic should be created in (default to undefined)
let epicCreateRequest: EpicCreateRequest; //

const { status, data } = await apiInstance.productsProductIdEpicsPost(
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

# **releasesReleaseIdEpicsGet**
> ProductsProductIdEpicsGet200Response releasesReleaseIdEpicsGet()

Retrieves a list of epics associated with the specified release.

### Example

```typescript
import {
    EpicsApi,
    Configuration
} from 'aha-api-client';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let releaseId: string; //Numeric ID or key of the release (default to undefined)

const { status, data } = await apiInstance.releasesReleaseIdEpicsGet(
    releaseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releaseId** | [**string**] | Numeric ID or key of the release | defaults to undefined|


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
|**404** | Release not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasesReleaseIdEpicsPost**
> Epic releasesReleaseIdEpicsPost(epicCreateRequest)

Creates a new epic in the specified release.

### Example

```typescript
import {
    EpicsApi,
    Configuration,
    EpicCreateRequest
} from 'aha-api-client';

const configuration = new Configuration();
const apiInstance = new EpicsApi(configuration);

let releaseId: string; //Numeric ID or key of the release the epic should be created in (default to undefined)
let epicCreateRequest: EpicCreateRequest; //

const { status, data } = await apiInstance.releasesReleaseIdEpicsPost(
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

