"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full" />
            <span className="font-serif text-xl font-bold text-foreground">Golfamore</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Login
            </Link>
            <Link href="/buy">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Join Now - €59/year</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/courses"
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  Courses
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  href="/login"
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  Login
                </Link>
                <Link href="/buy">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Join Now - €59/year
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
