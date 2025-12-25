import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/landing/HeroSection"
import { ProcessTracker } from "@/components/landing/ProcessTracker"
import { InfoSection } from "@/components/landing/InfoSection"
import { SocialProof } from "@/components/landing/SocialProof"
import { LandingFooter } from "@/components/landing/LandingFooter"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />
        <ProcessTracker />
        <InfoSection />
        <SocialProof />
      </main>

      <LandingFooter />
    </div>
  )
}