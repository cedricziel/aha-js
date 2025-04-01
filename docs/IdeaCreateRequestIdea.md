# IdeaCreateRequestIdea


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the idea | [default to undefined]
**description** | **string** | Description of the idea — may include HTML formatting. | [optional] [default to undefined]
**workflowStatus** | **string** | Status of the idea — must be a valid status for the selected product.  | [optional] [default to undefined]
**tags** | **string** | Tags to add to the idea. Multiple tags must be separated by commas.  | [optional] [default to undefined]
**categories** | **string** | Names of any existing categories the idea should be assigned to. Multiple categories must be separated by commas.  | [optional] [default to undefined]
**createdBy** | **string** | Email address of user who created the idea — does not need to be an Aha! user email.  | [default to undefined]
**assignedToUser** | **string** | Email address of user that is assigned the idea. | [optional] [default to undefined]
**feature** | **string** | Name or ID of the feature that the idea was promoted to | [optional] [default to undefined]
**initiative** | **string** | Name or ID of the initiative that the idea was promoted to | [optional] [default to undefined]
**epic** | **string** | Name or ID of the epic that the idea was promoted to | [optional] [default to undefined]
**duplicateIdea** | **string** | Idea ID or key for an idea which this idea duplicates. Setting this value will merge this idea into the provided idea ID; setting it to a null or blank value will unmerge this idea. Note that in the API response, this attribute is called duplicate_of.  | [optional] [default to undefined]
**initialVotes** | **number** | Number of votes to seed the vote count with when importing from other systems  | [optional] [default to undefined]
**visibility** | **string** | Initial visibility of the idea (aha, creator, employee, employee_or_creator, creator_organization, or public - aha is the default)  | [optional] [default to undefined]
**createdAt** | **string** | Date of idea creation. In UTC timezone with format YYYY-MM-DD or YYYY-MM-DD HH:MM:SS.  | [optional] [default to undefined]
**spam** | **boolean** | Whether the idea is considered spam. Must be \&#39;true\&#39; or \&#39;false\&#39; | [optional] [default to undefined]
**submittedIdeaPortalId** | **string** | Numeric ID of the ideas portal. We strongly suggest you set this if the creator is an idea user.  | [optional] [default to undefined]
**skipPortal** | **boolean** | If true, the idea will not be submitted to any portal. Default is false.  | [optional] [default to undefined]

## Example

```typescript
import { IdeaCreateRequestIdea } from 'aha-js';

const instance: IdeaCreateRequestIdea = {
    name,
    description,
    workflowStatus,
    tags,
    categories,
    createdBy,
    assignedToUser,
    feature,
    initiative,
    epic,
    duplicateIdea,
    initialVotes,
    visibility,
    createdAt,
    spam,
    submittedIdeaPortalId,
    skipPortal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
