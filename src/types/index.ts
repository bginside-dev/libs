import * as dto from "../dto"

export type Prettify<T> = {
    [K in keyof T]: T[K]
  } & {}


export type DataCenterDelete = Prettify<dto.DataCenterDeleteDto>
export type DataCenterPost = Prettify<dto.DataCenterPostDto>
export type DataCenterPut = Prettify<dto.DataCenterPutDto>
export type DataCenterQuery = Prettify<dto.DataCenterPrismaQueryDto>
export type DataCenterValidate = Prettify<dto.ValidatePostDto>
export type RefTerms = Prettify<dto.RefTermsDto>
export type RefPayment = Prettify<dto.RefPaymentDto>
export type RefCategory = Prettify<dto.RefCategoryDto>
export type RefDiscount = Prettify<dto.RefDiscountDto>
export type PortalAuth = {
  businessCode: string,
  locationCode: string,
  app: 'empire' | 'empire-core'
}
