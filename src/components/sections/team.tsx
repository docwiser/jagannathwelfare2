"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
const teamMembers = [
{
id: "chhabitrabhoi",
name: "Chhabitra Bhoi",
designation: "Founder & President",
bio: "Visionary leader and the driving force behind the foundation, dedicated to serving the community.",
details: "At -Tulasipur, Nimapada 10th - S.V.M School For The Blind 12th (Arts)- Nimapada Autonomous College,Nimapada +3(political science) - Nimapada Autonomous College,Nimapada Now I'm studying PG",
initials: "CB",
imageHint: "professional portrait",
},
{
id: "dhananjayasethy",
name: "Dhananjay Sethy",
designation: "Chief Secretary",
bio: "Manages the administrative functions, ensuring the smooth operation of all our welfare programs.",
details: "AT/PO- ALIPINGAL 10TH - DENUA NODAL HIGH SCHOOL,DENUA 12TH - NIMAPADA HIGHER SECONDARY SCHOOL, NIMAPADA +3 - NIMAPADA AUTONOMOUS OLLEGE, NIMAPADA EXTRA SKILL - BASIC COMPUTER KNOWLEDGE & OTHER ONLINE WORK'S. EXTRA CURRICULAR ACTIVITIES - JOINING N.S.S PROGRAM WORKS & PUBLIC WELFARE. THEN MY STRENGTH IS 👉 GOOD COMMUNICATION SKILLS & TEAM WORK 💪",
initials: "DS",
imageHint: "professional headshot",
},
{
id: "akashkandi",
name: "Akash Kandi",
designation: "Vice President",
bio: "A dynamic leader supporting the president's vision and helping to steer the foundation's initiatives.",
details: "at-ratanpur,10th-annapurna bidyapitha,charichhak 12th(arts)-mangala H S school,kakatpur +3(political science)-nimapara autonomous college, nimapara Nimapara computer course -pgdca, tally 9.0",
initials: "AK",
imageHint: "corporate headshot",
},
{
id: "satyabratatiadi",
name: "Satyabrata Tiadi",
designation: "Vice President",
bio: "Passionate about community service, Satyabrat plays a key role in our outreach and program implementation.",
details: "At- Alipingal (Nimapada) 10th- Denua nodal high school, denua 12th-( Arts)+ computer Skill- tech & editing, other online work's interests- Traveling , photography &I love going on trips with friends, listening to classical program",
initials: "ST",
imageHint: "person smiling",
},
{
id: "akashbehera",
name: "Akash Behera",
designation: "Informer Journalist",
bio: "Our voice to the world, Akash helps in documenting and sharing the stories of impact from our foundation.",
details: "At:-Astarang 10th :-pashimeswar bidyapith  12thArts:-Nimapada Higher secondary school (study now) Skill:-Rastriya swayamsevak sangh(RSS)🚩 National service scheme (NSS) (9th 10th)National cadet corps(NCC)Puri biswambar bidyapith",
initials: "AB",
imageHint: "person headshot",
},
{
id: "rojalinisahoo",
name: "Rojalini Sahoo",
designation: "Team Member",
bio: "Dedicated member contributing actively to social welfare programs and awareness campaigns.",
details:
"At - Nagabasta,Ratilo 10th - SSVM, Khelar  12th (Arts) - Nimapada Autonomous College, Nimapada  +3 (Arts, Political Science) - Nimapada Autonomous College, Nimapada  And now I am studying B.Ed .",
initials: "RS",
imageHint: "smiling portrait",
},
{
id: "sradhanjalirout",
name: "Sradhanjali Rout",
designation: "Team Member",
bio: "Passionate about empowering youth and women through education and leadership.",
details:
"At:-Denuabasta  10th:- Denua High school  12th (Arts):- IG women's                                           Nimapada +3(Arts):- Nimapada autonomous College,Nimapada  Distance PG in utkal University",
initials: "SR",
imageHint: "professional portrait of woman",
},
{
id: "sandhyaranidas",
name: "Sandhya Rani Das",
designation: "Team Member",
bio: "Works to promote health and hygiene awareness in rural communities.",
details:
"At- dhaleswara 10th- maa sathibhauni high school 12th- (arts) nimapada autonomous college, nimapada +3(arts)- nimapada autonomous college, nimapada Honours- education",
initials: "SD",
imageHint: "friendly portrait of woman",
},
{
id: "supriteepradhan",
name: "Supritee Pradhan",
designation: "Team Member",
bio: "An energetic volunteer involved in organizing community welfare events.",
details:
"Adress-Manduki, Astaranga  10 th-Swopneswar high school,Manduki 12 th(science)-Swadhin residential college, Nimapada  +3(science, Mathmatics)-Nimapada Autonomous college,Nimapada Now I am studying+3 Final yr",
initials: "SP",
imageHint: "professional headshot of woman",
},
{
id: "purnimabehera",
name: "Purnima Behera",
designation: "Team Member",
bio: "Focused on empowering local artisans and supporting small-scale entrepreneurship.",
details:
"At  helari gop 10th S.V.M School For The Blind Nimapada 12th R.D.W.U   Bhubaneswar +3( Arts ) Odia RDWU Bhubaneswar and now I am studying B.ED..",
initials: "PB",
imageHint: "portrait of woman smiling",
},
{
id: "dhananjayabehera",
name: "Dhananjaya Behera",
designation: "Event Organiser",
bio: "Responsible for planning and organizing all major events and community gatherings.",
details:
"Educational Background: Schooling: Completed from SVM School for the Blind, Nimapara. Higher Secondary (Plus Two): Completed from Nimapara Higher Secondary School. Computer Skills: Acquired basic computer skills through Tata Steel Foundation and NAB Merit. Current Education: Pursuing Bachelor’s Degree with Odia Honours at Nimapara Autonomous College.",
initials: "DB",
imageHint: "event organiser portrait",
},
{
id: "monalishabehera",
name: "Monalisha Behera",
designation: "Team Member",
bio: "Contributes to public relations and communication activities of the foundation.",
details:
"12th (Arts)  - Nimapada Autonomous college, Nimapada  +3 ( political science) - Nimapada Autonomous college, Nimapada Computer course - PGDCA Completed Now I am working in private company at bbsr",
initials: "MB",
imageHint: "corporate portrait of woman",
},
{
id: "kanheibehera",
name: "Kanhei Behera",
designation: "Team Member",
bio: "Dedicated member contributing actively to social welfare programs and awareness campaigns.",
details:
"At - Astaranga (nagar) 10th pashimeswar bidyapith nagar 12th (arts) - Nimapara higher secondary school  I am studying +3 2nd year right now (political science) arts Skill - NSS",
initials: "KB",
imageHint: "smiling portrait",
},
{
id: "srabanisamantaray",
name: "Srabani Samantaray",
designation: "Team Member",
bio: "Dedicated member contributing actively to social welfare programs and awareness campaigns.",
details:
"No Details to show",
initials: "SS",
imageHint: "smiling portrait",
},
];
type TeamMember = typeof teamMembers[0];
export default function TeamSection() {
const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
const selectedMember =
selectedIndex !== null ? teamMembers[selectedIndex] : null;
const handlePrev = () => {
if (selectedIndex === null) return;
setSelectedIndex(
selectedIndex === 0 ? teamMembers.length - 1 : selectedIndex - 1
);
};

const handleNext = () => {
if (selectedIndex === null) return;
setSelectedIndex(
selectedIndex === teamMembers.length - 1 ? 0 : selectedIndex + 1
);
};

return (
<section id="team" className="w-full py-16 md:py-24 bg-background">
<div className="container mx-auto px-4 md:px-6">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl font-bold font-headline md:text-4xl">
Meet Our Team
</h2>
<p className="mt-4 text-lg text-muted-foreground">
The dedicated individuals working tirelessly behind the scenes to
turn our vision into reality.
</p>
</div>

{/* Team Grid */}
<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{teamMembers.map((member, index) => {
const image = `/${member.id}.jpeg`;
return (
<Card
key={member.id}
className="shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
onClick={() => setSelectedIndex(index)}
>
<CardContent className="p-4 flex items-center gap-4">
<Avatar className="h-20 w-20 border-2 border-primary/50">
<AvatarImage
src={image}
alt={member.name}
data-ai-hint={member.name}
/>
<AvatarFallback className="text-2xl bg-muted">
{member.initials}
</AvatarFallback>
</Avatar>
<div className="flex-1 space-y-1">
<h3 className="font-bold font-headline text-lg">
{member.name}
</h3>
<p className="text-sm text-primary font-semibold">
{member.designation}
</p>
<p className="text-sm text-muted-foreground line-clamp-2">
{member.bio}
</p>
<Button
variant="link"
size="sm"
className="p-0 h-auto text-muted-foreground"
>
Read More <ArrowRight className="ml-1 h-4 w-4" />
</Button>
</div>
</CardContent>
</Card>
);
})}
</div>
</div>

{/* Dialog (Full-Screen Member Details) */}
{selectedMember && (
<Dialog
open={!!selectedMember}
onOpenChange={(isOpen) => !isOpen && setSelectedIndex(null)}
>
<DialogContent className="max-w-3xl md:max-w-4xl h-[90vh] overflow-y-auto relative">
<div className="absolute top-1/2 left-4 -translate-y-1/2">
<Button variant="outline" size="icon" aria-label="Previous Slide" onClick={handlePrev}>
<ChevronLeft className="h-5 w-5" />
</Button>
</div>
<div className="absolute top-1/2 right-4 -translate-y-1/2">
<Button variant="outline" size="icon" aria-label="Next Slide" onClick={handleNext}>
<ChevronRight className="h-5 w-5" />
</Button>
</div>

<DialogHeader className="sm:text-center space-y-4 mt-4">
<div className="flex justify-center">
<Avatar className="h-56 w-56 md:h-64 md:w-64 border-4 border-primary shadow-lg">
<AvatarImage
src={"/" + selectedMember.id + ".jpeg"}
alt={selectedMember.name}
data-ai-hint={selectedMember.imageHint}
/>
<AvatarFallback className="text-6xl bg-muted">
{selectedMember.initials}
</AvatarFallback>
</Avatar>
</div>
<DialogTitle className="text-3xl font-headline">
{selectedMember.name}
</DialogTitle>
<p className="text-xl text-primary font-semibold !mt-1">
{selectedMember.designation}
</p>
</DialogHeader>

<div className="py-6 text-center px-4 md:px-10">
<p className="text-muted-foreground text-base leading-relaxed mb-4">
{selectedMember.bio}
</p>
<p className="text-muted-foreground text-lg leading-relaxed">
{selectedMember.details}
</p>

<div className="mt-6 flex justify-center space-x-4">
<a
href="#"
className="text-muted-foreground hover:text-primary"
>
<Linkedin size={26} />
</a>
<a
href="#"
className="text-muted-foreground hover:text-primary"
>
<Twitter size={26} />
</a>
</div>
</div>
</DialogContent>
</Dialog>
)}
</section>
);
}
