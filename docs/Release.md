# Release


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the release | [optional] [default to undefined]
**name** | **string** | Name of the release | [optional] [default to undefined]
**referenceNum** | **string** | Reference number of the release | [optional] [default to undefined]
**developmentStartedOn** | **string** | Date when development started | [optional] [default to undefined]
**startDate** | **string** | Planned start date of the release | [optional] [default to undefined]
**releaseDate** | **string** | Planned release date | [optional] [default to undefined]
**releasedOn** | **string** | Actual release date | [optional] [default to undefined]
**externalReleaseDate** | **string** | External release date visible to customers | [optional] [default to undefined]
**theme** | **string** | Theme or focus of the release | [optional] [default to undefined]
**parkingLot** | **boolean** | Whether this release is a parking lot | [optional] [default to undefined]
**position** | **number** | Position for sorting releases | [optional] [default to undefined]
**createdAt** | **string** | Creation date of the release | [optional] [default to undefined]
**updatedAt** | **string** | Last update date of the release | [optional] [default to undefined]
**productId** | **string** | ID of the product the release belongs to | [optional] [default to undefined]
**progress** | **number** | Progress completed on the release (0-100) | [optional] [default to undefined]
**progressSource** | **string** | Source for calculating progress on the release | [optional] [default to undefined]
**url** | **string** | URL to view the release in the Aha! web application | [optional] [default to undefined]
**resource** | **string** | API resource URL for the release | [optional] [default to undefined]
**project** | [**InitiativeResponseInitiativeProject**](InitiativeResponseInitiativeProject.md) |  | [optional] [default to undefined]
**workflowStatus** | [**IdeasListResponseIdeasInnerWorkflowStatus**](IdeasListResponseIdeasInnerWorkflowStatus.md) |  | [optional] [default to undefined]
**description** | [**IdeasListResponseIdeasInnerDescription**](IdeasListResponseIdeasInnerDescription.md) |  | [optional] [default to undefined]
**attachments** | **Array&lt;object&gt;** | Attachments to the release | [optional] [default to undefined]
**owner** | [**User**](User.md) |  | [optional] [default to undefined]
**assignedToUser** | [**User**](User.md) |  | [optional] [default to undefined]
**createdByUser** | [**User**](User.md) |  | [optional] [default to undefined]
**commentsCount** | **number** | Number of comments on the release | [optional] [default to undefined]
**goals** | **Array&lt;object&gt;** | Goals associated with the release | [optional] [default to undefined]
**integrationFields** | [**Array&lt;FeatureIntegrationFieldsInner&gt;**](FeatureIntegrationFieldsInner.md) | Integration fields for the release | [optional] [default to undefined]
**workflowStatusTimes** | [**Array&lt;ReleaseWorkflowStatusTimesInner&gt;**](ReleaseWorkflowStatusTimesInner.md) | Workflow status times for the release | [optional] [default to undefined]
**customFields** | **Array&lt;object&gt;** | Custom fields for the release | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags associated with the release | [optional] [default to undefined]
**fullTags** | **Array&lt;object&gt;** | Full tag objects with metadata | [optional] [default to undefined]
**phases** | [**Array&lt;ReleasePhasesInner&gt;**](ReleasePhasesInner.md) | Release phases | [optional] [default to undefined]

## Example

```typescript
import { Release } from '@cedricziel/aha-js';

const instance: Release = {
    id,
    name,
    referenceNum,
    developmentStartedOn,
    startDate,
    releaseDate,
    releasedOn,
    externalReleaseDate,
    theme,
    parkingLot,
    position,
    createdAt,
    updatedAt,
    productId,
    progress,
    progressSource,
    url,
    resource,
    project,
    workflowStatus,
    description,
    attachments,
    owner,
    assignedToUser,
    createdByUser,
    commentsCount,
    goals,
    integrationFields,
    workflowStatusTimes,
    customFields,
    tags,
    fullTags,
    phases,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
