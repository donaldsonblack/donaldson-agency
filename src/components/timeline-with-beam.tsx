"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-4 items-center justify-center rounded-full border-2 border-border bg-background",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function TimelineWithBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative mb-16 max-w-4xl mx-auto px-8">
      <div
        ref={containerRef}
        className="relative flex items-center justify-between h-[100px]"
      >
        <div className="grid grid-cols-3 gap-4 relative w-full">
          {/* Day 1 */}
          <div className="relative flex flex-col items-center">
            <div className="inline-block px-4 py-2 bg-background border border-border rounded-full text-sm font-medium mb-6">
              Day 1
            </div>
            <Circle ref={div1Ref} />
          </div>

          {/* Day 7 */}
          <div className="relative flex flex-col items-center">
            <div className="inline-block px-4 py-2 bg-background border border-border rounded-full text-sm font-medium mb-6">
              Day 7
            </div>
            <Circle ref={div2Ref} />
          </div>

          {/* Day 30 */}
          <div className="relative flex flex-col items-center">
            <div className="inline-block px-4 py-2 bg-background border border-border rounded-full text-sm font-medium mb-6">
              Day 30
            </div>
            <Circle ref={div3Ref} />
          </div>
        </div>

        {/* Animated Beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
          curvature={0}
          duration={3}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div3Ref}
          curvature={0}
          duration={3}
        />
      </div>
    </div>
  );
}
