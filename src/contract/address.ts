import { InitContractInstance } from '.'
import { ReferenceSearchQuerySchema } from '../types'
import { AddressDeleteSchema, AddressPostSchema, AddressUpdateSchema, DataCenterPrismaQuerySchema } from '../schema'
import {
    AddressAsRef,
    AddressDeleteResponse,
    AddressGetResponse,
    AddressPostResponse,
    AddressUpdateResponse,
} from '../types/address'

export const address = (c: InitContractInstance) =>
    c.router({
        get: {
            method: 'GET',
            path: '/empire-core/address/',
            responses: {
                200: c.type<{ data: AddressGetResponse[] }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            query: DataCenterPrismaQuerySchema,
            summary: 'Get data',
        },
        create: {
            method: 'POST',
            path: '/empire-core/address/',
            responses: {
                201: c.type<AddressPostResponse>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: AddressPostSchema,
            summary: 'Get data',
        },
        update: {
            method: 'PATCH',
            path: '/empire-core/address/:id',
            responses: {
                201: c.type<AddressUpdateResponse>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: AddressUpdateSchema,
            summary: 'Get data',
        },
        delete: {
            method: 'DELETE',
            path: '/empire-core/address/',
            responses: {
                200: c.type<AddressDeleteResponse>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: AddressDeleteSchema,
            summary: 'Get data',
        },
        getById: {
            method: 'GET',
            path: '/empire-core/address/:id',
            responses: {
                200: c.type<{ data: AddressGetResponse }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            summary: 'Get data',
        },
        getAddressAsRef: {
            method: 'GET',
            path: '/empire-core/address/data/reference',
            responses: {
                200: c.type<{ data: AddressAsRef[] }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            query: ReferenceSearchQuerySchema,
            summary: 'Get data',
        },
    })
