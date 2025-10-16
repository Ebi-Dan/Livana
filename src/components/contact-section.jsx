import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Have questions about our products? We'd love to hear from you. Reach out to us anytime.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-muted/30 rounded-2xl">
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
              <HiMail className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
            <p className="text-muted-foreground">Livanalivana348@gmail.com</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-muted/30 rounded-2xl">
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
              <HiPhone className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
            <p className="text-muted-foreground">+234 906 461 2051</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-muted/30 rounded-2xl">
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
              <HiLocationMarker className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
            <p className="text-muted-foreground">126 Egbu Road, Owerri</p>
          </div>
        </div>
      </div>
    </section>
  )
}
