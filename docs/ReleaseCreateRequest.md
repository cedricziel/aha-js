# ReleaseCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the release | [default to undefined]
**theme** | **string** | Theme or focus of the release | [optional] [default to undefined]
**startDate** | **string** | Planned start date of the release | [optional] [default to undefined]
**releaseDate** | **string** | Planned release date | [optional] [default to undefined]
**externalReleaseDate** | **string** | External release date visible to customers | [optional] [default to undefined]
**parkingLot** | **boolean** | Whether this release is a parking lot | [optional] [default to false]
**assignedToUserId** | **string** | ID of the user assigned to the release | [optional] [default to undefined]
**description** | **string** | Description of the release | [optional] [default to undefined]
**customFields** | **{ [key: string]: any; }** | Custom field values for the release | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Tags to associate with the release | [optional] [default to undefined]

## Example

```typescript
import { ReleaseCreateRequest } from '@cedricziel/aha-js';

const instance: ReleaseCreateRequest = {
    name,
    theme,
    startDate,
    releaseDate,
    externalReleaseDate,
    parkingLot,
    assignedToUserId,
    description,
    customFields,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
