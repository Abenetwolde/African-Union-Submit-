import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

function SiteFooter() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>African Union Headquarters</p>
            <p>P.O. Box 3243, Roosvelt Street W21K19</p>
            <p>Addis Ababa, Ethiopia</p>
            <p>Tel: +251 11 551 77 00</p>
            <p>Fax: +251 11 551 78 44</p>
            <p>Email: chairperson@africa-union.org</p>
            <p>Website: <a href="https://au.int" className="text-blue-400 hover:underline">au.int</a></p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com/AfricanUnionCommission/" className="text-blue-400 hover:underline">Facebook</a></li>
              <li><a href="https://x.com/_AfricanUnion" className="text-blue-400 hover:underline">X (Twitter)</a></li>
              <li><a href="https://www.instagram.com/africanunion_official/" className="text-blue-400 hover:underline">Instagram</a></li>
              <li><a href="https://www.youtube.com/AUCommission" className="text-blue-400 hover:underline">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-blue-400 hover:underline">About the African Union</a></li>
              <li><a href="/faq" className="text-blue-400 hover:underline">FAQ</a></li>
              <li><a href="/contact" className="text-blue-400 hover:underline">Contact Support</a></li>
              <li><a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-600 pt-4">
          <p>&copy; {new Date().getFullYear()} African Union. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col font-sans">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/hero.png"
          alt="African Union Media"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <SiteHeader />

      <main className="container relative z-10 mx-auto flex flex-1 flex-col items-center justify-center px-4 text-center text-white">
        <div className="max-w-4xl space-y-6 pt-20">
          <h1 className="text-5xl font-bold tracking-tight md:text-4xl lg:text-7xl drop-shadow-md">
            Welcome to the African Union Media Accreditation Portal
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-white/90 md:text-xl md:leading-relaxed drop-shadow-sm">
            The African Union (AU) Media Accreditation Portal provides official journalists with a streamlined process to apply for accreditation to cover AU summits, conferences, and events. This platform ensures media professionals can access key information, participate in promoting the AU&apos;s Agenda 2063 for a united, prosperous, and peaceful Africa, and contribute to transparent reporting across the continent.
          </p>
        

          <div className="pt-8 mb-10">
            <Link href="/registration">
              <Button
                size="lg"
                className="h-14 rounded-sm bg-[#1e7e34] px-8 text-lg font-semibold text-white hover:bg-[#155d27] shadow-lg transition-transform hover:scale-105"
              >
                Apply for Media Accreditation
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <div className="relative z-10">
        <SiteFooter />
      </div>
    </div>
  )
}