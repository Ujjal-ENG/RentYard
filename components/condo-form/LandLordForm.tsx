"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FormCheckbox } from "../shared/FormCheckbox"
import { FileUpload } from "./FileUpload"
import { LandlordFormData, landlordFormSchema } from "./types"

interface LandlordFormProps {
  onSubmit: (data: LandlordFormData) => void
}

export function LandlordForm({ onSubmit }: LandlordFormProps) {
  const form = useForm<LandlordFormData>({
    resolver: zodResolver(landlordFormSchema),
    defaultValues: {
      acceptTerms: false
    }
  })

  return (
    <div className="bg-gray-50 rounded-lg p-6 space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Proof of ownership</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

              {/* Shared Form from shared folder */}

          <FormCheckbox
            control={form.control}
            name="acceptTerms"
            label="Accept RentYard property adding terms & condition"
            />
        </form>
      </Form>
    </div>
  )
}