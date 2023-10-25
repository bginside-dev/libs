import { z } from 'zod'

export const AddressFormSchema = z.object({
    id: z.string().min(1, { message: 'ID is required.' }).default('create'),
    active: z.boolean().default(true),
    title: z.string().min(1, { message: 'Address Title is required.' }).default(''),
    typeId: z.string().min(1, { message: 'Address Type is required.' }).default(''),
    line1: z.string().min(1, { message: 'Address Line 1 is required.' }).default(''),
    line2: z.string().nullish(),
    cityTown: z.string().nullish(),
    stateProvince: z.string().nullish(),
    countryId: z.string().nullish(),
    postalCode: z.string().nullish(),
    email: z.string().nullish(),
    contactNo: z.string().nullish(),
    faxNo: z.string().nullish(),
    billingAdd: z.boolean().default(false),
    shippingAdd: z.boolean().default(false),
})

export const AddressPostSchema = AddressFormSchema.omit({ id: true })
export const AddressUpdateSchema = AddressFormSchema
export const AddressDeleteSchema = z.object({ id: z.string() })
