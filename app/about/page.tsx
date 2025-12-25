'use client'

import { motion } from 'framer-motion'
import { SiteHeader } from '@/components/site-header'
import { LandingFooter } from '@/components/landing/LandingFooter'

export default function AboutPage() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background">
            <SiteHeader />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 px-4 gradient-purple-blue-soft">
                    <div className="container mx-auto max-w-4xl text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
                        >
                            About AU Summit
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-700 leading-relaxed"
                        >
                            The African Union Summit is the premier gathering of African leaders, policymakers, and media professionals to shape the future of the continent.
                        </motion.p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    To provide a transparent, efficient, and secure platform for media accreditation, ensuring that journalists from around the world can cover the most important conversations shaping Africa's future.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    We believe in the power of free press and the importance of accurate, timely reporting on matters that affect millions of people across the continent.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Statistics</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-4xl font-black text-purple-600">500+</p>
                                        <p className="text-gray-700">Accredited Media Organizations</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-black text-purple-600">55</p>
                                        <p className="text-gray-700">African Union Member States</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-black text-purple-600">1000+</p>
                                        <p className="text-gray-700">Journalists Registered Annually</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-center text-gray-900 mb-12"
                        >
                            Our Values
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Transparency",
                                    description: "Clear, open processes for all accreditation applications with real-time status updates."
                                },
                                {
                                    title: "Security",
                                    description: "State-of-the-art data protection ensuring the safety of all journalist information."
                                },
                                {
                                    title: "Accessibility",
                                    description: "User-friendly platform available in multiple languages for global media access."
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-xl shadow-md hover-lift"
                                >
                                    <h3 className="text-2xl font-bold text-purple-600 mb-4">{value.title}</h3>
                                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <LandingFooter />
        </div>
    )
}
