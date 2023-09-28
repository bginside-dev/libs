import { createZodDto } from 'nestjs-zod';
import { DataCenterPostSchema } from '../schema/data-center-common';



export class DataCenterPostDto extends createZodDto(DataCenterPostSchema) {}
