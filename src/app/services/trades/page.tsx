import { Navbar } from "@/components/navbar";
import { AnimatedCTAButton } from "@/components/animated-cta-button";
import {
  CheckCircle2,
  Calendar,
  Phone,
  Target,
  TrendingUp,
  Shield,
  Clock,
  MapPin,
  Wrench,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function TradesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        {/* Hero Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <div className="inline-block px-4 py-1.5 bg-muted rounded-full text-sm font-medium mb-6">
            🔧 Darwin's Performance Partner for Local Tradies
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            More high-value tradie jobs in Darwin – without gambling on another
            agency retainer.
          </h1>

          <p className="text-2xl text-muted-foreground mb-4 max-w-4xl">
            We turn "tradie near me" searches into booked jobs and repeat
            customers in the suburbs you actually want to drive to.
          </p>

          <p className="text-xl text-muted-foreground mb-8 max-w-4xl">
            Local, performance-focused marketing for plumbers, sparkies,
            builders, HVAC, pest and more across Darwin, Palmerston and
            surrounds.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-4xl">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Steady, predictable job requests instead of "feast or famine"
                weeks.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Focus on the suburbs and job types that actually make you money.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Small, local agency – we tie most of our fees to performance,
                not fluff and screenshots.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                No long contracts; short pilot, then month-to-month.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <AnimatedCTAButton href="/contact" variant="primary">
              Book a 15-Min Local Tradie Lead Plan Call
            </AnimatedCTAButton>
            <AnimatedCTAButton href="#how-it-works" variant="secondary">
              See How the Top End Tradie Leadflow Program Works
            </AnimatedCTAButton>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-5xl font-bold">
                Built for owner-operator tradies and small teams in Darwin &
                Palmerston.
              </h2>
            </div>

            <p className="text-xl text-muted-foreground mb-8">
              If you're on the tools all day and doing quotes at night, this
              page is for you.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Owner-operators or small teams (1–10 staff) across plumbing,
                    electrical, building, HVAC, pest, and similar trades.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    You're often under a house or in a roof when calls come in –
                    you can't always answer, and you lose jobs.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    You've tried "boosting posts" or an agency that talked
                    fancy, sent reports, then disappeared.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Your calendar swings between flat-out and worryingly quiet.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    You have decent margins and can handle more good jobs
                    without burning out.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    You're willing to respond quickly to leads if someone else
                    keeps them coming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain & Current Reality Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Feast-or-famine work, missed calls, and money leaking from
            "invisible" marketing.
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            If this sounds like your week, you're not alone.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <AlertCircle className="w-8 h-8 text-orange-500 mb-4" />
              <p className="text-muted-foreground">
                One month you're booked solid; the next you're wondering where
                the next job will come from.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Clock className="w-8 h-8 text-orange-500 mb-4" />
              <p className="text-muted-foreground">
                Last-minute jobs and after-hours callouts, but no predictable
                schedule you can plan around.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <TrendingUp className="w-8 h-8 text-orange-500 mb-4" />
              <p className="text-muted-foreground">
                Marketing spend goes out – but you can't tell what actually
                brings in jobs.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Phone className="w-8 h-8 text-orange-500 mb-4" />
              <p className="text-muted-foreground">
                You miss calls while driving or on site; some never call back,
                and those jobs are simply lost.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Shield className="w-8 h-8 text-orange-500 mb-4" />
              <p className="text-muted-foreground">
                Agencies have burned you: nice decks, confusing jargon, and
                then… nothing you can see in your calendar.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Target className="w-8 h-8 text-orange-500 mb-4" />
              <p className="text-muted-foreground">
                You're tired of tyre-kickers and price shoppers; you want more
                people ready to accept a reasonable quote.
              </p>
            </div>
          </div>
        </section>

        {/* Desired Outcomes Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
            <Calendar className="w-12 h-12 text-primary mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              A calendar full of the right jobs, booked weeks ahead – not just
              tomorrow.
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              This isn't about more noise. It's about more profitable jobs on
              the days you want them.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  Steady, predictable job requests from the right suburbs, not
                  random calls 50 km away.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  Ability to choose more of the higher-margin work: installs,
                  renos, bigger jobs.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  Calendar booked 1–4 weeks ahead so you can roster staff and
                  plan cashflow.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  Fewer tyre-kickers; more people ready to book or accept a
                  quote at your normal pricing.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  Clear numbers: "For every $1 we put into marketing, we aim to
                  get $X back."
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-foreground">
                  Less mental load worrying about next month's work.
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
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The Top End Tradie Leadflow Program
            </h2>
            <p className="text-2xl mb-6 opacity-90">
              20 qualified job requests in 60 days, or we work for free until we
              hit it.
            </p>
            <p className="text-xl opacity-80">
              A simple, done-for-you lead system built for Darwin tradies.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                What we actually do (plain English):
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-6">
                  <div className="bg-primary/10 rounded-full p-2">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Build a simple "Get a Quote / Book a Job" page
                    </h4>
                    <p className="text-muted-foreground">
                      Tuned for your services and local Darwin customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-6">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Set up call tracking and automated text-back
                    </h4>
                    <p className="text-muted-foreground">
                      "Missed call → automatic text back" system so you never
                      lose a lead.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-6">
                  <div className="bg-primary/10 rounded-full p-2">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Run local Google Search campaigns + retargeting
                    </h4>
                    <p className="text-muted-foreground">
                      Focused on your chosen suburbs across Darwin and
                      Palmerston.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-6">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Implement a basic lead follow-up workflow
                    </h4>
                    <p className="text-muted-foreground">
                      Scripts + simple pipeline board to track jobs from enquiry
                      to booking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-6">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Weekly 15–20 minute calls
                    </h4>
                    <p className="text-muted-foreground">
                      Review lead quality and adjust campaigns based on what's
                      working.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-primary/30 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">
                Definition of a qualified job request:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Within your service area
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Relevant job type</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Contactable customer</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    Not obviously outside your normal price range
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-xl p-8">
              <Shield className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Guarantee</h3>
              <p className="text-lg">
                20 qualified job requests in 60 days or we work for free until
                we hit it (within agreed caps).
              </p>
            </div>
          </div>
        </section>

        {/* How It Works - Process Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How we turn "tradie near me" searches into booked jobs.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Five simple steps, no jargon.
          </p>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Local Lead & Bookings Diagnostic
                </h3>
                <p className="text-muted-foreground">
                  Quick call to understand your services, prices, margins,
                  capacity and current lead flow.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Campaign Reset & Tracking Fix
                </h3>
                <p className="text-muted-foreground">
                  One-off build or rebuild of your core campaign, tracking, and
                  quote/booking page.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Launch the Top End Tradie Leadflow Program
                </h3>
                <p className="text-muted-foreground">
                  Switch on ads, tracking, missed-call text-back and review
                  system.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Weekly Check-ins & Tweaks
                </h3>
                <p className="text-muted-foreground">
                  15–20 minutes per week to review call recordings, job value,
                  and tune campaigns.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Scale or Slow as Needed
                </h3>
                <p className="text-muted-foreground mb-4">
                  When the calendar is comfortably full, you can cap leads or
                  focus on higher-margin jobs.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Note: You keep all assets (landing pages, scripts, tracking)
                  even if you pause.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees & Risk Reversal Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            We put our skin in the game so you're not gambling on another
            retainer.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Strong guarantees, clear definitions, no 12-month contracts.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <Shield className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">
                20 Qualified Job Requests in 60 Days or We Work for Free
              </h3>
              <p className="text-muted-foreground">
                If we miss agreed lead numbers in a month and you've given us
                the agreed ad budget and access, the next month's management fee
                is waived.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <Calendar className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">
                Month-to-Month After 90 Days
              </h3>
              <p className="text-muted-foreground">
                No long lock-ins. After the first 90 days, continue
                month-to-month or pause anytime.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <CheckCircle2 className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">
                Clear Written Definitions
              </h3>
              <p className="text-muted-foreground">
                Strict written definition of a qualified lead to avoid arguments
                and keep everyone aligned.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <TrendingUp className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Full Transparency</h3>
              <p className="text-muted-foreground">
                You see the same dashboards and call logs we do – no black box,
                no hiding behind jargon.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-6 mt-6">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Caps on free work (e.g. up to 1–2 months of
              "work for free") are agreed upfront to keep promises realistic and
              sustainable.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pricing that makes sense for a Darwin tradie – tied to booked jobs,
            not clicks.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            We design every deal around your average job value and margins.
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6">
              Typical structure for new tradie partners:
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p>
                  One-off setup for landing page, tracking, review system.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p>Modest monthly management fee.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p>
                  Plus a per-lead performance component above an agreed
                  threshold.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p>
                  <strong>Alternative:</strong> pure performance model for early
                  pilot partners (higher per-job fee, no retainer).
                </p>
              </div>
            </div>

            <div className="bg-background/50 rounded-xl p-6">
              <h4 className="font-bold mb-4">We insist on deals where:</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-green-500/20 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-sm">
                    Your cost to acquire a customer stays well below your
                    lifetime gross profit.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-500/20 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-sm">
                    Payback usually happens within the first 1–2 jobs.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-500/20 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-sm">
                    Exact numbers are customised after we know your pricing,
                    margins and capacity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Straight answers to questions Darwin tradies actually ask.
          </h2>

          <div className="space-y-6 mt-12">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                You're new – why should I trust you?
              </h3>
              <p className="text-muted-foreground">
                We rely on short pilots, performance-linked fees, and guarantees
                instead of long contracts or vague promises. Because we're
                building our reputation, we can't afford to hide behind retainers
                – we have to deliver results you can see in your calendar.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                We tried ads; they don't work for Darwin.
              </h3>
              <p className="text-muted-foreground">
                Generic campaigns fail when they ignore local realities. We only
                work with Darwin/NT tradies and build around your specific
                suburbs, services and margins. The campaigns are tuned for "Rapid
                Creek plumber" not "Australian plumbing services."
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                We're already busy enough; I don't want to burn out my team.
              </h3>
              <p className="text-muted-foreground">
                We agree capacity upfront and can focus campaigns on
                higher-margin jobs or specific days. Leads can be dialled up or
                down as your calendar fills. This is about predictable work, not
                overwhelming you.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                What if the leads are junk?
              </h3>
              <p className="text-muted-foreground">
                We define "qualified" in writing, listen to call recordings
                together, and adjust targeting. You don't pay performance fees on
                calls that clearly don't fit the rules. If lead quality drops, we
                fix it or you don't pay.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                What happens if it doesn't work?
              </h3>
              <p className="text-muted-foreground">
                If we don't hit agreed lead numbers and we've had the budget and
                access we need, we work for free for a capped period or part
                ways. You keep all assets – landing pages, tracking systems,
                scripts – regardless.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              A small Darwin agency that only makes money if your phone rings.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're not a big city agency dabbling in Darwin. This is home.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Based in Darwin, focused exclusively on NT tradies, clinics and
                  tour operators.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  We deliberately keep a small client list and cap one tradie per
                  main trade per area.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Because we're new, we live and die by word-of-mouth – we can't
                  afford to hide behind retainers.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  You deal directly with the person running your campaigns, not
                  rotating account managers.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Our promises are tied to measurable leads and jobs, not vanity
                  metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start with a free Local Tradie Lead & Bookings Diagnostic.
            </h2>
            <p className="text-xl mb-4 opacity-90">
              No pressure, no jargon – just a clear picture of where jobs are
              leaking.
            </p>

            <div className="max-w-2xl mx-auto mb-10">
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p>
                    30-minute Zoom or in-person review of your website, Google
                    presence, and current lead flow.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p>
                    Simple one-page summary of missed opportunities and quick
                    wins.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p>
                    You can implement it yourself, hand it to your current
                    agency, or ask us to run the Top End Tradie Leadflow Program
                    on performance-linked terms.
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
