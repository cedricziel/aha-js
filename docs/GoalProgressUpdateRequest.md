# GoalProgressUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**progress** | **number** | Progress percentage towards goal completion | [optional] [default to undefined]
**progressSource** | **string** | Source for calculating progress | [optional] [default to undefined]
**keyResults** | [**Array&lt;GoalProgressUpdateRequestKeyResultsInner&gt;**](GoalProgressUpdateRequestKeyResultsInner.md) | Key results progress updates | [optional] [default to undefined]
**notes** | **string** | Notes about the progress update | [optional] [default to undefined]

## Example

```typescript
import { GoalProgressUpdateRequest } from '@cedricziel/aha-js';

const instance: GoalProgressUpdateRequest = {
    progress,
    progressSource,
    keyResults,
    notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
