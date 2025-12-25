import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Reviews() {
  const reviews = [
    {
      name: "Fatima Z.",
      rating: 5,
      text: "Une expérience extraordinaire ! L'ambiance est magique et la cuisine est délicieuse. Le service 24/7 est un vrai plus.",
      date: "Il y a 2 semaines",
    },
    {
      name: "Mehdi A.",
      rating: 5,
      text: "Parfait pour les dîners d'affaires comme pour les soirées entre amis. Le cadre est élégant et le personnel très professionnel.",
      date: "Il y a 1 mois",
    },
    {
      name: "Sarah B.",
      rating: 4,
      text: "Magnifique décor avec beaucoup de verdure. Les plats sont savoureux et bien présentés. Je recommande vivement !",
      date: "Il y a 3 semaines",
    },
  ]

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary text-sm font-mono tracking-widest uppercase">Avis Clients</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Ce Que Nos Clients Disent</h2>

          {/* Google Rating */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.6</span>
            </div>
            <div className="h-8 w-px bg-border" />
            <p className="text-muted-foreground font-mono">36 avis Google</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="p-6 glass-dark border-border/50 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-xs text-muted-foreground font-mono">{review.date}</p>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed font-mono text-sm">{review.text}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/search/?api=1&query=LE+JARDIN+CAFÉ+Casablanca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors font-mono text-sm underline"
          >
            Voir tous les avis sur Google
          </a>
        </div>
      </div>
    </section>
  )
}
