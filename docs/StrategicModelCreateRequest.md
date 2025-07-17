# StrategicModelCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the strategic model | [default to undefined]
**description** | **string** | Description of the strategic model | [optional] [default to undefined]
**type** | **string** | Type of strategic model | [default to undefined]
**data** | **object** | Strategic model data structure (varies by type) | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags to associate with the strategic model | [optional] [default to undefined]

## Example

```typescript
import { StrategicModelCreateRequest } from '@cedricziel/aha-js';

const instance: StrategicModelCreateRequest = {
    name,
    description,
    type,
    data,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
