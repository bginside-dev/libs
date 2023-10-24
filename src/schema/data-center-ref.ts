import { z } from 'zod'
import { DataCenterBaseSchema } from './data-center-common'

export const RefCategorySchema = DataCenterBaseSchema.extend({
    colorCode: z.string().optional(),
})

export const RefDiscountSchema = DataCenterBaseSchema.extend({
    discRate: z.number().default(0).optional(),
    lessTax: z.boolean().default(false).optional(),
    senior: z.boolean().default(false).optional(),
    promo: z.boolean().default(false).optional(),
    claim: z.boolean().default(false).optional(),
    hide: z.boolean().default(false).optional(),
})

export const RefPaymentSchema = DataCenterBaseSchema.extend({
    operator: z.number().default(0).optional(),
    hide: z.boolean().default(false).optional(),
})

export const RefTermsSchema = DataCenterBaseSchema.extend({
    days: z.number().default(0).optional(),
})

export const RefTaxTypeSchema = DataCenterBaseSchema.extend({
    taxRate: z.number().default(0),
    taxGroup: z.number().default(0).optional(),
})
