import { z } from "nestjs-zod/z";
import { DataCenterBaseSchema } from "./data-center-base";

export const RefCategorySchema = DataCenterBaseSchema.extend({
    colorCode: z.string().optional(),
  });