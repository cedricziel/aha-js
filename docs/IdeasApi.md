# IdeasApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ideasIdeaIdCommentsGet**](#ideasideaidcommentsget) | **GET** /ideas/{idea_id}/comments | List comments on an idea|
|[**productsProductIdIdeasPortalUserPost**](#productsproductidideasportaluserpost) | **POST** /products/{product_id}/ideas/portal_user | Create an idea created by a ideas portal user|
|[**productsProductIdIdeasPost**](#productsproductidideaspost) | **POST** /products/{product_id}/ideas | Create an idea|
|[**productsProductIdIdeasWithCategoryPost**](#productsproductidideaswithcategorypost) | **POST** /products/{product_id}/ideas/with_category | Create an idea with a category|
|[**productsProductIdIdeasWithScorePost**](#productsproductidideaswithscorepost) | **POST** /products/{product_id}/ideas/with_score | Create an idea with a score|

# **ideasIdeaIdCommentsGet**
> EpicsEpicIdCommentsGet200Response ideasIdeaIdCommentsGet()

Retrieves a list of comments associated with the specified idea.

### Example

```typescript
import {
    IdeasApi,
    Configuration
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let ideaId: string; // (default to undefined)

const { status, data } = await apiInstance.ideasIdeaIdCommentsGet(
    ideaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaId** | [**string**] |  | defaults to undefined|


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

# **productsProductIdIdeasPortalUserPost**
> IdeaResponse productsProductIdIdeasPortalUserPost(ideaCreateByPortalUserRequest)

Creates a new idea for the specified product, where the creator is an ideas portal user.  When creating an idea where the creator is an idea user we strongly suggest to provide the submitted_idea_portal_id attribute to the idea to ensure that the idea is created in the correct ideas portal and the user gets access to the portal.  If you don\'t want the idea to be submitted to any portal, you can skip this by setting skip_portal: true in the request body. 

### Example

```typescript
import {
    IdeasApi,
    Configuration,
    IdeaCreateByPortalUserRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let productId: string; //Numeric ID or key of the product (default to undefined)
let ideaCreateByPortalUserRequest: IdeaCreateByPortalUserRequest; //

const { status, data } = await apiInstance.productsProductIdIdeasPortalUserPost(
    productId,
    ideaCreateByPortalUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaCreateByPortalUserRequest** | **IdeaCreateByPortalUserRequest**|  | |
| **productId** | [**string**] | Numeric ID or key of the product | defaults to undefined|


### Return type

**IdeaResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Idea created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsProductIdIdeasPost**
> IdeaResponse productsProductIdIdeasPost(ideaCreateRequest)

Creates a new idea for the specified product.  When creating an idea where the creator is an idea user we strongly suggest to provide the submitted_idea_portal_id attribute to the idea to ensure that the idea is created in the correct ideas portal and the user gets access to the portal.  If you don\'t want the idea to be submitted to any portal, you can skip this by setting skip_portal: true in the request body. 

### Example

```typescript
import {
    IdeasApi,
    Configuration,
    IdeaCreateRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let productId: string; //Numeric ID or key of the product (default to undefined)
let ideaCreateRequest: IdeaCreateRequest; //

const { status, data } = await apiInstance.productsProductIdIdeasPost(
    productId,
    ideaCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaCreateRequest** | **IdeaCreateRequest**|  | |
| **productId** | [**string**] | Numeric ID or key of the product | defaults to undefined|


### Return type

**IdeaResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Idea created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsProductIdIdeasWithCategoryPost**
> IdeaResponse productsProductIdIdeasWithCategoryPost(ideaCreateRequest)

Creates a new idea for the specified product with a category.  When creating an idea where the creator is an idea user we strongly suggest to provide the submitted_idea_portal_id attribute to the idea to ensure that the idea is created in the correct ideas portal and the user gets access to the portal.  If you don\'t want the idea to be submitted to any portal, you can skip this by setting skip_portal: true in the request body. 

### Example

```typescript
import {
    IdeasApi,
    Configuration,
    IdeaCreateRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let productId: string; //Numeric ID or key of the product (default to undefined)
let ideaCreateRequest: IdeaCreateRequest; //

const { status, data } = await apiInstance.productsProductIdIdeasWithCategoryPost(
    productId,
    ideaCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaCreateRequest** | **IdeaCreateRequest**|  | |
| **productId** | [**string**] | Numeric ID or key of the product | defaults to undefined|


### Return type

**IdeaResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Idea created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsProductIdIdeasWithScorePost**
> IdeaResponse productsProductIdIdeasWithScorePost(ideaCreateRequest)

Creates a new idea for the specified product with a score.  When creating an idea where the creator is an idea user we strongly suggest to provide the submitted_idea_portal_id attribute to the idea to ensure that the idea is created in the correct ideas portal and the user gets access to the portal.  If you don\'t want the idea to be submitted to any portal, you can skip this by setting skip_portal: true in the request body. 

### Example

```typescript
import {
    IdeasApi,
    Configuration,
    IdeaCreateRequest
} from 'aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let productId: string; //Numeric ID or key of the product (default to undefined)
let ideaCreateRequest: IdeaCreateRequest; //

const { status, data } = await apiInstance.productsProductIdIdeasWithScorePost(
    productId,
    ideaCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaCreateRequest** | **IdeaCreateRequest**|  | |
| **productId** | [**string**] | Numeric ID or key of the product | defaults to undefined|


### Return type

**IdeaResponse**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Idea created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

