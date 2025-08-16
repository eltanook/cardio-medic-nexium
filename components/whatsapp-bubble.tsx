"use client"
import { MessageCircle } from "lucide-react"

export function WhatsappBubble() {
  return (
    <a
      href="https://wa.me/15551234567?text=Hola%20Cardio%20Medic,%20necesito%20información%20sobre%20sus%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300 group"
      aria-label="WhatsApp Cardio Medic"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="ml-2 font-semibold hidden md:inline">WhatsApp</span>
    </a>
  )
}
