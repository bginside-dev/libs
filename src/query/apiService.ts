import axios, { AxiosError, AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T | null;
  status: number;
  message?: string;
}

export class ApiService {
  private apiKey: string;
  private businessCode: string; // Add business code property

  constructor(apiKey: string, businessCode: string) {
    this.apiKey = apiKey;
    this.businessCode = businessCode; // Initialize business code
  }

  private async request<T>(method: string, path: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    try {
      const url = `http://localhost:4000/api/empire-core/data-center${path}`;
      const headers = {
        Authorization: `Bearer ${this.apiKey}`,
        'x-business-code': this.businessCode, // Add the business code header
      };

      const response: AxiosResponse<T> = await axios.request({
        method,
        url,
        params,
        headers,
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
    return this.request<T>('GET', path, params);
  }
}