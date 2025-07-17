# GoalUpdateRequestKeyResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of existing key result (omit for new key results) | [optional] [default to undefined]
**name** | **string** | Name of the key result | [optional] [default to undefined]
**targetValue** | **number** | Target value for the key result | [optional] [default to undefined]
**currentValue** | **number** | Current value of the key result | [optional] [default to undefined]
**unit** | **string** | Unit of measurement | [optional] [default to undefined]

## Example

```typescript
import { GoalUpdateRequestKeyResultsInner } from '@cedricziel/aha-js';

const instance: GoalUpdateRequestKeyResultsInner = {
    id,
    name,
    targetValue,
    currentValue,
    unit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
