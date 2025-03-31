# FeaturesIdPutRequestFeature


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the feature | [optional] [default to undefined]
**workflowKind** | **string** | Type of feature | [optional] [default to undefined]
**workflowStatus** | [**FeaturesIdPutRequestFeatureWorkflowStatus**](FeaturesIdPutRequestFeatureWorkflowStatus.md) |  | [optional] [default to undefined]
**release** | **string** | Numeric ID or key of the release the feature should be created in | [optional] [default to undefined]
**description** | **string** | Description of the feature — may include HTML formatting | [optional] [default to undefined]
**createdBy** | **string** | Email address of the user who created the feature | [optional] [default to undefined]
**assignedToUser** | **string** | Email address of user that is assigned the feature | [optional] [default to undefined]
**tags** | **string** | Tags to add to the feature. Multiple tags must be separated by commas | [optional] [default to undefined]
**initialEstimateText** | **string** | The initial estimated effort in time or story points for this feature, depending on the capacity units configured. For time: use min, h, d, w, m. Example: \&quot;2d 1h\&quot;. 1d &#x3D; 8h, 1w &#x3D; 5d, 1m &#x3D; 22d. For story points: Use p to represent points. Example: \&quot;4p\&quot;. | [optional] [default to undefined]
**detailedEstimateText** | **string** | The detailed estimated effort in time or story points for this feature, depending on the capacity units configured. For time: use min, h, d, w, m. Example: \&quot;2d 1h\&quot;. 1d &#x3D; 8h, 1w &#x3D; 5d, 1m &#x3D; 22d. For story points: Use p to represent points. Example: \&quot;4p\&quot;. | [optional] [default to undefined]
**remainingEstimateText** | **string** | The remaining estimated effort in time or story points for this feature, depending on the capacity units configured. For time: use min, h, d, w, m. Example: \&quot;2d 1h\&quot;. 1d &#x3D; 8h, 1w &#x3D; 5d, 1m &#x3D; 22d. For story points: Use p to represent points. Example: \&quot;4p\&quot;. | [optional] [default to undefined]
**initialEstimate** | **number** | Set the initial estimated effort in minutes or story points, depending on the capacity units configured | [optional] [default to undefined]
**detailedEstimate** | **number** | Set the detailed estimated effort in minutes or story points, depending on the capacity units configured | [optional] [default to undefined]
**remainingEstimate** | **number** | Set the remaining estimated effort in minutes or story points, depending on the capacity units configured | [optional] [default to undefined]
**startDate** | **string** | Date that work will start on the feature in format YYYY-MM-DD | [optional] [default to undefined]
**dueDate** | **string** | Date that work is due to be completed on the feature in format YYYY-MM-DD | [optional] [default to undefined]
**releasePhase** | **string** | Name or id of release phase which the feature belongs to | [optional] [default to undefined]
**initiative** | **string** | Name or id of initiative which the feature belongs to | [optional] [default to undefined]
**epic** | **string** | Name or id of epic which the feature belongs to | [optional] [default to undefined]
**progressSource** | **string** | Source for calculating progress on the feature. Options are: progress_manual, progress_from_requirements, progress_from_remaining_estimate, progress_from_todos | [optional] [default to undefined]
**progress** | **number** | Progress completed on the feature. May only be set when the progress_source is manual | [optional] [default to undefined]
**team** | **string** | Numeric ID or key of the Develop team to assign the feature to | [optional] [default to undefined]
**teamWorkflowStatus** | **string** | Team status of the feature — must be a valid status for the selected team | [optional] [default to undefined]
**iteration** | **string** | ID of sprint to assign the feature to, must belong to the selected team | [optional] [default to undefined]
**programIncrement** | **string** | Numeric ID or key of the PI to assign the feature to, must belong to the selected team | [optional] [default to undefined]

## Example

```typescript
import { FeaturesIdPutRequestFeature } from 'aha-js';

const instance: FeaturesIdPutRequestFeature = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
