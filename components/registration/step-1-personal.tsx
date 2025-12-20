"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { DatePicker } from "@/components/ui/date-picker"
import { CalendarIcon, User, Globe, ArrowRight } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { FileUpload } from "./file-upload"
import { CountrySelect } from "@/components/ui/country-select"

export function Step1Personal({ onNext }: { onNext: () => void }) {
    const [nationality, setNationality] = useState("")
    const [residence, setResidence] = useState("")
    const [date, setDate] = useState<Date>()
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="space-y-1">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <User className="w-5 h-5 text-green-600" />
                    FULL NAME
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">First Name</Label>
                        <Input placeholder="Given name" />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Middle Name</Label>
                        <Input placeholder="Father's name" />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Last Name</Label>
                        <Input placeholder="Grandfather's name" />
                    </div>
                </div>
            </div>

            <div className="space-y-1">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <CalendarIcon className="w-5 h-5 text-orange-400" />
                    DEMOGRAPHICS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Gender</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Date of Birth</Label>
                        <DatePicker
                            date={date}
                            setDate={setDate}
                            placeholder="mm/dd/yyyy"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-1">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <Globe className="w-5 h-5 text-red-500" />
                    CITIZENSHIP & RESIDENCE
                </h2>
                {/* Using Country Selects here */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Nationality</Label>
                        <CountrySelect
                            value={nationality}
                            onChange={setNationality}
                            placeholder="Select nationality"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Country of Residence</Label>
                        <CountrySelect
                            value={residence}
                            onChange={setResidence}
                            placeholder="Select country"
                        />
                    </div>
                </div>
            </div>

            <FileUpload
                label="Passport Size Photo"
                description="SVG, PNG, JPG or GIF (max. 800x400px)"
                icon="camera"
            />

            <div className="flex justify-between pt-4">
                <Button variant="ghost" className="px-6 text-gray-500">
                    Save Draft
                </Button>
                <Button onClick={onNext} className="bg-[#009b4d] hover:bg-[#007a3d] px-8 py-6 text-base font-semibold gap-2">
                    Continue to Steps 2 <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}
