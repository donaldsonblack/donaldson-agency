import { Mail, Phone } from "lucide-react";
import Link from "next/link";
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
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's grow your business
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to take your marketing to the next level? Get in touch with
              our team for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
                <p className="text-muted-foreground">
                  Fill out the form and our team will get back to you within 24
                  hours.
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
                      stirling@donaldsonblack.com.au
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+61 416 669 439</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-6">
                Tell us about your business – we’ll get back to you within one
                business day.
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prefer to chat in person?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Book a free 30-minute consultation with one of our marketing experts
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Schedule a Call
          </Link>
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
