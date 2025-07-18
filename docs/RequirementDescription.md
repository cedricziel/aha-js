# RequirementDescription

Description of the requirement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the description | [optional] [default to undefined]
**body** | **string** | HTML content of the description | [optional] [default to undefined]
**createdAt** | **string** | When the description was created | [optional] [default to undefined]
**updatedAt** | **string** | When the description was last updated | [optional] [default to undefined]
**attachments** | [**Array&lt;Attachment&gt;**](Attachment.md) | Attachments in the description | [optional] [default to undefined]

## Example

```typescript
import { RequirementDescription } from '@cedricziel/aha-js';

const instance: RequirementDescription = {
    id,
    body,
    createdAt,
    updatedAt,
    attachments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
