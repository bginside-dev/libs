import { initClient } from '@ts-rest/core';
import { ApiContract } from './contract';

interface ApiResponse<T> {
    data: T | null;
    status: number;
    message?: string;
}

export class ApiService {
    private instance: any;

    constructor(apiKey: string, businessCode: string) {
        this.instance = initClient(ApiContract, {
            baseUrl: 'http://localhost:4000/api/empire-core/data-center',
            baseHeaders: {
                Authorization: `Bearer ${apiKey}`,
                'x-business-code': businessCode,
            },
        });
    }

    async get<T>(path: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
        const response = await this.instance.get({ path, params });
        return {
            data: response.body,
            status: response.status,
        };
    }
}
