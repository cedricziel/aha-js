# CompetitorsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**competitorsCreate**](#competitorscreate) | **POST** /products/{product_id}/competitors | Create a competitor|
|[**competitorsDelete**](#competitorsdelete) | **DELETE** /competitors/{competitor_id} | Delete a competitor|
|[**competitorsGet**](#competitorsget) | **GET** /competitors/{competitor_id} | Get a specific competitor|
|[**competitorsListProduct**](#competitorslistproduct) | **GET** /products/{product_id}/competitors | List competitors in a product|
|[**competitorsUpdate**](#competitorsupdate) | **PUT** /competitors/{competitor_id} | Update a competitor|

# **competitorsCreate**
> Competitor competitorsCreate(competitorCreateRequest)

Adds a new competitor to the specified product.

### Example

```typescript
import {
    CompetitorsApi,
    Configuration,
    CompetitorCreateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CompetitorsApi(configuration);

let productId: string; // (default to undefined)
let competitorCreateRequest: CompetitorCreateRequest; //

const { status, data } = await apiInstance.competitorsCreate(
    productId,
    competitorCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **competitorCreateRequest** | **CompetitorCreateRequest**|  | |
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**Competitor**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Competitor created |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Product not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **competitorsDelete**
> competitorsDelete()

Removes the specified competitor.

### Example

```typescript
import {
    CompetitorsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CompetitorsApi(configuration);

let competitorId: string; // (default to undefined)

const { status, data } = await apiInstance.competitorsDelete(
    competitorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **competitorId** | [**string**] |  | defaults to undefined|


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
|**204** | Competitor deleted |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Competitor not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **competitorsGet**
> Competitor competitorsGet()

Retrieves details of the specified competitor.

### Example

```typescript
import {
    CompetitorsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CompetitorsApi(configuration);

let competitorId: string; // (default to undefined)

const { status, data } = await apiInstance.competitorsGet(
    competitorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **competitorId** | [**string**] |  | defaults to undefined|


### Return type

**Competitor**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Competitor details |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Competitor not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **competitorsListProduct**
> CompetitorsListProduct200Response competitorsListProduct()

Retrieves a list of competitors associated with the specified product.

### Example

```typescript
import {
    CompetitorsApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CompetitorsApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.competitorsListProduct(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**CompetitorsListProduct200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of competitors |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Product not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **competitorsUpdate**
> Competitor competitorsUpdate(competitorUpdateRequest)

Updates the details of the specified competitor.

### Example

```typescript
import {
    CompetitorsApi,
    Configuration,
    CompetitorUpdateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new CompetitorsApi(configuration);

let competitorId: string; // (default to undefined)
let competitorUpdateRequest: CompetitorUpdateRequest; //

const { status, data } = await apiInstance.competitorsUpdate(
    competitorId,
    competitorUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **competitorUpdateRequest** | **CompetitorUpdateRequest**|  | |
| **competitorId** | [**string**] |  | defaults to undefined|


### Return type

**Competitor**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Competitor updated |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Competitor not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

