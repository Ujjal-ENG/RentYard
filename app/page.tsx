"use client";
import { PropertySelector } from "@/components/property-selector";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
     <PropertySelector />
    </div>
  );
}
 
export default LandingPage;