"use client"

import { Globe, Mail, ShieldCheck } from "lucide-react"
import Link from "next/link"

export function LandingFooter() {
    return (
        <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-slate-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    <div className="md:col-span-5 space-y-8">
                        <div className="flex items-center gap-4">
                            {/* Simplified Logo Placeholders */}
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center p-2">
                                <img src="https://au.int/sites/default/files/styles/medium/public/logo-au_0.png" alt="AU" className="h-full object-contain" />
                            </div>
                            <div className="h-10 w-px bg-slate-800" />
                            <div className="space-y-0.5">
                                <p className="text-sm font-black tracking-tight">African Union Summit</p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Media Accreditation Portal</p>
                            </div>
                        </div>

                        <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
                            The official gateway for international media accreditation,
                            managed by the Ethiopian Media Authority (EMA) in collaboration
                            with the African Union Commission.
                        </p>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-sm text-blue-400 font-bold">
                                <ShieldCheck className="h-4 w-4" /> Secure Portal
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400 font-bold hover:text-white transition-colors cursor-pointer">
                                <Globe className="h-4 w-4" /> English (US)
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-500">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href="/registration" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Start Application</Link></li>
                            <li><button className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Check Status</button></li>
                            <li><button className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Accreditation Guide</button></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-500">Legal</h4>
                        <ul className="space-y-4">
                            <li><button className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Privacy Policy</button></li>
                            <li><button className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Terms of Service</button></li>
                            <li><button className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Cookie Policy</button></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3 space-y-6">
                        <h4 className="font-black text-xs uppercase tracking-[0.2em] text-slate-500">Support</h4>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Email Support</p>
                                    <p className="text-xs font-bold">support@ema.gov.et</p>
                                </div>
                            </div>
                            <button className="w-full py-2 px-4 rounded-xl bg-white text-slate-950 text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-colors">
                                Contact EMA
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xs font-bold text-slate-500">
                        &copy; {new Date().getFullYear()} Government of Ethiopia & African Union. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <img src="https://ema.gov.et/logo.png" alt="EMA" className="h-6 opacity-50 grayscale" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
