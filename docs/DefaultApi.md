# DefaultApi

All URIs are relative to *https://mycompany.aha.io/api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**featuresIdCustomFieldsPut**](#featuresidcustomfieldsput) | **PUT** /features/{id}/custom_fields | |
|[**featuresIdCustomFieldsTagPut**](#featuresidcustomfieldstagput) | **PUT** /features/{id}/custom_fields/tag | |
|[**featuresIdDelete**](#featuresiddelete) | **DELETE** /features/{id} | |
|[**featuresIdGet**](#featuresidget) | **GET** /features/{id} | |
|[**featuresIdPut**](#featuresidput) | **PUT** /features/{id} | |
|[**releasesReleaseIdFeaturesGet**](#releasesreleaseidfeaturesget) | **GET** /releases/{release_id}/features | |
|[**releasesReleaseIdFeaturesPost**](#releasesreleaseidfeaturespost) | **POST** /releases/{release_id}/features | |

# **featuresIdCustomFieldsPut**
> featuresIdCustomFieldsPut()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)

const { status, data } = await apiInstance.featuresIdCustomFieldsPut(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the feature | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featuresIdCustomFieldsTagPut**
> featuresIdCustomFieldsTagPut()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)

const { status, data } = await apiInstance.featuresIdCustomFieldsTagPut(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the feature | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featuresIdDelete**
> featuresIdDelete()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)

const { status, data } = await apiInstance.featuresIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the feature | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featuresIdGet**
> featuresIdGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)

const { status, data } = await apiInstance.featuresIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the feature | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **featuresIdPut**
> featuresIdPut()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Numeric ID or key of the feature (default to undefined)

const { status, data } = await apiInstance.featuresIdPut(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Numeric ID or key of the feature | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasesReleaseIdFeaturesGet**
> releasesReleaseIdFeaturesGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let releaseId: string; //Numeric ID or key of the release (default to undefined)

const { status, data } = await apiInstance.releasesReleaseIdFeaturesGet(
    releaseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releaseId** | [**string**] | Numeric ID or key of the release | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releasesReleaseIdFeaturesPost**
> releasesReleaseIdFeaturesPost()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from '@cedricziel/aha-js';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let releaseId: string; //Numeric ID or key of the release (default to undefined)

const { status, data } = await apiInstance.releasesReleaseIdFeaturesPost(
    releaseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releaseId** | [**string**] | Numeric ID or key of the release | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

