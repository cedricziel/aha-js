## aha-js@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install aha-js@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://mycompany.aha.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CompetitorsApi* | [**competitorsCompetitorIdDelete**](docs/CompetitorsApi.md#competitorscompetitoriddelete) | **DELETE** /competitors/{competitor_id} | Delete a competitor
*CompetitorsApi* | [**competitorsCompetitorIdPut**](docs/CompetitorsApi.md#competitorscompetitoridput) | **PUT** /competitors/{competitor_id} | Update a competitor
*CompetitorsApi* | [**productsProductIdCompetitorsGet**](docs/CompetitorsApi.md#productsproductidcompetitorsget) | **GET** /products/{product_id}/competitors | List competitors in a product
*CompetitorsApi* | [**productsProductIdCompetitorsPost**](docs/CompetitorsApi.md#productsproductidcompetitorspost) | **POST** /products/{product_id}/competitors | Create a competitor
*DefaultApi* | [**competitorsCompetitorIdGet**](docs/DefaultApi.md#competitorscompetitoridget) | **GET** /competitors/{competitor_id} | Get a specific competitor
*DefaultApi* | [**epicsEpicIdCommentsGet**](docs/DefaultApi.md#epicsepicidcommentsget) | **GET** /epics/{epic_id}/comments | List comments on an epic
*DefaultApi* | [**featuresFeatureIdCommentsPost**](docs/DefaultApi.md#featuresfeatureidcommentspost) | **POST** /features/{feature_id}/comments | Create a comment on a feature
*DefaultApi* | [**featuresIdCustomFieldsPut**](docs/DefaultApi.md#featuresidcustomfieldsput) | **PUT** /features/{id}/custom_fields | 
*DefaultApi* | [**featuresIdCustomFieldsTagPut**](docs/DefaultApi.md#featuresidcustomfieldstagput) | **PUT** /features/{id}/custom_fields/tag | 
*DefaultApi* | [**featuresIdDelete**](docs/DefaultApi.md#featuresiddelete) | **DELETE** /features/{id} | 
*DefaultApi* | [**featuresIdGet**](docs/DefaultApi.md#featuresidget) | **GET** /features/{id} | 
*DefaultApi* | [**featuresIdPut**](docs/DefaultApi.md#featuresidput) | **PUT** /features/{id} | 
*DefaultApi* | [**goalsGoalIdCommentsGet**](docs/DefaultApi.md#goalsgoalidcommentsget) | **GET** /goals/{goal_id}/comments | List comments on a goal
*DefaultApi* | [**ideasIdeaIdCommentsGet**](docs/DefaultApi.md#ideasideaidcommentsget) | **GET** /ideas/{idea_id}/comments | List comments on an idea
*DefaultApi* | [**initiativesInitiativeIdCommentsGet**](docs/DefaultApi.md#initiativesinitiativeidcommentsget) | **GET** /initiatives/{initiative_id}/comments | List comments on an initiative
*DefaultApi* | [**productsProductIdCommentsGet**](docs/DefaultApi.md#productsproductidcommentsget) | **GET** /products/{product_id}/comments | List comments in a product
*DefaultApi* | [**releasePhasesReleasePhaseIdCommentsGet**](docs/DefaultApi.md#releasephasesreleasephaseidcommentsget) | **GET** /release_phases/{release_phase_id}/comments | List comments on a release phase
*DefaultApi* | [**releasesReleaseIdCommentsGet**](docs/DefaultApi.md#releasesreleaseidcommentsget) | **GET** /releases/{release_id}/comments | List comments on a release
*DefaultApi* | [**releasesReleaseIdFeaturesGet**](docs/DefaultApi.md#releasesreleaseidfeaturesget) | **GET** /releases/{release_id}/features | 
*DefaultApi* | [**releasesReleaseIdFeaturesPost**](docs/DefaultApi.md#releasesreleaseidfeaturespost) | **POST** /releases/{release_id}/features | 
*DefaultApi* | [**requirementsRequirementIdCommentsGet**](docs/DefaultApi.md#requirementsrequirementidcommentsget) | **GET** /requirements/{requirement_id}/comments | List comments on a requirement
*DefaultApi* | [**todosTodoIdCommentsGet**](docs/DefaultApi.md#todostodoidcommentsget) | **GET** /todos/{todo_id}/comments | List comments on a to-do
*DefaultApi* | [**usersGet**](docs/DefaultApi.md#usersget) | **GET** /users | List users
*DefaultApi* | [**usersIdGet**](docs/DefaultApi.md#usersidget) | **GET** /users/{id} | Get a specific user
*EpicsApi* | [**epicsEpicIdDelete**](docs/EpicsApi.md#epicsepiciddelete) | **DELETE** /epics/{epic_id} | Delete an epic
*EpicsApi* | [**epicsEpicIdGet**](docs/EpicsApi.md#epicsepicidget) | **GET** /epics/{epic_id} | Get a specific epic
*EpicsApi* | [**epicsEpicIdPut**](docs/EpicsApi.md#epicsepicidput) | **PUT** /epics/{epic_id} | Update an epic
*EpicsApi* | [**goalsGoalIdEpicsGet**](docs/EpicsApi.md#goalsgoalidepicsget) | **GET** /goals/{goal_id}/epics | List epics associated with a goal
*EpicsApi* | [**initiativesInitiativeIdEpicsGet**](docs/EpicsApi.md#initiativesinitiativeidepicsget) | **GET** /initiatives/{initiative_id}/epics | List epics associated with an initiative
*EpicsApi* | [**productsProductIdEpicsGet**](docs/EpicsApi.md#productsproductidepicsget) | **GET** /products/{product_id}/epics | List epics in a product
*EpicsApi* | [**productsProductIdEpicsPost**](docs/EpicsApi.md#productsproductidepicspost) | **POST** /products/{product_id}/epics | Create an epic in a product
*EpicsApi* | [**releasesReleaseIdEpicsGet**](docs/EpicsApi.md#releasesreleaseidepicsget) | **GET** /releases/{release_id}/epics | List epics in a release
*EpicsApi* | [**releasesReleaseIdEpicsPost**](docs/EpicsApi.md#releasesreleaseidepicspost) | **POST** /releases/{release_id}/epics | Create an epic in a release
*FeaturesApi* | [**featuresGet**](docs/FeaturesApi.md#featuresget) | **GET** /features | List features
*FeaturesApi* | [**featuresIdCustomFieldsWorksheetPut**](docs/FeaturesApi.md#featuresidcustomfieldsworksheetput) | **PUT** /features/{id}/custom_fields/worksheet | Update a feature\&#39;s custom worksheet fields
*FeaturesApi* | [**featuresIdEpicPut**](docs/FeaturesApi.md#featuresidepicput) | **PUT** /features/{id}/epic | Update a feature\&#39;s epic
*FeaturesApi* | [**featuresIdGoalsPut**](docs/FeaturesApi.md#featuresidgoalsput) | **PUT** /features/{id}/goals | Update a feature\&#39;s goals
*FeaturesApi* | [**featuresIdProgressPut**](docs/FeaturesApi.md#featuresidprogressput) | **PUT** /features/{id}/progress | Update a feature\&#39;s progress
*GoalsApi* | [**goalsGoalIdEpicsGet**](docs/GoalsApi.md#goalsgoalidepicsget) | **GET** /goals/{goal_id}/epics | List epics associated with a goal
*InitiativesApi* | [**initiativesInitiativeIdEpicsGet**](docs/InitiativesApi.md#initiativesinitiativeidepicsget) | **GET** /initiatives/{initiative_id}/epics | List epics associated with an initiative


### Documentation For Models

 - [Comment](docs/Comment.md)
 - [CommentCreateRequest](docs/CommentCreateRequest.md)
 - [Competitor](docs/Competitor.md)
 - [CompetitorCreateRequest](docs/CompetitorCreateRequest.md)
 - [CompetitorCreateRequestCompetitor](docs/CompetitorCreateRequestCompetitor.md)
 - [CompetitorUpdateRequest](docs/CompetitorUpdateRequest.md)
 - [CompetitorUpdateRequestCompetitor](docs/CompetitorUpdateRequestCompetitor.md)
 - [Epic](docs/Epic.md)
 - [EpicCreateRequest](docs/EpicCreateRequest.md)
 - [EpicCreateRequestEpic](docs/EpicCreateRequestEpic.md)
 - [EpicDescription](docs/EpicDescription.md)
 - [EpicUpdateRequest](docs/EpicUpdateRequest.md)
 - [EpicUpdateRequestEpic](docs/EpicUpdateRequestEpic.md)
 - [EpicsEpicIdCommentsGet200Response](docs/EpicsEpicIdCommentsGet200Response.md)
 - [Feature](docs/Feature.md)
 - [FeatureCreateRequest](docs/FeatureCreateRequest.md)
 - [FeatureCreateRequestFeature](docs/FeatureCreateRequestFeature.md)
 - [FeatureCreateRequestFeatureAssignedToUser](docs/FeatureCreateRequestFeatureAssignedToUser.md)
 - [FeatureCreateRequestFeatureAssignedToUserOneOf](docs/FeatureCreateRequestFeatureAssignedToUserOneOf.md)
 - [FeatureCreateRequestFeatureScoreFactsInner](docs/FeatureCreateRequestFeatureScoreFactsInner.md)
 - [FeatureCreateRequestFeatureWorkflowStatus](docs/FeatureCreateRequestFeatureWorkflowStatus.md)
 - [FeatureDescription](docs/FeatureDescription.md)
 - [FeatureGetResponse](docs/FeatureGetResponse.md)
 - [FeatureIntegrationFieldsInner](docs/FeatureIntegrationFieldsInner.md)
 - [FeatureProject](docs/FeatureProject.md)
 - [FeatureRelease](docs/FeatureRelease.md)
 - [FeatureWorkflowKind](docs/FeatureWorkflowKind.md)
 - [FeatureWorkflowStatus](docs/FeatureWorkflowStatus.md)
 - [FeatureWorkflowStatusTimesInner](docs/FeatureWorkflowStatusTimesInner.md)
 - [FeaturesIdCustomFieldsWorksheetPutRequest](docs/FeaturesIdCustomFieldsWorksheetPutRequest.md)
 - [FeaturesIdCustomFieldsWorksheetPutRequestFeature](docs/FeaturesIdCustomFieldsWorksheetPutRequestFeature.md)
 - [FeaturesIdCustomFieldsWorksheetPutRequestFeatureCustomFields](docs/FeaturesIdCustomFieldsWorksheetPutRequestFeatureCustomFields.md)
 - [FeaturesIdEpicPutRequest](docs/FeaturesIdEpicPutRequest.md)
 - [FeaturesIdEpicPutRequestFeature](docs/FeaturesIdEpicPutRequestFeature.md)
 - [FeaturesIdGoalsPutRequest](docs/FeaturesIdGoalsPutRequest.md)
 - [FeaturesIdGoalsPutRequestFeature](docs/FeaturesIdGoalsPutRequestFeature.md)
 - [FeaturesIdProgressPutRequest](docs/FeaturesIdProgressPutRequest.md)
 - [FeaturesIdProgressPutRequestFeature](docs/FeaturesIdProgressPutRequestFeature.md)
 - [FeaturesListResponse](docs/FeaturesListResponse.md)
 - [FeaturesListResponseFeaturesInner](docs/FeaturesListResponseFeaturesInner.md)
 - [FeaturesListResponsePagination](docs/FeaturesListResponsePagination.md)
 - [ProductsProductIdCompetitorsGet200Response](docs/ProductsProductIdCompetitorsGet200Response.md)
 - [ProductsProductIdEpicsGet200Response](docs/ProductsProductIdEpicsGet200Response.md)
 - [User](docs/User.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="OAuth2"></a>
### OAuth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://{subdomain}.aha.io/oauth/authorize
- **Scopes**: N/A

<a id="BearerAuth"></a>
### BearerAuth

- **Type**: Bearer authentication (JWT)

