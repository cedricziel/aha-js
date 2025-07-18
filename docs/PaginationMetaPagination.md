# PaginationMetaPagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentPage** | **number** | Current page number (1-based) | [optional] [default to undefined]
**perPage** | **number** | Number of items per page | [optional] [default to undefined]
**totalPages** | **number** | Total number of pages | [optional] [default to undefined]
**totalRecords** | **number** | Total number of records across all pages | [optional] [default to undefined]
**nextPage** | **number** | Next page number (null if no next page) | [optional] [default to undefined]
**prevPage** | **number** | Previous page number (null if no previous page) | [optional] [default to undefined]

## Example

```typescript
import { PaginationMetaPagination } from '@cedricziel/aha-js';

const instance: PaginationMetaPagination = {
    currentPage,
    perPage,
    totalPages,
    totalRecords,
    nextPage,
    prevPage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
