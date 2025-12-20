"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
    date?: Date
    setDate: (date?: Date) => void
    placeholder?: string
}

export function DatePicker({ date, setDate, placeholder = "Pick a date" }: DatePickerProps) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
<PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal bg-gray-50/50 h-11 border-gray-200 shadow-none rounded-lg",
                        // *** CRITICAL: ADD THESE THREE CLASSES ***
                        "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none", 
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                    {date ? format(date, "MM/dd/yyyy") : <span>{placeholder}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-3" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    footer={
                        <div className="flex justify-end pt-3">
                            <Button
                                size="sm"
                                onClick={() => setIsOpen(false)}
                                className="bg-[#009b4d] hover:bg-[#007a3d] h-8 text-xs text-white"
                            >
                                OK
                            </Button>
                        </div>
                    }
                />
            </PopoverContent>
        </Popover>
    )
}
