# ReleasePhase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the release phase | [default to undefined]
**name** | **string** | Name of the release phase | [default to undefined]
**startOn** | **string** | Start date of the release phase | [default to undefined]
**endOn** | **string** | End date of the release phase | [default to undefined]
**type** | **string** | Type of the release phase | [default to undefined]
**releaseId** | **number** | ID of the release this phase belongs to | [default to undefined]
**createdAt** | **string** | When the release phase was created | [default to undefined]
**updatedAt** | **string** | When the release phase was last updated | [default to undefined]
**progress** | **number** | Progress percentage of the release phase | [default to undefined]
**progressSource** | **string** | Source for calculating progress | [default to undefined]
**durationSource** | **string** | Source for calculating duration | [default to undefined]
**description** | [**ReleasePhaseDescription**](ReleasePhaseDescription.md) |  | [optional] [default to undefined]
**release** | [**ReleasePhaseRelease**](ReleasePhaseRelease.md) |  | [optional] [default to undefined]
**url** | **string** | URL to view the release phase in the web interface | [optional] [default to undefined]
**resource** | **string** | API URL for this release phase | [optional] [default to undefined]
**commentsCount** | **number** | Number of comments on this release phase | [optional] [default to undefined]
**customFields** | [**Array&lt;CustomField&gt;**](CustomField.md) | Custom fields associated with this release phase | [optional] [default to undefined]

## Example

```typescript
import { ReleasePhase } from '@cedricziel/aha-js';

const instance: ReleasePhase = {
    id,
    name,
    startOn,
    endOn,
    type,
    releaseId,
    createdAt,
    updatedAt,
    progress,
    progressSource,
    durationSource,
    description,
    release,
    url,
    resource,
    commentsCount,
    customFields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
