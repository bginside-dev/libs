import { InitContractInstance } from '.'
import { ReferenceSearchQuerySchema } from '../types'
import { ContactDeleteSchema, ContactPostSchema, ContactUpdateSchema, DataCenterPrismaQuerySchema } from '../schema'
import {
    ContactAsRef,
    ContactPostResponse,
    ContactGetResponse,
    ContactUpdateResponse,
    ContactDeleteResponse,
} from '../types/contact'

export const contact = (c: InitContractInstance) =>
    c.router({
        get: {
            method: 'GET',
            path: '/empire-core/contact/',
            responses: {
                200: c.type<{ data: ContactGetResponse[] }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            query: DataCenterPrismaQuerySchema,
            summary: 'Get data',
        },
        getById: {
            method: 'GET',
            path: '/empire-core/contact/:id',
            responses: {
                200: c.type<{ data: ContactGetResponse }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            summary: 'Get data',
        },
        create: {
            method: 'POST',
            path: '/empire-core/contact/',
            responses: {
                201: c.type<ContactPostResponse>(),
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
                201: c.type<ContactUpdateResponse>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: ContactUpdateSchema,
            summary: 'Get data',
        },
        delete: {
            method: 'DELETE',
            path: '/empire-core/contact/',
            responses: {
                200: c.type<ContactDeleteResponse>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: ContactDeleteSchema,
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
            query: ReferenceSearchQuerySchema,
            summary: 'Get data',
        },
    })
