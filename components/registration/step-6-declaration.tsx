"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { FileText, ArrowLeft, CheckCircle2 } from "lucide-react"

export function Step6Declaration({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
    const [agreed, setAgreed] = useState(false)

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="space-y-6">
                <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <FileText className="w-5 h-5 text-blue-500" />
                    DECLARATION & CONSENT
                </h2>

                <p className="text-sm text-gray-600 font-medium">
                    Please review the statement below and confirm the accuracy of your application.
                </p>

                {/* Official Declaration Box */}
                <div className="bg-gray-50 border-l-4 border-green-600 rounded-lg p-6 space-y-4">
                    <h3 className="font-bold text-gray-900 text-base">Official Declaration</h3>

                    <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                        <p>
                            I, the undersigned, hereby declare that all of information provided in this journalist invitation request is true,
                            accurate, and complete to the best of my knowledge. I understand that any false or misleading information may result in
                            the immediate rejection of my application or revocation of any accreditation granted by the Ethiopian Media Authority.
                        </p>

                        <p>
                            I further agree to comply with all relevant laws and regulations governing media operations, a acknowledge that
                            my accreditation is subject to the terms and conditions set forth by the Authority.
                        </p>
                    </div>
                </div>

                {/* Checkbox Agreement */}
                <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                    <Checkbox
                        id="agreement"
                        checked={agreed}
                        onCheckedChange={(checked) => setAgreed(checked as boolean)}
                        className="mt-1"
                    />
                    <label
                        htmlFor="agreement"
                        className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                    >
                        <span className="font-semibold">I confirm and agree</span>
                        <br />
                        By checking this box, I confirm that I have read, understood, and agreed to the Official declaration above
                        and all terms and conditions governing this application.
                    </label>
                </div>
            </div>

            <div className="flex justify-between pt-4">
                <Button onClick={onBack} variant="secondary" className="px-6 gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back
                </Button>
                <Button
                    onClick={onNext}
                    disabled={!agreed}
                    className="bg-[#009b4d] hover:bg-[#007a3d] px-8 py-6 text-base font-semibold gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Complete Application <CheckCircle2 className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}
