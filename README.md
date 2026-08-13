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

All URIs are relative to *https://company.aha.io/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountBackupsApi* | [**accountBackupsByIdGet**](docs/AccountBackupsApi.md#accountbackupsbyidget) | **GET** /account_backups/{id} | Get a specific account backup
*AccountBackupsApi* | [**accountBackupsByIdTgGet**](docs/AccountBackupsApi.md#accountbackupsbyidtgget) | **GET** /account_backups/{id}.tgz | Download an account backup
*AccountBackupsApi* | [**accountBackupsGet**](docs/AccountBackupsApi.md#accountbackupsget) | **GET** /account_backups | List account backups
*AccountBackupsApi* | [**accountBackupsPost**](docs/AccountBackupsApi.md#accountbackupspost) | **POST** /account_backups | Create an account backup
*AssistantUsageApi* | [**usageAssistantUsersGet**](docs/AssistantUsageApi.md#usageassistantusersget) | **GET** /usage/assistant_users | List assistant users within a time window
*AttachmentsApi* | [**attachmentsByAttachmentDelete**](docs/AttachmentsApi.md#attachmentsbyattachmentdelete) | **DELETE** /attachments/{attachment_id} | Delete an attachment
*AttachmentsApi* | [**commentsByCommentAttachmentsPost**](docs/AttachmentsApi.md#commentsbycommentattachmentspost) | **POST** /comments/{comment_id}/attachments | Create an attachment on a comment
*AttachmentsApi* | [**customFieldValuesByCustomFieldValueAttachmentsPost**](docs/AttachmentsApi.md#customfieldvaluesbycustomfieldvalueattachmentspost) | **POST** /custom_field_values/{custom_field_value_id}/attachments | Create an attachment on a custom attachment field
*AttachmentsApi* | [**customFieldsByCustomFieldAttachmentsPost**](docs/AttachmentsApi.md#customfieldsbycustomfieldattachmentspost) | **POST** /custom_fields/{custom_field_id}/attachments | Create an attachment on a custom note field
*AttachmentsApi* | [**ideaCommentsByIdeaCommentAttachmentsPost**](docs/AttachmentsApi.md#ideacommentsbyideacommentattachmentspost) | **POST** /idea_comments/{idea_comment_id}/attachments | Create an attachment on an idea comment
*AttachmentsApi* | [**notesByNoteAttachmentsPost**](docs/AttachmentsApi.md#notesbynoteattachmentspost) | **POST** /notes/{note_id}/attachments | Create an attachment on a record description
*AttachmentsApi* | [**tasksByTaskAttachmentsPost**](docs/AttachmentsApi.md#tasksbytaskattachmentspost) | **POST** /tasks/{task_id}/attachments | Create an attachment on a to-do
*AuditsApi* | [**auditsGet**](docs/AuditsApi.md#auditsget) | **GET** /audits | Retrieve record history with a user field change
*CapacityEstimateValuesApi* | [**capacityInvestmentsByIdEstimateValuesGet**](docs/CapacityEstimateValuesApi.md#capacityinvestmentsbyidestimatevaluesget) | **GET** /capacity_investments/{id}/estimate_values | List estimate values for a capacity investment
*CapacityEstimateValuesApi* | [**capacityInvestmentsByIdEstimateValuesPost**](docs/CapacityEstimateValuesApi.md#capacityinvestmentsbyidestimatevaluespost) | **POST** /capacity_investments/{id}/estimate_values | Create estimate values for a capacity investment
*CapacityEstimateValuesApi* | [**estimateValuesByIdDelete**](docs/CapacityEstimateValuesApi.md#estimatevaluesbyiddelete) | **DELETE** /estimate_values/{id} | Delete an estimate value
*CapacityEstimateValuesApi* | [**estimateValuesByIdPut**](docs/CapacityEstimateValuesApi.md#estimatevaluesbyidput) | **PUT** /estimate_values/{id} | Update an estimate value
*CapacityInvestmentsApi* | [**capacityInvestmentsByIdGet**](docs/CapacityInvestmentsApi.md#capacityinvestmentsbyidget) | **GET** /capacity_investments/{id} | Get a capacity investment
*CapacityInvestmentsApi* | [**capacityInvestmentsByIdPut**](docs/CapacityInvestmentsApi.md#capacityinvestmentsbyidput) | **PUT** /capacity_investments/{id} | Update a capacity investment
*CapacityInvestmentsApi* | [**epicsByEpicCapacityInvestmentsGet**](docs/CapacityInvestmentsApi.md#epicsbyepiccapacityinvestmentsget) | **GET** /epics/{epic_id}/capacity_investments | List capacity investments for an epic
*CapacityInvestmentsApi* | [**epicsByEpicCapacityInvestmentsPost**](docs/CapacityInvestmentsApi.md#epicsbyepiccapacityinvestmentspost) | **POST** /epics/{epic_id}/capacity_investments | Create a capacity investment on an epic
*CapacityInvestmentsApi* | [**featuresByFeatureCapacityInvestmentsGet**](docs/CapacityInvestmentsApi.md#featuresbyfeaturecapacityinvestmentsget) | **GET** /features/{feature_id}/capacity_investments | List capacity investments for a feature
*CapacityInvestmentsApi* | [**featuresByFeatureCapacityInvestmentsPost**](docs/CapacityInvestmentsApi.md#featuresbyfeaturecapacityinvestmentspost) | **POST** /features/{feature_id}/capacity_investments | Create a capacity investment on a feature
*CapacityInvestmentsApi* | [**initiativesByInitiativeCapacityInvestmentsGet**](docs/CapacityInvestmentsApi.md#initiativesbyinitiativecapacityinvestmentsget) | **GET** /initiatives/{initiative_id}/capacity_investments | List capacity investments for an initiative
*CapacityInvestmentsApi* | [**initiativesByInitiativeCapacityInvestmentsPost**](docs/CapacityInvestmentsApi.md#initiativesbyinitiativecapacityinvestmentspost) | **POST** /initiatives/{initiative_id}/capacity_investments | Create a capacity investment on an initiative
*CapacityInvestmentsApi* | [**productsByProductCapacityInvestmentsGet**](docs/CapacityInvestmentsApi.md#productsbyproductcapacityinvestmentsget) | **GET** /products/{product_id}/capacity_investments | List capacity investments for a product
*CapacityScenariosApi* | [**capacityScenariosByIdGet**](docs/CapacityScenariosApi.md#capacityscenariosbyidget) | **GET** /capacity_scenarios/{id} | Get a capacity scenario
*CapacityScenariosApi* | [**capacityScenariosGet**](docs/CapacityScenariosApi.md#capacityscenariosget) | **GET** /capacity_scenarios | List capacity scenarios
*CommentsApi* | [**commentsByIdDelete**](docs/CommentsApi.md#commentsbyiddelete) | **DELETE** /comments/{id} | Delete a comment
*CommentsApi* | [**commentsByIdGet**](docs/CommentsApi.md#commentsbyidget) | **GET** /comments/{id} | Get a specific comment
*CommentsApi* | [**commentsByIdPut**](docs/CommentsApi.md#commentsbyidput) | **PUT** /comments/{id} | Update a comment
*CommentsApi* | [**epicsByEpicCommentsGet**](docs/CommentsApi.md#epicsbyepiccommentsget) | **GET** /epics/{epic_id}/comments | List comments on an epic
*CommentsApi* | [**epicsByEpicCommentsPost**](docs/CommentsApi.md#epicsbyepiccommentspost) | **POST** /epics/{epic_id}/comments | Create a comment on an epic
*CommentsApi* | [**featuresByFeatureCommentsGet**](docs/CommentsApi.md#featuresbyfeaturecommentsget) | **GET** /features/{feature_id}/comments | List comments on a feature
*CommentsApi* | [**featuresByFeatureCommentsPost**](docs/CommentsApi.md#featuresbyfeaturecommentspost) | **POST** /features/{feature_id}/comments | Create a comment on a feature
*CommentsApi* | [**goalsByGoalCommentsGet**](docs/CommentsApi.md#goalsbygoalcommentsget) | **GET** /goals/{goal_id}/comments | List comments on a goal
*CommentsApi* | [**goalsByGoalCommentsPost**](docs/CommentsApi.md#goalsbygoalcommentspost) | **POST** /goals/{goal_id}/comments | Create a comment on a goal
*CommentsApi* | [**ideasByIdeaCommentsGet**](docs/CommentsApi.md#ideasbyideacommentsget) | **GET** /ideas/{idea_id}/comments | List comments on an idea
*CommentsApi* | [**ideasByIdeaCommentsPost**](docs/CommentsApi.md#ideasbyideacommentspost) | **POST** /ideas/{idea_id}/comments | Create an internal comment for an idea
*CommentsApi* | [**initiativesByInitiativeCommentsGet**](docs/CommentsApi.md#initiativesbyinitiativecommentsget) | **GET** /initiatives/{initiative_id}/comments | List comments on an initiative
*CommentsApi* | [**initiativesByInitiativeCommentsPost**](docs/CommentsApi.md#initiativesbyinitiativecommentspost) | **POST** /initiatives/{initiative_id}/comments | Create a comment on an initiative
*CommentsApi* | [**pagesByPageCommentsGet**](docs/CommentsApi.md#pagesbypagecommentsget) | **GET** /pages/{page_id}/comments | List comments on a note
*CommentsApi* | [**pagesByPageCommentsPost**](docs/CommentsApi.md#pagesbypagecommentspost) | **POST** /pages/{page_id}/comments | Create a comment on a note
*CommentsApi* | [**productsByProjectCommentsGet**](docs/CommentsApi.md#productsbyprojectcommentsget) | **GET** /products/{project_id}/comments | List comments in a product
*CommentsApi* | [**releasePhasesByReleasePhaseCommentsGet**](docs/CommentsApi.md#releasephasesbyreleasephasecommentsget) | **GET** /release_phases/{release_phase_id}/comments | List comments on a release phase
*CommentsApi* | [**releasePhasesByReleasePhaseCommentsPost**](docs/CommentsApi.md#releasephasesbyreleasephasecommentspost) | **POST** /release_phases/{release_phase_id}/comments | Create a comment on a release phase
*CommentsApi* | [**releasesByReleaseCommentsGet**](docs/CommentsApi.md#releasesbyreleasecommentsget) | **GET** /releases/{release_id}/comments | List comments on a release
*CommentsApi* | [**releasesByReleaseCommentsPost**](docs/CommentsApi.md#releasesbyreleasecommentspost) | **POST** /releases/{release_id}/comments | Create a comment on a release
*CommentsApi* | [**requirementsByRequirementCommentsGet**](docs/CommentsApi.md#requirementsbyrequirementcommentsget) | **GET** /requirements/{requirement_id}/comments | List comments on a requirement
*CommentsApi* | [**requirementsByRequirementCommentsPost**](docs/CommentsApi.md#requirementsbyrequirementcommentspost) | **POST** /requirements/{requirement_id}/comments | Create a comment on a requirement
*CommentsApi* | [**tasksByTaskCommentsGet**](docs/CommentsApi.md#tasksbytaskcommentsget) | **GET** /tasks/{task_id}/comments | List comments on a to-do
*CommentsApi* | [**tasksByTaskCommentsPost**](docs/CommentsApi.md#tasksbytaskcommentspost) | **POST** /tasks/{task_id}/comments | Create a comment on a to-do
*CompetitorsApi* | [**competitorsByIdGet**](docs/CompetitorsApi.md#competitorsbyidget) | **GET** /competitors/{id} | Get a specific competitor
*CompetitorsApi* | [**productsByProductCompetitorsByIdDelete**](docs/CompetitorsApi.md#productsbyproductcompetitorsbyiddelete) | **DELETE** /products/{product_id}/competitors/{id} | Delete a competitor
*CompetitorsApi* | [**productsByProductCompetitorsByIdPut**](docs/CompetitorsApi.md#productsbyproductcompetitorsbyidput) | **PUT** /products/{product_id}/competitors/{id} | Update a competitor
*CompetitorsApi* | [**productsByProductCompetitorsGet**](docs/CompetitorsApi.md#productsbyproductcompetitorsget) | **GET** /products/{product_id}/competitors | List competitors in a product
*CompetitorsApi* | [**productsByProductCompetitorsPost**](docs/CompetitorsApi.md#productsbyproductcompetitorspost) | **POST** /products/{product_id}/competitors | Create a competitor
*CreativeBriefsApi* | [**creativeBriefsByIdGet**](docs/CreativeBriefsApi.md#creativebriefsbyidget) | **GET** /creative_briefs/{id} | Get a specific creative_brief
*CreativeBriefsApi* | [**productsByProductCreativeBriefsByIdDelete**](docs/CreativeBriefsApi.md#productsbyproductcreativebriefsbyiddelete) | **DELETE** /products/{product_id}/creative_briefs/{id} | Delete a creative brief
*CreativeBriefsApi* | [**productsByProductCreativeBriefsByIdPut**](docs/CreativeBriefsApi.md#productsbyproductcreativebriefsbyidput) | **PUT** /products/{product_id}/creative_briefs/{id} | Update a creative brief
*CreativeBriefsApi* | [**productsByProductCreativeBriefsGet**](docs/CreativeBriefsApi.md#productsbyproductcreativebriefsget) | **GET** /products/{product_id}/creative_briefs | List creative briefs in a product
*CreativeBriefsApi* | [**productsByProductCreativeBriefsPost**](docs/CreativeBriefsApi.md#productsbyproductcreativebriefspost) | **POST** /products/{product_id}/creative_briefs | Create a creative brief
*CustomFieldOptionsApi* | [**customFieldDefinitionsByCustomFieldDefinitionCustomFieldOptionsByIdDelete**](docs/CustomFieldOptionsApi.md#customfielddefinitionsbycustomfielddefinitioncustomfieldoptionsbyiddelete) | **DELETE** /custom_field_definitions/{custom_field_definition_id}/custom_field_options/{id} | Delete a custom field option
*CustomFieldOptionsApi* | [**customFieldDefinitionsByCustomFieldDefinitionCustomFieldOptionsByIdPut**](docs/CustomFieldOptionsApi.md#customfielddefinitionsbycustomfielddefinitioncustomfieldoptionsbyidput) | **PUT** /custom_field_definitions/{custom_field_definition_id}/custom_field_options/{id} | Update a custom field option
*CustomFieldOptionsApi* | [**customFieldDefinitionsByCustomFieldDefinitionCustomFieldOptionsGet**](docs/CustomFieldOptionsApi.md#customfielddefinitionsbycustomfielddefinitioncustomfieldoptionsget) | **GET** /custom_field_definitions/{custom_field_definition_id}/custom_field_options | List all custom field options
*CustomFieldOptionsApi* | [**customFieldDefinitionsByCustomFieldDefinitionCustomFieldOptionsPost**](docs/CustomFieldOptionsApi.md#customfielddefinitionsbycustomfielddefinitioncustomfieldoptionspost) | **POST** /custom_field_definitions/{custom_field_definition_id}/custom_field_options | Create a custom field option
*CustomFieldsApi* | [**customFieldDefinitionsByCustomFieldDefinitionOptionsGet**](docs/CustomFieldsApi.md#customfielddefinitionsbycustomfielddefinitionoptionsget) | **GET** /custom_field_definitions/{custom_field_definition_id}/options | List options for a custom field
*CustomFieldsApi* | [**customFieldDefinitionsGet**](docs/CustomFieldsApi.md#customfielddefinitionsget) | **GET** /custom_field_definitions | List all custom fields
*CustomLayoutsApi* | [**screenDefinitionsByIdGet**](docs/CustomLayoutsApi.md#screendefinitionsbyidget) | **GET** /screen_definitions/{id} | Get a custom layout by ID
*CustomLayoutsApi* | [**screenDefinitionsGet**](docs/CustomLayoutsApi.md#screendefinitionsget) | **GET** /screen_definitions | List all custom layouts
*CustomReportsApi* | [**bookmarksCustomPivotsByReportGet**](docs/CustomReportsApi.md#bookmarkscustompivotsbyreportget) | **GET** /bookmarks/custom_pivots/{report_id} | Get the list view of a saved report
*CustomTableRecordsApi* | [**customObjectRecordsByIdDelete**](docs/CustomTableRecordsApi.md#customobjectrecordsbyiddelete) | **DELETE** /custom_object_records/{id} | Delete a custom table record
*CustomTableRecordsApi* | [**customObjectRecordsByIdGet**](docs/CustomTableRecordsApi.md#customobjectrecordsbyidget) | **GET** /custom_object_records/{id} | Get a specific custom table record
*CustomTableRecordsApi* | [**customObjectRecordsByIdPut**](docs/CustomTableRecordsApi.md#customobjectrecordsbyidput) | **PUT** /custom_object_records/{id} | Update a custom table record
*CustomTableRecordsApi* | [**productsByProductCustomObjectsByKeyRecordsGet**](docs/CustomTableRecordsApi.md#productsbyproductcustomobjectsbykeyrecordsget) | **GET** /products/{product_id}/custom_objects/{key}/records | List records in a custom table for a product
*CustomTableRecordsApi* | [**productsByProductCustomObjectsByKeyRecordsPost**](docs/CustomTableRecordsApi.md#productsbyproductcustomobjectsbykeyrecordspost) | **POST** /products/{product_id}/custom_objects/{key}/records | Create a custom table record
*DeletionsApi* | [**deletionsByIdRestorePost**](docs/DeletionsApi.md#deletionsbyidrestorepost) | **POST** /deletions/{id}/restore | restore a specific record
*DeletionsApi* | [**deletionsGet**](docs/DeletionsApi.md#deletionsget) | **GET** /deletions | List contents of recycle bin
*DiscoveryGroupsApi* | [**discoveryGroupsByIdDelete**](docs/DiscoveryGroupsApi.md#discoverygroupsbyiddelete) | **DELETE** /discovery_groups/{id} | Delete group
*DiscoveryGroupsApi* | [**discoveryGroupsByIdGet**](docs/DiscoveryGroupsApi.md#discoverygroupsbyidget) | **GET** /discovery_groups/{id} | Get a specific group
*DiscoveryGroupsApi* | [**discoveryGroupsByIdPut**](docs/DiscoveryGroupsApi.md#discoverygroupsbyidput) | **PUT** /discovery_groups/{id} | Update group
*DiscoveryGroupsApi* | [**discoveryGroupsGet**](docs/DiscoveryGroupsApi.md#discoverygroupsget) | **GET** /discovery_groups | List discovery groups
*DiscoveryGroupsApi* | [**discoveryGroupsPost**](docs/DiscoveryGroupsApi.md#discoverygroupspost) | **POST** /discovery_groups | Create a group
*EpicsApi* | [**epicsByIdDelete**](docs/EpicsApi.md#epicsbyiddelete) | **DELETE** /epics/{id} | Delete an epic
*EpicsApi* | [**epicsByIdGet**](docs/EpicsApi.md#epicsbyidget) | **GET** /epics/{id} | Get a specific epic
*EpicsApi* | [**epicsByIdPut**](docs/EpicsApi.md#epicsbyidput) | **PUT** /epics/{id} | Update an epic
*EpicsApi* | [**epicsGet**](docs/EpicsApi.md#epicsget) | **GET** /epics | List epics
*EpicsApi* | [**goalsByGoalEpicsGet**](docs/EpicsApi.md#goalsbygoalepicsget) | **GET** /goals/{goal_id}/epics | List epics associated with a goal
*EpicsApi* | [**initiativesByInitiativeEpicsGet**](docs/EpicsApi.md#initiativesbyinitiativeepicsget) | **GET** /initiatives/{initiative_id}/epics | List epics associated with an initiative
*EpicsApi* | [**productsByProductEpicsGet**](docs/EpicsApi.md#productsbyproductepicsget) | **GET** /products/{product_id}/epics | List epics in a product
*EpicsApi* | [**productsByProductEpicsPost**](docs/EpicsApi.md#productsbyproductepicspost) | **POST** /products/{product_id}/epics | Create an epic in the default release
*EpicsApi* | [**releasesByReleaseEpicsGet**](docs/EpicsApi.md#releasesbyreleaseepicsget) | **GET** /releases/{release_id}/epics | List epics in a release
*EpicsApi* | [**releasesByReleaseEpicsPost**](docs/EpicsApi.md#releasesbyreleaseepicspost) | **POST** /releases/{release_id}/epics | Create an epic
*FeaturesApi* | [**epicsByEpicFeaturesGet**](docs/FeaturesApi.md#epicsbyepicfeaturesget) | **GET** /epics/{epic_id}/features | List features in an epic
*FeaturesApi* | [**featuresByIdConvertToEpicPost**](docs/FeaturesApi.md#featuresbyidconverttoepicpost) | **POST** /features/{id}/convert_to_epic | Convert a feature to an epic
*FeaturesApi* | [**featuresByIdDelete**](docs/FeaturesApi.md#featuresbyiddelete) | **DELETE** /features/{id} | Delete a feature
*FeaturesApi* | [**featuresByIdGet**](docs/FeaturesApi.md#featuresbyidget) | **GET** /features/{id} | Get a specific feature
*FeaturesApi* | [**featuresByIdPut**](docs/FeaturesApi.md#featuresbyidput) | **PUT** /features/{id} | Update a feature
*FeaturesApi* | [**featuresGet**](docs/FeaturesApi.md#featuresget) | **GET** /features | List features
*FeaturesApi* | [**goalsByGoalFeaturesGet**](docs/FeaturesApi.md#goalsbygoalfeaturesget) | **GET** /goals/{goal_id}/features | List features associated with a goal
*FeaturesApi* | [**initiativesByInitiativeFeaturesGet**](docs/FeaturesApi.md#initiativesbyinitiativefeaturesget) | **GET** /initiatives/{initiative_id}/features | List features associated with an initiative
*FeaturesApi* | [**productsByProductFeaturesGet**](docs/FeaturesApi.md#productsbyproductfeaturesget) | **GET** /products/{product_id}/features | List features in a product
*FeaturesApi* | [**releasesByReleaseFeaturesGet**](docs/FeaturesApi.md#releasesbyreleasefeaturesget) | **GET** /releases/{release_id}/features | List features in a release
*FeaturesApi* | [**releasesByReleaseFeaturesPost**](docs/FeaturesApi.md#releasesbyreleasefeaturespost) | **POST** /releases/{release_id}/features | Create a feature
*GoalsApi* | [**goalsByIdGet**](docs/GoalsApi.md#goalsbyidget) | **GET** /goals/{id} | Get a specific goal
*GoalsApi* | [**goalsByIdPut**](docs/GoalsApi.md#goalsbyidput) | **PUT** /goals/{id} | Update a goal
*GoalsApi* | [**goalsGet**](docs/GoalsApi.md#goalsget) | **GET** /goals | List goals
*GoalsApi* | [**initiativesByInitiativeGoalsGet**](docs/GoalsApi.md#initiativesbyinitiativegoalsget) | **GET** /initiatives/{initiative_id}/goals | List goals associated with an initiative
*GoalsApi* | [**productsByProductGoalsByIdDelete**](docs/GoalsApi.md#productsbyproductgoalsbyiddelete) | **DELETE** /products/{product_id}/goals/{id} | Delete a goal
*GoalsApi* | [**productsByProductGoalsByIdPut**](docs/GoalsApi.md#productsbyproductgoalsbyidput) | **PUT** /products/{product_id}/goals/{id} | Update a goal
*GoalsApi* | [**productsByProductGoalsGet**](docs/GoalsApi.md#productsbyproductgoalsget) | **GET** /products/{product_id}/goals | List goals in a product
*GoalsApi* | [**productsByProductGoalsPost**](docs/GoalsApi.md#productsbyproductgoalspost) | **POST** /products/{product_id}/goals | Create a goal
*HistoricalAuditsApi* | [**historicalAuditsGet**](docs/HistoricalAuditsApi.md#historicalauditsget) | **GET** /historical_audits | Read the contents of the historical index
*HistoricalAuditsApi* | [**historicalAuditsPost**](docs/HistoricalAuditsApi.md#historicalauditspost) | **POST** /historical_audits | Create an audit search
*IdeaCategoriesApi* | [**productsByProductIdeaCategoriesGet**](docs/IdeaCategoriesApi.md#productsbyproductideacategoriesget) | **GET** /products/{product_id}/idea_categories | List idea categories in a product
*IdeaCategoriesApi* | [**productsByProductIdeaCategoriesPost**](docs/IdeaCategoriesApi.md#productsbyproductideacategoriespost) | **POST** /products/{product_id}/idea_categories | Create a nested idea category
*IdeaCommentsApi* | [**ideaCommentsByIdPut**](docs/IdeaCommentsApi.md#ideacommentsbyidput) | **PUT** /idea_comments/{id} | Mark an idea comment as spam
*IdeaCommentsApi* | [**ideasByIdeaIdeaCommentsByIdDelete**](docs/IdeaCommentsApi.md#ideasbyideaideacommentsbyiddelete) | **DELETE** /ideas/{idea_id}/idea_comments/{id} | Delete an idea comment
*IdeaCommentsApi* | [**ideasByIdeaIdeaCommentsGet**](docs/IdeaCommentsApi.md#ideasbyideaideacommentsget) | **GET** /ideas/{idea_id}/idea_comments | List idea comments for an idea
*IdeaCommentsApi* | [**ideasByIdeaIdeaCommentsPost**](docs/IdeaCommentsApi.md#ideasbyideaideacommentspost) | **POST** /ideas/{idea_id}/idea_comments | Create an idea comment created by an Aha! user (specified by id)
*IdeaOrganizationsApi* | [**ideaOrganizationsByIdDelete**](docs/IdeaOrganizationsApi.md#ideaorganizationsbyiddelete) | **DELETE** /idea_organizations/{id} | Delete organization
*IdeaOrganizationsApi* | [**ideaOrganizationsByIdGet**](docs/IdeaOrganizationsApi.md#ideaorganizationsbyidget) | **GET** /idea_organizations/{id} | Get a specific organization
*IdeaOrganizationsApi* | [**ideaOrganizationsByIdPut**](docs/IdeaOrganizationsApi.md#ideaorganizationsbyidput) | **PUT** /idea_organizations/{id} | Update a idea organization
*IdeaOrganizationsApi* | [**ideaOrganizationsGet**](docs/IdeaOrganizationsApi.md#ideaorganizationsget) | **GET** /idea_organizations | List idea organizations
*IdeaOrganizationsApi* | [**ideaOrganizationsPost**](docs/IdeaOrganizationsApi.md#ideaorganizationspost) | **POST** /idea_organizations | Create an idea organization
*IdeaPortalsApi* | [**ideaPortalsGet**](docs/IdeaPortalsApi.md#ideaportalsget) | **GET** /idea_portals | List all idea portals in an account
*IdeaPortalsApi* | [**productsByProductIdeaPortalsGet**](docs/IdeaPortalsApi.md#productsbyproductideaportalsget) | **GET** /products/{product_id}/idea_portals | List idea portals in a product
*IdeaPortalsApi* | [**productsByProductIdeaPortalsPost**](docs/IdeaPortalsApi.md#productsbyproductideaportalspost) | **POST** /products/{product_id}/idea_portals | Add idea portals to a product
*IdeaPortalsApi* | [**productsByProductIdeaPortalsPut**](docs/IdeaPortalsApi.md#productsbyproductideaportalsput) | **PUT** /products/{product_id}/idea_portals | Replace the idea portals linked to a product
*IdeaSubscriptionsApi* | [**ideasByIdeaSubscriptionsByIdDelete**](docs/IdeaSubscriptionsApi.md#ideasbyideasubscriptionsbyiddelete) | **DELETE** /ideas/{idea_id}/subscriptions/{id} | Delete an idea subscription
*IdeaSubscriptionsApi* | [**ideasByIdeaSubscriptionsByIdGet**](docs/IdeaSubscriptionsApi.md#ideasbyideasubscriptionsbyidget) | **GET** /ideas/{idea_id}/subscriptions/{id} | Get a specific subscription for an idea
*IdeaSubscriptionsApi* | [**ideasByIdeaSubscriptionsGet**](docs/IdeaSubscriptionsApi.md#ideasbyideasubscriptionsget) | **GET** /ideas/{idea_id}/subscriptions | List subscriptions for an idea
*IdeaSubscriptionsApi* | [**ideasByIdeaSubscriptionsPost**](docs/IdeaSubscriptionsApi.md#ideasbyideasubscriptionspost) | **POST** /ideas/{idea_id}/subscriptions | Create an idea subscription
*IdeaThemesApi* | [**ideaThemesByIdDelete**](docs/IdeaThemesApi.md#ideathemesbyiddelete) | **DELETE** /idea_themes/{id} | Delete an idea theme
*IdeaThemesApi* | [**ideaThemesByIdGet**](docs/IdeaThemesApi.md#ideathemesbyidget) | **GET** /idea_themes/{id} | Get a specific idea theme
*IdeaThemesApi* | [**ideaThemesByIdPut**](docs/IdeaThemesApi.md#ideathemesbyidput) | **PUT** /idea_themes/{id} | Update an idea theme
*IdeaThemesApi* | [**ideaThemesGet**](docs/IdeaThemesApi.md#ideathemesget) | **GET** /idea_themes | List idea themes
*IdeaThemesApi* | [**ideaThemesPost**](docs/IdeaThemesApi.md#ideathemespost) | **POST** /idea_themes | Create an idea theme
*IdeaUsersApi* | [**ideaUsersByIdDelete**](docs/IdeaUsersApi.md#ideausersbyiddelete) | **DELETE** /idea_users/{id} | Delete an idea user
*IdeaUsersApi* | [**ideaUsersByIdGet**](docs/IdeaUsersApi.md#ideausersbyidget) | **GET** /idea_users/{id} | Get a specific idea user
*IdeaUsersApi* | [**ideaUsersByIdPut**](docs/IdeaUsersApi.md#ideausersbyidput) | **PUT** /idea_users/{id} | Remove an idea user\&#39;s discovery_groups
*IdeaUsersApi* | [**ideaUsersGet**](docs/IdeaUsersApi.md#ideausersget) | **GET** /idea_users | List idea users for an account
*IdeaUsersApi* | [**ideaUsersPost**](docs/IdeaUsersApi.md#ideauserspost) | **POST** /idea_users | Create a idea user
*IdeaVotesApi* | [**ideaOrganizationsByIdeaOrganizationEndorsementsGet**](docs/IdeaVotesApi.md#ideaorganizationsbyideaorganizationendorsementsget) | **GET** /idea_organizations/{idea_organization_id}/endorsements | List votes for an organization
*IdeaVotesApi* | [**ideasByIdeaEndorsementsByIdDelete**](docs/IdeaVotesApi.md#ideasbyideaendorsementsbyiddelete) | **DELETE** /ideas/{idea_id}/endorsements/{id} | Delete an idea vote
*IdeaVotesApi* | [**ideasByIdeaEndorsementsByIdGet**](docs/IdeaVotesApi.md#ideasbyideaendorsementsbyidget) | **GET** /ideas/{idea_id}/endorsements/{id} | Get a specific vote for an idea
*IdeaVotesApi* | [**ideasByIdeaEndorsementsByIdPut**](docs/IdeaVotesApi.md#ideasbyideaendorsementsbyidput) | **PUT** /ideas/{idea_id}/endorsements/{id} | Update an idea vote
*IdeaVotesApi* | [**ideasByIdeaEndorsementsGet**](docs/IdeaVotesApi.md#ideasbyideaendorsementsget) | **GET** /ideas/{idea_id}/endorsements | Get all related idea organizations for votes associated with an idea
*IdeaVotesApi* | [**ideasByIdeaEndorsementsPost**](docs/IdeaVotesApi.md#ideasbyideaendorsementspost) | **POST** /ideas/{idea_id}/endorsements | Create a proxy vote
*IdeaVotesApi* | [**ideasEndorsementsGet**](docs/IdeaVotesApi.md#ideasendorsementsget) | **GET** /ideas/endorsements | List votes for an account
*IdeasApi* | [**ideasByIdDelete**](docs/IdeasApi.md#ideasbyiddelete) | **DELETE** /ideas/{id} | Delete an idea
*IdeasApi* | [**ideasByIdGet**](docs/IdeasApi.md#ideasbyidget) | **GET** /ideas/{id} | Get a specific idea
*IdeasApi* | [**ideasByIdPromotePut**](docs/IdeasApi.md#ideasbyidpromoteput) | **PUT** /ideas/{id}/promote | Promote an idea
*IdeasApi* | [**ideasByIdPut**](docs/IdeasApi.md#ideasbyidput) | **PUT** /ideas/{id} | Update a idea
*IdeasApi* | [**ideasGet**](docs/IdeasApi.md#ideasget) | **GET** /ideas | List ideas
*IdeasApi* | [**ideasRelatedGet**](docs/IdeasApi.md#ideasrelatedget) | **GET** /ideas/related | List ideas related to a particular term
*IdeasApi* | [**productsByProductIdeasGet**](docs/IdeasApi.md#productsbyproductideasget) | **GET** /products/{product_id}/ideas | List ideas for a product
*IdeasApi* | [**productsByProductIdeasPost**](docs/IdeasApi.md#productsbyproductideaspost) | **POST** /products/{product_id}/ideas | Create an idea
*IdeasPortalUserSubscriptionsApi* | [**ideaPortalsByIdeaPortalPortalUsersByPortalUserPortalUserSubscriptionsGet**](docs/IdeasPortalUserSubscriptionsApi.md#ideaportalsbyideaportalportalusersbyportaluserportalusersubscriptionsget) | **GET** /idea_portals/{idea_portal_id}/portal_users/{portal_user_id}/portal_user_subscriptions | List a portal user\&#39;s preferences for the portal summary email
*IdeasPortalUserSubscriptionsApi* | [**ideaPortalsByIdeaPortalPortalUsersByPortalUserPortalUserSubscriptionsPost**](docs/IdeasPortalUserSubscriptionsApi.md#ideaportalsbyideaportalportalusersbyportaluserportalusersubscriptionspost) | **POST** /idea_portals/{idea_portal_id}/portal_users/{portal_user_id}/portal_user_subscriptions | Set a portal user\&#39;s preferences to specific categories
*IdeasPortalUserSubscriptionsApi* | [**ideaPortalsByIdeaPortalPortalUsersByPortalUserPortalUserSubscriptionsSubscribeToAllPost**](docs/IdeasPortalUserSubscriptionsApi.md#ideaportalsbyideaportalportalusersbyportaluserportalusersubscriptionssubscribetoallpost) | **POST** /idea_portals/{idea_portal_id}/portal_users/{portal_user_id}/portal_user_subscriptions/subscribe_to_all | Subscribe a portal user to updates from all projects and categories
*IdeasPortalUsersApi* | [**ideaPortalsByIdeaPortalPortalUsersByIdDelete**](docs/IdeasPortalUsersApi.md#ideaportalsbyideaportalportalusersbyiddelete) | **DELETE** /idea_portals/{idea_portal_id}/portal_users/{id} | Delete a portal user
*IdeasPortalUsersApi* | [**ideaPortalsByIdeaPortalPortalUsersByIdGet**](docs/IdeasPortalUsersApi.md#ideaportalsbyideaportalportalusersbyidget) | **GET** /idea_portals/{idea_portal_id}/portal_users/{id} | Get a specific portal user
*IdeasPortalUsersApi* | [**ideaPortalsByIdeaPortalPortalUsersByIdPut**](docs/IdeasPortalUsersApi.md#ideaportalsbyideaportalportalusersbyidput) | **PUT** /idea_portals/{idea_portal_id}/portal_users/{id} | Unsubscribe portal user from all communications
*IdeasPortalUsersApi* | [**ideaPortalsByIdeaPortalPortalUsersGet**](docs/IdeasPortalUsersApi.md#ideaportalsbyideaportalportalusersget) | **GET** /idea_portals/{idea_portal_id}/portal_users | List portal users for a specific idea user
*IdeasPortalUsersApi* | [**ideaPortalsByIdeaPortalPortalUsersPost**](docs/IdeasPortalUsersApi.md#ideaportalsbyideaportalportaluserspost) | **POST** /idea_portals/{idea_portal_id}/portal_users | Create a portal user
*IdeasPortalUsersApi* | [**portalUsersByIdGet**](docs/IdeasPortalUsersApi.md#portalusersbyidget) | **GET** /portal_users/{id} | Get a specific portal user in the account
*IdeasPortalUsersApi* | [**portalUsersGet**](docs/IdeasPortalUsersApi.md#portalusersget) | **GET** /portal_users | List all portal users in the account
*IdentityProvidersApi* | [**identityProvidersByIdGet**](docs/IdentityProvidersApi.md#identityprovidersbyidget) | **GET** /identity_providers/{id} | Get a specific identity provider
*IdentityProvidersApi* | [**identityProvidersGet**](docs/IdentityProvidersApi.md#identityprovidersget) | **GET** /identity_providers | List active identity providers that can be used for SSO
*InitiativesApi* | [**goalsByGoalInitiativesGet**](docs/InitiativesApi.md#goalsbygoalinitiativesget) | **GET** /goals/{goal_id}/initiatives | List initiatives associated with a goal
*InitiativesApi* | [**initiativesByIdGet**](docs/InitiativesApi.md#initiativesbyidget) | **GET** /initiatives/{id} | Get a specific initiative
*InitiativesApi* | [**initiativesByIdPut**](docs/InitiativesApi.md#initiativesbyidput) | **PUT** /initiatives/{id} | Update a initiative
*InitiativesApi* | [**initiativesGet**](docs/InitiativesApi.md#initiativesget) | **GET** /initiatives | List initiatives
*InitiativesApi* | [**productsByProductInitiativesByIdDelete**](docs/InitiativesApi.md#productsbyproductinitiativesbyiddelete) | **DELETE** /products/{product_id}/initiatives/{id} | Delete an initiative
*InitiativesApi* | [**productsByProductInitiativesByIdPut**](docs/InitiativesApi.md#productsbyproductinitiativesbyidput) | **PUT** /products/{product_id}/initiatives/{id} | Update an initiative
*InitiativesApi* | [**productsByProductInitiativesGet**](docs/InitiativesApi.md#productsbyproductinitiativesget) | **GET** /products/{product_id}/initiatives | List initiatives in a product
*InitiativesApi* | [**productsByProductInitiativesPost**](docs/InitiativesApi.md#productsbyproductinitiativespost) | **POST** /products/{product_id}/initiatives | Create an initiative
*IntegrationChangeJobsApi* | [**integrationChangeJobsByIdGet**](docs/IntegrationChangeJobsApi.md#integrationchangejobsbyidget) | **GET** /integration_change_jobs/{id} | Get a successfully completed job
*IntegrationChangesApi* | [**integrationChangesPost**](docs/IntegrationChangesApi.md#integrationchangespost) | **POST** /integration_changes | Send a record to an integration
*IntegrationFieldsApi* | [**epicsByEpicIntegrationsByIntegrationFieldsPost**](docs/IntegrationFieldsApi.md#epicsbyepicintegrationsbyintegrationfieldspost) | **POST** /epics/{epic_id}/integrations/{integration_id}/fields | Create an integration field for a epic by integration ID
*IntegrationFieldsApi* | [**epicsFieldsByFieldNameValueByFieldValueGet**](docs/IntegrationFieldsApi.md#epicsfieldsbyfieldnamevaluebyfieldvalueget) | **GET** /epics/fields/{field_name}/value/{field_value} | List epics with an associated integration field value
*IntegrationFieldsApi* | [**featuresByFeatureIntegrationsByIntegrationFieldsByFieldNameGet**](docs/IntegrationFieldsApi.md#featuresbyfeatureintegrationsbyintegrationfieldsbyfieldnameget) | **GET** /features/{feature_id}/integrations/{integration_id}/fields/{field_name} | Get a specific integration field value
*IntegrationFieldsApi* | [**featuresByFeatureIntegrationsByIntegrationFieldsPost**](docs/IntegrationFieldsApi.md#featuresbyfeatureintegrationsbyintegrationfieldspost) | **POST** /features/{feature_id}/integrations/{integration_id}/fields | Create an integration field for a feature by integration ID
*IntegrationFieldsApi* | [**featuresFieldsByFieldNameValueByFieldValueGet**](docs/IntegrationFieldsApi.md#featuresfieldsbyfieldnamevaluebyfieldvalueget) | **GET** /features/fields/{field_name}/value/{field_value} | List features with an associated integration field value
*IntegrationFieldsApi* | [**ideaEndorsementsByIdeaEndorsementIntegrationsByIntegrationFieldsPost**](docs/IntegrationFieldsApi.md#ideaendorsementsbyideaendorsementintegrationsbyintegrationfieldspost) | **POST** /idea_endorsements/{idea_endorsement_id}/integrations/{integration_id}/fields | Create an integration field for an idea vote
*IntegrationFieldsApi* | [**ideaEndorsementsFieldsByFieldNameValueByFieldValueGet**](docs/IntegrationFieldsApi.md#ideaendorsementsfieldsbyfieldnamevaluebyfieldvalueget) | **GET** /idea_endorsements/fields/{field_name}/value/{field_value} | List idea votes with an associated integration field value
*IntegrationFieldsApi* | [**ideaUsersByIdeaUserIntegrationsByIntegrationFieldsPost**](docs/IntegrationFieldsApi.md#ideausersbyideauserintegrationsbyintegrationfieldspost) | **POST** /idea_users/{idea_user_id}/integrations/{integration_id}/fields | Create an integration field for an idea user
*IntegrationFieldsApi* | [**ideasByIdeaIntegrationsByIntegrationFieldsPost**](docs/IntegrationFieldsApi.md#ideasbyideaintegrationsbyintegrationfieldspost) | **POST** /ideas/{idea_id}/integrations/{integration_id}/fields | Create an integration field for an idea by integration ID
*IntegrationFieldsApi* | [**ideasFieldsByFieldNameValueByFieldValueGet**](docs/IntegrationFieldsApi.md#ideasfieldsbyfieldnamevaluebyfieldvalueget) | **GET** /ideas/fields/{field_name}/value/{field_value} | List ideas with an associated integration field value
*IntegrationFieldsApi* | [**initiativesFieldsByFieldNameValueByFieldValueGet**](docs/IntegrationFieldsApi.md#initiativesfieldsbyfieldnamevaluebyfieldvalueget) | **GET** /initiatives/fields/{field_name}/value/{field_value} | List initiatives with an associated integration field value
*IntegrationFieldsApi* | [**integrationFieldsByIdDelete**](docs/IntegrationFieldsApi.md#integrationfieldsbyiddelete) | **DELETE** /integration_fields/{id} | Delete an integration field
*IntegrationFieldsApi* | [**integrationsByIntegrationFieldsByFieldNameValueByFieldValueGet**](docs/IntegrationFieldsApi.md#integrationsbyintegrationfieldsbyfieldnamevaluebyfieldvalueget) | **GET** /integrations/{integration_id}/fields/{field_name}/value/{field_value} | List records with an associated integration field value
*IntegrationFieldsApi* | [**releasesFieldsByFieldNameValueByFieldValueGet**](docs/IntegrationFieldsApi.md#releasesfieldsbyfieldnamevaluebyfieldvalueget) | **GET** /releases/fields/{field_name}/value/{field_value} | List releases with an associated integration field value
*IntegrationFieldsApi* | [**requirementsFieldsByFieldNameValueByFieldValueGet**](docs/IntegrationFieldsApi.md#requirementsfieldsbyfieldnamevaluebyfieldvalueget) | **GET** /requirements/fields/{field_name}/value/{field_value} | List requirements with an associated integration field value
*IntegrationsApi* | [**integrationsGet**](docs/IntegrationsApi.md#integrationsget) | **GET** /integrations | List integrations for an account
*IntegrationsApi* | [**integrationsPost**](docs/IntegrationsApi.md#integrationspost) | **POST** /integrations | Create an integration for an account
*IntegrationsApi* | [**productsByProductIntegrationsByIntegrationGet**](docs/IntegrationsApi.md#productsbyproductintegrationsbyintegrationget) | **GET** /products/{product_id}/integrations/{integration_id} | Get a specific integration
*IntegrationsApi* | [**productsByProductIntegrationsByIntegrationPut**](docs/IntegrationsApi.md#productsbyproductintegrationsbyintegrationput) | **PUT** /products/{product_id}/integrations/{integration_id} | Enable integration
*IntegrationsApi* | [**productsByProductIntegrationsGet**](docs/IntegrationsApi.md#productsbyproductintegrationsget) | **GET** /products/{product_id}/integrations | List integrations for a product
*IntegrationsApi* | [**productsByProductIntegrationsPost**](docs/IntegrationsApi.md#productsbyproductintegrationspost) | **POST** /products/{product_id}/integrations | Create an integration based on a template for a product
*KeyResultsApi* | [**goalsByGoalKeyResultsGet**](docs/KeyResultsApi.md#goalsbygoalkeyresultsget) | **GET** /goals/{goal_id}/key_results | List key results for a goal
*KeyResultsApi* | [**goalsByGoalKeyResultsPost**](docs/KeyResultsApi.md#goalsbygoalkeyresultspost) | **POST** /goals/{goal_id}/key_results | Create a key result
*KeyResultsApi* | [**keyResultsByIdDelete**](docs/KeyResultsApi.md#keyresultsbyiddelete) | **DELETE** /key_results/{id} | Delete a key result
*KeyResultsApi* | [**keyResultsByIdGet**](docs/KeyResultsApi.md#keyresultsbyidget) | **GET** /key_results/{id} | Get a specific key result
*KeyResultsApi* | [**keyResultsByIdPut**](docs/KeyResultsApi.md#keyresultsbyidput) | **PUT** /key_results/{id} | Update a key result
*KnowledgeBasePagesApi* | [**knowledgeBasesByKnowledgeBasePagesByIdGet**](docs/KnowledgeBasePagesApi.md#knowledgebasesbyknowledgebasepagesbyidget) | **GET** /knowledge_bases/{knowledge_base_id}/pages/{id} | Get a specific published document
*KnowledgeBasePagesApi* | [**knowledgeBasesByKnowledgeBasePagesGet**](docs/KnowledgeBasePagesApi.md#knowledgebasesbyknowledgebasepagesget) | **GET** /knowledge_bases/{knowledge_base_id}/pages | List published documents for a knowledge base
*KnowledgeBasesApi* | [**knowledgeBasesByIdGet**](docs/KnowledgeBasesApi.md#knowledgebasesbyidget) | **GET** /knowledge_bases/{id} | Get a specific knowledge base
*MeApi* | [**meAssignedGet**](docs/MeApi.md#meassignedget) | **GET** /me/assigned | Handle invalid record type filter
*MeApi* | [**meGet**](docs/MeApi.md#meget) | **GET** /me | Get the current user profile
*MeApi* | [**meTasksGet**](docs/MeApi.md#metasksget) | **GET** /me/tasks | List pending tasks assigned to the current user
*NotesApi* | [**pagesByIdDelete**](docs/NotesApi.md#pagesbyiddelete) | **DELETE** /pages/{id} | Delete a note
*NotesApi* | [**pagesByIdGet**](docs/NotesApi.md#pagesbyidget) | **GET** /pages/{id} | Get a specific note
*NotesApi* | [**pagesByIdPublishPost**](docs/NotesApi.md#pagesbyidpublishpost) | **POST** /pages/{id}/publish | Publish a note to knowledge bases
*NotesApi* | [**pagesByIdPut**](docs/NotesApi.md#pagesbyidput) | **PUT** /pages/{id} | Update a note
*NotesApi* | [**pagesByIdUnpublishPost**](docs/NotesApi.md#pagesbyidunpublishpost) | **POST** /pages/{id}/unpublish | Unpublish a note from knowledge bases
*NotesApi* | [**productsByProductPagesGet**](docs/NotesApi.md#productsbyproductpagesget) | **GET** /products/{product_id}/pages | List notes for a product
*NotesApi* | [**productsByProductPagesPost**](docs/NotesApi.md#productsbyproductpagespost) | **POST** /products/{product_id}/pages | Create a note
*PaidSeatGroupsApi* | [**paidSeatGroupsByIdModifyUserPost**](docs/PaidSeatGroupsApi.md#paidseatgroupsbyidmodifyuserpost) | **POST** /paid_seat_groups/{id}/modify_user | Adds the user to the paid seat group
*PaidSeatGroupsApi* | [**paidSeatGroupsByIdPut**](docs/PaidSeatGroupsApi.md#paidseatgroupsbyidput) | **PUT** /paid_seat_groups/{id} | Updates the paid seat group
*PaidSeatGroupsApi* | [**paidSeatGroupsGet**](docs/PaidSeatGroupsApi.md#paidseatgroupsget) | **GET** /paid_seat_groups | List the administered paid seat groups
*PersonasApi* | [**personasByIdGet**](docs/PersonasApi.md#personasbyidget) | **GET** /personas/{id} | Get a specific persona
*PersonasApi* | [**productsByProductPersonasByIdDelete**](docs/PersonasApi.md#productsbyproductpersonasbyiddelete) | **DELETE** /products/{product_id}/personas/{id} | Delete a persona
*PersonasApi* | [**productsByProductPersonasByIdPut**](docs/PersonasApi.md#productsbyproductpersonasbyidput) | **PUT** /products/{product_id}/personas/{id} | Update a persona
*PersonasApi* | [**productsByProductPersonasGet**](docs/PersonasApi.md#productsbyproductpersonasget) | **GET** /products/{product_id}/personas | List personas in a product
*PersonasApi* | [**productsByProductPersonasPost**](docs/PersonasApi.md#productsbyproductpersonaspost) | **POST** /products/{product_id}/personas | Create a persona
*ProductsApi* | [**productsByIdGet**](docs/ProductsApi.md#productsbyidget) | **GET** /products/{id} | Get a product with its applied workspace template
*ProductsApi* | [**productsByIdPut**](docs/ProductsApi.md#productsbyidput) | **PUT** /products/{id} | Update a product
*ProductsApi* | [**productsGet**](docs/ProductsApi.md#productsget) | **GET** /products | List products (including Aha! Develop teams in the account)
*ProductsApi* | [**productsPost**](docs/ProductsApi.md#productspost) | **POST** /products | Create a product
*RecordLinksApi* | [**byRecordTypeByIdRecordLinksPost**](docs/RecordLinksApi.md#byrecordtypebyidrecordlinkspost) | **POST** /{record_type}/{id}/record_links | Create a record link for a epic
*RecordLinksApi* | [**featuresByIdRecordLinksGet**](docs/RecordLinksApi.md#featuresbyidrecordlinksget) | **GET** /features/{id}/record_links | List record links for a feature
*RecordLinksApi* | [**recordLinksByIdDelete**](docs/RecordLinksApi.md#recordlinksbyiddelete) | **DELETE** /record_links/{id} | Delete a record link
*RecordLinksApi* | [**recordLinksByIdGet**](docs/RecordLinksApi.md#recordlinksbyidget) | **GET** /record_links/{id} | Get a specific record link
*ReleasePhasesApi* | [**releasePhasesByIdDelete**](docs/ReleasePhasesApi.md#releasephasesbyiddelete) | **DELETE** /release_phases/{id} | Delete a release phase
*ReleasePhasesApi* | [**releasePhasesByIdGet**](docs/ReleasePhasesApi.md#releasephasesbyidget) | **GET** /release_phases/{id} | Get a specific release phase
*ReleasePhasesApi* | [**releasePhasesByIdPut**](docs/ReleasePhasesApi.md#releasephasesbyidput) | **PUT** /release_phases/{id} | Update a release phase
*ReleasePhasesApi* | [**releasePhasesGet**](docs/ReleasePhasesApi.md#releasephasesget) | **GET** /release_phases | List release phases in the account
*ReleasePhasesApi* | [**releasePhasesPost**](docs/ReleasePhasesApi.md#releasephasespost) | **POST** /release_phases | Create a release milestone
*ReleasePhasesApi* | [**releasesByIdReleasePhasesGet**](docs/ReleasePhasesApi.md#releasesbyidreleasephasesget) | **GET** /releases/{id}/release_phases | List release phases for a release
*ReleasesApi* | [**goalsByGoalReleasesGet**](docs/ReleasesApi.md#goalsbygoalreleasesget) | **GET** /goals/{goal_id}/releases | List releases associated with a goal
*ReleasesApi* | [**initiativesByInitiativeReleasesGet**](docs/ReleasesApi.md#initiativesbyinitiativereleasesget) | **GET** /initiatives/{initiative_id}/releases | List releases associated with an initiative
*ReleasesApi* | [**productsByProductReleasesByIdDelete**](docs/ReleasesApi.md#productsbyproductreleasesbyiddelete) | **DELETE** /products/{product_id}/releases/{id} | Delete a release
*ReleasesApi* | [**productsByProductReleasesByIdPut**](docs/ReleasesApi.md#productsbyproductreleasesbyidput) | **PUT** /products/{product_id}/releases/{id} | Add a release to a roll up release
*ReleasesApi* | [**productsByProductReleasesGet**](docs/ReleasesApi.md#productsbyproductreleasesget) | **GET** /products/{product_id}/releases | List releases in a product
*ReleasesApi* | [**productsByProductReleasesPost**](docs/ReleasesApi.md#productsbyproductreleasespost) | **POST** /products/{product_id}/releases | Create a parking lot release
*ReleasesApi* | [**releasesByIdDuplicatePost**](docs/ReleasesApi.md#releasesbyidduplicatepost) | **POST** /releases/{id}/duplicate | Duplicate a release
*ReleasesApi* | [**releasesByIdGet**](docs/ReleasesApi.md#releasesbyidget) | **GET** /releases/{id} | Get a specific release
*ReleasesApi* | [**releasesByIdPut**](docs/ReleasesApi.md#releasesbyidput) | **PUT** /releases/{id} | Update a release
*ReleasesApi* | [**releasesByReleaseReleasesGet**](docs/ReleasesApi.md#releasesbyreleasereleasesget) | **GET** /releases/{release_id}/releases | List releases under a roll-up release
*ReleasesApi* | [**rollUpReleasesByReleaseReleasesGet**](docs/ReleasesApi.md#rollupreleasesbyreleasereleasesget) | **GET** /roll_up_releases/{release_id}/releases | List releases under a roll-up release
*RequirementsApi* | [**featuresByFeatureRequirementsGet**](docs/RequirementsApi.md#featuresbyfeaturerequirementsget) | **GET** /features/{feature_id}/requirements | Get requirements updated after a certain time
*RequirementsApi* | [**featuresByFeatureRequirementsPost**](docs/RequirementsApi.md#featuresbyfeaturerequirementspost) | **POST** /features/{feature_id}/requirements | Create a requirement
*RequirementsApi* | [**requirementsByIdConvertToFeaturePost**](docs/RequirementsApi.md#requirementsbyidconverttofeaturepost) | **POST** /requirements/{id}/convert_to_feature | Convert a requirement to a feature
*RequirementsApi* | [**requirementsByIdDelete**](docs/RequirementsApi.md#requirementsbyiddelete) | **DELETE** /requirements/{id} | Delete a requirement
*RequirementsApi* | [**requirementsByIdGet**](docs/RequirementsApi.md#requirementsbyidget) | **GET** /requirements/{id} | Get a specific requirement
*RequirementsApi* | [**requirementsByIdPut**](docs/RequirementsApi.md#requirementsbyidput) | **PUT** /requirements/{id} | Update a requirement
*RollUpReleasesApi* | [**productsByProductRollUpReleasesGet**](docs/RollUpReleasesApi.md#productsbyproductrollupreleasesget) | **GET** /products/{product_id}/roll_up_releases | List roll up releases in a product
*RollUpReleasesApi* | [**productsByProductRollUpReleasesPost**](docs/RollUpReleasesApi.md#productsbyproductrollupreleasespost) | **POST** /products/{product_id}/roll_up_releases | Create a project with a roll up release
*RollUpReleasesApi* | [**rollUpReleasesByIdGet**](docs/RollUpReleasesApi.md#rollupreleasesbyidget) | **GET** /roll_up_releases/{id} | Get a specific roll up release
*RollUpReleasesApi* | [**rollUpReleasesByIdPut**](docs/RollUpReleasesApi.md#rollupreleasesbyidput) | **PUT** /roll_up_releases/{id} | Add a project to a roll up release
*SchedulableChangesApi* | [**schedulableChangesByIdDelete**](docs/SchedulableChangesApi.md#schedulablechangesbyiddelete) | **DELETE** /schedulable_changes/{id} | Delete a schedulable change
*SchedulableChangesApi* | [**schedulableChangesByIdPut**](docs/SchedulableChangesApi.md#schedulablechangesbyidput) | **PUT** /schedulable_changes/{id} | Update a schedulable change
*SchedulableChangesApi* | [**schedulableChangesBySchedulableChangeUpdateTeamMembershipsPut**](docs/SchedulableChangesApi.md#schedulablechangesbyschedulablechangeupdateteammembershipsput) | **PUT** /schedulable_changes/{schedulable_change_id}/update_team_memberships | Update a scheduled change\&#39;s team memberships
*SchedulableChangesApi* | [**schedulableChangesGet**](docs/SchedulableChangesApi.md#schedulablechangesget) | **GET** /schedulable_changes | List schedulable changes
*SchedulableChangesApi* | [**schedulableChangesPost**](docs/SchedulableChangesApi.md#schedulablechangespost) | **POST** /schedulable_changes | Create a schedulable change
*SchedulesApi* | [**schedulesGet**](docs/SchedulesApi.md#schedulesget) | **GET** /schedules | List schedules
*StrategicModelsApi* | [**strategyModelsByIdGet**](docs/StrategicModelsApi.md#strategymodelsbyidget) | **GET** /strategy_models/{id} | Get a specific strategic model
*StrategicModelsApi* | [**strategyModelsGet**](docs/StrategicModelsApi.md#strategymodelsget) | **GET** /strategy_models | List strategic models
*StrategicPositioningsApi* | [**strategyPositionsByIdGet**](docs/StrategicPositioningsApi.md#strategypositionsbyidget) | **GET** /strategy_positions/{id} | Get a specific strategic positioning
*StrategicPositioningsApi* | [**strategyPositionsGet**](docs/StrategicPositioningsApi.md#strategypositionsget) | **GET** /strategy_positions | List strategic positionings
*StrategicVisionsApi* | [**strategyVisionsByIdGet**](docs/StrategicVisionsApi.md#strategyvisionsbyidget) | **GET** /strategy_visions/{id} | Get a specific strategic vision
*StrategicVisionsApi* | [**strategyVisionsGet**](docs/StrategicVisionsApi.md#strategyvisionsget) | **GET** /strategy_visions | List strategic visions
*TeamMembersApi* | [**teamMembersByIdDelete**](docs/TeamMembersApi.md#teammembersbyiddelete) | **DELETE** /team_members/{id} | Delete a virtual team member
*TeamMembersApi* | [**teamMembersGet**](docs/TeamMembersApi.md#teammembersget) | **GET** /team_members | List virtual team members
*TeamMembersApi* | [**teamMembersPost**](docs/TeamMembersApi.md#teammemberspost) | **POST** /team_members | Create a virtual user
*TeamMembershipsApi* | [**teamsByTeamTeamMembershipsByIdDelete**](docs/TeamMembershipsApi.md#teamsbyteamteammembershipsbyiddelete) | **DELETE** /teams/{team_id}/team_memberships/{id} | Remove a user from a team
*TeamMembershipsApi* | [**teamsByTeamTeamMembershipsGet**](docs/TeamMembershipsApi.md#teamsbyteamteammembershipsget) | **GET** /teams/{team_id}/team_memberships | List team memberships for a team
*TeamMembershipsApi* | [**teamsByTeamTeamMembershipsPost**](docs/TeamMembershipsApi.md#teamsbyteamteammembershipspost) | **POST** /teams/{team_id}/team_memberships | Add user to a team
*TeamsApi* | [**productsByProductTeamsGet**](docs/TeamsApi.md#productsbyproductteamsget) | **GET** /products/{product_id}/teams | List teams in a product
*TeamsApi* | [**productsByProductTeamsPost**](docs/TeamsApi.md#productsbyproductteamspost) | **POST** /products/{product_id}/teams | Create a team associated with a product
*TeamsApi* | [**teamsByIdDelete**](docs/TeamsApi.md#teamsbyiddelete) | **DELETE** /teams/{id} | Delete a team
*TeamsApi* | [**teamsByIdGet**](docs/TeamsApi.md#teamsbyidget) | **GET** /teams/{id} | Get a specific team
*TeamsApi* | [**teamsByIdPut**](docs/TeamsApi.md#teamsbyidput) | **PUT** /teams/{id} | Automatically calculate team\&#39;s member count
*TeamsApi* | [**teamsGet**](docs/TeamsApi.md#teamsget) | **GET** /teams | List teams
*TeamsApi* | [**teamsPost**](docs/TeamsApi.md#teamspost) | **POST** /teams | Create a team
*TimeTrackingEventsApi* | [**featuresByFeatureTimeTrackingEventsPost**](docs/TimeTrackingEventsApi.md#featuresbyfeaturetimetrackingeventspost) | **POST** /features/{feature_id}/time_tracking_events | Create a time tracking event for a feature with remaining estimate
*TimeTrackingEventsApi* | [**initiativesByInitiativeTimeTrackingEventsPost**](docs/TimeTrackingEventsApi.md#initiativesbyinitiativetimetrackingeventspost) | **POST** /initiatives/{initiative_id}/time_tracking_events | Create a time tracking event for an initiative
*TimeTrackingEventsApi* | [**requirementsByRequirementTimeTrackingEventsPost**](docs/TimeTrackingEventsApi.md#requirementsbyrequirementtimetrackingeventspost) | **POST** /requirements/{requirement_id}/time_tracking_events | Create a time tracking event for a requirement
*TimeTrackingEventsApi* | [**timeTrackingEventsByIdDelete**](docs/TimeTrackingEventsApi.md#timetrackingeventsbyiddelete) | **DELETE** /time_tracking_events/{id} | Delete a time tracking event
*ToDosApi* | [**epicsByEpicTasksGet**](docs/ToDosApi.md#epicsbyepictasksget) | **GET** /epics/{epic_id}/tasks | List to-dos associated with an epic
*ToDosApi* | [**featuresByFeatureTasksGet**](docs/ToDosApi.md#featuresbyfeaturetasksget) | **GET** /features/{feature_id}/tasks | List to-dos associated with a feature
*ToDosApi* | [**ideasByIdeaTasksGet**](docs/ToDosApi.md#ideasbyideatasksget) | **GET** /ideas/{idea_id}/tasks | List to-dos associated with an idea
*ToDosApi* | [**productsByProductTasksGet**](docs/ToDosApi.md#productsbyproducttasksget) | **GET** /products/{product_id}/tasks | List to-dos associated with a product
*ToDosApi* | [**releasesByReleaseTasksGet**](docs/ToDosApi.md#releasesbyreleasetasksget) | **GET** /releases/{release_id}/tasks | List to-dos associated with a release
*ToDosApi* | [**requirementsByRequirementTasksGet**](docs/ToDosApi.md#requirementsbyrequirementtasksget) | **GET** /requirements/{requirement_id}/tasks | List to-dos associated with a requirement
*ToDosApi* | [**tasksByIdDelete**](docs/ToDosApi.md#tasksbyiddelete) | **DELETE** /tasks/{id} | Delete a to-do
*ToDosApi* | [**tasksByIdGet**](docs/ToDosApi.md#tasksbyidget) | **GET** /tasks/{id} | Get a specific to-do
*ToDosApi* | [**tasksByIdPut**](docs/ToDosApi.md#tasksbyidput) | **PUT** /tasks/{id} | Update a to-do
*ToDosApi* | [**tasksGet**](docs/ToDosApi.md#tasksget) | **GET** /tasks | Get tasks updated after a certain time
*ToDosApi* | [**tasksPost**](docs/ToDosApi.md#taskspost) | **POST** /tasks | Create a task
*ToDosApi* | [**usersByUserTasksGet**](docs/ToDosApi.md#usersbyusertasksget) | **GET** /users/{user_id}/tasks | List to-dos assigned to a user
*UsersApi* | [**productsByProductUsersGet**](docs/UsersApi.md#productsbyproductusersget) | **GET** /products/{product_id}/users | List users associated with a product
*UsersApi* | [**productsByProductUsersPost**](docs/UsersApi.md#productsbyproductuserspost) | **POST** /products/{product_id}/users | Create a contributor user
*UsersApi* | [**usersByIdGet**](docs/UsersApi.md#usersbyidget) | **GET** /users/{id} | Get a specific user
*UsersApi* | [**usersByIdProductRolesByProductDelete**](docs/UsersApi.md#usersbyidproductrolesbyproductdelete) | **DELETE** /users/{id}/product_roles/{product_id} | Delete a user\&#39;s product role
*UsersApi* | [**usersByIdProductRolesGet**](docs/UsersApi.md#usersbyidproductrolesget) | **GET** /users/{id}/product_roles | List a user\&#39;s product roles
*UsersApi* | [**usersByIdProductRolesPost**](docs/UsersApi.md#usersbyidproductrolespost) | **POST** /users/{id}/product_roles | Update a user\&#39;s product roles
*UsersApi* | [**usersByIdPut**](docs/UsersApi.md#usersbyidput) | **PUT** /users/{id} | Update a user
*UsersApi* | [**usersByIdUserRolesByProductDelete**](docs/UsersApi.md#usersbyiduserrolesbyproductdelete) | **DELETE** /users/{id}/user_roles/{product_id} | Delete a user\&#39;s custom role
*UsersApi* | [**usersByIdUserRolesGet**](docs/UsersApi.md#usersbyiduserrolesget) | **GET** /users/{id}/user_roles | List a user\&#39;s custom roles
*UsersApi* | [**usersByIdUserRolesPost**](docs/UsersApi.md#usersbyiduserrolespost) | **POST** /users/{id}/user_roles | Update a user\&#39;s custom roles
*UsersApi* | [**usersGet**](docs/UsersApi.md#usersget) | **GET** /users | List users
*WebhooksApi* | [**webhooksByTokenGet**](docs/WebhooksApi.md#webhooksbytokenget) | **GET** /webhooks/{token} | Validate webhook endpoint
*WebhooksApi* | [**webhooksByTokenPost**](docs/WebhooksApi.md#webhooksbytokenpost) | **POST** /webhooks/{token} | Handle Asana resthook confirmation
*WorkflowStatusTimesApi* | [**epicsByEpicWorkflowStatusTimesGet**](docs/WorkflowStatusTimesApi.md#epicsbyepicworkflowstatustimesget) | **GET** /epics/{epic_id}/workflow_status_times | List workflow status times for an epic
*WorkflowStatusTimesApi* | [**epicsByEpicWorkflowStatusTimesPost**](docs/WorkflowStatusTimesApi.md#epicsbyepicworkflowstatustimespost) | **POST** /epics/{epic_id}/workflow_status_times | Create a workflow status time for an epic
*WorkflowStatusTimesApi* | [**featuresByFeatureWorkflowStatusTimesGet**](docs/WorkflowStatusTimesApi.md#featuresbyfeatureworkflowstatustimesget) | **GET** /features/{feature_id}/workflow_status_times | List workflow status times for a feature
*WorkflowStatusTimesApi* | [**featuresByFeatureWorkflowStatusTimesPost**](docs/WorkflowStatusTimesApi.md#featuresbyfeatureworkflowstatustimespost) | **POST** /features/{feature_id}/workflow_status_times | Create a workflow status time for a feature
*WorkflowStatusTimesApi* | [**ideasByIdeaWorkflowStatusTimesGet**](docs/WorkflowStatusTimesApi.md#ideasbyideaworkflowstatustimesget) | **GET** /ideas/{idea_id}/workflow_status_times | List workflow status times for an idea
*WorkflowStatusTimesApi* | [**ideasByIdeaWorkflowStatusTimesPost**](docs/WorkflowStatusTimesApi.md#ideasbyideaworkflowstatustimespost) | **POST** /ideas/{idea_id}/workflow_status_times | Create a workflow status time for an idea
*WorkflowStatusTimesApi* | [**initiativesByInitiativeWorkflowStatusTimesGet**](docs/WorkflowStatusTimesApi.md#initiativesbyinitiativeworkflowstatustimesget) | **GET** /initiatives/{initiative_id}/workflow_status_times | List workflow status times for an initiative
*WorkflowStatusTimesApi* | [**initiativesByInitiativeWorkflowStatusTimesPost**](docs/WorkflowStatusTimesApi.md#initiativesbyinitiativeworkflowstatustimespost) | **POST** /initiatives/{initiative_id}/workflow_status_times | Create a workflow status time for an initiative
*WorkflowStatusTimesApi* | [**keyResultsByKeyResultWorkflowStatusTimesGet**](docs/WorkflowStatusTimesApi.md#keyresultsbykeyresultworkflowstatustimesget) | **GET** /key_results/{key_result_id}/workflow_status_times | List workflow status times for a key result
*WorkflowStatusTimesApi* | [**keyResultsByKeyResultWorkflowStatusTimesPost**](docs/WorkflowStatusTimesApi.md#keyresultsbykeyresultworkflowstatustimespost) | **POST** /key_results/{key_result_id}/workflow_status_times | Create a workflow status time for a key result
*WorkflowStatusTimesApi* | [**masterFeaturesByMasterFeatureWorkflowStatusTimesGet**](docs/WorkflowStatusTimesApi.md#masterfeaturesbymasterfeatureworkflowstatustimesget) | **GET** /master_features/{master_feature_id}/workflow_status_times | List workflow status times for a master feature
*WorkflowStatusTimesApi* | [**masterFeaturesByMasterFeatureWorkflowStatusTimesPost**](docs/WorkflowStatusTimesApi.md#masterfeaturesbymasterfeatureworkflowstatustimespost) | **POST** /master_features/{master_feature_id}/workflow_status_times | Create a workflow status time for a master feature
*WorkflowStatusTimesApi* | [**pagesByPageWorkflowStatusTimesGet**](docs/WorkflowStatusTimesApi.md#pagesbypageworkflowstatustimesget) | **GET** /pages/{page_id}/workflow_status_times | List workflow status times for a page
*WorkflowStatusTimesApi* | [**pagesByPageWorkflowStatusTimesPost**](docs/WorkflowStatusTimesApi.md#pagesbypageworkflowstatustimespost) | **POST** /pages/{page_id}/workflow_status_times | Create a workflow status time for a page
*WorkflowStatusTimesApi* | [**releasesByReleaseWorkflowStatusTimesGet**](docs/WorkflowStatusTimesApi.md#releasesbyreleaseworkflowstatustimesget) | **GET** /releases/{release_id}/workflow_status_times | List workflow status times for a release
*WorkflowStatusTimesApi* | [**releasesByReleaseWorkflowStatusTimesPost**](docs/WorkflowStatusTimesApi.md#releasesbyreleaseworkflowstatustimespost) | **POST** /releases/{release_id}/workflow_status_times | Create a workflow status time for a release
*WorkflowStatusTimesApi* | [**requirementsByRequirementWorkflowStatusTimesGet**](docs/WorkflowStatusTimesApi.md#requirementsbyrequirementworkflowstatustimesget) | **GET** /requirements/{requirement_id}/workflow_status_times | List workflow status times for a requirement
*WorkflowStatusTimesApi* | [**requirementsByRequirementWorkflowStatusTimesPost**](docs/WorkflowStatusTimesApi.md#requirementsbyrequirementworkflowstatustimespost) | **POST** /requirements/{requirement_id}/workflow_status_times | Create a workflow status time for a requirement
*WorkflowStatusTimesApi* | [**workflowStatusTimesByIdDelete**](docs/WorkflowStatusTimesApi.md#workflowstatustimesbyiddelete) | **DELETE** /workflow_status_times/{id} | Delete a workflow status time
*WorkflowStatusTimesApi* | [**workflowStatusTimesByIdGet**](docs/WorkflowStatusTimesApi.md#workflowstatustimesbyidget) | **GET** /workflow_status_times/{id} | Get a single workflow status time
*WorkflowStatusTimesApi* | [**workflowStatusTimesByIdPut**](docs/WorkflowStatusTimesApi.md#workflowstatustimesbyidput) | **PUT** /workflow_status_times/{id} | Update a workflow status time
*WorkflowsApi* | [**productsByProductWorkflowsGet**](docs/WorkflowsApi.md#productsbyproductworkflowsget) | **GET** /products/{product_id}/workflows | List workflows
*WorkflowsApi* | [**workflowsByIdGet**](docs/WorkflowsApi.md#workflowsbyidget) | **GET** /workflows/{id} | Get a specific workflow


### Documentation For Models

 - [AccountbackupsGetResponse](docs/AccountbackupsGetResponse.md)
 - [AccountbackupsGetResponseAccountBackup](docs/AccountbackupsGetResponseAccountBackup.md)
 - [AccountbackupsPostResponse](docs/AccountbackupsPostResponse.md)
 - [AccountbackupsPostResponseAccountBackup](docs/AccountbackupsPostResponseAccountBackup.md)
 - [AssistantusageGet422Response](docs/AssistantusageGet422Response.md)
 - [AssistantusageGetResponse](docs/AssistantusageGetResponse.md)
 - [AssistantusageGetResponsePagination](docs/AssistantusageGetResponsePagination.md)
 - [AssistantusageGetResponseUsersInner](docs/AssistantusageGetResponseUsersInner.md)
 - [AttachmentsPost412Response](docs/AttachmentsPost412Response.md)
 - [AttachmentsPostResponse](docs/AttachmentsPostResponse.md)
 - [AttachmentsPostResponseAttachment](docs/AttachmentsPostResponseAttachment.md)
 - [AuditsGetResponse](docs/AuditsGetResponse.md)
 - [AuditsGetResponsePagination](docs/AuditsGetResponsePagination.md)
 - [CapacityestimatevaluesDeleteResponse](docs/CapacityestimatevaluesDeleteResponse.md)
 - [CapacityestimatevaluesDeleteResponseDestroyedInner](docs/CapacityestimatevaluesDeleteResponseDestroyedInner.md)
 - [CapacityestimatevaluesDeleteResponseUpdatedInner](docs/CapacityestimatevaluesDeleteResponseUpdatedInner.md)
 - [CapacityestimatevaluesGetResponse](docs/CapacityestimatevaluesGetResponse.md)
 - [CapacityestimatevaluesGetResponseEstimateValuesInner](docs/CapacityestimatevaluesGetResponseEstimateValuesInner.md)
 - [CapacityestimatevaluesGetResponsePagination](docs/CapacityestimatevaluesGetResponsePagination.md)
 - [CapacityestimatevaluesPostRequest](docs/CapacityestimatevaluesPostRequest.md)
 - [CapacityestimatevaluesPostRequestEstimateValue](docs/CapacityestimatevaluesPostRequestEstimateValue.md)
 - [CapacityestimatevaluesPostResponse](docs/CapacityestimatevaluesPostResponse.md)
 - [CapacityestimatevaluesPostResponseUpdatedInner](docs/CapacityestimatevaluesPostResponseUpdatedInner.md)
 - [CapacityestimatevaluesPutResponse](docs/CapacityestimatevaluesPutResponse.md)
 - [CapacityestimatevaluesPutResponseUpdatedInner](docs/CapacityestimatevaluesPutResponseUpdatedInner.md)
 - [CapacityinvestmentsGetResponse](docs/CapacityinvestmentsGetResponse.md)
 - [CapacityinvestmentsGetResponseCapacityInvestmentsInner](docs/CapacityinvestmentsGetResponseCapacityInvestmentsInner.md)
 - [CapacityinvestmentsPostRequest](docs/CapacityinvestmentsPostRequest.md)
 - [CapacityinvestmentsPostRequestCapacityInvestment](docs/CapacityinvestmentsPostRequestCapacityInvestment.md)
 - [CapacityinvestmentsPostResponse](docs/CapacityinvestmentsPostResponse.md)
 - [CapacityinvestmentsPostResponseCapacityInvestment](docs/CapacityinvestmentsPostResponseCapacityInvestment.md)
 - [CapacityinvestmentsPostResponseCapacityInvestmentEstimateValuesInner](docs/CapacityinvestmentsPostResponseCapacityInvestmentEstimateValuesInner.md)
 - [CapacityinvestmentsPostResponseCapacityInvestmentInitiative](docs/CapacityinvestmentsPostResponseCapacityInvestmentInitiative.md)
 - [CapacityinvestmentsPutResponse](docs/CapacityinvestmentsPutResponse.md)
 - [CapacityinvestmentsPutResponseCapacityInvestment](docs/CapacityinvestmentsPutResponseCapacityInvestment.md)
 - [CapacityinvestmentsPutResponseCapacityInvestmentCustomFieldsInner](docs/CapacityinvestmentsPutResponseCapacityInvestmentCustomFieldsInner.md)
 - [CapacityinvestmentsPutResponseCapacityInvestmentInitiative](docs/CapacityinvestmentsPutResponseCapacityInvestmentInitiative.md)
 - [CapacityscenariosGetResponse](docs/CapacityscenariosGetResponse.md)
 - [CapacityscenariosGetResponseCapacityScenario](docs/CapacityscenariosGetResponseCapacityScenario.md)
 - [CommentsGetResponse](docs/CommentsGetResponse.md)
 - [CommentsGetResponseCommentsInner](docs/CommentsGetResponseCommentsInner.md)
 - [CommentsGetResponseCommentsInnerCommentable](docs/CommentsGetResponseCommentsInnerCommentable.md)
 - [CommentsGetResponseCommentsInnerUser](docs/CommentsGetResponseCommentsInnerUser.md)
 - [CommentsGetResponsePagination](docs/CommentsGetResponsePagination.md)
 - [CommentsPostRequest](docs/CommentsPostRequest.md)
 - [CommentsPostRequestComment](docs/CommentsPostRequestComment.md)
 - [CommentsPostResponse](docs/CommentsPostResponse.md)
 - [CommentsPostResponseComment](docs/CommentsPostResponseComment.md)
 - [CommentsPostResponseCommentCommentable](docs/CommentsPostResponseCommentCommentable.md)
 - [CommentsPostResponseCommentUser](docs/CommentsPostResponseCommentUser.md)
 - [CommentsPutResponse](docs/CommentsPutResponse.md)
 - [CommentsPutResponseComment](docs/CommentsPutResponseComment.md)
 - [CommentsPutResponseCommentAttachmentsInner](docs/CommentsPutResponseCommentAttachmentsInner.md)
 - [CommentsPutResponseCommentCommentable](docs/CommentsPutResponseCommentCommentable.md)
 - [CompetitorsGetResponse](docs/CompetitorsGetResponse.md)
 - [CompetitorsGetResponseCompetitorsInner](docs/CompetitorsGetResponseCompetitorsInner.md)
 - [CompetitorsGetResponsePagination](docs/CompetitorsGetResponsePagination.md)
 - [CompetitorsPostRequest](docs/CompetitorsPostRequest.md)
 - [CompetitorsPostRequestCompetitor](docs/CompetitorsPostRequestCompetitor.md)
 - [CompetitorsPostResponse](docs/CompetitorsPostResponse.md)
 - [CompetitorsPostResponseCompetitor](docs/CompetitorsPostResponseCompetitor.md)
 - [CompetitorsPutResponse](docs/CompetitorsPutResponse.md)
 - [CompetitorsPutResponseCompetitor](docs/CompetitorsPutResponseCompetitor.md)
 - [CompetitorsPutResponseCompetitorCustomFieldsInner](docs/CompetitorsPutResponseCompetitorCustomFieldsInner.md)
 - [CreativebriefsGetResponse](docs/CreativebriefsGetResponse.md)
 - [CreativebriefsGetResponseCreativeBriefsInner](docs/CreativebriefsGetResponseCreativeBriefsInner.md)
 - [CreativebriefsPostRequest](docs/CreativebriefsPostRequest.md)
 - [CreativebriefsPostRequestCreativeBrief](docs/CreativebriefsPostRequestCreativeBrief.md)
 - [CreativebriefsPostResponse](docs/CreativebriefsPostResponse.md)
 - [CreativebriefsPostResponseCreativeBrief](docs/CreativebriefsPostResponseCreativeBrief.md)
 - [CreativebriefsPutResponse](docs/CreativebriefsPutResponse.md)
 - [CreativebriefsPutResponseCreativeBrief](docs/CreativebriefsPutResponseCreativeBrief.md)
 - [CustomLayoutsGetResponse](docs/CustomLayoutsGetResponse.md)
 - [CustomLayoutsGetResponseCustomFieldDefinitionsInner](docs/CustomLayoutsGetResponseCustomFieldDefinitionsInner.md)
 - [CustomfieldoptionsDeleteResponse](docs/CustomfieldoptionsDeleteResponse.md)
 - [CustomfieldoptionsGetResponse](docs/CustomfieldoptionsGetResponse.md)
 - [CustomfieldoptionsGetResponseCustomFieldOptionsInner](docs/CustomfieldoptionsGetResponseCustomFieldOptionsInner.md)
 - [CustomfieldoptionsPostRequest](docs/CustomfieldoptionsPostRequest.md)
 - [CustomfieldoptionsPostRequestCustomFieldOption](docs/CustomfieldoptionsPostRequestCustomFieldOption.md)
 - [CustomfieldoptionsPostResponse](docs/CustomfieldoptionsPostResponse.md)
 - [CustomfieldoptionsPutResponse](docs/CustomfieldoptionsPutResponse.md)
 - [CustomfieldsGetResponse](docs/CustomfieldsGetResponse.md)
 - [CustomfieldsGetResponseOptionsInner](docs/CustomfieldsGetResponseOptionsInner.md)
 - [CustomfieldsGetResponseOptionsInnerMeta](docs/CustomfieldsGetResponseOptionsInnerMeta.md)
 - [CustomreportsGetResponse](docs/CustomreportsGetResponse.md)
 - [CustomreportsGetResponseColumns](docs/CustomreportsGetResponseColumns.md)
 - [CustomreportsGetResponseColumns1](docs/CustomreportsGetResponseColumns1.md)
 - [CustomreportsGetResponseColumns2](docs/CustomreportsGetResponseColumns2.md)
 - [CustomreportsGetResponseColumns3](docs/CustomreportsGetResponseColumns3.md)
 - [CustomreportsGetResponseFieldDefinitions](docs/CustomreportsGetResponseFieldDefinitions.md)
 - [CustomreportsGetResponseFieldDefinitions10](docs/CustomreportsGetResponseFieldDefinitions10.md)
 - [CustomreportsGetResponseFieldDefinitions11](docs/CustomreportsGetResponseFieldDefinitions11.md)
 - [CustomreportsGetResponseFieldDefinitions12](docs/CustomreportsGetResponseFieldDefinitions12.md)
 - [CustomreportsGetResponseFieldDefinitions7](docs/CustomreportsGetResponseFieldDefinitions7.md)
 - [CustomreportsGetResponseFieldDefinitions8](docs/CustomreportsGetResponseFieldDefinitions8.md)
 - [CustomreportsGetResponseFieldDefinitions9](docs/CustomreportsGetResponseFieldDefinitions9.md)
 - [CustomreportsGetResponseRows](docs/CustomreportsGetResponseRows.md)
 - [CustomreportsGetResponseRows4](docs/CustomreportsGetResponseRows4.md)
 - [CustomreportsGetResponseRows5](docs/CustomreportsGetResponseRows5.md)
 - [CustomreportsGetResponseRows6](docs/CustomreportsGetResponseRows6.md)
 - [CustomtablerecordlinksPostRequest](docs/CustomtablerecordlinksPostRequest.md)
 - [CustomtablerecordlinksPostRequestRequirement](docs/CustomtablerecordlinksPostRequestRequirement.md)
 - [CustomtablerecordlinksPostRequestRequirementCustomObjectLinks](docs/CustomtablerecordlinksPostRequestRequirementCustomObjectLinks.md)
 - [CustomtablerecordlinksPutResponse](docs/CustomtablerecordlinksPutResponse.md)
 - [CustomtablerecordlinksPutResponseRequirement](docs/CustomtablerecordlinksPutResponseRequirement.md)
 - [CustomtablerecordlinksPutResponseRequirementAssignedToUser](docs/CustomtablerecordlinksPutResponseRequirementAssignedToUser.md)
 - [CustomtablerecordlinksPutResponseRequirementCustomFieldsInner](docs/CustomtablerecordlinksPutResponseRequirementCustomFieldsInner.md)
 - [CustomtablerecordlinksPutResponseRequirementCustomObjectLinksInner](docs/CustomtablerecordlinksPutResponseRequirementCustomObjectLinksInner.md)
 - [CustomtablerecordlinksPutResponseRequirementDescription](docs/CustomtablerecordlinksPutResponseRequirementDescription.md)
 - [CustomtablerecordlinksPutResponseRequirementFeature](docs/CustomtablerecordlinksPutResponseRequirementFeature.md)
 - [CustomtablerecordlinksPutResponseRequirementIntegrationFieldsInner](docs/CustomtablerecordlinksPutResponseRequirementIntegrationFieldsInner.md)
 - [CustomtablerecordlinksPutResponseRequirementWorkflowStatus](docs/CustomtablerecordlinksPutResponseRequirementWorkflowStatus.md)
 - [CustomtablerecordsGetResponse](docs/CustomtablerecordsGetResponse.md)
 - [CustomtablerecordsGetResponseCustomObjectRecordsInner](docs/CustomtablerecordsGetResponseCustomObjectRecordsInner.md)
 - [CustomtablerecordsPostRequest](docs/CustomtablerecordsPostRequest.md)
 - [CustomtablerecordsPostRequestCustomObjectRecord](docs/CustomtablerecordsPostRequestCustomObjectRecord.md)
 - [CustomtablerecordsPostRequestCustomObjectRecordCustomFields](docs/CustomtablerecordsPostRequestCustomObjectRecordCustomFields.md)
 - [CustomtablerecordsPostResponse](docs/CustomtablerecordsPostResponse.md)
 - [CustomtablerecordsPostResponseCustomObjectRecord](docs/CustomtablerecordsPostResponseCustomObjectRecord.md)
 - [CustomtablerecordsPostResponseCustomObjectRecordCustomFieldsInner](docs/CustomtablerecordsPostResponseCustomObjectRecordCustomFieldsInner.md)
 - [CustomtablerecordsPutRequest](docs/CustomtablerecordsPutRequest.md)
 - [CustomtablerecordsPutRequestCustomObjectRecord](docs/CustomtablerecordsPutRequestCustomObjectRecord.md)
 - [CustomtablerecordsPutResponse](docs/CustomtablerecordsPutResponse.md)
 - [CustomtablerecordsPutResponseCustomObjectRecord](docs/CustomtablerecordsPutResponseCustomObjectRecord.md)
 - [CustomtablerecordsPutResponseCustomObjectRecordCustomFieldsInner](docs/CustomtablerecordsPutResponseCustomObjectRecordCustomFieldsInner.md)
 - [CustomtablerecordsPutResponseCustomObjectRecordLinkedRecordsInner](docs/CustomtablerecordsPutResponseCustomObjectRecordLinkedRecordsInner.md)
 - [DeletionsGetResponse](docs/DeletionsGetResponse.md)
 - [DeletionsGetResponsePagination](docs/DeletionsGetResponsePagination.md)
 - [DeletionsPostResponse](docs/DeletionsPostResponse.md)
 - [DeletionsPostResponseDeletion](docs/DeletionsPostResponseDeletion.md)
 - [DeletionsPostResponseDeletionDeletedBy](docs/DeletionsPostResponseDeletionDeletedBy.md)
 - [DeletionsPostResponseDeletionRecord](docs/DeletionsPostResponseDeletionRecord.md)
 - [DiscoverygroupsGetResponse](docs/DiscoverygroupsGetResponse.md)
 - [DiscoverygroupsGetResponseDiscoveryGroup](docs/DiscoverygroupsGetResponseDiscoveryGroup.md)
 - [DiscoverygroupsPostRequest](docs/DiscoverygroupsPostRequest.md)
 - [DiscoverygroupsPostRequestDiscoveryGroup](docs/DiscoverygroupsPostRequestDiscoveryGroup.md)
 - [DiscoverygroupsPostResponse](docs/DiscoverygroupsPostResponse.md)
 - [DiscoverygroupsPostResponseDiscoveryGroup](docs/DiscoverygroupsPostResponseDiscoveryGroup.md)
 - [DiscoverygroupsPutResponse](docs/DiscoverygroupsPutResponse.md)
 - [DiscoverygroupsPutResponseDiscoveryGroup](docs/DiscoverygroupsPutResponseDiscoveryGroup.md)
 - [EpicsGetResponse](docs/EpicsGetResponse.md)
 - [EpicsGetResponseEpicsInner](docs/EpicsGetResponseEpicsInner.md)
 - [EpicsPostRequest](docs/EpicsPostRequest.md)
 - [EpicsPostRequestEpic](docs/EpicsPostRequestEpic.md)
 - [EpicsPostResponse](docs/EpicsPostResponse.md)
 - [EpicsPostResponseEpic](docs/EpicsPostResponseEpic.md)
 - [EpicsPostResponseEpicAssignedToUser](docs/EpicsPostResponseEpicAssignedToUser.md)
 - [EpicsPostResponseEpicDescription](docs/EpicsPostResponseEpicDescription.md)
 - [EpicsPostResponseEpicProject](docs/EpicsPostResponseEpicProject.md)
 - [EpicsPostResponseEpicRelease](docs/EpicsPostResponseEpicRelease.md)
 - [EpicsPostResponseEpicReleaseOwner](docs/EpicsPostResponseEpicReleaseOwner.md)
 - [EpicsPostResponseEpicReleaseProject](docs/EpicsPostResponseEpicReleaseProject.md)
 - [EpicsPostResponseEpicWorkflowStatusTimesInner](docs/EpicsPostResponseEpicWorkflowStatusTimesInner.md)
 - [EpicsPutResponse](docs/EpicsPutResponse.md)
 - [EpicsPutResponseEpic](docs/EpicsPutResponseEpic.md)
 - [EpicsPutResponseEpicCreatedByUser](docs/EpicsPutResponseEpicCreatedByUser.md)
 - [EpicsPutResponseEpicCustomFieldsInner](docs/EpicsPutResponseEpicCustomFieldsInner.md)
 - [EpicsPutResponseEpicDescription](docs/EpicsPutResponseEpicDescription.md)
 - [EpicsPutResponseEpicEpicLinksInner](docs/EpicsPutResponseEpicEpicLinksInner.md)
 - [EpicsPutResponseEpicFeaturesInner](docs/EpicsPutResponseEpicFeaturesInner.md)
 - [EpicsPutResponseEpicFullTagsInner](docs/EpicsPutResponseEpicFullTagsInner.md)
 - [EpicsPutResponseEpicGoalsInner](docs/EpicsPutResponseEpicGoalsInner.md)
 - [EpicsPutResponseEpicInitiative](docs/EpicsPutResponseEpicInitiative.md)
 - [EpicsPutResponseEpicInitiativeDescription](docs/EpicsPutResponseEpicInitiativeDescription.md)
 - [EpicsPutResponseEpicIntegrationFieldsInner](docs/EpicsPutResponseEpicIntegrationFieldsInner.md)
 - [FeaturesGetResponse](docs/FeaturesGetResponse.md)
 - [FeaturesGetResponseFeaturesInner](docs/FeaturesGetResponseFeaturesInner.md)
 - [FeaturesGetResponsePagination](docs/FeaturesGetResponsePagination.md)
 - [FeaturesPostRequest](docs/FeaturesPostRequest.md)
 - [FeaturesPostRequestFeature](docs/FeaturesPostRequestFeature.md)
 - [FeaturesPostRequestFeatureAssignedToUser](docs/FeaturesPostRequestFeatureAssignedToUser.md)
 - [FeaturesPostRequestFeatureWorkflowStatus](docs/FeaturesPostRequestFeatureWorkflowStatus.md)
 - [FeaturesPostResponse](docs/FeaturesPostResponse.md)
 - [FeaturesPostResponseFeature](docs/FeaturesPostResponseFeature.md)
 - [FeaturesPostResponseFeatureDescription](docs/FeaturesPostResponseFeatureDescription.md)
 - [FeaturesPostResponseFeatureWorkflowKind](docs/FeaturesPostResponseFeatureWorkflowKind.md)
 - [FeaturesPostResponseFeatureWorkflowStatus](docs/FeaturesPostResponseFeatureWorkflowStatus.md)
 - [FeaturesPostResponseFeatureWorkflowStatusTimesInner](docs/FeaturesPostResponseFeatureWorkflowStatusTimesInner.md)
 - [FeaturesPutRequest](docs/FeaturesPutRequest.md)
 - [FeaturesPutRequestFeature](docs/FeaturesPutRequestFeature.md)
 - [FeaturesPutResponse](docs/FeaturesPutResponse.md)
 - [FeaturesPutResponseFeature](docs/FeaturesPutResponseFeature.md)
 - [FeaturesPutResponseFeatureBelongsToReleasePhase](docs/FeaturesPutResponseFeatureBelongsToReleasePhase.md)
 - [FeaturesPutResponseFeatureBelongsToReleasePhaseDescription](docs/FeaturesPutResponseFeatureBelongsToReleasePhaseDescription.md)
 - [FeaturesPutResponseFeatureCustomFieldsInner](docs/FeaturesPutResponseFeatureCustomFieldsInner.md)
 - [FeaturesPutResponseFeatureDescription](docs/FeaturesPutResponseFeatureDescription.md)
 - [FeaturesPutResponseFeatureFeatureLinksInner](docs/FeaturesPutResponseFeatureFeatureLinksInner.md)
 - [FeaturesPutResponseFeatureFullTagsInner](docs/FeaturesPutResponseFeatureFullTagsInner.md)
 - [FeaturesPutResponseFeatureIntegrationFieldsInner](docs/FeaturesPutResponseFeatureIntegrationFieldsInner.md)
 - [FeaturesPutResponseFeatureKeyResultsInner](docs/FeaturesPutResponseFeatureKeyResultsInner.md)
 - [FeaturesPutResponseFeatureMasterFeature](docs/FeaturesPutResponseFeatureMasterFeature.md)
 - [FeaturesPutResponseFeatureRequirementsInner](docs/FeaturesPutResponseFeatureRequirementsInner.md)
 - [FeaturesPutResponseFeatureScoreFactsInner](docs/FeaturesPutResponseFeatureScoreFactsInner.md)
 - [GoalsGetResponse](docs/GoalsGetResponse.md)
 - [GoalsGetResponseGoalsInner](docs/GoalsGetResponseGoalsInner.md)
 - [GoalsGetResponseGoalsInnerDescription](docs/GoalsGetResponseGoalsInnerDescription.md)
 - [GoalsGetResponseGoalsInnerSuccessMetric](docs/GoalsGetResponseGoalsInnerSuccessMetric.md)
 - [GoalsGetResponseGoalsInnerTimeFrame](docs/GoalsGetResponseGoalsInnerTimeFrame.md)
 - [GoalsPostRequest](docs/GoalsPostRequest.md)
 - [GoalsPostRequestGoal](docs/GoalsPostRequestGoal.md)
 - [GoalsPostResponse](docs/GoalsPostResponse.md)
 - [GoalsPostResponseGoal](docs/GoalsPostResponseGoal.md)
 - [GoalsPostResponseGoalDescription](docs/GoalsPostResponseGoalDescription.md)
 - [GoalsPostResponseGoalSuccessMetric](docs/GoalsPostResponseGoalSuccessMetric.md)
 - [GoalsPostResponseGoalSuccessMetricDescription](docs/GoalsPostResponseGoalSuccessMetricDescription.md)
 - [GoalsPostResponseGoalSuccessMetricWorkflowStatus](docs/GoalsPostResponseGoalSuccessMetricWorkflowStatus.md)
 - [GoalsPutRequest](docs/GoalsPutRequest.md)
 - [GoalsPutRequestGoal](docs/GoalsPutRequestGoal.md)
 - [GoalsPutResponse](docs/GoalsPutResponse.md)
 - [GoalsPutResponseGoal](docs/GoalsPutResponseGoal.md)
 - [GoalsPutResponseGoalDescription](docs/GoalsPutResponseGoalDescription.md)
 - [GoalsPutResponseGoalInitiativesInner](docs/GoalsPutResponseGoalInitiativesInner.md)
 - [GoalsPutResponseGoalReleasesInner](docs/GoalsPutResponseGoalReleasesInner.md)
 - [GoalsPutResponseGoalSuccessMetric](docs/GoalsPutResponseGoalSuccessMetric.md)
 - [GoalsPutResponseGoalSuccessMetricDescription](docs/GoalsPutResponseGoalSuccessMetricDescription.md)
 - [GoalsPutResponseGoalSuccessMetricWorkflowStatus](docs/GoalsPutResponseGoalSuccessMetricWorkflowStatus.md)
 - [HistoricalAuditsGetResponse](docs/HistoricalAuditsGetResponse.md)
 - [HistoricalAuditsGetResponseHistoricalAuditsInner](docs/HistoricalAuditsGetResponseHistoricalAuditsInner.md)
 - [HistoricalAuditsPostRequest](docs/HistoricalAuditsPostRequest.md)
 - [HistoricalAuditsPostRequestSearch](docs/HistoricalAuditsPostRequestSearch.md)
 - [HistoricalAuditsPostResponse](docs/HistoricalAuditsPostResponse.md)
 - [IdeaPortalsGetResponse](docs/IdeaPortalsGetResponse.md)
 - [IdeaPortalsGetResponseIdeaPortalsInner](docs/IdeaPortalsGetResponseIdeaPortalsInner.md)
 - [IdeaPortalsPostRequest](docs/IdeaPortalsPostRequest.md)
 - [IdeaPortalsPostResponse](docs/IdeaPortalsPostResponse.md)
 - [IdeaPortalsPutResponse](docs/IdeaPortalsPutResponse.md)
 - [IdeaPortalsPutResponseIdeaPortalsInner](docs/IdeaPortalsPutResponseIdeaPortalsInner.md)
 - [IdeacategoriesGetResponse](docs/IdeacategoriesGetResponse.md)
 - [IdeacategoriesGetResponseIdeaCategoriesInner](docs/IdeacategoriesGetResponseIdeaCategoriesInner.md)
 - [IdeacategoriesPostRequest](docs/IdeacategoriesPostRequest.md)
 - [IdeacategoriesPostRequestIdeaCategory](docs/IdeacategoriesPostRequestIdeaCategory.md)
 - [IdeacategoriesPostResponse](docs/IdeacategoriesPostResponse.md)
 - [IdeacommentsGetResponse](docs/IdeacommentsGetResponse.md)
 - [IdeacommentsGetResponseIdeaCommentsInner](docs/IdeacommentsGetResponseIdeaCommentsInner.md)
 - [IdeacommentsPostRequest](docs/IdeacommentsPostRequest.md)
 - [IdeacommentsPostRequestIdeaComment](docs/IdeacommentsPostRequestIdeaComment.md)
 - [IdeacommentsPostResponse](docs/IdeacommentsPostResponse.md)
 - [IdeacommentsPostResponseIdeaComment](docs/IdeacommentsPostResponseIdeaComment.md)
 - [IdeacommentsPostResponseIdeaCommentIdea](docs/IdeacommentsPostResponseIdeaCommentIdea.md)
 - [IdeacommentsPostResponseIdeaCommentIdeaDescription](docs/IdeacommentsPostResponseIdeaCommentIdeaDescription.md)
 - [IdeacommentsPostResponseIdeaCommentIdeaWorkflowStatus](docs/IdeacommentsPostResponseIdeaCommentIdeaWorkflowStatus.md)
 - [IdeacommentsPutResponse](docs/IdeacommentsPutResponse.md)
 - [IdeacommentsPutResponseIdeaComment](docs/IdeacommentsPutResponseIdeaComment.md)
 - [IdeaorganizationsGetResponse](docs/IdeaorganizationsGetResponse.md)
 - [IdeaorganizationsGetResponseIdeaOrganization](docs/IdeaorganizationsGetResponseIdeaOrganization.md)
 - [IdeaorganizationsPostRequest](docs/IdeaorganizationsPostRequest.md)
 - [IdeaorganizationsPostRequestIdeaOrganization](docs/IdeaorganizationsPostRequestIdeaOrganization.md)
 - [IdeaorganizationsPostResponse](docs/IdeaorganizationsPostResponse.md)
 - [IdeaorganizationsPostResponseIdeaOrganization](docs/IdeaorganizationsPostResponseIdeaOrganization.md)
 - [IdeaorganizationsPostResponseIdeaOrganizationCreatedByUser](docs/IdeaorganizationsPostResponseIdeaOrganizationCreatedByUser.md)
 - [IdeaorganizationsPostResponseIdeaOrganizationDescription](docs/IdeaorganizationsPostResponseIdeaOrganizationDescription.md)
 - [IdeaorganizationsPutRequest](docs/IdeaorganizationsPutRequest.md)
 - [IdeaorganizationsPutRequestIdeaOrganization](docs/IdeaorganizationsPutRequestIdeaOrganization.md)
 - [IdeaorganizationsPutResponse](docs/IdeaorganizationsPutResponse.md)
 - [IdeaorganizationsPutResponseIdeaOrganization](docs/IdeaorganizationsPutResponseIdeaOrganization.md)
 - [IdeaorganizationsPutResponseIdeaOrganizationCustomFieldsInner](docs/IdeaorganizationsPutResponseIdeaOrganizationCustomFieldsInner.md)
 - [IdeasGetResponse](docs/IdeasGetResponse.md)
 - [IdeasGetResponseIdeasInner](docs/IdeasGetResponseIdeasInner.md)
 - [IdeasGetResponsePagination](docs/IdeasGetResponsePagination.md)
 - [IdeasPostRequest](docs/IdeasPostRequest.md)
 - [IdeasPostResponse](docs/IdeasPostResponse.md)
 - [IdeasPostResponseIdea](docs/IdeasPostResponseIdea.md)
 - [IdeasPostResponseIdeaAdminResponse](docs/IdeasPostResponseIdeaAdminResponse.md)
 - [IdeasPostResponseIdeaCategoriesInner](docs/IdeasPostResponseIdeaCategoriesInner.md)
 - [IdeasPostResponseIdeaCreatedByIdeaUser](docs/IdeasPostResponseIdeaCreatedByIdeaUser.md)
 - [IdeasPostResponseIdeaCreatedByPortalUser](docs/IdeasPostResponseIdeaCreatedByPortalUser.md)
 - [IdeasPostResponseIdeaDescription](docs/IdeasPostResponseIdeaDescription.md)
 - [IdeasPostResponseIdeaFullTagsInner](docs/IdeasPostResponseIdeaFullTagsInner.md)
 - [IdeasPostResponseIdeaWorkflowStatus](docs/IdeasPostResponseIdeaWorkflowStatus.md)
 - [IdeasPostResponseIdeaWorkflowStatusTimesInner](docs/IdeasPostResponseIdeaWorkflowStatusTimesInner.md)
 - [IdeasPutRequest](docs/IdeasPutRequest.md)
 - [IdeasPutResponse](docs/IdeasPutResponse.md)
 - [IdeasPutResponseIdea](docs/IdeasPutResponseIdea.md)
 - [IdeasPutResponseIdeaCategoriesInner](docs/IdeasPutResponseIdeaCategoriesInner.md)
 - [IdeasPutResponseIdeaCustomFieldsInner](docs/IdeasPutResponseIdeaCustomFieldsInner.md)
 - [IdeasPutResponseIdeaCustomObjectLinksInner](docs/IdeasPutResponseIdeaCustomObjectLinksInner.md)
 - [IdeasPutResponseIdeaDescription](docs/IdeasPutResponseIdeaDescription.md)
 - [IdeasPutResponseIdeaFeature](docs/IdeasPutResponseIdeaFeature.md)
 - [IdeasPutResponseIdeaScoreFactsInner](docs/IdeasPutResponseIdeaScoreFactsInner.md)
 - [IdeasPutResponseIdeaWorkflowStatus](docs/IdeasPutResponseIdeaWorkflowStatus.md)
 - [IdeasPutResponseIdeaWorkflowStatusTimesInner](docs/IdeasPutResponseIdeaWorkflowStatusTimesInner.md)
 - [IdeasPutResponseIdeaWorkflowStatusWorkflowStatusCategory](docs/IdeasPutResponseIdeaWorkflowStatusWorkflowStatusCategory.md)
 - [IdeasportalusersGetResponse](docs/IdeasportalusersGetResponse.md)
 - [IdeasportalusersGetResponsePortalUser](docs/IdeasportalusersGetResponsePortalUser.md)
 - [IdeasportalusersPostRequest](docs/IdeasportalusersPostRequest.md)
 - [IdeasportalusersPostRequestPortalUser](docs/IdeasportalusersPostRequestPortalUser.md)
 - [IdeasportalusersPostResponse](docs/IdeasportalusersPostResponse.md)
 - [IdeasportalusersPostResponsePortalUser](docs/IdeasportalusersPostResponsePortalUser.md)
 - [IdeasportalusersPutResponse](docs/IdeasportalusersPutResponse.md)
 - [IdeasportalusersPutResponsePortalUser](docs/IdeasportalusersPutResponsePortalUser.md)
 - [IdeasportalusersubscriptionsGetResponse](docs/IdeasportalusersubscriptionsGetResponse.md)
 - [IdeasportalusersubscriptionsGetResponsePortalUserSubscriptions](docs/IdeasportalusersubscriptionsGetResponsePortalUserSubscriptions.md)
 - [IdeasportalusersubscriptionsGetResponsePortalUserSubscriptionsPreferencesInner](docs/IdeasportalusersubscriptionsGetResponsePortalUserSubscriptionsPreferencesInner.md)
 - [IdeasportalusersubscriptionsPostRequest](docs/IdeasportalusersubscriptionsPostRequest.md)
 - [IdeasportalusersubscriptionsPostRequestPortalUserSubscriptions](docs/IdeasportalusersubscriptionsPostRequestPortalUserSubscriptions.md)
 - [IdeasportalusersubscriptionsPostRequestPortalUserSubscriptionsPreferencesInner](docs/IdeasportalusersubscriptionsPostRequestPortalUserSubscriptionsPreferencesInner.md)
 - [IdeasportalusersubscriptionsPostResponse](docs/IdeasportalusersubscriptionsPostResponse.md)
 - [IdeasubscriptionsGetResponse](docs/IdeasubscriptionsGetResponse.md)
 - [IdeasubscriptionsGetResponseIdeaSubscription](docs/IdeasubscriptionsGetResponseIdeaSubscription.md)
 - [IdeasubscriptionsGetResponseIdeaSubscriptionIdea](docs/IdeasubscriptionsGetResponseIdeaSubscriptionIdea.md)
 - [IdeasubscriptionsPostRequest](docs/IdeasubscriptionsPostRequest.md)
 - [IdeasubscriptionsPostRequestIdeaSubscription](docs/IdeasubscriptionsPostRequestIdeaSubscription.md)
 - [IdeasubscriptionsPostResponse](docs/IdeasubscriptionsPostResponse.md)
 - [IdeasubscriptionsPostResponseIdeaSubscription](docs/IdeasubscriptionsPostResponseIdeaSubscription.md)
 - [IdeasubscriptionsPostResponseIdeaSubscriptionPortalUser](docs/IdeasubscriptionsPostResponseIdeaSubscriptionPortalUser.md)
 - [IdeathemesGetResponse](docs/IdeathemesGetResponse.md)
 - [IdeathemesGetResponseIdeaTheme](docs/IdeathemesGetResponseIdeaTheme.md)
 - [IdeathemesPostRequest](docs/IdeathemesPostRequest.md)
 - [IdeathemesPostRequestIdeaTheme](docs/IdeathemesPostRequestIdeaTheme.md)
 - [IdeathemesPostResponse](docs/IdeathemesPostResponse.md)
 - [IdeathemesPostResponseIdeaTheme](docs/IdeathemesPostResponseIdeaTheme.md)
 - [IdeathemesPostResponseIdeaThemeDescription](docs/IdeathemesPostResponseIdeaThemeDescription.md)
 - [IdeathemesPutResponse](docs/IdeathemesPutResponse.md)
 - [IdeathemesPutResponseIdeaTheme](docs/IdeathemesPutResponseIdeaTheme.md)
 - [IdeausersGetResponse](docs/IdeausersGetResponse.md)
 - [IdeausersGetResponseIdeaUser](docs/IdeausersGetResponseIdeaUser.md)
 - [IdeausersPostRequest](docs/IdeausersPostRequest.md)
 - [IdeausersPostRequestIdeaUser](docs/IdeausersPostRequestIdeaUser.md)
 - [IdeausersPostResponse](docs/IdeausersPostResponse.md)
 - [IdeausersPostResponseIdeaUser](docs/IdeausersPostResponseIdeaUser.md)
 - [IdeausersPutResponse](docs/IdeausersPutResponse.md)
 - [IdeausersPutResponseIdeaUser](docs/IdeausersPutResponseIdeaUser.md)
 - [IdeausersPutResponseIdeaUserIdeaOrganizationsInner](docs/IdeausersPutResponseIdeaUserIdeaOrganizationsInner.md)
 - [IdeavotesGetResponse](docs/IdeavotesGetResponse.md)
 - [IdeavotesGetResponseIdeaEndorsementsInner](docs/IdeavotesGetResponseIdeaEndorsementsInner.md)
 - [IdeavotesGetResponseIdeaEndorsementsInnerEndorsedByIdeaUser](docs/IdeavotesGetResponseIdeaEndorsementsInnerEndorsedByIdeaUser.md)
 - [IdeavotesGetResponseIdeaEndorsementsInnerEndorsedByPortalUser](docs/IdeavotesGetResponseIdeaEndorsementsInnerEndorsedByPortalUser.md)
 - [IdeavotesGetResponsePagination](docs/IdeavotesGetResponsePagination.md)
 - [IdeavotesPostRequest](docs/IdeavotesPostRequest.md)
 - [IdeavotesPostRequestIdeaEndorsement](docs/IdeavotesPostRequestIdeaEndorsement.md)
 - [IdeavotesPostResponse](docs/IdeavotesPostResponse.md)
 - [IdeavotesPostResponseIdeaEndorsement](docs/IdeavotesPostResponseIdeaEndorsement.md)
 - [IdeavotesPostResponseIdeaEndorsementEndorsedByIdeaUser](docs/IdeavotesPostResponseIdeaEndorsementEndorsedByIdeaUser.md)
 - [IdeavotesPostResponseIdeaEndorsementEndorsedByPortalUser](docs/IdeavotesPostResponseIdeaEndorsementEndorsedByPortalUser.md)
 - [IdeavotesPostResponseIdeaEndorsementIdea](docs/IdeavotesPostResponseIdeaEndorsementIdea.md)
 - [IdeavotesPutResponse](docs/IdeavotesPutResponse.md)
 - [IdeavotesPutResponseIdeaEndorsement](docs/IdeavotesPutResponseIdeaEndorsement.md)
 - [IdeavotesPutResponseIdeaEndorsementCustomFieldsInner](docs/IdeavotesPutResponseIdeaEndorsementCustomFieldsInner.md)
 - [IdeavotesPutResponseIdeaEndorsementEndorsedByIdeaUser](docs/IdeavotesPutResponseIdeaEndorsementEndorsedByIdeaUser.md)
 - [IdeavotesPutResponseIdeaEndorsementEndorsedByPortalUser](docs/IdeavotesPutResponseIdeaEndorsementEndorsedByPortalUser.md)
 - [IdeavotesPutResponseIdeaEndorsementIdeaOrganization](docs/IdeavotesPutResponseIdeaEndorsementIdeaOrganization.md)
 - [IdeavotesPutResponseIdeaEndorsementIntegrationFieldsInner](docs/IdeavotesPutResponseIdeaEndorsementIntegrationFieldsInner.md)
 - [IdentityprovidersGetResponse](docs/IdentityprovidersGetResponse.md)
 - [IdentityprovidersGetResponseIdentityProvider](docs/IdentityprovidersGetResponseIdentityProvider.md)
 - [InitiativesGetResponse](docs/InitiativesGetResponse.md)
 - [InitiativesGetResponseInitiativesInner](docs/InitiativesGetResponseInitiativesInner.md)
 - [InitiativesGetResponseInitiativesInnerAssignedToUser](docs/InitiativesGetResponseInitiativesInnerAssignedToUser.md)
 - [InitiativesGetResponseInitiativesInnerCreatedByUser](docs/InitiativesGetResponseInitiativesInnerCreatedByUser.md)
 - [InitiativesGetResponseInitiativesInnerDescription](docs/InitiativesGetResponseInitiativesInnerDescription.md)
 - [InitiativesGetResponseInitiativesInnerWorkflowStatus](docs/InitiativesGetResponseInitiativesInnerWorkflowStatus.md)
 - [InitiativesPostRequest](docs/InitiativesPostRequest.md)
 - [InitiativesPostRequestInitiative](docs/InitiativesPostRequestInitiative.md)
 - [InitiativesPostResponse](docs/InitiativesPostResponse.md)
 - [InitiativesPostResponseInitiative](docs/InitiativesPostResponseInitiative.md)
 - [InitiativesPostResponseInitiativeDescription](docs/InitiativesPostResponseInitiativeDescription.md)
 - [InitiativesPostResponseInitiativeWorkflowStatus](docs/InitiativesPostResponseInitiativeWorkflowStatus.md)
 - [InitiativesPostResponseInitiativeWorkflowStatusTimesInner](docs/InitiativesPostResponseInitiativeWorkflowStatusTimesInner.md)
 - [InitiativesPutRequest](docs/InitiativesPutRequest.md)
 - [InitiativesPutRequestInitiative](docs/InitiativesPutRequestInitiative.md)
 - [InitiativesPutResponse](docs/InitiativesPutResponse.md)
 - [InitiativesPutResponseInitiative](docs/InitiativesPutResponseInitiative.md)
 - [InitiativesPutResponseInitiativeCustomFieldsInner](docs/InitiativesPutResponseInitiativeCustomFieldsInner.md)
 - [InitiativesPutResponseInitiativeDescription](docs/InitiativesPutResponseInitiativeDescription.md)
 - [InitiativesPutResponseInitiativeIntegrationFieldsInner](docs/InitiativesPutResponseInitiativeIntegrationFieldsInner.md)
 - [InitiativesPutResponseInitiativeMasterFeaturesInner](docs/InitiativesPutResponseInitiativeMasterFeaturesInner.md)
 - [InitiativesPutResponseInitiativeReleasesInner](docs/InitiativesPutResponseInitiativeReleasesInner.md)
 - [IntegrationchangejobsGetResponse](docs/IntegrationchangejobsGetResponse.md)
 - [IntegrationchangejobsGetResponseIntegrationChangeJob](docs/IntegrationchangejobsGetResponseIntegrationChangeJob.md)
 - [IntegrationchangejobsGetResponseIntegrationChangeJobErrorsInner](docs/IntegrationchangejobsGetResponseIntegrationChangeJobErrorsInner.md)
 - [IntegrationchangesPostRequest](docs/IntegrationchangesPostRequest.md)
 - [IntegrationchangesPostResponse](docs/IntegrationchangesPostResponse.md)
 - [IntegrationfieldsGetResponse](docs/IntegrationfieldsGetResponse.md)
 - [IntegrationfieldsPostRequest](docs/IntegrationfieldsPostRequest.md)
 - [IntegrationfieldsPostRequestIntegrationField](docs/IntegrationfieldsPostRequestIntegrationField.md)
 - [IntegrationfieldsPostResponse](docs/IntegrationfieldsPostResponse.md)
 - [IntegrationfieldsPostResponseIntegrationField](docs/IntegrationfieldsPostResponseIntegrationField.md)
 - [IntegrationfieldsPostResponseIntegrationFieldIntegratable](docs/IntegrationfieldsPostResponseIntegrationFieldIntegratable.md)
 - [IntegrationsGetResponse](docs/IntegrationsGetResponse.md)
 - [IntegrationsGetResponseIntegration](docs/IntegrationsGetResponseIntegration.md)
 - [IntegrationsGetResponseIntegrationOwner](docs/IntegrationsGetResponseIntegrationOwner.md)
 - [IntegrationsPostRequest](docs/IntegrationsPostRequest.md)
 - [IntegrationsPostRequestIntegration](docs/IntegrationsPostRequestIntegration.md)
 - [IntegrationsPostResponse](docs/IntegrationsPostResponse.md)
 - [IntegrationsPostResponseIntegration](docs/IntegrationsPostResponseIntegration.md)
 - [IntegrationsPutResponse](docs/IntegrationsPutResponse.md)
 - [KeyresultsGetResponse](docs/KeyresultsGetResponse.md)
 - [KeyresultsGetResponseKeyResult](docs/KeyresultsGetResponseKeyResult.md)
 - [KeyresultsPostRequest](docs/KeyresultsPostRequest.md)
 - [KeyresultsPostRequestKeyResult](docs/KeyresultsPostRequestKeyResult.md)
 - [KeyresultsPostRequestKeyResultWorkflowStatus](docs/KeyresultsPostRequestKeyResultWorkflowStatus.md)
 - [KeyresultsPostResponse](docs/KeyresultsPostResponse.md)
 - [KeyresultsPostResponseKeyResult](docs/KeyresultsPostResponseKeyResult.md)
 - [KeyresultsPostResponseKeyResultAssignedToUser](docs/KeyresultsPostResponseKeyResultAssignedToUser.md)
 - [KeyresultsPostResponseKeyResultDescription](docs/KeyresultsPostResponseKeyResultDescription.md)
 - [KeyresultsPostResponseKeyResultWorkflowStatus](docs/KeyresultsPostResponseKeyResultWorkflowStatus.md)
 - [KeyresultsPutResponse](docs/KeyresultsPutResponse.md)
 - [KeyresultsPutResponseKeyResult](docs/KeyresultsPutResponseKeyResult.md)
 - [KeyresultsPutResponseKeyResultCustomFieldsInner](docs/KeyresultsPutResponseKeyResultCustomFieldsInner.md)
 - [KnowledgebasepagesGetResponse](docs/KnowledgebasepagesGetResponse.md)
 - [KnowledgebasepagesGetResponsePage](docs/KnowledgebasepagesGetResponsePage.md)
 - [KnowledgebasepagesGetResponsePageDescription](docs/KnowledgebasepagesGetResponsePageDescription.md)
 - [KnowledgebasesGetResponse](docs/KnowledgebasesGetResponse.md)
 - [KnowledgebasesGetResponseKnowledgeBase](docs/KnowledgebasesGetResponseKnowledgeBase.md)
 - [MeGetResponse](docs/MeGetResponse.md)
 - [MeGetResponseTasksInner](docs/MeGetResponseTasksInner.md)
 - [NotesGetResponse](docs/NotesGetResponse.md)
 - [NotesGetResponsePagesInner](docs/NotesGetResponsePagesInner.md)
 - [NotesGetResponsePagination](docs/NotesGetResponsePagination.md)
 - [NotesPostRequest](docs/NotesPostRequest.md)
 - [NotesPostRequestPage](docs/NotesPostRequestPage.md)
 - [NotesPostRequestPageDescriptionAttributes](docs/NotesPostRequestPageDescriptionAttributes.md)
 - [NotesPostResponse](docs/NotesPostResponse.md)
 - [NotesPostResponsePage](docs/NotesPostResponsePage.md)
 - [NotesPostResponsePageDescription](docs/NotesPostResponsePageDescription.md)
 - [NotesPostResponsePageWorkflowStatus](docs/NotesPostResponsePageWorkflowStatus.md)
 - [NotesPutResponse](docs/NotesPutResponse.md)
 - [NotesPutResponsePage](docs/NotesPutResponsePage.md)
 - [PaidSeatGroupsGetResponse](docs/PaidSeatGroupsGetResponse.md)
 - [PaidSeatGroupsGetResponsePaidSeatGroupsInner](docs/PaidSeatGroupsGetResponsePaidSeatGroupsInner.md)
 - [PaidSeatGroupsPostRequest](docs/PaidSeatGroupsPostRequest.md)
 - [PaidSeatGroupsPostResponse](docs/PaidSeatGroupsPostResponse.md)
 - [PaidSeatGroupsPostResponseAdministratorsInner](docs/PaidSeatGroupsPostResponseAdministratorsInner.md)
 - [PaidSeatGroupsPutResponse](docs/PaidSeatGroupsPutResponse.md)
 - [PersonasGetResponse](docs/PersonasGetResponse.md)
 - [PersonasGetResponsePersonasInner](docs/PersonasGetResponsePersonasInner.md)
 - [PersonasPostRequest](docs/PersonasPostRequest.md)
 - [PersonasPostRequestPersona](docs/PersonasPostRequestPersona.md)
 - [PersonasPostResponse](docs/PersonasPostResponse.md)
 - [PersonasPostResponsePersona](docs/PersonasPostResponsePersona.md)
 - [PersonasPutResponse](docs/PersonasPutResponse.md)
 - [PersonasPutResponsePersona](docs/PersonasPutResponsePersona.md)
 - [ProductsGetResponse](docs/ProductsGetResponse.md)
 - [ProductsGetResponseProduct](docs/ProductsGetResponseProduct.md)
 - [ProductsGetResponseProductCustomFieldsInner](docs/ProductsGetResponseProductCustomFieldsInner.md)
 - [ProductsGetResponseProductDescription](docs/ProductsGetResponseProductDescription.md)
 - [ProductsGetResponseProductEpicWorkflow](docs/ProductsGetResponseProductEpicWorkflow.md)
 - [ProductsGetResponseProductFeatureWorkflow](docs/ProductsGetResponseProductFeatureWorkflow.md)
 - [ProductsGetResponseProductIdeaWorkflow](docs/ProductsGetResponseProductIdeaWorkflow.md)
 - [ProductsGetResponseProductInitiativeWorkflow](docs/ProductsGetResponseProductInitiativeWorkflow.md)
 - [ProductsGetResponseProductKeyResultWorkflow](docs/ProductsGetResponseProductKeyResultWorkflow.md)
 - [ProductsGetResponseProductPageWorkflow](docs/ProductsGetResponseProductPageWorkflow.md)
 - [ProductsGetResponseProductReleaseWorkflow](docs/ProductsGetResponseProductReleaseWorkflow.md)
 - [ProductsGetResponseProductRequirementWorkflow](docs/ProductsGetResponseProductRequirementWorkflow.md)
 - [ProductsGetResponseProductScreenDefinitionIds](docs/ProductsGetResponseProductScreenDefinitionIds.md)
 - [ProductsGetResponseProductScreenDefinitionsInner](docs/ProductsGetResponseProductScreenDefinitionsInner.md)
 - [ProductsGetResponseProductStrategicImperativeWorkflow](docs/ProductsGetResponseProductStrategicImperativeWorkflow.md)
 - [ProductsPostRequest](docs/ProductsPostRequest.md)
 - [ProductsPostRequestProduct](docs/ProductsPostRequestProduct.md)
 - [ProductsPostResponse](docs/ProductsPostResponse.md)
 - [ProductsPostResponseProduct](docs/ProductsPostResponseProduct.md)
 - [ProductsPostResponseProductDescription](docs/ProductsPostResponseProductDescription.md)
 - [ProductsPostResponseProductKeyResultWorkflow](docs/ProductsPostResponseProductKeyResultWorkflow.md)
 - [ProductsPutRequest](docs/ProductsPutRequest.md)
 - [ProductsPutRequestProduct](docs/ProductsPutRequestProduct.md)
 - [ProductsPutResponse](docs/ProductsPutResponse.md)
 - [ProductsPutResponseProduct](docs/ProductsPutResponseProduct.md)
 - [RecordlinksGetResponse](docs/RecordlinksGetResponse.md)
 - [RecordlinksGetResponseRecordLink](docs/RecordlinksGetResponseRecordLink.md)
 - [RecordlinksGetResponseRecordLinkChildRecord](docs/RecordlinksGetResponseRecordLinkChildRecord.md)
 - [RecordlinksGetResponseRecordLinkParentRecord](docs/RecordlinksGetResponseRecordLinkParentRecord.md)
 - [RecordlinksPostRequest](docs/RecordlinksPostRequest.md)
 - [RecordlinksPostRequestRecordLink](docs/RecordlinksPostRequestRecordLink.md)
 - [ReleasephasesGetResponse](docs/ReleasephasesGetResponse.md)
 - [ReleasephasesGetResponsePagination](docs/ReleasephasesGetResponsePagination.md)
 - [ReleasephasesPostRequest](docs/ReleasephasesPostRequest.md)
 - [ReleasephasesPostRequestReleasePhase](docs/ReleasephasesPostRequestReleasePhase.md)
 - [ReleasephasesPostResponse](docs/ReleasephasesPostResponse.md)
 - [ReleasephasesPostResponseReleasePhase](docs/ReleasephasesPostResponseReleasePhase.md)
 - [ReleasephasesPostResponseReleasePhaseDescription](docs/ReleasephasesPostResponseReleasePhaseDescription.md)
 - [ReleasephasesPutResponse](docs/ReleasephasesPutResponse.md)
 - [ReleasephasesPutResponseReleasePhase](docs/ReleasephasesPutResponseReleasePhase.md)
 - [ReleasephasesPutResponseReleasePhaseDescription](docs/ReleasephasesPutResponseReleasePhaseDescription.md)
 - [ReleasesGetResponse](docs/ReleasesGetResponse.md)
 - [ReleasesGetResponsePagination](docs/ReleasesGetResponsePagination.md)
 - [ReleasesGetResponseReleasesInner](docs/ReleasesGetResponseReleasesInner.md)
 - [ReleasesGetResponseReleasesInnerProject](docs/ReleasesGetResponseReleasesInnerProject.md)
 - [ReleasesPostRequest](docs/ReleasesPostRequest.md)
 - [ReleasesPostRequestRelease](docs/ReleasesPostRequestRelease.md)
 - [ReleasesPostResponse](docs/ReleasesPostResponse.md)
 - [ReleasesPostResponseRelease](docs/ReleasesPostResponseRelease.md)
 - [ReleasesPutRequest](docs/ReleasesPutRequest.md)
 - [ReleasesPutRequestRelease](docs/ReleasesPutRequestRelease.md)
 - [ReleasesPutResponse](docs/ReleasesPutResponse.md)
 - [ReleasesPutResponseRelease](docs/ReleasesPutResponseRelease.md)
 - [ReleasesPutResponseReleaseCustomFieldsInner](docs/ReleasesPutResponseReleaseCustomFieldsInner.md)
 - [ReleasesPutResponseReleaseIntegrationFieldsInner](docs/ReleasesPutResponseReleaseIntegrationFieldsInner.md)
 - [ReleasesPutResponseReleaseTheme](docs/ReleasesPutResponseReleaseTheme.md)
 - [ReleasesPutResponseReleaseWorkflowStatus](docs/ReleasesPutResponseReleaseWorkflowStatus.md)
 - [RequirementsGetResponse](docs/RequirementsGetResponse.md)
 - [RequirementsGetResponseRequirement](docs/RequirementsGetResponseRequirement.md)
 - [RequirementsPostRequest](docs/RequirementsPostRequest.md)
 - [RequirementsPostRequestRequirement](docs/RequirementsPostRequestRequirement.md)
 - [RequirementsPostResponse](docs/RequirementsPostResponse.md)
 - [RequirementsPostResponseFeature](docs/RequirementsPostResponseFeature.md)
 - [RequirementsPostResponseFeatureCustomFieldsInner](docs/RequirementsPostResponseFeatureCustomFieldsInner.md)
 - [RequirementsPostResponseFeatureDescription](docs/RequirementsPostResponseFeatureDescription.md)
 - [RequirementsPostResponseFeatureFeatureLinksInner](docs/RequirementsPostResponseFeatureFeatureLinksInner.md)
 - [RequirementsPutRequest](docs/RequirementsPutRequest.md)
 - [RequirementsPutRequestRequirement](docs/RequirementsPutRequestRequirement.md)
 - [RequirementsPutResponse](docs/RequirementsPutResponse.md)
 - [RequirementsPutResponseRequirement](docs/RequirementsPutResponseRequirement.md)
 - [RollupreleasesGetResponse](docs/RollupreleasesGetResponse.md)
 - [RollupreleasesGetResponseRollUpRelease](docs/RollupreleasesGetResponseRollUpRelease.md)
 - [RollupreleasesPostRequest](docs/RollupreleasesPostRequest.md)
 - [RollupreleasesPostRequestRollUpRelease](docs/RollupreleasesPostRequestRollUpRelease.md)
 - [RollupreleasesPostResponse](docs/RollupreleasesPostResponse.md)
 - [RollupreleasesPostResponseRollUpRelease](docs/RollupreleasesPostResponseRollUpRelease.md)
 - [RollupreleasesPutResponse](docs/RollupreleasesPutResponse.md)
 - [RollupreleasesPutResponseRollUpRelease](docs/RollupreleasesPutResponseRollUpRelease.md)
 - [SchedulablechangesGetResponse](docs/SchedulablechangesGetResponse.md)
 - [SchedulablechangesPostRequest](docs/SchedulablechangesPostRequest.md)
 - [SchedulablechangesPostRequestTeamMembership](docs/SchedulablechangesPostRequestTeamMembership.md)
 - [SchedulablechangesPostRequestTeamMembershipSchedule](docs/SchedulablechangesPostRequestTeamMembershipSchedule.md)
 - [SchedulablechangesPostResponse](docs/SchedulablechangesPostResponse.md)
 - [SchedulablechangesPostResponseSchedulableChange](docs/SchedulablechangesPostResponseSchedulableChange.md)
 - [SchedulablechangesPostResponseSchedulableChangeSchedule](docs/SchedulablechangesPostResponseSchedulableChangeSchedule.md)
 - [SchedulablechangesPostResponseSchedulableChangeTeamMembershipsInner](docs/SchedulablechangesPostResponseSchedulableChangeTeamMembershipsInner.md)
 - [SchedulablechangesPutResponse](docs/SchedulablechangesPutResponse.md)
 - [SchedulablechangesPutResponseSchedulableChange](docs/SchedulablechangesPutResponseSchedulableChange.md)
 - [SchedulablechangesPutResponseSchedulableChangeSchedule](docs/SchedulablechangesPutResponseSchedulableChangeSchedule.md)
 - [SchedulesGetResponse](docs/SchedulesGetResponse.md)
 - [StrategicmodelsGetResponse](docs/StrategicmodelsGetResponse.md)
 - [StrategicmodelsGetResponseStrategyModel](docs/StrategicmodelsGetResponseStrategyModel.md)
 - [StrategicmodelsGetResponseStrategyModelComponentsInner](docs/StrategicmodelsGetResponseStrategyModelComponentsInner.md)
 - [StrategicmodelsGetResponseStrategyModelProject](docs/StrategicmodelsGetResponseStrategyModelProject.md)
 - [StrategicpositioningsGetResponse](docs/StrategicpositioningsGetResponse.md)
 - [StrategicpositioningsGetResponseStrategyPositioning](docs/StrategicpositioningsGetResponseStrategyPositioning.md)
 - [StrategicpositioningsGetResponseStrategyPositioningComponentsInner](docs/StrategicpositioningsGetResponseStrategyPositioningComponentsInner.md)
 - [StrategicvisionsGetResponse](docs/StrategicvisionsGetResponse.md)
 - [StrategicvisionsGetResponseStrategyVision](docs/StrategicvisionsGetResponseStrategyVision.md)
 - [StrategicvisionsGetResponseStrategyVisionStrategyVisionComponentsInner](docs/StrategicvisionsGetResponseStrategyVisionStrategyVisionComponentsInner.md)
 - [TeammembersGetResponse](docs/TeammembersGetResponse.md)
 - [TeammembersGetResponseTeamMembersInner](docs/TeammembersGetResponseTeamMembersInner.md)
 - [TeammembersPostRequest](docs/TeammembersPostRequest.md)
 - [TeammembersPostRequestTeamMember](docs/TeammembersPostRequestTeamMember.md)
 - [TeammembersPostResponse](docs/TeammembersPostResponse.md)
 - [TeammembersPostResponseTeamMember](docs/TeammembersPostResponseTeamMember.md)
 - [TeammembershipsGetResponse](docs/TeammembershipsGetResponse.md)
 - [TeammembershipsGetResponseTeamMembershipsInner](docs/TeammembershipsGetResponseTeamMembershipsInner.md)
 - [TeammembershipsGetResponseTeamMembershipsInnerTeam](docs/TeammembershipsGetResponseTeamMembershipsInnerTeam.md)
 - [TeammembershipsGetResponseTeamMembershipsInnerTeamMember](docs/TeammembershipsGetResponseTeamMembershipsInnerTeamMember.md)
 - [TeammembershipsPostRequest](docs/TeammembershipsPostRequest.md)
 - [TeammembershipsPostRequestTeamMembership](docs/TeammembershipsPostRequestTeamMembership.md)
 - [TeamsGetResponse](docs/TeamsGetResponse.md)
 - [TeamsGetResponseTeam](docs/TeamsGetResponseTeam.md)
 - [TeamsGetResponseTeamTeamMembers](docs/TeamsGetResponseTeamTeamMembers.md)
 - [TeamsPostRequest](docs/TeamsPostRequest.md)
 - [TeamsPostRequestTeam](docs/TeamsPostRequestTeam.md)
 - [TeamsPostResponse](docs/TeamsPostResponse.md)
 - [TeamsPostResponseTeam](docs/TeamsPostResponseTeam.md)
 - [TeamsPutResponse](docs/TeamsPutResponse.md)
 - [TeamsPutResponseTeam](docs/TeamsPutResponseTeam.md)
 - [TeamsPutResponseTeamTeamMembers](docs/TeamsPutResponseTeamTeamMembers.md)
 - [TimetrackingeventsPostRequest](docs/TimetrackingeventsPostRequest.md)
 - [TimetrackingeventsPostRequestTimeTrackingEvent](docs/TimetrackingeventsPostRequestTimeTrackingEvent.md)
 - [TimetrackingeventsPostResponse](docs/TimetrackingeventsPostResponse.md)
 - [TimetrackingeventsPostResponseTimeTrackingEvent](docs/TimetrackingeventsPostResponseTimeTrackingEvent.md)
 - [ToDosGetResponse](docs/ToDosGetResponse.md)
 - [ToDosPostRequest](docs/ToDosPostRequest.md)
 - [ToDosPostRequestTask](docs/ToDosPostRequestTask.md)
 - [ToDosPostResponse](docs/ToDosPostResponse.md)
 - [ToDosPostResponseTask](docs/ToDosPostResponseTask.md)
 - [ToDosPostResponseTaskTaskable](docs/ToDosPostResponseTaskTaskable.md)
 - [ToDosPutResponse](docs/ToDosPutResponse.md)
 - [ToDosPutResponseTask](docs/ToDosPutResponseTask.md)
 - [ToDosPutResponseTaskAssignedToUsersInner](docs/ToDosPutResponseTaskAssignedToUsersInner.md)
 - [ToDosPutResponseTaskTaskable](docs/ToDosPutResponseTaskTaskable.md)
 - [UsersGetResponse](docs/UsersGetResponse.md)
 - [UsersGetResponseUserRolesInner](docs/UsersGetResponseUserRolesInner.md)
 - [UsersGetResponseUserRolesInnerScope](docs/UsersGetResponseUserRolesInnerScope.md)
 - [UsersPostRequest](docs/UsersPostRequest.md)
 - [UsersPostRequestUser](docs/UsersPostRequestUser.md)
 - [UsersPostResponse](docs/UsersPostResponse.md)
 - [UsersPostResponseScope](docs/UsersPostResponseScope.md)
 - [UsersPutResponse](docs/UsersPutResponse.md)
 - [UsersPutResponseAdministratorRoles](docs/UsersPutResponseAdministratorRoles.md)
 - [UsersPutResponseIdentityProvider](docs/UsersPutResponseIdentityProvider.md)
 - [UsersPutResponseProductRolesInner](docs/UsersPutResponseProductRolesInner.md)
 - [WorkflowsGetResponse](docs/WorkflowsGetResponse.md)
 - [WorkflowsGetResponseWorkflow](docs/WorkflowsGetResponseWorkflow.md)
 - [WorkflowsGetResponseWorkflowWorkflowKindsInner](docs/WorkflowsGetResponseWorkflowWorkflowKindsInner.md)
 - [WorkflowstatustimesGetResponse](docs/WorkflowstatustimesGetResponse.md)
 - [WorkflowstatustimesGetResponseWorkflowStatusTime](docs/WorkflowstatustimesGetResponseWorkflowStatusTime.md)
 - [WorkflowstatustimesPostRequest](docs/WorkflowstatustimesPostRequest.md)
 - [WorkflowstatustimesPostRequestWorkflowStatusTime](docs/WorkflowstatustimesPostRequestWorkflowStatusTime.md)
 - [WorkflowstatustimesPostResponse](docs/WorkflowstatustimesPostResponse.md)
 - [WorkflowstatustimesPostResponseWorkflowStatusTime](docs/WorkflowstatustimesPostResponseWorkflowStatusTime.md)
 - [WorkflowstatustimesPutResponse](docs/WorkflowstatustimesPutResponse.md)
 - [WorkflowstatustimesPutResponseWorkflowStatusTime](docs/WorkflowstatustimesPutResponseWorkflowStatusTime.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="OAuth2"></a>
### OAuth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://{account-domain}.aha.io/oauth/authorize
- **Scopes**: N/A

<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: Bearer authentication

<a id="CookieAuth"></a>
### CookieAuth

- **Type**: API key
- **API key parameter name**: session
- **Location**: 

