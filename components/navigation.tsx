"use client"

import { useState, useEffect } from "react"
import { Heart, Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
      aria-label="Barra de navegación principal"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" role="navigation">
        <a href="/" className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-xl transition-shadow duration-200">
          <div className="bg-primary/10 p-2 rounded-xl animate-fade-in">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <div>
            <span className="text-2xl font-serif font-bold text-black dark:text-white">Cardio Medic</span>
            <div className="text-xs text-black/80 dark:text-white/80">Cuidado médico 24/7</div>
          </div>
        </a>
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-medium relative group px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={item.label}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <ThemeToggle />
        </div>
        {/* Menú móvil con animación y accesibilidad */}
        <div className="lg:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      {/* Menú móvil desplegable */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg animate-fade-in z-50">
          <nav className="flex flex-col items-center py-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors font-medium px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={item.label}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      )}
    </header>
  )
}
