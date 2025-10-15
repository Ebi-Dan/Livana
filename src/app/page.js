import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import ProductsSection from "@/components/products-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
