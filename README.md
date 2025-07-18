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
*CommentsApi* | [**commentsCreateEpic**](docs/CommentsApi.md#commentscreateepic) | **POST** /epics/{epic_id}/comments | Create a comment on an epic
*CommentsApi* | [**commentsCreateFeature**](docs/CommentsApi.md#commentscreatefeature) | **POST** /features/{feature_id}/comments | Create a comment on a feature
*CommentsApi* | [**commentsCreateIdea**](docs/CommentsApi.md#commentscreateidea) | **POST** /ideas/{idea_id}/comments | Create a comment on an idea
*CommentsApi* | [**commentsCreateInitiative**](docs/CommentsApi.md#commentscreateinitiative) | **POST** /initiatives/{initiative_id}/comments | Create a comment on an initiative
*CommentsApi* | [**commentsCreateRequirement**](docs/CommentsApi.md#commentscreaterequirement) | **POST** /requirements/{requirement_id}/comments | Create a comment on a requirement
*CommentsApi* | [**commentsGetEpic**](docs/CommentsApi.md#commentsgetepic) | **GET** /epics/{epic_id}/comments | List comments on an epic
*CommentsApi* | [**commentsGetGoal**](docs/CommentsApi.md#commentsgetgoal) | **GET** /goals/{goal_id}/comments | List comments on a goal
*CommentsApi* | [**commentsGetIdea**](docs/CommentsApi.md#commentsgetidea) | **GET** /ideas/{idea_id}/comments | List comments on an idea
*CommentsApi* | [**commentsGetInitiative**](docs/CommentsApi.md#commentsgetinitiative) | **GET** /initiatives/{initiative_id}/comments | List comments on an initiative
*CommentsApi* | [**commentsGetProduct**](docs/CommentsApi.md#commentsgetproduct) | **GET** /products/{product_id}/comments | List comments in a product
*CommentsApi* | [**commentsGetRelease**](docs/CommentsApi.md#commentsgetrelease) | **GET** /releases/{release_id}/comments | List comments on a release
*CommentsApi* | [**commentsGetReleasePhase**](docs/CommentsApi.md#commentsgetreleasephase) | **GET** /release_phases/{release_phase_id}/comments | List comments on a release phase
*CommentsApi* | [**commentsGetRequirement**](docs/CommentsApi.md#commentsgetrequirement) | **GET** /requirements/{requirement_id}/comments | List comments on a requirement
*CommentsApi* | [**commentsGetTodo**](docs/CommentsApi.md#commentsgettodo) | **GET** /todos/{todo_id}/comments | List comments on a to-do
*CompetitorsApi* | [**competitorsCreate**](docs/CompetitorsApi.md#competitorscreate) | **POST** /products/{product_id}/competitors | Create a competitor
*CompetitorsApi* | [**competitorsDelete**](docs/CompetitorsApi.md#competitorsdelete) | **DELETE** /competitors/{competitor_id} | Delete a competitor
*CompetitorsApi* | [**competitorsGet**](docs/CompetitorsApi.md#competitorsget) | **GET** /competitors/{competitor_id} | Get a specific competitor
*CompetitorsApi* | [**competitorsListProduct**](docs/CompetitorsApi.md#competitorslistproduct) | **GET** /products/{product_id}/competitors | List competitors in a product
*CompetitorsApi* | [**competitorsUpdate**](docs/CompetitorsApi.md#competitorsupdate) | **PUT** /competitors/{competitor_id} | Update a competitor
*DefaultApi* | [**featuresIdCustomFieldsPut**](docs/DefaultApi.md#featuresidcustomfieldsput) | **PUT** /features/{id}/custom_fields | 
*DefaultApi* | [**featuresIdCustomFieldsTagPut**](docs/DefaultApi.md#featuresidcustomfieldstagput) | **PUT** /features/{id}/custom_fields/tag | 
*DefaultApi* | [**featuresIdDelete**](docs/DefaultApi.md#featuresiddelete) | **DELETE** /features/{id} | 
*DefaultApi* | [**featuresIdGet**](docs/DefaultApi.md#featuresidget) | **GET** /features/{id} | 
*DefaultApi* | [**featuresIdPut**](docs/DefaultApi.md#featuresidput) | **PUT** /features/{id} | 
*DefaultApi* | [**releasesReleaseIdFeaturesGet**](docs/DefaultApi.md#releasesreleaseidfeaturesget) | **GET** /releases/{release_id}/features | 
*DefaultApi* | [**releasesReleaseIdFeaturesPost**](docs/DefaultApi.md#releasesreleaseidfeaturespost) | **POST** /releases/{release_id}/features | 
*EpicsApi* | [**commentsCreateEpic**](docs/EpicsApi.md#commentscreateepic) | **POST** /epics/{epic_id}/comments | Create a comment on an epic
*EpicsApi* | [**commentsGetEpic**](docs/EpicsApi.md#commentsgetepic) | **GET** /epics/{epic_id}/comments | List comments on an epic
*EpicsApi* | [**epicsCreateInProduct**](docs/EpicsApi.md#epicscreateinproduct) | **POST** /products/{product_id}/epics | Create an epic in a product
*EpicsApi* | [**epicsCreateInRelease**](docs/EpicsApi.md#epicscreateinrelease) | **POST** /releases/{release_id}/epics | Create an epic in a release
*EpicsApi* | [**epicsDelete**](docs/EpicsApi.md#epicsdelete) | **DELETE** /epics/{epic_id} | Delete an epic
*EpicsApi* | [**epicsGet**](docs/EpicsApi.md#epicsget) | **GET** /epics/{epic_id} | Get a specific epic
*EpicsApi* | [**epicsList**](docs/EpicsApi.md#epicslist) | **GET** /epics | List epics
*EpicsApi* | [**epicsListByGoal**](docs/EpicsApi.md#epicslistbygoal) | **GET** /goals/{goal_id}/epics | List epics associated with a goal
*EpicsApi* | [**epicsListByInitiative**](docs/EpicsApi.md#epicslistbyinitiative) | **GET** /initiatives/{initiative_id}/epics | List epics associated with an initiative
*EpicsApi* | [**epicsListInProduct**](docs/EpicsApi.md#epicslistinproduct) | **GET** /products/{product_id}/epics | List epics in a product
*EpicsApi* | [**epicsListInRelease**](docs/EpicsApi.md#epicslistinrelease) | **GET** /releases/{release_id}/epics | List epics in a release
*EpicsApi* | [**epicsUpdate**](docs/EpicsApi.md#epicsupdate) | **PUT** /epics/{epic_id} | Update an epic
*FeaturesApi* | [**commentsCreateFeature**](docs/FeaturesApi.md#commentscreatefeature) | **POST** /features/{feature_id}/comments | Create a comment on a feature
*FeaturesApi* | [**featuresIdCustomFieldsWorksheetPut**](docs/FeaturesApi.md#featuresidcustomfieldsworksheetput) | **PUT** /features/{id}/custom_fields/worksheet | Update a feature\&#39;s custom worksheet fields
*FeaturesApi* | [**featuresIdEpicPut**](docs/FeaturesApi.md#featuresidepicput) | **PUT** /features/{id}/epic | Update a feature\&#39;s epic
*FeaturesApi* | [**featuresIdGoalsPut**](docs/FeaturesApi.md#featuresidgoalsput) | **PUT** /features/{id}/goals | Update a feature\&#39;s goals
*FeaturesApi* | [**featuresIdProgressPut**](docs/FeaturesApi.md#featuresidprogressput) | **PUT** /features/{id}/progress | Update a feature\&#39;s progress
*FeaturesApi* | [**featuresIdProgressSourcePut**](docs/FeaturesApi.md#featuresidprogresssourceput) | **PUT** /features/{id}/progress_source | Update a feature\&#39;s progress source
*FeaturesApi* | [**featuresIdReleasePut**](docs/FeaturesApi.md#featuresidreleaseput) | **PUT** /features/{id}/release | Update a feature\&#39;s release
*FeaturesApi* | [**featuresIdScorePut**](docs/FeaturesApi.md#featuresidscoreput) | **PUT** /features/{id}/score | Update a feature\&#39;s score
*FeaturesApi* | [**featuresIdTagsPut**](docs/FeaturesApi.md#featuresidtagsput) | **PUT** /features/{id}/tags | Update a feature\&#39;s tags with an array
*FeaturesApi* | [**featuresList**](docs/FeaturesApi.md#featureslist) | **GET** /features | List features
*GoalsApi* | [**commentsGetGoal**](docs/GoalsApi.md#commentsgetgoal) | **GET** /goals/{goal_id}/comments | List comments on a goal
*GoalsApi* | [**epicsListByGoal**](docs/GoalsApi.md#epicslistbygoal) | **GET** /goals/{goal_id}/epics | List epics associated with a goal
*GoalsApi* | [**goalsCreate**](docs/GoalsApi.md#goalscreate) | **POST** /goals | Create a goal
*GoalsApi* | [**goalsDelete**](docs/GoalsApi.md#goalsdelete) | **DELETE** /goals/{id} | Delete a goal
*GoalsApi* | [**goalsGet**](docs/GoalsApi.md#goalsget) | **GET** /goals/{id} | Get a goal
*GoalsApi* | [**goalsList**](docs/GoalsApi.md#goalslist) | **GET** /goals | List goals
*GoalsApi* | [**goalsUpdate**](docs/GoalsApi.md#goalsupdate) | **PUT** /goals/{id} | Update a goal
*GoalsApi* | [**goalsUpdateProgress**](docs/GoalsApi.md#goalsupdateprogress) | **PUT** /goals/{id}/progress | Update goal progress
*IdeaOrganizationsApi* | [**ideaOrganizationsCreate**](docs/IdeaOrganizationsApi.md#ideaorganizationscreate) | **POST** /idea_organizations | Create an idea organization
*IdeaOrganizationsApi* | [**ideaOrganizationsDelete**](docs/IdeaOrganizationsApi.md#ideaorganizationsdelete) | **DELETE** /idea_organizations/{id} | Delete an idea organization
*IdeaOrganizationsApi* | [**ideaOrganizationsGet**](docs/IdeaOrganizationsApi.md#ideaorganizationsget) | **GET** /idea_organizations/{id} | Get an idea organization
*IdeaOrganizationsApi* | [**ideaOrganizationsList**](docs/IdeaOrganizationsApi.md#ideaorganizationslist) | **GET** /idea_organizations | List idea organizations
*IdeaOrganizationsApi* | [**ideaOrganizationsUpdate**](docs/IdeaOrganizationsApi.md#ideaorganizationsupdate) | **PUT** /idea_organizations/{id} | Update an idea organization
*IdeaVotesApi* | [**ideasCreateEndorsement**](docs/IdeaVotesApi.md#ideascreateendorsement) | **POST** /ideas/{id}/endorsements | Create an endorsement (proxy vote)
*IdeaVotesApi* | [**ideasGetEndorsements**](docs/IdeaVotesApi.md#ideasgetendorsements) | **GET** /ideas/{id}/endorsements | Get endorsements for an idea
*IdeasApi* | [**commentsCreateIdea**](docs/IdeasApi.md#commentscreateidea) | **POST** /ideas/{idea_id}/comments | Create a comment on an idea
*IdeasApi* | [**commentsGetIdea**](docs/IdeasApi.md#commentsgetidea) | **GET** /ideas/{idea_id}/comments | List comments on an idea
*IdeasApi* | [**ideasCreate**](docs/IdeasApi.md#ideascreate) | **POST** /products/{product_id}/ideas | Create an idea
*IdeasApi* | [**ideasCreateByPortalUser**](docs/IdeasApi.md#ideascreatebyportaluser) | **POST** /products/{product_id}/ideas/portal_user | Create an idea created by a ideas portal user
*IdeasApi* | [**ideasCreateEndorsement**](docs/IdeasApi.md#ideascreateendorsement) | **POST** /ideas/{id}/endorsements | Create an endorsement (proxy vote)
*IdeasApi* | [**ideasCreateWithCategory**](docs/IdeasApi.md#ideascreatewithcategory) | **POST** /products/{product_id}/ideas/with_category | Create an idea with a category
*IdeasApi* | [**ideasCreateWithScore**](docs/IdeasApi.md#ideascreatewithscore) | **POST** /products/{product_id}/ideas/with_score | Create an idea with a score
*IdeasApi* | [**ideasDelete**](docs/IdeasApi.md#ideasdelete) | **DELETE** /ideas/{id} | Delete an idea
*IdeasApi* | [**ideasGetById**](docs/IdeasApi.md#ideasgetbyid) | **GET** /ideas/{id} | Get a specific idea
*IdeasApi* | [**ideasGetEndorsements**](docs/IdeasApi.md#ideasgetendorsements) | **GET** /ideas/{id}/endorsements | Get endorsements for an idea
*IdeasApi* | [**ideasGetVotes**](docs/IdeasApi.md#ideasgetvotes) | **GET** /ideas/{id}/votes | Get votes for an idea
*IdeasApi* | [**ideasGetWatchers**](docs/IdeasApi.md#ideasgetwatchers) | **GET** /ideas/{id}/watchers | Get idea watchers
*IdeasApi* | [**ideasList**](docs/IdeasApi.md#ideaslist) | **GET** /ideas | List ideas
*IdeasApi* | [**ideasListProduct**](docs/IdeasApi.md#ideaslistproduct) | **GET** /products/{product_id}/ideas | List ideas for a product
*IdeasApi* | [**ideasMarkSpam**](docs/IdeasApi.md#ideasmarkspam) | **POST** /ideas/{id}/spam | Mark idea as spam
*IdeasApi* | [**ideasPromote**](docs/IdeasApi.md#ideaspromote) | **POST** /ideas/{id}/promote | Promote an idea
*IdeasApi* | [**ideasUnmarkSpam**](docs/IdeasApi.md#ideasunmarkspam) | **DELETE** /ideas/{id}/spam | Unmark idea as spam
*IdeasApi* | [**ideasUpdate**](docs/IdeasApi.md#ideasupdate) | **PUT** /ideas/{id} | Update an idea
*IdeasApi* | [**ideasUpdateWatchers**](docs/IdeasApi.md#ideasupdatewatchers) | **PUT** /ideas/{id}/watchers | Update idea watchers
*IdeasApi* | [**ideasVote**](docs/IdeasApi.md#ideasvote) | **POST** /ideas/{id}/votes | Vote on an idea
*InitiativesApi* | [**commentsCreateInitiative**](docs/InitiativesApi.md#commentscreateinitiative) | **POST** /initiatives/{initiative_id}/comments | Create a comment on an initiative
*InitiativesApi* | [**commentsGetInitiative**](docs/InitiativesApi.md#commentsgetinitiative) | **GET** /initiatives/{initiative_id}/comments | List comments on an initiative
*InitiativesApi* | [**epicsListByInitiative**](docs/InitiativesApi.md#epicslistbyinitiative) | **GET** /initiatives/{initiative_id}/epics | List epics associated with an initiative
*InitiativesApi* | [**initiativesCreate**](docs/InitiativesApi.md#initiativescreate) | **POST** /products/{product_id}/initiatives | Create an initiative
*InitiativesApi* | [**initiativesGet**](docs/InitiativesApi.md#initiativesget) | **GET** /initiatives/{id} | Get a specific initiative
*InitiativesApi* | [**initiativesList**](docs/InitiativesApi.md#initiativeslist) | **GET** /initiatives | List initiatives
*MeApi* | [**meGetAssignedRecords**](docs/MeApi.md#megetassignedrecords) | **GET** /me/assigned | Get records assigned to current user
*MeApi* | [**meGetPendingTasks**](docs/MeApi.md#megetpendingtasks) | **GET** /me/tasks | Get pending tasks assigned to current user
*MeApi* | [**meGetProfile**](docs/MeApi.md#megetprofile) | **GET** /me | Get current user profile
*ProductsApi* | [**commentsGetProduct**](docs/ProductsApi.md#commentsgetproduct) | **GET** /products/{product_id}/comments | List comments in a product
*ProductsApi* | [**productsList**](docs/ProductsApi.md#productslist) | **GET** /products | List products in the account
*ReleasePhasesApi* | [**commentsGetReleasePhase**](docs/ReleasePhasesApi.md#commentsgetreleasephase) | **GET** /release_phases/{release_phase_id}/comments | List comments on a release phase
*ReleasesApi* | [**commentsGetRelease**](docs/ReleasesApi.md#commentsgetrelease) | **GET** /releases/{release_id}/comments | List comments on a release
*ReleasesApi* | [**productReleasesList**](docs/ReleasesApi.md#productreleaseslist) | **GET** /products/{product_id}/releases | List releases for a product
*ReleasesApi* | [**releasesCreate**](docs/ReleasesApi.md#releasescreate) | **POST** /products/{product_id}/releases | Create a release
*ReleasesApi* | [**releasesDelete**](docs/ReleasesApi.md#releasesdelete) | **DELETE** /releases/{id} | Delete a release
*ReleasesApi* | [**releasesGet**](docs/ReleasesApi.md#releasesget) | **GET** /releases/{id} | Get a release
*ReleasesApi* | [**releasesList**](docs/ReleasesApi.md#releaseslist) | **GET** /releases | List releases
*ReleasesApi* | [**releasesUpdate**](docs/ReleasesApi.md#releasesupdate) | **PUT** /releases/{id} | Update a release
*RequirementsApi* | [**commentsCreateRequirement**](docs/RequirementsApi.md#commentscreaterequirement) | **POST** /requirements/{requirement_id}/comments | Create a comment on a requirement
*RequirementsApi* | [**commentsGetRequirement**](docs/RequirementsApi.md#commentsgetrequirement) | **GET** /requirements/{requirement_id}/comments | List comments on a requirement
*StrategicModelsApi* | [**strategicModelsCreate**](docs/StrategicModelsApi.md#strategicmodelscreate) | **POST** /strategic_models | Create a strategic model
*StrategicModelsApi* | [**strategicModelsDelete**](docs/StrategicModelsApi.md#strategicmodelsdelete) | **DELETE** /strategic_models/{id} | Delete a strategic model
*StrategicModelsApi* | [**strategicModelsGet**](docs/StrategicModelsApi.md#strategicmodelsget) | **GET** /strategic_models/{id} | Get a strategic model
*StrategicModelsApi* | [**strategicModelsList**](docs/StrategicModelsApi.md#strategicmodelslist) | **GET** /strategic_models | List strategic models
*StrategicModelsApi* | [**strategicModelsUpdate**](docs/StrategicModelsApi.md#strategicmodelsupdate) | **PUT** /strategic_models/{id} | Update a strategic model
*ToDosApi* | [**commentsGetTodo**](docs/ToDosApi.md#commentsgettodo) | **GET** /todos/{todo_id}/comments | List comments on a to-do
*UsersApi* | [**usersGet**](docs/UsersApi.md#usersget) | **GET** /users/{id} | Get a specific user
*UsersApi* | [**usersList**](docs/UsersApi.md#userslist) | **GET** /users | List users


### Documentation For Models

 - [Comment](docs/Comment.md)
 - [CommentCreateRequest](docs/CommentCreateRequest.md)
 - [CommentsGetEpic200Response](docs/CommentsGetEpic200Response.md)
 - [Competitor](docs/Competitor.md)
 - [CompetitorCreateRequest](docs/CompetitorCreateRequest.md)
 - [CompetitorCreateRequestCompetitor](docs/CompetitorCreateRequestCompetitor.md)
 - [CompetitorUpdateRequest](docs/CompetitorUpdateRequest.md)
 - [CompetitorUpdateRequestCompetitor](docs/CompetitorUpdateRequestCompetitor.md)
 - [CompetitorsListProduct200Response](docs/CompetitorsListProduct200Response.md)
 - [Epic](docs/Epic.md)
 - [EpicCreateRequest](docs/EpicCreateRequest.md)
 - [EpicCreateRequestEpic](docs/EpicCreateRequestEpic.md)
 - [EpicDescription](docs/EpicDescription.md)
 - [EpicUpdateRequest](docs/EpicUpdateRequest.md)
 - [EpicUpdateRequestEpic](docs/EpicUpdateRequestEpic.md)
 - [EpicsList200Response](docs/EpicsList200Response.md)
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
 - [IdeaCreateRequestIdeaScoreFactsInner](docs/IdeaCreateRequestIdeaScoreFactsInner.md)
 - [IdeaEndorsementRequest](docs/IdeaEndorsementRequest.md)
 - [IdeaOrganization](docs/IdeaOrganization.md)
 - [IdeaOrganizationCreateRequest](docs/IdeaOrganizationCreateRequest.md)
 - [IdeaOrganizationGetResponse](docs/IdeaOrganizationGetResponse.md)
 - [IdeaOrganizationUpdateRequest](docs/IdeaOrganizationUpdateRequest.md)
 - [IdeaOrganizationsListResponse](docs/IdeaOrganizationsListResponse.md)
 - [IdeaOrganizationsListResponsePagination](docs/IdeaOrganizationsListResponsePagination.md)
 - [IdeaPromoteRequest](docs/IdeaPromoteRequest.md)
 - [IdeaResponse](docs/IdeaResponse.md)
 - [IdeaResponseIdea](docs/IdeaResponseIdea.md)
 - [IdeaResponseIdeaAssignedToUser](docs/IdeaResponseIdeaAssignedToUser.md)
 - [IdeaResponseIdeaCreatedByPortalUser](docs/IdeaResponseIdeaCreatedByPortalUser.md)
 - [IdeaResponseIdeaCreatedByUser](docs/IdeaResponseIdeaCreatedByUser.md)
 - [IdeaResponseIdeaScoreFactsInner](docs/IdeaResponseIdeaScoreFactsInner.md)
 - [IdeaResponseIdeaWorkflowStatusTimesInner](docs/IdeaResponseIdeaWorkflowStatusTimesInner.md)
 - [IdeaUpdateRequest](docs/IdeaUpdateRequest.md)
 - [IdeaUpdateRequestScoreFactsInner](docs/IdeaUpdateRequestScoreFactsInner.md)
 - [IdeaVoteRequest](docs/IdeaVoteRequest.md)
 - [IdeaWatchersRequest](docs/IdeaWatchersRequest.md)
 - [IdeaWatchersRequestWatchersInner](docs/IdeaWatchersRequestWatchersInner.md)
 - [IdeasCreateEndorsement201Response](docs/IdeasCreateEndorsement201Response.md)
 - [IdeasCreateEndorsement201ResponseEndorsement](docs/IdeasCreateEndorsement201ResponseEndorsement.md)
 - [IdeasCreateEndorsement201ResponseIdea](docs/IdeasCreateEndorsement201ResponseIdea.md)
 - [IdeasGetEndorsements200Response](docs/IdeasGetEndorsements200Response.md)
 - [IdeasGetEndorsements200ResponseEndorsementsInner](docs/IdeasGetEndorsements200ResponseEndorsementsInner.md)
 - [IdeasGetEndorsements200ResponseEndorsementsInnerCreatedByUser](docs/IdeasGetEndorsements200ResponseEndorsementsInnerCreatedByUser.md)
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
 - [MeAssignedRecordsResponse](docs/MeAssignedRecordsResponse.md)
 - [MeAssignedRecordsResponsePagination](docs/MeAssignedRecordsResponsePagination.md)
 - [MeAssignedRecordsResponseRecordsInner](docs/MeAssignedRecordsResponseRecordsInner.md)
 - [MeAssignedRecordsResponseRecordsInnerAssignedToUser](docs/MeAssignedRecordsResponseRecordsInnerAssignedToUser.md)
 - [MeAssignedRecordsResponseRecordsInnerWorkflowStatus](docs/MeAssignedRecordsResponseRecordsInnerWorkflowStatus.md)
 - [MePendingTasksResponse](docs/MePendingTasksResponse.md)
 - [MePendingTasksResponsePagination](docs/MePendingTasksResponsePagination.md)
 - [MePendingTasksResponseTasksInner](docs/MePendingTasksResponseTasksInner.md)
 - [MePendingTasksResponseTasksInnerAssignedByUser](docs/MePendingTasksResponseTasksInnerAssignedByUser.md)
 - [MeProfileResponse](docs/MeProfileResponse.md)
 - [MeProfileResponseUser](docs/MeProfileResponseUser.md)
 - [ProductsListResponse](docs/ProductsListResponse.md)
 - [ProductsListResponseProductsInner](docs/ProductsListResponseProductsInner.md)
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

