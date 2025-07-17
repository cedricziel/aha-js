# Goal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the goal | [optional] [default to undefined]
**name** | **string** | Name of the goal | [optional] [default to undefined]
**referenceNum** | **string** | Reference number of the goal | [optional] [default to undefined]
**status** | **string** | Current status of the goal | [optional] [default to undefined]
**position** | **number** | Position for sorting goals | [optional] [default to undefined]
**score** | **number** | Score associated with the goal | [optional] [default to undefined]
**createdAt** | **string** | Creation date of the goal | [optional] [default to undefined]
**updatedAt** | **string** | Last update date of the goal | [optional] [default to undefined]
**startDate** | **string** | Start date of the goal | [optional] [default to undefined]
**endDate** | **string** | End date of the goal | [optional] [default to undefined]
**progress** | **number** | Progress percentage towards goal completion | [optional] [default to undefined]
**progressSource** | **string** | Source for calculating progress | [optional] [default to undefined]
**url** | **string** | URL to view the goal in the Aha! web application | [optional] [default to undefined]
**resource** | **string** | API resource URL for the goal | [optional] [default to undefined]
**project** | [**InitiativeResponseInitiativeProject**](InitiativeResponseInitiativeProject.md) |  | [optional] [default to undefined]
**workflowStatus** | [**IdeasListResponseIdeasInnerWorkflowStatus**](IdeasListResponseIdeasInnerWorkflowStatus.md) |  | [optional] [default to undefined]
**description** | [**IdeasListResponseIdeasInnerDescription**](IdeasListResponseIdeasInnerDescription.md) |  | [optional] [default to undefined]
**attachments** | **Array&lt;object&gt;** | Attachments to the goal | [optional] [default to undefined]
**assignedToUser** | [**User**](User.md) |  | [optional] [default to undefined]
**createdByUser** | [**User**](User.md) |  | [optional] [default to undefined]
**commentsCount** | **number** | Number of comments on the goal | [optional] [default to undefined]
**keyResults** | [**Array&lt;GoalKeyResultsInner&gt;**](GoalKeyResultsInner.md) | Key results associated with the goal | [optional] [default to undefined]
**initiatives** | [**Array&lt;GoalInitiativesInner&gt;**](GoalInitiativesInner.md) | Initiatives associated with the goal | [optional] [default to undefined]
**features** | [**Array&lt;GoalInitiativesInner&gt;**](GoalInitiativesInner.md) | Features associated with the goal | [optional] [default to undefined]
**releases** | [**Array&lt;GoalInitiativesInner&gt;**](GoalInitiativesInner.md) | Releases associated with the goal | [optional] [default to undefined]
**integrationFields** | [**Array&lt;FeatureIntegrationFieldsInner&gt;**](FeatureIntegrationFieldsInner.md) | Integration fields for the goal | [optional] [default to undefined]
**customFields** | **Array&lt;object&gt;** | Custom fields for the goal | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags associated with the goal | [optional] [default to undefined]
**fullTags** | **Array&lt;object&gt;** | Full tag objects with metadata | [optional] [default to undefined]

## Example

```typescript
import { Goal } from '@cedricziel/aha-js';

const instance: Goal = {
    id,
    name,
    referenceNum,
    status,
    position,
    score,
    createdAt,
    updatedAt,
    startDate,
    endDate,
    progress,
    progressSource,
    url,
    resource,
    project,
    workflowStatus,
    description,
    attachments,
    assignedToUser,
    createdByUser,
    commentsCount,
    keyResults,
    initiatives,
    features,
    releases,
    integrationFields,
    customFields,
    tags,
    fullTags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
