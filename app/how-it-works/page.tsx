import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, UserPlus, CreditCard, MapPin, Calendar, Trophy } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "How It Works - Simple Golf Membership | Golfamore",
  description:
    "Learn how Golfamore works. Join in 2 minutes, get instant access to 1,300+ courses, and save 50% on green fees.",
  keywords: "how golfamore works, golf membership process, discount golf membership, golf savings",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How Golfamore Works - Simple Golf Membership",
    description: "Join in 2 minutes and start saving 50% on green fees at 1,300+ courses across Europe.",
    type: "website",
  },
}

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up in 2 Minutes",
    description:
      "Create your account with just your email and basic information. No complicated forms or lengthy approval process.",
  },
  {
    icon: CreditCard,
    title: "Choose Your Membership",
    description:
      "Pay just €59 for a full year of unlimited access. Cancel anytime with our 30-day money-back guarantee.",
  },
  {
    icon: MapPin,
    title: "Browse 1,300+ Courses",
    description:
      "Search our extensive directory of premium golf courses across 24 European countries. Filter by location, rating, and price.",
  },
  {
    icon: Calendar,
    title: "Book Your Tee Time",
    description:
      "Reserve your spot directly through our platform or contact the course. Show your Golfamore membership card when you arrive.",
  },
  {
    icon: Trophy,
    title: "Play & Save 50%",
    description:
      "Enjoy your round at half the regular green fee. The more you play, the more you save. Average savings: €1,300/year.",
  },
]

const benefits = [
  "Instant access to 1,300+ premium golf courses",
  "Save 50% on green fees at all partner courses",
  "No booking fees or hidden charges",
  "Play as many rounds as you want",
  "Access to exclusive member-only tournaments",
  "Priority booking at select courses",
  "Mobile app for easy course discovery",
  "24/7 customer support",
]

const faqs = [
  {
    question: "How much can I really save?",
    answer:
      "Our members save an average of €1,300 per year. If you play just 2 rounds per month at an average green fee of €70, you'll save €840 annually. The membership pays for itself after just one round at most courses.",
  },
  {
    question: "Are there any restrictions on when I can play?",
    answer:
      "Most courses offer Golfamore rates 7 days a week, though some premium courses may have specific time slots. You can see availability for each course in our directory before booking.",
  },
  {
    question: "Can I bring guests?",
    answer:
      "Yes! Your guests can also enjoy the discounted rate when playing with you. Some courses may limit the number of guests, which will be clearly indicated when booking.",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not completely satisfied with your membership, contact us within 30 days for a full refund, no questions asked.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              How Golfamore Works
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Join in minutes, play at 1,300+ courses, and save 50% on every round. It's that simple.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Everything Included
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center text-pretty">
              Your €59 annual membership includes all these benefits
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              See Your Savings
            </h2>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Average green fee</span>
                    <span className="text-2xl font-bold text-foreground">€70</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">With Golfamore (50% off)</span>
                    <span className="text-2xl font-bold text-primary">€35</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Savings per round</span>
                    <span className="text-2xl font-bold text-accent">€35</span>
                  </div>
                  <div className="bg-primary text-primary-foreground rounded-lg p-6 text-center">
                    <div className="text-sm mb-2 opacity-90">Play just 2 rounds and your membership is paid for!</div>
                    <div className="text-4xl font-bold">€59 membership = €70 in savings</div>
                  </div>
                  <div className="text-center text-muted-foreground text-sm">
                    Average member plays 24 rounds/year and saves €1,300
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question}>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Start Saving?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Join 178,500+ golfers who are already playing more and paying less
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/buy">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Join Now - €59/year
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
