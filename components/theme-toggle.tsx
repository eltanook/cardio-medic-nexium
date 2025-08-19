"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="lg"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border-2 border-primary bg-primary/10 text-primary rounded-full shadow-lg px-4 py-2 transition-all duration-200 hover:bg-primary/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary flex items-center gap-2"
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      
    </Button>
  )
}
