import { MeApi } from '../../api/me-api';
import { createTestConfig, createMockAdapter, TestUtils } from '../utils/test-helpers';
import { MockResponses, MockRequests } from '../utils/mock-responses';
import MockAdapter from 'axios-mock-adapter';

describe('MeApi', () => {
  let api: MeApi;
  let mockAdapter: any;

  beforeEach(() => {
    const config = createTestConfig();
    api = new MeApi(config);
    mockAdapter = createMockAdapter();
  });

  afterEach(() => {
    mockAdapter.restore();
  });

  describe('meGetProfile', () => {
    it('should fetch user profile successfully', async () => {
      mockAdapter
        .onGet(MockRequests.get.meProfile)
        .reply(200, MockResponses.me.profile);

      const response = await api.meGetProfile();

      expect(response.status).toBe(200);
      expect(response.data).toEqual(MockResponses.me.profile);
      
      // Verify request was made correctly
      const request = mockAdapter.history.get[0];
      TestUtils.assertAuthHeaders(request.headers);
      TestUtils.assertCorrectUrl(request.url!, MockRequests.get.meProfile);
    });

    it('should handle 401 unauthorized error', async () => {
      mockAdapter
        .onGet(MockRequests.get.meProfile)
        .reply(401, MockResponses.errors[401]);

      await expect(api.meGetProfile()).rejects.toThrow();
    });

    it('should handle 500 server error', async () => {
      mockAdapter
        .onGet(MockRequests.get.meProfile)
        .reply(500, MockResponses.errors[500]);

      await expect(api.meGetProfile()).rejects.toThrow();
    });
  });

  describe('meGetAssignedRecords', () => {
    it('should fetch assigned records successfully', async () => {
      mockAdapter
        .onGet(MockRequests.get.meAssigned)
        .reply(200, MockResponses.me.assignedRecords);

      const response = await api.meGetAssignedRecords();

      expect(response.status).toBe(200);
      expect(response.data).toEqual(MockResponses.me.assignedRecords);
      
      // Verify request was made correctly
      const request = mockAdapter.history.get[0];
      TestUtils.assertAuthHeaders(request.headers);
      TestUtils.assertCorrectUrl(request.url!, MockRequests.get.meAssigned);
    });

    it('should handle 401 unauthorized error', async () => {
      mockAdapter
        .onGet(MockRequests.get.meAssigned)
        .reply(401, MockResponses.errors[401]);

      await expect(api.meGetAssignedRecords()).rejects.toThrow();
    });
  });

  describe('meGetPendingTasks', () => {
    it('should fetch pending tasks successfully', async () => {
      mockAdapter
        .onGet(MockRequests.get.meTasks)
        .reply(200, MockResponses.me.pendingTasks);

      const response = await api.meGetPendingTasks();

      expect(response.status).toBe(200);
      expect(response.data).toEqual(MockResponses.me.pendingTasks);
      
      // Verify request was made correctly
      const request = mockAdapter.history.get[0];
      TestUtils.assertAuthHeaders(request.headers);
      TestUtils.assertCorrectUrl(request.url!, MockRequests.get.meTasks);
    });

    it('should handle 401 unauthorized error', async () => {
      mockAdapter
        .onGet(MockRequests.get.meTasks)
        .reply(401, MockResponses.errors[401]);

      await expect(api.meGetPendingTasks()).rejects.toThrow();
    });
  });

  describe('authentication scenarios', () => {
    it('should work with different token formats', async () => {
      const customConfig = createTestConfig({ 
        accessToken: 'custom-token-123' 
      });
      const customApi = new MeApi(customConfig);

      mockAdapter
        .onGet(MockRequests.get.meProfile)
        .reply(200, MockResponses.me.profile);

      await customApi.meGetProfile();

      const request = mockAdapter.history.get[0];
      expect(request.headers.Authorization).toBe('Bearer custom-token-123');
    });

    it('should work with function-based token', async () => {
      const tokenFunction = () => 'dynamic-token';
      const customConfig = createTestConfig({ 
        accessToken: tokenFunction 
      });
      const customApi = new MeApi(customConfig);

      mockAdapter
        .onGet(MockRequests.get.meProfile)
        .reply(200, MockResponses.me.profile);

      await customApi.meGetProfile();

      const request = mockAdapter.history.get[0];
      expect(request.headers.Authorization).toBe('Bearer dynamic-token');
    });
  });

  describe('error handling', () => {
    it('should handle network errors', async () => {
      mockAdapter
        .onGet(MockRequests.get.meProfile)
        .networkError();

      await expect(api.meGetProfile()).rejects.toThrow();
    });

    it('should handle timeout errors', async () => {
      mockAdapter
        .onGet(MockRequests.get.meProfile)
        .timeout();

      await expect(api.meGetProfile()).rejects.toThrow();
    });

    it('should handle rate limiting', async () => {
      mockAdapter
        .onGet(MockRequests.get.meProfile)
        .reply(429, {
          error: 'Rate Limit Exceeded',
          message: 'Too many requests'
        });

      await expect(api.meGetProfile()).rejects.toThrow();
    });
  });
});