import type { Metadata } from "next";
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
    title: "Media Accreditation - Africa Union",
    description: "Official Media Accreditation Portal",
}

export default function RegistrationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative flex min-h-screen flex-col font-sans">
            <div className="fixed inset-0 z-0">
                <Image
                    src="/hero-new.png"
                    alt="African Union Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <SiteHeader />

            <main className="relative z-10 flex flex-1 flex-col items-center justify-center p-4 pt-24 pb-8">
                <div className="w-full max-w-4xl p-0">
                    {children}
                </div>
            </main>

            <div className="relative z-10">
                <SiteFooter />
            </div>
        </div>
    )
}
