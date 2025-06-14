"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Title } from "../shared/Title"
import { FileUpload } from "./FileUpload"
import FormFooter from "./FormFooter"
import { PhoneInput } from "../../elements/input/PhoneInput"
import { PropertyManagementFormData, propertyManagementFormSchema } from "./types"

interface PropertyManagementFormProps {
  onSubmit: (data: PropertyManagementFormData) => void
  nextPageUrl?: string // URL to redirect to after form submission
}

export function PropertyManagementForm({ onSubmit, nextPageUrl = "/address" }: PropertyManagementFormProps) {
  const form = useForm<PropertyManagementFormData>({
    resolver: zodResolver(propertyManagementFormSchema),
    mode: "onChange", // Enable real-time validation
    defaultValues: {
      companyName: "",
      companyIdentifier: "",
      jobTitle: "",
      country: "",
      streetAddress: "",
      aptSuitUnit: "",
      phoneNumber: "",
      contactEmail: "",
      city: "",
      state: "",
      zipCode: "",
      acceptTerms: false,
      agreementWithLandlordOwner: undefined
    }
  })

  // Watch form values to determine if form is valid
  const watchedValues = form.watch()
  const isFormValid = form.formState.isValid && watchedValues.acceptTerms

  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = (data: PropertyManagementFormData) => {
    onSubmit(data)
  }

  return (
    <div className="relative rounded-lg border-2 space-y-6 border-gray-200">
      <Title text="Company & office info" />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 p-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Company name<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Runyan trade center" 
                      {...field}
                      className={form.formState.errors.companyName ? "border-red-500" : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyIdentifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Company Identifier(EIN/TIN)<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="12-3456789" 
                      {...field}
                      className={form.formState.errors.companyIdentifier ? "border-red-500" : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Your job title<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Manager" 
                      {...field}
                      className={form.formState.errors.jobTitle ? "border-red-500" : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agreementWithLandlordOwner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Agreement with landlord/owner<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      onFileSelect={(file: File) => field.onChange(file)}
                      placeholder="(Pdf only)"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Country/Region<span className="text-red-500">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={form.formState.errors.country ? "border-red-500" : ""}>
                        <SelectValue placeholder="Choose country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="bd">Bangladesh</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="streetAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Street address<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="111 Austin Ave" 
                      {...field}
                      className={form.formState.errors.streetAddress ? "border-red-500" : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="aptSuitUnit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Apt, suit, unit (if applicable)
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="3050" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Phone number<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <PhoneInput
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="+880"
                   
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Contact email<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="majarul2025@gmail.com" 
                      type="email" 
                      {...field}
                      className={form.formState.errors.contactEmail ? "border-red-500" : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    City/Town<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Dallas" 
                      {...field}
                      className={form.formState.errors.city ? "border-red-500" : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    State/Territory<span className="text-red-500">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={form.formState.errors.state ? "border-red-500" : ""}>
                        <SelectValue placeholder="Choose state" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="tx">Texas</SelectItem>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="ny">New York</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Zip code<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="75061" 
                      {...field}
                      className={form.formState.errors.zipCode ? "border-red-500" : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="absolute bottom-[-105px] left-0 w-full">
  <FormFooter
              form={form}
              isFormValid={isFormValid}
              nextPageUrl={nextPageUrl}
              onBack={handleBack}
              onSubmit={handleSubmit}
            />
          </div>

        
        </form>
      </Form>
    </div>
  )
}