# Attachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the attachment | [default to undefined]
**downloadUrl** | **string** | URL to download the attachment | [default to undefined]
**createdAt** | **string** | When the attachment was created | [default to undefined]
**updatedAt** | **string** | When the attachment was last updated | [default to undefined]
**originalFileSize** | **number** | Size of the original file in bytes | [optional] [default to undefined]
**contentType** | **string** | MIME type of the file | [default to undefined]
**fileName** | **string** | Name of the file | [default to undefined]
**fileSize** | **number** | Size of the file in bytes | [default to undefined]

## Example

```typescript
import { Attachment } from '@cedricziel/aha-js';

const instance: Attachment = {
    id,
    downloadUrl,
    createdAt,
    updatedAt,
    originalFileSize,
    contentType,
    fileName,
    fileSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
