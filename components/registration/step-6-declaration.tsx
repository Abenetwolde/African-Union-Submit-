"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { FileText, ArrowLeft, CheckCircle2 } from "lucide-react"

export function Step6Declaration({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const [agreed, setAgreed] = useState(false)
    const [consent, setConsent] = useState(false)

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-500" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Declaration & Consent</h2>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
                    <h3 className="font-bold text-slate-900 text-base">Legal Declaration</h3>

                    <div className="space-y-3 text-sm text-slate-600 leading-relaxed font-medium">
                        <p>
                            I, the undersigned, hereby declare that all of information provided in this journalist invitation request is true,
                            accurate, and complete to the best of my knowledge. I understand that any false or misleading information may result in
                            the immediate rejection of my application.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    {/* Declaration Checkbox */}
                    <div className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-emerald-200 transition-colors shadow-sm">
                        <Checkbox
                            id="agreement"
                            checked={agreed}
                            onCheckedChange={(checked) => setAgreed(checked as boolean)}
                            className="mt-1 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                        />
                        <label
                            htmlFor="agreement"
                            className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                        >
                            <span className="font-bold text-gray-900 block mb-1">I confirm the declaration</span>
                            By checking this box, I confirm that I have read, understood, and agreed to the Official declaration above.
                        </label>
                    </div>

                    {/* Data Consent Checkbox */}
                    <div className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-emerald-200 transition-colors shadow-sm">
                        <Checkbox
                            id="consent"
                            checked={consent}
                            onCheckedChange={(checked) => setConsent(checked as boolean)}
                            className="mt-1 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                        />
                        <label
                            htmlFor="consent"
                            className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                        >
                            <span className="font-bold text-gray-900 block mb-1">Data Processing Consent</span>
                            I explicitly consent to the processing of my personal data by the African Union Commission and Ethiopian Media Authority for security clearance and accreditation purposes.
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-gray-100 mt-8">
                <Button onClick={onBack} variant="outline" className="px-6 py-6 border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 cursor-pointer">
                    <ArrowLeft className="w-5 h-5 mr-2" /> Previous Step
                </Button>

                <Button
                    onClick={onNext}
                    disabled={!agreed || !consent}
                    className="bg-emerald-600 hover:bg-emerald-700 px-8 py-6 text-base font-bold shadow-lg shadow-emerald-600/20 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Submit Application <CheckCircle2 className="ml-2 w-5 h-5" />
                </Button>
            </div>
        </div>
    )
}
