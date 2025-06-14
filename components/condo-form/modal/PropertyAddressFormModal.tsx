import { CustomFormField } from "@/elements/input/FormField"
import { Control } from "react-hook-form"

interface PropertyAddressFormProps {
  control: Control<any>
  errors: any
}

export function PropertyAddressForm({ control, errors }: PropertyAddressFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      <CustomFormField
        control={control}
        name="propertyName"
        label="Property name as identifier"
        required
        // error={errors.propertyName}
      />
      <CustomFormField
        control={control}
        name="totalUnit"
        label="Total apartment unit"
        required
        // error={errors.totalUnit}
      />
      <CustomFormField
        control={control}
        name="propertyWebsite"
        label="Property website"
        placeholder="https://"
        // error={errors.propertyWebsite}
      />
      <CustomFormField
        control={control}
        name="country"
        label="Country/Region"
        required
        // error={errors.country}
      />
      <CustomFormField
        control={control}
        name="streetAddress"
        label="Street address"
        required
        // error={errors.streetAddress}
      />
      <CustomFormField
        control={control}
        name="aptSuite"
        label="Apt, suite, unit"
        placeholder="(if applicable)"
        // error={errors.aptSuite}
      />
      <CustomFormField
        control={control}
        name="city"
        label="City/Town"
        required
        // error={errors.city}
      />
      <CustomFormField
        control={control}
        name="state"
        label="State/Territory"
        required
        // error={errors.state}
      />
      <CustomFormField
        control={control}
        name="zipCode"
        label="Zip code"
        required
        // error={errors.zipCode}
      />
    </div>
  )
}
