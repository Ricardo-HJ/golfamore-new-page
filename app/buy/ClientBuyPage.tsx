"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Check, CreditCard, Lock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ClientBuyPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!termsAccepted) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Welcome to Golfamore!",
        description: "Your membership is now active. Start booking at half price!",
      })
      setIsLoading(false)
      router.push("/courses")
    }, 2000)
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent text-accent-foreground">Limited Time Offer</Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
                Join Golfamore Today
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Get instant access to 1,300+ golf courses at half green fee
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Membership Benefits */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif">What You Get</CardTitle>
                    <CardDescription>Everything included in your membership</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">50% Off Green Fees</p>
                        <p className="text-sm text-muted-foreground">Play at half price at over 1,300 golf courses</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">1,300+ Golf Courses</p>
                        <p className="text-sm text-muted-foreground">Access courses across 24 European countries</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Instant Access</p>
                        <p className="text-sm text-muted-foreground">Start booking immediately after signup</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Save €1,300/Year</p>
                        <p className="text-sm text-muted-foreground">Average savings for active members</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Mobile App Access</p>
                        <p className="text-sm text-muted-foreground">Book tee times on the go with our app</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">No Booking Fees</p>
                        <p className="text-sm text-muted-foreground">Zero hidden costs or booking charges</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Proof */}
                <Card className="bg-accent/50">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-foreground">178,500+</p>
                        <p className="text-sm text-muted-foreground">Happy Members</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">3.4M+</p>
                        <p className="text-sm text-muted-foreground">Rounds Played</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">4.8/5</p>
                        <p className="text-sm text-muted-foreground">Rating</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Form */}
              <div>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-serif">Complete Your Purchase</CardTitle>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Lock className="w-4 h-4" />
                        <span className="text-xs">Secure Checkout</span>
                      </div>
                    </div>
                    <CardDescription>Join 178,500+ golfers saving on green fees</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      {/* Membership Plan */}
                      <div className="p-4 bg-primary/5 rounded-lg border-2 border-primary">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-semibold text-foreground">Annual Membership</p>
                            <p className="text-sm text-muted-foreground">Unlimited access for 12 months</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-foreground">€59</p>
                            <p className="text-xs text-muted-foreground">per year</p>
                          </div>
                        </div>
                      </div>

                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Personal Information</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="John" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Doe" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john.doe@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="+44 20 1234 5678" />
                        </div>
                      </div>

                      {/* Payment Information */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                          <CreditCard className="w-4 h-4" />
                          Payment Information
                        </h3>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" required />
                          </div>
                        </div>
                      </div>

                      {/* Terms */}
                      <div className="flex items-start gap-2">
                        <Checkbox
                          id="terms"
                          required
                          checked={termsAccepted}
                          onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                        />
                        <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg"
                        disabled={isLoading}
                      >
                        {isLoading ? "Processing..." : "Complete Purchase - €59"}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Secure payment processed by Stripe. Your membership starts immediately.
                      </p>
                    </form>
                  </CardContent>
                </Card>

                {/* Money Back Guarantee */}
                <Card className="mt-4 bg-accent/30">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">30-Day Money Back Guarantee</p>
                        <p className="text-sm text-muted-foreground">
                          Not satisfied? Get a full refund within 30 days, no questions asked.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
