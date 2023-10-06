import { z } from "nestjs-zod/z";
import { DataCenterBaseSchema } from "../schema";

export type DataCenterBaseDto = z.infer<typeof DataCenterBaseSchema>

