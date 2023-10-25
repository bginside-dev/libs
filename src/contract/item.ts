import { DataCenterPrismaQuerySchema, ItemFormSchema, ItemPostSchema, ItemUpdateSchema } from '../schema'
import { ItemGetResponse, ItemPostResponse, ItemUpdateResponse } from '../types/item'
import { InitContractInstance } from '.'

export const item = (c: InitContractInstance) =>
    c.router({
        get: {
            method: 'GET',
            path: '/empire-core/item/',
            responses: {
                200: c.type<{ data: ItemGetResponse[]; totalCount: number }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            query: DataCenterPrismaQuerySchema,
            summary: 'Get data',
        },
        getById: {
            method: 'GET',
            path: '/empire-core/item/:id/',
            responses: {
                200: c.type<{ data: ItemGetResponse }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            query: DataCenterPrismaQuerySchema,
            summary: 'Get data',
        },
        create: {
            method: 'POST',
            path: '/empire-core/item/',
            body: ItemPostSchema,
            summary: 'Create item data',
            responses: {
                201: c.type<ItemPostResponse>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
        },
        update: {
            method: 'PUT',
            path: '/empire-core/item/',
            body: ItemUpdateSchema,
            summary: 'Update item data',
            responses: {
                200: c.type<ItemUpdateResponse>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
        },
    })
