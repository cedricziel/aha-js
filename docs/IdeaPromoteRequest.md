# IdeaPromoteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**promoteTo** | **string** | Type of record to promote the idea to | [default to undefined]
**assigneeId** | **string** | ID of the user to assign the promoted record to | [optional] [default to undefined]
**releaseId** | **string** | ID of the release to associate with the promoted record (for features) | [optional] [default to undefined]
**epicId** | **string** | ID of the epic to associate with the promoted record (for features) | [optional] [default to undefined]
**initiativeId** | **string** | ID of the initiative to associate with the promoted record | [optional] [default to undefined]
**copyTags** | **boolean** | Whether to copy tags from the idea to the promoted record | [optional] [default to true]
**copyCustomFields** | **boolean** | Whether to copy custom fields from the idea to the promoted record | [optional] [default to true]
**copyDescription** | **boolean** | Whether to copy the description from the idea to the promoted record | [optional] [default to true]
**copyAttachments** | **boolean** | Whether to copy attachments from the idea to the promoted record | [optional] [default to true]

## Example

```typescript
import { IdeaPromoteRequest } from '@cedricziel/aha-js';

const instance: IdeaPromoteRequest = {
    promoteTo,
    assigneeId,
    releaseId,
    epicId,
    initiativeId,
    copyTags,
    copyCustomFields,
    copyDescription,
    copyAttachments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
