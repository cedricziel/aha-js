// Export all generated models and API classes
// The 'generated' directory will be created by the OpenAPI Generator
export * from './generated';

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// This interface will be extended with the actual configuration options
// once the API client is generated
export interface AhaClientOptions {
  baseUrl?: string;
  apiKey?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

// Import the generated APIs
import { FeaturesApi, ProductsApi } from './generated';

// This class serves as a wrapper around the generated API client
export class AhaClient {
  private axiosInstance: AxiosInstance;

  // Generated API instances
  public features: FeaturesApi;
  public products: ProductsApi;

  constructor(options: AhaClientOptions = {}) {
    const baseUrl = options.baseUrl || 'https://api.aha.io';

    const axiosConfig: AxiosRequestConfig = {
      baseURL: baseUrl,
      timeout: options.timeout || 10000,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    if (options.apiKey) {
      axiosConfig.headers = {
        ...axiosConfig.headers,
        'Authorization': `Bearer ${options.apiKey}`,
      };
    }

    this.axiosInstance = axios.create(axiosConfig);

    // Initialize API instances
    // Note: In the actual generated client, these would be properly initialized
    // with the axios instance
    this.features = new FeaturesApi();
    this.products = new ProductsApi();
  }

  // This method will be used to get the axios instance
  // which can be used for custom requests
  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

// Default export for easier imports
export default AhaClient;
