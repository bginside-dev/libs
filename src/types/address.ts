export type AddressAsRef = {
    code: string
    name: string
    id: string
    active: boolean
    title: string
    line1: string
    line2: string | null
    cityTown: string | null
    stateProvince: string | null
    postalCode: string | null
    email: string | null
    contactNo: string | null
    faxNo: string | null
    billingAdd: boolean
    shippingAdd: boolean
    type: {
        id: string
        code: string
        name: string
    } | null
    country: {
        id: string
        code: string
        name: string
    } | null
}

export type AddressById = {
    type: {
        code: string
        id: string
        active: boolean
        name: string
    } | null
    country: {
        code: string
        id: string
        active: boolean
        name: string
    } | null
} & {
    businessCode: string
    id: string
    active: boolean
    title: string
    typeId: string
    line1: string
    line2: string | null
    cityTown: string | null
    stateProvince: string | null
    countryId: string | null
    postalCode: string | null
    email: string | null
    contactNo: string | null
    faxNo: string | null
    billingAdd: boolean
    shippingAdd: boolean
    createdAt: Date
    updatedAt: Date
}

export type AddressResponse = Omit<AddressById, 'type' | 'country'>

export type AddressGetResponse = ({
    type: {
        code: string
        name: string
        id: string
        active: boolean
    } | null
    country: {
        code: string
        name: string
        id: string
        active: boolean
    } | null
} & {
    businessCode: string
    id: string
    active: boolean
    title: string
    typeId: string
    line1: string
    line2: string | null
    cityTown: string | null
    stateProvince: string | null
    countryId: string | null
    postalCode: string | null
    email: string | null
    contactNo: string | null
    faxNo: string | null
    billingAdd: boolean
    shippingAdd: boolean
    createdAt: Date
    updatedAt: Date
})[]
