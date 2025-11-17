import {
  Activity,
  AlertCircle,
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Phone,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { AnimatedCTAButton } from "@/components/animated-cta-button";
import { Navbar } from "@/components/navbar";

export default function HealthcarePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-32 px-4">
        {/* Hero Section */}
        <section className="container mx-auto max-w-7xl mb-24">
          <div className="inline-block px-5 py-2 bg-muted rounded-full text-sm font-medium mb-8">
            🏥 Compliant Patient Growth for Darwin Clinics
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            More private patients for your Darwin clinic – in the appointment
            times you choose.
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground mb-6 max-w-5xl font-light">
            We build compliant patient-booking systems for physios, dentists,
            podiatrists, allied health and small clinics in Darwin and the NT.
          </p>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-5xl font-light">
            Performance-focused, reputation-safe marketing that ties our fees to
            new patients, not clicks.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-16 max-w-5xl">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-muted-foreground">
                Designed for clinics that want consistently full books without
                compromising standards.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-muted-foreground">
                Focus on private pay / insured patients and completion of
                treatment plans.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-muted-foreground">
                No long-term contracts; we start with a short, clearly defined
                pilot.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-muted-foreground">
                Strict compliance with health advertising rules; reputation
                protection is a core deliverable.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <AnimatedCTAButton href="/contact" variant="primary">
              Book a 20-Minute Clinic Patient Pipeline Diagnostic
            </AnimatedCTAButton>
            <AnimatedCTAButton href="#how-it-works" variant="secondary">
              See How the Darwin Patient Pipeline Program Works
            </AnimatedCTAButton>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="container mx-auto max-w-7xl mb-32">
          <div className="bg-card/50 border border-border/50 rounded-3xl p-12 md:p-20 lg:p-28 backdrop-blur-sm">
            <div className="mb-16">
              <Activity className="w-14 h-14 text-primary mb-8" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15]">
                For growth-minded clinics balancing patient care and practice
                economics.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                If you're juggling patients, staff, referrers and an incomplete
                appointment book, this is for you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Clinic owners (often still treating) with 1–3 rooms and a
                    small admin team.
                  </p>
                </div>
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Physio, dental, chiro, podiatry, allied health and small
                    multidisciplinary clinics in Darwin and surrounds.
                  </p>
                </div>
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Have early morning or mid-day gaps, or an associate sitting
                    on 50–60% utilisation.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Rely heavily on GP referrals or word of mouth and want more
                    control.
                  </p>
                </div>
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Care deeply about professional reputation and are wary of
                    anything that feels "spammy" or non-compliant.
                  </p>
                </div>
                <div className="flex items-start gap-6">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Have capacity to take on more new patients and complete more
                    treatment plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain & Current Reality Section */}
        <section className="container mx-auto max-w-7xl mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15]">
            Gappy books, fragile referral pipelines, and rising costs.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 font-light leading-relaxed">
            You're not short on clinical skill – you're short on predictable,
            quality demand.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300">
              <Clock className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Early mornings and mid-day periods where rooms sit empty.
              </p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300">
              <Users className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Heavy dependence on a small number of referrers; losing one hits
                the practice hard.
              </p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Rising rent, wages and equipment costs make partial utilisation
                increasingly painful.
              </p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300">
              <AlertCircle className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Admin team does their best, but no-shows and incomplete
                treatment plans quietly erode revenue.
              </p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300">
              <Shield className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Previous agencies sent low-value leads that no-showed or were
                not suitable.
              </p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300">
              <Target className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                You want quality over volume: patients who book, attend and
                complete appropriate care.
              </p>
            </div>
          </div>
        </section>

        {/* Desired Outcomes Section */}
        <section className="container mx-auto max-w-7xl mb-32">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-12 md:p-20 lg:p-28">
            <Calendar className="w-14 h-14 text-primary mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15]">
              Consistently full books, better patient follow-through, and
              protected reputation.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 font-light leading-relaxed">
              More of the right patients, completing the care they actually
              need.
            </p>

            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8">
              <div className="flex items-start gap-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  Appointment books comfortably full for principal and
                  associates, not overbooked.
                </p>
              </div>
              <div className="flex items-start gap-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  A higher proportion of patients complete recommended treatment
                  plans.
                </p>
              </div>
              <div className="flex items-start gap-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  More private pay / insured patients to support sustainability,
                  less reliance on bulk-billing.
                </p>
              </div>
              <div className="flex items-start gap-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  Simple dashboard: new patients per week, show-up rate,
                  completed plans.
                </p>
              </div>
              <div className="flex items-start gap-6">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1.5" />
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  Marketing that aligns with clinical standards and long-term
                  reputation.
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
              Darwin Patient Pipeline – 20+ New Patients in 90 Days
            </h2>
            <p className="text-2xl mb-6 opacity-90">
              Or we work for free until we do.
            </p>
            <p className="text-xl opacity-80">
              A compliant, performance-linked growth program for Darwin clinics.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                What we deliver (plain language):
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-8">
                  <div className="bg-primary/10 rounded-full p-2">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Condition-specific landing pages
                    </h4>
                    <p className="text-muted-foreground">
                      E.g. back pain, sports injury, TMJ, etc. – built with
                      compliance in mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-8">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Booking funnel integration
                    </h4>
                    <p className="text-muted-foreground">
                      Online booking, phone and lead forms with automated
                      reminders.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-8">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Meta and Google campaigns
                    </h4>
                    <p className="text-muted-foreground">
                      Targeting relevant suburbs and demographics for your
                      practice.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-8">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Follow-up process for no-shows and incomplete plans
                    </h4>
                    <p className="text-muted-foreground">
                      Scripts and simple automation to improve completion rates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-8">
                  <div className="bg-primary/10 rounded-full p-2">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Weekly reporting</h4>
                    <p className="text-muted-foreground">
                      New enquiries, bookings, no-shows, and completed plans
                      tracked clearly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 border border-border rounded-xl p-8">
              <h4 className="font-semibold mb-3">
                Clear definition: "New Patient"
              </h4>
              <p className="text-muted-foreground">
                A first-time private patient from our campaigns who attends at
                least one appointment. Limited pilot spots per quarter to ensure
                high attention and compliance.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How we build a compliant patient pipeline for your clinic.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            From initial diagnostic to stable patient flow.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Clinic Patient Pipeline Diagnostic
                </h3>
                <p className="text-muted-foreground">
                  Review of current website, referral mix, booking patterns, and
                  available capacity.
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
                  Set up or refine tracking for new patient enquiries and
                  bookings. Implement a simple reporting view for key KPIs.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Launch Darwin Patient Pipeline Program
                </h3>
                <p className="text-muted-foreground">
                  Go live with 1–3 highest-value conditions and associated
                  landing pages.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Reception Training & Follow-Up Systems
                </h3>
                <p className="text-muted-foreground">
                  Provide scripts and sequences to improve conversion, reduce
                  no-shows, and encourage plan completion.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Review, Optimise, and Expand
                </h3>
                <p className="text-muted-foreground">
                  Regular check-ins; expand to new conditions or locations once
                  initial program is stable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Clear guarantees around new patient numbers and costs – within
            defined limits.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            We take on a share of the risk so you're not just buying
            'marketing'.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <Shield className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">
                20 New Patients in 90 Days
              </h3>
              <p className="text-muted-foreground">
                Or we work for free until we hit it (within agreed caps).
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <Clock className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">No Lock-In Contracts</h3>
              <p className="text-muted-foreground">
                First 90 days trial; then rolling 30-day terms.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <TrendingUp className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Stop-Loss Protection</h3>
              <p className="text-muted-foreground">
                If total cost per acquired new patient (ads + our fee) exceeds
                an agreed number for two consecutive months, we pause and fix
                before charging further fees.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <FileText className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">You Keep All Assets</h3>
              <p className="text-muted-foreground">
                All landing pages, scripts, and tracking remain yours if we part
                ways.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-6 mt-6">
            <p className="text-sm text-muted-foreground">
              <strong>Important:</strong> Guarantees refer to marketing outcomes
              (enquiries and bookings), not clinical outcomes or specific health
              results.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pricing built around your new patient value and utilisation goals.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            If the numbers don't work on paper, we won't propose a program.
          </p>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-10 md:p-16">
            <h3 className="text-2xl font-bold mb-6">
              Typical structure for clinic partners:
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p>
                  One-off setup to build compliant landing pages, tracking and
                  scripts.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p>Monthly management fee aligned with practice size.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p>Performance component per new patient above target.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p>
                  <strong>Alternative:</strong> Revenue-share option (low base
                  fee + percentage of revenue from campaign-sourced new
                  patients) where tracking allows.
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
                    Your cost per new patient stays well below your average
                    treatment plan value.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-500/20 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-sm">
                    Payback happens within 1–3 new patients (not 10).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-500/20 rounded-full p-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-sm">
                    It makes sense for your clinic's capacity and margins, or we
                    don't proceed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Common questions from Darwin clinic owners.
          </h2>

          <div className="space-y-6 mt-12">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                Will this damage our professional reputation?
              </h3>
              <p className="text-muted-foreground">
                We build campaigns around education, access, and appropriate
                care, not hype or pressure. Reputation and compliance are
                explicit constraints in our work.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                Do you understand health advertising rules?
              </h3>
              <p className="text-muted-foreground">
                Our assets are designed with AHPRA-style constraints in mind: no
                promises of cures, no testimonials we're not allowed to use, and
                careful language on conditions and outcomes.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                Will we get low-quality leads that no-show?
              </h3>
              <p className="text-muted-foreground">
                We qualify audiences, implement reminder systems, and track
                show-up rates as a core metric. Our performance incentives are
                tied to real new patients attending, not just clicks.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                What if we don't have capacity?
              </h3>
              <p className="text-muted-foreground">
                We plan around your capacity and can focus campaigns on specific
                practitioners, conditions, or times of day.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">
                What happens if it doesn't work?
              </h3>
              <p className="text-muted-foreground">
                We enact the stop-loss and guarantee conditions: pause,
                diagnose, and work without charging additional fees within
                agreed caps, or part ways while you retain all assets.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto max-w-6xl mb-24">
          <div className="bg-card border border-border rounded-2xl p-10 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              A Darwin-based partner focused on sustainable, compliant clinic
              growth.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We grow when your clinic grows – not by stacking retainers.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Activity className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Locally based, focused on Darwin and NT clinics rather than
                  hundreds of accounts nationwide.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Small enough that each clinic matters; you're not one of many
                  in a large portfolio.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  We deliberately cap the number of clinics per modality and
                  catchment.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  You deal directly with the person running your campaigns, not
                  rotating account managers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start with a free Clinic Patient Pipeline Diagnostic.
            </h2>
            <p className="text-xl mb-4 opacity-90">
              No pressure, no jargon – just a clear picture of where patients
              are leaking.
            </p>

            <div className="max-w-2xl mx-auto mb-10">
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p>
                    20-minute review of your booking patterns, utilisation
                    levels, and digital presence.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p>
                    Identification of 3–5 specific changes that could increase
                    appropriate new patient flow.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p>
                    Clear explanation of whether Darwin Patient Pipeline is
                    suitable – or not – for your clinic.
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
