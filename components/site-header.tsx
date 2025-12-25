"use client"

import Link from "next/link"
import { Radio, ChevronDown, Check, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'sw', name: 'Kiswahili', flag: '🇰🇪' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
] as const

type LanguageCode = typeof languages[number]['code']

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
    { href: '/registration', label: 'Apply' },
]

export function SiteHeader() {
    const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const savedLang = localStorage.getItem('googtrans_lang') as LanguageCode
        if (savedLang) {
            setCurrentLanguage(savedLang)
        }
    }, [])

    const setLanguage = (lang: LanguageCode) => {
        setCurrentLanguage(lang)
        localStorage.setItem('googtrans_lang', lang)

        // Google Translate uses a cookie named 'googtrans' to determine the language.
        // Format: /en/fr for English to French
        const cookieValue = lang === 'en' ? '' : `/en/${lang}`
        document.cookie = `googtrans=${cookieValue}; path=/`
        document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`

        // Reload the page to trigger the translation
        window.location.reload()
    }

    const currentLang = languages.find(l => l.code === currentLanguage) || languages[0]

    return (
        <header className="fixed top-0 left-0 z-50 w-full glass border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-purple-600 hover:text-purple-700 transition-colors"
                    >
                        <Radio className="h-5 w-5" />
                        <span>AU SUMMIT</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* Language Selector */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white hover:bg-gray-50 border border-gray-200 transition-all text-sm font-medium text-gray-700">
                                <span className="text-base leading-none">{currentLang.flag}</span>
                                <span className="hidden sm:inline">{currentLang.name}</span>
                                <ChevronDown className="h-4 w-4 opacity-50" />
                            </button>
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-48 p-1">
                            <div className="grid gap-1">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        className={cn(
                                            "flex items-center justify-between w-full px-3 py-2 text-sm rounded-md transition-colors",
                                            currentLanguage === lang.code
                                                ? "bg-purple-50 text-purple-600"
                                                : "text-gray-700 hover:bg-gray-50"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-base leading-none">{lang.flag}</span>
                                            <span>{lang.name}</span>
                                        </div>
                                        {currentLanguage === lang.code && <Check className="h-4 w-4" />}
                                    </button>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors py-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
