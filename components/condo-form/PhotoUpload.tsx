import { cn } from "@/lib/utils"
import { Upload } from "lucide-react"
import { useRef, useState } from "react"

interface PhotoUploadProps {
  title: string
  subtitle?: string
  onUpload: (files: File[]) => void
  maxFiles?: number
  isCover?: boolean
}

export function PhotoUpload({ 
  title, 
  subtitle, 
  onUpload, 
  maxFiles = 10,
  isCover = false 
}: PhotoUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files).slice(0, maxFiles)
      onUpload(files)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).slice(0, maxFiles)
      onUpload(files)
    }
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  if (isCover) {
    return (
      <div className="space-y-4">
        <div className="text-sm font-medium text-gray-700">{title}</div>
        <div
          className={cn(
            "border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer transition-colors",
            dragActive && "border-blue-500 bg-blue-50"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={openFileDialog}
        >
          <Upload className="w-8 h-8 mx-auto mb-4 text-gray-400" />
          <div className="text-sm text-gray-600 mb-2">Upload cover photo</div>
          <div className="text-xs text-gray-500">(Jpg, png only)</div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            multiple={false}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-gray-700">{title}</div>
        {subtitle && (
          <div className="text-sm text-gray-500">{subtitle}</div>
        )}
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className={cn(
              "aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:border-gray-400",
              dragActive && "border-blue-500 bg-blue-50"
            )}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={openFileDialog}
          >
            <Upload className="w-6 h-6 text-gray-400" />
          </div>
        ))}
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        multiple
      />
    </div>
  )
}