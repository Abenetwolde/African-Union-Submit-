"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import { CalendarIcon, User, Globe, ArrowRight } from "lucide-react"
import { FileUpload } from "./file-upload"
import { CountrySelect } from "@/components/ui/country-select"

export function Step1Personal({ onNext }: { onNext: () => void }) {
    const [nationality, setNationality] = useState("")
    const [residence, setResidence] = useState("")
    const [date, setDate] = useState<Date>()

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                    <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center">
                        <User className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Personal Details</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <Label>First Name</Label>
                        <Input placeholder="Given name" />
                    </div>
                    <div className="space-y-2">
                        <Label>Middle Name</Label>
                        <Input placeholder="Father's name" />
                    </div>
                    <div className="space-y-2">
                        <Label>Last Name</Label>
                        <Input placeholder="Grandfather's name" />
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                    <div className="h-10 w-10 rounded-full bg-orange-50 flex items-center justify-center">
                        <CalendarIcon className="w-5 h-5 text-orange-500" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Demographics</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label>Gender</Label>
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
                    <div className="space-y-2">
                        <Label>Date of Birth</Label>
                        <DatePicker
                            date={date}
                            setDate={setDate}
                            placeholder="mm/dd/yyyy"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-blue-500" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Residence</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label>Nationality</Label>
                        <CountrySelect
                            value={nationality}
                            onChange={setNationality}
                            placeholder="Select nationality"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Country of Residence</Label>
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

            <div className="flex justify-between items-center pt-8 border-t border-gray-100 mt-8">
                <Link href="/policy" target="_blank" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 hover:underline">
                    Read Privacy Policy
                </Link>

                <Button onClick={onNext} className="bg-emerald-600 hover:bg-emerald-700 px-8 py-6 text-base font-bold shadow-lg shadow-emerald-600/20 rounded-xl">
                    Next Step <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>
        </div>
    )
}
