"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Phone } from "lucide-react"
import * as RPNInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

type PhoneInputProps = React.ComponentPropsWithoutRef<typeof RPNInput.default>

export const PhoneInput = React.forwardRef<
    React.ElementRef<typeof RPNInput.default>,
    React.ComponentPropsWithoutRef<typeof RPNInput.default>
>(({ className, onChange, ...props }, ref) => {
    return (
        <RPNInput.default
            ref={ref}
            className={cn("flex", className)}
            flagComponent={FlagComponent}
            countrySelectComponent={CountrySelect}
            inputComponent={InputComponent}
            internationalIcon={PhoneIcon}
            international
            onChange={onChange}
            {...props}
        />
    )
})
PhoneInput.displayName = "PhoneInput"

const PhoneIcon = ({ className }: { className?: string }) => {
    return <Phone className={cn("h-4 w-4 text-muted-foreground", className)} />
}

const InputComponent = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className, ...props }, ref) => (
        <Input
            className={cn(
                "rounded-e-lg rounded-s-none h-11 border-l-0 shadow-none focus-visible:ring-1 focus-visible:ring-green-600 focus-visible:border-green-600 bg-gray-50/50",
                className
            )}
            {...props}
            ref={ref}
        />
    )
)
InputComponent.displayName = "InputComponent"

type CountrySelectProps = {
    disabled?: boolean
    value: RPNInput.Country
    onChange: (value: RPNInput.Country) => void
    options: { label: string; value: RPNInput.Country | undefined }[]
}

const CountrySelect = ({ disabled, value, onChange, options }: CountrySelectProps) => {
    const handleSelect = React.useCallback(
        (country: RPNInput.Country) => {
            onChange(country)
        },
        [onChange]
    )

    const selectedCountry = options.find((option) => option.value === value)

    // Helper to get dialing code
    const getCallingCode = (countryCode: RPNInput.Country) => {
        return RPNInput.getCountryCallingCode(countryCode)
    }

    return (
        <div className="relative">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        type="button"
                        variant="outline"
                        className={cn("flex gap-1 rounded-e-none rounded-s-lg px-3 h-11 border-r-0 border-gray-200 bg-gray-50/50 shadow-none")}
                        disabled={disabled}
                    >
                        <FlagComponent country={value} countryName={value} />
                        <ChevronsUpDown className="ml-1 h-3 w-3 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0" align="start">
                    <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandList>
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                                {options.filter((x) => x.value).map((option) => (
                                    <CommandItem
                                        key={option.value}
                                        value={option.label}
                                        onSelect={() => handleSelect(option.value!)}
                                        className="gap-2"
                                    >
                                        <FlagComponent country={option.value!} countryName={option.label} />
                                        <span className="flex-1 text-sm">{option.label}</span>
                                        <span className="text-sm text-muted-foreground tabular-nums">
                                            +{getCallingCode(option.value!)}
                                        </span>
                                        {option.value === value && (
                                            <Check className="h-4 w-4 ml-auto opacity-100" />
                                        )}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}

const FlagComponent = ({ country, countryName }: { country: RPNInput.Country; countryName: string }) => {
    const Flag = flags[country]

    return (
<span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20">
            {Flag && (
                <div className="h-full w-full">
                    {/* The Flag component is now safely wrapped in a div that fills the parent span */}
                    <Flag title={countryName} style={{ width: "100%", height: "100%" }} />
                </div>
            )}
        </span>
    )
}
