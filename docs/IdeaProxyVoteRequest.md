# IdeaProxyVoteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**voteType** | **string** | Type of vote | [default to undefined]
**proxyUserName** | **string** | Name of the user on whose behalf the vote is being cast | [default to undefined]
**proxyUserEmail** | **string** | Email of the user on whose behalf the vote is being cast | [default to undefined]
**proxyUserOrganization** | **string** | Organization of the proxy user | [optional] [default to undefined]
**ideaPortalId** | **string** | ID of the idea portal associated with the proxy vote | [optional] [default to undefined]
**customFields** | **{ [key: string]: any; }** | Custom fields for the proxy vote | [optional] [default to undefined]
**notes** | **string** | Additional notes about the proxy vote | [optional] [default to undefined]

## Example

```typescript
import { IdeaProxyVoteRequest } from '@cedricziel/aha-js';

const instance: IdeaProxyVoteRequest = {
    voteType,
    proxyUserName,
    proxyUserEmail,
    proxyUserOrganization,
    ideaPortalId,
    customFields,
    notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
