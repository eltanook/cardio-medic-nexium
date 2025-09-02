"use client"

import { Heart, MessageCircle, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
  <footer className="bg-gray-100 dark:bg-gray-900 text-foreground" aria-label="Pie de página Cardio Medic">
  <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-start text-left">
          {/* Logo + Slogan/Resumen con animación */}
          <div className="lg:col-span-1 flex flex-col items-start text-left">
            <div className="flex items-center justify-start space-x-3 mb-6">
              <div className="bg-primary/30 p-2 rounded-xl">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-serif font-bold text-primary">Cardio Medic</span>
                <div className="text-xs text-foreground font-semibold">Cuidado médico 24/7</div>
              </div>
            </div>
            <p className="text-foreground font-medium text-sm leading-relaxed text-left">
              Líderes en servicios médicos de emergencia y atención domiciliaria. Cuidado profesional y empático,
              disponible las 24 horas para tu tranquilidad y la de tu familia.
            </p>
          </div>
          {/* Navegación con accesibilidad y microinteracciones */}
          <div className="flex flex-col items-start text-left">
            <h5 className="font-serif font-semibold text-lg mb-6 text-left">Navegación</h5>
            <ul className="space-y-3 text-sm text-foreground font-semibold text-left">
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
          <div className="flex flex-col items-start text-left">
            <h5 className="font-serif font-semibold text-lg mb-6 text-left">Información de Contacto</h5>
            <div className="space-y-4 text-sm text-foreground font-semibold text-left">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-bold text-primary">Teléfono</div>
                  <div>+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-bold text-primary">Email</div>
                  <div>info@cardiomedic.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <div>
                  <div className="font-bold text-primary">Ubicación</div>
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
          <div className="flex flex-col items-center justify-center text-center w-full">
            <h5 className="font-serif font-bold text-lg mb-6 text-center text-primary w-full">Redes Sociales</h5>
            <div className="space-y-4 text-center flex flex-col items-center w-full">
              {[{icon: Facebook, label: 'Facebook'}, {icon: Twitter, label: 'Twitter'}, {icon: Instagram, label: 'Instagram'}, {icon: Linkedin, label: 'LinkedIn'}].map(({icon: Icon, label}, idx) => (
                <Button
                  key={label}
                  variant="ghost"
                  className="w-40 justify-center text-foreground font-semibold hover:text-primary hover:bg-primary/10"
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {label}
                </Button>
              ))}
            </div>

            
          </div>
        </div>
      </div>

  <div className="border-t border-foreground/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-foreground font-semibold text-sm">
            © {currentYear} Cardio Medic. Desarrollado y diseñado por Nexium Solutions y Ditiero.
          </div>
        </div>
      </div>
    </footer>
  )
}
