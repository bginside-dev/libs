import axios, { Method, AxiosError, AxiosResponse, isAxiosError, AxiosHeaders } from 'axios';
import { ApiContract } from './contract';
import { initClient } from '@ts-rest/core';

interface EmpireApiServiceConfig {
    apiKey: string;
    businessCode: string;
}

export class EmpireApiService {
    private apiKey: string;
    private businessCode: string;

    private static classInstance: EmpireApiService;

    constructor(config: EmpireApiServiceConfig) {
        this.apiKey = config.apiKey;
        this.businessCode = config.businessCode;
    }

    public static initEmpireApiService(config: EmpireApiServiceConfig) {
        if (!this.classInstance) {
            this.classInstance = new EmpireApiService(config);
        }

        return this.classInstance;
    }

    get gateway() {
        return initClient(ApiContract, {
            baseUrl: '',
            baseHeaders: {
                Authorization: `Bearer ${this.apiKey}`,
                'x-business-code': this.businessCode
            },
            api: async ({ body, headers, method, path, signal,      }) => {
                // return tsRestFetchApi({});
                // const businessCode = headers.businessCode;
                const xheaders = new Headers();
                let urlPath = path // ---> '/empire-core/item/'
                if (headers.path) {
                    urlPath = '/empire-core/data-center/' + headers.path
                }
            
                try {
                    const result = await axios.request({
                        method: method as Method,
                        url: `http://localhost:4000/api${urlPath}`,
                        headers,
                        data: body,
                        signal,
                    });

                    return { status: result.status, body: result.data, headers: xheaders, signal: result.config.signal };
                } catch (e: Error | AxiosError | any) {
                    if (isAxiosError(e)) {
                        const error = e as AxiosError;
                        const response = error.response as AxiosResponse;
                        return { status: response.status, body: response.data, headers: xheaders };
                    }
                    throw e;
                }
            },
        });
    }
}
