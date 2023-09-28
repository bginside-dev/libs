import { z } from "nestjs-zod/z";
import { DataCenterBaseSchema } from "./data-center-base";

export const RefDiscountSchema = DataCenterBaseSchema.extend({
    discRate: z.number().default(0).optional(),
    lessTax: z.boolean().default(false).optional(),
    senior: z.boolean().default(false).optional(),
    promo: z.boolean().default(false).optional(),
    claim: z.boolean().default(false).optional(),
    hide: z.boolean().default(false).optional(),
  });