# IdeasListResponseIdeasInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the idea | [optional] [default to undefined]
**referenceNum** | **string** | Reference number of the idea | [optional] [default to undefined]
**name** | **string** | Name of the idea | [optional] [default to undefined]
**createdAt** | **string** | Creation date of the idea | [optional] [default to undefined]
**updatedAt** | **string** | Last update date of the idea | [optional] [default to undefined]
**workflowStatus** | [**IdeasListResponseIdeasInnerWorkflowStatus**](IdeasListResponseIdeasInnerWorkflowStatus.md) |  | [optional] [default to undefined]
**description** | [**IdeasListResponseIdeasInnerDescription**](IdeasListResponseIdeasInnerDescription.md) |  | [optional] [default to undefined]
**url** | **string** | URL to view the idea in the Aha! web application | [optional] [default to undefined]
**resource** | **string** | API resource URL for the idea | [optional] [default to undefined]

## Example

```typescript
import { IdeasListResponseIdeasInner } from '@cedricziel/aha-js';

const instance: IdeasListResponseIdeasInner = {
    id,
    referenceNum,
    name,
    createdAt,
    updatedAt,
    workflowStatus,
    description,
    url,
    resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
