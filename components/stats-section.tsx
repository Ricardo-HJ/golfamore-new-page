export function StatsSection() {
  const stats = [
    {
      number: "1,300+",
      label: "Golf Courses",
      description: "Across 24 European countries",
    },
    {
      number: "178,500+",
      label: "Active Members",
      description: "Growing community of golfers",
    },
    {
      number: "3.4M+",
      label: "Rounds Played",
      description: "And counting every day",
    },
    {
      number: "€1,300",
      label: "Average Savings",
      description: "Per member annually",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Trusted by Golfers Across Europe
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied members enjoying affordable golf
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg md:text-xl font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
