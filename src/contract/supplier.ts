import { InitContractInstance } from '.'
import { DataCenterPrismaQuerySchema, supplierSchema } from '../schema'
import { SupplierGetById, SupplierPostResponse, SupplierGetResponse } from '../types/supplier'

export const supplier = (c: InitContractInstance) =>
    c.router({
        getAll: {
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
                201: c.type<{ data: SupplierPostResponse }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: supplierSchema,
            summary: 'Create data',
        },
        update: {
            method: 'PATCH',
            path: '/empire-core/supplier/:id',
            responses: {
                201: c.type<{ data: SupplierPostResponse }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: supplierSchema,
            summary: 'Update data',
        },
        getById: {
            method: 'GET',
            path: '/empire-core/supplier/:id',
            summary: 'Delete data',
            responses: {
                200: c.type<{ data: SupplierGetById }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
        },
    })
