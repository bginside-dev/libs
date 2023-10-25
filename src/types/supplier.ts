import { z } from 'zod'
import { SupplierDeleteSchema, SupplierFormSchema } from '../schema'

export type SupplierForm = z.infer<typeof SupplierFormSchema>
export type SupplierDeleteBody = z.infer<typeof SupplierDeleteSchema>

export type SupplierPostResponse = Pick<SupplierForm, 'id'>
export type SupplierUpdateResponse = { message: string }
export type SupplierDeleteResponse = { message: string }

export type SupplierGetResponse = {
    group: {
        code: string
        id: string
        name: string
        active: boolean
    }
    class: {
        code: string
        id: string
        name: string
        active: boolean
    }
    contact: {
        id: string
        firstName: string
        lastName: string
    } | null
} & {
    businessCode: string
    id: string
    code: string
    name: string
    active: boolean
    groupId: string
    classId: string
    details: string | null
    tradeName: string | null
    tinNo: string | null
    website: string | null
    contactId: string | null
    addressId: string | null
    priceList: string | null
    discountCode: string | null
    taxLiable: boolean | null
    taxType: string | null
    createdAt: Date
    updatedAt: Date
}
