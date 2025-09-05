"use client"

import { Phone, MapPin, Mail, MessageCircle, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { FaWhatsapp } from "react-icons/fa"

export function ContactSection() {
  return (
  <section id="contacto" className="py-20 bg-gradient-to-b from-muted/30 to-background animate-fade-in">
  <div className="container mx-auto px-4">
  <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 animate-fade-in">Contacto 24/7</Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-slide-up">Estamos Aquí Para Ayudarte</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            Contáctanos cuando nos necesites. Nuestro equipo está disponible las 24 horas para brindarte la mejor atención médica y responder todas tus consultas.
          </p>
        </div>
  <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Contact Form - Col-8 */}
          <div className="lg:col-span-8 animate-fade-in delay-100">
            <Card className="glass border-0 shadow-lg bg-card/70 backdrop-blur-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 animate-slide-up">Envíanos un mensaje</h3>
                <form action="https://formsubmit.co/info@cardiomedic.com" method="POST" className="space-y-6">
                  <input type="hidden" name="_subject" value="Nueva consulta desde Cardio Medic" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://cardiomedic.com/gracias" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Nombre *</label>
                      <Input name="nombre" placeholder="Tu nombre" className="rounded-xl border-2 border-gray-300 bg-white text-black focus:border-primary shadow-lg" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Apellido *</label>
                      <Input name="apellido" placeholder="Tu apellido" className="rounded-xl border-2 border-gray-300 bg-white text-black focus:border-primary shadow-lg" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Correo electrónico *</label>
                    <Input type="email" name="email" placeholder="tu@email.com" className="rounded-xl border-2 border-gray-300 bg-white text-black focus:border-primary shadow-lg" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Teléfono *</label>
                    <Input type="tel" name="telefono" placeholder="341-5624552" className="rounded-xl border-2 border-gray-300 bg-white text-black focus:border-primary shadow-lg" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Tipo de consulta</label>
                    <select name="tipo_consulta" className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-black focus:border-primary shadow-lg">
                      <option>Consulta general</option>
                      <option>Emergencia médica</option>
                      <option>Atención domiciliaria</option>
                      <option>Información de servicios</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Mensaje *</label>
                    <Textarea name="mensaje" placeholder="Cuéntanos cómo podemos ayudarte..." rows={4} className="rounded-xl border-2 border-gray-300 bg-white text-black focus:border-primary shadow-lg" required />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-lg font-semibold shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary">Enviar Mensaje</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          {/* Contact Data - Col-4 */}
          <div className="lg:col-span-4 space-y-6 animate-fade-in delay-200">
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-xl animate-fade-in shadow-lg">
                <div className="bg-primary/10 rounded-full p-2">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Teléfono</h4>
                  <p className="text-muted-foreground text-sm">341-5624552</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-xl animate-fade-in delay-100 shadow-lg">
                <div className="bg-primary/10 rounded-full p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Email</h4>
                  <p className="text-muted-foreground text-sm">cardiomedic365@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-xl animate-fade-in delay-200 shadow-lg">
                <div className="bg-primary/10 rounded-full p-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Dirección</h4>
                  <p className="text-muted-foreground text-sm">Saavedra 1555</p>
                  <p className="text-muted-foreground text-sm">Rosario - Provincia de Santa Fe</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-xl animate-fade-in delay-300 shadow-lg">
                <div className="bg-primary/10 rounded-full p-2">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Horarios</h4>
                  <p className="text-muted-foreground text-sm">Emergencias: 24/7</p>
                  <p className="text-muted-foreground text-sm">Consultas: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
            {/* WhatsApp CTA */}
            <Card className="glass bg-gradient-to-br from-green-50 to-green-100 dark:from-green-800/20 dark:to-green-400/20 border-green-200 dark:border-green-400 animate-fade-in delay-400">
              <CardContent className="p-6 text-center">
                <FaWhatsapp className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <h4 className="text-lg font-serif font-semibold text-foreground mb-2">WhatsApp Directo</h4>
                <p className="text-muted-foreground text-sm mb-4">Atención rápida y personalizada</p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary" onClick={() => window.open("https://wa.me/5493415624552?text=Hola%20Cardio%20Medic,%20necesito%20información%20sobre%20sus%20servicios", "_blank")}> <FaWhatsapp className="h-5 w-5 mr-2" /> Contactar </Button>
                
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-12 animate-fade-in delay-500">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.49927880195!2d-60.6524162!3d-32.9769417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab980551b93b%3A0x3b4d8345ac3de75f!2sSaavedra%201555%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e1!3m2!1ses!2sar!4v1757082637485!5m2!1ses!2sar" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación Cardio Medic" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
