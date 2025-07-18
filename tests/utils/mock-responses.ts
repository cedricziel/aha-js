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
   * GET request patterns
   */
  get: {
    features: '/features',
    featuresWithId: (id: string) => `/features/${id}`,
    products: '/products',
    productsWithId: (id: string) => `/products/${id}`,
    meProfile: '/me',
    meAssigned: '/me/assigned',
    meTasks: '/me/tasks'
  },

  /**
   * POST request patterns
   */
  post: {
    features: '/features',
    comments: (resourceType: string, id: string) => `/${resourceType}/${id}/comments`
  },

  /**
   * PUT request patterns
   */
  put: {
    featuresWithId: (id: string) => `/features/${id}`,
    productsWithId: (id: string) => `/products/${id}`
  },

  /**
   * DELETE request patterns
   */
  delete: {
    featuresWithId: (id: string) => `/features/${id}`,
    productsWithId: (id: string) => `/products/${id}`
  }
};