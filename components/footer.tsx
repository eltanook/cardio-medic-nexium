"use client"

import { Heart, MessageCircle, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
  <footer className="bg-background text-foreground" aria-label="Pie de página Cardio Medic">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center text-center">
          {/* Logo + Slogan/Resumen con animación */}
          <div className="lg:col-span-1 flex flex-col items-center text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-primary/20 p-2 rounded-xl">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <span className="text-2xl font-serif font-bold">Cardio Medic</span>
                <div className="text-xs text-foreground/70">Cuidado médico 24/7</div>
              </div>
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed text-center">
              Líderes en servicios médicos de emergencia y atención domiciliaria. Cuidado profesional y empático,
              disponible las 24 horas para tu tranquilidad y la de tu familia.
            </p>
          </div>
          {/* Navegación con accesibilidad y microinteracciones */}
          <div className="flex flex-col items-center text-center">
            <h5 className="font-serif font-semibold text-lg mb-6 text-center">Navegación</h5>
            <ul className="space-y-3 text-sm text-foreground/80 text-center">
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
          <div className="flex flex-col items-center text-center">
            <h5 className="font-serif font-semibold text-lg mb-6 text-center">Información de Contacto</h5>
            <div className="space-y-4 text-sm text-foreground/80 text-center">
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
          <div className="flex flex-col items-center text-center">
            <h5 className="font-serif font-semibold text-lg mb-6 text-center">Redes Sociales</h5>
            <div className="space-y-4 text-center">
              <Button
                variant="ghost"
                className="w-full justify-center text-foreground/80 hover:text-primary hover:bg-foreground/10"
              >
                <Facebook className="h-5 w-5 mr-3" />
                Facebook
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-center text-foreground/80 hover:text-primary hover:bg-foreground/10"
              >
                <Twitter className="h-5 w-5 mr-3" />
                Twitter
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-center text-foreground/80 hover:text-primary hover:bg-foreground/10"
              >
                <Instagram className="h-5 w-5 mr-3" />
                Instagram
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-center text-foreground/80 hover:text-primary hover:bg-foreground/10"
              >
                <Linkedin className="h-5 w-5 mr-3" />
                LinkedIn
              </Button>
            </div>

            
          </div>
        </div>
      </div>

  <div className="border-t border-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-foreground/60 text-sm">
            © {currentYear} Cardio Medic. Desarrollado y diseñado por Nexium Solutions.
          </div>
        </div>
      </div>
    </footer>
  )
}
