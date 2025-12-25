"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import { Plane, Hotel, Home, ArrowLeft, ArrowRight } from "lucide-react"

export function Step7Travel({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const [arrivalDate, setArrivalDate] = useState<Date>()
    const [departureDate, setDepartureDate] = useState<Date>()
    const [accommodationType, setAccommodationType] = useState("")

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="space-y-6">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <Plane className="w-5 h-5 text-green-600" />
                    ARRIVAL DETAILS
                </h2>

                <p className="text-sm text-gray-600 font-medium">
                    Please provide your flight details accommodation plans in Addis Ababa. This information is to coordinate
                    with immigration services and ensure a smooth arrival.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Expected Arrival Date</Label>
                        <DatePicker
                            date={arrivalDate}
                            setDate={setArrivalDate}
                            placeholder="mm/dd/yyyy"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Expected Airlines</Label>
                        <Select>
                            <SelectTrigger className="bg-gray-50/50 h-11 border-gray-200 shadow-none">
                                <SelectValue placeholder="Select Airline" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ethiopian">Ethiopian Airlines</SelectItem>
                                <SelectItem value="emirates">Emirates</SelectItem>
                                <SelectItem value="qatar">Qatar Airways</SelectItem>
                                <SelectItem value="turkish">Turkish Airlines</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Flight Number</Label>
                        <Input
                            placeholder="e.g. ET 302"
                            className="bg-gray-50/50 h-11 border-gray-200 shadow-none"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Expected Departure Date</Label>
                        <DatePicker
                            date={departureDate}
                            setDate={setDepartureDate}
                            placeholder="mm/dd/yyyy"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <Hotel className="w-5 h-5 text-orange-500" />
                    ACCOMMODATION ADDIS ABABA
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button
                        type="button"
                        variant={accommodationType === "hotel" ? "default" : "outline"}
                        onClick={() => setAccommodationType("hotel")}
                        className={`h-auto py-4 flex flex-col items-center gap-2 ${accommodationType === "hotel" ? "bg-gray-800 text-white" : ""
                            }`}
                    >
                        <Hotel className="w-5 h-5" />
                        <span className="text-sm">Hotel</span>
                    </Button>
                    <Button
                        type="button"
                        variant={accommodationType === "guesthouse" ? "default" : "outline"}
                        onClick={() => setAccommodationType("guesthouse")}
                        className={`h-auto py-4 flex flex-col items-center gap-2 ${accommodationType === "guesthouse" ? "bg-gray-800 text-white" : ""
                            }`}
                    >
                        <Home className="w-5 h-5" />
                        <span className="text-sm">Guesthouse</span>
                    </Button>
                    <Button
                        type="button"
                        variant={accommodationType === "private" ? "default" : "outline"}
                        onClick={() => setAccommodationType("private")}
                        className={`h-auto py-4 flex flex-col items-center gap-2 ${accommodationType === "private" ? "bg-gray-800 text-white" : ""
                            }`}
                    >
                        <Home className="w-5 h-5" />
                        <span className="text-sm">Private Residence</span>
                    </Button>
                </div>

                <div className="space-y-1.5">
                    <Label className="text-xs text-gray-500">Hotel Name / Guesthouse / Residence*</Label>
                    <Input
                        placeholder="e.g. Sheraton Hotel, Bole"
                        className="bg-gray-50/50 h-11 border-gray-200 shadow-none"
                    />
                </div>

                <div className="space-y-1.5">
                    <Label className="text-xs text-gray-500">Please provide the full name or address of where you will be staying</Label>
                    <Textarea
                        placeholder="Full address including street, area, and any landmarks"
                        className="min-h-[80px] bg-gray-50/50 border-gray-200 shadow-none resize-none"
                    />
                </div>
            </div>

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
