"use client"

import { Quote } from "lucide-react"

const logos = [
    { name: "BBC", url: "https://upload.wikimedia.org/wikipedia/commons/4/41/BBC_Logo_2021.svg" },
    { name: "CNN", url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/CNN.svg" },
    { name: "Al Jazeera", url: "https://upload.wikimedia.org/wikipedia/en/f/f2/Aljazeera_eng.svg" },
    { name: "Reuters", url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Reuters_Logo.svg" }
]

export function SocialProof() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 p-1.5 px-3 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest">
                            Journalist Feedback
                        </div>
                        <div className="relative">
                            <Quote className="absolute -top-10 -left-10 h-20 w-20 text-slate-50 opacity-10" />
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight italic">
                                "The digital accreditation process was remarkably smooth. I had my digital badge before I even boarded my flight to Addis Ababa."
                            </h3>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-slate-200" /> {/* Placeholder for avatar */}
                            <div>
                                <p className="font-black text-slate-900">Anupam Adhikari</p>
                                <p className="text-sm font-bold text-slate-500">Sr. International Correspondent</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full lg:w-auto">
                        <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
                            <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">
                                Trusted by Global Media
                            </p>
                            <div className="grid grid-cols-2 gap-12">
                                {logos.map((logo, index) => (
                                    <div key={index} className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                        <img src={logo.url} alt={logo.name} className="h-8 max-w-full" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
