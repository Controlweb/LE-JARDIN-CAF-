import { Button } from "@/components/ui/button"
import { ExternalLink, Coffee, Sandwich, Cake, Soup } from "lucide-react"

export function Menu() {
  const categories = [
    {
      icon: Coffee,
      name: "Café & Boissons",
      description: "Espresso, cappuccino, thés premium et jus frais",
      color: "text-primary",
    },
    {
      icon: Sandwich,
      name: "Petit Déjeuner",
      description: "Viennoiseries, œufs, pancakes et options healthy",
      color: "text-secondary",
    },
    {
      icon: Soup,
      name: "Plats Principaux",
      description: "Cuisine marocaine et internationale de qualité",
      color: "text-accent",
    },
    {
      icon: Cake,
      name: "Desserts",
      description: "Pâtisseries maison et douceurs gourmandes",
      color: "text-primary",
    },
  ]

  return (
    <section id="menu" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary text-sm font-mono tracking-widest uppercase">Notre Carte</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Une Cuisine qui Éveille les Sens</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-mono text-pretty">
            Découvrez notre sélection de plats préparés avec passion et des ingrédients de première qualité
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="glass-dark p-6 rounded-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <category.icon
                className={`w-12 h-12 ${category.color} mb-4 group-hover:scale-110 transition-transform`}
              />
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-muted-foreground text-sm font-mono leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Menu CTA */}
        <div className="text-center space-y-6">
          <div className="glass-dark p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Menu Complet Disponible</h3>
            <p className="text-muted-foreground mb-6 font-mono">
              Consultez notre menu détaillé avec tous nos plats, boissons et tarifs
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono" asChild>
              <a href="/files/MENU LE JARDIN VERSION NEW.pdf" target="_blank" rel="noopener noreferrer">
                Voir le Menu Complet
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Quick Order Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button variant="outline" size="lg" className="border-primary/30 font-mono bg-transparent" asChild>
              <a href="tel:+212618952543">Commander par Téléphone</a>
            </Button>
            <Button variant="outline" size="lg" className="border-secondary/30 font-mono bg-transparent" asChild>
              <a href="https://wa.me/212618952543" target="_blank" rel="noopener noreferrer">
                Commander via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
