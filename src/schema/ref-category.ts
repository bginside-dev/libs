import { z } from "nestjs-zod/z";
import { DataCenterBaseSchema } from "./data-center-common";

export const RefCategorySchema = DataCenterBaseSchema.extend({
    colorCode: z.string().optional(),
  });