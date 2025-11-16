import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { CookieConsentBanner } from "@/components/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Donaldson Agency - Marketing Excellence & Digital Strategy",
    template: "%s | Donaldson Agency",
  },
  description:
    "Powerful, data-driven marketing and growth strategies to help you convert, engage, and retain more customers. Trusted by 500+ growing businesses.",
  keywords: [
    "marketing agency",
    "digital marketing",
    "growth strategy",
    "SEO",
    "content marketing",
    "social media marketing",
    "brand development",
  ],
  authors: [{ name: "Donaldson Agency" }],
  creator: "Donaldson Agency",
  publisher: "Donaldson Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://donaldson.agency"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Donaldson Agency - Marketing Excellence & Digital Strategy",
    description:
      "Powerful, data-driven marketing and growth strategies to help you convert, engage, and retain more customers.",
    url: "https://donaldson.agency",
    siteName: "Donaldson Agency",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/data-graph.jpg",
        width: 1200,
        height: 630,
        alt: "Donaldson Agency - Data-Driven Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donaldson Agency - Marketing Excellence & Digital Strategy",
    description:
      "Powerful, data-driven marketing and growth strategies to help you convert, engage, and retain more customers.",
    creator: "@donaldsonagency",
    images: ["/data-graph.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="description"
          content="Powerful, data-driven marketing and growth strategies to help you convert, engage, and retain more customers. Trusted by 500+ growing businesses."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
