## @cedricziel/aha-js@1.0.0

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
npm install @cedricziel/aha-js@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://mycompany.aha.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CommentsApi* | [**epicsEpicIdCommentsGet**](docs/CommentsApi.md#epicsepicidcommentsget) | **GET** /epics/{epic_id}/comments | List comments on an epic
*CommentsApi* | [**featuresFeatureIdCommentsPost**](docs/CommentsApi.md#featuresfeatureidcommentspost) | **POST** /features/{feature_id}/comments | Create a comment on a feature
*CommentsApi* | [**goalsGoalIdCommentsGet**](docs/CommentsApi.md#goalsgoalidcommentsget) | **GET** /goals/{goal_id}/comments | List comments on a goal
*CommentsApi* | [**ideasIdeaIdCommentsGet**](docs/CommentsApi.md#ideasideaidcommentsget) | **GET** /ideas/{idea_id}/comments | List comments on an idea
*CommentsApi* | [**initiativesInitiativeIdCommentsGet**](docs/CommentsApi.md#initiativesinitiativeidcommentsget) | **GET** /initiatives/{initiative_id}/comments | List comments on an initiative
*CommentsApi* | [**productsProductIdCommentsGet**](docs/CommentsApi.md#productsproductidcommentsget) | **GET** /products/{product_id}/comments | List comments in a product
*CommentsApi* | [**releasePhasesReleasePhaseIdCommentsGet**](docs/CommentsApi.md#releasephasesreleasephaseidcommentsget) | **GET** /release_phases/{release_phase_id}/comments | List comments on a release phase
*CommentsApi* | [**releasesReleaseIdCommentsGet**](docs/CommentsApi.md#releasesreleaseidcommentsget) | **GET** /releases/{release_id}/comments | List comments on a release
*CommentsApi* | [**requirementsRequirementIdCommentsGet**](docs/CommentsApi.md#requirementsrequirementidcommentsget) | **GET** /requirements/{requirement_id}/comments | List comments on a requirement
*CommentsApi* | [**todosTodoIdCommentsGet**](docs/CommentsApi.md#todostodoidcommentsget) | **GET** /todos/{todo_id}/comments | List comments on a to-do
*CompetitorsApi* | [**competitorsCompetitorIdDelete**](docs/CompetitorsApi.md#competitorscompetitoriddelete) | **DELETE** /competitors/{competitor_id} | Delete a competitor
*CompetitorsApi* | [**competitorsCompetitorIdGet**](docs/CompetitorsApi.md#competitorscompetitoridget) | **GET** /competitors/{competitor_id} | Get a specific competitor
*CompetitorsApi* | [**competitorsCompetitorIdPut**](docs/CompetitorsApi.md#competitorscompetitoridput) | **PUT** /competitors/{competitor_id} | Update a competitor
*CompetitorsApi* | [**productsProductIdCompetitorsGet**](docs/CompetitorsApi.md#productsproductidcompetitorsget) | **GET** /products/{product_id}/competitors | List competitors in a product
*CompetitorsApi* | [**productsProductIdCompetitorsPost**](docs/CompetitorsApi.md#productsproductidcompetitorspost) | **POST** /products/{product_id}/competitors | Create a competitor
*DefaultApi* | [**featuresIdCustomFieldsPut**](docs/DefaultApi.md#featuresidcustomfieldsput) | **PUT** /features/{id}/custom_fields | 
*DefaultApi* | [**featuresIdCustomFieldsTagPut**](docs/DefaultApi.md#featuresidcustomfieldstagput) | **PUT** /features/{id}/custom_fields/tag | 
*DefaultApi* | [**featuresIdDelete**](docs/DefaultApi.md#featuresiddelete) | **DELETE** /features/{id} | 
*DefaultApi* | [**featuresIdGet**](docs/DefaultApi.md#featuresidget) | **GET** /features/{id} | 
*DefaultApi* | [**featuresIdPut**](docs/DefaultApi.md#featuresidput) | **PUT** /features/{id} | 
*DefaultApi* | [**releasesReleaseIdFeaturesGet**](docs/DefaultApi.md#releasesreleaseidfeaturesget) | **GET** /releases/{release_id}/features | 
*DefaultApi* | [**releasesReleaseIdFeaturesPost**](docs/DefaultApi.md#releasesreleaseidfeaturespost) | **POST** /releases/{release_id}/features | 
*EpicsApi* | [**epicsEpicIdCommentsGet**](docs/EpicsApi.md#epicsepicidcommentsget) | **GET** /epics/{epic_id}/comments | List comments on an epic
*EpicsApi* | [**epicsEpicIdDelete**](docs/EpicsApi.md#epicsepiciddelete) | **DELETE** /epics/{epic_id} | Delete an epic
*EpicsApi* | [**epicsEpicIdGet**](docs/EpicsApi.md#epicsepicidget) | **GET** /epics/{epic_id} | Get a specific epic
*EpicsApi* | [**epicsEpicIdPut**](docs/EpicsApi.md#epicsepicidput) | **PUT** /epics/{epic_id} | Update an epic
*EpicsApi* | [**goalsGoalIdEpicsGet**](docs/EpicsApi.md#goalsgoalidepicsget) | **GET** /goals/{goal_id}/epics | List epics associated with a goal
*EpicsApi* | [**initiativesInitiativeIdEpicsGet**](docs/EpicsApi.md#initiativesinitiativeidepicsget) | **GET** /initiatives/{initiative_id}/epics | List epics associated with an initiative
*EpicsApi* | [**productsProductIdEpicsGet**](docs/EpicsApi.md#productsproductidepicsget) | **GET** /products/{product_id}/epics | List epics in a product
*EpicsApi* | [**productsProductIdEpicsPost**](docs/EpicsApi.md#productsproductidepicspost) | **POST** /products/{product_id}/epics | Create an epic in a product
*EpicsApi* | [**releasesReleaseIdEpicsGet**](docs/EpicsApi.md#releasesreleaseidepicsget) | **GET** /releases/{release_id}/epics | List epics in a release
*EpicsApi* | [**releasesReleaseIdEpicsPost**](docs/EpicsApi.md#releasesreleaseidepicspost) | **POST** /releases/{release_id}/epics | Create an epic in a release
*FeaturesApi* | [**featuresFeatureIdCommentsPost**](docs/FeaturesApi.md#featuresfeatureidcommentspost) | **POST** /features/{feature_id}/comments | Create a comment on a feature
*FeaturesApi* | [**featuresGet**](docs/FeaturesApi.md#featuresget) | **GET** /features | List features
*FeaturesApi* | [**featuresIdCustomFieldsWorksheetPut**](docs/FeaturesApi.md#featuresidcustomfieldsworksheetput) | **PUT** /features/{id}/custom_fields/worksheet | Update a feature\&#39;s custom worksheet fields
*FeaturesApi* | [**featuresIdEpicPut**](docs/FeaturesApi.md#featuresidepicput) | **PUT** /features/{id}/epic | Update a feature\&#39;s epic
*FeaturesApi* | [**featuresIdGoalsPut**](docs/FeaturesApi.md#featuresidgoalsput) | **PUT** /features/{id}/goals | Update a feature\&#39;s goals
*FeaturesApi* | [**featuresIdProgressPut**](docs/FeaturesApi.md#featuresidprogressput) | **PUT** /features/{id}/progress | Update a feature\&#39;s progress
*FeaturesApi* | [**featuresIdProgressSourcePut**](docs/FeaturesApi.md#featuresidprogresssourceput) | **PUT** /features/{id}/progress_source | Update a feature\&#39;s progress source
*FeaturesApi* | [**featuresIdReleasePut**](docs/FeaturesApi.md#featuresidreleaseput) | **PUT** /features/{id}/release | Update a feature\&#39;s release
*FeaturesApi* | [**featuresIdScorePut**](docs/FeaturesApi.md#featuresidscoreput) | **PUT** /features/{id}/score | Update a feature\&#39;s score
*FeaturesApi* | [**featuresIdTagsPut**](docs/FeaturesApi.md#featuresidtagsput) | **PUT** /features/{id}/tags | Update a feature\&#39;s tags with an array
*GoalsApi* | [**goalsCreate**](docs/GoalsApi.md#goalscreate) | **POST** /goals | Create a goal
*GoalsApi* | [**goalsDelete**](docs/GoalsApi.md#goalsdelete) | **DELETE** /goals/{id} | Delete a goal
*GoalsApi* | [**goalsGet**](docs/GoalsApi.md#goalsget) | **GET** /goals/{id} | Get a goal
*GoalsApi* | [**goalsGoalIdCommentsGet**](docs/GoalsApi.md#goalsgoalidcommentsget) | **GET** /goals/{goal_id}/comments | List comments on a goal
*GoalsApi* | [**goalsGoalIdEpicsGet**](docs/GoalsApi.md#goalsgoalidepicsget) | **GET** /goals/{goal_id}/epics | List epics associated with a goal
*GoalsApi* | [**goalsList**](docs/GoalsApi.md#goalslist) | **GET** /goals | List goals
*GoalsApi* | [**goalsUpdate**](docs/GoalsApi.md#goalsupdate) | **PUT** /goals/{id} | Update a goal
*GoalsApi* | [**goalsUpdateProgress**](docs/GoalsApi.md#goalsupdateprogress) | **PUT** /goals/{id}/progress | Update goal progress
*IdeasApi* | [**ideasCreate**](docs/IdeasApi.md#ideascreate) | **POST** /products/{product_id}/ideas | Create an idea
*IdeasApi* | [**ideasCreateProxyVote**](docs/IdeasApi.md#ideascreateproxyvote) | **POST** /ideas/{id}/proxy_votes | Create a proxy vote
*IdeasApi* | [**ideasDelete**](docs/IdeasApi.md#ideasdelete) | **DELETE** /ideas/{id} | Delete an idea
*IdeasApi* | [**ideasGetById**](docs/IdeasApi.md#ideasgetbyid) | **GET** /ideas/{id} | Get a specific idea
*IdeasApi* | [**ideasGetProxyVotes**](docs/IdeasApi.md#ideasgetproxyvotes) | **GET** /ideas/{id}/proxy_votes | Get proxy votes for an idea
*IdeasApi* | [**ideasGetVotes**](docs/IdeasApi.md#ideasgetvotes) | **GET** /ideas/{id}/votes | Get votes for an idea
*IdeasApi* | [**ideasGetWatchers**](docs/IdeasApi.md#ideasgetwatchers) | **GET** /ideas/{id}/watchers | Get idea watchers
*IdeasApi* | [**ideasIdeaIdCommentsGet**](docs/IdeasApi.md#ideasideaidcommentsget) | **GET** /ideas/{idea_id}/comments | List comments on an idea
*IdeasApi* | [**ideasList**](docs/IdeasApi.md#ideaslist) | **GET** /ideas | List ideas
*IdeasApi* | [**ideasMarkSpam**](docs/IdeasApi.md#ideasmarkspam) | **POST** /ideas/{id}/spam | Mark idea as spam
*IdeasApi* | [**ideasPromote**](docs/IdeasApi.md#ideaspromote) | **POST** /ideas/{id}/promote | Promote an idea
*IdeasApi* | [**ideasUnmarkSpam**](docs/IdeasApi.md#ideasunmarkspam) | **DELETE** /ideas/{id}/spam | Unmark idea as spam
*IdeasApi* | [**ideasUpdate**](docs/IdeasApi.md#ideasupdate) | **PUT** /ideas/{id} | Update an idea
*IdeasApi* | [**ideasUpdateWatchers**](docs/IdeasApi.md#ideasupdatewatchers) | **PUT** /ideas/{id}/watchers | Update idea watchers
*IdeasApi* | [**ideasVote**](docs/IdeasApi.md#ideasvote) | **POST** /ideas/{id}/votes | Vote on an idea
*IdeasApi* | [**productsProductIdIdeasGet**](docs/IdeasApi.md#productsproductidideasget) | **GET** /products/{product_id}/ideas | List ideas for a product
*IdeasApi* | [**productsProductIdIdeasPortalUserPost**](docs/IdeasApi.md#productsproductidideasportaluserpost) | **POST** /products/{product_id}/ideas/portal_user | Create an idea created by a ideas portal user
*IdeasApi* | [**productsProductIdIdeasWithCategoryPost**](docs/IdeasApi.md#productsproductidideaswithcategorypost) | **POST** /products/{product_id}/ideas/with_category | Create an idea with a category
*IdeasApi* | [**productsProductIdIdeasWithScorePost**](docs/IdeasApi.md#productsproductidideaswithscorepost) | **POST** /products/{product_id}/ideas/with_score | Create an idea with a score
*InitiativesApi* | [**initiativesCreate**](docs/InitiativesApi.md#initiativescreate) | **POST** /products/{product_id}/initiatives | Create an initiative
*InitiativesApi* | [**initiativesGet**](docs/InitiativesApi.md#initiativesget) | **GET** /initiatives/{id} | Get a specific initiative
*InitiativesApi* | [**initiativesInitiativeIdCommentsGet**](docs/InitiativesApi.md#initiativesinitiativeidcommentsget) | **GET** /initiatives/{initiative_id}/comments | List comments on an initiative
*InitiativesApi* | [**initiativesInitiativeIdEpicsGet**](docs/InitiativesApi.md#initiativesinitiativeidepicsget) | **GET** /initiatives/{initiative_id}/epics | List epics associated with an initiative
*InitiativesApi* | [**initiativesList**](docs/InitiativesApi.md#initiativeslist) | **GET** /initiatives | List initiatives
*ProductsApi* | [**productsList**](docs/ProductsApi.md#productslist) | **GET** /products | List products in the account
*ProductsApi* | [**productsProductIdCommentsGet**](docs/ProductsApi.md#productsproductidcommentsget) | **GET** /products/{product_id}/comments | List comments in a product
*ReleasePhasesApi* | [**releasePhasesReleasePhaseIdCommentsGet**](docs/ReleasePhasesApi.md#releasephasesreleasephaseidcommentsget) | **GET** /release_phases/{release_phase_id}/comments | List comments on a release phase
*ReleasesApi* | [**productReleasesList**](docs/ReleasesApi.md#productreleaseslist) | **GET** /products/{product_id}/releases | List releases for a product
*ReleasesApi* | [**releasesCreate**](docs/ReleasesApi.md#releasescreate) | **POST** /products/{product_id}/releases | Create a release
*ReleasesApi* | [**releasesDelete**](docs/ReleasesApi.md#releasesdelete) | **DELETE** /releases/{id} | Delete a release
*ReleasesApi* | [**releasesGet**](docs/ReleasesApi.md#releasesget) | **GET** /releases/{id} | Get a release
*ReleasesApi* | [**releasesList**](docs/ReleasesApi.md#releaseslist) | **GET** /releases | List releases
*ReleasesApi* | [**releasesReleaseIdCommentsGet**](docs/ReleasesApi.md#releasesreleaseidcommentsget) | **GET** /releases/{release_id}/comments | List comments on a release
*ReleasesApi* | [**releasesUpdate**](docs/ReleasesApi.md#releasesupdate) | **PUT** /releases/{id} | Update a release
*RequirementsApi* | [**requirementsRequirementIdCommentsGet**](docs/RequirementsApi.md#requirementsrequirementidcommentsget) | **GET** /requirements/{requirement_id}/comments | List comments on a requirement
*StrategicModelsApi* | [**strategicModelsCreate**](docs/StrategicModelsApi.md#strategicmodelscreate) | **POST** /strategic_models | Create a strategic model
*StrategicModelsApi* | [**strategicModelsDelete**](docs/StrategicModelsApi.md#strategicmodelsdelete) | **DELETE** /strategic_models/{id} | Delete a strategic model
*StrategicModelsApi* | [**strategicModelsGet**](docs/StrategicModelsApi.md#strategicmodelsget) | **GET** /strategic_models/{id} | Get a strategic model
*StrategicModelsApi* | [**strategicModelsList**](docs/StrategicModelsApi.md#strategicmodelslist) | **GET** /strategic_models | List strategic models
*StrategicModelsApi* | [**strategicModelsUpdate**](docs/StrategicModelsApi.md#strategicmodelsupdate) | **PUT** /strategic_models/{id} | Update a strategic model
*ToDosApi* | [**todosTodoIdCommentsGet**](docs/ToDosApi.md#todostodoidcommentsget) | **GET** /todos/{todo_id}/comments | List comments on a to-do
*UsersApi* | [**usersGet**](docs/UsersApi.md#usersget) | **GET** /users | List users
*UsersApi* | [**usersIdGet**](docs/UsersApi.md#usersidget) | **GET** /users/{id} | Get a specific user


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
 - [FeaturesIdProgressSourcePutRequest](docs/FeaturesIdProgressSourcePutRequest.md)
 - [FeaturesIdProgressSourcePutRequestFeature](docs/FeaturesIdProgressSourcePutRequestFeature.md)
 - [FeaturesIdReleasePutRequest](docs/FeaturesIdReleasePutRequest.md)
 - [FeaturesIdReleasePutRequestFeature](docs/FeaturesIdReleasePutRequestFeature.md)
 - [FeaturesIdScorePutRequest](docs/FeaturesIdScorePutRequest.md)
 - [FeaturesIdScorePutRequestFeature](docs/FeaturesIdScorePutRequestFeature.md)
 - [FeaturesIdScorePutRequestFeatureScoreFactsInner](docs/FeaturesIdScorePutRequestFeatureScoreFactsInner.md)
 - [FeaturesIdTagsPutRequest](docs/FeaturesIdTagsPutRequest.md)
 - [FeaturesIdTagsPutRequestFeature](docs/FeaturesIdTagsPutRequestFeature.md)
 - [FeaturesListResponse](docs/FeaturesListResponse.md)
 - [FeaturesListResponseFeaturesInner](docs/FeaturesListResponseFeaturesInner.md)
 - [FeaturesListResponsePagination](docs/FeaturesListResponsePagination.md)
 - [Goal](docs/Goal.md)
 - [GoalCreateRequest](docs/GoalCreateRequest.md)
 - [GoalCreateRequestKeyResultsInner](docs/GoalCreateRequestKeyResultsInner.md)
 - [GoalGetResponse](docs/GoalGetResponse.md)
 - [GoalInitiativesInner](docs/GoalInitiativesInner.md)
 - [GoalKeyResultsInner](docs/GoalKeyResultsInner.md)
 - [GoalProgressUpdateRequest](docs/GoalProgressUpdateRequest.md)
 - [GoalProgressUpdateRequestKeyResultsInner](docs/GoalProgressUpdateRequestKeyResultsInner.md)
 - [GoalUpdateRequest](docs/GoalUpdateRequest.md)
 - [GoalUpdateRequestKeyResultsInner](docs/GoalUpdateRequestKeyResultsInner.md)
 - [GoalsListResponse](docs/GoalsListResponse.md)
 - [GoalsListResponsePagination](docs/GoalsListResponsePagination.md)
 - [IdeaCreateByPortalUserRequest](docs/IdeaCreateByPortalUserRequest.md)
 - [IdeaCreateByPortalUserRequestIdea](docs/IdeaCreateByPortalUserRequestIdea.md)
 - [IdeaCreateByPortalUserRequestIdeaCreatedByPortalUser](docs/IdeaCreateByPortalUserRequestIdeaCreatedByPortalUser.md)
 - [IdeaCreateRequest](docs/IdeaCreateRequest.md)
 - [IdeaCreateRequestIdea](docs/IdeaCreateRequestIdea.md)
 - [IdeaPromoteRequest](docs/IdeaPromoteRequest.md)
 - [IdeaProxyVoteRequest](docs/IdeaProxyVoteRequest.md)
 - [IdeaResponse](docs/IdeaResponse.md)
 - [IdeaResponseIdea](docs/IdeaResponseIdea.md)
 - [IdeaResponseIdeaAssignedToUser](docs/IdeaResponseIdeaAssignedToUser.md)
 - [IdeaResponseIdeaCreatedByPortalUser](docs/IdeaResponseIdeaCreatedByPortalUser.md)
 - [IdeaResponseIdeaCreatedByUser](docs/IdeaResponseIdeaCreatedByUser.md)
 - [IdeaResponseIdeaWorkflowStatusTimesInner](docs/IdeaResponseIdeaWorkflowStatusTimesInner.md)
 - [IdeaUpdateRequest](docs/IdeaUpdateRequest.md)
 - [IdeaUpdateRequestScoreFactsInner](docs/IdeaUpdateRequestScoreFactsInner.md)
 - [IdeaVoteRequest](docs/IdeaVoteRequest.md)
 - [IdeaWatchersRequest](docs/IdeaWatchersRequest.md)
 - [IdeaWatchersRequestWatchersInner](docs/IdeaWatchersRequestWatchersInner.md)
 - [IdeasCreateProxyVote201Response](docs/IdeasCreateProxyVote201Response.md)
 - [IdeasCreateProxyVote201ResponseIdea](docs/IdeasCreateProxyVote201ResponseIdea.md)
 - [IdeasCreateProxyVote201ResponseProxyVote](docs/IdeasCreateProxyVote201ResponseProxyVote.md)
 - [IdeasGetProxyVotes200Response](docs/IdeasGetProxyVotes200Response.md)
 - [IdeasGetProxyVotes200ResponseProxyVotesInner](docs/IdeasGetProxyVotes200ResponseProxyVotesInner.md)
 - [IdeasGetProxyVotes200ResponseProxyVotesInnerCreatedByUser](docs/IdeasGetProxyVotes200ResponseProxyVotesInnerCreatedByUser.md)
 - [IdeasGetProxyVotes200ResponseProxyVotesInnerProxyUser](docs/IdeasGetProxyVotes200ResponseProxyVotesInnerProxyUser.md)
 - [IdeasGetVotes200Response](docs/IdeasGetVotes200Response.md)
 - [IdeasGetVotes200ResponsePagination](docs/IdeasGetVotes200ResponsePagination.md)
 - [IdeasGetVotes200ResponseVotesInner](docs/IdeasGetVotes200ResponseVotesInner.md)
 - [IdeasGetVotes200ResponseVotesInnerUser](docs/IdeasGetVotes200ResponseVotesInnerUser.md)
 - [IdeasGetWatchers200Response](docs/IdeasGetWatchers200Response.md)
 - [IdeasGetWatchers200ResponseWatchersInner](docs/IdeasGetWatchers200ResponseWatchersInner.md)
 - [IdeasListResponse](docs/IdeasListResponse.md)
 - [IdeasListResponseIdeasInner](docs/IdeasListResponseIdeasInner.md)
 - [IdeasListResponseIdeasInnerDescription](docs/IdeasListResponseIdeasInnerDescription.md)
 - [IdeasListResponseIdeasInnerWorkflowStatus](docs/IdeasListResponseIdeasInnerWorkflowStatus.md)
 - [IdeasListResponsePagination](docs/IdeasListResponsePagination.md)
 - [IdeasPromote200Response](docs/IdeasPromote200Response.md)
 - [IdeasPromote200ResponsePromotedRecord](docs/IdeasPromote200ResponsePromotedRecord.md)
 - [IdeasVote200Response](docs/IdeasVote200Response.md)
 - [IdeasVote200ResponseIdea](docs/IdeasVote200ResponseIdea.md)
 - [IdeasVote200ResponseVote](docs/IdeasVote200ResponseVote.md)
 - [InitiativeCreateRequest](docs/InitiativeCreateRequest.md)
 - [InitiativeCreateRequestInitiative](docs/InitiativeCreateRequestInitiative.md)
 - [InitiativeCreateRequestInitiativeTimeFrame](docs/InitiativeCreateRequestInitiativeTimeFrame.md)
 - [InitiativeCreateRequestInitiativeWorkflowStatus](docs/InitiativeCreateRequestInitiativeWorkflowStatus.md)
 - [InitiativeResponse](docs/InitiativeResponse.md)
 - [InitiativeResponseInitiative](docs/InitiativeResponseInitiative.md)
 - [InitiativeResponseInitiativeAssignedToUser](docs/InitiativeResponseInitiativeAssignedToUser.md)
 - [InitiativeResponseInitiativeCreatedByUser](docs/InitiativeResponseInitiativeCreatedByUser.md)
 - [InitiativeResponseInitiativeProject](docs/InitiativeResponseInitiativeProject.md)
 - [InitiativeResponseInitiativeTimeFrame](docs/InitiativeResponseInitiativeTimeFrame.md)
 - [InitiativeResponseInitiativeWorkflowStatusTimesInner](docs/InitiativeResponseInitiativeWorkflowStatusTimesInner.md)
 - [InitiativesListResponse](docs/InitiativesListResponse.md)
 - [InitiativesListResponseInitiativesInner](docs/InitiativesListResponseInitiativesInner.md)
 - [InitiativesListResponseInitiativesInnerAssignedToUser](docs/InitiativesListResponseInitiativesInnerAssignedToUser.md)
 - [InitiativesListResponseInitiativesInnerCreatedByUser](docs/InitiativesListResponseInitiativesInnerCreatedByUser.md)
 - [InitiativesListResponseInitiativesInnerTimeFrame](docs/InitiativesListResponseInitiativesInnerTimeFrame.md)
 - [ProductsListResponse](docs/ProductsListResponse.md)
 - [ProductsListResponseProductsInner](docs/ProductsListResponseProductsInner.md)
 - [ProductsProductIdCompetitorsGet200Response](docs/ProductsProductIdCompetitorsGet200Response.md)
 - [ProductsProductIdEpicsGet200Response](docs/ProductsProductIdEpicsGet200Response.md)
 - [Release](docs/Release.md)
 - [ReleaseCreateRequest](docs/ReleaseCreateRequest.md)
 - [ReleaseGetResponse](docs/ReleaseGetResponse.md)
 - [ReleasePhasesInner](docs/ReleasePhasesInner.md)
 - [ReleaseUpdateRequest](docs/ReleaseUpdateRequest.md)
 - [ReleaseWorkflowStatusTimesInner](docs/ReleaseWorkflowStatusTimesInner.md)
 - [ReleasesListResponse](docs/ReleasesListResponse.md)
 - [ReleasesListResponsePagination](docs/ReleasesListResponsePagination.md)
 - [StrategicModel](docs/StrategicModel.md)
 - [StrategicModelCreateRequest](docs/StrategicModelCreateRequest.md)
 - [StrategicModelGetResponse](docs/StrategicModelGetResponse.md)
 - [StrategicModelUpdateRequest](docs/StrategicModelUpdateRequest.md)
 - [StrategicModelsListResponse](docs/StrategicModelsListResponse.md)
 - [StrategicModelsListResponsePagination](docs/StrategicModelsListResponsePagination.md)
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

