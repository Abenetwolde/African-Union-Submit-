"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ShieldAlert, Smartphone, Fingerprint } from "lucide-react"

const infoCards = [
    {
        icon: CheckCircle2,
        title: "What You'll Need",
        description: "Prepare these documents before starting your application to ensure a smooth registration.",
        items: [
            "Valid international passport",
            "Official AU invitation code",
            "Comprehensive equipment list",
            "Professional affiliation letter"
        ],
        gradient: "from-blue-500 to-blue-600",
        shadow: "shadow-blue-500/20",
        iconColor: "text-blue-500"
    },
    {
        icon: ShieldAlert,
        title: "Secure & Multi-Agency",
        description: "Your data is reviewed by specialized Ethiopian authorities for a seamless arrival experience.",
        items: [
            "Ethiopian Media Authority (EMA)",
            "Immigration & Customs review",
            "INSA Security Clearance",
            "Secure end-to-end encryption"
        ],
        gradient: "from-emerald-500 to-emerald-600",
        shadow: "shadow-emerald-500/20",
        iconColor: "text-emerald-500"
    },
    {
        icon: Smartphone,
        title: "Your Digital Badge",
        description: "Receive a high-security digital credential upon approval, sent directly to your email.",
        items: [
            "Encrypted QR code technology",
            "Fast-track airport clearance",
            "Contactless venue access",
            "Real-time status updates"
        ],
        gradient: "from-purple-500 to-purple-600",
        shadow: "shadow-purple-500/20",
        iconColor: "text-purple-500"
    }
]

export function InfoSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="absolute -left-64 top-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
            <div className="absolute -right-64 bottom-24 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-60" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Streamlined Accreditation Process</h2>
                    <p className="text-lg text-slate-500 font-medium">We've simplified the journey for international media to ensure a smooth arrival in Addis Ababa.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {infoCards.map((card, index) => (
                        <Card key={index} className="group border-slate-100 shadow-xl shadow-slate-200/40 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-slate-300/40 transition-all duration-300 hover:-translate-y-1">
                            <CardHeader className="p-10 pb-2">
                                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 shadow-lg ${card.shadow} group-hover:scale-110 transition-transform duration-300`}>
                                    <card.icon className="h-7 w-7 text-white" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{card.title}</CardTitle>
                                <p className="text-slate-500 font-medium mt-3 leading-relaxed">
                                    {card.description}
                                </p>
                            </CardHeader>
                            <CardContent className="p-10 pt-6">
                                <ul className="space-y-4">
                                    {card.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${card.gradient} shrink-0`} />
                                            <span className="text-sm font-semibold text-slate-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
