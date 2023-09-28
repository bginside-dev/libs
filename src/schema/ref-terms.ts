import { z } from "nestjs-zod/z";
import { DataCenterBaseSchema } from "./data-center-common";

export const RefTermsSchema = DataCenterBaseSchema.extend({
    days: z.number().default(0).optional(),
  });
  