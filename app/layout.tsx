import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Golfamore - Play Golf at Half Green Fee | 1,300+ Golf Courses in Europe",
  description:
    "Join 178,500+ golfers and save 50% on green fees at 1,300+ courses across 24 countries. Only €59/year. Save €1,300 annually.",
  keywords:
    "golf membership, discount golf, half price golf, golf courses Europe, green fee discount, golf deals, affordable golf, golf subscription, golf pass Europe",
  authors: [{ name: "Golfamore" }],
  creator: "Golfamore",
  publisher: "Golfamore",
  metadataBase: new URL("https://www.golfamore.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.golfamore.com",
    siteName: "Golfamore",
    title: "Golfamore - Play Golf at Half Green Fee | 1,300+ Courses",
    description:
      "Join 178,500+ golfers and save 50% on green fees at over 1,300 golf courses across Europe. Only €59/year.",
    images: [
      {
        url: "/premium-golf-course-aerial-view.jpg",
        width: 1200,
        height: 630,
        alt: "Golfamore - Discount Golf Membership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golfamore - Play Golf at Half Green Fee",
    description: "Join 178,500+ golfers and save 50% on green fees at 1,300+ courses. Only €59/year.",
    images: ["/premium-golf-course-aerial-view.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Golfamore",
              description:
                "Golf membership offering 50% discount on green fees at over 1,300 golf courses across Europe",
              url: "https://www.golfamore.com",
              logo: "https://www.golfamore.com/logo.png",
              sameAs: [
                "https://facebook.com/golfamore",
                "https://twitter.com/golfamore",
                "https://instagram.com/golfamore",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "178500",
              },
              offers: {
                "@type": "Offer",
                name: "Golfamore Annual Membership",
                price: "59",
                priceCurrency: "EUR",
                description: "Annual golf membership with 50% discount on green fees at 1,300+ courses",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
