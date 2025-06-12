import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { PropertyType } from "@/utils/types"

interface PropertyTypeCardProps {
  propertyType: PropertyType
  isSelected: boolean
  onSelect: () => void
}

export function PropertyTypeCard({ 
  propertyType, 
  isSelected, 
  onSelect 
}: PropertyTypeCardProps) {
  const IconComponent = propertyType.icon

  return (
    <Card 
      className={cn(
        "p-6 cursor-pointer transition-all duration-400 hover:shadow-md border-2",
        isSelected 
          ? "border-blue-500 bg-blue-50 shadow-md" 
          : "border-gray-200 hover:border-gray-300"
      )}
      onClick={onSelect}
    >
      <div className="flex items-start space-x-4">
        <div className={cn(
          "p-3 rounded-lg",
          isSelected ? "bg-blue-100" : "bg-gray-100"
        )}>
          <IconComponent className={cn(
            "w-6 h-6",
            isSelected ? "text-blue-600" : "text-gray-600"
          )} />
        </div>
        <div className="flex-1">
          <h3 className={cn(
            "text-lg font-semibold mb-1",
            isSelected ? "text-blue-900" : "text-gray-900"
          )}>
            {propertyType.title}
          </h3>
          <p className={cn(
            "text-sm",
            isSelected ? "text-blue-700" : "text-gray-600"
          )}>
            {propertyType.description}
          </p>
        </div>
      </div>
    </Card>
  )
}