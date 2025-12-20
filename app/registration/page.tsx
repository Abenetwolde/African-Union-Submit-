"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Step1Personal } from "@/components/registration/step-1-personal"
import { Step2Passport } from "@/components/registration/step-2-passport"
import { Step3Media } from "@/components/registration/step-3-media"
import { Step4RoleAssignment } from "@/components/registration/step-4-role-assignment"
import { Step5Equipment } from "@/components/registration/step-5-equipment"
import { Step6Declaration } from "@/components/registration/step-6-declaration"
import { Step7Travel } from "@/components/registration/step-7-travel"
import { Step8Contact } from "@/components/registration/step-8-contact"
import { Plane } from "lucide-react"

export default function RegistrationPage() {
    const [step, setStep] = useState(1)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const totalSteps = 8

    const nextStep = () => {
        if (step === 8) {
            setIsSubmitted(true)
        } else if (step < totalSteps) {
            setStep(step + 1)
        }
    }

    const prevStep = () => {
        if (step > 1) setStep(step - 1)
    }

    const getProgress = () => {
        return (step / totalSteps) * 100
    }

    if (isSubmitted) {
        return (
            <div className="flex flex-col w-full max-w-2xl mx-auto my-auto items-center justify-center min-h-[600px]">
                <div className="bg-white rounded-3xl p-12 text-center w-full shadow-2xl animate-in zoom-in-95 duration-500">
                    <div className="flex justify-center mb-8">
                        <div className="rounded-full bg-green-100 p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#22c55e]">
                                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Application Submitted!</h2>
                    <p className="text-gray-600 mb-10 text-lg font-medium leading-relaxed">
                        Thank you! Your application for journalist accreditation has been securely received.
                    </p>

                    <div className="flex h-1.5 w-64 mx-auto mb-10 rounded-full overflow-hidden">
                        <div className="flex-1 bg-[#1e7e34]" />
                        <div className="flex-1 bg-[#facc15]" />
                        <div className="flex-1 bg-[#dc2626]" />
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-green-200 px-6 py-2 text-sm font-bold tracking-wide text-green-700 bg-green-50">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#22c55e] animate-pulse" />
                        RECEIVED
                    </div>
                </div>

                <p className="mt-8 text-sm font-semibold text-gray-800 tracking-wide text-center">
                    &copy; 2025 African Union — Official Media Accreditation Platform.
                </p>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
                {/* Intro Section - Glass Header */}
                {/* //backdrop-blur-sm */}
                <div className="bg-white/40  p-6 md:p-12  border-b border-white/20">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-wider text-green-700 shadow-sm mb-4">
                        <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
                        OFFICIAL INVITATION PORTAL
                    </div>
                    <p className="max-w-3xl text-md md:text-md font-medium leading-relaxed text-white drop-shadow-sm">
                        Begin your journey by completing the media accreditation process for foreign journalists. We look forward to hosting you.
                    </p>
                </div>

                {/* Main Form Content */}
                <div className="bg-white min-h-[600px] flex flex-col md:flex-row w-full">
                    <div className="flex-1 p-8 md:p-14 relative">
                        <div className="absolute top-8 right-8 text-green-600">
                            {step === 2 && <Plane className="w-8 h-8" />}
                        </div>

                        <div className="mb-8 space-y-4">
                            <div className="flex justify-between items-center text-sm font-bold tracking-wide text-gray-900 uppercase">
                                <span>Step {step} of {totalSteps}</span>
                                {step === 1 && <span className="text-xs text-gray-500 font-normal normal-case">Next: Accreditation Details</span>}
                            </div>

                            <h1 className="text-3xl font-bold text-gray-800">
                                {step === 1 && "Personal Information"}
                                {step === 2 && "Passport Information"}
                                {step === 3 && "Media Organization Information"}
                                {step === 4 && "Role & Assignment"}
                                {step === 5 && "Equipment List"}
                                {step === 6 && "Declaration & Consent"}
                                {step === 7 && "Travel Information"}
                                {step === 8 && "Contact Details"}
                            </h1>

                            <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[#34d399] transition-all duration-500 ease-out rounded-full"
                                    style={{ width: `${getProgress()}%` }}
                                />
                            </div>

                            {step === 1 && (
                                <p className="text-gray-600 font-medium border-l-4 border-green-200 pl-4 py-1">
                                    Please provide your personal details exactly as they appear on your passport.
                                </p>
                            )}
                            {step === 2 && (
                                <p className="text-gray-600 font-medium border-l-4 border-green-200 pl-4 py-1">
                                    Please provide your official travel document information.
                                    Ensure your passport is valid for at least 6 months beyond your intended date of entry.
                                </p>
                            )}
                            {step === 3 && (
                                <p className="text-gray-600 font-medium border-l-4 border-green-200 pl-4 py-1">
                                    Please provide official details about the media house you represent. This information will be used to verify your credentials.
                                </p>
                            )}
                            {step === 4 && (
                                <p className="text-gray-600 font-medium border-l-4 border-green-200 pl-4 py-1">
                                    Please select your permanent category, specify your role for the assignment and purpose of coverage. This information helps us process your accreditation accurately.
                                </p>
                            )}
                            {step === 5 && (
                                <p className="text-gray-600 font-medium border-l-4 border-green-200 pl-4 py-1">
                                    Please declare all professional recording and broadcasting equipment you intend to bring. This information is required for expedited customs clearance.
                                </p>
                            )}
                            {step === 6 && (
                                <p className="text-gray-600 font-medium border-l-4 border-green-200 pl-4 py-1">
                                    Please review the statement below and confirm the accuracy of your application.
                                </p>
                            )}
                            {step === 7 && (
                                <p className="text-gray-600 font-medium border-l-4 border-green-200 pl-4 py-1">
                                    Please provide your flight details accommodation plans in Addis Ababa. This information is to coordinate with immigration services and ensure a smooth arrival.
                                </p>
                            )}
                            {step === 8 && (
                                <p className="text-gray-600 font-medium border-l-4 border-green-200 pl-4 py-1">
                                    Please provide reachable contact details for your stay in Ethiopia.
                                </p>
                            )}
                        </div>

                        <div className="mt-8">
                            {step === 1 && <Step1Personal onNext={nextStep} />}
                            {step === 2 && <Step2Passport onNext={nextStep} onBack={prevStep} />}
                            {step === 3 && <Step3Media onNext={nextStep} onBack={prevStep} />}
                            {step === 4 && <Step4RoleAssignment onNext={nextStep} onBack={prevStep} />}
                            {step === 5 && <Step5Equipment onNext={nextStep} onBack={prevStep} />}
                            {step === 8 && <Step6Declaration onNext={nextStep} onBack={prevStep} />}
                            {step === 6 && <Step7Travel onNext={nextStep} onBack={prevStep} />}
                            {step === 7 && <Step8Contact onNext={nextStep} onBack={prevStep} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
