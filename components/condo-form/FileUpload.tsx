"use client"
import PdfIcon from "@/icons/PdfIcon"
import { cn } from "@/lib/utils"
import { FileText } from "lucide-react"
import { useRef, useState } from "react"

interface FileUploadProps {
  onFileSelect: (file: File) => void
  accept?: string
  placeholder?: string
  required?: boolean
  className?: string
}

export function FileUpload({ 
  onFileSelect, 
  accept = ".pdf",
  placeholder = "(Pdf only)",
  className 
}: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      onFileSelect(file)
    }
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={cn("space-y-2", className)}>
      <div
        className="border-2 border-dashed bg-[#F4F4F4] border-[#E0E0E0] rounded-lg p-1 max-w-md cursor-pointer hover:border-gray-400 transition-colors"
        onClick={openFileDialog}
      >
        <div className="flex gap-3 items-center justify-center text-center">
          {selectedFile ? (
            <>
              <FileText className="w-8 h-8 text-gray-600" />
              <span className="text-sm text-gray-700 font-medium">{selectedFile.name}</span>
              <span className="text-xs text-gray-500">Click to change</span>
            </>
          ) : (
            <>
             <PdfIcon />
              <span className="text-md font-semibold text-gray-500">{placeholder}</span>
            </>
          )}
        </div>
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  )
}