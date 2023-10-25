import { z } from 'zod'
import { DataCenterPrismaQuerySchema, ItemPost, itemPostSchema } from '../schema'
import { InitContractInstance } from '.'

export const item = (c: InitContractInstance) =>
    c.router({
        getAll: {
            method: 'GET',
            path: '/empire-core/item/',
            responses: {
                200: c.type<any>(),
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
                200: z.string(),
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
            body: itemPostSchema,
            summary: 'Create item data',
            responses: {
                201: c.type<Pick<ItemPost, 'id'>>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
        },
    })
