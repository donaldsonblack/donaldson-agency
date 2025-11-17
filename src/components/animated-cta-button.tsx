"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin();
}

interface AnimatedCTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function AnimatedCTAButton({
  href,
  children,
  variant = "primary",
}: AnimatedCTAButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      // Scale button
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });

      // Animate arrow if it exists (primary variant)
      if (variant === "primary" && arrowRef.current) {
        gsap.to(arrowRef.current, {
          rotation: -45,
          scale: 1.2,
          duration: 0.3,
          ease: "power2.out",
          transformOrigin: "center center",
        });
      }
    };

    const handleMouseLeave = () => {
      // Reset button scale
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      // Reset arrow if it exists (primary variant)
      if (variant === "primary" && arrowRef.current) {
        gsap.to(arrowRef.current, {
          rotation: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          transformOrigin: "center center",
        });
      }
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [variant]);

  const baseClasses =
    "px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2";
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-primary-foreground"
      : "border border-border hover:bg-muted";

  return (
    <Link
      ref={buttonRef}
      href={href}
      className={`${baseClasses} ${variantClasses}`}
    >
      {children}
      {variant === "primary" && (
        <ArrowRight ref={arrowRef} className="w-5 h-5" />
      )}
    </Link>
  );
}
