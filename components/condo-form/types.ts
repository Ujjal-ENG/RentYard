import { z } from "zod"

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