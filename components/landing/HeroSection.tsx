"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TopRatedBadge } from "@/components/TopRatedBadge"
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section className="relative flex min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden pt-20 px-4 gradient-purple-blue">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 select-none">
                <Image
                    src="/hero-new.png"
                    alt="AU Summit"
                    fill
                    className="object-cover object-center opacity-30 mix-blend-overlay"
                    priority
                />
            </div>

            {/* Gradient Overlay for depth */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-purple-900/20 to-purple-900/40" />

            {/* Animated Background Blobs */}
            <div className="absolute top-20 -left-32 w-96 h-96 bg-white/10 blur-3xl rounded-full animate-pulse pointer-events-none" />
            <div className="absolute bottom-20 -right-32 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full animate-pulse delay-1000 pointer-events-none" />

            <div className="container relative z-30 mx-auto text-center flex flex-col items-center">

                {/* Top Rated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-8"
                >
                    <TopRatedBadge text="Trusted by 500+ Media Organizations" rating="4.8/5" />
                </motion.div>

                {/* Hero Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-5xl mx-auto text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-[1.1] md:leading-[1.1]"
                >
                    Event Registration
                    <br />
                    <span className="text-white/90">
                        Software
                    </span>
                </motion.h1>

                {/* Feature List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl mx-auto mb-12 space-y-3"
                >
                    <p className="text-lg md:text-xl text-white/90 flex items-start gap-3">
                        <span className="text-white">•</span>
                        <span>Fully customizable, intuitive event registration tools.</span>
                    </p>
                    <p className="text-lg md:text-xl text-white/90 flex items-start gap-3">
                        <span className="text-white">•</span>
                        <span>Create a simple or complex registration form.</span>
                    </p>
                    <p className="text-lg md:text-xl text-white/90 flex items-start gap-3">
                        <span className="text-white">•</span>
                        <span>Manage multiple events in a single registration flow.</span>
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
                >
                    <Link href="/registration" className="w-full sm:w-auto">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto h-14 px-10 text-base font-bold bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-xl shadow-purple-900/30 transition-all hover:scale-105 active:scale-95 hover-lift"
                        >
                            Get Started for Free
                        </Button>
                    </Link>
                    <Link href="/guidelines" className="w-full sm:w-auto">
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto h-14 px-10 text-base font-bold text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 rounded-full backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
                        >
                            Book a Demo
                        </Button>
                    </Link>
                </motion.div>

                {/* Registration Form Preview Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-16 relative w-full max-w-4xl"
                >
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                        <Image
                            src="/hero-new.png"
                            alt="Registration Form Preview"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
