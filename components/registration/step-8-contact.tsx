"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PhoneInput } from "@/components/ui/phone-input"
import { Mail, Phone, User, AlertCircle, ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react"

export function Step8Contact({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const [personalPhone, setPersonalPhone] = useState("")
    const [whatsappNumber, setWhatsappNumber] = useState("")
    const [emergencyPhone, setEmergencyPhone] = useState("")

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="space-y-6">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <User className="w-5 h-5 text-blue-500" />
                    PERSONAL INFORMATION
                </h2>

                <p className="text-sm text-gray-600 font-medium">
                    Please provide reachable contact details for your stay in Ethiopia.
                </p>

                <div className="space-y-1.5">
                    <Label className="text-xs text-gray-500">Personal Email Address</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                            type="email"
                            placeholder="your.email@example.com"
                            className="bg-gray-50/50 h-11 border-gray-200 shadow-none pl-10"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Personal Mobile Number</Label>
                        <PhoneInput
                            value={personalPhone}
                            onChange={setPersonalPhone}
                            placeholder="Enter phone number"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">WhatsApp Number</Label>
                        <PhoneInput
                            value={whatsappNumber}
                            onChange={setWhatsappNumber}
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <Phone className="w-5 h-5 text-red-500" />
                    EMERGENCY CONTACT
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Full Name</Label>
                        <Input
                            placeholder="e.g. John Doe"
                            className="bg-gray-50/50 h-11 border-gray-200 shadow-none"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Country/ Phone</Label>
                        <Select>
                            <SelectTrigger className="bg-gray-50/50 h-11 border-gray-200 shadow-none">
                                <SelectValue placeholder="+1 US" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="us">+1 United States</SelectItem>
                                <SelectItem value="uk">+44 United Kingdom</SelectItem>
                                <SelectItem value="et">+251 Ethiopia</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <Label className="text-xs text-gray-500">Phone Number</Label>
                    <PhoneInput
                        value={emergencyPhone}
                        onChange={setEmergencyPhone}
                        placeholder="+251123456"
                    />
                </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                        <p className="text-sm font-semibold text-blue-900">Privacy Notice</p>
                        <p className="text-xs text-blue-700">
                            Your contact information will ONLY be used by the Ethiopian Media Authority for accreditation
                            purposes and emergency communication. We will not share your details with third parties without
                            your explicit consent, except as required by law.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between pt-4">
                <Button onClick={onBack} variant="secondary" className="px-6 gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                </Button>
                <Button onClick={onNext} className="bg-[#009b4d] hover:bg-[#007a3d] px-8 py-6 text-base font-semibold gap-2">
                    Continue <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}
