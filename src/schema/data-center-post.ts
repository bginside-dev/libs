import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const DataCenterPostSchema = z.object({
  values: z.string(),
});

export class DataCenterPostDto extends createZodDto(DataCenterPostSchema) {}
