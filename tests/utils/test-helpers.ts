import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { Configuration } from '../../configuration';
import { BASE_PATH } from '../../base';

/**
 * Create a test configuration for API clients
 */
export function createTestConfig(overrides: Partial<Configuration> = {}): Configuration {
  return new Configuration({
    basePath: 'https://test.aha.io/api/v1',
    accessToken: 'test-token',
    ...overrides
  });
}

/**
 * Create a mock adapter for axios requests
 */
export function createMockAdapter(): any {
  return new MockAdapter(axios);
}

/**
 * Common test data generators
 */
export const TestData = {
  feature: {
    id: 'FEAT-123',
    name: 'Test Feature',
    description: { body: 'Test description' },
    workflow_status: { name: 'In Progress' },
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  
  product: {
    id: 'PROD-456',
    name: 'Test Product',
    created_at: '2023-01-01T00:00:00Z',
    updated_at: '2023-01-01T00:00:00Z'
  },
  
  user: {
    id: 'USER-789',
    email: 'test@example.com',
    name: 'Test User',
    created_at: '2023-01-01T00:00:00Z'
  },
  
  error: {
    400: {
      error: 'Bad Request',
      message: 'Invalid request parameters'
    },
    401: {
      error: 'Unauthorized',
      message: 'Invalid authentication credentials'
    },
    404: {
      error: 'Not Found',
      message: 'Resource not found'
    },
    500: {
      error: 'Internal Server Error',
      message: 'An internal server error occurred'
    }
  }
};

/**
 * Common test utilities
 */
export const TestUtils = {
  /**
   * Assert that a request was made with proper authentication
   */
  assertAuthHeaders(headers: any, expectedToken: string = 'test-token') {
    expect(headers.Authorization).toBe(`Bearer ${expectedToken}`);
  },

  /**
   * Assert that a request was made to the correct URL
   */
  assertCorrectUrl(url: string, expectedUrl: string) {
    expect(url).toBe(expectedUrl);
  },

  /**
   * Create a paginated response
   */
  createPaginatedResponse<T>(data: T[], page: number = 1, perPage: number = 20) {
    return {
      data,
      pagination: {
        page,
        per_page: perPage,
        total_pages: Math.ceil(data.length / perPage),
        total_count: data.length
      }
    };
  }
};