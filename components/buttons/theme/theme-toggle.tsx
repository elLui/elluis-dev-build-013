"use client";

import {useTheme} from "next-themes"

import {Button} from "@/components/ui/button"
import {GiMoon, GiSundial} from "react-icons/gi"
import {useEffect, useState} from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()


    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <GiSundial className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
            <GiMoon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
