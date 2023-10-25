import { z } from 'zod'

export const ContactEmailFormSchema = z.object({
    id: z.string(),
    email: z.string(),
    isPrimary: z.boolean().default(false),
})

export const ContactPhoneFormSchema = z.object({
    id: z.string(),
    phone: z.string(),
    isPrimary: z.boolean().default(false),
})

export const ContactFormSchema = z.object({
    id: z.string().min(1, { message: 'ID is required.' }),
    firstName: z.string().min(1, { message: 'First Name is required.' }).default(''),
    middleName: z.string().nullish(),
    lastName: z.string().min(1, { message: 'Last Name is required.' }).default(''),
    active: z.boolean().default(true),
    salutationId: z.string().nullish(),
    designationId: z.string().nullish(),
    genderId: z.string().nullish(),
    companyName: z.string().nullish(),
    address: z.string().nullish(),
    email: z.array(ContactEmailFormSchema).optional(),
    phoneNo: z.array(ContactPhoneFormSchema).optional(),
})

export const ContactPostSchema = ContactFormSchema.omit({ id: true })
export const ContactUpdateSchema = ContactFormSchema
export const ContactDeleteSchema = z.object({ id: z.string() })
