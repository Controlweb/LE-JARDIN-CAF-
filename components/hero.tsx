"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Clock, Bike, Car, UtensilsCrossed } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background z-10" />
        <img
          src="/elegant-restaurant-night-garden-ambiance-warm-ligh.jpg"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 z-20 text-center">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Tagline */}
          <div className="space-y-2">
            <p className="text-primary text-sm lg:text-base font-mono tracking-widest uppercase">Bienvenue à</p>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-balance leading-tight">
              LE JARDIN
              <span className="block text-primary mt-2">CAFÉ</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 max-w-3xl mx-auto text-pretty font-light">
            Où le Goût Rencontre l&apos;Élégance
          </p>

          {/* Service Badges */}
          <div className="flex flex-wrap justify-center gap-4 py-6">
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono">Dîner sur Place</span>
            </div>
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <Car className="w-4 h-4 text-secondary" />
              <span className="text-sm font-mono">Drive</span>
            </div>
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <Bike className="w-4 h-4 text-accent" />
              <span className="text-sm font-mono">Livraison</span>
            </div>
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono">Ouvert 24/7</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-mono"
              asChild
            >
              <a href="#menu">Voir le Menu</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg font-mono bg-transparent"
              asChild
            >
              <a
                href="https://www.google.com/maps?q=N119,+GRP+8,+BD+LALA+ASMAA+MAG,+Casablanca+20250"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Itinéraire
              </a>
            </Button>
          </div>

          {/* Location Info */}
          <p className="text-muted-foreground text-sm font-mono pt-8">
            N119, GRP 8, BD LALA ASMAA MAG • Casablanca, Maroc
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
