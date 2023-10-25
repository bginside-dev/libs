import { z } from 'zod'

export const DataCenterPrismaQuerySchema = z.object({
    skip: z
        .preprocess((val) => Number(val), z.number())
        .default(0)
        .optional(),
    take: z
        .preprocess((val) => Number(val), z.number())
        .default(10)
        .optional(),
    filter: z
        .string()
        .transform((val) => JSON.parse(val))
        .optional(),
    group: z
        .string()
        .transform((val) => JSON.parse(val))
        .optional(),
    sort: z
        .string()
        .transform((val) => JSON.parse(val))
        .optional(),
    requireTotalCount: z.coerce.boolean().default(true).optional(),
})

export const ReferenceSearchQuerySchema = z.object({ search: z.string() })
