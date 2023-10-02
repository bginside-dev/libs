import axios, { AxiosError, AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T | null;
  status: number;
  message?: string;
}

class DataCenterApi {
  private apiKey: string;
  private businessCode: string;

  constructor(apiKey: string, businessCode: string) {
    this.apiKey = apiKey;
    this.businessCode = businessCode;
  }

  private async request<T>(method: string, path: string, params?: Record<string, any>, data?: any): Promise<ApiResponse<T>> {
    try {
      const url = `http://localhost:4000/api/empire-core/data-center/${path}`;
      const headers = {
        Authorization: `Bearer ${this.apiKey}`,
        'x-business-code': this.businessCode,
      };

      const response: AxiosResponse<T> = await axios.request({
        method,
        url,
        params,
        headers,
        data,
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

  async create<T>(path: string, data: any, params?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.request<T>('POST', path, params, data);
  }

  async update<T>(path: string, data: any, params?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.request<T>('PUT', path, params, data);
  }

  async delete<T>(path: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    return this.request<T>('DELETE', path, params);
  }
}

export class ApiService {
  datacenter: DataCenterApi;
  // supplier: DataCenterApi;
  // customer: DataCenterApi;

  constructor(apiKey: string, businessCode: string) {
    this.datacenter = new DataCenterApi(apiKey, businessCode);
    // this.supplier = new DataCenterApi(apiKey, businessCode);
    // this.customer = new DataCenterApi(apiKey, businessCode);
  }
}