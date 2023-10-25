import { z } from 'zod'
import { ItemFormSchema } from '../schema'

export type ItemForm = z.infer<typeof ItemFormSchema>

export type ItemPostResponse = Pick<ItemForm, 'id'>
export type ItemUpdateResponse = { message: string }
export type ItemDeleteResponse = { message: string }
export type ItemGetResponse = {
    businessCode: string
    id: string
    code: string
    name: string
    barcode: string | null
    active: boolean
    typeId: string
    categoryId: string | null
    brandId: string | null
    details: string | null
    manufacturerId: string | null
    manufacturerCode: string | null
    divisionId: string | null
    familyId: string | null
    genericTypeId: string | null
    genericName: string | null
    dosage: string | null
    indication: string | null
    isInventoryItem: boolean
    preventNegativeQty: boolean
    stockOutWarning: boolean
    netWeight: number | null
    grossWeight: number | null
    unitVolume: number | null
    autoCreateNewBatch: boolean
    hasSerialNo: boolean
    hasLotNo: boolean
    hasExpiryDate: boolean
    expirationDays: number | null
    costingMethodId: string | null
    standardCost: number
    unitCost: number
    isPurchaseItem: boolean
    purchaseUOMId: string | null
    purchaseTaxTypeId: string | null
    principalId: string | null
    salesUOMId: string | null
    salesTaxTypeId: string | null
    unitPrice: number
    markup: number
    standardPrice: number
    salesItemName: string | null
    isSaleableItem: boolean
    allowSalesDiscount: boolean
    allowSCPWD: boolean
    hasServiceCharge: boolean
    scPercentage: number | null
    leadTime: number | null
    safetyStock: number | null
    maxInv: number | null
    reOrderPoint: number | null
    reStockQty: number | null
    minOrder: number | null
    maxOrder: number | null
}
