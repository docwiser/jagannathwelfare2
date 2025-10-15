import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Smile } from "lucide-react";

const achievements = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    count: "5,000+",
    description: "Community Members Reached",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    count: "50+",
    description: "Successful Events Organized",
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    count: "1,000+",
    description: "Students & Youth Empowered",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">Our Achievements</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud of the positive change we have brought to our community. Here are some of our key milestones.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {achievements.map((achievement) => (
            <Card key={achievement.description} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
              <CardContent className="p-6">
                <div className="mb-4 inline-block rounded-full bg-primary/10 p-4">
                  {achievement.icon}
                </div>
                <p className="text-4xl font-bold">{achievement.count}</p>
                <p className="mt-2 text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
