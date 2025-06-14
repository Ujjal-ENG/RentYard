"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Title } from "../shared/Title"
import { FileUpload } from "./FileUpload"
import FormFooter from "./FormFooter"
import { LandlordFormData, landlordFormSchema } from "./types"

interface LandlordFormProps {
  onSubmit: (data: LandlordFormData) => void
  nextPageUrl?: string 
}

export function LandlordForm({ onSubmit, nextPageUrl="/address" }: LandlordFormProps) {
  const form = useForm<LandlordFormData>({
    resolver: zodResolver(landlordFormSchema),
    defaultValues: {
      acceptTerms: false
    }
  })

  const watchedValues = form.watch()
  const isFormValid = form.formState.isValid && watchedValues.acceptTerms

  function handleBack(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    window.history.back();
  }

  return (
    <div className="relative rounded-lg border-2 space-y-6 border-gray-200">
      <Title text="Proof of ownership" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 ">
          <FormField
            control={form.control}
            name="ownershipDoc"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Ownership doc<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <FileUpload
                  
                    onFileSelect={(file) => field.onChange(file)}
                    placeholder="(Pdf only)"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="absolute mt-2 left-[-2px] w-full">
     <FormFooter
                 form={form}
                 isFormValid={isFormValid}
                 nextPageUrl={nextPageUrl}
                 onBack={handleBack}
               />
         </div>
        </form>
      </Form>
    </div>
  )
}