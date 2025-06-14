"use client"

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from '@/components/ui/select'
import { CustomFormField } from "@/elements/input/FormField"
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronDown, X } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const leasingInfoSchema = z.object({
  managerName: z.string().min(1, "Manager name is required"),
  managerEmail: z.string().email("Please enter a valid email"),
  managerPhone: z.string().min(1, "Phone number is required"),
  sameAddress: z.boolean().default(true)
})

type LeasingInfoFormData = z.infer<typeof leasingInfoSchema>

interface LeasingInfoProps {
  isOpen?: boolean
  onClose?: () => void
  onAdd?: (data: LeasingInfoFormData) => void
}

const LeasingInfo: React.FC<LeasingInfoProps> = ({ 
  isOpen = true, 
  onClose,
  onAdd 
}) => {
  const form = useForm<LeasingInfoFormData>({
    resolver: zodResolver(leasingInfoSchema),
    defaultValues: {
      managerName: 'Alex johan',
      managerEmail: 'leasing@rentyeard.com',
      managerPhone: '+880',
      sameAddress: true
    }
  })

  const handleSubmit = (data: LeasingInfoFormData) => {
    onAdd?.(data)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">Leasing info</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-6 w-6 p-0 hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Leasing manager name */}
              <CustomFormField
                control={form.control}
                name="managerName"
                label="Leasing manager name"
                placeholder="Enter manager name"
                required={true}
                isAddButtonVisible={false}
                labelIsPositioned={false}
              />

              {/* Phone number */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Leasing manager Phone number<span className="text-red-500">*</span>
                </Label>
                <div className="flex">
                  <Select defaultValue="BD">
                    <SelectTrigger className="w-20 rounded-r-none border-r-0">
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-3 bg-green-600 rounded-sm relative">
                          <div className="absolute inset-0 bg-red-600 rounded-full w-3 h-3 left-0.5 top-0"></div>
                        </div>
                        <ChevronDown className="h-3 w-3" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BD">🇧🇩 BD</SelectItem>
                      <SelectItem value="US">🇺🇸 US</SelectItem>
                      <SelectItem value="UK">🇬🇧 UK</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    {...form.register("managerPhone")}
                    className="flex-1 rounded-l-none p-6"
                  />
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <CustomFormField
                control={form.control}
                name="managerEmail"
                label="Leasing manager email"
                placeholder="Enter email address"
                required={true}
                isAddButtonVisible={false}
                labelIsPositioned={false}
              />

              {/* Address checkbox */}
              <div className="flex items-end pb-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="sameAddress"
                    checked={form.watch("sameAddress")}
                    onCheckedChange={(checked) => form.setValue("sameAddress", checked as boolean)}
                  />
                  <Label 
                    htmlFor="sameAddress" 
                    className="text-sm font-medium text-gray-700 cursor-pointer"
                  >
                    Address(same as property)
                  </Label>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end mt-8">
              <Button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              >
                Add
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default LeasingInfo