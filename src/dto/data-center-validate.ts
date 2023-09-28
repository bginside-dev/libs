import { createZodDto } from 'nestjs-zod';
import { ValidatePostSchema } from '../schema/data-center-common';

export class ValidatePostDto extends createZodDto(ValidatePostSchema) {}
