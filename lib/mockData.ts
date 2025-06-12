import ApartmentIcon from '@/icons/ApartmentIcon';
import BuildingIcon from '@/icons/BuildingIcon';
import CondominiumsIcon from '@/icons/CondominiumsIcon';
import HomeIcon from '@/icons/HomeIcon';
import LandlordIcon from '@/icons/LandlordIcon';
import RealtorIcon from '@/icons/RealtorIcon';
import { PropertyType, Role } from "@/utils/types";
export const propertyTypes: PropertyType[] = [
  {
    id: 'single-house',
    title: 'Single House Property',
    description: 'Single unit house for single family',
    icon: HomeIcon
  },
  {
    id: 'apartments',
    title: 'Apartments complex',
    description: 'Multiple unit house for families',
    icon: ApartmentIcon
  },
  {
    id: 'condominiums',
    title: 'Condominiums',
    description: 'Multiple unit house for families',
    icon: CondominiumsIcon
  }
] 

export const roles: Role[] = [
  {
    id: 'landlord',
    title: 'Landlord',
    description: 'Owner of the property',
    icon: LandlordIcon
  },
  {
    id: 'realtor',
    title: 'Realtor',
    description: 'Manage property on behalf on owner',
    icon: RealtorIcon
  },
  {
    id: 'property-management',
    title: 'Property management company',
    description: 'For management company',
    icon: BuildingIcon
  }
]
