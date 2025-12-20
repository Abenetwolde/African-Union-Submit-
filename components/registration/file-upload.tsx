"use client"

import * as React from "react"

import { Camera, FileUp, Upload } from "lucide-react"

interface FileUploadProps {
    label: string
    description: string
    accept?: string
    icon?: "camera" | "upload"
}

export function FileUpload({ label, description, accept, icon = "upload" }: FileUploadProps) {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null)

    const handleClick = () => {
        inputRef.current?.click()
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0])
        }
    }

    return (
        <div className="rounded-xl border border-gray-300 bg-card p-6 ">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    {icon === "camera" && <div className="p-1 bg-green-100 rounded text-green-700"><Camera className="w-4 h-4" /></div>}
                    <span className="font-semibold text-sm text-gray-700">{label}</span>
                </div>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Required</span>
            </div>

            <input
                type="file"
                ref={inputRef}
                className="hidden"
                accept={accept}
                onChange={handleFileChange}
            />

            <div
                onClick={handleClick}
                className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
                {selectedFile ? (
                    <div className="flex flex-col items-center">
                        <FileUp className="w-10 h-10 text-green-600 mb-2" />
                        <p className="font-semibold text-green-700 mb-1">{selectedFile.name}</p>
                        <p className="text-xs text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                ) : (
                    <>
                        {icon === "camera" ? (
                            <Camera className="w-10 h-10 text-gray-400 mb-2" />
                        ) : (
                            <Upload className="w-10 h-10 text-gray-400 mb-2" />
                        )}
                        <p className="font-semibold text-gray-900 mb-1">Click to upload {icon === "camera" ? "photo" : "file"}</p>
                        <p className="text-xs text-gray-500">{description}</p>
                    </>
                )}
            </div>
        </div>
    )
}
