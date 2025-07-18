# IntegrationField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the integration field | [default to undefined]
**name** | **string** | Name of the integration field (e.g., key, id, url) | [default to undefined]
**value** | **string** | Value of the integration field (e.g., JRA-123, 435) | [default to undefined]
**integrationId** | **number** | ID of the associated integration | [default to undefined]
**serviceName** | **string** | Service name of the integration (e.g., jira, github) | [default to undefined]
**createdAt** | **string** | When the integration field was created | [optional] [default to undefined]
**integratable** | [**IntegrationFieldIntegratable**](IntegrationFieldIntegratable.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IntegrationField } from '@cedricziel/aha-js';

const instance: IntegrationField = {
    id,
    name,
    value,
    integrationId,
    serviceName,
    createdAt,
    integratable,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
