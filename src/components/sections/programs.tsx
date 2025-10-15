import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Accessibility, HeartHandshake, CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";

const programs = [
  {
    id: "student-support",
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Student Support Program",
    description: "Fostering the next generation of leaders by providing scholarships, mentorship, and essential educational resources to deserving students.",
    features: ["Scholarships for Higher Education", "Mentorship from Industry Experts", "Skill Development Workshops", "Access to Digital Learning Tools"],
    imageHint: "student graduation"
  },
  {
    id: "disability-welfare",
    icon: <Accessibility className="h-8 w-8" />,
    title: "Disability & Welfare",
    description: "Ensuring individuals with disabilities live with dignity and have equal opportunities through assistive devices, therapy, and inclusive programs.",
    features: ["Distribution of Mobility Aids", "Physical & Occupational Therapy", "Vocational Training Programs", "Community Sensitization Drives"],
    imageHint: "adaptive sports"
  },
  {
    id: "elderly-care",
    icon: <HeartHandshake className="h-8 w-8" />,
    title: "Elderly Welfare",
    description: "Providing compassionate care and companionship to the elderly, ensuring their golden years are filled with comfort, health, and happiness.",
    features: ["Senior Daycare Centers", "Mobile Healthcare Units", "Nutritional Support Programs", "Recreational & Social Activities"],
    imageHint: "elderly care"
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
