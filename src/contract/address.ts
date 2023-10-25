import { InitContractInstance } from '.'
import { referenceSearchQuerySchema } from '../types'
import { ContactDeleteSchema, DataCenterPrismaQuerySchema, addressPostDtoSchema } from '../schema'
import { AddressAsRef, AddressById, AddressGetResponse, AddressResponse } from '../types/address'

export const address = (c: InitContractInstance) =>
    c.router({
        getAll: {
            method: 'GET',
            path: '/empire-core/address/',
            responses: {
                200: c.type<{ data: AddressGetResponse }>(),
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
                201: c.type<{ data: AddressResponse }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: addressPostDtoSchema,
            summary: 'Get data',
        },
        update: {
            method: 'PATCH',
            path: '/empire-core/address/:id',
            responses: {
                201: c.type<{ data: AddressResponse }>(),
                400: c.type<{ message: string }>(),
                401: c.type<{ message: string }>(),
                404: c.type<{ message: string }>(),
                500: c.type<{ message: string }>(),
            },
            body: addressPostDtoSchema,
            summary: 'Get data',
        },
        delete: {
            method: 'DELETE',
            path: '/empire-core/address/',
            responses: {
                200: c.type<{ data: AddressResponse }>(),
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
            path: '/empire-core/address/:id',
            responses: {
                200: c.type<{ data: AddressById }>(),
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
            query: referenceSearchQuerySchema,
            summary: 'Get data',
        },
    })
