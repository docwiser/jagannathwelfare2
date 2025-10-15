import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    id: "team-member-1",
    name: "Priya Sharma",
    designation: "Founder & CEO",
    bio: "With over 20 years of experience in social work, Priya founded SevaSetu to create a lasting impact on community welfare.",
    initials: "PS"
  },
  {
    id: "team-member-2",
    name: "Rajesh Kumar",
    designation: "Program Director",
    bio: "Rajesh is an expert in sustainable development and manages the seamless execution of all our welfare programs.",
    initials: "RK"
  },
  {
    id: "team-member-3",
    name: "Anjali Mehta",
    designation: "Outreach Coordinator",
    bio: "Anjali connects our foundation with the community, organizing events and managing our dedicated team of volunteers.",
    initials: "AM"
  },
  {
    id: "team-member-4",
    name: "Vikram Singh",
    designation: "Volunteer Lead",
    bio: "A passionate advocate for change, Vikram inspires and leads our volunteers to give their best for the community.",
    initials: "VS"
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
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
