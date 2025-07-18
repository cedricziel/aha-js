# TodoUpdateRequestTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the to-do | [optional] [default to undefined]
**body** | **string** | Description of the to-do | [optional] [default to undefined]
**status** | **string** | Status of the to-do | [optional] [default to undefined]
**assignedToUsers** | **Array&lt;string&gt;** | Email addresses of assigned users | [optional] [default to undefined]
**dueDate** | **string** | Due date of the to-do | [optional] [default to undefined]

## Example

```typescript
import { TodoUpdateRequestTask } from '@cedricziel/aha-js';

const instance: TodoUpdateRequestTask = {
    name,
    body,
    status,
    assignedToUsers,
    dueDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
