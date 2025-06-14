"use client"

import { GenericModal } from "@/components/GenericModal"
import LeasingInfo from "@/components/condo-form/modal/LeasingInfo"
import { PropertyAddressForm } from "@/components/condo-form/modal/PropertyAddressFormModal"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { PhotoUpload } from "../../components/condo-form/PhotoUpload"
import { CondoFormData, condoFormSchema } from "../../components/condo-form/types"
import { CustomFormField } from "../../elements/input/FormField"

export default function CondoForm() {

  const [modalType, setModalType] = useState<null | string>(null)

  const form = useForm<CondoFormData>({
    resolver: zodResolver(condoFormSchema),
    defaultValues: {
      propertyAddress: "",
      leasingInfo: "",
      charges: "",
      rentFrequencyPaymentReminder: "",
      petFees: "",
      parking: "",
      nearestEducationalInstitution: "",
      nearestStations: "",
      applicationAgreement: "",
      nearestLandmark: "",
      aboutProperty: "",
      utilitiesProvider: "",
      communityAmenityFeatures: "",
    },
  })

  const onSubmit = (data: CondoFormData) => {
    console.log("Form submitted:", data)
  }

  const handlePhotoUpload = (files: File[], type: 'featured' | 'more' | 'cover') => {
    console.log(`${type} photos uploaded:`, files)
  }

  const handleBack = () => {
    // Implement your back navigation logic here, e.g.:
    window.history.back();
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Add condominiums information</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomFormField
            control={form.control}
            name="propertyAddress"
            label="Property address"
            required
            error={form.formState.errors.propertyAddress}
            onAddClick={() => setModalType("propertyAddress")}
            />

            <CustomFormField
            control={form.control}
            name="petFees"
              label="Pet fees"
              required
            error={form.formState.errors.petFees}
            onAddClick={() => setModalType("petFees")}
                  />
            
            <CustomFormField
              control={form.control}
              name="leasingInfo"
              label="Leasing info"
              required
              error={form.formState.errors.leasingInfo}
              onAddClick={() => setModalType("leasingInfo")}
            />
            
            <CustomFormField
              control={form.control}
              name="parking"
              label="Parking"
              error={form.formState.errors.parking}
            />
            
            <CustomFormField
              control={form.control}
              name="charges"
              label="Charges"
              required
              error={form.formState.errors.charges}
            />
            
            <CustomFormField
              control={form.control}
              name="nearestEducationalInstitution"
              label="Nearest educational institution"
              recommended
              error={form.formState.errors.nearestEducationalInstitution}
            />
            
            <CustomFormField
              control={form.control}
              name="rentFrequencyPaymentReminder"
              label="Rent frequency & payment reminder"
              required
              error={form.formState.errors.rentFrequencyPaymentReminder}
            />
            
            <CustomFormField
              control={form.control}
              name="nearestStations"
              label="Nearest stations"
              recommended
              error={form.formState.errors.nearestStations}
            />
            
            <CustomFormField
              control={form.control}
              name="applicationAgreement"
              label="Application agreement"
              error={form.formState.errors.applicationAgreement}
            />
            
            <CustomFormField
              control={form.control}
              name="nearestLandmark"
              label="Nearest landmark"
              recommended
              error={form.formState.errors.nearestLandmark}
            />
            
            <CustomFormField
              control={form.control}
              name="aboutProperty"
              label="About the property"
             
              error={form.formState.errors.aboutProperty}
            />
            
            <CustomFormField
              control={form.control}
              name="utilitiesProvider"
              label="Utilities provider"
              recommended
              error={form.formState.errors.utilitiesProvider}
            />
     
            <CustomFormField
              control={form.control}
              name="communityAmenityFeatures"
              label="Community's amenity/features"
              recommended
       
              error={form.formState.errors.communityAmenityFeatures}
            />
         
          </div>



          {/* Photo Upload Sections */}
          <div className="space-y-8">
            <div className="rounded-lg border-2 border-gray-200">
              <div className="text-lg font-normal border-b-2 p-5 text-[#6F6C6A] bg-[#F4F4F4] rounded-t-lg border-gray-200">
                Property gallery
                <span className="text-sm font-normal text-gray-500">(Its not unit photos)*</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 p-6">
                <PhotoUpload
                  title="Featured photos*"
                  onUpload={(files) => handlePhotoUpload(files, 'featured')}
                  isCover={true}
                />
                
                <PhotoUpload
                  title="More photos"
                  subtitle="(optional)"
                  onUpload={(files) => handlePhotoUpload(files, 'more')}
                />
              </div>
            </div>
          </div>

          <GenericModal
  isOpen={modalType !== null}
  title={
    modalType === "propertyAddress"
      ? "Add Property Address"
      : modalType === "petFees"
      ? "Add Pet Fees"
      : modalType === "leasingInfo"
          ? "Add Leasing Info"
      : "Add Information"
  }
  onClose={() => setModalType(null)}
>
  {modalType === "propertyAddress" && <PropertyAddressForm control={form.control} errors={form.formState.errors}/>}
  {modalType === "leasingInfo" && <LeasingInfo control={form.control} errors={form.formState.errors}/>}
</GenericModal>
          {/* Submit Button */}
           <div className="flex items-center justify-between pt-6">
            <Button
              variant="default"
              onClick={handleBack}
              className="px-6 underline"
            >
              Back
            </Button>
            <Button type="submit" className="px-8 py-2">
              Submit
            </Button>
          
          </div>
        </form>
      </Form>
    </div>
  )
}