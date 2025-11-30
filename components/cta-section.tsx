import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Start Saving on Every Round</h2>
        <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Join 178,500+ golfers playing more for less
        </p>
        <p className="text-lg mb-8 max-w-xl mx-auto opacity-80">
          Just €59/year for unlimited 50% discounts at 1,300+ courses
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Join Golfamore Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 bg-transparent"
          >
            View All Courses
          </Button>
        </div>
        <p className="mt-6 text-sm opacity-75">30-day money-back guarantee • Cancel anytime</p>
      </div>
    </section>
  )
}
