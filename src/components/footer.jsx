export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold">Laviva</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Premium quality soya beans for a healthier, sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-background/80 hover:text-background transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#blog" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li className="text-background/80">Organic Soya Beans</li>
              <li className="text-background/80">Soya Milk</li>
              <li className="text-background/80">Soya Protein</li>
              <li className="text-background/80">Soya Oil</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-background/80">Email: info@laviva.com</li>
              <li className="text-background/80">Phone: +234 906 461 2051</li>
              <li className="text-background/80">Address: 126 Egbu Road, Owerri</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/80">© {new Date().getFullYear()} Laviva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
