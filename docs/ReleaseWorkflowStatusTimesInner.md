# ReleaseWorkflowStatusTimesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statusId** | **string** | ID of the status | [optional] [default to undefined]
**statusName** | **string** | Name of the status | [optional] [default to undefined]
**startedAt** | **string** | When the release entered this status | [optional] [default to undefined]
**endedAt** | **string** | When the release left this status | [optional] [default to undefined]

## Example

```typescript
import { ReleaseWorkflowStatusTimesInner } from '@cedricziel/aha-js';

const instance: ReleaseWorkflowStatusTimesInner = {
    statusId,
    statusName,
    startedAt,
    endedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
