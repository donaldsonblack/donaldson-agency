import { Navbar } from "@/components/navbar";

export default function TourismPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Tourism
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Marketing for hotels, tours, and hospitality
          </p>

          {/* Content will be added here */}
        </div>
      </main>
    </div>
  );
}
