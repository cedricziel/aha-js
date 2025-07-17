# MeProfileResponseUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | User ID | [default to undefined]
**name** | **string** | Full name of the user | [default to undefined]
**email** | **string** | Email address of the user | [default to undefined]
**firstName** | **string** | First name of the user | [optional] [default to undefined]
**lastName** | **string** | Last name of the user | [optional] [default to undefined]
**initials** | **string** | User initials | [optional] [default to undefined]
**createdAt** | **string** | When the user was created | [default to undefined]
**updatedAt** | **string** | When the user was last updated | [default to undefined]
**admin** | **boolean** | Whether the user is an admin | [optional] [default to undefined]
**productOwner** | **boolean** | Whether the user is a product owner | [optional] [default to undefined]
**reviewer** | **boolean** | Whether the user is a reviewer | [optional] [default to undefined]
**viewer** | **boolean** | Whether the user is a viewer | [optional] [default to undefined]
**timeZone** | **string** | User\&#39;s time zone | [optional] [default to undefined]
**locale** | **string** | User\&#39;s locale | [optional] [default to undefined]
**avatarUrl** | **string** | URL to user\&#39;s avatar image | [optional] [default to undefined]
**url** | **string** | URL to user\&#39;s profile page | [optional] [default to undefined]
**resource** | **string** | URL to user\&#39;s API resource | [optional] [default to undefined]

## Example

```typescript
import { MeProfileResponseUser } from '@cedricziel/aha-js';

const instance: MeProfileResponseUser = {
    id,
    name,
    email,
    firstName,
    lastName,
    initials,
    createdAt,
    updatedAt,
    admin,
    productOwner,
    reviewer,
    viewer,
    timeZone,
    locale,
    avatarUrl,
    url,
    resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
