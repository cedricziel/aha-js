# IdeasCreateEndorsement201ResponseEndorsement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the endorsement | [optional] [default to undefined]
**email** | **string** | Email of the portal user | [optional] [default to undefined]
**ideaOrganizationId** | **string** | Organization ID | [optional] [default to undefined]
**value** | **number** | Dollar value of the endorsement | [optional] [default to undefined]
**link** | **string** | Associated URL | [optional] [default to undefined]
**description** | **string** | Endorsement description | [optional] [default to undefined]
**createdAt** | **string** | When the endorsement was created | [optional] [default to undefined]
**createdByUser** | [**IdeasGetEndorsements200ResponseEndorsementsInnerCreatedByUser**](IdeasGetEndorsements200ResponseEndorsementsInnerCreatedByUser.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IdeasCreateEndorsement201ResponseEndorsement } from '@cedricziel/aha-js';

const instance: IdeasCreateEndorsement201ResponseEndorsement = {
    id,
    email,
    ideaOrganizationId,
    value,
    link,
    description,
    createdAt,
    createdByUser,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
