import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, BookOpen, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Compassion",
    description: "We believe in treating every individual with kindness, empathy, and respect, ensuring their dignity is always upheld.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Empowerment",
    description: "Our goal is to provide individuals with the resources and opportunities they need to build a self-reliant future.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Integrity",
    description: "We are committed to transparency and accountability in all our actions, ensuring every contribution makes a real impact.",
  },
];

export default function MissionSection() {
  return (
    <section id="mission" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">Our Mission & Values</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            At SevaSetu, we are driven by a simple yet powerful mission: to create a supportive and inclusive society where everyone has the chance to thrive.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
              <CardHeader className="items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  {value.icon}
                </div>
                <CardTitle className="text-2xl font-headline">{value.title}</CardTitle>
                <CardDescription className="pt-2 text-base">
                  {value.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
