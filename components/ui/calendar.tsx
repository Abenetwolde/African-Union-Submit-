"use client"

import * as React from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = "dropdown",
    fromYear = 1900,
    toYear = new Date().getFullYear(),
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={className}
classNames={{
                ...classNames,
                // --- CUSTOM DROPDOWN FOCUS REMOVAL (from previous solution) ---
                caption_select: "focus:outline-none focus:ring-0",
                caption_select_month: "focus:outline-none focus:ring-0",
                caption_select_year: "focus:outline-none focus:ring-0",

                // --- GREEN THEME OVERRIDES ---
                // Selected day (bg-primary / text-primary-foreground equivalents)
                day_selected:
                    "bg-[#009b4d] text-white hover:bg-[#007a3d] hover:text-white focus:bg-[#007a3d] focus:text-white",

                // Day hover/focus state (buttons on hover/focus)
                day_today: "border border-green-500 text-green-500",
                day_hover: "bg-green-100 text-green-700 rounded-full",
                
                // Generic day styles (used for hover/focus background for non-selected days)
                day: "hover:bg-green-50 focus:bg-green-100 rounded-full text-sm",

                // Day in a range (if you use range mode later)
                day_range_middle: "bg-green-50 text-green-800",

                // The navigation arrows and header text
                nav_button: "text-green-600 hover:bg-green-50",
                caption_label: "font-medium text-gray-700",
                
                // Today's date (if not selected)
                day_today: "border border-green-500 text-green-700",

            }}
            // classNames={classNames}
            captionLayout={captionLayout}
            fromYear={fromYear}
            toYear={toYear}
            {...props}
        />
    )
}
Calendar.displayName = "Calendar"

export { Calendar }
