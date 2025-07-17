# FeatureCreateRequestFeature


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the feature | [default to undefined]
**workflowKind** | **string** | Type of feature | [optional] [default to undefined]
**workflowStatus** | [**FeatureCreateRequestFeatureWorkflowStatus**](FeatureCreateRequestFeatureWorkflowStatus.md) |  | [optional] [default to undefined]
**release** | **string** | Numeric ID or key of the release the feature should be created in | [optional] [default to undefined]
**description** | **string** | Description of the feature — may include HTML formatting | [optional] [default to undefined]
**createdBy** | **string** | Email address of the user who created the feature | [optional] [default to undefined]
**assignedToUser** | [**FeatureCreateRequestFeatureAssignedToUser**](FeatureCreateRequestFeatureAssignedToUser.md) |  | [optional] [default to undefined]
**tags** | **string** | Tags to add to the feature. Multiple tags must be separated by commas | [optional] [default to undefined]
**initialEstimateText** | **string** | The initial estimated effort in time or story points for this feature, depending on the capacity units configured | [optional] [default to undefined]
**detailedEstimateText** | **string** | The detailed estimated effort in time or story points for this feature, depending on the capacity units configured | [optional] [default to undefined]
**remainingEstimateText** | **string** | The remaining estimated effort in time or story points for this feature, depending on the capacity units configured | [optional] [default to undefined]
**initialEstimate** | **number** | Set the initial estimated effort in minutes or story points, depending on the capacity units configured | [optional] [default to undefined]
**detailedEstimate** | **number** | Set the detailed estimated effort in minutes or story points, depending on the capacity units configured | [optional] [default to undefined]
**remainingEstimate** | **number** | Set the remaining estimated effort in minutes or story points, depending on the capacity units configured | [optional] [default to undefined]
**startDate** | **string** | Date that work will start on the feature in format YYYY-MM-DD | [optional] [default to undefined]
**dueDate** | **string** | Date that work is due to be completed on the feature in format YYYY-MM-DD | [optional] [default to undefined]
**releasePhase** | **string** | Name or id of release phase which the feature belongs to | [optional] [default to undefined]
**initiative** | **string** | Name or id of initiative which the feature belongs to | [optional] [default to undefined]
**epic** | **string** | Name or id of epic which the feature belongs to | [optional] [default to undefined]
**progressSource** | **string** | Source for calculating progress on the feature | [optional] [default to undefined]
**progress** | **number** | Progress completed on the feature. May only be set when the progress_source is manual | [optional] [default to undefined]
**team** | **string** | Numeric ID or key of the Develop team to assign the feature to | [optional] [default to undefined]
**teamWorkflowStatus** | **string** | Team status of the feature — must be a valid status for the selected team | [optional] [default to undefined]
**iteration** | **string** | ID of sprint to assign the feature to, must belong to the selected team | [optional] [default to undefined]
**programIncrement** | **string** | Numeric ID or key of the PI to assign the feature to, must belong to the selected team | [optional] [default to undefined]
**scoreFacts** | [**Array&lt;FeatureCreateRequestFeatureScoreFactsInner&gt;**](FeatureCreateRequestFeatureScoreFactsInner.md) | Score facts to add to the feature (e.g., Benefit, Effort) | [optional] [default to undefined]
**goals** | **string** | Comma-separated list of goal IDs to associate with the feature | [optional] [default to undefined]
**watchers** | **string** | Comma-separated list of user IDs to add as watchers to the feature | [optional] [default to undefined]

## Example

```typescript
import { FeatureCreateRequestFeature } from '@cedricziel/aha-js';

const instance: FeatureCreateRequestFeature = {
    name,
    workflowKind,
    workflowStatus,
    release,
    description,
    createdBy,
    assignedToUser,
    tags,
    initialEstimateText,
    detailedEstimateText,
    remainingEstimateText,
    initialEstimate,
    detailedEstimate,
    remainingEstimate,
    startDate,
    dueDate,
    releasePhase,
    initiative,
    epic,
    progressSource,
    progress,
    team,
    teamWorkflowStatus,
    iteration,
    programIncrement,
    scoreFacts,
    goals,
    watchers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
