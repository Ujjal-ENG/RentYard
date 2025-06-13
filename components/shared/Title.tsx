"use client"
import React from 'react'

type TitleProps = {
  text: string
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h3 className="text-lg font-medium border-b-2 p-5 text-gray-400 bg-gray-50 rounded-t-lg border-gray-200">
      {text}
    </h3>
  )
}