"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Linkedin, Twitter, ArrowRight } from "lucide-react";
const teamMembers = [
{
id: "chhabitrabhoi",
name: "Chhabitra Bhoi",
designation: "Founder & President",
bio: "Visionary leader and the driving force behind the foundation, dedicated to serving the community.",
initials: "CB",
imageHint: "professional portrait"
},
{
id: "dhananjayasethy",
name: "Dhananjay Sethy",
designation: "Chief Secretary",
bio: "Manages the administrative functions, ensuring the smooth operation of all our welfare programs.",
initials: "DS",
imageHint: "professional headshot",
},
{
id: "akashkandi",
name: "Akash Kandi",
designation: "Vice President",
bio: "A dynamic leader supporting the president's vision and helping to steer the foundation's initiatives.",
initials: "AK",
imageHint: "corporate headshot"
},
{
id: "satyabratatiadi",
name: "Satyabrata Tiadi",
designation: "Vice President",
bio: "Passionate about community service, Satyabrat plays a key role in our outreach and program implementation.",
initials: "ST",
imageHint: "person smiling"
},
{
id: "akashbehera",
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
<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{teamMembers.map((member) => {
const image = `/${member.id}.jpeg`;
return (
<Card
key={member.name}
className="shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
onClick={() => setSelectedMember(member)}
>
<CardContent className="p-4 flex items-center gap-4">
<Avatar className="h-20 w-20 border-2 border-primary/50">
{image && <AvatarImage src={image} alt={member.name} data-ai-hint={member.name} />}
<AvatarFallback className="text-2xl bg-muted">{member.initials}</AvatarFallback>
</Avatar>
<div className="flex-1 space-y-1">
<h3 className="font-bold font-headline text-lg">{member.name}</h3>
<p className="text-sm text-primary font-semibold">{member.designation}</p>
<Button variant="link" size="sm" className="p-0 h-auto text-muted-foreground">
Read More <ArrowRight className="ml-1 h-4 w-4" />
</Button>
</div>
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
<AvatarImage src={"/" + selectedMember.id + ".jpeg"} alt={selectedMember.name} data-ai-hint={selectedMember.imageHint} />
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