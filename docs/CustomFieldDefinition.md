# CustomFieldDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the custom field definition | [default to undefined]
**name** | **string** | Name of the custom field | [default to undefined]
**key** | **string** | API key for the custom field | [default to undefined]
**type** | **string** | Type of the custom field (e.g., CustomFieldDefinitions::SelectConstant) | [default to undefined]
**customFieldableType** | **string** | Type of record this custom field can be applied to | [default to undefined]
**internalName** | **string** | Internal name for the custom field | [optional] [default to undefined]

## Example

```typescript
import { CustomFieldDefinition } from '@cedricziel/aha-js';

const instance: CustomFieldDefinition = {
    id,
    name,
    key,
    type,
    customFieldableType,
    internalName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
