import { z } from "nestjs-zod/z";
import { DataCenterBaseSchema } from "./data-center-common";

export const RefPaymentSchema = DataCenterBaseSchema.extend({
    operator: z.number().default(0).optional(),
    hide: z.boolean().default(false).optional(),
  });
  