# ReleasePhaseCreateRequestReleasePhase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the release phase | [default to undefined]
**releaseId** | **number** | ID of the release to which the new release phase belongs | [default to undefined]
**phaseType** | **string** | Type of phase | [default to undefined]
**startOn** | **string** | Start date of the release phase | [optional] [default to undefined]
**endOn** | **string** | End date of the release phase | [optional] [default to undefined]
**description** | **string** | HTML description of the release phase | [optional] [default to undefined]
**progressSource** | **string** | Source for calculating progress | [optional] [default to undefined]
**progress** | **number** | Progress percentage (only when progress_source is manual) | [optional] [default to undefined]
**durationSource** | **string** | Source for calculating duration | [optional] [default to undefined]
**customFields** | **{ [key: string]: any; }** | Custom field values | [optional] [default to undefined]

## Example

```typescript
import { ReleasePhaseCreateRequestReleasePhase } from '@cedricziel/aha-js';

const instance: ReleasePhaseCreateRequestReleasePhase = {
    name,
    releaseId,
    phaseType,
    startOn,
    endOn,
    description,
    progressSource,
    progress,
    durationSource,
    customFields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
