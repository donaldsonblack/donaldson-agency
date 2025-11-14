import {
  ArrowRight,
  BarChart3,
  CircleCheckBig,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  AnimatedSection,
  ScaleIn,
} from "@/components/animated-section";

// Lazy load heavy components that are below the fold
const TimelineWithBeam = dynamic(() => import("@/components/timeline-with-beam").then(mod => ({ default: mod.TimelineWithBeam })));

const ScrollVelocityContainer = dynamic(() => import("@/components/ui/scroll-based-velocity").then(mod => ({ default: mod.ScrollVelocityContainer })));

const ScrollVelocityRow = dynamic(() => import("@/components/ui/scroll-based-velocity").then(mod => ({ default: mod.ScrollVelocityRow })));

const CustomerNotifications = dynamic(() => import("@/components/customer-notifications").then(mod => ({ default: mod.CustomerNotifications })));

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded">
        Skip to main content
      </a>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="text-2xl font-bold" aria-label="Donaldson Agency Home">
            Donaldson
          </Link>
          <div className="hidden md:flex items-center gap-8" role="navigation">
            <Link
              href="#services"
              className="text-sm hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            >
              Services
            </Link>
            <Link
              href="#work"
              className="text-sm hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            >
              Work
            </Link>
            <Link
              href="#about"
              className="text-sm hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            >
              Contact
            </Link>
          </div>
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium text-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Get started with Donaldson Agency"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main id="main-content">
      <section className="pt-32 pb-20 px-4" aria-labelledby="hero-heading">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-1.5 bg-muted rounded-full text-sm font-medium mb-4">
              🚀 Trusted by 500+ growing businesses
            </div>
            <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold tracking-tight">
              Darwin's Performance Partner for Trades, Tourism & Health
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to grow your business, scale your brand, and
              dominate your market. Built by marketers, for ambitious
              businesses.
            </p>
            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/contact"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  Start Growing Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#services"
                  className="border border-border px-8 py-4 rounded-full font-semibold text-lg hover:bg-muted transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Hero Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors flex items-start gap-4">
              <CircleCheckBig className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3">100% Trackable Results</h3>
                <p className="text-muted-foreground">
                  Every campaign includes call logs, booking data & transparent reporting.
                </p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors flex items-start gap-4">
              <CircleCheckBig className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3">90-Day Performance Promise</h3>
                <p className="text-muted-foreground">
                  If we don't deliver the agreed outcomes, month four is free.
                </p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors flex items-start gap-4">
              <CircleCheckBig className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3">Local Presence, Lean Team</h3>
                <p className="text-muted-foreground">
                  One team member on the ground in Darwin, two remote specialists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Feature Section */}
      <section className="bg-card text-card-foreground py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Data-Driven Strategy
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Everything you've wished for in a marketing partner, and more.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just create campaigns—we build growth engines. Our
                data-driven approach ensures every dollar spent delivers
                measurable results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Lightning-Fast Results</div>
                    <div className="text-sm text-muted-foreground">
                      See measurable growth in your first 30 days
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Precision Targeting</div>
                    <div className="text-sm text-muted-foreground">
                      Reach your ideal customers with laser accuracy
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Scalable Growth</div>
                    <div className="text-sm text-muted-foreground">
                      Systems that grow with your business
                    </div>
                  </div>
                </li>
              </ul>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <BarChart3 className="w-48 h-48 text-primary/40" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful solutions for every growth stage
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From startups to enterprises, we have the tools and expertise to
              accelerate your success
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <ScaleIn delay={0.1}>
              <div className="p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Growth Marketing</h3>
                <p className="text-muted-foreground mb-4">
                  Data-driven campaigns that deliver consistent, scalable growth
                  across all channels
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    SEO & Content Marketing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Paid Advertising (PPC, Social)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Conversion Rate Optimization
                  </li>
                </ul>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.2}>
              <div className="p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Brand Strategy</h3>
                <p className="text-muted-foreground mb-4">
                  Build a brand that resonates with your audience and stands out
                  in the market
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Brand Identity & Positioning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Visual Design & Guidelines
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Messaging & Voice
                  </li>
                </ul>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.3}>
              <div className="p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Analytics & Insights
                </h3>
                <p className="text-muted-foreground mb-4">
                  Make informed decisions with comprehensive data analysis and
                  reporting
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Performance Dashboards
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Customer Journey Mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Market Research & Analysis
                  </li>
                </ul>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Growth shouldn't take years to implement.
            </h2>
            <p className="text-xl text-muted-foreground">
              Here's what you can achieve with Donaldson in just 30 days.
            </p>
          </AnimatedSection>

          {/* Timeline - Desktop Only */}
          <div className="hidden md:block">
            <TimelineWithBeam />
          </div>

          {/* Cards - Desktop: 3 columns, Mobile: Stacked with day labels */}
          <div className="md:grid md:grid-cols-3 md:gap-8 space-y-8 md:space-y-0">
            {/* Card 1 */}
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col">
                {/* Day label for mobile */}
                <div className="md:hidden flex justify-center mb-4">
                  <div className="inline-block px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">
                    Day 1
                  </div>
                </div>
                <div className="bg-muted p-8 rounded-2xl h-full">
                  <h3 className="text-xl font-bold mb-6">Get started.</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Discovery call and strategy session
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Brand audit and competitor analysis
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Custom marketing roadmap delivered
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col">
                {/* Day label for mobile */}
                <div className="md:hidden flex justify-center mb-4">
                  <div className="inline-block px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">
                    Day 7
                  </div>
                </div>
                <div className="bg-muted p-8 rounded-2xl h-full">
                  <h3 className="text-xl font-bold mb-6">Get comfortable.</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      First campaigns live and running
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Analytics dashboard and reporting set up
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Weekly optimization and A/B testing
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            </AnimatedSection>

            {/* Card 3 */}
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col">
                {/* Day label for mobile */}
                <div className="md:hidden flex justify-center mb-4">
                  <div className="inline-block px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">
                    Day 30
                  </div>
                </div>
                <div className="bg-muted p-8 rounded-2xl h-full">
                  <h3 className="text-xl font-bold mb-6">
                    Ask why you didn't start sooner.
                  </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Measurable ROI and revenue growth
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Lead generation on autopilot
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">
                      Scalable growth systems in place
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Real-Time Results */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real-time results you can see
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with instant notifications as your campaigns drive leads, conversions, and growth
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <CustomerNotifications />
          </AnimatedSection>
        </div>
      </section>

      {/* Why Top End Businesses Choose Donaldson */}
      <section className="bg-muted py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Top End Businesses Choose Donaldson
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors flex items-start gap-4 h-full">
                <CircleCheckBig className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Built for Darwin, Not the East Coast</h3>
                  <p className="text-muted-foreground">
                    Every strategy we use is shaped around local seasonality, weather patterns, and how business is actually done in the Territory.
                    <br />
                    <span className="text-sm italic">(Trades, Tourism, Health — our three validated niches.)</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors flex items-start gap-4 h-full">
                <CircleCheckBig className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">100% Trackable Results</h3>
                  <p className="text-muted-foreground">
                    Every campaign includes call logs, booking data, and transparent reporting. No guesswork.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors flex items-start gap-4 h-full">
                <CircleCheckBig className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Low-Risk, Proof-First Engagements</h3>
                  <p className="text-muted-foreground">
                    Our Foot-In-The-Door audits offer quick wins before you commit to any retainer.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors flex items-start gap-4 h-full">
                <CircleCheckBig className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">AHPRA-Safe & Compliance-First for Health</h3>
                  <p className="text-muted-foreground">
                    A unique gap in the Darwin market that no other agency addresses.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors flex items-start gap-4 h-full">
                <CircleCheckBig className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">90-Day Performance Promise</h3>
                  <p className="text-muted-foreground">
                    If we don't deliver the agreed outcomes, month four is free — no questions asked.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <div className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors flex items-start gap-4 h-full">
                <CircleCheckBig className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Local Presence + Lean, High-Skill Team</h3>
                  <p className="text-muted-foreground">
                    One founder on the ground in Darwin; two specialists handling strategy, tech, and finance ops.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4" aria-labelledby="cta-heading">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
              Ready to accelerate your growth?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a free strategy session and discover how we can 10x your
              marketing results
            </p>
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-12 py-5 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              No commitment required • 30-minute consultation • Actionable
              insights guaranteed
            </p>
          </AnimatedSection>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4" role="contentinfo">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">Donaldson</div>
              <p className="text-sm text-muted-foreground">
                Marketing excellence for ambitious businesses
              </p>
            </div>
            <div>
              <div className="font-semibold mb-3">Services</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Growth Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Brand Strategy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Company</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Legal</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Donaldson Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
