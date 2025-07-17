# IdeaUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the idea | [optional] [default to undefined]
**description** | **string** | Description of the idea | [optional] [default to undefined]
**workflowStatusId** | **string** | ID of the workflow status | [optional] [default to undefined]
**assignedToUserId** | **string** | ID of the user to assign the idea to | [optional] [default to undefined]
**visibility** | **string** | Visibility setting for the idea | [optional] [default to undefined]
**adminResponse** | **string** | Administrator response to the idea | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags to associate with the idea | [optional] [default to undefined]
**categories** | **Array&lt;string&gt;** | Categories for the idea | [optional] [default to undefined]
**customFields** | **{ [key: string]: any; }** | Custom field values for the idea | [optional] [default to undefined]
**watchers** | **Array&lt;string&gt;** | User IDs to watch this idea | [optional] [default to undefined]
**scoreFacts** | [**Array&lt;IdeaUpdateRequestScoreFactsInner&gt;**](IdeaUpdateRequestScoreFactsInner.md) | Score facts for the idea | [optional] [default to undefined]

## Example

```typescript
import { IdeaUpdateRequest } from '@cedricziel/aha-js';

const instance: IdeaUpdateRequest = {
    name,
    description,
    workflowStatusId,
    assignedToUserId,
    visibility,
    adminResponse,
    tags,
    categories,
    customFields,
    watchers,
    scoreFacts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
