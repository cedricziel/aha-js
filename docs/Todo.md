# Todo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the to-do | [default to undefined]
**name** | **string** | Name of the to-do | [default to undefined]
**body** | **string** | Description of the to-do | [default to undefined]
**dueDate** | **string** | Due date of the to-do | [optional] [default to undefined]
**status** | **string** | Status of the to-do | [default to undefined]
**position** | **number** | Position of the to-do in the list | [optional] [default to undefined]
**createdAt** | **string** | When the to-do was created | [default to undefined]
**updatedAt** | **string** | When the to-do was last updated | [default to undefined]
**productId** | **string** | ID of the product this to-do belongs to | [default to undefined]
**assignedToUsers** | [**Array&lt;User&gt;**](User.md) | Users assigned to this to-do | [optional] [default to undefined]
**createdByUser** | [**User**](User.md) |  | [optional] [default to undefined]
**attachments** | [**Array&lt;Attachment&gt;**](Attachment.md) | Attachments associated with this to-do | [optional] [default to undefined]
**url** | **string** | URL to view the to-do in the web interface | [optional] [default to undefined]
**resource** | **string** | API URL for this to-do | [optional] [default to undefined]
**commentsCount** | **number** | Number of comments on this to-do | [optional] [default to undefined]
**taskable** | [**TodoTaskable**](TodoTaskable.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Todo } from '@cedricziel/aha-js';

const instance: Todo = {
    id,
    name,
    body,
    dueDate,
    status,
    position,
    createdAt,
    updatedAt,
    productId,
    assignedToUsers,
    createdByUser,
    attachments,
    url,
    resource,
    commentsCount,
    taskable,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
