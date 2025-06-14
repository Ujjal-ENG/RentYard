"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Title } from "../shared/Title"
import { FileUpload } from "./FileUpload"
import FormFooter from "./FormFooter"
import { RealtorFormData, realtorFormSchema } from "./types"

interface RealtorFormProps {
  onSubmit: (data: RealtorFormData) => void
  nextPageUrl?: string // URL to redirect to after form submission
}

export function RealtorForm({ onSubmit, nextPageUrl = "/address" }: RealtorFormProps) {
  const form = useForm<RealtorFormData>({
    resolver: zodResolver(realtorFormSchema),
    mode: "onChange", // Enable real-time validation
    reValidateMode: "onChange",
    defaultValues: {
      lenienceNumber: "",
      additionalDocuments: undefined,
      agreementWithLandlord: undefined,
      acceptTerms: false
    }
  })


  const watchedValues = form.watch()
  const isFormValid = form.formState.isValid && watchedValues.acceptTerms

  const handleBack = () => {
    window.history.back()
  }

  const handleSubmit = (data: RealtorFormData) => {
    onSubmit(data)
  }

  return (
    <div className="rounded-lg space-y-6 border-2 border-gray-200 relative">
      <Title text="Realtor verification" />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <FormField
              control={form.control}
              name="lenienceNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    License number<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="000000000000"
                      {...field}
                      onChange={(e) => {
                        // Only allow numbers
                        const value = e.target.value.replace(/\D/g, '');
                        field.onChange(value);
                      }}
                      className={`${form.formState.errors.lenienceNumber ? "border-red-500 focus:border-red-500 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"} transition-colors`}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs mt-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalDocuments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Additional documents for realtor
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      onFileSelect={(file: File) => field.onChange(file)}
                      placeholder="(Pdf only)"
                 
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs mt-1" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agreementWithLandlord"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Agreement with landlord<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      onFileSelect={(file: File) => field.onChange(file)}
                      placeholder="(Pdf only)"
                      required
                   
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs mt-1" />
                </FormItem>
              )}
            />
          </div>

          <div className="absolute mt-10 left-[-2px] w-full">
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