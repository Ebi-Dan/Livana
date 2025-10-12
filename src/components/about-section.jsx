import { HiCheckCircle } from "react-icons/hi"

export default function AboutSection() {
  const features = [
    {
      title: "100% Natural",
      description: "Our soya beans are grown without harmful pesticides or chemicals",
    },
    {
      title: "Sustainably Sourced",
      description: "We partner with local farmers who practice eco-friendly farming",
    },
    {
      title: "Rich in Protein",
      description: "High-quality plant-based protein for a balanced diet",
    },
    {
      title: "Quality Assured",
      description: "Every batch is tested to meet the highest quality standards",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
            <img
              src="image/soybean-nutrition-healthy-food.jpg"
              alt="Soya beans nutrition"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Why Choose Laviva?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              At Laviva, we're committed to bringing you the finest soya beans that nature has to offer. Our dedication
              to quality, sustainability, and nutrition sets us apart in the industry.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <HiCheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
