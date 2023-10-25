import { InitContractInstance } from '.'
import { referenceSearchQuerySchema } from '../types'
import { ContactDeleteSchema, ContactPostSchema, DataCenterPrismaQuerySchema, MasterContactPutSchema } from '../schema'
import {
    ContactAsRef,
    ContactGetById,
    ContactPostResponse,
    ContactPutResponse,
    ContactResponse,
} from '../types/contact'

export const contact = (c: InitContractInstance) =>
    c.router({
        getAll: {
            method: 'GET',
            path: '/empire-core/contact/',
            responses: {
                200: c.type<{ data: ContactResponse[] }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            query: DataCenterPrismaQuerySchema,
            summary: 'Get data',
        },
        create: {
            method: 'POST',
            path: '/empire-core/contact/',
            responses: {
                201: c.type<{ data: ContactPostResponse }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: ContactPostSchema,
            summary: 'Get data',
        },
        update: {
            method: 'PATCH',
            path: '/empire-core/contact',
            responses: {
                201: c.type<{ data: ContactPutResponse }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: MasterContactPutSchema,
            summary: 'Get data',
        },
        delete: {
            method: 'DELETE',
            path: '/empire-core/contact/',
            responses: {
                200: c.type<{ data: ContactPutResponse }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: ContactDeleteSchema,
            summary: 'Get data',
        },
        getById: {
            method: 'GET',
            path: '/empire-core/contact/:id',
            responses: {
                200: c.type<{ data: ContactGetById }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            summary: 'Get data',
        },
        getContactAsRef: {
            method: 'GET',
            path: '/empire-core/contact/data/reference',
            responses: {
                200: c.type<{ data: ContactAsRef[] }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            query: referenceSearchQuerySchema,
            summary: 'Get data',
        },
    })
