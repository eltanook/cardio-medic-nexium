"use client"

import { Award, Users, Clock, Shield, Award as AwardIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { icon: Users, value: "15,000+", label: "Pacientes Atendidos" },
  { icon: Clock, value: "24/7", label: "Disponibilidad" },
  { icon: AwardIcon, value: "15+", label: "Años de Experiencia" },
  { icon: Shield, value: "99.9%", label: "Tasa de Satisfacción" },
]

export function AboutSection() {
  return (
  <section id="nosotros" className="py-20 lg:py-32 bg-background text-foreground animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Imagen alineada al centro y responsiva */}
          <div className="order-1 flex items-center justify-center animate-fade-in">
            <div className="relative w-full">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
                {/* Imagen de ejemplo con un placeholder */}
                <img 
                  src="/222.jpg"
                  alt="Equipo médico profesional de Cardio Medic"
                  className="w-full h-auto max-h-[550px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Texto y stats alineados */}
          <div className="order-2 flex flex-col justify-center h-full animate-fade-in delay-100">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-center lg:text-left">
              Líderes en Atención Médica de Emergencia
            </h2>
            <div className="space-y-6 mb-8 text-center lg:text-left">
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in delay-200">
                Con más de <span className="text-primary font-semibold">15 años de experiencia</span> en servicios médicos de emergencia, Cardio Medic se ha consolidado como el líder en atención médica domiciliaria y de urgencias en la región.
              </p>
              <p className="text-muted-foreground leading-relaxed animate-fade-in delay-300">
                Nuestro equipo de <span className="text-foreground font-medium">médicos especialistas, enfermeros certificados y paramédicos</span> está comprometido con brindar atención médica de la más alta calidad, con empatía, profesionalismo y dedicación las 24 horas del día.
              </p>
              <p className="text-muted-foreground leading-relaxed animate-fade-in delay-400">
                Contamos con <span className="text-foreground font-medium">equipos médicos de última generación</span> y ambulancias completamente equipadas para garantizar la mejor atención en cualquier situación.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start mb-8">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary">
                Conoce Nuestro Equipo
              </Button>
            </div>
            {/* Stats rediseñados y centrados */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 mt-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-card shadow-md transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  <stat.icon className="h-8 w-8 text-primary mb-2" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
