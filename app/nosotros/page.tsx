

"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Heart, Star, Stethoscope } from "lucide-react"
import { WhatsappBubble } from "@/components/whatsapp-bubble"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const equipo = [
  {
    icon: Users,
    nombre: "Equipo Médico Multidisciplinario",
    descripcion: "Médicos, enfermeros y especialistas con amplia experiencia y vocación de servicio.",
    detalles: ["Cardiólogos", "Médicos generales", "Enfermeros", "Técnicos de emergencias"],
  },
  {
    icon: Heart,
    nombre: "Compromiso Humano",
    descripcion: "Nos enfocamos en el trato cálido, empático y personalizado para cada paciente.",
    detalles: ["Acompañamiento", "Empatía", "Escucha activa"],
  },
  {
    icon: Star,
    nombre: "Excelencia y Calidad",
    descripcion: "Buscamos la mejora continua y la excelencia en cada servicio brindado.",
    detalles: ["Certificaciones", "Actualización constante", "Tecnología avanzada"],
  },
]

export default function NosotrosPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 animate-fade-in">
                Sobre Nosotros
              </Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-slide-up">Cardio Medic</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
                Somos una organización dedicada a la atención médica integral, con un equipo humano y profesional comprometido con tu salud y bienestar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {equipo.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-card/70 backdrop-blur-lg animate-fade-in delay-100"
                >
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center justify-center">
                      <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <item.icon className="h-10 w-10 text-primary animate-fade-in" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-4 animate-slide-up delay-200">{item.nombre}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 animate-fade-in delay-300">{item.descripcion}</p>
                    <div className="space-y-2">
                      {item.detalles.map((detalle, i) => (
                        <div key={i} className="flex items-center gap-2 animate-fade-in delay-400">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{detalle}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Misión y valores */}
            <div className="text-center mt-16 animate-fade-in delay-500">
              <div className="glass bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 max-w-4xl mx-auto shadow-xl">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 animate-slide-up">Nuestra Misión</h3>
                <p className="text-muted-foreground mb-6 animate-fade-in delay-200">
                  Brindar atención médica de calidad, humana y accesible para todos, en cualquier momento y lugar.
                </p>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 animate-slide-up">Nuestros Valores</h3>
                <ul className="flex flex-wrap justify-center gap-4 text-muted-foreground">
                  <li className="bg-card rounded-full px-6 py-2 shadow">Empatía</li>
                  <li className="bg-card rounded-full px-6 py-2 shadow">Excelencia</li>
                  <li className="bg-card rounded-full px-6 py-2 shadow">Compromiso</li>
                  <li className="bg-card rounded-full px-6 py-2 shadow">Innovación</li>
                  <li className="bg-card rounded-full px-6 py-2 shadow">Respeto</li>
                </ul>
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
