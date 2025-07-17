# GoalCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the goal | [default to undefined]
**description** | **string** | Description of the goal | [optional] [default to undefined]
**startDate** | **string** | Start date of the goal | [optional] [default to undefined]
**endDate** | **string** | End date of the goal | [optional] [default to undefined]
**progress** | **number** | Initial progress percentage | [optional] [default to undefined]
**progressSource** | **string** | Source for calculating progress | [optional] [default to undefined]
**assignedToUserId** | **string** | ID of the user assigned to the goal | [optional] [default to undefined]
**workflowStatusId** | **string** | ID of the workflow status | [optional] [default to undefined]
**keyResults** | [**Array&lt;GoalCreateRequestKeyResultsInner&gt;**](GoalCreateRequestKeyResultsInner.md) | Key results to create with the goal | [optional] [default to undefined]
**initiativeIds** | **Array&lt;string&gt;** | IDs of initiatives to associate with the goal | [optional] [default to undefined]
**featureIds** | **Array&lt;string&gt;** | IDs of features to associate with the goal | [optional] [default to undefined]
**releaseIds** | **Array&lt;string&gt;** | IDs of releases to associate with the goal | [optional] [default to undefined]
**customFields** | **{ [key: string]: any; }** | Custom field values for the goal | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags to associate with the goal | [optional] [default to undefined]

## Example

```typescript
import { GoalCreateRequest } from '@cedricziel/aha-js';

const instance: GoalCreateRequest = {
    name,
    description,
    startDate,
    endDate,
    progress,
    progressSource,
    assignedToUserId,
    workflowStatusId,
    keyResults,
    initiativeIds,
    featureIds,
    releaseIds,
    customFields,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
