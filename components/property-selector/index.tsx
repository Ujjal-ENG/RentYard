"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

import { PropertyTypeId, RoleId } from "@/utils/types"

import { propertyTypes, roles } from "@/lib/mockData"
import { PropertyTypeCard } from "./PropertyTypeCard"
import { RoleCard } from "./RoleCard"

interface PropertySelectorProps {
  onSelectionComplete?: (propertyType: PropertyTypeId, role: RoleId) => void
}

export function PropertySelector({ onSelectionComplete }: PropertySelectorProps) {
  const [selectedPropertyType, setSelectedPropertyType] = useState<PropertyTypeId | null>(null)
  const [selectedRole, setSelectedRole] = useState<RoleId | null>(null)
  const [showRoleSelection, setShowRoleSelection] = useState(false)

  const handlePropertyTypeSelect = (propertyTypeId: PropertyTypeId) => {
    setSelectedPropertyType(propertyTypeId)
    setSelectedRole(null) // Reset role selection when property type changes
    setShowRoleSelection(true) // Show role selection
  }

  const handleRoleSelect = (roleId: RoleId) => {
    setSelectedRole(roleId)
  }

  const handleContinue = () => {
    if (selectedPropertyType && selectedRole) {
      onSelectionComplete?.(selectedPropertyType, selectedRole)
    }
  }

  const handleBack = () => {
    setShowRoleSelection(false)
    setSelectedRole(null)
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Property Type Selection */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Property type</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {propertyTypes.map((propertyType) => (
            <PropertyTypeCard
              key={propertyType.id}
              propertyType={propertyType}
              isSelected={selectedPropertyType === propertyType.id}
              onSelect={() => handlePropertyTypeSelect(propertyType.id as PropertyTypeId)}
            />
          ))}
        </div>
      </div>

      {/* Role Selection - Only show when property type is selected */}
      {showRoleSelection && (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-600">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">Select your role</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {roles.map((role) => (
              <RoleCard
                key={role.id}
                role={role}
                isSelected={selectedRole === role.id}
                onSelect={() => handleRoleSelect(role.id as RoleId)}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              className="px-6"
            >
              Back
            </Button>
            
            <Button
              onClick={handleContinue}
              disabled={!selectedRole}
              className="px-8"
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}