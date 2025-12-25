"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Briefcase, Target, Globe, ArrowLeft, ArrowRight } from "lucide-react"

export function Step4RoleAssignment({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const [mediaCategory, setMediaCategory] = useState("")
    const [role, setRole] = useState("")
    const [assignment, setAssignment] = useState("")
    const [assignmentRole, setAssignmentRole] = useState("")
    const [sector, setSector] = useState("")
    const [coverage, setCoverage] = useState("")
    const [purpose, setPurpose] = useState("")

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="space-y-1">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <Briefcase className="w-5 h-5 text-blue-500" />
                    MEDIA DETAILS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Media Category</Label>
                        <Select value={mediaCategory} onValueChange={setMediaCategory}>
                            <SelectTrigger className="bg-gray-50/50 h-11 border-gray-200 shadow-none">
                                <SelectValue placeholder="Foreign Media" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="foreign">Foreign Media</SelectItem>
                                <SelectItem value="local">Local Media</SelectItem>
                                <SelectItem value="international">International Media</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Role</Label>
                        <Select value={role} onValueChange={setRole}>
                            <SelectTrigger className="bg-gray-50/50 h-11 border-gray-200 shadow-none">
                                <SelectValue placeholder="All Member" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Member</SelectItem>
                                <SelectItem value="journalist">Journalist</SelectItem>
                                <SelectItem value="photographer">Photographer</SelectItem>
                                <SelectItem value="videographer">Videographer</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Assignment</Label>
                        <Select value={assignment} onValueChange={setAssignment}>
                            <SelectTrigger className="bg-gray-50/50 h-11 border-gray-200 shadow-none">
                                <SelectValue placeholder="NGO Media" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ngo">NGO Media</SelectItem>
                                <SelectItem value="government">Government</SelectItem>
                                <SelectItem value="private">Private</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="space-y-1">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <Target className="w-5 h-5 text-red-500" />
                    ASSIGNMENT ROLE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Assignment Role</Label>
                        <Select value={assignmentRole} onValueChange={setAssignmentRole}>
                            <SelectTrigger className="bg-gray-50/50 h-11 border-gray-200 shadow-none">
                                <SelectValue placeholder="Camera Person" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="camera">Camera Person</SelectItem>
                                <SelectItem value="reporter">Reporter</SelectItem>
                                <SelectItem value="editor">Editor</SelectItem>
                                <SelectItem value="producer">Producer</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Sector</Label>
                        <Select value={sector} onValueChange={setSector}>
                            <SelectTrigger className="bg-gray-50/50 h-11 border-gray-200 shadow-none">
                                <SelectValue placeholder="Freelancer" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="freelance">Freelancer</SelectItem>
                                <SelectItem value="staff">Staff</SelectItem>
                                <SelectItem value="contractor">Contractor</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Type/Position</Label>
                        <Select>
                            <SelectTrigger className="bg-gray-50/50 h-11 border-gray-200 shadow-none">
                                <SelectValue placeholder="Type/Position" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="senior">Senior</SelectItem>
                                <SelectItem value="junior">Junior</SelectItem>
                                <SelectItem value="lead">Lead</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="space-y-1">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <Globe className="w-5 h-5 text-green-600" />
                    PURPOSE OF COVERAGE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Coverage</Label>
                        <Select value={coverage} onValueChange={setCoverage}>
                            <SelectTrigger className="bg-gray-50/50 h-11 border-gray-200 shadow-none">
                                <SelectValue placeholder="News" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="news">News</SelectItem>
                                <SelectItem value="documentary">Documentary</SelectItem>
                                <SelectItem value="feature">Feature</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Purpose</Label>
                        <Select value={purpose} onValueChange={setPurpose}>
                            <SelectTrigger className="bg-gray-50/50 h-11 border-gray-200 shadow-none">
                                <SelectValue placeholder="Documentary" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="documentary">Documentary</SelectItem>
                                <SelectItem value="news">News Coverage</SelectItem>
                                <SelectItem value="interview">Interview</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-gray-500">Other</Label>
                        <Select>
                            <SelectTrigger className="bg-gray-50/50 h-11 border-gray-200 shadow-none">
                                <SelectValue placeholder="Live Broadcast" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="live">Live Broadcast</SelectItem>
                                <SelectItem value="recorded">Recorded</SelectItem>
                                <SelectItem value="both">Both</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
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
