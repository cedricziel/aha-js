# MeAssignedRecordsResponseRecordsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Record ID | [default to undefined]
**type** | **string** | Type of record | [default to undefined]
**name** | **string** | Name of the record | [default to undefined]
**referenceNum** | **string** | Reference number for the record | [optional] [default to undefined]
**workflowStatus** | [**MeAssignedRecordsResponseRecordsInnerWorkflowStatus**](MeAssignedRecordsResponseRecordsInnerWorkflowStatus.md) |  | [optional] [default to undefined]
**assignedToUser** | [**MeAssignedRecordsResponseRecordsInnerAssignedToUser**](MeAssignedRecordsResponseRecordsInnerAssignedToUser.md) |  | [optional] [default to undefined]
**createdAt** | **string** | When the record was created | [default to undefined]
**updatedAt** | **string** | When the record was last updated | [default to undefined]
**url** | **string** | URL to the record\&#39;s page | [optional] [default to undefined]
**resource** | **string** | URL to the record\&#39;s API resource | [optional] [default to undefined]

## Example

```typescript
import { MeAssignedRecordsResponseRecordsInner } from '@cedricziel/aha-js';

const instance: MeAssignedRecordsResponseRecordsInner = {
    id,
    type,
    name,
    referenceNum,
    workflowStatus,
    assignedToUser,
    createdAt,
    updatedAt,
    url,
    resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
