import { FeaturesApi } from '../../api/features-api';
import { CommentsApi } from '../../api/comments-api';
import { createTestConfig, createMockAdapter, TestUtils } from '../utils/test-helpers';
import { MockResponses, MockRequests } from '../utils/mock-responses';
import MockAdapter from 'axios-mock-adapter';

describe('FeaturesApi', () => {
  let api: FeaturesApi;
  let mockAdapter: any;

  beforeEach(() => {
    const config = createTestConfig();
    api = new FeaturesApi(config);
    mockAdapter = createMockAdapter();
  });

  afterEach(() => {
    mockAdapter.restore();
  });

  describe('featuresGet', () => {
    it('should fetch features list successfully', async () => {
      mockAdapter
        .onGet(MockRequests.get.features)
        .reply(200, MockResponses.features.list);

      const response = await api.featuresGet();

      expect(response.status).toBe(200);
      expect(response.data).toEqual(MockResponses.features.list);

      // Verify request was made correctly
      const request = mockAdapter.history.get[0];
      TestUtils.assertAuthHeaders(request.headers);
      TestUtils.assertCorrectUrl(request.url!, MockRequests.get.features);
    });

    it('should handle 401 unauthorized error', async () => {
      mockAdapter
        .onGet(MockRequests.get.features)
        .reply(401, MockResponses.errors[401]);

      await expect(api.featuresGet()).rejects.toThrow();
    });

    it('should handle 500 server error', async () => {
      mockAdapter
        .onGet(MockRequests.get.features)
        .reply(500, MockResponses.errors[500]);

      await expect(api.featuresGet()).rejects.toThrow();
    });
  });

  describe('FeaturesApi CRUD operations', () => {
    const featureId = 'FEAT-123';

    it('should fetch a specific feature successfully', async () => {
      mockAdapter
        .onGet(MockRequests.get.featuresWithId(featureId))
        .reply(200, MockResponses.features.get);

      const response = await api.featuresByIdGet({ id: featureId });

      expect(response.status).toBe(200);
      expect(response.data).toEqual(MockResponses.features.get);

      // Verify request was made correctly
      const request = mockAdapter.history.get[0];
      TestUtils.assertAuthHeaders(request.headers);
      TestUtils.assertCorrectUrl(request.url!, MockRequests.get.featuresWithId(featureId));
    });

    it('should handle 404 not found error', async () => {
      mockAdapter
        .onGet(MockRequests.get.featuresWithId(featureId))
        .reply(404, MockResponses.errors[404]);

      await expect(api.featuresByIdGet({ id: featureId })).rejects.toThrow();
    });

    it('should delete a feature successfully', async () => {
      mockAdapter
        .onDelete(MockRequests.delete.featuresWithId(featureId))
        .reply(204);

      const response = await api.featuresByIdDelete({ id: featureId });

      expect(response.status).toBe(204);
      
      // Verify request was made correctly
      const request = mockAdapter.history.delete[0];
      TestUtils.assertAuthHeaders(request.headers);
      TestUtils.assertCorrectUrl(request.url!, MockRequests.delete.featuresWithId(featureId));
    });
  });

  describe('featuresByFeatureCommentsPost (CommentsApi)', () => {
    const featureId = 'FEAT-123';
    let commentsApi: CommentsApi;

    beforeEach(() => {
      commentsApi = new CommentsApi(createTestConfig());
    });

    it('should create a comment successfully', async () => {
      const commentData = {
        comment: { body: 'This is a test comment' }
      };

      mockAdapter
        .onPost(MockRequests.post.comments('features', featureId))
        .reply(201, { comment: { id: 'COMMENT-123', body: 'This is a test comment' } });

      const response = await commentsApi.featuresByFeatureCommentsPost({
        featureId,
        commentsPostRequest: commentData
      });

      expect(response.status).toBe(201);

      // Verify request was made correctly
      const request = mockAdapter.history.post[0];
      TestUtils.assertAuthHeaders(request.headers);
      TestUtils.assertCorrectUrl(request.url!, MockRequests.post.comments('features', featureId));
    });

    it('should handle validation errors', async () => {
      const commentData = {
        comment: { body: '' }
      };

      mockAdapter
        .onPost(MockRequests.post.comments('features', featureId))
        .reply(400, MockResponses.errors[400]);

      await expect(commentsApi.featuresByFeatureCommentsPost({
        featureId,
        commentsPostRequest: commentData
      })).rejects.toThrow();
    });
  });

  describe('authentication', () => {
    it('should work with different authentication methods', async () => {
      // Test with different token
      const customConfig = createTestConfig({ accessToken: 'custom-token' });
      const customApi = new FeaturesApi(customConfig);

      mockAdapter
        .onGet(MockRequests.get.features)
        .reply(200, MockResponses.features.list);

      await customApi.featuresGet();

      const request = mockAdapter.history.get[0];
      TestUtils.assertAuthHeaders(request.headers, 'custom-token');
    });

    it('should work with function-based token', async () => {
      const tokenFunction = () => 'dynamic-token';
      const customConfig = createTestConfig({ accessToken: tokenFunction });
      const customApi = new FeaturesApi(customConfig);

      mockAdapter
        .onGet(MockRequests.get.features)
        .reply(200, MockResponses.features.list);

      await customApi.featuresGet();

      const request = mockAdapter.history.get[0];
      TestUtils.assertAuthHeaders(request.headers, 'dynamic-token');
    });
  });
});