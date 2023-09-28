import { createZodDto } from "nestjs-zod";
import { RefTermsSchema } from "../schema/ref-terms";

export class RefTermsDto extends createZodDto(RefTermsSchema) {}