import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary text-sm font-mono tracking-widest uppercase">Contact</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Venez Nous Rendre Visite</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-mono text-pretty">
            Nous sommes ouverts 24h/24 pour vous accueillir à tout moment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-dark p-6 rounded-xl space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Adresse</h3>
                  <p className="text-foreground/80 font-mono leading-relaxed">
                    N119, GRP 8, BD LALA ASMAA MAG
                    <br />
                    Casablanca 20250
                    <br />
                    Maroc
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Téléphone</h3>
                  <a
                    href="tel:+212618952543"
                    className="text-foreground/80 hover:text-primary transition-colors font-mono"
                  >
                    +212 618-952543
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Horaires</h3>
                  <p className="text-foreground/80 font-mono">
                    <span className="text-primary font-bold">Ouvert 24h/24, 7j/7</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a
                    href="mailto:contact@lejardincafe.ma"
                    className="text-foreground/80 hover:text-primary transition-colors font-mono"
                  >
                    contact@lejardincafe.ma
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono w-full"
                asChild
              >
                <a href="tel:+212618952543">
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 font-mono w-full bg-transparent"
                asChild
              >
                <a
                  href="https://www.google.com/maps?q=N119,+GRP+8,+BD+LALA+ASMAA+MAG,+Casablanca+20250"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Itinéraire
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="glass-dark p-2 rounded-xl overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7676777777777!2d-7.6177777!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNycwNC4wIlc!5e0!3m2!1sen!2sma!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
