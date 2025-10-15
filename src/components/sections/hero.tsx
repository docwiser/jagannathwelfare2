import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[80vh] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-extrabold tracking-tight font-headline md:text-6xl lg:text-7xl">
          Building Bridges of Hope
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl">
          SevaSetu is dedicated to empowering communities through education, healthcare, and support for the vulnerable.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full font-bold text-lg px-8 py-6">
          <Link href="#mission">Learn More</Link>
        </Button>
      </div>
    </section>
  );
}
