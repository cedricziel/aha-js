import { Configuration } from '../../configuration';

describe('Configuration', () => {
  describe('constructor', () => {
    it('should create a configuration with default values', () => {
      const config = new Configuration();
      
      expect(config).toBeDefined();
      expect(config.basePath).toBeUndefined();
      expect(config.accessToken).toBeUndefined();
      expect(config.username).toBeUndefined();
      expect(config.password).toBeUndefined();
    });

    it('should create a configuration with provided values', () => {
      const params = {
        basePath: 'https://mycompany.aha.io/api/v1',
        accessToken: 'bearer-token-123',
        username: 'testuser',
        password: 'testpass'
      };
      
      const config = new Configuration(params);
      
      expect(config.basePath).toBe(params.basePath);
      expect(config.accessToken).toBe(params.accessToken);
      expect(config.username).toBe(params.username);
      expect(config.password).toBe(params.password);
    });

    it('should handle function-based access token', () => {
      const tokenFunction = () => 'dynamic-token';
      const config = new Configuration({
        accessToken: tokenFunction
      });
      
      expect(config.accessToken).toBe(tokenFunction);
    });

    it('should handle async function-based access token', () => {
      const asyncTokenFunction = async () => 'async-token';
      const config = new Configuration({
        accessToken: asyncTokenFunction
      });
      
      expect(config.accessToken).toBe(asyncTokenFunction);
    });

    it('should handle function-based API key', () => {
      const apiKeyFunction = (name: string) => `api-key-${name}`;
      const config = new Configuration({
        apiKey: apiKeyFunction
      });
      
      expect(config.apiKey).toBe(apiKeyFunction);
    });
  });

  describe('authentication methods', () => {
    it('should store username and password for basic auth', () => {
      const config = new Configuration({
        username: 'user',
        password: 'pass'
      });
      
      expect(config.username).toBe('user');
      expect(config.password).toBe('pass');
    });

    it('should handle missing credentials', () => {
      const config = new Configuration();
      
      expect(config.username).toBeUndefined();
      expect(config.password).toBeUndefined();
    });

    it('should handle partial credentials', () => {
      const config = new Configuration({
        username: 'user'
      });
      
      expect(config.username).toBe('user');
      expect(config.password).toBeUndefined();
    });
  });

  describe('server configuration', () => {
    it('should handle server index configuration', () => {
      const config = new Configuration({
        serverIndex: 1
      });
      
      expect(config.serverIndex).toBe(1);
    });

    it('should handle base options', () => {
      const baseOptions = {
        timeout: 5000,
        headers: { 'Custom-Header': 'value' }
      };
      
      const config = new Configuration({
        baseOptions
      });
      
      expect(config.baseOptions.timeout).toBe(5000);
      expect(config.baseOptions.headers['Custom-Header']).toBe('value');
    });

    it('should merge base options headers', () => {
      const config = new Configuration({
        baseOptions: {
          headers: { 'Header-1': 'value1' }
        }
      });
      
      expect(config.baseOptions.headers['Header-1']).toBe('value1');
    });

    it('should handle form data constructor', () => {
      const MockFormData = class MockFormData {};
      
      const config = new Configuration({
        formDataCtor: MockFormData
      });
      
      expect(config.formDataCtor).toBe(MockFormData);
    });
  });
});