import { ProductsApi } from '../../api/products-api';
import { createTestConfig, createMockAdapter, TestUtils } from '../utils/test-helpers';
import { MockResponses, MockRequests } from '../utils/mock-responses';
import MockAdapter from 'axios-mock-adapter';

describe('ProductsApi', () => {
  let api: ProductsApi;
  let mockAdapter: any;

  beforeEach(() => {
    const config = createTestConfig();
    api = new ProductsApi(config);
    mockAdapter = createMockAdapter();
  });

  afterEach(() => {
    mockAdapter.restore();
  });

  describe('productsList', () => {
    it('should fetch products list successfully', async () => {
      mockAdapter
        .onGet(MockRequests.get.products)
        .reply(200, MockResponses.products.list);

      const response = await api.productsList();

      expect(response.status).toBe(200);
      expect(response.data).toEqual(MockResponses.products.list);
      
      // Verify request was made correctly
      const request = mockAdapter.history.get[0];
      TestUtils.assertAuthHeaders(request.headers);
      TestUtils.assertCorrectUrl(request.url!, MockRequests.get.products);
    });

    it('should handle 401 unauthorized error', async () => {
      mockAdapter
        .onGet(MockRequests.get.products)
        .reply(401, MockResponses.errors[401]);

      await expect(api.productsList()).rejects.toThrow();
    });

    it('should handle 500 server error', async () => {
      mockAdapter
        .onGet(MockRequests.get.products)
        .reply(500, MockResponses.errors[500]);

      await expect(api.productsList()).rejects.toThrow();
    });
  });

  describe('productsGet', () => {
    const productId = 'PROD-456';

    it('should fetch a specific product successfully', async () => {
      mockAdapter
        .onGet(MockRequests.get.productsWithId(productId))
        .reply(200, MockResponses.products.get);

      const response = await api.productsGet({ id: productId });

      expect(response.status).toBe(200);
      expect(response.data).toEqual(MockResponses.products.get);
      
      // Verify request was made correctly
      const request = mockAdapter.history.get[0];
      TestUtils.assertAuthHeaders(request.headers);
      TestUtils.assertCorrectUrl(request.url!, MockRequests.get.productsWithId(productId));
    });

    it('should handle 404 not found error', async () => {
      mockAdapter
        .onGet(MockRequests.get.productsWithId(productId))
        .reply(404, MockResponses.errors[404]);

      await expect(api.productsGet({ id: productId })).rejects.toThrow();
    });
  });

  describe('authentication variations', () => {
    it('should work with different base paths', async () => {
      const customConfig = createTestConfig({ 
        basePath: 'https://custom.aha.io/api/v1' 
      });
      const customApi = new ProductsApi(customConfig);

      mockAdapter
        .onGet('https://custom.aha.io/api/v1/products')
        .reply(200, MockResponses.products.list);

      await customApi.productsList();

      const request = mockAdapter.history.get[0];
      expect(request.url).toBe('https://custom.aha.io/api/v1/products');
    });

    it('should work with custom headers', async () => {
      const customConfig = createTestConfig({ 
        baseOptions: {
          headers: {
            'X-Custom-Header': 'test-value'
          }
        }
      });
      const customApi = new ProductsApi(customConfig);

      mockAdapter
        .onGet(MockRequests.get.products)
        .reply(200, MockResponses.products.list);

      await customApi.productsList();

      const request = mockAdapter.history.get[0];
      expect(request.headers['X-Custom-Header']).toBe('test-value');
    });
  });
});