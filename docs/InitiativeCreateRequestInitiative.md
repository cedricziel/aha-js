# InitiativeCreateRequestInitiative


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the initiative | [default to undefined]
**workflowStatus** | [**InitiativeCreateRequestInitiativeWorkflowStatus**](InitiativeCreateRequestInitiativeWorkflowStatus.md) |  | [default to undefined]
**description** | **string** | Description of the initiative — may include HTML formatting | [optional] [default to undefined]
**effort** | **number** | Effort required for the initiative | [optional] [default to undefined]
**value** | **number** | Value the initiative brings to the business | [optional] [default to undefined]
**parentId** | **string** | ID of an initiative to roll up to in the parent line | [optional] [default to undefined]
**position** | **number** | Used to sort initiatives | [optional] [default to undefined]
**presented** | **boolean** | Whether this initiative is shown on charts | [optional] [default to undefined]
**startDate** | **string** | Start date for the initiative in format YYYY-MM-DD | [optional] [default to undefined]
**endDate** | **string** | End date for the initiative in format YYYY-MM-DD | [optional] [default to undefined]
**timeFrame** | [**InitiativeCreateRequestInitiativeTimeFrame**](InitiativeCreateRequestInitiativeTimeFrame.md) |  | [optional] [default to undefined]
**progressSource** | **string** | Source for calculating progress on the initiative | [optional] [default to undefined]
**progress** | **number** | Progress completed on the initiative. May only be set when the progress_source is manual. | [optional] [default to undefined]
**durationSource** | **string** | Source for automatically calculating start and end dates | [optional] [default to undefined]

## Example

```typescript
import { InitiativeCreateRequestInitiative } from '@cedricziel/aha-js';

const instance: InitiativeCreateRequestInitiative = {
    name,
    workflowStatus,
    description,
    effort,
    value,
    parentId,
    position,
    presented,
    startDate,
    endDate,
    timeFrame,
    progressSource,
    progress,
    durationSource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
