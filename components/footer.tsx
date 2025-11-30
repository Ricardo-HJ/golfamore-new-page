import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Golfamore</h3>
            <p className="text-background/80 leading-relaxed">
              Europe's leading golf membership platform. Play at 1,300+ courses for half the green fee.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#courses" className="text-background/80 hover:text-background transition-colors">
                    Browse Courses
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-background/80 hover:text-background transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#membership" className="text-background/80 hover:text-background transition-colors">
                    Membership
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-background/80 hover:text-background transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#help" className="text-background/80 hover:text-background transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#partners" className="text-background/80 hover:text-background transition-colors">
                    Partner Courses
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://facebook.com/golfamore"
                aria-label="Facebook"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/golfamore"
                aria-label="Instagram"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/golfamore"
                aria-label="Twitter"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <a
                href="mailto:info@golfamore.com"
                className="text-background/80 hover:text-background transition-colors"
              >
                info@golfamore.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80">
            &copy; {new Date().getFullYear()} Golfamore. All rights reserved. |{" "}
            <a href="/privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="hover:text-background transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
