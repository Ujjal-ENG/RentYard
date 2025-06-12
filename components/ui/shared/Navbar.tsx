"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center"> 
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Image
               style={{
                  width: '147.282px',
                  height: '38.779px',
                  flexShrink: 0,
                  aspectRatio: '147.28 / 38.78',
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
                src={"/images/navbar/nav.png"}
                alt="RentYard Logo"
                width={40}
                height={40}
              />
            </div>
          </div>

          {/* Save & Exit Button */}
          <div className="flex items-center">
            <Button
              variant="outline"
              className="text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors"
              style={{
              display: 'flex',
              padding: '12px 24px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '12px',
              border: '1px solid var(--Stock-Color, #E0E0E0)',
              color: ' #272B35',
              fontFamily: 'Fustat',
              fontSize: '16px',
              fontStyle: 'normal',
              lineHeight: 'normal'
            }}
            >
              Save & Exit
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;