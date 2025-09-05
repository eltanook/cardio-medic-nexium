

"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin } from "lucide-react"
import { WhatsappBubble } from "@/components/whatsapp-bubble"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ContactoPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 animate-fade-in">
                Contacto
              </Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-slide-up">Contáctanos</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
                ¿Tienes dudas o necesitas ayuda? Completa el formulario o utiliza nuestros datos de contacto para comunicarte con nuestro equipo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="bg-card/70 backdrop-blur-lg border-0 shadow-xl animate-fade-in delay-100">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-semibold text-primary mb-6">Formulario de Contacto</h2>
                  <form action="https://formsubmit.co/info@cardiomedic.com" method="POST" className="space-y-6">
                    <input type="hidden" name="_subject" value="Nueva consulta desde Cardio Medic" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://cardiomedic.com/gracias" />
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Nombre *</label>
                      <input name="nombre" placeholder="Tu nombre" className="rounded-xl border-2 focus:border-primary w-full p-3" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                      <input type="email" name="email" placeholder="tu@email.com" className="rounded-xl border-2 focus:border-primary w-full p-3" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Mensaje *</label>
                      <textarea name="mensaje" placeholder="¿En qué podemos ayudarte?" rows={4} className="rounded-xl border-2 focus:border-primary w-full p-3" required />
                    </div>
                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-4 text-lg font-semibold shadow-lg">Enviar Mensaje</button>
                  </form>
                </CardContent>
              </Card>
              <Card className="bg-card/70 backdrop-blur-lg border-0 shadow-xl animate-fade-in delay-200">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-semibold text-primary mb-6">Datos de Contacto</h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-medium">Teléfono</div>
                        <div>341-5624552</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div>cardiomedic365@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-medium">Ubicación</div>
                        <div>Saavedra 1555<br />Rosario - Provincia de Santa Fe</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappBubble />
    </>
  );
}
