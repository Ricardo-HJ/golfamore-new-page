import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Search, CreditCard, Trophy } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "1",
    title: "Join Golfamore",
    description: "Sign up for just €59/year and get instant access to our network of 1,300+ golf courses.",
  },
  {
    icon: Search,
    step: "2",
    title: "Find Your Course",
    description: "Browse our extensive directory of partner courses across 24 European countries.",
  },
  {
    icon: CreditCard,
    step: "3",
    title: "Book & Save 50%",
    description: "Reserve your tee time and automatically receive 50% off the green fee at checkout.",
  },
  {
    icon: Trophy,
    step: "4",
    title: "Play & Enjoy",
    description: "Show your Golfamore membership and enjoy premium golf at half the price.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            How Golfamore Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start saving on golf in 4 simple steps
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="border-border relative">
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{step.step}</span>
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
