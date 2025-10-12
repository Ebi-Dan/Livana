export default function ProductsSection() {
  const products = [
    {
      name: "Organic Soya Beans",
      description: "Premium organic soya beans, perfect for everyday cooking and nutrition",
      image: "image/organic-soya-beans-in-bowl.jpg",
    },
    {
      name: "Soya Milk",
      description: "Fresh, creamy soya milk made from the finest beans",
      image: "image/fresh-soya-milk-in-glass-bottle.jpg",
    },
    {
      name: "Soya Protein",
      description: "High-quality protein powder for fitness enthusiasts",
      image: "image/soya-protein-powder.jpg",
    },
    {
      name: "Tofu",
      description: "Silky smooth tofu, a versatile ingredient for any meal",
      image: "image/fresh-tofu-blocks.jpg",
    },
  ]

  return (
    <section id="products" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Products</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Explore our range of premium soya bean products, carefully crafted to meet your nutritional needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
