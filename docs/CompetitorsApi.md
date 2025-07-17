# CompetitorsApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**competitorsCompetitorIdDelete**](#competitorscompetitoriddelete) | **DELETE** /competitors/{competitor_id} | Delete a competitor|
|[**competitorsCompetitorIdGet**](#competitorscompetitoridget) | **GET** /competitors/{competitor_id} | Get a specific competitor|
|[**competitorsCompetitorIdPut**](#competitorscompetitoridput) | **PUT** /competitors/{competitor_id} | Update a competitor|
|[**productsProductIdCompetitorsGet**](#productsproductidcompetitorsget) | **GET** /products/{product_id}/competitors | List competitors in a product|
|[**productsProductIdCompetitorsPost**](#productsproductidcompetitorspost) | **POST** /products/{product_id}/competitors | Create a competitor|

# **competitorsCompetitorIdDelete**
> competitorsCompetitorIdDelete()

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

const { status, data } = await apiInstance.competitorsCompetitorIdDelete(
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **competitorsCompetitorIdGet**
> Competitor competitorsCompetitorIdGet()

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

const { status, data } = await apiInstance.competitorsCompetitorIdGet(
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **competitorsCompetitorIdPut**
> Competitor competitorsCompetitorIdPut(competitorUpdateRequest)

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

const { status, data } = await apiInstance.competitorsCompetitorIdPut(
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsProductIdCompetitorsGet**
> ProductsProductIdCompetitorsGet200Response productsProductIdCompetitorsGet()

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

const { status, data } = await apiInstance.productsProductIdCompetitorsGet(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ProductsProductIdCompetitorsGet200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of competitors |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsProductIdCompetitorsPost**
> Competitor productsProductIdCompetitorsPost(competitorCreateRequest)

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

const { status, data } = await apiInstance.productsProductIdCompetitorsPost(
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

