# IdeasApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ideasIdDelete**](#ideasiddelete) | **DELETE** /ideas/{id} | Delete an idea|
|[**ideasIdGet**](#ideasidget) | **GET** /ideas/{id} | Get a specific idea|
|[**ideasIdeaIdCommentsGet**](#ideasideaidcommentsget) | **GET** /ideas/{idea_id}/comments | List comments on an idea|
|[**productsProductIdIdeasGet**](#productsproductidideasget) | **GET** /products/{product_id}/ideas | List ideas for a product|
|[**productsProductIdIdeasPortalUserPost**](#productsproductidideasportaluserpost) | **POST** /products/{product_id}/ideas/portal_user | Create an idea created by a ideas portal user|
|[**productsProductIdIdeasPost**](#productsproductidideaspost) | **POST** /products/{product_id}/ideas | Create an idea|
|[**productsProductIdIdeasWithCategoryPost**](#productsproductidideaswithcategorypost) | **POST** /products/{product_id}/ideas/with_category | Create an idea with a category|
|[**productsProductIdIdeasWithScorePost**](#productsproductidideaswithscorepost) | **POST** /products/{product_id}/ideas/with_score | Create an idea with a score|

# **ideasIdDelete**
> ideasIdDelete()

Deletes the specified idea.

### Example

```typescript
import {
    IdeasApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let id: string; //Numeric ID or key of the idea (default to undefined)

const { status, data } = await apiInstance.ideasIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the idea | defaults to undefined|


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
|**204** | No Content |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Idea not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ideasIdGet**
> IdeaResponse ideasIdGet()

Retrieves the details of a specific idea.

### Example

```typescript
import {
    IdeasApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let id: string; //Numeric ID or key of the idea (default to undefined)

const { status, data } = await apiInstance.ideasIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the idea | defaults to undefined|


### Return type

**IdeaResponse**

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
|**404** | Idea not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ideasIdeaIdCommentsGet**
> EpicsEpicIdCommentsGet200Response ideasIdeaIdCommentsGet()

Retrieves a list of comments associated with the specified idea.

### Example

```typescript
import {
    IdeasApi,
    Configuration
} from '@cedricziel/aha-js';

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

# **productsProductIdIdeasGet**
> IdeasListResponse productsProductIdIdeasGet()

Retrieves a list of ideas for the specified product.

### Example

```typescript
import {
    IdeasApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let productId: string; //Numeric ID or key of the product (default to undefined)
let q: string; //Search term to match against the idea name (optional) (default to undefined)
let spam: boolean; //When true, shows ideas that have been marked as spam. By default, no spam ideas will be shown. (optional) (default to undefined)
let workflowStatus: string; //When present, filters to ideas with the provided workflow status ID or name. (optional) (default to undefined)
let sort: 'recent' | 'trending' | 'popular'; //Sorting of the list of ideas. Accepted values are recent, trending, or popular. (optional) (default to undefined)
let createdBefore: string; //UTC timestamp (in ISO8601 format). If provided, only ideas created before the timestamp will be returned. (optional) (default to undefined)
let createdSince: string; //UTC timestamp (in ISO8601 format). If provided, only ideas created after the timestamp will be returned. (optional) (default to undefined)
let updatedSince: string; //UTC timestamp (in ISO8601 format). If provided, only ideas updated or created after the timestamp will be returned. (optional) (default to undefined)
let tag: string; //String tag value. If provided, only ideas with the associated tag will be returned. (optional) (default to undefined)
let userId: string; //ID of a user. If provided, only ideas created by that user will be returned. (optional) (default to undefined)
let ideaUserId: string; //ID of an idea user. If provided, only ideas created by that idea user will be returned. (optional) (default to undefined)

const { status, data } = await apiInstance.productsProductIdIdeasGet(
    productId,
    q,
    spam,
    workflowStatus,
    sort,
    createdBefore,
    createdSince,
    updatedSince,
    tag,
    userId,
    ideaUserId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | Numeric ID or key of the product | defaults to undefined|
| **q** | [**string**] | Search term to match against the idea name | (optional) defaults to undefined|
| **spam** | [**boolean**] | When true, shows ideas that have been marked as spam. By default, no spam ideas will be shown. | (optional) defaults to undefined|
| **workflowStatus** | [**string**] | When present, filters to ideas with the provided workflow status ID or name. | (optional) defaults to undefined|
| **sort** | [**&#39;recent&#39; | &#39;trending&#39; | &#39;popular&#39;**]**Array<&#39;recent&#39; &#124; &#39;trending&#39; &#124; &#39;popular&#39;>** | Sorting of the list of ideas. Accepted values are recent, trending, or popular. | (optional) defaults to undefined|
| **createdBefore** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only ideas created before the timestamp will be returned. | (optional) defaults to undefined|
| **createdSince** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only ideas created after the timestamp will be returned. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only ideas updated or created after the timestamp will be returned. | (optional) defaults to undefined|
| **tag** | [**string**] | String tag value. If provided, only ideas with the associated tag will be returned. | (optional) defaults to undefined|
| **userId** | [**string**] | ID of a user. If provided, only ideas created by that user will be returned. | (optional) defaults to undefined|
| **ideaUserId** | [**string**] | ID of an idea user. If provided, only ideas created by that idea user will be returned. | (optional) defaults to undefined|


### Return type

**IdeasListResponse**

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

# **productsProductIdIdeasPortalUserPost**
> IdeaResponse productsProductIdIdeasPortalUserPost(ideaCreateByPortalUserRequest)

Creates a new idea for the specified product, where the creator is an ideas portal user.  When creating an idea where the creator is an idea user we strongly suggest to provide the submitted_idea_portal_id attribute to the idea to ensure that the idea is created in the correct ideas portal and the user gets access to the portal.  If you don\'t want the idea to be submitted to any portal, you can skip this by setting skip_portal: true in the request body. 

### Example

```typescript
import {
    IdeasApi,
    Configuration,
    IdeaCreateByPortalUserRequest
} from '@cedricziel/aha-js';

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
} from '@cedricziel/aha-js';

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
} from '@cedricziel/aha-js';

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
} from '@cedricziel/aha-js';

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

