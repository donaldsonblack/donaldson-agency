"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Trades",
    href: "/services/trades",
    description: "Marketing for construction, plumbing, and trades",
  },
  {
    title: "Healthcare",
    href: "/services/healthcare",
    description: "Digital marketing for medical practices",
  },
  {
    title: "Tourism",
    href: "/services/tourism",
    description: "Marketing for hotels, tours, and hospitality",
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav
        className="container mx-auto px-4 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Desktop Logo */}
        <Link
          href="/"
          className="text-2xl font-bold hidden md:block"
          aria-label="Donaldson Agency Home"
        >
          Donaldson Marketing
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="#work">Work</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="#about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Get Started Button */}
        <Link
          href="/contact"
          className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium text-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hidden md:block"
          aria-label="Get started with Donaldson Agency"
        >
          Get Started
        </Link>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Services Section */}
            <div className="space-y-2">
              <div className="font-semibold text-sm text-muted-foreground px-3">
                Services
              </div>
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="block px-3 py-2 rounded-md hover:bg-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="font-medium text-sm">{service.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {service.description}
                  </div>
                </Link>
              ))}
            </div>

            {/* Company Section */}
            <div className="space-y-2 pt-2 border-t border-border">
              <div className="font-semibold text-sm text-muted-foreground px-3">
                Company
              </div>
              <Link
                href="#work"
                className="block px-3 py-2 rounded-md hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="font-medium text-sm">Work</div>
                <div className="text-xs text-muted-foreground">
                  View our portfolio and case studies
                </div>
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 rounded-md hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="font-medium text-sm">About</div>
                <div className="text-xs text-muted-foreground">
                  Learn about our team and values
                </div>
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="font-medium text-sm">Contact</div>
                <div className="text-xs text-muted-foreground">
                  Get in touch with us
                </div>
              </Link>
            </div>

            {/* Get Started Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium text-sm text-center hover:opacity-90 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
