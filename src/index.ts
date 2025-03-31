// Export all generated models and API classes
// Note: The 'generated' directory will be created by the OpenAPI Generator
// This is a placeholder until the actual code is generated

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// This interface will be extended with the actual configuration options
// once the API client is generated
export interface AhaClientOptions {
  baseUrl?: string;
  apiKey?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

// This class will serve as a wrapper around the generated API client
// It will be updated once the actual client is generated
export class AhaClient {
  private axiosInstance: AxiosInstance;

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
  }

  // This method will be used to get the axios instance
  // which can be used for custom requests
  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }

  // Additional utility methods will be added here
  // once the API client is generated
}

// Default export for easier imports
export default AhaClient;
