import { z } from 'zod'
import { DataCenterBaseSchema } from "./data-center-common";

export const RefTermsSchema = DataCenterBaseSchema.extend({
    days: z.number().default(0).optional(),
  });
  