import Link from "next/link";
import { HeartHandshake, Mail, MapPin, Phone, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Footer() {
  return (
    <footer id="contact" className="bg-card text-card-foreground border-t">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 md:grid-cols-3 md:px-6">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <HeartHandshake className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-headline">Sri Jagannath Welfare Friendship Foundation</span>
          </Link>
          <p className="max-w-md">
            Join us in our mission to build a bridge of support and compassion for those in need. Your contribution can make a world of difference.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-6 w-6" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-6 w-6" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Youtube className="h-6 w-6" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-6 w-6" /></Link>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-headline font-semibold">Get In Touch</h3>
          <address className="space-y-4 not-italic">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
              <span>123 Compassion Ave, Hope City, HC 45678</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+919776358543" className="hover:text-primary">+91 97763 58543</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:chhabitrabhoi@gmail.com" className="hover:text-primary">chhabitrabhoi@gmail.com</a>
            </div>
          </address>
        </div>

        <div className="space-y-6 rounded-lg border bg-background p-6 shadow-lg">
          <h3 className="text-xl font-headline font-semibold">Make a Donation</h3>
          <form className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="amount">Amount (USD)</Label>
              <Input type="number" id="amount" placeholder="Enter amount" defaultValue="50" />
            </div>
            <Button type="submit" className="w-full rounded-full font-bold" size="lg">
              Donate Securely
            </Button>
            <p className="text-xs text-center text-muted-foreground">Securely processed by our partners.</p>
          </form>
        </div>
      </div>
      <div className="border-t bg-card">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row md:px-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sri Jagannath Welfare Friendship Foundation. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
