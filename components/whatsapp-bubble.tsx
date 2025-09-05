"use client"
import { FaWhatsapp } from "react-icons/fa"
import { useState, useEffect } from "react"

export function WhatsappBubble() {
  const [phoneNumber, setPhoneNumber] = useState("5493415624552")
  const [message, setMessage] = useState("Hola Cardio Medic, necesito información sobre sus servicios")

  useEffect(() => {
    // Puedes actualizar el número o mensaje dinámicamente si es necesario
    // Por ejemplo, desde una API o contexto global
  }, [])

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300 group"
      aria-label="WhatsApp Cardio Medic"
    >
      <FaWhatsapp className="h-7 w-7" />
      <span className="ml-2 font-semibold hidden md:inline">WhatsApp</span>
    </a>
  )
}