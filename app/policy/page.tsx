"use client"

import { SiteHeader } from "@/components/site-header"

export default function PolicyPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <SiteHeader />
            <div className="container mx-auto py-32 px-4">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>

                    <div className="prose prose-slate max-w-none">
                        <p className="lead text-lg text-slate-600 mb-8">
                            The African Union Commission and Ethiopian Media Authority are committed to protecting your personal data.
                        </p>

                        <h3 className="text-xl font-bold text-slate-800 mb-4">Data Collection</h3>
                        <p className="text-slate-600 mb-6">
                            We collect personal information solely for the purpose of security clearance and accreditation processing. This includes your passport details, contact information, and professional affiliation.
                        </p>

                        <h3 className="text-xl font-bold text-slate-800 mb-4">Data Sharing</h3>
                        <p className="text-slate-600 mb-6">
                            Your data is shared securely between the Ethiopian Media Authority, Immigration Services, and the African Union Security Department to facilitate your entry and access.
                        </p>

                        <h3 className="text-xl font-bold text-slate-800 mb-4">Data Retention</h3>
                        <p className="text-slate-600 mb-6">
                            Your personal data will be retained for the duration of the Summit and a subsequent period as required by law for security auditing purposes.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
