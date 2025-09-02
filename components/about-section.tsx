"use client"

import { Award, Users, Clock, Shield, Award as AwardIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  { icon: Users, value: "15,000+", label: "Pacientes Atendidos" },
  { icon: Clock, value: "24/7", label: "Disponibilidad" },
  { icon: AwardIcon, value: "15+", label: "Años de Experiencia" },
  { icon: Shield, value: "99.9%", label: "Tasa de Satisfacción" },
]

const additionalStats = [
  { icon: Users, value: "50+", label: "Profesionales Médicos" },
  { icon: Shield, value: "8", label: "Ambulancias Equipadas" },
  { icon: Clock, value: "< 15min", label: "Tiempo de Respuesta" },
  { icon: AwardIcon, value: "5", label: "Especialidades Médicas" },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-background text-foreground animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch max-w-7xl mx-auto">
          {/* Galería de imágenes mejorada */}
          <div className="order-1 flex items-stretch justify-center animate-fade-in">
            <div className="relative w-full h-full">
              {/* Imagen principal */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl w-full max-w-lg mx-auto h-full flex items-stretch mb-6">
                <img 
                  src="/foto1.jpg"
                  alt="Equipo médico profesional de Cardio Medic"
                  className="w-full h-full object-cover min-h-[400px]"
                />
              </div>
              
              {/* Galería de imágenes secundarias */}
              {/* <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src="/foto2.jpg"
                    alt="Ambulancia equipada de Cardio Medic"
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src="/foto3.jpg"
                    alt="Equipo médico en acción"
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div> */}
            </div>
          </div>

          {/* Texto y stats alineados */}
          <div className="order-2 flex flex-col justify-center h-full animate-fade-in delay-100">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 animate-fade-in">Nosotros</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2 text-center lg:text-left">
              Líderes en Atención Médica de Emergencia
            </h2>
            <div className="w-16 h-1 bg-sky-400 rounded-full mx-auto lg:mx-0 mb-6" />
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
                <div key={index} className="flex flex-col items-center justify-center text-center p-2 rounded-xl bg-card shadow-md">
                  <stat.icon className="h-6 w-6 text-primary mb-1" />
                  <div className="text-lg font-bold text-foreground mb-0.5">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Galería de fotos adicional */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Nuestras Instalaciones y Equipo</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce nuestras modernas instalaciones y el equipo médico de última generación que utilizamos para brindarte la mejor atención.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="/foto1.jpg"
                  alt="Instalaciones médicas modernas"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-2">Instalaciones Modernas</h4>
                <p className="text-muted-foreground">Espacios diseñados con la más alta tecnología médica para brindar atención de calidad.</p>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="/foto2.jpg"
                  alt="Equipo médico profesional"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-2">Equipo Profesional</h4>
                <p className="text-muted-foreground">Médicos especialistas y personal altamente capacitado para emergencias médicas.</p>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="/foto3.jpg"
                  alt="Ambulancias equipadas"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-2">Ambulancias Equipadas</h4>
                <p className="text-muted-foreground">Flota de ambulancias con equipamiento médico de última generación disponible 24/7.</p>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="/foto4.jpg"
                  alt="Equipo médico sonriendo"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-2">Equipo Comprometido</h4>
                <p className="text-muted-foreground">Personal dedicado y comprometido con la excelencia en el cuidado de la salud.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
