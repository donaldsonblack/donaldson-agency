"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = [
    {
      name: "Trades",
      href: "/services/trades",
      description: "Marketing for construction, plumbing, and trades",
    },
    {
      name: "Healthcare",
      href: "/services/healthcare",
      description: "Digital marketing for medical practices",
    },
    {
      name: "Tourism",
      href: "/services/tourism",
      description: "Marketing for hotels, tours, and hospitality",
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded flex items-center gap-1"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Services
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block px-4 py-3 hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium text-sm">{service.name}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {service.description}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
