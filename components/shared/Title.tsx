"use client"
import React from 'react'

type TitleProps = {
  text: string
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h3 className="text-lg font-normal border-b-2 p-5 text-[#6F6C6A] bg-[#F4F4F4] rounded-t-lg border-gray-200">
      {text}
    </h3>
  )
}