# Requirement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the requirement | [default to undefined]
**name** | **string** | Name of the requirement | [default to undefined]
**referenceNum** | **string** | Reference number of the requirement | [default to undefined]
**position** | **number** | Position of the requirement in the list | [optional] [default to undefined]
**createdAt** | **string** | When the requirement was created | [default to undefined]
**updatedAt** | **string** | When the requirement was last updated | [default to undefined]
**releaseId** | **number** | ID of the release this requirement belongs to | [optional] [default to undefined]
**createdByUser** | [**User**](User.md) |  | [optional] [default to undefined]
**workflowStatus** | [**RequirementWorkflowStatus**](RequirementWorkflowStatus.md) |  | [default to undefined]
**url** | **string** | URL to view the requirement in the web interface | [default to undefined]
**resource** | **string** | API URL for this requirement | [default to undefined]
**description** | [**RequirementDescription**](RequirementDescription.md) |  | [optional] [default to undefined]
**feature** | [**RequirementFeature**](RequirementFeature.md) |  | [default to undefined]
**assignedToUser** | [**RequirementAssignedToUser**](RequirementAssignedToUser.md) |  | [optional] [default to undefined]
**attachments** | [**Array&lt;Attachment&gt;**](Attachment.md) | Attachments associated with this requirement | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags associated with this requirement | [optional] [default to undefined]
**fullTags** | [**Array&lt;RequirementFullTagsInner&gt;**](RequirementFullTagsInner.md) | Full tag objects with IDs and names | [optional] [default to undefined]
**customFields** | [**Array&lt;CustomField&gt;**](CustomField.md) | Custom fields associated with this requirement | [optional] [default to undefined]
**integrationFields** | [**Array&lt;IntegrationField&gt;**](IntegrationField.md) | Integration fields associated with this requirement | [optional] [default to undefined]
**commentsCount** | **number** | Number of comments on this requirement | [optional] [default to undefined]
**workflowStatusTimes** | [**Array&lt;RequirementWorkflowStatusTimesInner&gt;**](RequirementWorkflowStatusTimesInner.md) | History of workflow status changes | [optional] [default to undefined]

## Example

```typescript
import { Requirement } from '@cedricziel/aha-js';

const instance: Requirement = {
    id,
    name,
    referenceNum,
    position,
    createdAt,
    updatedAt,
    releaseId,
    createdByUser,
    workflowStatus,
    url,
    resource,
    description,
    feature,
    assignedToUser,
    attachments,
    tags,
    fullTags,
    customFields,
    integrationFields,
    commentsCount,
    workflowStatusTimes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
