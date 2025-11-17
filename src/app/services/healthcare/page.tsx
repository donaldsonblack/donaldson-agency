import { Navbar } from "@/components/navbar";

export default function HealthcarePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Healthcare
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Digital marketing for medical practices
          </p>

          {/* Content will be added here */}
        </div>
      </main>
    </div>
  );
}
