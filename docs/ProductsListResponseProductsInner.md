# ProductsListResponseProductsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the product | [optional] [default to undefined]
**referencePrefix** | **string** | Reference prefix of the product | [optional] [default to undefined]
**name** | **string** | Name of the product | [optional] [default to undefined]
**productLine** | **boolean** | Whether the product is a product line | [optional] [default to undefined]
**createdAt** | **string** | Creation date of the product | [optional] [default to undefined]
**workspaceType** | **string** | Type of workspace (product_workspace, marketing_workspace, etc.) | [optional] [default to undefined]
**url** | **string** | URL to view the product in the Aha! web application | [optional] [default to undefined]

## Example

```typescript
import { ProductsListResponseProductsInner } from 'aha-js';

const instance: ProductsListResponseProductsInner = {
    id,
    referencePrefix,
    name,
    productLine,
    createdAt,
    workspaceType,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
