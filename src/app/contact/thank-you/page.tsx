"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    // Fire Google Ads conversion on page load
    if (typeof window !== "undefined" && window.gtag) {
      const conversionLabel = "2LobCLyUhsEbEK-zi4ZC";
      const adsId = "AW-17729509807";

      console.log("🎯 Thank you page loaded - firing conversion");
      console.log("Send to:", `${adsId}/${conversionLabel}`);

      window.gtag("event", "conversion", {
        send_to: `${adsId}/${conversionLabel}`,
        value: 100,
        currency: "USD",
      });

      // Also track in GA4
      window.gtag("event", "generate_lead", {
        event_category: "engagement",
        event_label: "Contact Form Submission",
        value: 100,
        currency: "USD",
      });

      console.log("✅ Conversion fired on thank-you page");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="max-w-2xl w-full bg-card border border-border rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>

        <p className="text-xl text-muted-foreground mb-8">
          We've received your message and will get back to you within 24 hours.
        </p>

        <div className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold mb-2">What happens next?</h2>
          <ul className="text-left space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>
                Our team will review your inquiry and match you with the right
                specialist
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>
                You'll receive a personalized response within 24 hours
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>
                We'll schedule a discovery call to discuss your marketing goals
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Return Home
          </Link>
          <Link
            href="/#services"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Our Services
          </Link>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Didn't receive a confirmation email? Check your spam folder or{" "}
          <Link href="/contact" className="text-primary hover:underline">
            contact us again
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
