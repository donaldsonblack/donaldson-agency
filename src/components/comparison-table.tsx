"use client";

import { CheckCircle2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ComparisonTable() {
  const rightCardRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!rightCardRef.current) return;

      const rect = rightCardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate when element is in view
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      // Start scaling when element enters viewport
      if (elementTop < windowHeight && elementBottom > 0) {
        // Calculate progress (0 to 1) as element scrolls through viewport
        const scrollProgress = Math.min(
          1,
          Math.max(0, (windowHeight - elementTop) / windowHeight),
        );

        // Scale up to 1.05 as it scrolls
        if (scrollProgress < 0.8) {
          const scaleValue = 1 + scrollProgress * 0.05;
          setScale(scaleValue);
        } else {
          // Release back to normal with ease-out when almost out of view
          setScale(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
      {/* Left Card - Typical Agency */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-muted-foreground">
            Typical Agency
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <div className="font-medium mb-1">Focus</div>
              <div className="text-sm text-muted-foreground">
                Clicks & impressions
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <div className="font-medium mb-1">Contracts</div>
              <div className="text-sm text-muted-foreground">
                6–12 month retainers
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <div className="font-medium mb-1">Reporting</div>
              <div className="text-sm text-muted-foreground">
                Generic screenshots
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <div className="font-medium mb-1">Geography</div>
              <div className="text-sm text-muted-foreground">Anywhere</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card - Donaldson Marketing */}
      <div
        ref={rightCardRef}
        className="bg-green-50 dark:bg-green-950/30 border border-border rounded-2xl p-8 transition-transform duration-500 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-foreground">
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
  );
}
