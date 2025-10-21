import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact Us | Donaldson Agency",
  description: "Get in touch with our team to discuss your marketing needs",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Donaldson
          </Link>
          <Link
            href="/"
            className="text-sm hover:text-primary transition-colors"
          >
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's grow your business
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to take your marketing to the next level? Get in touch with
              our team for a free consultation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
                  <p className="text-muted-foreground">
                    Fill out the form and our team will get back to you within
                    24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        hello@donaldsonagency.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        123 Marketing Street
                        <br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prefer to chat in person?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Book a free 30-minute consultation with one of our marketing
              experts
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Schedule a Call
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="text-sm text-muted-foreground">
            © 2025 Donaldson Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
