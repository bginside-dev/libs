import { z } from "zod"
import { DataCenterBaseSchema } from "../schema";

export type DataCenterBaseDto = z.infer<typeof DataCenterBaseSchema>

