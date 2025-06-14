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
  lenienceNumber: z
    .string()
    .min(1, "License number is required")
    .regex(/^\d+$/, "License number must contain only numbers")
    .min(6, "License number must be at least 6 digits")
    .max(20, "License number must not exceed 20 digits"),
  
  additionalDocuments: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.type === "application/pdf",
      "Only PDF files are allowed"
    ),
  
  agreementWithLandlord: z
    .instanceof(File, { message: "Agreement with landlord is required" })
    .refine(
      (file) => file.type === "application/pdf",
      "Only PDF files are allowed"
    ),
  
  acceptTerms: z
    .boolean()
    .refine(val => val === true, "You must accept terms and conditions")
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


export const condoFormSchema = z.object({
  propertyAddress: z.string().min(1, "Property address is required"),
  leasingInfo: z.string().min(1, "Leasing information is required"),
  charges: z.string().min(1, "Charges information is required"),
  rentFrequencyPaymentReminder: z.string().min(1, "Rent frequency & payment reminder is required"),
  petFees: z.string().optional(),
  parking: z.string().optional(),
  nearestEducationalInstitution: z.string().optional(),
  nearestStations: z.string().optional(),
  applicationAgreement: z.string().optional(),
  nearestLandmark: z.string().optional(),
  aboutProperty: z.string().optional(),
  utilitiesProvider: z.string().optional(),
  communityAmenityFeatures: z.string().optional(),
  featuredPhotos: z.array(z.instanceof(File)).optional(),
  morePhotos: z.array(z.instanceof(File)).optional(),
 propertyName: z.string().min(1, "Required"),
  totalUnit: z.string().min(1, "Required"),
  propertyWebsite: z.string().url().optional(),
  country: z.string().min(1, "Required"),
  streetAddress: z.string().min(1, "Required"),
  aptSuite: z.string().optional(),
  city: z.string().min(1, "Required"),
  state: z.string().min(1, "Required"),
  zipCode: z.string().min(1, "Required"),
  leasingManagerName: z.string().min(1, "Required"),
  leasingPhone: z.string().min(1, "Required"),
  leasingEmail: z.string().email("Invalid email"),
})

export type CondoFormData = z.infer<typeof condoFormSchema>

export interface FormFieldProps {
  name: keyof CondoFormData
  label: string
  placeholder?: string
  required?: boolean
  recommended?: boolean
  type?: 'input' | 'textarea'
}

export const propertyAddressSchema = z.object({
  propertyName: z.string().min(1, "Property name is required"),
  totalApartmentUnit: z.string().min(1, "Total apartment unit is required"),
  propertyWebsite: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  aptSuiteUnit: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip code is required")
})

export const leasingInfoSchema = z.object({
  leasingManagerName: z.string().min(1, "Leasing manager name is required"),
  leasingManagerPhone: z.string().min(1, "Phone number is required"),
  leasingManagerEmail: z.string().email("Invalid email address"),
  addressSameAsProperty: z.boolean().default(false)
})

export const chargesSchema = z.object({
  applicationFee: z.string().min(1, "Application fee is required"),
  applicantType: z.string().min(1, "Applicant type is required"),
  adminFee: z.string().min(1, "Admin fee is required")
})

export const rentFrequencySchema = z.object({
  rentPaymentFrequency: z.string().min(1, "Rent payment frequency is required"),
  rentReminderDate: z.string().min(1, "Rent reminder date is required"),
  rentDueDate: z.string().min(1, "Rent due date is required")
})


// Amenities data
export const amenitiesData = [
  { id: 'air-conditioning', label: 'Air conditioning', icon: '❄️' },
  { id: 'cable-ready', label: 'Cable ready', icon: '📺' },
  { id: 'ceiling-fan', label: 'Ceiling fan', icon: '🌀' },
  { id: 'high-ceilings', label: 'High ceilings', icon: '🏛️' },
  { id: 'private-balcony', label: 'Private balcony', icon: '🏠' },
  { id: 'refrigerator', label: 'Refrigerator', icon: '❄️' },
  { id: 'wooded-views', label: 'Wooded views', icon: '🌲' },
  { id: 'wd-hookup', label: 'W/D hookup', icon: '🔌' },
  { id: 'hardwood-floor', label: 'Hardwood Floor (home)', icon: '🪵' },
  { id: 'hardwood-floor-2', label: 'Hardwood Floor (home)', icon: '🪵' },
  { id: 'fireplace', label: 'Fireplace (home)', icon: '🔥' },
  { id: 'first-aid-kit', label: 'First aid kit', icon: '🏥' },
  { id: 'carbon-monoxide', label: 'Carbon monoxide alarm', icon: '⚠️' },
  { id: 'expanded-patios', label: 'Expanded patios (home)', icon: '🏡' },
  { id: 'free-parking', label: 'Free parking on premises', icon: '🅿️' },
  { id: 'fire-extinguisher', label: 'Fire extinguisher', icon: '🧯' },
]
