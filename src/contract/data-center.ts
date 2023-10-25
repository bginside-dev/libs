import {
    DataCenterDeleteSchema,
    DataCenterPostSchema,
    DataCenterPrismaQuerySchema,
    DataCenterPutSchema,
    ValidatePostSchema,
} from '../schema'
import { DataCenterGetResponse, dataCenterHeaderSchema } from '../types'
import { InitContractInstance } from '.'

export const dataCenter = (c: InitContractInstance) =>
    c.router({
        getAll: {
            method: 'GET',
            path: '/',
            responses: {
                200: c.type<DataCenterGetResponse>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            query: DataCenterPrismaQuerySchema,
            summary: 'Get data',
            headers: dataCenterHeaderSchema,
        },
        create: {
            method: 'POST',
            path: '/',
            responses: {
                201: c.type<any>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: DataCenterPostSchema,
            summary: 'Create data',
            headers: dataCenterHeaderSchema,
        },
        update: {
            method: 'PUT',
            path: '/',
            responses: {
                201: c.type<any>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: DataCenterPutSchema,
            headers: dataCenterHeaderSchema,
            summary: 'Update data',
            strictStatusCodes: true,
        },
        delete: {
            method: 'DELETE',
            path: '/',
            body: DataCenterDeleteSchema,
            headers: dataCenterHeaderSchema,
            summary: 'Delete data',
            responses: {
                201: c.type<any>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
        },
        validate: {
            method: 'POST',
            path: '/validate',
            body: ValidatePostSchema,
            summary: 'Validate Data',
            responses: {
                200: c.type<any>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
        },
    })
