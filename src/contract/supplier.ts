import { InitContractInstance } from '.'
import { DataCenterPrismaQuerySchema, SupplierPostSchema, SupplierUpdateSchema } from '../schema'
import { SupplierPostResponse, SupplierGetResponse, SupplierUpdateResponse } from '../types/supplier'

export const supplier = (c: InitContractInstance) =>
    c.router({
        get: {
            method: 'GET',
            path: '/empire-core/supplier/',
            responses: {
                200: c.type<{ data: SupplierGetResponse[] }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            query: DataCenterPrismaQuerySchema,
            summary: 'Get data',
        },
        create: {
            method: 'POST',
            path: '/empire-core/supplier/',
            responses: {
                201: c.type<SupplierPostResponse>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: SupplierPostSchema,
            summary: 'Create data',
        },
        update: {
            method: 'PATCH',
            path: '/empire-core/supplier/:id',
            responses: {
                201: c.type<SupplierUpdateResponse>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: SupplierUpdateSchema,
            summary: 'Update data',
        },
        getById: {
            method: 'GET',
            path: '/empire-core/supplier/:id',
            summary: 'Delete data',
            responses: {
                200: c.type<{ data: SupplierGetResponse }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
        },
    })
