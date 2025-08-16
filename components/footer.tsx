"use client"

import { Heart, MessageCircle, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background animate-fade-in" aria-label="Pie de página Cardio Medic">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Slogan/Resumen con animación */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary/20 p-2 rounded-xl animate-bounce">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div>
                <span className="text-2xl font-serif font-bold">Cardio Medic</span>
                <div className="text-xs text-background/70">Cuidado médico 24/7</div>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed animate-fade-in delay-200">
              Líderes en servicios médicos de emergencia y atención domiciliaria. Cuidado profesional y empático,
              disponible las 24 horas para tu tranquilidad y la de tu familia.
            </p>
          </div>
          {/* Navegación con accesibilidad y microinteracciones */}
          <div>
            <h5 className="font-serif font-semibold text-lg mb-6">Navegación</h5>
            <ul className="space-y-3 text-sm text-background/80">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#servicios", label: "Servicios" },
                { href: "#nosotros", label: "Nosotros" },
                { href: "#contacto", label: "Contacto" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-primary transition-colors flex items-center gap-2 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label={item.label}
                  >
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h5 className="font-serif font-semibold text-lg mb-6">Información de Contacto</h5>
            <div className="space-y-4 text-sm text-background/80">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Teléfono</div>
                  <div>+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Email</div>
                  <div>info@cardiomedic.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <div>
                  <div className="font-medium">Ubicación</div>
                  <div>
                    Av. Salud 123, Torre Médica
                    <br />
                    Ciudad Médica, Estado 12345
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Social Media Buttons */}
          <div>
            <h5 className="font-serif font-semibold text-lg mb-6">Redes Sociales</h5>
            <div className="space-y-4">
              <Button
                variant="ghost"
                className="w-full justify-start text-background/80 hover:text-primary hover:bg-background/10"
              >
                <Facebook className="h-5 w-5 mr-3" />
                Facebook
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-background/80 hover:text-primary hover:bg-background/10"
              >
                <Twitter className="h-5 w-5 mr-3" />
                Twitter
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-background/80 hover:text-primary hover:bg-background/10"
              >
                <Instagram className="h-5 w-5 mr-3" />
                Instagram
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-background/80 hover:text-primary hover:bg-background/10"
              >
                <Linkedin className="h-5 w-5 mr-3" />
                LinkedIn
              </Button>
            </div>

            {/* Emergency Contact in Social Column */}
            <div className="mt-6 bg-red-600/20 border border-red-600/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-sm font-medium text-red-400">🚨 Emergencias 24/7</span>
              </div>
              <p className="text-lg font-bold text-red-400 mb-3">+1 (555) 911-HELP</p>
              <Button
                size="sm"
                className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full"
                onClick={() =>
                  window.open(
                    "https://wa.me/15559111234?text=🚨%20Emergencia%20médica%20-%20Necesito%20ayuda%20inmediata",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Emergencia
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-background/60 text-sm">
            © {currentYear} Cardio Medic. Desarrollado y diseñado por Nexium Solutions y Ditiero.
          </div>
        </div>
      </div>
    </footer>
  )
}
