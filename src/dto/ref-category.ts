import { createZodDto } from "nestjs-zod";
import { RefCategorySchema } from "../schema/ref-category";



export class RefCategoryDto extends createZodDto(RefCategorySchema) {}