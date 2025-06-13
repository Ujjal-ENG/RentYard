"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

import { PropertyTypeId, RoleId } from "@/utils/types"

import { propertyTypes, roles } from "@/lib/mockData"
import { LandlordForm } from "../condo-form/LandLordForm"
import { PropertyManagementForm } from "../condo-form/PropertyManagementForm"
import { RealtorForm } from "../condo-form/RealtorFrom"
import { LandlordFormData, PropertyManagementFormData, RealtorFormData } from "../condo-form/types"
import { PropertyTypeCard } from "./PropertyTypeCard"
import { RoleCard } from "./RoleCard"

interface PropertySelectorProps {
  onComplete?: (data: {
    propertyType: PropertyTypeId
    role: RoleId
    formData: LandlordFormData | RealtorFormData | PropertyManagementFormData
  }) => void
}

export function PropertySelector({ onComplete }: PropertySelectorProps) {
  const [selectedPropertyType, setSelectedPropertyType] = useState<PropertyTypeId | null>(null)
  const [selectedRole, setSelectedRole] = useState<RoleId | null>(null)
  const [showRoleSelection, setShowRoleSelection] = useState(false)

  const handlePropertyTypeSelect = (propertyTypeId: PropertyTypeId) => {
    setSelectedPropertyType(propertyTypeId)
    setSelectedRole(null)
    setShowRoleSelection(true)
  }

  const handleRoleSelect = (roleId: RoleId) => {
    setSelectedRole(roleId)
  }

  const handleFormSubmit = (formData: LandlordFormData | RealtorFormData | PropertyManagementFormData) => {
    if (selectedPropertyType && selectedRole) {
      onComplete?.({
        propertyType: selectedPropertyType,
        role: selectedRole,
        formData
      })
    }
  }

   const handleContinue = () => {
    // if (selectedPropertyType && selectedRole) {
    //   showRoleSelection?.(selectedPropertyType, selectedRole)
     // }
     console.log("clicked continue")
  }

  const handleBack = () => {
    setShowRoleSelection(false)
    setSelectedRole(null)
  }

  const renderRoleForm = () => {
    switch (selectedRole) {
      case 'landlord':
        return <LandlordForm onSubmit={handleFormSubmit} />
      case 'realtor':
        return <RealtorForm onSubmit={handleFormSubmit} />
      case 'property-management':
        return <PropertyManagementForm onSubmit={handleFormSubmit} />
      default:
        return null
    }
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

      {/* Role Selection */}
      {showRoleSelection && (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-300">
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

          {/* Role-specific Form */}
          {selectedRole && (
            <div className="animate-in slide-in-from-bottom-4 duration-300">
              {renderRoleForm()}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6">
            <Button
              variant="default"
              onClick={handleBack}
              className="px-6 underline"
            >
              Back
            </Button>
            
            <Button
              onClick={handleContinue}
              disabled={!selectedRole}
              className="px-8"
              style={{
              display: 'flex',
              width: '128px',
              padding: '12px 24px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '12px',
              background: ' #316EED',
              color: ' #FFFFFF',
              fontFamily: 'Fustat',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal'
            }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}