export function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <img
              src="/golfer-teeing-off-on-beautiful-course.jpg"
              alt="Golfer enjoying discounted golf with Golfamore membership"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <article className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Play More Golf, Spend Less
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Golfamore is Europe's leading golf membership platform, connecting passionate golfers with premium courses
              at unbeatable prices. With over 178,500 members across 24 countries, we've made quality golf accessible to
              everyone.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our mission is simple: help golfers play more rounds without breaking the bank. For just €59 per year, you
              get instant access to 50% discounts at over 1,300 golf courses. Whether you're planning a golf holiday or
              playing your local favorites, Golfamore makes every round more affordable.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1,300+</div>
                <div className="text-sm text-muted-foreground">Golf Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">178K+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3.4M+</div>
                <div className="text-sm text-muted-foreground">Rounds Played</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
