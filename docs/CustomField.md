# CustomField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the custom field value | [default to undefined]
**key** | **string** | API key for the custom field | [default to undefined]
**name** | **string** | Name of the custom field | [default to undefined]
**value** | [**CustomFieldValue**](CustomFieldValue.md) |  | [optional] [default to undefined]
**type** | **string** | Type of the custom field value | [default to undefined]
**updatedAt** | **string** | When the custom field value was last updated | [optional] [default to undefined]

## Example

```typescript
import { CustomField } from '@cedricziel/aha-js';

const instance: CustomField = {
    id,
    key,
    name,
    value,
    type,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
