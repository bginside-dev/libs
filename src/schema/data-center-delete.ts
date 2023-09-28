import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const DataCenterDeleteSchema = z.object({
  key: z.string(),
});

export class DataCenterDeleteDto extends createZodDto(DataCenterDeleteSchema) {}
