# IdeaOrganization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the idea organization | [default to undefined]
**name** | **string** | Name of the idea organization | [default to undefined]
**emailDomains** | **Array&lt;string&gt;** | Email domains associated with the organization | [optional] [default to undefined]
**revenue** | **number** | Revenue value for the organization | [optional] [default to undefined]
**createdAt** | **string** | When the organization was created | [default to undefined]
**updatedAt** | **string** | When the organization was last updated | [default to undefined]
**customFields** | **{ [key: string]: any; }** | Custom fields for the organization | [optional] [default to undefined]
**url** | **string** | URL to the organization\&#39;s page | [optional] [default to undefined]
**resource** | **string** | URL to the organization\&#39;s API resource | [optional] [default to undefined]

## Example

```typescript
import { IdeaOrganization } from '@cedricziel/aha-js';

const instance: IdeaOrganization = {
    id,
    name,
    emailDomains,
    revenue,
    createdAt,
    updatedAt,
    customFields,
    url,
    resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
