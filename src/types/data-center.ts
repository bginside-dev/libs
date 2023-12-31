import { z } from 'zod'
import {
    DataCenterBaseFormSchema,
    DataCenterDeleteSchema,
    DataCenterPostSchema,
    DataCenterPrismaQuerySchema,
    DataCenterPutSchema,
    RefCategorySchema,
    RefDiscountSchema,
    RefPaymentSchema,
    RefTaxTypeSchema,
    RefTermsSchema,
    ValidatePostSchema,
} from '../schema'
import { Prettify } from '.'

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

export const DataCenterEnum = z.enum([...DATACENTER_TABLES])

export type DataCenterTables = (typeof DATACENTER_TABLES)[number] | (string & {})
export type DataCenterUnion = z.infer<typeof DataCenterEnum>
export type DataCenterPrismaQuery = z.infer<typeof DataCenterPrismaQuerySchema>
export type ReferenceSearchQuery = z.infer<typeof ReferenceSearchQuerySchema>

export type DataCenterBaseForm = z.infer<typeof DataCenterBaseFormSchema>
export type DataCenterDelete = z.infer<typeof DataCenterDeleteSchema>
export type DataCenterPost = z.infer<typeof DataCenterPostSchema>
export type DataCenterPut = z.infer<typeof DataCenterPutSchema>
export type ValidatePost = z.infer<typeof ValidatePostSchema>

// !TODO:
const apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiZ0xvY2F0aW9uQ29kZSI6ImJnTG9jbWtkbzMiLCJiZ0J1c2luZXNzQ29kZSI6ImJnQnVzVUpWcE8iLCJleHBpcmVzSW4iOiIxMGQiLCJpYXQiOjE2OTM5MDE1NDIsImV4cCI6MTY5NDc2NTU0Mn0.5m3Pv7p-ArTY8oKmAvAKY9amLfEEM0wUKGAIsG_zDkU'
const BaseHeaderSchema = z.object({
    Authorization: z.string().default(`Bearer ${apiKey}`),
    'x-business-code': z.string(),
})

export const DataCenterHeaderSchema = BaseHeaderSchema.merge(z.object({ path: z.enum([...DATACENTER_TABLES]) }))

export const ReferenceSearchQuerySchema = z.object({ search: z.string() })

export type DataCenterBaseResponse = {
    businessCode: string
    id: string
    code: string
    name: string
    default: boolean
    active: boolean
    createdAt: Date
    updatedAt: Date
}

export type RefCategory = Prettify<z.infer<typeof RefCategorySchema> & DataCenterBaseResponse>
export type RefDiscount = Prettify<z.infer<typeof RefDiscountSchema> & DataCenterBaseResponse>
export type RefPayment = Prettify<z.infer<typeof RefPaymentSchema> & DataCenterBaseResponse>
export type RefTerms = Prettify<z.infer<typeof RefTermsSchema> & DataCenterBaseResponse>
export type RefTaxType = Prettify<z.infer<typeof RefTaxTypeSchema> & DataCenterBaseResponse>

export type DataCenterGetResponse =
    | {
          path: 'category'
          data: RefCategory[]
          totalCount: number
      }
    | {
          path: 'discount'
          totalCount: number
          data: RefDiscount[]
      }
    | {
          path: 'payment'
          totalCount: number
          data: RefPayment[]
      }
    | {
          path: 'terms'
          totalCount: number
          data: RefTerms[]
      }
    | {
          path: 'tax-type'
          totalCount: number
          data: RefTaxType[]
      }
    | {
          path: 'common'
          totalCount: number
          data: DataCenterBaseResponse[]
      }
