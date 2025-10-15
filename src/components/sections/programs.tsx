import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Music, GraduationCap, Computer, CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";

const programs = [
  {
    id: "bajan-sandhya",
    icon: <Music className="h-8 w-8" />,
    title: "Sri Jagannath Bajan Sandhya",
    description: "Our devotional band performs at various devotional events, spreading spirituality and culture through music.",
    features: ["Live Bhajan Performances", "Cultural Event Organization", "Spiritual Music Workshops", "Community Gatherings"],
    imageHint: "devotional music"
  },
  {
    id: "coaching-center",
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Coaching Center",
    description: "Providing best-in-class higher secondary education with utmost affordability to empower the students of our community.",
    features: ["Affordable Tuition", "Experienced Faculty", "Regular Mock Tests", "Career Counseling Sessions"],
    imageHint: "students classroom"
  },
  {
    id: "csc-center",
    icon: <Computer className="h-8 w-8" />,
    title: "Common Service Center (CSC)",
    description: "Assisting rural and semi-urban people with daily requirements, from government form fill-ups to digital documentation tasks.",
    features: ["Govt. Scheme Assistance", "Digital Literacy Programs", "Online Form Submissions", "Documentation Services"],
    imageHint: "computer center"
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">Our Core Initiatives</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We focus on key areas where we can make the most significant impact, transforming lives and strengthening communities.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:gap-12">
          {programs.map((program) => {
            const image = PlaceHolderImages.find(img => img.id === program.id);
            return (
              <Card key={program.id} className="overflow-hidden shadow-lg border-none md:grid md:grid-cols-2 md:items-center">
                <div className="relative h-64 md:h-full w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-ai-hint={program.imageHint}
                    />
                  )}
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4 text-primary">
                    {program.icon}
                    <CardTitle className="text-2xl font-headline">{program.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base mb-6">
                    {program.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="mt-6 rounded-full font-semibold">
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
