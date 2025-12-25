"use client"

import { Mail, ClipboardCheck, BadgeCheck, Plane, Building2 } from "lucide-react"

const steps = [
    {
        icon: Mail,
        title: "Receive Invitation",
        description: "Get your official invitation code from AU Commission.",
        color: "bg-blue-500"
    },
    {
        icon: ClipboardCheck,
        title: "Digital Registration",
        description: "Submit your details and equipment list securely.",
        color: "bg-emerald-500"
    },
    {
        icon: BadgeCheck,
        title: "Pre-Approval",
        description: "Receive your digital badge with secure QR code.",
        color: "bg-emerald-500"
    },
    {
        icon: Plane,
        title: "Airport Clearance",
        description: "Smooth entry with pre-cleared media credentials.",
        color: "bg-indigo-500"
    },
    {
        icon: Building2,
        title: "Summit Access",
        description: "Full access to events at AU Headquarters.",
        color: "bg-rose-500"
    }
]

export function ProcessTracker() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900">Your Journey to the Summit</h2>
                    <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                        A streamlined, multi-agency process designed for maximum efficiency and security.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="group relative flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:-translate-y-2">
                                <div className={`h-24 w-24 rounded-3xl ${step.color} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                    <step.icon className="h-10 w-10 text-white" />

                                    {/* Step Number Indicator */}
                                    <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-xs font-black text-slate-900 shadow-sm">
                                        {index + 1}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-bold text-lg text-slate-900 leading-tight">{step.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow indicator for mobile/tablet */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex items-center justify-center mt-4">
                                        <div className="h-8 w-px bg-slate-200" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
