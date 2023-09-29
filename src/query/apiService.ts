import axios, { AxiosError, AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T | null;
  status: number;
  message?: string;
}

export class ApiService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async Request<T>(method: string, path: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await axios.request({
        method,
        url: `http://localhost:4000/api/empire-core/data-center${path}`,
        params,
        headers: {
          Authorization: `Bearer ${this.apiKey}`, // Add the API key as a bearer token
        },
      });

      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      const errorMessage = (error as Error).message;
      return {
        data: null,
        status: 500,
        message: errorMessage || 'An error occurred',
      };
    }
  }

  async get<T>(path: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.Request<T>('GET', path, params);
  }
}