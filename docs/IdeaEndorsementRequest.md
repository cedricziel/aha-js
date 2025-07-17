# IdeaEndorsementRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Email address of the portal user on whose behalf the endorsement is being created | [default to undefined]
**ideaOrganizationId** | **string** | Numeric ID of the organization associated with the endorsement | [optional] [default to undefined]
**value** | **number** | Dollar value representing the importance/weight of the endorsement | [optional] [default to undefined]
**link** | **string** | Optional URL associated with the endorsement (e.g., feedback source) | [optional] [default to undefined]
**description** | **string** | Optional description of the endorsement (HTML supported) | [optional] [default to undefined]

## Example

```typescript
import { IdeaEndorsementRequest } from '@cedricziel/aha-js';

const instance: IdeaEndorsementRequest = {
    email,
    ideaOrganizationId,
    value,
    link,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
