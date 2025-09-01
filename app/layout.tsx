import type React from "react"
import type { Metadata } from "next"
import { Inter, Nunito } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "Cardio Medic - Servicio de Emergencias Médicas 24/7",
  description:
    "Atención médica profesional las 24 horas. Emergencias y atención domiciliaria con el mejor equipo médico.",
  keywords: "emergencias médicas, atención domiciliaria, cardio medic, servicios médicos 24/7",
  authors: [{ name: "Cardio Medic" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Cardio Medic - Emergencias Médicas 24/7",
    description: "Atención médica profesional cuando más la necesitas",
    type: "website",
    locale: "es_ES",
    siteName: "Cardio Medic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cardio Medic - Emergencias Médicas 24/7",
    description: "Atención médica profesional cuando más la necesitas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${nunito.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
