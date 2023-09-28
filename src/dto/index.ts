import { DataCenterDeleteDto } from './data-center-delete';
import { DataCenterPostDto } from './data-center-post';
import { DataCenterPutDto } from './data-center-put';
import { ValidatePostDto } from './data-center-validate';
import { RefCategoryDto } from './ref-category';
import { RefDiscountDto } from './ref-discount';
import { RefTermsDto } from './ref-terms';

export type PrettifyClass<T> = {
    [K in keyof T]: T[K]
  } & {}

export type RefTerms = PrettifyClass<RefTermsDto>
export type RefDiscount = PrettifyClass<RefDiscountDto>
export type RefCategory = PrettifyClass<RefCategoryDto>
export type RefPayment = PrettifyClass<RefTermsDto>
export type DataCenterPost = PrettifyClass<DataCenterPostDto>
export type DataCenterDelete = PrettifyClass<DataCenterDeleteDto>
export type DataCenterPut = PrettifyClass<DataCenterPutDto>
export type DataCenterValidate = PrettifyClass<ValidatePostDto>