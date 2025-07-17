# IdeasApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ideasCreate**](#ideascreate) | **POST** /products/{product_id}/ideas | Create an idea|
|[**ideasCreateEndorsement**](#ideascreateendorsement) | **POST** /ideas/{id}/endorsements | Create an endorsement (proxy vote)|
|[**ideasDelete**](#ideasdelete) | **DELETE** /ideas/{id} | Delete an idea|
|[**ideasGetById**](#ideasgetbyid) | **GET** /ideas/{id} | Get a specific idea|
|[**ideasGetEndorsements**](#ideasgetendorsements) | **GET** /ideas/{id}/endorsements | Get endorsements for an idea|
|[**ideasGetVotes**](#ideasgetvotes) | **GET** /ideas/{id}/votes | Get votes for an idea|
|[**ideasGetWatchers**](#ideasgetwatchers) | **GET** /ideas/{id}/watchers | Get idea watchers|
|[**ideasIdeaIdCommentsGet**](#ideasideaidcommentsget) | **GET** /ideas/{idea_id}/comments | List comments on an idea|
|[**ideasList**](#ideaslist) | **GET** /ideas | List ideas|
|[**ideasMarkSpam**](#ideasmarkspam) | **POST** /ideas/{id}/spam | Mark idea as spam|
|[**ideasPromote**](#ideaspromote) | **POST** /ideas/{id}/promote | Promote an idea|
|[**ideasUnmarkSpam**](#ideasunmarkspam) | **DELETE** /ideas/{id}/spam | Unmark idea as spam|
|[**ideasUpdate**](#ideasupdate) | **PUT** /ideas/{id} | Update an idea|
|[**ideasUpdateWatchers**](#ideasupdatewatchers) | **PUT** /ideas/{id}/watchers | Update idea watchers|
|[**ideasVote**](#ideasvote) | **POST** /ideas/{id}/votes | Vote on an idea|
|[**productsProductIdIdeasGet**](#productsproductidideasget) | **GET** /products/{product_id}/ideas | List ideas for a product|
|[**productsProductIdIdeasPortalUserPost**](#productsproductidideasportaluserpost) | **POST** /products/{product_id}/ideas/portal_user | Create an idea created by a ideas portal user|
|[**productsProductIdIdeasWithCategoryPost**](#productsproductidideaswithcategorypost) | **POST** /products/{product_id}/ideas/with_category | Create an idea with a category|
|[**productsProductIdIdeasWithScorePost**](#productsproductidideaswithscorepost) | **POST** /products/{product_id}/ideas/with_score | Create an idea with a score|

# **ideasCreate**
> IdeaResponse ideasCreate(ideaCreateRequest)

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

const { status, data } = await apiInstance.ideasCreate(
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

# **ideasCreateEndorsement**
> IdeasCreateEndorsement201Response ideasCreateEndorsement(ideaEndorsementRequest)

Creates an endorsement (proxy vote) on an idea on behalf of another user.

### Example

```typescript
import {
    IdeasApi,
    Configuration,
    IdeaEndorsementRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let id: string; //Numeric ID or key of the idea (default to undefined)
let ideaEndorsementRequest: IdeaEndorsementRequest; //

const { status, data } = await apiInstance.ideasCreateEndorsement(
    id,
    ideaEndorsementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaEndorsementRequest** | **IdeaEndorsementRequest**|  | |
| **id** | [**string**] | Numeric ID or key of the idea | defaults to undefined|


### Return type

**IdeasCreateEndorsement201Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Endorsement created successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Idea not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ideasDelete**
> ideasDelete()

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

const { status, data } = await apiInstance.ideasDelete(
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

# **ideasGetById**
> IdeaResponse ideasGetById()

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

const { status, data } = await apiInstance.ideasGetById(
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

# **ideasGetEndorsements**
> IdeasGetEndorsements200Response ideasGetEndorsements()

Retrieves all endorsements for a specific idea.

### Example

```typescript
import {
    IdeasApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let id: string; //Numeric ID or key of the idea (default to undefined)
let page: number; //Page number for pagination (optional) (default to 1)
let perPage: number; //Number of endorsements per page (optional) (default to 20)

const { status, data } = await apiInstance.ideasGetEndorsements(
    id,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the idea | defaults to undefined|
| **page** | [**number**] | Page number for pagination | (optional) defaults to 1|
| **perPage** | [**number**] | Number of endorsements per page | (optional) defaults to 20|


### Return type

**IdeasGetEndorsements200Response**

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

# **ideasGetVotes**
> IdeasGetVotes200Response ideasGetVotes()

Retrieves all votes for a specific idea.

### Example

```typescript
import {
    IdeasApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let id: string; //Numeric ID or key of the idea (default to undefined)
let page: number; //Page number for pagination (optional) (default to 1)
let perPage: number; //Number of votes per page (optional) (default to 20)

const { status, data } = await apiInstance.ideasGetVotes(
    id,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the idea | defaults to undefined|
| **page** | [**number**] | Page number for pagination | (optional) defaults to 1|
| **perPage** | [**number**] | Number of votes per page | (optional) defaults to 20|


### Return type

**IdeasGetVotes200Response**

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

# **ideasGetWatchers**
> IdeasGetWatchers200Response ideasGetWatchers()

Retrieves the watchers for an idea.

### Example

```typescript
import {
    IdeasApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let id: string; //Numeric ID or key of the idea (default to undefined)

const { status, data } = await apiInstance.ideasGetWatchers(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the idea | defaults to undefined|


### Return type

**IdeasGetWatchers200Response**

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

# **ideasList**
> IdeasListResponse ideasList()

Retrieves a list of all ideas in the account.

### Example

```typescript
import {
    IdeasApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let q: string; //Search term to match against idea name. (optional) (default to undefined)
let updatedSince: string; //UTC timestamp (in ISO8601 format). If provided, only ideas updated after the timestamp will be returned. (optional) (default to undefined)
let assignedToUser: string; //ID or email address of a user. If provided, returns only ideas assigned to that user. (optional) (default to undefined)
let status: string; //Status filter for ideas. (optional) (default to undefined)
let category: string; //Filter ideas by category. (optional) (default to undefined)
let productId: string; //Filter ideas by product ID. (optional) (default to undefined)
let ideaPortalId: string; //Filter ideas by idea portal ID. (optional) (default to undefined)
let spam: boolean; //When true, shows ideas that have been marked as spam. By default, no spam ideas will be shown. (optional) (default to undefined)
let workflowStatus: string; //When present, filters to ideas with the provided workflow status ID or name. (optional) (default to undefined)
let sort: 'recent' | 'trending' | 'popular'; //Sorting of the list of ideas. Accepted values are recent, trending, or popular. (optional) (default to undefined)
let createdBefore: string; //UTC timestamp (in ISO8601 format). If provided, only ideas created before the timestamp will be returned. (optional) (default to undefined)
let createdSince: string; //UTC timestamp (in ISO8601 format). If provided, only ideas created after the timestamp will be returned. (optional) (default to undefined)
let tag: string; //String tag value. If provided, only ideas with the associated tag will be returned. (optional) (default to undefined)
let userId: string; //ID of a user. If provided, only ideas created by that user will be returned. (optional) (default to undefined)
let ideaUserId: string; //ID of an idea user. If provided, only ideas created by that idea user will be returned. (optional) (default to undefined)
let page: number; //Page number for pagination. (optional) (default to 1)
let perPage: number; //Number of ideas per page. (optional) (default to 20)

const { status, data } = await apiInstance.ideasList(
    q,
    updatedSince,
    assignedToUser,
    status,
    category,
    productId,
    ideaPortalId,
    spam,
    workflowStatus,
    sort,
    createdBefore,
    createdSince,
    tag,
    userId,
    ideaUserId,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | Search term to match against idea name. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only ideas updated after the timestamp will be returned. | (optional) defaults to undefined|
| **assignedToUser** | [**string**] | ID or email address of a user. If provided, returns only ideas assigned to that user. | (optional) defaults to undefined|
| **status** | [**string**] | Status filter for ideas. | (optional) defaults to undefined|
| **category** | [**string**] | Filter ideas by category. | (optional) defaults to undefined|
| **productId** | [**string**] | Filter ideas by product ID. | (optional) defaults to undefined|
| **ideaPortalId** | [**string**] | Filter ideas by idea portal ID. | (optional) defaults to undefined|
| **spam** | [**boolean**] | When true, shows ideas that have been marked as spam. By default, no spam ideas will be shown. | (optional) defaults to undefined|
| **workflowStatus** | [**string**] | When present, filters to ideas with the provided workflow status ID or name. | (optional) defaults to undefined|
| **sort** | [**&#39;recent&#39; | &#39;trending&#39; | &#39;popular&#39;**]**Array<&#39;recent&#39; &#124; &#39;trending&#39; &#124; &#39;popular&#39;>** | Sorting of the list of ideas. Accepted values are recent, trending, or popular. | (optional) defaults to undefined|
| **createdBefore** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only ideas created before the timestamp will be returned. | (optional) defaults to undefined|
| **createdSince** | [**string**] | UTC timestamp (in ISO8601 format). If provided, only ideas created after the timestamp will be returned. | (optional) defaults to undefined|
| **tag** | [**string**] | String tag value. If provided, only ideas with the associated tag will be returned. | (optional) defaults to undefined|
| **userId** | [**string**] | ID of a user. If provided, only ideas created by that user will be returned. | (optional) defaults to undefined|
| **ideaUserId** | [**string**] | ID of an idea user. If provided, only ideas created by that idea user will be returned. | (optional) defaults to undefined|
| **page** | [**number**] | Page number for pagination. | (optional) defaults to 1|
| **perPage** | [**number**] | Number of ideas per page. | (optional) defaults to 20|


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ideasMarkSpam**
> IdeaResponse ideasMarkSpam()

Marks an idea as spam.

### Example

```typescript
import {
    IdeasApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let id: string; //Numeric ID or key of the idea (default to undefined)

const { status, data } = await apiInstance.ideasMarkSpam(
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
|**200** | Idea marked as spam |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Idea not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ideasPromote**
> IdeasPromote200Response ideasPromote(ideaPromoteRequest)

Promotes an idea to a feature, epic, or initiative.

### Example

```typescript
import {
    IdeasApi,
    Configuration,
    IdeaPromoteRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let id: string; //Numeric ID or key of the idea (default to undefined)
let ideaPromoteRequest: IdeaPromoteRequest; //

const { status, data } = await apiInstance.ideasPromote(
    id,
    ideaPromoteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaPromoteRequest** | **IdeaPromoteRequest**|  | |
| **id** | [**string**] | Numeric ID or key of the idea | defaults to undefined|


### Return type

**IdeasPromote200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Idea promoted successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Idea not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ideasUnmarkSpam**
> IdeaResponse ideasUnmarkSpam()

Removes the spam flag from an idea.

### Example

```typescript
import {
    IdeasApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let id: string; //Numeric ID or key of the idea (default to undefined)

const { status, data } = await apiInstance.ideasUnmarkSpam(
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
|**200** | Idea unmarked as spam |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Idea not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ideasUpdate**
> IdeaResponse ideasUpdate(ideaUpdateRequest)

Updates the details of a specific idea.

### Example

```typescript
import {
    IdeasApi,
    Configuration,
    IdeaUpdateRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let id: string; //Numeric ID or key of the idea (default to undefined)
let ideaUpdateRequest: IdeaUpdateRequest; //

const { status, data } = await apiInstance.ideasUpdate(
    id,
    ideaUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaUpdateRequest** | **IdeaUpdateRequest**|  | |
| **id** | [**string**] | Numeric ID or key of the idea | defaults to undefined|


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
|**200** | Idea updated |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Idea not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ideasUpdateWatchers**
> IdeaResponse ideasUpdateWatchers(ideaWatchersRequest)

Updates the watchers for an idea.

### Example

```typescript
import {
    IdeasApi,
    Configuration,
    IdeaWatchersRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let id: string; //Numeric ID or key of the idea (default to undefined)
let ideaWatchersRequest: IdeaWatchersRequest; //

const { status, data } = await apiInstance.ideasUpdateWatchers(
    id,
    ideaWatchersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaWatchersRequest** | **IdeaWatchersRequest**|  | |
| **id** | [**string**] | Numeric ID or key of the idea | defaults to undefined|


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
|**200** | Watchers updated |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Idea not found |  -  |
|**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ideasVote**
> IdeasVote200Response ideasVote(ideaVoteRequest)

Adds a vote to an idea.

### Example

```typescript
import {
    IdeasApi,
    Configuration,
    IdeaVoteRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeasApi(configuration);

let id: string; //Numeric ID or key of the idea (default to undefined)
let ideaVoteRequest: IdeaVoteRequest; //

const { status, data } = await apiInstance.ideasVote(
    id,
    ideaVoteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ideaVoteRequest** | **IdeaVoteRequest**|  | |
| **id** | [**string**] | Numeric ID or key of the idea | defaults to undefined|


### Return type

**IdeasVote200Response**

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Vote added successfully |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Idea not found |  -  |
|**422** | Unprocessable entity (e.g., user already voted) |  -  |

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

