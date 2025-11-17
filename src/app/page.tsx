import {
  Activity,
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Shield,
  Ship,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { AnimatedCTAButton } from "@/components/animated-cta-button";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-block px-5 py-2 bg-muted rounded-full text-sm font-medium mb-8">
                  🎯 Performance Marketing for Darwin & the Top End
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                  Darwin performance marketing for trades, clinics and tours
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-light">
                  We design and run performance-based lead and booking systems
                  for Darwin tradies, healthcare clinics, and tourism operators
                  – with clear guarantees, local focus, and capped client
                  numbers.
                </p>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Built around leads, jobs, patients and direct bookings
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Pilots, guarantees and clear definitions
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Smaller client list, more attention
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Darwin, Palmerston & Top End focused
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedCTAButton href="/contact" variant="primary">
                    Book a Growth Diagnostic
                  </AnimatedCTAButton>
                  <AnimatedCTAButton href="#niches" variant="secondary">
                    View Programs
                  </AnimatedCTAButton>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  Free 30–45 minute call to map the quickest path to more jobs,
                  patients or bookings – even if we never work together.
                </p>
              </div>

              {/* Right: Visual */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center pb-6 border-b border-border">
                    <div className="text-sm font-medium text-muted-foreground mb-2">
                      Simple System
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs text-center text-muted-foreground">
                    <div>Search / Social / Maps</div>
                    <div>Landing / Call Tracking</div>
                    <div>Jobs / Patients / Guests</div>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        Darwin, Palmerston & Top End
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Help - Three Niches */}
        <section id="niches" className="py-20 px-4 bg-muted">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for three types of Darwin businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We focus on trades, healthcare and tourism/hospitality so we can
                design offers, tracking and campaigns that match your economics
                – not a generic template.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Trades Card */}
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
                  Client cap per area
                </div>
                <h3 className="text-2xl font-bold mb-4">Trades</h3>
                <p className="text-muted-foreground mb-4">
                  For Darwin tradies who want steady, good-margin jobs instead
                  of feast-or-famine weeks.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>Owner-operators and small teams</li>
                  <li>Plumbing, electrical, building, HVAC, pest</li>
                  <li>Systems matched to call-out fees and travel radius</li>
                </ul>
                <Link
                  href="/services/trades"
                  className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Trades Program <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Healthcare Card */}
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
                  Performance-focused
                </div>
                <h3 className="text-2xl font-bold mb-4">Healthcare</h3>
                <p className="text-muted-foreground mb-4">
                  For private clinics that want more booked patients, not just
                  more website visits.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>Physio, dental, podiatry, chiro, allied health</li>
                  <li>Focus on booked sessions and utilisation</li>
                  <li>Suitable case types, not just 'leads'</li>
                </ul>
                <Link
                  href="/services/healthcare"
                  className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Healthcare Program <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Tourism Card */}
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Ship className="w-6 h-6 text-primary" />
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
                  Client cap per area
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Tourism & Hospitality
                </h3>
                <p className="text-muted-foreground mb-4">
                  For tours, attractions and venues needing more direct bookings
                  and seat utilisation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>Operators with wet/dry season swings</li>
                  <li>Programs around load factor and seasonality</li>
                  <li>Less reliant on OTAs and last-minute discounts</li>
                </ul>
                <Link
                  href="/services/tourism"
                  className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Tourism Program <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                We cap clients by niche and area to avoid conflicts – we do not
                run the same offer for you and your closest competitor.
              </p>
              <Link
                href="/contact"
                className="text-primary font-semibold inline-flex items-center gap-2"
              >
                Not sure where you fit? Book a Growth Diagnostic →
              </Link>
            </div>
          </div>
        </section>

        {/* Core Promise & Positioning */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our promise: campaigns built around your numbers, not our
                retainers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We design, track and optimise campaigns around leads, jobs,
                patients, bookings and margins – and we're prepared to put our
                fees and guarantees behind that.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden max-w-4xl mx-auto mb-12">
              <div className="grid md:grid-cols-2 divide-x divide-border">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-muted-foreground">
                      Typical Agency
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Focus</div>
                        <div className="text-sm text-muted-foreground">
                          Clicks & impressions
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Contracts</div>
                        <div className="text-sm text-muted-foreground">
                          6–12 month retainers
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Reporting</div>
                        <div className="text-sm text-muted-foreground">
                          Generic screenshots
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Geography</div>
                        <div className="text-sm text-muted-foreground">
                          Anywhere
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-primary/5">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-primary">
                      Donaldson Marketing
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium mb-1">Focus</div>
                        <div className="text-sm text-muted-foreground">
                          Jobs, patients, bookings
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium mb-1">Contracts</div>
                        <div className="text-sm text-muted-foreground">
                          Pilots + month-to-month
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium mb-1">Reporting</div>
                        <div className="text-sm text-muted-foreground">
                          Plain-English job/patient/booking reports
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium mb-1">Geography</div>
                        <div className="text-sm text-muted-foreground">
                          Darwin & Top End only
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Short-term pilots</div>
                    <div className="text-sm text-muted-foreground">
                      60–90 days before month-to-month
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Clear tracking</div>
                    <div className="text-sm text-muted-foreground">
                      Agreed definitions upfront
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Fewer clients</div>
                    <div className="text-sm text-muted-foreground">
                      Capped per niche and area
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Our System Works */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A simple, five-step system – tailored to trades, clinics and
                tours
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow the same core process for every Darwin client, then
                customise the offer, tracking and campaigns to your niche and
                economics.
              </p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="flex gap-6 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Diagnostic & Capacity Check
                  </h3>
                  <p className="text-muted-foreground">
                    Review your current demand, calendar, margins and capacity.
                    Decide whether you need more leads, better quality, or a
                    different booking mix.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Offer & Funnel Design
                  </h3>
                  <p className="text-muted-foreground">
                    Design your niche-specific program based on your numbers.
                    Map the funnel: ads/search → landing/calls → booking and
                    follow-up.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Tracking & Campaign Setup
                  </h3>
                  <p className="text-muted-foreground">
                    Fix tracking basics: phone tracking, form tracking, booking
                    events. Set up campaigns in the right channels for your
                    niche.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Pilot Launch (60–90 Days)
                  </h3>
                  <p className="text-muted-foreground">
                    Launch the performance program with clear targets and agreed
                    definitions. Weekly/fortnightly check-ins to review and
                    adjust.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Scale or Stabilise
                  </h3>
                  <p className="text-muted-foreground">
                    If numbers support it, scale spend and channels. If close to
                    capacity, stabilise and focus on quality and margin.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold"
              >
                Book a Growth Diagnostic (Step 0) →
              </Link>
            </div>
          </div>
        </section>

        {/* Guarantees & Risk Reversal */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Skin in the game: how our guarantees work
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We can't promise the impossible, but we can promise clear
                definitions, stop-loss rules and programs where we only keep
                going if the numbers make sense.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card border border-border rounded-xl p-8">
                <Wrench className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Trades</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold mb-1">Focus metric</div>
                    <div className="text-muted-foreground">
                      Qualified job enquiries
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Pilot period</div>
                    <div className="text-muted-foreground">60 days</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Guarantee</div>
                    <div className="text-muted-foreground">
                      Targets around job value and call-out fees
                    </div>
                  </div>
                </div>
                <Link
                  href="/services/trades#guarantees"
                  className="text-primary font-semibold text-sm inline-flex items-center gap-1 mt-4"
                >
                  See details →
                </Link>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <Activity className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Healthcare</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold mb-1">Focus metric</div>
                    <div className="text-muted-foreground">
                      Booked private patients
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Pilot period</div>
                    <div className="text-muted-foreground">90 days</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Guarantee</div>
                    <div className="text-muted-foreground">
                      New patients within agreed criteria
                    </div>
                  </div>
                </div>
                <Link
                  href="/services/healthcare#guarantees"
                  className="text-primary font-semibold text-sm inline-flex items-center gap-1 mt-4"
                >
                  See details →
                </Link>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <Ship className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Tourism</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold mb-1">Focus metric</div>
                    <div className="text-muted-foreground">Direct bookings</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Pilot period</div>
                    <div className="text-muted-foreground">90 days</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Guarantee</div>
                    <div className="text-muted-foreground">
                      Booking mix and load factor targets
                    </div>
                  </div>
                </div>
                <Link
                  href="/services/tourism#guarantees"
                  className="text-primary font-semibold text-sm inline-flex items-center gap-1 mt-4"
                >
                  See details →
                </Link>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">
                      Work-for-free clauses
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Extended support where thresholds not met
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">
                      Month-to-month after pilot
                    </div>
                    <div className="text-sm text-muted-foreground">
                      No long retainers; continue only if profitable
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Stop-loss rules</div>
                    <div className="text-sm text-muted-foreground">
                      If economics don't work, we don't push to continue
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">
                      Plain-English definitions
                    </div>
                    <div className="text-sm text-muted-foreground">
                      You know exactly what we mean before we start
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work with a New Agency */}
        <section className="py-20 px-4 bg-card">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  New, local and heavily invested in your results
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  We don't have a wall of logos yet. That's exactly why we cap
                  clients, put more time into each account, and build programs
                  we're willing to stand behind.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">
                        Fewer clients, more attention
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Small number per niche and area; you're not one of 80
                        accounts
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Direct access</div>
                      <div className="text-sm text-muted-foreground">
                        You speak with the person running your campaigns
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">
                        Dependent on results
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Our growth relies on word-of-mouth, not volume
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">Local presence</div>
                      <div className="text-sm text-muted-foreground">
                        Based in the Top End; understand seasonal realities
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1">
                        Honesty over hype
                      </div>
                      <div className="text-sm text-muted-foreground">
                        We'll tell you if a program isn't suitable
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-3">
                      Our principles
                    </div>
                    <div className="space-y-2">
                      {[
                        "Fewer clients",
                        "Plain-English reporting",
                        "No long retainers",
                        "Direct founder access",
                        "Transparent tracking",
                      ].map((principle) => (
                        <div
                          key={principle}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span>{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <div className="text-sm text-muted-foreground">
                      <strong>Based in Darwin, NT</strong>
                      <br />
                      Working exclusively with Top End service businesses
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Focus */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Designed for Darwin, Palmerston and the Top End
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We factor in wet/dry seasons, travel times, postcode economics
                and local search behaviour when designing your program.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-8">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Seasonal campaign timing
                </h3>
                <p className="text-muted-foreground">
                  Busy vs quiet periods for trades, clinics and tourism
                  operators factored into every strategy.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Geo-targeting</h3>
                <p className="text-muted-foreground">
                  Offers shaped around Darwin, Palmerston and key surrounding
                  areas.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Capacity-aware scaling
                </h3>
                <p className="text-muted-foreground">
                  No point doubling leads if calendars are already full during
                  certain weeks.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8">
                <BarChart3 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Local messaging</h3>
                <p className="text-muted-foreground">
                  Tuned to local language and expectations, not generic big-city
                  templates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Primary CTA - Growth Diagnostic */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/20 to-primary/10">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Book a Growth Diagnostic for your Darwin business
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A practical 30–45 minute session to review your current demand,
                capacity and margins – and see whether a performance program
                makes sense for you.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 mb-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">What we cover:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Quick review of current leads, jobs, patients or
                        bookings
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Capacity and calendar analysis
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Rough economics: job/patient/booking value and margins
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Whether a performance program is appropriate right now
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">
                    What you walk away with:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Simple one-page summary of recommendations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Clearer view of which levers matter most
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Option to explore a pilot – or action yourself
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  Book Your Growth Diagnostic
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll review your answers and confirm a time within one
                  business day. If we don't think we can help, we'll tell you
                  that too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-muted">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Questions Darwin businesses often ask us
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "You're new – why should I trust you?",
                  a: "We emphasise capped clients, skin-in-the-game guarantees, pilots, direct founder access, and the fact that we rely on results and word-of-mouth. No junior account managers, no large portfolios – just focused attention on making your program work.",
                },
                {
                  q: "Do you really understand trades, healthcare and tourism – they're very different?",
                  a: "Yes – we have three separate programs and niche pages. The shared process is adapted with niche-specific offers, metrics and guarantees. Your strategy is built around each niche's economics, not lumped together.",
                },
                {
                  q: "What happens if this doesn't work?",
                  a: "We have pilot structures, clear performance expectations, stop-loss rules, and guarantees where applicable. Both sides can walk away after the pilot if the economics don't support scaling.",
                },
                {
                  q: "Are we locked into a long contract?",
                  a: "No. We start with a pilot (60–90 days), then move to month-to-month. No long retainers. Both sides reassess regularly.",
                },
                {
                  q: "We're already busy – do we even need more marketing?",
                  a: "Sometimes the focus should be on better-quality jobs/patients/bookings, pricing, or smoothing demand between peaks and troughs rather than just more volume. Sometimes the advice is 'don't scale yet'.",
                },
                {
                  q: "Can you work with businesses outside Darwin?",
                  a: "Our primary focus is Darwin, Palmerston and the Top End. In some cases, we may help nearby regions, but we do not run a high-volume, nationwide service.",
                },
                {
                  q: "How do you charge?",
                  a: "Program-based pricing with pilot costs and performance-linked structures. No hidden fees. More detail is on each niche page.",
                },
                {
                  q: "What do you need from us to get results?",
                  a: "Clear communication, fast response to leads and enquiries, capacity transparency, and willingness to adjust offers and operations where needed.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-8"
                >
                  <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 p-6 bg-primary/10 rounded-xl">
              <p className="text-muted-foreground mb-4">
                Still unsure? Use the diagnostic call to ask anything you like
                about our approach.
              </p>
              <Link
                href="/contact"
                className="text-primary font-semibold inline-flex items-center gap-2"
              >
                Book a Growth Diagnostic →
              </Link>
            </div>
          </div>
        </section>

        {/* Final Reassurance Strip */}
        <section className="py-16 px-4 bg-card border-t border-border">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              For Darwin tradies, clinics and tours who want practical,
              performance-based marketing
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              If you want a practical, numbers-based conversation about
              increasing jobs, patients or bookings in the Top End – without
              committing to a long contract – the first step is a short
              diagnostic call.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Local to Darwin & the Top End</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Performance-focused programs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Pilots, then month-to-month</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Capped clients per niche and area</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                Book Your Growth Diagnostic
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex gap-4 justify-center text-sm">
                <Link
                  href="/services/trades"
                  className="text-primary font-semibold hover:underline"
                >
                  Trades
                </Link>
                <Link
                  href="/services/healthcare"
                  className="text-primary font-semibold hover:underline"
                >
                  Healthcare
                </Link>
                <Link
                  href="/services/tourism"
                  className="text-primary font-semibold hover:underline"
                >
                  Tourism
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">Donaldson Marketing</div>
              <p className="text-sm text-muted-foreground mb-2">
                Performance marketing for Darwin service businesses
              </p>
              <p className="text-sm text-muted-foreground">
                Based in Darwin, NT
              </p>
            </div>
            <div>
              <div className="font-semibold mb-3">Programs</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/services/trades"
                    className="hover:text-foreground"
                  >
                    Trades
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/healthcare"
                    className="hover:text-foreground"
                  >
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/tourism"
                    className="hover:text-foreground"
                  >
                    Tourism & Hospitality
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Company</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#about" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#niches" className="hover:text-foreground">
                    Who We Help
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Get Started</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Book Diagnostic
                  </Link>
                </li>
                <li>
                  <a href="tel:+61" className="hover:text-foreground">
                    Call Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Donaldson Marketing. All rights reserved. • Based in Darwin,
            NT
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-40 flex gap-3">
        <a
          href="tel:+61"
          className="flex-1 bg-muted text-foreground px-6 py-3 rounded-full font-semibold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>
        <Link
          href="/contact"
          className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-center hover:opacity-90 transition-opacity"
        >
          Book Diagnostic
        </Link>
      </div>
    </div>
  );
}

function Users({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
