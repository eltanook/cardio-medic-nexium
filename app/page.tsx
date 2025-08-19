import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsappBubble } from "@/components/whatsapp-bubble"
export default function CardioMedicLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <section id="servicios">
          <ServicesSection />
        </section>
        <section id="nosotros">
          <AboutSection />
        </section>
        <section id="contacto">
          <ContactSection />
        </section>
      </main>
      <WhatsappBubble />
      <Footer />
    </div>
  )
}
