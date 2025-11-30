import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/beautiful-golf-course-at-sunrise-with-morning-mist.jpg"
          alt="Premium golf course at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance">
          Play Golf at Half Green Fee
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 max-w-3xl mx-auto text-balance">
          Access 1,300+ Golf Courses Across Europe
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join 178,500+ golfers saving an average of €1,300 per year. Golfamore membership for just €59/year.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
            Join Now - €59/Year
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
          >
            Browse Courses
          </Button>
        </div>
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
          <div>✓ 1,300+ Courses</div>
          <div>✓ 24 Countries</div>
          <div>✓ 178,500+ Members</div>
          <div>✓ 3.4M+ Rounds Played</div>
        </div>
      </div>
    </section>
  )
}
