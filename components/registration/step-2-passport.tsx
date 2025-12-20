"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import { CalendarIcon, Plane, Book, FileText, ArrowLeft, ArrowRight } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { FileUpload } from "./file-upload"
import { CountrySelect } from "@/components/ui/country-select"

export function Step2Passport({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const [issuingCountry, setIssuingCountry] = useState("")
    const [issueDate, setIssueDate] = useState<Date>()
    const [expiryDate, setExpiryDate] = useState<Date>()

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="space-y-1">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <Book className="w-5 h-5 text-orange-400" />
                    PASSPORT DETAILS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Passport Number</Label>
                        <Input placeholder="Passport Number" />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Issuing Country</Label>
                        <CountrySelect
                            value={issuingCountry}
                            onChange={setIssuingCountry}
                            placeholder="Select country"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-1">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <CalendarIcon className="w-5 h-5 text-purple-500" />
                    DATE OF ISSUE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Date of issue</Label>
                        <DatePicker
                            date={issueDate}
                            setDate={setIssueDate}
                            placeholder="mm/dd/yyyy"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Date of Expiry</Label>
                        <DatePicker
                            date={expiryDate}
                            setDate={setExpiryDate}
                            placeholder="mm/dd/yyyy"
                        />
                    </div>
                </div>
            </div>

            <FileUpload
                label="PASSPORT BIO PAGE"
                description="PDF, JPG, or PNG (Max. 5MB)"
                icon="upload"
            />

            <div className="flex justify-between pt-4">
                <Button onClick={onBack} variant="secondary" className="px-6 gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                </Button>
                <Button onClick={onNext} className="bg-[#009b4d] hover:bg-[#007a3d] px-8 py-6 text-base font-semibold gap-2">
                    Save & Continue <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}
