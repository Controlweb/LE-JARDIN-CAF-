import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/image-removebg-preview-20-2813-29.png"
              alt="LE JARDIN CAFÉ"
              width={80}
              height={80}
              className="w-16 h-16"
            />
            <p className="text-sm text-foreground/70 font-mono leading-relaxed">
              Où le goût rencontre l&apos;élégance. Une expérience culinaire unique à Casablanca.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#menu" className="text-foreground/70 hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-foreground/70 hover:text-primary transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li className="text-foreground/70">Dîner sur Place</li>
              <li className="text-foreground/70">Service Drive</li>
              <li className="text-foreground/70">Livraison</li>
              <li className="text-foreground/70">Ouvert 24/7</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li className="text-foreground/70">
                N119, GRP 8, BD LALA ASMAA MAG
                <br />
                Casablanca 20250
              </li>
              <li>
                <a href="tel:+212618952543" className="text-foreground/70 hover:text-primary transition-colors">
                  +212 618-952543
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@lejardincafe.ma"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  contact@lejardincafe.ma
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-foreground/70" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground/70" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-foreground/70" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} LE JARDIN CAFÉ RESTAURANT. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm font-mono">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
