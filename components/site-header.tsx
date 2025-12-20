import Link from "next/link"
import Image from "next/image"
import { Radio } from "lucide-react"

export function SiteHeader() {
    return (
        <header className="absolute top-0 left-0 z-50 w-full p-6 text-white">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 hover:opacity-90">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden">
                        <Image
                            src="/logo.png"
                            alt="Africa Union Logo"
                            fill
                            className="object-contain scale-125"
                            priority
                        />
                    </div>

                    <span className="text-xl font-bold tracking-wide">
                        Africa Union
                    </span>
                </Link>

                <Link
                    href="#"
                    className="flex items-center gap-2 text-sm font-medium hover:opacity-90 hover:underline underline-offset-4"
                >
                    <Radio className="h-5 w-5" />
                    <span>PRESS PASS ET</span>
                </Link>
            </div>
        </header>
    )
}
