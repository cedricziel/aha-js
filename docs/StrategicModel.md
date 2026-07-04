# StrategicModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the strategic model | [optional] [default to undefined]
**name** | **string** | Name of the strategic model | [optional] [default to undefined]
**description** | **string** | Description of the strategic model | [optional] [default to undefined]
**type** | **string** | Type of strategic model | [optional] [default to undefined]
**createdAt** | **string** | Creation date of the strategic model | [optional] [default to undefined]
**updatedAt** | **string** | Last update date of the strategic model | [optional] [default to undefined]
**createdByUser** | [**User**](User.md) |  | [optional] [default to undefined]
**url** | **string** | URL to view the strategic model in the Aha! web application | [optional] [default to undefined]
**resource** | **string** | API resource URL for the strategic model | [optional] [default to undefined]
**project** | [**InitiativeResponseInitiativeProject**](InitiativeResponseInitiativeProject.md) |  | [optional] [default to undefined]
**data** | **{ [key: string]: any; }** | Strategic model data structure (varies by type) | [optional] [default to undefined]
**attachments** | **Array&lt;object&gt;** | Attachments to the strategic model | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags associated with the strategic model | [optional] [default to undefined]
**fullTags** | **Array&lt;object&gt;** | Full tag objects with metadata | [optional] [default to undefined]

## Example

```typescript
import { StrategicModel } from '@cedricziel/aha-js';

const instance: StrategicModel = {
    id,
    name,
    description,
    type,
    createdAt,
    updatedAt,
    createdByUser,
    url,
    resource,
    project,
    data,
    attachments,
    tags,
    fullTags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
