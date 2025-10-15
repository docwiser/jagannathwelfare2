"use client";

import Link from "next/link";
import { Sunrise, Menu, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import React from "react";

const navLinks = [
  { href: "#mission", label: "Mission" },
  { href: "#programs", label: "Programs" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <HeartHandshake className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-headline text-foreground">
            SevaSetu
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-lg font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden rounded-full font-bold md:inline-flex"
            size="lg"
          >
            <Link href="#contact">Donate Now</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-6">
                <Link
                  href="/"
                  className="mb-6 flex items-center gap-2"
                  prefetch={false}
                >
                  <HeartHandshake className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold font-headline">SevaSetu</span>
                </Link>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-2 text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-6 rounded-full font-bold" size="lg">
                  <Link href="#contact">Donate Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
