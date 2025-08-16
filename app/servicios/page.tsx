

"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Clock, Shield, Users, Heart, Stethoscope, Ambulance } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WhatsappBubble } from "@/components/whatsapp-bubble"

const services = [
  {
    icon: Clock,
    title: "Emergencias 24/7",
    description:
      "Respuesta inmediata ante cualquier emergencia médica. Equipo especializado disponible en todo momento.",
    features: ["Respuesta < 15 min", "Equipo móvil completo", "Médicos certificados"],
    badge: "Más Popular",
  },
  {
    icon: Shield,
    title: "Atención Domiciliaria",
    description: "Cuidado médico profesional en la comodidad de tu hogar. Equipos móviles completamente equipados.",
    features: ["Consultas en casa", "Equipos portátiles", "Seguimiento continuo"],
    badge: null,
  },
  {
    icon: Users,
    title: "Telemedicina",
    description:
      "Consultas médicas virtuales con especialistas. Diagnóstico y tratamiento a distancia cuando sea posible.",
    features: ["Consulta virtual", "Especialistas", "Recetas digitales"],
    badge: "Nuevo",
  },
  {
    icon: Heart,
    title: "Cardiología Especializada",
    description: "Atención especializada en problemas cardiovasculares con equipos de última generación.",
    features: ["ECG móvil", "Holter 24h", "Ecocardiograma"],
    badge: null,
  },
  {
    icon: Stethoscope,
    title: "Medicina General",
    description: "Consultas médicas generales para toda la familia con enfoque preventivo y terapéutico.",
    features: ["Toda la familia", "Medicina preventiva", "Seguimiento"],
    badge: null,
  },
  {
    icon: Ambulance,
    title: "Traslados Médicos",
    description: "Servicio de ambulancia equipada para traslados seguros a centros hospitalarios.",
    features: ["Ambulancia equipada", "Personal capacitado", "Traslados seguros"],
    badge: null,
  },
]

export default function ServiciosPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 animate-fade-in">
                Servicios Médicos Integrales
              </Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-slide-up">Cuidado Médico Completo</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
                Ofrecemos una gama completa de servicios médicos diseñados para cubrir todas tus necesidades de salud, desde emergencias hasta cuidado preventivo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-card/70 backdrop-blur-lg animate-fade-in delay-100"
                >
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      {service.badge && (
                        <Badge
                          variant={service.badge === "Más Popular" ? "default" : "secondary"}
                          className="absolute -top-2 -right-2 z-10"
                        >
                          {service.badge}
                        </Badge>
                      )}
                      <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <service.icon className="h-10 w-10 text-primary animate-fade-in" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-4 animate-slide-up delay-200">{service.title}</h3>

                    <p className="text-muted-foreground leading-relaxed mb-6 animate-fade-in delay-300">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 animate-fade-in delay-400">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section mejorada */}
            <div className="text-center mt-16 animate-fade-in delay-500">
              <div className="glass bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 max-w-4xl mx-auto shadow-xl">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 animate-slide-up">¿Necesitas atención médica inmediata?</h3>
                <p className="text-muted-foreground mb-6 animate-fade-in delay-200">
                  Nuestro equipo está disponible las 24 horas para brindarte la mejor atención médica
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary">
                    🚨 Llamar Emergencia
                  </button>
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-colors shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary animate-fade-in delay-200">
                    📞 Agendar Consulta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappBubble />
    </>
  );
}
