# RequirementAssignedToUser

User assigned to this requirement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the assigned user | [optional] [default to undefined]
**name** | **string** | Name of the assigned user | [optional] [default to undefined]
**email** | **string** | Email of the assigned user | [optional] [default to undefined]
**createdAt** | **string** | When the user was created | [optional] [default to undefined]
**updatedAt** | **string** | When the user was last updated | [optional] [default to undefined]
**defaultAssignee** | **boolean** | Whether this user is the default assignee | [optional] [default to undefined]

## Example

```typescript
import { RequirementAssignedToUser } from '@cedricziel/aha-js';

const instance: RequirementAssignedToUser = {
    id,
    name,
    email,
    createdAt,
    updatedAt,
    defaultAssignee,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
