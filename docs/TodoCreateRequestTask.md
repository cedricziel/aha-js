# TodoCreateRequestTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the to-do | [default to undefined]
**body** | **string** | Description of the to-do | [default to undefined]
**taskableType** | **string** | Type of the record this to-do belongs to | [optional] [default to undefined]
**taskableId** | **string** | ID of the record this to-do belongs to | [optional] [default to undefined]
**type** | **string** | Type of the to-do | [optional] [default to undefined]
**assignedToUsers** | **Array&lt;string&gt;** | Email addresses of assigned users | [optional] [default to undefined]
**dueDate** | **string** | Due date of the to-do | [optional] [default to undefined]

## Example

```typescript
import { TodoCreateRequestTask } from '@cedricziel/aha-js';

const instance: TodoCreateRequestTask = {
    name,
    body,
    taskableType,
    taskableId,
    type,
    assignedToUsers,
    dueDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
