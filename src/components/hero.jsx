"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="image/soybean-field-golden-harvest-natural-organic-farmi.jpg"
          alt="Soybean field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 text-balance">
          Premium Soya Beans
          <br />
          <span className="text-secondary">For a Healthier Tomorrow</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-background/90 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
          Discover the finest quality soya beans, sustainably sourced and carefully processed to bring nature's best to
          your table.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 bg-green-700" onClick={() => scrollToSection("products")}>
            Explore Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-background/20 backdrop-blur-sm border-background text-background hover:bg-background hover:text-foreground"
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
