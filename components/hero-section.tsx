import { MessageCircle, Phone, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden min-h-[80vh] flex items-center justify-center">
  {/* Imagen médica de fondo eliminada temporalmente */}
      {/* Gradiente y glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/80 to-accent/10 z-10" />
      {/* Elementos flotantes animados */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse z-20" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000 z-20" />
      <div className="container relative mx-auto px-4 py-20 z-30">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust badge animado */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Disponible 24/7 • Respuesta en menos de 15 minutos
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 leading-tight animate-slide-up">
            Cuidado Médico
            <span className="text-primary block animate-slide-up delay-200">Cuando Más lo Necesitas</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Atención médica profesional de emergencia, domiciliaria y telemedicina.
            <span className="text-foreground font-medium"> Respuesta rápida, cuidado empático.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
            >
              <MessageCircle className="h-6 w-6 mr-3 animate-fade-in" />🚨 Emergencia WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-10 py-6 text-lg font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-white/70 backdrop-blur-md animate-fade-in delay-200"
            >
              <Phone className="h-6 w-6 mr-3 animate-fade-in" />
              Consulta General
            </Button>
          </div>
          {/* Testimonial con efecto glassmorphism y animación */}
          <div className="relative max-w-2xl mx-auto animate-fade-in delay-400">
            <div className="glass p-8 border border-primary/20">
              <div className="flex items-center justify-center mb-4">
                <Button variant="ghost" size="lg" className="rounded-full bg-white/20 hover:bg-white/30 animate-bounce">
                  <Play className="h-8 w-8 text-primary" />
                </Button>
              </div>
              <p className="text-foreground font-medium">
                "Cardio Medic salvó la vida de mi padre. Llegaron en 12 minutos y su profesionalismo fue excepcional."
              </p>
              <p className="text-sm text-muted-foreground mt-2">- María González, Cliente satisfecha</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
