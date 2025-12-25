'use client'

import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

interface BadgeProps {
    text?: string
    rating?: string
    className?: string
}

export function TopRatedBadge({ text = "Top Rated on G2", rating = "4.7/5", className = "" }: BadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-gray-200 ${className}`}
        >
            <div className="flex items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">G</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{text}</span>
            </div>

            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5 text-orange-400" />
                ))}
                <span className="ml-1 text-sm font-semibold text-gray-900">{rating}</span>
            </div>
        </motion.div>
    )
}
