"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Globe, Building2, MapPin, Phone, ArrowLeft, ArrowRight, Laptop } from "lucide-react"
import { cn } from "@/lib/utils"
import { FileUpload } from "./file-upload"
import { CountrySelect } from "@/components/ui/country-select"
import { PhoneInput } from "@/components/ui/phone-input"

export function Step3Media({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const [countryOfRegistration, setCountryOfRegistration] = useState("")
    const [phone, setPhone] = useState("")

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="space-y-1">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <Laptop className="w-5 h-5 text-blue-500" />
                    MEDIA DETAILS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Name of Media House</Label>
                        <Input placeholder="e.g. BBC, Al Jazeera, CNN" />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Type of Media</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select media type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="tv">Television</SelectItem>
                                <SelectItem value="radio">Radio</SelectItem>
                                <SelectItem value="print">Print</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="space-y-1">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-red-500" />
                    ADDRESS
                </h2>
                <div className="space-y-1.5">
                    <Label className="text-xs text-gray-500">Headquarters Address</Label>
                    <Input placeholder="Street address, City, State/Province" />
                </div>
            </div>

            <div className="space-y-1">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <Building2 className="w-5 h-5 text-pink-400" />
                    MEDIA INFORMATION
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Country of Registration</Label>
                        <CountrySelect
                            value={countryOfRegistration}
                            onChange={setCountryOfRegistration}
                            placeholder="Select country"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Official Phone Number</Label>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={setPhone}
                        />
                    </div>
                </div>
            </div>

            <FileUpload
                label="Letter of Assignment"
                description="Must be signed by Editor of organization"
                icon="upload"
            />

            <div className="flex justify-between pt-4">
                <Button onClick={onBack} variant="secondary" className="px-6 gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                </Button>
                <Button onClick={onNext} className="bg-emerald-600 hover:bg-emerald-700 px-8 py-6 text-base font-bold shadow-lg shadow-emerald-600/20 rounded-xl">
                    Next Step <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>
        </div>
    )
}
