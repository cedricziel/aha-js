# MePendingTasksResponseTasksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Task ID | [default to undefined]
**name** | **string** | Task name | [default to undefined]
**description** | **string** | Task description | [optional] [default to undefined]
**dueDate** | **string** | Task due date | [optional] [default to undefined]
**priority** | **string** | Task priority level | [optional] [default to undefined]
**status** | **string** | Task status | [default to undefined]
**assignedToUser** | [**MeAssignedRecordsResponseRecordsInnerAssignedToUser**](MeAssignedRecordsResponseRecordsInnerAssignedToUser.md) |  | [default to undefined]
**assignedByUser** | [**MePendingTasksResponseTasksInnerAssignedByUser**](MePendingTasksResponseTasksInnerAssignedByUser.md) |  | [optional] [default to undefined]
**createdAt** | **string** | When the task was created | [default to undefined]
**updatedAt** | **string** | When the task was last updated | [default to undefined]
**url** | **string** | URL to the task\&#39;s page | [optional] [default to undefined]
**resource** | **string** | URL to the task\&#39;s API resource | [optional] [default to undefined]

## Example

```typescript
import { MePendingTasksResponseTasksInner } from '@cedricziel/aha-js';

const instance: MePendingTasksResponseTasksInner = {
    id,
    name,
    description,
    dueDate,
    priority,
    status,
    assignedToUser,
    assignedByUser,
    createdAt,
    updatedAt,
    url,
    resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
