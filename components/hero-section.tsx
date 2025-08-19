"use client"
import { MessageCircle, Phone, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const images = [
    { src: "/11.jpg", alt: "Equipo médico" },
    { src: "/1.jpg", alt: "Paciente feliz" },
    { src: "/2.jpg", alt: "Atención médica" },
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative pt-20 pb-16 overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Carrusel automático de imágenes de fondo */}
      <div className="absolute inset-0 w-full h-full z-0">
        {images.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-1000 ${current === idx ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
            style={{ zIndex: 1, filter: "brightness(1)" }}
          />
        ))}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/60 via-white/80 to-white/60 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 z-10" />
      </div>
  
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse z-20" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000 z-20" />
      <div className="container relative mx-auto px-4 py-20 z-30">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust badge animado */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in text-black dark:text-white">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Disponible 24/7 • Respuesta en menos de 15 minutos
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-black dark:text-white mb-8 leading-tight animate-slide-up">
            Cuidado Médico
            <span className="text-primary block animate-slide-up delay-200 text-black dark:text-white">Cuando Más lo Necesitas</span>
          </h1>
          <p className="text-xl md:text-2xl text-black dark:text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Atención médica profesional de emergencia, domiciliaria y telemedicina.
            <span className="text-foreground font-medium"> Respuesta rápida, cuidado empático.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 text-black dark:text-white">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6 mr-3 animate-fade-in" />Emergencia WhatsApp
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
         
        </div>
      </div>
    </section>
  )
}
