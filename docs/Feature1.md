# Feature1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**referenceNum** | **string** |  | [optional] [default to undefined]
**initiativeReferenceNum** | **string** |  | [optional] [default to undefined]
**releaseReferenceNum** | **string** |  | [optional] [default to undefined]
**epicReferenceNum** | **string** |  | [optional] [default to undefined]
**position** | **number** |  | [optional] [default to undefined]
**score** | **number** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**dueDate** | **string** |  | [optional] [default to undefined]
**productId** | **string** |  | [optional] [default to undefined]
**progress** | **number** |  | [optional] [default to undefined]
**progressSource** | **string** |  | [optional] [default to undefined]
**statusChangedOn** | **string** |  | [optional] [default to undefined]
**createdByUser** | [**User**](User.md) |  | [optional] [default to undefined]
**workflowKind** | [**FeatureWorkflowKind**](FeatureWorkflowKind.md) |  | [optional] [default to undefined]
**workflowStatus** | [**FeatureWorkflowStatus**](FeatureWorkflowStatus.md) |  | [optional] [default to undefined]
**project** | [**FeatureProject**](FeatureProject.md) |  | [optional] [default to undefined]
**description** | [**FeatureDescription**](FeatureDescription.md) |  | [optional] [default to undefined]
**attachments** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**integrationFields** | [**Array&lt;FeatureIntegrationFieldsInner&gt;**](FeatureIntegrationFieldsInner.md) |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**resource** | **string** |  | [optional] [default to undefined]
**release** | [**FeatureRelease**](FeatureRelease.md) |  | [optional] [default to undefined]
**assignedToUser** | [**User**](User.md) |  | [optional] [default to undefined]
**requirements** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**goals** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**keyResults** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**commentsCount** | **number** |  | [optional] [default to undefined]
**scoreFacts** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**fullTags** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**customFields** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**featureLinks** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**workflowStatusTimes** | [**Array&lt;FeatureWorkflowStatusTimesInner&gt;**](FeatureWorkflowStatusTimesInner.md) |  | [optional] [default to undefined]
**featureOnlyOriginalEstimate** | **number** |  | [optional] [default to undefined]
**featureOnlyRemainingEstimate** | **number** |  | [optional] [default to undefined]
**featureOnlyWorkDone** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { Feature1 } from 'aha-js';

const instance: Feature1 = {
    id,
    name,
    referenceNum,
    initiativeReferenceNum,
    releaseReferenceNum,
    epicReferenceNum,
    position,
    score,
    createdAt,
    updatedAt,
    startDate,
    dueDate,
    productId,
    progress,
    progressSource,
    statusChangedOn,
    createdByUser,
    workflowKind,
    workflowStatus,
    project,
    description,
    attachments,
    integrationFields,
    url,
    resource,
    release,
    assignedToUser,
    requirements,
    goals,
    keyResults,
    commentsCount,
    scoreFacts,
    tags,
    fullTags,
    customFields,
    featureLinks,
    workflowStatusTimes,
    featureOnlyOriginalEstimate,
    featureOnlyRemainingEstimate,
    featureOnlyWorkDone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
