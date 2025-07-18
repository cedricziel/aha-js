import { TestData, TestUtils } from './test-helpers';

/**
 * Mock response data for API endpoints
 */
export const MockResponses = {
  /**
   * Features API responses
   */
  features: {
    list: TestUtils.createPaginatedResponse([
      TestData.feature,
      { ...TestData.feature, id: 'FEAT-124', name: 'Another Feature' }
    ]),
    
    get: { feature: TestData.feature },
    
    create: { feature: TestData.feature },
    
    update: { feature: { ...TestData.feature, name: 'Updated Feature' } }
  },

  /**
   * Products API responses
   */
  products: {
    list: TestUtils.createPaginatedResponse([
      TestData.product,
      { ...TestData.product, id: 'PROD-457', name: 'Another Product' }
    ]),
    
    get: { product: TestData.product }
  },

  /**
   * Me API responses
   */
  me: {
    profile: { user: TestData.user },
    
    assignedRecords: TestUtils.createPaginatedResponse([
      {
        id: 'FEAT-123',
        type: 'feature',
        name: 'Assigned Feature',
        assigned_to_user: TestData.user
      }
    ]),
    
    pendingTasks: TestUtils.createPaginatedResponse([
      {
        id: 'TASK-001',
        name: 'Review feature spec',
        assigned_by_user: TestData.user,
        due_date: '2023-12-31T23:59:59Z'
      }
    ])
  },

  /**
   * Error responses
   */
  errors: TestData.error
};

/**
 * Mock request patterns for different HTTP methods
 */
export const MockRequests = {
  /**
   * GET request patterns with full URLs
   */
  get: {
    features: 'https://test.aha.io/api/v1/features',
    featuresWithId: (id: string) => `https://test.aha.io/api/v1/features/${id}`,
    products: 'https://test.aha.io/api/v1/products',
    productsWithId: (id: string) => `https://test.aha.io/api/v1/products/${id}`,
    meProfile: 'https://test.aha.io/api/v1/me',
    meAssigned: 'https://test.aha.io/api/v1/me/assigned',
    meTasks: 'https://test.aha.io/api/v1/me/tasks'
  },

  /**
   * POST request patterns with full URLs
   */
  post: {
    features: 'https://test.aha.io/api/v1/features',
    comments: (resourceType: string, id: string) => `https://test.aha.io/api/v1/${resourceType}/${id}/comments`
  },

  /**
   * PUT request patterns with full URLs
   */
  put: {
    featuresWithId: (id: string) => `https://test.aha.io/api/v1/features/${id}`,
    productsWithId: (id: string) => `https://test.aha.io/api/v1/products/${id}`
  },

  /**
   * DELETE request patterns with full URLs
   */
  delete: {
    featuresWithId: (id: string) => `https://test.aha.io/api/v1/features/${id}`,
    productsWithId: (id: string) => `https://test.aha.io/api/v1/products/${id}`
  }
};