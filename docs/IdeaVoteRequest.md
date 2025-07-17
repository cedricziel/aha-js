# IdeaVoteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**voteType** | **string** | Type of vote | [default to undefined]
**proxyUserId** | **string** | ID of the proxy user (if voting on behalf of someone else) | [optional] [default to undefined]
**proxyUserName** | **string** | Name of the proxy user (if voting on behalf of someone else) | [optional] [default to undefined]
**proxyUserEmail** | **string** | Email of the proxy user (if voting on behalf of someone else) | [optional] [default to undefined]

## Example

```typescript
import { IdeaVoteRequest } from '@cedricziel/aha-js';

const instance: IdeaVoteRequest = {
    voteType,
    proxyUserId,
    proxyUserName,
    proxyUserEmail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
