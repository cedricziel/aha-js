# IntegrationFieldIntegratable

The resource this integration field is associated with

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of the parent resource (e.g., Feature, Epic, Initiative) | [optional] [default to undefined]
**id** | **string** | ID of the parent resource | [optional] [default to undefined]
**name** | **string** | Name of the parent resource | [optional] [default to undefined]
**referenceNum** | **string** | Reference number of the parent resource | [optional] [default to undefined]
**url** | **string** | URL to view the parent resource in the web interface | [optional] [default to undefined]
**resource** | **string** | API URL for the parent resource | [optional] [default to undefined]

## Example

```typescript
import { IntegrationFieldIntegratable } from '@cedricziel/aha-js';

const instance: IntegrationFieldIntegratable = {
    type,
    id,
    name,
    referenceNum,
    url,
    resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
