# RequirementWorkflowStatus

Current workflow status of the requirement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the workflow status | [optional] [default to undefined]
**name** | **string** | Name of the workflow status | [optional] [default to undefined]
**position** | **number** | Position of the status in the workflow | [optional] [default to undefined]
**complete** | **boolean** | Whether this status indicates completion | [optional] [default to undefined]
**color** | **string** | Color associated with this status | [optional] [default to undefined]

## Example

```typescript
import { RequirementWorkflowStatus } from '@cedricziel/aha-js';

const instance: RequirementWorkflowStatus = {
    id,
    name,
    position,
    complete,
    color,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
