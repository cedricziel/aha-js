# TodoTaskable

The record this to-do is associated with

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of the record this to-do belongs to | [optional] [default to undefined]
**id** | **string** | ID of the record this to-do belongs to | [optional] [default to undefined]
**referenceNum** | **string** | Reference number of the record | [optional] [default to undefined]
**name** | **string** | Name of the record | [optional] [default to undefined]
**url** | **string** | URL to view the record in the web interface | [optional] [default to undefined]
**resource** | **string** | API URL for the record | [optional] [default to undefined]

## Example

```typescript
import { TodoTaskable } from '@cedricziel/aha-js';

const instance: TodoTaskable = {
    type,
    id,
    referenceNum,
    name,
    url,
    resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
