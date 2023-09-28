import * as nestjs_zod_z from 'nestjs-zod/z';
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
declare const DataCenterPostSchema: z.ZodObject<{
    values: z.ZodString;
}, "strip", z.ZodTypeAny, {
    values: string;
}, {
    values: string;
}>;
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

declare const DataCenterDeleteDto_base: nestjs_zod.ZodDto<{
    key: string;
}, nestjs_zod_z.ZodObjectDef<{
    key: nestjs_zod_z.ZodString;
}, "strip", nestjs_zod_z.ZodTypeAny>, {
    key: string;
}>;
declare class DataCenterDeleteDto extends DataCenterDeleteDto_base {
}

declare const RefDiscountDto_base: nestjs_zod.ZodDto<{
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
}, nestjs_zod_z.ZodObjectDef<{
    code: nestjs_zod_z.ZodString;
    name: nestjs_zod_z.ZodString;
    default: nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>;
    active: nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>;
    discRate: nestjs_zod_z.ZodOptional<nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodNumber>>;
    lessTax: nestjs_zod_z.ZodOptional<nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>>;
    senior: nestjs_zod_z.ZodOptional<nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>>;
    promo: nestjs_zod_z.ZodOptional<nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>>;
    claim: nestjs_zod_z.ZodOptional<nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>>;
    hide: nestjs_zod_z.ZodOptional<nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>>;
}, "strip", nestjs_zod_z.ZodTypeAny>, {
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
declare class RefDiscountDto extends RefDiscountDto_base {
}

declare const RefPaymentDto_base: nestjs_zod.ZodDto<{
    code: string;
    name: string;
    default: boolean;
    active: boolean;
    operator?: number | undefined;
    hide?: boolean | undefined;
}, nestjs_zod_z.ZodObjectDef<{
    code: nestjs_zod_z.ZodString;
    name: nestjs_zod_z.ZodString;
    default: nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>;
    active: nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>;
    operator: nestjs_zod_z.ZodOptional<nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodNumber>>;
    hide: nestjs_zod_z.ZodOptional<nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>>;
}, "strip", nestjs_zod_z.ZodTypeAny>, {
    code: string;
    name: string;
    default?: boolean | undefined;
    active?: boolean | undefined;
    operator?: number | undefined;
    hide?: boolean | undefined;
}>;
declare class RefPaymentDto extends RefPaymentDto_base {
}

declare const RefCategoryDto_base: nestjs_zod.ZodDto<{
    code: string;
    name: string;
    default: boolean;
    active: boolean;
    colorCode?: string | undefined;
}, nestjs_zod_z.ZodObjectDef<{
    code: nestjs_zod_z.ZodString;
    name: nestjs_zod_z.ZodString;
    default: nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>;
    active: nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>;
    colorCode: nestjs_zod_z.ZodOptional<nestjs_zod_z.ZodString>;
}, "strip", nestjs_zod_z.ZodTypeAny>, {
    code: string;
    name: string;
    default?: boolean | undefined;
    active?: boolean | undefined;
    colorCode?: string | undefined;
}>;
declare class RefCategoryDto extends RefCategoryDto_base {
}

declare const RefTermsDto_base: nestjs_zod.ZodDto<{
    code: string;
    name: string;
    default: boolean;
    active: boolean;
    days?: number | undefined;
}, nestjs_zod_z.ZodObjectDef<{
    code: nestjs_zod_z.ZodString;
    name: nestjs_zod_z.ZodString;
    default: nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>;
    active: nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodBoolean>;
    days: nestjs_zod_z.ZodOptional<nestjs_zod_z.ZodDefault<nestjs_zod_z.ZodNumber>>;
}, "strip", nestjs_zod_z.ZodTypeAny>, {
    code: string;
    name: string;
    default?: boolean | undefined;
    active?: boolean | undefined;
    days?: number | undefined;
}>;
declare class RefTermsDto extends RefTermsDto_base {
}

type PrettifyClass<T> = {
    [K in keyof T]: T[K];
} & {};
type DataCenterDelete = PrettifyClass<DataCenterDeleteDto>;
type RefTerms = PrettifyClass<RefTermsDto>;
type RefPayment = PrettifyClass<RefPaymentDto>;
type RefCategory = PrettifyClass<RefCategoryDto>;
type RefDiscount = PrettifyClass<RefDiscountDto>;

export { DataCenterBaseSchema, DataCenterDelete, DataCenterDeleteSchema, DataCenterPostSchema, DataCenterPutSchema, RefCategory, RefDiscount, RefPayment, RefTerms, ValidatePostSchema };
