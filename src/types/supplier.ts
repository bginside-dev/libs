export type SupplierGetResponse = {
    group: {
        code: string
        id: string
        name: string
        active: boolean
    }
    class: {
        code: string
        id: string
        name: string
        active: boolean
    }
    contact: {
        id: string
        firstName: string
        lastName: string
    } | null
} & {
    businessCode: string
    id: string
    code: string
    name: string
    active: boolean
    groupId: string
    classId: string
    details: string | null
    tradeName: string | null
    tinNo: string | null
    website: string | null
    contactId: string | null
    addressId: string | null
    priceList: string | null
    discountCode: string | null
    taxLiable: boolean | null
    taxType: string | null
    createdAt: Date
    updatedAt: Date
}

export type SupplierPostResponse = Omit<SupplierGetResponse, 'group' | 'class' | 'contact'>

export type SupplierGetById = {
    group: {
        name: string
        code: string
        id: string
        active: boolean
    }
    class: {
        name: string
        code: string
        id: string
        active: boolean
    }
    contact: {
        code: string | undefined
        name: string | null
        email: string
        contactNo: string
        salutation?:
            | {
                  name: string
              }
            | null
            | undefined
        id?: string | undefined
        firstName?: string | undefined
        lastName?: string | undefined
        companyName?: string | null | undefined
    }
    address: {
        code: string | undefined
        name: string | null
        country?:
            | {
                  name: string
              }
            | null
            | undefined
        type?:
            | {
                  name: string
              }
            | null
            | undefined
        id?: string | undefined
        title?: string | undefined
        line1?: string | undefined
        line2?: string | null | undefined
        cityTown?: string | null | undefined
        stateProvince?: string | null | undefined
        postalCode?: string | null | undefined
        billingAdd?: boolean | undefined
        shippingAdd?: boolean | undefined
    }
    businessCode: string
    id: string
    code: string
    name: string
    active: boolean
    groupId: string
    classId: string
    details: string | null
    tradeName: string | null
    tinNo: string | null
    website: string | null
    contactId: string | null
    addressId: string | null
    priceList: string | null
    discountCode: string | null
    taxLiable: boolean | null
    taxType: string | null
    createdAt: Date
    updatedAt: Date
}
