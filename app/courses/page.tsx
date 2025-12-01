import { CoursesClient } from "./CoursesClient"

export const metadata = {
  title: "Golf Courses - 1,300+ Courses Across Europe | Golfamore",
  description:
    "Browse 1,300+ premium golf courses across 24 European countries. Play at half price with Golfamore membership.",
  keywords:
    "golf courses, European golf courses, discount golf, golf course directory, premium golf courses, golf membership",
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: "1,300+ Golf Courses Across Europe | Golfamore",
    description: "Play at over 1,300 premium golf courses at half price with Golfamore membership.",
    type: "website",
  },
}

export default function CoursesPage() {
  return <CoursesClient />
}
