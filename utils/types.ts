export interface PropertyType {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export interface Role {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export type PropertyTypeId = 'single-house' | 'apartments' | 'condominiums'
export type RoleId = 'landlord' | 'realtor' | 'property-management'