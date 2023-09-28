import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const ValidatePostSchema = z.object({
  value: z.string(),
  path: z.string(),
});

export class ValidatePostDto extends createZodDto(ValidatePostSchema) {}
