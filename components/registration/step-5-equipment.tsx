"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Camera, Mic, AlertCircle, ArrowLeft, ArrowRight } from "lucide-react"

export function Step5Equipment({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const [needsEquipment, setNeedsEquipment] = useState<boolean | null>(null)
    const [needsRental, setNeedsRental] = useState<boolean | null>(null)

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="space-y-6">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <Camera className="w-5 h-5 text-purple-500" />
                    EQUIPMENT LIST
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Camera Brand & Model</Label>
                        <Input
                            placeholder="e.g. Sony A7S III"
                            className="bg-gray-50/50 h-11 border-gray-200 shadow-none"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Video Camera Brand & Model</Label>
                        <Input
                            placeholder="e.g. Canon EOS R5"
                            className="bg-gray-50/50 h-11 border-gray-200 shadow-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Microphone</Label>
                        <Input
                            placeholder="e.g. Rode NTG4+"
                            className="bg-gray-50/50 h-11 border-gray-200 shadow-none"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Sound Recorder</Label>
                        <Input
                            placeholder="e.g. Zoom H6"
                            className="bg-gray-50/50 h-11 border-gray-200 shadow-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Tripod Stabilizer</Label>
                        <Input
                            placeholder="e.g. Manfrotto MT055"
                            className="bg-gray-50/50 h-11 border-gray-200 shadow-none"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Lighting Equipment</Label>
                        <Input
                            placeholder="e.g. Aputure 120D"
                            className="bg-gray-50/50 h-11 border-gray-200 shadow-none"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <Label className="text-xs text-gray-500">Laptop/ Workstation</Label>
                    <Input
                        placeholder="e.g. MacBook Pro 16"
                    className="bg-gray-50/50 h-11 border-gray-200 shadow-none"
                    />
                </div>
            </div>

            {/* Need Equipment Section */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Mic className="w-5 h-5 text-green-600" />
                    <Label className="text-sm font-semibold text-gray-700">Need Equipment</Label>
                </div>
                <p className="text-sm text-gray-600">Do you need any equipment for the event?</p>
                <div className="flex gap-4">
                    <Button
                        type="button"
                        variant={needsEquipment === false ? "default" : "outline"}
                        onClick={() => setNeedsEquipment(false)}
                        className={needsEquipment === false ? "bg-gray-800 text-white" : ""}
                    >
                        No
                    </Button>
                    <Button
                        type="button"
                        variant={needsEquipment === true ? "default" : "outline"}
                        onClick={() => setNeedsEquipment(true)}
                        className={needsEquipment === true ? "bg-gray-800 text-white" : ""}
                    >
                        Yes
                    </Button>
                </div>
            </div>

            {/* Alert Box */}
            {/* <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                        <p className="text-sm font-semibold text-red-900">Rental Banned</p>
                        <p className="text-xs text-red-700">
                            Please note that renting equipment from the Ethiopian Media Authority (EMA) or other organizations
                            for media rental is strictly prohibited as stated additional documentation for the next step.
                        </p>
                    </div>
                </div>
            </div> */}

            {/* Other Equipment Section */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Camera className="w-5 h-5 text-gray-600" />
                    <Label className="text-sm font-semibold text-gray-700">Other Equipment</Label>
                </div>
                <Textarea
                    placeholder="Please list any other significant equipment (cables, batteries, hard drives, etc)"
                    className="min-h-[100px] bg-gray-50/50 border-gray-200 shadow-none resize-none"
                />
            </div>

            <div className="flex justify-between pt-4">
                <Button onClick={onBack} variant="secondary" className="px-6 gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                </Button>
                <Button onClick={onNext} className="bg-[#ea7600] hover:bg-[#c96500] px-8 py-6 text-base font-semibold gap-2">
                    Next Step <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}
