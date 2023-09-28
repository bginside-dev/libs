import { z } from 'nestjs-zod/z';
import * as nestjs_zod from 'nestjs-zod';

declare const DataCenterBaseSchema: z.ZodObject<{
    code: z.ZodString;
    name: z.ZodString;
    default: z.ZodDefault<z.ZodBoolean>;
    active: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    code: string;
    name: string;
    default: boolean;
    active: boolean;
}, {
    code: string;
    name: string;
    default?: boolean | undefined;
    active?: boolean | undefined;
}>;

declare const DataCenterDeleteSchema: z.ZodObject<{
    key: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key: string;
}, {
    key: string;
}>;
declare const DataCenterDeleteDto_base: nestjs_zod.ZodDto<{
    key: string;
}, z.ZodObjectDef<{
    key: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    key: string;
}>;
declare class DataCenterDeleteDto extends DataCenterDeleteDto_base {
}

declare const DataCenterPostSchema: z.ZodObject<{
    values: z.ZodString;
}, "strip", z.ZodTypeAny, {
    values: string;
}, {
    values: string;
}>;
declare const DataCenterPostDto_base: nestjs_zod.ZodDto<{
    values: string;
}, z.ZodObjectDef<{
    values: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    values: string;
}>;
declare class DataCenterPostDto extends DataCenterPostDto_base {
}

declare const DataCenterPutSchema: z.ZodObject<{
    key: z.ZodString;
    values: z.ZodString;
}, "strip", z.ZodTypeAny, {
    values: string;
    key: string;
}, {
    values: string;
    key: string;
}>;
declare const DataCenterPutDto_base: nestjs_zod.ZodDto<{
    values: string;
    key: string;
}, z.ZodObjectDef<{
    key: z.ZodString;
    values: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    values: string;
    key: string;
}>;
declare class DataCenterPutDto extends DataCenterPutDto_base {
}

declare const ValidatePostSchema: z.ZodObject<{
    value: z.ZodString;
    path: z.ZodString;
}, "strip", z.ZodTypeAny, {
    path: string;
    value: string;
}, {
    path: string;
    value: string;
}>;
declare const ValidatePostDto_base: nestjs_zod.ZodDto<{
    path: string;
    value: string;
}, z.ZodObjectDef<{
    value: z.ZodString;
    path: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    path: string;
    value: string;
}>;
declare class ValidatePostDto extends ValidatePostDto_base {
}

declare const RefCategorySchema: z.ZodObject<{
    code: z.ZodString;
    name: z.ZodString;
    default: z.ZodDefault<z.ZodBoolean>;
    active: z.ZodDefault<z.ZodBoolean>;
    colorCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    code: string;
    name: string;
    default: boolean;
    active: boolean;
    colorCode?: string | undefined;
}, {
    code: string;
    name: string;
    default?: boolean | undefined;
    active?: boolean | undefined;
    colorCode?: string | undefined;
}>;

declare const RefDiscountSchema: z.ZodObject<{
    code: z.ZodString;
    name: z.ZodString;
    default: z.ZodDefault<z.ZodBoolean>;
    active: z.ZodDefault<z.ZodBoolean>;
    discRate: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    lessTax: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    senior: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    promo: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    claim: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    hide: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    code: string;
    name: string;
    default: boolean;
    active: boolean;
    discRate?: number | undefined;
    lessTax?: boolean | undefined;
    senior?: boolean | undefined;
    promo?: boolean | undefined;
    claim?: boolean | undefined;
    hide?: boolean | undefined;
}, {
    code: string;
    name: string;
    default?: boolean | undefined;
    active?: boolean | undefined;
    discRate?: number | undefined;
    lessTax?: boolean | undefined;
    senior?: boolean | undefined;
    promo?: boolean | undefined;
    claim?: boolean | undefined;
    hide?: boolean | undefined;
}>;

declare const RefPaymentSchema: z.ZodObject<{
    code: z.ZodString;
    name: z.ZodString;
    default: z.ZodDefault<z.ZodBoolean>;
    active: z.ZodDefault<z.ZodBoolean>;
    operator: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    hide: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    code: string;
    name: string;
    default: boolean;
    active: boolean;
    operator?: number | undefined;
    hide?: boolean | undefined;
}, {
    code: string;
    name: string;
    default?: boolean | undefined;
    active?: boolean | undefined;
    operator?: number | undefined;
    hide?: boolean | undefined;
}>;

declare const RefTermsSchema: z.ZodObject<{
    code: z.ZodString;
    name: z.ZodString;
    default: z.ZodDefault<z.ZodBoolean>;
    active: z.ZodDefault<z.ZodBoolean>;
    days: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    code: string;
    name: string;
    default: boolean;
    active: boolean;
    days?: number | undefined;
}, {
    code: string;
    name: string;
    default?: boolean | undefined;
    active?: boolean | undefined;
    days?: number | undefined;
}>;

export { DataCenterBaseSchema, DataCenterDeleteDto, DataCenterDeleteSchema, DataCenterPostDto, DataCenterPostSchema, DataCenterPutDto, DataCenterPutSchema, RefCategorySchema, RefDiscountSchema, RefPaymentSchema, RefTermsSchema, ValidatePostDto, ValidatePostSchema };
