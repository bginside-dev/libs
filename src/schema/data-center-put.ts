import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const DataCenterPutSchema = z.object({
  key: z.string(),
  values: z.string(),
});

export class DataCenterPutDto extends createZodDto(DataCenterPutSchema) {}
