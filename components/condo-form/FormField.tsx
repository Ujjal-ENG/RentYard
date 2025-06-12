import { Control, FieldError, FieldValues, Path } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

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
  const getLabelText = () => {
    if (required) return `${label}(Required)`
    if (recommended) return `${label}(Optional but recommended)`
    return `${label}(Optional)`
  }

  const getLabelColor = () => {
    if (required) return "text-red-500"
    if (recommended) return "text-gray-600"
    return "text-gray-500"
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <FormLabel className={cn("text-sm font-medium", getLabelColor())}>
          {getLabelText()}
        </FormLabel>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-blue-500 hover:text-blue-600 p-0 h-auto font-normal"
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