import { z } from 'zod'
import * as dto from '../dto'
import {
    DataCenterBaseSchema,
    MasterContactEmailSchema,
    MasterContactPhoneSchema,
    RefCategorySchema,
    RefDiscountSchema,
    RefPaymentSchema,
    RefTaxTypeSchema,
    RefTermsSchema,
} from '../schema'

export type Prettify<T> = {
    [K in keyof T]: T[K]
} & {}

export type DataCenterBase = Prettify<dto.DataCenterBaseDto>
export type PortalAuth = {
    businessCode: string
    locationCode: string
    app: 'empire' | 'empire-core'
}

export interface EmpireApiServiceConfig {
    apiKey: string
    businessCode: string
}

// libs --> TODO
export const DATACENTER_TABLES = [
    'brand',
    'division',
    'family',
    'generic-type',
    'uom',
    'bank',
    'card-type',
    'shipping-method',
    'category',
    'payment',
    'discount',
    'terms',
    'supplier-group',
    'supplier-class',
    'salutation',
    'designation',
    'gender',
    'address-type',
    'country',
    'item-type',
    'manufacturer',
    'costing-method',
    'tax-type',
] as const

export type MasterContactEmail = z.infer<typeof MasterContactEmailSchema>

export type MasterContactPhone = z.infer<typeof MasterContactPhoneSchema>

export const DataCenterEnum = z.enum([...DATACENTER_TABLES])

export type DataCenterTables = (typeof DATACENTER_TABLES)[number] | (string & {})
export type DataCenterUnion = z.infer<typeof DataCenterEnum>

export type RefBrand = z.infer<typeof DataCenterBaseSchema>
export type RefCategory = z.infer<typeof RefCategorySchema>
export type RefDiscount = z.infer<typeof RefDiscountSchema>
export type RefPayment = z.infer<typeof RefPaymentSchema>
export type RefTerms = z.infer<typeof RefTermsSchema>
export type RefTaxType = z.infer<typeof RefTaxTypeSchema>

const apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiZ0xvY2F0aW9uQ29kZSI6ImJnTG9jbWtkbzMiLCJiZ0J1c2luZXNzQ29kZSI6ImJnQnVzVUpWcE8iLCJleHBpcmVzSW4iOiIxMGQiLCJpYXQiOjE2OTM5MDE1NDIsImV4cCI6MTY5NDc2NTU0Mn0.5m3Pv7p-ArTY8oKmAvAKY9amLfEEM0wUKGAIsG_zDkU'
const baseHeaderSchema = z.object({
    Authorization: z.string().default(`Bearer ${apiKey}`),
    'x-business-code': z.string(),
})

export const dataCenterHeaderSchema = baseHeaderSchema.merge(z.object({ path: z.enum([...DATACENTER_TABLES]) }))

export const referenceSearchQuerySchema = z.object({
    search: z.string(),
})
