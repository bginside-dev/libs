import { z } from 'zod'
import { DataCenterBaseSchema } from "./data-center-common";

export const RefCategorySchema = DataCenterBaseSchema.extend({
    colorCode: z.string().optional(),
  });