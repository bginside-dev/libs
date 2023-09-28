import * as dto from "../dto"

export type PrettifyClass<T> = {
    [K in keyof T]: T[K]
  } & {}


export type DataCenterDelete = PrettifyClass<dto.DataCenterDeleteDto>
export type RefTerms = PrettifyClass<dto.RefTermsDto>
export type RefPayment = PrettifyClass<dto.RefPaymentDto>
export type RefCategory = PrettifyClass<dto.RefCategoryDto>
export type RefDiscount = PrettifyClass<dto.RefDiscountDto>