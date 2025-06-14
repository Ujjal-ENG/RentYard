import { CustomFormField } from "@/elements/input/FormField"
import { Control } from "react-hook-form"

interface PropertyAddressFormProps {
  control: Control<any>
  errors: any
}

export function PropertyAddressForm({ control, errors }: PropertyAddressFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl w-full mx-auto">
      <CustomFormField
        control={control}
        name="propertyName"
        label="Property name as identifier"
        required
        isAddButtonVisible={false}
        // error={errors.propertyName}
      />
      <CustomFormField
        control={control}
        name="totalUnit"
        label="Total apartment unit"
        required
        isAddButtonVisible={false}
        // error={errors.totalUnit}
      />
      <CustomFormField
        control={control}
        name="propertyWebsite"
        label="Property website"
      
        isAddButtonVisible={false}
        // error={errors.propertyWebsite}
      />
      <CustomFormField
        control={control}
        name="country"
        label="Country/Region"
        required
        isAddButtonVisible={false}
        // error={errors.country}
      />
      <CustomFormField
        control={control}
        name="streetAddress"
        label="Street address"
        required
        isAddButtonVisible={false}
        // error={errors.streetAddress}
      />
      <CustomFormField
        control={control}
        name="aptSuite"
        label="Apt, suite, unit"
      
        isAddButtonVisible={false}
        // error={errors.aptSuite}
      />
      <CustomFormField
        control={control}
        name="city"
        label="City/Town"
        required
        isAddButtonVisible={false}
        // error={errors.city}
      />
      <CustomFormField
        control={control}
        name="state"
        label="State/Territory"
        required
        isAddButtonVisible={false}
        // error={errors.state}
      />
      <CustomFormField
        control={control}
        name="zipCode"
        label="Zip code"
        required
        isAddButtonVisible={false}
        // error={errors.zipCode}
      />
    </div>
  )
}
