# IdeaVotesApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ideasCreateEndorsement**](#ideascreateendorsement) | **POST** /ideas/{id}/endorsements | Create an endorsement (proxy vote)|
|[**ideasGetEndorsements**](#ideasgetendorsements) | **GET** /ideas/{id}/endorsements | Get endorsements for an idea|

# **ideasCreateEndorsement**
> IdeasCreateEndorsement201Response ideasCreateEndorsement(ideaEndorsementRequest)

Creates an endorsement (proxy vote) on an idea on behalf of another user.

### Example

```typescript
import {
    IdeaVotesApi,
    Configuration,
    IdeaEndorsementRequest
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeaVotesApi(configuration);

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

# **ideasGetEndorsements**
> IdeasGetEndorsements200Response ideasGetEndorsements()

Retrieves all endorsements for a specific idea.

### Example

```typescript
import {
    IdeaVotesApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new IdeaVotesApi(configuration);

let id: string; //Numeric ID or key of the idea (default to undefined)
let proxy: boolean; //If set to true, only returns proxy votes (votes with an associated organization) (optional) (default to undefined)
let page: number; //Page number for pagination (optional) (default to 1)
let perPage: number; //Number of endorsements per page (optional) (default to 20)

const { status, data } = await apiInstance.ideasGetEndorsements(
    id,
    proxy,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the idea | defaults to undefined|
| **proxy** | [**boolean**] | If set to true, only returns proxy votes (votes with an associated organization) | (optional) defaults to undefined|
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

