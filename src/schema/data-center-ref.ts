import { z } from 'zod'
import { DataCenterBaseFormSchema } from './data-center-common'

export const RefCategorySchema = DataCenterBaseFormSchema.extend({
    colorCode: z.string().optional(),
})

export const RefDiscountSchema = DataCenterBaseFormSchema.extend({
    discRate: z.number().default(0).optional(),
    lessTax: z.boolean().default(false).optional(),
    senior: z.boolean().default(false).optional(),
    promo: z.boolean().default(false).optional(),
    claim: z.boolean().default(false).optional(),
    hide: z.boolean().default(false).optional(),
})

export const RefPaymentSchema = DataCenterBaseFormSchema.extend({
    operator: z.number().default(0).optional(),
    hide: z.boolean().default(false).optional(),
})

export const RefTermsSchema = DataCenterBaseFormSchema.extend({
    days: z.number().default(0).optional(),
})

export const RefTaxTypeSchema = DataCenterBaseFormSchema.extend({
    taxRate: z.number().default(0),
    taxGroup: z.number().default(0).optional(),
})
