# RequirementUpdateRequestRequirement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the requirement | [optional] [default to undefined]
**workflowStatus** | [**RequirementUpdateRequestRequirementWorkflowStatus**](RequirementUpdateRequestRequirementWorkflowStatus.md) |  | [optional] [default to undefined]
**description** | **string** | HTML description of the requirement | [optional] [default to undefined]
**assignedToUser** | [**RequirementUpdateRequestRequirementAssignedToUser**](RequirementUpdateRequestRequirementAssignedToUser.md) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags to associate with the requirement | [optional] [default to undefined]
**customFields** | **{ [key: string]: any; }** | Custom field values | [optional] [default to undefined]

## Example

```typescript
import { RequirementUpdateRequestRequirement } from '@cedricziel/aha-js';

const instance: RequirementUpdateRequestRequirement = {
    name,
    workflowStatus,
    description,
    assignedToUser,
    tags,
    customFields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
