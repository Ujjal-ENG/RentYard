import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import { Control, FieldError, FieldValues, Path } from "react-hook-form"

interface CustomFormFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder?: string
  required?: boolean
  recommended?: boolean
  type?: 'input' | 'textarea'
  error?: FieldError
}

export function CustomFormField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  required = false,
  recommended = false,
  type = 'input',
  error
}: CustomFormFieldProps<T>) {
const getStyledLabel = () => {
  return (
    <span>
      {label}
      {required && <span className="text-red-500"> (Required)</span>}
      {!required && recommended && (
        <span className="text-gray-600"> (Optional but recommended)</span>
      )}
      {!required && !recommended && (
        <span className="text-gray-500"> (Optional)</span>
      )}
    </span>
  );
};


  return (
    <div className="space-y-2">
      <div className="relative flex items-center justify-between">
        <FormLabel className="text-sm font-medium absolute top-3.5 left-3.5">
          {getStyledLabel()}
        </FormLabel>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-blue-500 hover:text-blue-600 p-0 h-auto font-normal absolute right-2.5 top-3.5"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add
        </Button>
      </div>
      
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              {type === 'textarea' ? (
                <Textarea
                  placeholder={placeholder}
                  className={cn(
                    "min-h-[100px] resize-none",
                    error && "border-red-500 focus-visible:ring-red-500"
                  )}
                  {...field}
                />
              ) : (
                <Input
                  placeholder={placeholder}
                  className={cn(
                    error && "border-red-500 focus-visible:ring-red-500"
                  )}
                  {...field}
                />
              )}
            </FormControl>
            <FormMessage className="text-red-500 text-xs" />
          </FormItem>
        )}
      />
    </div>
  )
}