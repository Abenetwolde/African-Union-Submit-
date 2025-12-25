"use client"

import { SiteHeader } from "@/components/site-header"

export default function GuidelinesPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <SiteHeader />
            <div className="container mx-auto py-32 px-4">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <h1 className="text-3xl font-bold text-slate-900 mb-6">Media Accreditation Guidelines</h1>

                    <div className="prose prose-slate max-w-none">
                        <p className="lead text-lg text-slate-600 mb-8">
                            Please read the following guidelines carefully before submitting your application for the African Union Summit media accreditation.
                        </p>

                        <h3 className="text-xl font-bold text-slate-800 mb-4">Required Documents</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-slate-600">
                            <li>Valid Passport (minimum 6 months validity)</li>
                            <li>Letter of Assignment from your Media Organization</li>
                            <li>Professional Headshot (White background)</li>
                            <li>List of Equipment with Serial Numbers</li>
                        </ul>

                        <h3 className="text-xl font-bold text-slate-800 mb-4">Process & Timeline</h3>
                        <p className="text-slate-600 mb-4">
                            Applications are reviewed on a rolling basis. The standard processing time is 3-5 business days. Once approved, you will receive a digital badge which you must present upon arrival.
                        </p>

                        <h3 className="text-xl font-bold text-slate-800 mb-4">Code of Conduct</h3>
                        <p className="text-slate-600 mb-8">
                            All accredited media personnel are expected to adhere to the African Union's media code of conduct. Failure to comply may result in the revocation of accreditation.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
