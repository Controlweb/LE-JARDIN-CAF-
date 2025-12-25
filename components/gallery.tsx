"use client"

import { useState } from "react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      url: "/elegant-restaurant-interior-night-warm-lighting.jpg",
      alt: "Interior view",
    },
    {
      url: "/gourmet-food-plating-restaurant-fine-dining.jpg",
      alt: "Signature dish",
    },
    {
      url: "/restaurant-garden-patio-greenery-cozy-lights.jpg",
      alt: "Garden seating",
    },
    {
      url: "/artisan-coffee-latte-art-cafe.jpg",
      alt: "Coffee bar",
    },
    {
      url: "/elegant-dessert-patisserie-luxury.jpg",
      alt: "Desserts",
    },
    {
      url: "/restaurant-table-setting-candlelight-romantic.jpg",
      alt: "Table setting",
    },
  ]

  return (
    <section id="gallery" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary text-sm font-mono tracking-widest uppercase">Galerie</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Plongez dans Notre Univers</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-mono text-pretty">
            Découvrez l&apos;atmosphère unique de LE JARDIN CAFÉ à travers nos images
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <img
                src={images[selectedImage].url || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                className="w-full h-auto rounded-xl"
              />
              <button
                className="absolute top-4 right-4 text-foreground bg-background/50 hover:bg-background/80 rounded-full p-2 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
