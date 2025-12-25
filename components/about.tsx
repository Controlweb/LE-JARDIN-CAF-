import { Leaf, Coffee, Moon, Star } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Leaf,
      title: "Ambiance Jardin",
      description: "Un espace verdoyant avec une atmosphère cosy et chaleureuse",
    },
    {
      icon: Coffee,
      title: "Qualité Premium",
      description: "Ingrédients frais et préparations artisanales soignées",
    },
    {
      icon: Moon,
      title: "Service 24/7",
      description: "Ouvert jour et nuit pour tous vos moments gourmands",
    },
    {
      icon: Star,
      title: "Expérience Unique",
      description: "Un mélange parfait de café, restaurant et lounge",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary text-sm font-mono tracking-widest uppercase">Notre Histoire</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">Un Refuge Élégant au Cœur de Casablanca</h2>
            </div>

            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed font-mono">
              <p className="text-pretty">
                LE JARDIN CAFÉ n&apos;est pas qu&apos;un simple restaurant. C&apos;est une expérience sensorielle où la
                nature urbaine rencontre le raffinement culinaire.
              </p>
              <p className="text-pretty">
                Notre espace marie harmonieusement le bois chaleureux, le marbre élégant et une verdure luxuriante pour
                créer une atmosphère unique. De jour comme de nuit, nous offrons un havre de paix où chaque moment
                devient mémorable.
              </p>
              <p className="text-pretty">
                Que vous veniez pour un café matinal, un déjeuner d&apos;affaires, un dîner romantique ou une pause
                nocturne, notre engagement reste le même : vous offrir une expérience gastronomique exceptionnelle dans
                un cadre enchanteur.
              </p>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-dark p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 group"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm font-mono leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
