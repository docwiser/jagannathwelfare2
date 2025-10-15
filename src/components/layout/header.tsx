"use client";

import Link from "next/link";
import { Menu, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

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
            SJWFF
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-lg font-medium md:flex">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="py-0 hover:no-underline">Menu</AccordionTrigger>
              <AccordionContent className="absolute mt-2 w-48 rounded-md bg-background shadow-lg">
                <div className="flex flex-col p-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-foreground/80 transition-colors hover:text-primary rounded-md"
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden rounded-full font-bold md:inline-flex"
            size="lg"
          >
            <Link href="#contact">Donate Now</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" onCloseAutoFocus={() => setIsSheetOpen(false)}>
              <div className="grid gap-4 p-6">
                <Link
                  href="/"
                  className="mb-6 flex items-center gap-2"
                  prefetch={false}
                  onClick={() => setIsSheetOpen(false)}
                >
                  <HeartHandshake className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold font-headline">Sri Jagannath Welfare Friendship Foundation</span>
                </Link>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-2 text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                      prefetch={false}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-6 rounded-full font-bold" size="lg">
                  <Link href="#contact" onClick={() => setIsSheetOpen(false)}>Donate Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
