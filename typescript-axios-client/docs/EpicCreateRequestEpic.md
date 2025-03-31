# EpicCreateRequestEpic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the epic | [default to undefined]
**description** | **string** | Description of the epic - may include HTML formatting | [optional] [default to undefined]
**workflowStatus** | **string** | Status of the epic - must be a valid status for the selected product | [optional] [default to undefined]
**createdBy** | **string** | Email address of the user who created the epic | [optional] [default to undefined]
**assignedToUser** | **string** | Email address of user that is assigned the epic | [optional] [default to undefined]
**tags** | **string** | Tags to add to the epic. Multiple tags must be separated by commas | [optional] [default to undefined]
**detailedEstimateText** | **string** | The detailed estimated effort in time or story points for this epic | [optional] [default to undefined]
**remainingEstimateText** | **string** | The remaining estimated effort in time or story points for this epic | [optional] [default to undefined]
**initialEstimate** | **number** | Set the initial estimated effort in minutes or story points | [optional] [default to undefined]
**detailedEstimate** | **number** | Set the detailed estimated effort in minutes or story points | [optional] [default to undefined]
**remainingEstimate** | **number** | Set the remaining estimated effort in minutes or story points | [optional] [default to undefined]
**startDate** | **string** | Date that work will start on the epic in format YYYY-MM-DD | [optional] [default to undefined]
**dueDate** | **string** | Date that work is due to be completed on the epic in format YYYY-MM-DD | [optional] [default to undefined]
**initiative** | **string** | Name or id of initiative which the epic belongs to | [optional] [default to undefined]
**progress** | **number** | Progress completed on the epic. May only be set when the progress_source is manual | [optional] [default to undefined]
**durationSource** | **string** | Source for automatically calculating start and due dates | [optional] [default to undefined]
**team** | **string** | Numeric ID or key of the Develop team to assign the epic to | [optional] [default to undefined]
**teamWorkflowStatus** | **string** | Team status of the epic - must be a valid status for the selected team | [optional] [default to undefined]
**iteration** | **string** | ID of sprint to assign the epic to, must belong to the selected team | [optional] [default to undefined]
**programIncrement** | **string** | Numeric ID or key of the PI to assign the epic to | [optional] [default to undefined]

## Example

```typescript
import { EpicCreateRequestEpic } from 'aha-api-client';

const instance: EpicCreateRequestEpic = {
    name,
    description,
    workflowStatus,
    createdBy,
    assignedToUser,
    tags,
    detailedEstimateText,
    remainingEstimateText,
    initialEstimate,
    detailedEstimate,
    remainingEstimate,
    startDate,
    dueDate,
    initiative,
    progress,
    durationSource,
    team,
    teamWorkflowStatus,
    iteration,
    programIncrement,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
