# IdeaResponseIdea


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**referenceNum** | **string** |  | [optional] [default to undefined]
**score** | **number** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**productId** | **string** |  | [optional] [default to undefined]
**votes** | **number** |  | [optional] [default to undefined]
**initialVotes** | **number** |  | [optional] [default to undefined]
**statusChangedAt** | **string** |  | [optional] [default to undefined]
**workflowStatus** | [**FeatureWorkflowStatus**](FeatureWorkflowStatus.md) |  | [optional] [default to undefined]
**description** | [**FeatureDescription**](FeatureDescription.md) |  | [optional] [default to undefined]
**visibility** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**resource** | **string** |  | [optional] [default to undefined]
**product** | [**FeatureProject**](FeatureProject.md) |  | [optional] [default to undefined]
**createdByUser** | [**IdeaResponseIdeaCreatedByUser**](IdeaResponseIdeaCreatedByUser.md) |  | [optional] [default to undefined]
**createdByPortalUser** | [**IdeaResponseIdeaCreatedByPortalUser**](IdeaResponseIdeaCreatedByPortalUser.md) |  | [optional] [default to undefined]
**createdByIdeaUser** | [**IdeaResponseIdeaCreatedByPortalUser**](IdeaResponseIdeaCreatedByPortalUser.md) |  | [optional] [default to undefined]
**assignedToUser** | [**IdeaResponseIdeaAssignedToUser**](IdeaResponseIdeaAssignedToUser.md) |  | [optional] [default to undefined]
**endorsementsCount** | **number** |  | [optional] [default to undefined]
**commentsCount** | **number** |  | [optional] [default to undefined]
**scoreFacts** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**fullTags** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**categories** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**customFields** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**workflowStatusTimes** | [**Array&lt;IdeaResponseIdeaWorkflowStatusTimesInner&gt;**](IdeaResponseIdeaWorkflowStatusTimesInner.md) |  | [optional] [default to undefined]
**submittedIdeaPortalRecordUrl** | **string** |  | [optional] [default to undefined]
**integrationFields** | **Array&lt;object&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { IdeaResponseIdea } from 'aha-js';

const instance: IdeaResponseIdea = {
    id,
    name,
    referenceNum,
    score,
    createdAt,
    updatedAt,
    productId,
    votes,
    initialVotes,
    statusChangedAt,
    workflowStatus,
    description,
    visibility,
    url,
    resource,
    product,
    createdByUser,
    createdByPortalUser,
    createdByIdeaUser,
    assignedToUser,
    endorsementsCount,
    commentsCount,
    scoreFacts,
    tags,
    fullTags,
    categories,
    customFields,
    workflowStatusTimes,
    submittedIdeaPortalRecordUrl,
    integrationFields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
