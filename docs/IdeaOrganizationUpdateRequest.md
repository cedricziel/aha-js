# IdeaOrganizationUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the idea organization | [optional] [default to undefined]
**emailDomains** | **Array&lt;string&gt;** | Email domains associated with the organization | [optional] [default to undefined]
**revenue** | **number** | Revenue value for the organization | [optional] [default to undefined]
**customFields** | **{ [key: string]: any; }** | Custom fields for the organization | [optional] [default to undefined]

## Example

```typescript
import { IdeaOrganizationUpdateRequest } from '@cedricziel/aha-js';

const instance: IdeaOrganizationUpdateRequest = {
    name,
    emailDomains,
    revenue,
    customFields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
