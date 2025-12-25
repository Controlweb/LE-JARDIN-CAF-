import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "LE JARDIN CAFÉ RESTAURANT | Where Taste Meets Elegance - Casablanca",
  description:
    "Experience elegant dining in Casablanca. LE JARDIN CAFÉ offers premium cuisine, cozy ambiance, and 24/7 service. Dine-in, drive-thru, and delivery available.",
  keywords:
    "restaurant casablanca, café casablanca, le jardin café, 24/7 restaurant, premium dining morocco, casablanca food",
  openGraph: {
    title: "LE JARDIN CAFÉ RESTAURANT - Casablanca",
    description: "Where Taste Meets Elegance. Open 24/7 in Casablanca.",
    type: "website",
    locale: "fr_MA",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
