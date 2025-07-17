# GoalKeyResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the key result | [optional] [default to undefined]
**name** | **string** | Name of the key result | [optional] [default to undefined]
**targetValue** | **number** | Target value for the key result | [optional] [default to undefined]
**currentValue** | **number** | Current value of the key result | [optional] [default to undefined]
**unit** | **string** | Unit of measurement for the key result | [optional] [default to undefined]
**progress** | **number** | Progress percentage towards key result completion | [optional] [default to undefined]
**createdAt** | **string** | Creation date of the key result | [optional] [default to undefined]
**updatedAt** | **string** | Last update date of the key result | [optional] [default to undefined]

## Example

```typescript
import { GoalKeyResultsInner } from '@cedricziel/aha-js';

const instance: GoalKeyResultsInner = {
    id,
    name,
    targetValue,
    currentValue,
    unit,
    progress,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
