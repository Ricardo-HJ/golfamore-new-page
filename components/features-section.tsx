import { Card, CardContent } from "@/components/ui/card"
import { Percent, MapPin, TrendingDown } from "lucide-react"

const features = [
  {
    icon: Percent,
    title: "50% Off Green Fees",
    description:
      "Play at half price at over 1,300 premium golf courses. A €70 green fee becomes just €35 with your Golfamore membership.",
  },
  {
    icon: MapPin,
    title: "1,300+ Golf Courses",
    description:
      "Access an extensive network of quality golf courses across 24 European countries. From championship courses to hidden gems.",
  },
  {
    icon: TrendingDown,
    title: "Save €1,300/Year",
    description:
      "Our members save an average of €1,300 annually on green fees. Your membership pays for itself after just 2-3 rounds.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Why Golfers Love Golfamore
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The smartest way to play more golf for less money
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8 px-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
