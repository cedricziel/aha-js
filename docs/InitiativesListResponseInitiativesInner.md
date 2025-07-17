# InitiativesListResponseInitiativesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the initiative | [optional] [default to undefined]
**name** | **string** | Name of the initiative | [optional] [default to undefined]
**referenceNum** | **string** | Reference number of the initiative | [optional] [default to undefined]
**status** | **string** | Status code of the initiative | [optional] [default to undefined]
**effort** | **number** | Effort required for the initiative | [optional] [default to undefined]
**value** | **number** | Value the initiative brings to the business | [optional] [default to undefined]
**presented** | **boolean** | Whether this initiative is shown on charts | [optional] [default to undefined]
**color** | **string** | Color of the initiative | [optional] [default to undefined]
**startDate** | **string** | Start date for the initiative | [optional] [default to undefined]
**endDate** | **string** | End date for the initiative | [optional] [default to undefined]
**position** | **number** | Position for sorting initiatives | [optional] [default to undefined]
**score** | **number** | Score of the initiative | [optional] [default to undefined]
**createdAt** | **string** | Creation date of the initiative | [optional] [default to undefined]
**updatedAt** | **string** | Last update date of the initiative | [optional] [default to undefined]
**productId** | **string** | ID of the product the initiative belongs to | [optional] [default to undefined]
**progress** | **number** | Progress completed on the initiative | [optional] [default to undefined]
**progressSource** | **string** | Source for calculating progress on the initiative | [optional] [default to undefined]
**durationSource** | **string** | Source for calculating start and end dates | [optional] [default to undefined]
**url** | **string** | URL to view the initiative in the Aha! web application | [optional] [default to undefined]
**resource** | **string** | API resource URL for the initiative | [optional] [default to undefined]
**project** | [**InitiativeResponseInitiativeProject**](InitiativeResponseInitiativeProject.md) |  | [optional] [default to undefined]
**workflowStatus** | [**IdeasListResponseIdeasInnerWorkflowStatus**](IdeasListResponseIdeasInnerWorkflowStatus.md) |  | [optional] [default to undefined]
**description** | [**IdeasListResponseIdeasInnerDescription**](IdeasListResponseIdeasInnerDescription.md) |  | [optional] [default to undefined]
**attachments** | **Array&lt;object&gt;** | Attachments to the initiative | [optional] [default to undefined]
**assignedToUser** | [**InitiativesListResponseInitiativesInnerAssignedToUser**](InitiativesListResponseInitiativesInnerAssignedToUser.md) |  | [optional] [default to undefined]
**timeFrame** | [**InitiativesListResponseInitiativesInnerTimeFrame**](InitiativesListResponseInitiativesInnerTimeFrame.md) |  | [optional] [default to undefined]
**commentsCount** | **number** | Number of comments on the initiative | [optional] [default to undefined]
**goals** | **Array&lt;object&gt;** | Goals associated with the initiative | [optional] [default to undefined]
**keyResults** | **Array&lt;object&gt;** | Key results associated with the initiative | [optional] [default to undefined]
**scoreFacts** | **Array&lt;object&gt;** | Score facts for the initiative | [optional] [default to undefined]
**integrationFields** | **Array&lt;object&gt;** | Integration fields for the initiative | [optional] [default to undefined]
**createdByUser** | [**InitiativesListResponseInitiativesInnerCreatedByUser**](InitiativesListResponseInitiativesInnerCreatedByUser.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InitiativesListResponseInitiativesInner } from '@cedricziel/aha-js';

const instance: InitiativesListResponseInitiativesInner = {
    id,
    name,
    referenceNum,
    status,
    effort,
    value,
    presented,
    color,
    startDate,
    endDate,
    position,
    score,
    createdAt,
    updatedAt,
    productId,
    progress,
    progressSource,
    durationSource,
    url,
    resource,
    project,
    workflowStatus,
    description,
    attachments,
    assignedToUser,
    timeFrame,
    commentsCount,
    goals,
    keyResults,
    scoreFacts,
    integrationFields,
    createdByUser,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
