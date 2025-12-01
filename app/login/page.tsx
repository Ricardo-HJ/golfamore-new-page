import type { Metadata } from "next"
import { LoginClientPage } from "./_components/LoginClientPage"

export const metadata: Metadata = {
  title: "Login - Golfamore | Access Your Golf Membership",
  description: "Login to your Golfamore account to access 1,300+ golf courses at half price across Europe.",
  alternates: {
    canonical: "/login",
  },
}

export default function LoginPage() {
  return <LoginClientPage />
}
