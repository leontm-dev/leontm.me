"use client"

// Imports
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

// Components

import { Button } from "@/components/ui/button"

// Code

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <Button variant={"outline"} onClick={() => setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"))}>
            {theme === "light" ? <Moon /> : <Sun />}
        </Button>
    )
}