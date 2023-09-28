import { z } from 'nestjs-zod/z';

export const DataCenterBaseSchema = z.object({
    code: z.string().min(1, { message: 'Code is too short' }).max(30, { message: 'Code is too long.' }),
    name: z.string().min(1, { message: 'Name is too short ' }).max(50, { message: 'Name is too long' }),
    default: z.boolean().default(false),
    active: z.boolean().default(true),
});
