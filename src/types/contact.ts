export type ContactResponse = {
    salutation: {
        code: string
        id: string
        active: boolean
        name: string
    } | null
    designation: {
        code: string
        id: string
        active: boolean
        name: string
    } | null
    gender: {
        code: string
        id: string
        active: boolean
        name: string
    } | null
} & {
    businessCode: string
    id: string
    firstName: string
    middleName: string | null
    lastName: string
    active: boolean
    salutationId: string | null
    designationId: string | null
    genderId: string | null
    companyName: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
}

export type ContactPostResponse = {
    email: {
        id: string
        email: string
        isPrimary: boolean
        contactId: string
    }[]
    phoneNo: {
        id: string
        phone: string
        isPrimary: boolean
        contactId: string
    }[]
} & {
    businessCode: string
    id: string
    firstName: string
    middleName: string | null
    lastName: string
    active: boolean
    salutationId: string | null
    designationId: string | null
    genderId: string | null
    companyName: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
}

export type ContactPutResponse = Omit<ContactPostResponse, 'phoneNo' | 'email'>

export type ContactGetById = {
    salutation: {
        id: string
        active: boolean
        code: string
        name: string
    } | null
    designation: {
        id: string
        active: boolean
        code: string
        name: string
    } | null
    gender: {
        id: string
        active: boolean
        code: string
        name: string
    } | null
} & {
    businessCode: string
    id: string
    firstName: string
    middleName: string | null
    lastName: string
    active: boolean
    salutationId: string | null
    designationId: string | null
    genderId: string | null
    companyName: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
}

export type ContactAsRef = {
    id: string
    code: string
    name: string
    firstName: string
    middleName: string | null
    lastName: string
    companyName: string | null
    address: string | null
    salutation: {
        id: string
        code: string
        name: string
    } | null
    designation: {
        id: string
        code: string
        name: string
    } | null
    gender: {
        id: string
        code: string
        name: string
    } | null
    email: {
        id: string
        email: string
        isPrimary: boolean
    }[]
    phoneNo: {
        id: string
        isPrimary: boolean
        phone: string
    }[]
}
