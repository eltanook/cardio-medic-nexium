import { Award, Users, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { icon: Users, value: "15,000+", label: "Pacientes Atendidos" },
  { icon: Clock, value: "24/7", label: "Disponibilidad" },
  { icon: Award, value: "15+", label: "Años de Experiencia" },
  { icon: Shield, value: "99.9%", label: "Tasa de Satisfacción" },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="order-2 lg:order-1 animate-fade-in delay-100">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
              <Award className="h-4 w-4" /> Certificados y Acreditados
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 animate-slide-up">Líderes en Atención Médica de Emergencia</h2>
            <div className="space-y-6 mb-8">
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
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary animate-bounce">Conoce Nuestro Equipo</Button>
              <Button variant="outline" size="lg" className="rounded-full bg-transparent shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary animate-fade-in delay-200">Ver Certificaciones</Button>
            </div>
            {/* Stats con animación y glassmorphism */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-muted/30 rounded-xl glass animate-fade-in delay-300">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2 animate-bounce" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-fade-in delay-200">
            <div className="relative">
              {/* Main image con animación */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl animate-fade-in">
                <img src="/medical-team-smiling.png" alt="Equipo médico profesional de Cardio Medic" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Floating cards con glassmorphism y animación */}
              <Card className="absolute -bottom-8 -left-8 glass border-0 shadow-xl animate-bounce">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full animate-bounce">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">15+</div>
                      <div className="text-sm text-muted-foreground">Años de experiencia</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="absolute -top-8 -right-8 bg-primary text-primary-foreground border-0 shadow-xl animate-fade-in delay-200">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Disponible</div>
                  </div>
                </CardContent>
              </Card>
              {/* Background decoration */}
              <div className="absolute -z-10 top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-fade-in" />
              <div className="absolute -z-10 bottom-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-fade-in delay-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
