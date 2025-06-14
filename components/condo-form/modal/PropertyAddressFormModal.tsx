import { CustomFormField } from "@/elements/input/FormField"
import { Control } from "react-hook-form"

interface PropertyAddressFormProps {
  control: Control<any>
  errors: any
}

export function PropertyAddressForm({ control, errors }: PropertyAddressFormProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full mx-auto">
        <CustomFormField
          control={control}
          name="propertyName"
          label="Property name as identifier"
          required
          isAddButtonVisible={false}
          labelIsPositioned={false}
          error={errors.propertyName}
        />
        <CustomFormField
          control={control}
          name="totalUnit"
          label="Total apartment unit"
          required
          isAddButtonVisible={false}
          labelIsPositioned={false}
          error={errors.totalUnit}
        />
        <CustomFormField
          control={control}
          name="propertyWebsite"
          label="Property website"
          isAddButtonVisible={false}
          labelIsPositioned={false}
          error={errors.propertyWebsite}
        />
        <CustomFormField
          control={control}
          name="country"
          label="Country/Region"
          required
          isAddButtonVisible={false}
          labelIsPositioned={false}
          error={errors.country}
        />
        <CustomFormField
          control={control}
          name="streetAddress"
          label="Street address"
          required
          isAddButtonVisible={false}
          labelIsPositioned={false}
          error={errors.streetAddress}
        />
        <CustomFormField
          control={control}
          name="aptSuite"
          label="Apt, suite, unit"
          isAddButtonVisible={false}
          labelIsPositioned={false}
          error={errors.aptSuite}
        />
        <CustomFormField
          control={control}
          name="city"
          label="City/Town"
          required
          isAddButtonVisible={false}
          labelIsPositioned={false}
          error={errors.city}
        />
        <CustomFormField
          control={control}
          name="state"
          label="State/Territory"
          required
          isAddButtonVisible={false}
          labelIsPositioned={false}
          error={errors.state}
        />
        <CustomFormField
          control={control}
          name="zipCode"
          label="Zip code"
          required
          isAddButtonVisible={false}
          labelIsPositioned={false}
          error={errors.zipCode}
        />
      </div>

      {/* ✅ Add Button Here */}
      <button
        type="button"
        style={{
          display: "flex",
          height: "48px",
          padding: "14px 24px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          borderRadius: "12px",
          background: "#316EED",
          color: "#FFF",
          fontFamily: "Fustat",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "20px",
        }}
        className="flex items-end justify-end cursor-pointer"
      >
        Add
      </button>
    </div>
  )
}
