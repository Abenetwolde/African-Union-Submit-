"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Step1Personal } from "@/components/registration/step-1-personal"
import { Step2Passport } from "@/components/registration/step-2-passport"
import { Step3Media } from "@/components/registration/step-3-media"
import { Step4RoleAssignment } from "@/components/registration/step-4-role-assignment"
import { Step5Equipment } from "@/components/registration/step-5-equipment"
import { Step6Declaration } from "@/components/registration/step-6-declaration"
import { Step7Travel } from "@/components/registration/step-7-travel"
import { Step8Contact } from "@/components/registration/step-8-contact"
import { CheckCircle2, X } from "lucide-react"

export default function RegistrationPage() {
    const [step, setStep] = useState(1)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [timeLeft, setTimeLeft] = useState<string>("")
    const totalSteps = 8

    // 2-Week Countdown Logic
    useEffect(() => {
        const targetDate = new Date()
        targetDate.setDate(targetDate.getDate() + 14) // 2 weeks from now

        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = targetDate.getTime() - now

            if (distance < 0) {
                clearInterval(interval)
                setTimeLeft("DEADLINE PASSED")
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24))
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                const seconds = Math.floor((distance % (1000 * 60)) / 1000)
                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

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
            <div className="flex flex-col w-full items-center justify-center min-h-[500px] animate-in fade-in zoom-in-95 duration-500">
                <div className="bg-white rounded-3xl p-12 text-center w-full max-w-lg shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />

                    <div className="flex justify-center mb-8">
                        {/* Draw-in animation for checkmark */}
                        <div className="rounded-full bg-emerald-50 p-4 ring-1 ring-emerald-100 relative">
                            <svg className="w-16 h-16 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" className="animate-[draw_0.8s_ease-out_forwards] [stroke-dasharray:100] [stroke-dashoffset:100]" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Application Received</h2>
                    <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed">
                        We have securely received your accreditation request. You will receive an email shortly containing your digital badge pending approval.
                    </p>

                    <Link href="/">
                        <button className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full max-w-5xl mx-auto">
            {/* Header Badge */}
            <div className="flex justify-start mb-6 w-full max-w-4xl mx-auto">
                <div className="bg-white text-emerald-700 px-6 py-2 rounded-full font-bold text-sm shadow-sm flex items-center justify-between w-auto gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        OFFICIAL INVITATION PORTAL
                    </div>
                    {/* Countdown in same line or nearby */}
                    <div className="text-slate-500 font-mono text-xs border-l border-slate-200 pl-4">
                        DEADLINE: <span className="text-slate-900">{timeLeft || "..."}</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden min-h-[600px] relative">
                {/* Close Button */}
                <Link
                    href="/"
                    className="absolute top-6 right-6 z-20 p-2 text-red-500 hover:text-slate-600 rounded-full transition-all hover:bg-slate-50"
                    title="Close Registration"
                >
                    <X className="w-6 h-6" />
                </Link>

                {/* Form Header */}
                <div className="px-10 pt-10 pb-4">
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 block">
                        STEP {step} OF {totalSteps}
                    </span>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                        {step === 1 && "Personal Information"}
                        {step === 2 && "Passport Information"}
                        {step === 3 && "Media Organization"}
                        {step === 4 && "Role & Assignment"}
                        {step === 5 && "Equipment List"}
                        {step === 8 && "Declaration"}
                        {step === 6 && "Travel Information"}
                        {step === 7 && "Contact Details"}
                    </h1>
                </div>

                {/* Progress Bar */}
                <div className="px-10 mb-8">
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-500 transition-all duration-500 ease-in-out"
                            style={{ width: `${getProgress()}%` }}
                        />
                    </div>
                    <p className="mt-4 text-slate-500 font-medium text-sm leading-relaxed max-w-2xl">
                        {step === 1 && "Start your accreditation process by providing your personal details as they appear on your identification documents."}
                        {step === 2 && "Enter your valid passport information. Ensure the passport is valid for at least 6 months."}
                        {step === 3 && "Provide details about the media organization you are representing."}
                        {step === 4 && "Please select your journalist category, specify your role for this assignment and purpose of coverage."}
                        {step === 5 && "Please declare all professional recording and broadcasting equipment you intend to bring."}
                        {step === 6 && "Immigration services use this to pre-approve your visa on arrival."}
                        {step === 7 && "We need a local contact in case of emergency during the summit."}
                        {step === 8 && "Review and confirm the accuracy of your information."}
                    </p>
                </div>

                <div className="w-full h-px bg-slate-100" />

                {/* Main Content */}
                <div className="p-10">
                    <div className="max-w-4xl animate-in fade-in slide-in-from-right-4 duration-300" key={step}>
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

            {/* Footer tagline */}
            <div className="mt-8 text-center text-white/60 text-sm font-medium">
                &copy; 2024 African Union Media Accreditation
            </div>
        </div>
    )
}
