"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    id: "team-member-1",
    name: "Chhabitra Bhoi",
    designation: "Founder & President",
    bio: "Visionary leader and the driving force behind the foundation, dedicated to serving the community.",
    initials: "CB",
    imageHint: "professional portrait"
  },
  {
    id: "team-member-2",
    name: "Dhananjay Sethy",
    designation: "Chief Secretary",
    bio: "Manages the administrative functions, ensuring the smooth operation of all our welfare programs.",
    initials: "DS",
    imageHint: "professional headshot"
  },
  {
    id: "team-member-3",
    name: "Akash Kandi",
    designation: "Vice President",
    bio: "A dynamic leader supporting the president's vision and helping to steer the foundation's initiatives.",
    initials: "AK",
    imageHint: "corporate headshot"
  },
  {
    id: "team-member-4",
    name: "Satyabrat Tihadi",
    designation: "Vice President",
    bio: "Passionate about community service, Satyabrat plays a key role in our outreach and program implementation.",
    initials: "ST",
    imageHint: "person smiling"
  },
  {
    id: "team-member-5",
    name: "Akash Behera",
    designation: "Informer Journalist",
    bio: "Our voice to the world, Akash helps in documenting and sharing the stories of impact from our foundation.",
    initials: "AB",
    imageHint: "person headshot"
  },
];

type TeamMember = typeof teamMembers[0];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
              <Card
                key={member.name}
                className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <CardHeader className="items-center pt-8">
                  <Avatar className="h-28 w-28 border-4 border-primary/50">
                    {image && <AvatarImage src={image.imageUrl} alt={member.name} data-ai-hint={image.imageHint} />}
                    <AvatarFallback className="text-3xl bg-muted">{member.initials}</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="pb-4">
                  <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.designation}</p>
                  <Button variant="link" className="mt-2">Read More</Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {selectedMember && (
        <Dialog open={!!selectedMember} onOpenChange={(isOpen) => !isOpen && setSelectedMember(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader className="sm:text-center space-y-4">
               <div className="flex justify-center">
                <Avatar className="h-40 w-40 border-4 border-primary">
                    <AvatarImage src={PlaceHolderImages.find(img => img.id === selectedMember.id)?.imageUrl} alt={selectedMember.name} data-ai-hint={selectedMember.imageHint} />
                    <AvatarFallback className="text-5xl bg-muted">{selectedMember.initials}</AvatarFallback>
                </Avatar>
               </div>
              <DialogTitle className="text-3xl font-headline">{selectedMember.name}</DialogTitle>
              <p className="text-xl text-primary font-semibold !mt-1">{selectedMember.designation}</p>
            </DialogHeader>
            <div className="py-4 text-center">
              <p className="text-muted-foreground">{selectedMember.bio}</p>
               <div className="mt-6 flex justify-center space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={24} /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary"><Twitter size={24} /></a>
               </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
