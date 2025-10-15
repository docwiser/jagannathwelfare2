import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    id: "team-member-1",
    name: "Chhabitra Bhoi",
    designation: "Founder & President",
    bio: "Visionary leader and the driving force behind the foundation, dedicated to serving the community.",
    initials: "CB"
  },
  {
    id: "team-member-2",
    name: "Dhananjay Sethy",
    designation: "Chief Secretary",
    bio: "Manages the administrative functions, ensuring the smooth operation of all our welfare programs.",
    initials: "DS"
  },
  {
    id: "team-member-3",
    name: "Akash Kandi",
    designation: "Vice President",
    bio: "A dynamic leader supporting the president's vision and helping to steer the foundation's initiatives.",
    initials: "AK"
  },
  {
    id: "team-member-4",
    name: "Satyabrat Tihadi",
    designation: "Vice President",
    bio: "Passionate about community service, Satyabrat plays a key role in our outreach and program implementation.",
    initials: "ST"
  },
  {
    id: "team-member-5",
    name: "Akash Behera",
    designation: "Informer Journalist",
    bio: "Our voice to the world, Akash helps in documenting and sharing the stories of impact from our foundation.",
    initials: "AB"
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The dedicated individuals working tirelessly behind the scenes to turn our vision into reality.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member) => {
            const image = PlaceHolderImages.find(img => img.id === member.id);
            return (
              <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center pt-8">
                  <Avatar className="h-28 w-28 border-4 border-primary/50">
                    {image && <AvatarImage src={image.imageUrl} alt={member.name} data-ai-hint={image.imageHint} />}
                    <AvatarFallback className="text-3xl bg-muted">{member.initials}</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.designation}</p>
                  <p className="mt-2 text-muted-foreground text-sm">{member.bio}</p>
                   <div className="mt-4 flex justify-center space-x-3">
                      <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
                      <a href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></a>
                   </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
