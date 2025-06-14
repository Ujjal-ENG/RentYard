import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function PhoneInput({ value, onChange, placeholder = "+880", className }: PhoneInputProps) {
  return (
    <div className={`flex ${className}`}>
      <Select defaultValue="bd">
        <SelectTrigger className="w-20 rounded-r-none border-r-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bd">
            <div className="flex items-center">
              <div className="w-4 h-3 bg-green-500 rounded-sm mr-2"></div>
            </div>
          </SelectItem>
          <SelectItem value="us">
            <div className="flex items-center">
              <div className="w-4 h-3 bg-blue-500 rounded-sm mr-2"></div>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-l-none"
      />
    </div>
  )
}