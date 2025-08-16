"use client"

import { Phone, MapPin, Mail, MessageCircle, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

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
            <Card className="glass border-0 shadow-xl bg-card/70 backdrop-blur-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 animate-slide-up">Envíanos un mensaje</h3>
                <form action="https://formsubmit.co/info@cardiomedic.com" method="POST" className="space-y-6">
                  <input type="hidden" name="_subject" value="Nueva consulta desde Cardio Medic" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://cardiomedic.com/gracias" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Nombre *</label>
                      <Input name="nombre" placeholder="Tu nombre" className="rounded-xl border-2 focus:border-primary" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Apellido *</label>
                      <Input name="apellido" placeholder="Tu apellido" className="rounded-xl border-2 focus:border-primary" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Correo electrónico *</label>
                    <Input type="email" name="email" placeholder="tu@email.com" className="rounded-xl border-2 focus:border-primary" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Teléfono *</label>
                    <Input type="tel" name="telefono" placeholder="+1 (555) 123-4567" className="rounded-xl border-2 focus:border-primary" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Tipo de consulta</label>
                    <select name="tipo_consulta" className="w-full p-3 rounded-xl border-2 border-input focus:border-primary bg-background">
                      <option>Consulta general</option>
                      <option>Emergencia médica</option>
                      <option>Atención domiciliaria</option>
                      <option>Telemedicina</option>
                      <option>Información de servicios</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Mensaje *</label>
                    <Textarea name="mensaje" placeholder="Cuéntanos cómo podemos ayudarte..." rows={4} className="rounded-xl border-2 focus:border-primary" required />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-lg font-semibold shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary animate-bounce">Enviar Mensaje</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          {/* Contact Data - Col-4 */}
          <div className="lg:col-span-4 space-y-6 animate-fade-in delay-200">
            {/* Emergency Contact */}
            <Card className="border-2 border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800 animate-bounce">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 rounded-full p-3 animate-bounce">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-foreground">🚨 Emergencias 24/7</h4>
                    <Badge variant="destructive" className="mt-1 text-xs">Línea Directa</Badge>
                  </div>
                </div>
                <p className="text-xl font-bold text-red-600 mb-2">+1 (555) 911-HELP</p>
                <p className="text-sm text-muted-foreground mb-4">Respuesta inmediata</p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary animate-bounce" onClick={() => window.open("tel:+15559111234", "_self")}> <Phone className="h-4 w-4 mr-2" /> Llamar Ahora </Button>
              </CardContent>
            </Card>
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-xl animate-fade-in">
                <div className="bg-primary/10 rounded-full p-2 animate-bounce">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Teléfono</h4>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-xl animate-fade-in delay-100">
                <div className="bg-primary/10 rounded-full p-2 animate-bounce">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Email</h4>
                  <p className="text-muted-foreground text-sm">info@cardiomedic.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-xl animate-fade-in delay-200">
                <div className="bg-primary/10 rounded-full p-2 animate-bounce">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Dirección</h4>
                  <p className="text-muted-foreground text-sm">Av. Salud 123, Torre Médica</p>
                  <p className="text-muted-foreground text-sm">Ciudad Médica, Estado 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-xl animate-fade-in delay-300">
                <div className="bg-primary/10 rounded-full p-2 animate-bounce">
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
            <Card className="glass bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800 animate-fade-in delay-400">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3 animate-bounce" />
                <h4 className="text-lg font-serif font-semibold text-foreground mb-2">WhatsApp Directo</h4>
                <p className="text-muted-foreground text-sm mb-4">Atención rápida y personalizada</p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary animate-bounce" onClick={() => window.open("https://wa.me/15551234567?text=Hola%20Cardio%20Medic,%20necesito%20información%20sobre%20sus%20servicios", "_blank")}> <MessageCircle className="h-4 w-4 mr-2" /> Contactar </Button>
                <div className="flex items-center justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400 animate-fade-in" />))}
                  <span className="text-xs text-muted-foreground ml-2">4.9/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-12 animate-fade-in delay-500">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f3f3f3%3A0x3f3f3f3f3f3f3f3f!2sCardio%20Medic%20-%20Torre%20M%C3%A9dica!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación Cardio Medic" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
