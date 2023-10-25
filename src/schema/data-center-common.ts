import { z } from 'zod'

export const DataCenterBaseFormSchema = z.object({
    code: z.string().min(1, { message: 'Code is too short' }).max(30, { message: 'Code is too long.' }),
    name: z.string().min(1, { message: 'Name is too short ' }).max(50, { message: 'Name is too long' }),
    default: z.boolean().default(false),
    active: z.boolean().default(true),
})

export const DataCenterDeleteSchema = z.object({ key: z.string() })

const PostPutDataCenterSchema = DataCenterBaseFormSchema.extend({ id: z.string() })

export const DataCenterPostSchema = z.object({ values: z.string().or(PostPutDataCenterSchema) })

export const DataCenterPutSchema = z.object({ key: z.string(), values: z.string().or(PostPutDataCenterSchema) })

export const ValidatePostSchema = z.object({ value: z.string(), path: z.string() })
