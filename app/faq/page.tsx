'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SiteHeader } from '@/components/site-header'
import { LandingFooter } from '@/components/landing/LandingFooter'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const faqs = [
    {
        category: "Registration",
        questions: [
            {
                q: "Who can apply for media accreditation?",
                a: "Journalists, photographers, videographers, and media professionals from recognized media organizations worldwide can apply for accreditation."
            },
            {
                q: "What documents do I need to submit?",
                a: "You'll need a valid passport, press credentials from your media organization, a letter of assignment, and a recent photograph."
            },
            {
                q: "How long does the approval process take?",
                a: "The review process typically takes 5-7 business days. You'll receive email updates on your application status."
            }
        ]
    },
    {
        category: "Visa & Travel",
        questions: [
            {
                q: "Do I need a visa to attend the summit?",
                a: "Visa requirements depend on your nationality. Once accredited, you'll receive a visa support letter to facilitate your application."
            },
            {
                q: "What are the accommodation options?",
                a: "We provide a list of recommended hotels near the summit venue with special rates for accredited media."
            }
        ]
    },
    {
        category: "Technical",
        questions: [
            {
                q: "Can I save my application and complete it later?",
                a: "Yes, your progress is automatically saved. You can return anytime to complete your application."
            },
            {
                q: "What if I encounter technical issues?",
                a: "Contact our support team via the Contact Us page, and we'll assist you within 24 hours."
            }
        ]
    }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-b border-gray-200 last:border-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-purple-600 transition-colors"
            >
                <span className="text-lg font-semibold text-gray-900">{question}</span>
                {isOpen ? (
                    <FaChevronUp className="text-purple-600 flex-shrink-0 ml-4" />
                ) : (
                    <FaChevronDown className="text-gray-400 flex-shrink-0 ml-4" />
                )}
            </button>

            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pb-6"
                >
                    <p className="text-gray-700 leading-relaxed">{answer}</p>
                </motion.div>
            )}
        </motion.div>
    )
}

export default function FAQPage() {
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
                            Frequently Asked Questions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-700"
                        >
                            Find answers to common questions about the registration process
                        </motion.p>
                    </div>
                </section>

                {/* FAQ Categories */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-4xl space-y-12">
                        {faqs.map((category, idx) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">{category.category}</h2>
                                <div className="bg-white rounded-xl shadow-md p-6">
                                    {category.questions.map((faq, index) => (
                                        <FAQItem key={index} question={faq.q} answer={faq.a} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Still Have Questions */}
                <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
                    <div className="container mx-auto max-w-2xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still have questions?</h2>
                            <p className="text-lg text-gray-700 mb-8">
                                Can't find the answer you're looking for? Please reach out to our support team.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full shadow-lg transition-all hover:scale-105"
                            >
                                Contact Support
                            </a>
                        </motion.div>
                    </div>
                </section>
            </main>

            <LandingFooter />
        </div>
    )
}
