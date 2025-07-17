# MeApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**meGetAssignedRecords**](#megetassignedrecords) | **GET** /me/assigned | Get records assigned to current user|
|[**meGetPendingTasks**](#megetpendingtasks) | **GET** /me/tasks | Get pending tasks assigned to current user|
|[**meGetProfile**](#megetprofile) | **GET** /me | Get current user profile|

# **meGetAssignedRecords**
> MeAssignedRecordsResponse meGetAssignedRecords()

Retrieves a list of records currently assigned to the authenticated user.

### Example

```typescript
import {
    MeApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new MeApi(configuration);

let page: number; //Page number for pagination (optional) (default to 1)
let perPage: number; //Number of records per page (optional) (default to 20)
let type: 'feature' | 'epic' | 'requirement' | 'idea' | 'initiative' | 'goal' | 'release' | 'todo'; //Filter records by type (optional) (default to undefined)

const { status, data } = await apiInstance.meGetAssignedRecords(
    page,
    perPage,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number for pagination | (optional) defaults to 1|
| **perPage** | [**number**] | Number of records per page | (optional) defaults to 20|
| **type** | [**&#39;feature&#39; | &#39;epic&#39; | &#39;requirement&#39; | &#39;idea&#39; | &#39;initiative&#39; | &#39;goal&#39; | &#39;release&#39; | &#39;todo&#39;**]**Array<&#39;feature&#39; &#124; &#39;epic&#39; &#124; &#39;requirement&#39; &#124; &#39;idea&#39; &#124; &#39;initiative&#39; &#124; &#39;goal&#39; &#124; &#39;release&#39; &#124; &#39;todo&#39;>** | Filter records by type | (optional) defaults to undefined|


### Return type

**MeAssignedRecordsResponse**

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

# **meGetPendingTasks**
> MePendingTasksResponse meGetPendingTasks()

Retrieves a list of pending tasks currently assigned to the authenticated user.

### Example

```typescript
import {
    MeApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new MeApi(configuration);

let page: number; //Page number for pagination (optional) (default to 1)
let perPage: number; //Number of tasks per page (optional) (default to 20)
let dueDateStart: string; //Filter tasks due on or after this date (optional) (default to undefined)
let dueDateEnd: string; //Filter tasks due on or before this date (optional) (default to undefined)
let priority: 'low' | 'medium' | 'high' | 'urgent'; //Filter tasks by priority level (optional) (default to undefined)

const { status, data } = await apiInstance.meGetPendingTasks(
    page,
    perPage,
    dueDateStart,
    dueDateEnd,
    priority
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number for pagination | (optional) defaults to 1|
| **perPage** | [**number**] | Number of tasks per page | (optional) defaults to 20|
| **dueDateStart** | [**string**] | Filter tasks due on or after this date | (optional) defaults to undefined|
| **dueDateEnd** | [**string**] | Filter tasks due on or before this date | (optional) defaults to undefined|
| **priority** | [**&#39;low&#39; | &#39;medium&#39; | &#39;high&#39; | &#39;urgent&#39;**]**Array<&#39;low&#39; &#124; &#39;medium&#39; &#124; &#39;high&#39; &#124; &#39;urgent&#39;>** | Filter tasks by priority level | (optional) defaults to undefined|


### Return type

**MePendingTasksResponse**

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

# **meGetProfile**
> MeProfileResponse meGetProfile()

Retrieves profile information for the currently authenticated user.

### Example

```typescript
import {
    MeApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new MeApi(configuration);

const { status, data } = await apiInstance.meGetProfile();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**MeProfileResponse**

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

