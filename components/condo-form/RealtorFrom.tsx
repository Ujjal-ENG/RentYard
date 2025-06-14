"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FormCheckbox } from "../shared/FormCheckbox"
import { Title } from "../shared/Title"
import { FileUpload } from "./FileUpload"
import { RealtorFormData, realtorFormSchema } from "./types"

interface RealtorFormProps {
  onSubmit: (data: RealtorFormData) => void
}

export function RealtorForm({ onSubmit }: RealtorFormProps) {
  const form = useForm<RealtorFormData>({
    resolver: zodResolver(realtorFormSchema),
    defaultValues: {
      lenienceNumber: "",
      acceptTerms: false
    }
  })

  return (
    <div className="rounded-lg space-y-6 border-2 border-gray-200 relative">
      <Title text="Realtor verification" />
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <FormField
              control={form.control}
              name="lenienceNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Lenience number<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="000000000000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
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
                      onFileSelect={(file) => field.onChange(file)}
                      placeholder="(Pdf only)"
                    />
                  </FormControl>
                  <FormMessage />
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
                      onFileSelect={(file) => field.onChange(file)}
                      placeholder="(Pdf only)"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

        </form>
            {/* Shared Form from shared folder */}
        <FormCheckbox
          className="absolute mt-4"
          control={form.control}
          name="acceptTerms"
          label="Accept RentYard property adding terms & condition"
          />
      </Form>
    </div>
  )
}