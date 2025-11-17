import {
  AlertCircle,
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
  Users,
} from "lucide-react";
import Link from "next/link";
import { AnimatedCTAButton } from "@/components/animated-cta-button";
import { Navbar } from "@/components/navbar";

export default function TourismPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-32 px-4">
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl mb-24">
          <div className="inline-block px-5 py-2 bg-muted rounded-full text-sm font-medium mb-8">
            🚢 Direct Bookings for Darwin Tours & Experiences
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            More direct bookings for your Darwin tours and experiences – without
            upsetting your existing partners.
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground mb-6 max-w-5xl font-light">
            We help harbour cruises, Litchfield/Kakadu tours, wildlife parks and
            experiences in the Top End fill more seats direct – in Dry and Wet
            season.
          </p>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-5xl font-light">
            Performance-linked campaigns designed around your load factor,
            margins and seasons.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-16 max-w-5xl">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-muted-foreground">
                Focus on increasing direct website and phone bookings, not just
                "traffic."
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-muted-foreground">
                Strategies for smoothing shoulder and Wet seasons with locals
                and last-minute demand.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-muted-foreground">
                We work alongside your existing OTA and wholesaler
                relationships, not against them.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-muted-foreground">
                Short pilot, clear targets, no long contracts.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <AnimatedCTAButton href="/contact" variant="primary">
              Book a Direct Bookings & Load Factor Diagnostic
            </AnimatedCTAButton>
            <AnimatedCTAButton href="#how-it-works" variant="secondary">
              See How the Darwin Direct Bookings Accelerator Works
            </AnimatedCTAButton>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="container mx-auto max-w-7xl mb-32">
          <div className="bg-card/50 border border-border/50 rounded-3xl p-12 md:p-20 lg:p-28 backdrop-blur-sm">
            <div className="mb-16">
              <Ship className="w-14 h-14 text-primary mb-8" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15]">
                For Darwin tour and experience operators who want fuller tours
                and stronger margins.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                If your product is strong but bookings are lumpy, this is for
                you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Owners/managers of harbour cruises, day tours, wildlife
                    experiences, attractions and boutique hospitality.
                  </p>
                </div>
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Strong product and guest feedback but uneven demand across
                    the year.
                  </p>
                </div>
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    High reliance on OTAs, referral desks and big partners,
                    sacrificing margins on commissions.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Fixed costs (boats, buses, staff) are largely set; each
                    additional seat sold direct is high-margin.
                  </p>
                </div>
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Desire to build a more predictable base of direct bookings
                    for each departure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain & Current Reality Section */}
        <section className="container mx-auto max-w-7xl mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15]">
            Dry season rush, Wet season worry, and commissions eating your
            margin.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 font-light leading-relaxed">
            You know your experience is good – it's the demand pattern that
            hurts.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300">
              <Calendar className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Strong demand in Dry season, painful dips in shoulder and Wet
                seasons.
              </p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Heavy dependence on OTAs and wholesalers, giving away margin on
                each booking.
              </p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300">
              <Users className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Difficulty keeping tours at a profitable load factor – too many
                half-empty departures.
              </p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300">
              <AlertCircle className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Bookings feel lumpy and hard to forecast; marketing feels like
                guesswork.
              </p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300">
              <Shield className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Website and booking engine underused; most customers book
                through third parties.
              </p>
            </div>
          </div>
        </section>

        {/* Desired Outcomes Section */}
        <section className="container mx-auto max-w-7xl mb-32">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-12 md:p-20 lg:p-28">
            <Ship className="w-14 h-14 text-primary mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15]">
              Higher direct bookings, steadier shoulder seasons, and better
              revenue per seat.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 font-light leading-relaxed">
              Fuller boats, buses and venues – with more of the revenue staying
              with you.
            </p>

            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8">
              <div className="flex items-start gap-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  More direct bookings coming through your own site and phone.
                </p>
              </div>
              <div className="flex items-start gap-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  Better utilisation in shoulder and Wet seasons, especially
                  from local campaigns.
                </p>
              </div>
              <div className="flex items-start gap-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  Higher average spend per guest via simple upsells and
                  packages.
                </p>
              </div>
              <div className="flex items-start gap-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  Improved predictability: clearer expectations on seats filled
                  next month.
                </p>
              </div>
              <div className="flex items-start gap-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  Healthier mix between OTAs and direct, with less margin
                  leakage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grand Slam Offer Section */}
        <section
          id="how-it-works"
          className="container mx-auto max-w-6xl mb-24"
        >
          <div className="bg-primary text-primary-foreground rounded-2xl p-10 md:p-16 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Darwin Direct Bookings Accelerator – 30% More Direct Bookings in
              90 Days
            </h2>
            <p className="text-2xl mb-6 opacity-90">
              Or we work for free until we do.
            </p>
            <p className="text-xl opacity-80">
              A bookings-linked growth program for Top End tours and
              experiences.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">What we deliver:</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-8">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Direct-booking landing pages
                    </h4>
                    <p className="text-muted-foreground">
                      Built for your main tours and experiences with clear
                      booking paths.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-8">
                  <div className="bg-primary/10 rounded-full p-2">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Tracking per booking, seat and revenue
                    </h4>
                    <p className="text-muted-foreground">
                      Clear visibility on impact with tour-level attribution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-8">
                  <div className="bg-primary/10 rounded-full p-2">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Search and social campaigns
                    </h4>
                    <p className="text-muted-foreground">
                      Targeting both tourists (planning ahead) and locals
                      (last-minute/Wet season).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-8">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      OTA-complementary strategy
                    </h4>
                    <p className="text-muted-foreground">
                      Shifting a higher percentage of total sales direct, not
                      trying to switch off partners.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-8">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Email/SMS follow-up system
                    </h4>
                    <p className="text-muted-foreground">
                      For leads that don't immediately book, keeping them warm.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 border border-border rounded-xl p-8">
              <h4 className="font-semibold mb-3">
                Clear measurement: "Direct Booking"
              </h4>
              <p className="text-muted-foreground">
                At least 30% more direct website/phone bookings in 90 days,
                measured against a clear baseline. Baseline and attribution
                rules clearly agreed upfront to keep metrics fair.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How we increase your direct bookings without disrupting your season.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            A simple five-step framework built for Darwin operators.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Direct Bookings & Load Factor Diagnostic
                </h3>
                <p className="text-muted-foreground">
                  Review current booking mix (OTAs vs direct), load factors and
                  pricing.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Booking Funnel & Tracking Fix
                </h3>
                <p className="text-muted-foreground">
                  Optimise your website paths and booking engine; implement
                  tracking per tour and per seat.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Launch Darwin Direct Bookings Accelerator
                </h3>
                <p className="text-muted-foreground">
                  Go live with campaigns for key tours and seasons; coordinate
                  messaging with existing channels.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Weekly Performance Check-ins
                </h3>
                <p className="text-muted-foreground">
                  Review bookings, load factors and revenue, and adjust
                  bids/creative accordingly.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Scale Winning Departures and Seasons
                </h3>
                <p className="text-muted-foreground">
                  Increase spend where direct bookings are most profitable;
                  design Wet season campaigns for locals and bundled offers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Bookings-linked guarantees, not vague promises.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            We define the baseline, targets and caps together – in writing.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <Shield className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">
                30% More Direct Bookings in 90 Days
              </h3>
              <p className="text-muted-foreground">
                Or we work for free until we hit it (within agreed caps).
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <Clock className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">
                Short Initial Term, Rolling Contract
              </h3>
              <p className="text-muted-foreground">
                90 days trial, then rolling 30-day contract. No long lock-ins.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <TrendingUp className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Limited Free-Work Cap</h3>
              <p className="text-muted-foreground">
                You are never locked into paying indefinitely for
                underperformance.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <BarChart3 className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">
                Clear Attribution Rules
              </h3>
              <p className="text-muted-foreground">
                Direct booking increases are fairly counted with transparent
                tracking.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-6 mt-6">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Option B available for suitable pilots: "At
              least X additional direct bookings or we refund our fee."
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Aligned with your seat economics, not agency billable hours.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            We succeed when more guests book direct at a healthy margin.
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-10 md:p-16">
            <h3 className="text-2xl font-bold mb-6">
              Typical configuration for tour operators:
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p>Low base retainer to cover core work and reporting.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p>
                  Per-booking performance fee for incremental direct bookings
                  above baseline.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p>
                  <strong>Alternative:</strong> Low base + percentage of direct
                  booking revenue from campaign-sourced bookings for operators
                  with robust tracking.
                </p>
              </div>
            </div>

            <div className="bg-background/50 rounded-xl p-6">
              <h4 className="font-bold mb-4">We design deals where:</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-green-500/20 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-sm">
                    Cost per incremental direct booking sits comfortably below
                    your gross profit per booking.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-500/20 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-sm">
                    No long-term lock-ins; we expand only when the maths and
                    operations support it.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-500/20 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-sm">
                    Investment makes sense for your seasonal patterns and load
                    factor targets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Questions Darwin operators usually ask us.
          </h2>

          <div className="space-y-6 mt-12">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                We already work with wholesalers; will this upset them?
              </h3>
              <p className="text-muted-foreground">
                Our goal is to lift the direct share of total bookings, not
                replace your partners. We design campaigns to complement your
                existing channels, not compete with contracted arrangements.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                Our market is tourists, not locals – can you actually reach
                them?
              </h3>
              <p className="text-muted-foreground">
                We target both: trip-planning tourists (through search and
                planning-phase campaigns) and locals for last-minute and Wet
                season offers.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                Isn't this risky in peak season?
              </h3>
              <p className="text-muted-foreground">
                We start with a controlled pilot and clear baselines. If it
                underperforms, our guarantees and free-work caps protect you;
                you also keep the assets and data.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                How do we know which bookings came from you?
              </h3>
              <p className="text-muted-foreground">
                We implement tracking at tour and channel level and agree
                attribution rules in advance – then review them together in
                weekly or fortnightly check-ins.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <div className="bg-card border border-border rounded-2xl p-10 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              A Darwin-based partner focused on full seats, not flashy
              campaigns.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We grow by proving we can fill tours and experiences, not by
              winning awards.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Based in Darwin, working only with Top End operators rather
                  than hundreds of destinations.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  We cap non-competing operators per category (harbour,
                  Litchfield, wildlife, etc.) to avoid conflicts.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  As a small, new agency, each operator's results matter deeply
                  to us.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Our value is in clear thinking, tracking, and
                  performance-linked deals – not large retainers and vague
                  "brand awareness."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Book a Direct Bookings & Load Factor Diagnostic.
            </h2>
            <p className="text-xl mb-4 opacity-90">
              A 30-minute review of your channel mix, load factors and direct
              booking potential.
            </p>

            <div className="max-w-2xl mx-auto mb-10">
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p>
                    We review your booking history, direct vs OTA split, and key
                    departure patterns.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p>
                    You receive a short summary of where direct bookings could
                    be increased and how.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p>
                    We'll show you whether the Darwin Direct Bookings
                    Accelerator is likely to pay for itself – and if not, we'll
                    say so.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center"
              >
                Book Your Free Diagnostic Call
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
