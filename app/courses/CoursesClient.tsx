"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Star } from "lucide-react"
import Link from "next/link"

const featuredCourses = [
  {
    name: "Royal Golf Club Madrid",
    location: "Madrid, Spain",
    rating: 4.8,
    regularPrice: 80,
    memberPrice: 40,
    image: "/luxury-golf-course-madrid-spain.jpg",
    holes: 18,
    par: 72,
  },
  {
    name: "Costa Brava Golf Resort",
    location: "Girona, Spain",
    rating: 4.7,
    regularPrice: 70,
    memberPrice: 35,
    image: "/coastal-golf-course-costa-brava.jpg",
    holes: 18,
    par: 71,
  },
  {
    name: "Algarve Championship Course",
    location: "Faro, Portugal",
    rating: 4.9,
    regularPrice: 90,
    memberPrice: 45,
    image: "/championship-golf-course-algarve-portugal.jpg",
    holes: 18,
    par: 72,
  },
  {
    name: "Provence Golf & Country Club",
    location: "Marseille, France",
    rating: 4.6,
    regularPrice: 75,
    memberPrice: 37.5,
    image: "/provence-golf-course-france-lavender.jpg",
    holes: 18,
    par: 70,
  },
  {
    name: "Tuscany Hills Golf Club",
    location: "Florence, Italy",
    rating: 4.8,
    regularPrice: 85,
    memberPrice: 42.5,
    image: "/tuscany-golf-course-italy-hills.jpg",
    holes: 18,
    par: 72,
  },
  {
    name: "Black Forest Golf Resort",
    location: "Baden-Württemberg, Germany",
    rating: 4.7,
    regularPrice: 65,
    memberPrice: 32.5,
    image: "/black-forest-golf-course-germany.jpg",
    holes: 18,
    par: 71,
  },
]

const countries = [
  "Spain",
  "Portugal",
  "France",
  "Italy",
  "Germany",
  "United Kingdom",
  "Netherlands",
  "Belgium",
  "Austria",
  "Switzerland",
  "Sweden",
  "Denmark",
  "Norway",
  "Finland",
  "Poland",
  "Czech Republic",
  "Greece",
  "Turkey",
  "Ireland",
  "Croatia",
  "Slovenia",
  "Hungary",
  "Romania",
  "Bulgaria",
]

export function CoursesClient() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const handleSearch = () => {
    console.log("[v0] Searching for:", searchQuery)
    // Search functionality will be implemented with backend
  }

  const handleCountryFilter = (country: string) => {
    setSelectedCountry(country === selectedCountry ? null : country)
    console.log("[v0] Filtering by country:", country)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Discover 1,300+ Premium Golf Courses
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Play at half price across 24 European countries with your Golfamore membership
            </p>

            {/* Search Bar */}
            <div className="flex gap-2 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by course name, city, or country..."
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">Browse by Country</h2>
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {countries.map((country) => (
              <Badge
                key={country}
                variant={selectedCountry === country ? "default" : "secondary"}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => handleCountryFilter(country)}
              >
                {country}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore some of our most popular golf courses across Europe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <Card key={course.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-muted">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-background/95 backdrop-blur px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-semibold text-foreground">{course.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{course.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{course.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{course.holes} Holes</span>
                    <span>Par {course.par}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="text-xs text-muted-foreground line-through">€{course.regularPrice}</div>
                      <div className="text-2xl font-bold text-primary">€{course.memberPrice}</div>
                      <div className="text-xs text-muted-foreground">Member Price</div>
                    </div>
                    <Link href="/buy">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Courses
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Play at Half Price?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Join 178,500+ golfers saving an average of €1,300 per year on green fees
          </p>
          <Link href="/buy">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Join Now - €59/year
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
