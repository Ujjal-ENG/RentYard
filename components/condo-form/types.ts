import { z } from "zod"

export interface PropertyType {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export interface Role {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export type PropertyTypeId = 'single-house' | 'apartments' | 'condominiums'
export type RoleId = 'landlord' | 'realtor' | 'property-management'

// Landlord Form Schema
export const landlordFormSchema = z.object({
  ownershipDoc: z.instanceof(File, { message: "Ownership document is required" }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  })
})

// Realtor Form Schema
export const realtorFormSchema = z.object({
  lenienceNumber: z.string().min(1, "Lenience number is required"),
  additionalDocuments: z.instanceof(File).optional(),
  agreementWithLandlord: z.instanceof(File, { message: "Agreement with landlord is required" }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  })
})

// Property Management Form Schema
export const propertyManagementFormSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  companyIdentifier: z.string().min(1, "Company identifier is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  agreementWithLandlordOwner: z.instanceof(File, { message: "Agreement with landlord/owner is required" }),
  country: z.string().min(1, "Country is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  aptSuitUnit: z.string().optional(),
  phoneNumber: z.string().min(1, "Phone number is required"),
  contactEmail: z.string().email("Valid email is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions"
  })
})

export type LandlordFormData = z.infer<typeof landlordFormSchema>
export type RealtorFormData = z.infer<typeof realtorFormSchema>
export type PropertyManagementFormData = z.infer<typeof propertyManagementFormSchema>