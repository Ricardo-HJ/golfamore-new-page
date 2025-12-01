import type { Metadata } from "next"
import ClientBuyPage from "./ClientBuyPage"

export const metadata: Metadata = {
  title: "Join Golfamore - €59/Year | Save 50% on Golf Green Fees",
  description:
    "Join 178,500+ golfers and get instant access to 1,300+ courses at half price. Annual membership €59. Save €1,300/year.",
  alternates: {
    canonical: "/buy",
  },
  openGraph: {
    title: "Join Golfamore - €59/Year | Save 50% on Golf",
    description: "Get instant access to 1,300+ golf courses at half price. Only €59/year.",
  },
}

export default function BuyPage() {
  return <ClientBuyPage />
}
