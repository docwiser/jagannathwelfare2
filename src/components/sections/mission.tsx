"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, BookOpen, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";

const values = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Compassion",
    description: "We believe in treating every individual with kindness, empathy, and respect, ensuring their dignity is always upheld.",
    fullDescription: "Our approach is rooted in compassion. We actively listen to the needs of our community and respond with actions that are not only helpful but also delivered with a sense of shared humanity and care. Every person we serve is treated as a valued member of our extended family."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Empowerment",
    description: "Our goal is to provide individuals with the resources and opportunities they need to build a self-reliant future.",
    fullDescription: "Empowerment is at the core of our initiatives. We go beyond temporary aid by providing education, skills training, and resources that enable individuals and communities to become self-sufficient. We aim to light a spark that allows people to take control of their own destinies."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Integrity",
    description: "We are committed to transparency and accountability in all our actions, ensuring every contribution makes a real impact.",
    fullDescription: "We operate with unwavering integrity. Every donation, every hour of volunteer work, and every decision made is handled with the utmost transparency and ethical consideration. We are accountable to our community, our donors, and ourselves to ensure that all resources are used effectively to create maximum impact."
  },
];

type Value = typeof values[0];

export default function MissionSection() {
  const [selectedValue, setSelectedValue] = useState<Value | null>(null);
  
  return (
    <section id="mission" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">Our Mission & Values</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            At Sri Jagannath Welfare Friendship Foundation, we are driven by a simple yet powerful mission: to create a supportive and inclusive society where everyone has the chance to thrive.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary flex flex-col">
              <CardHeader className="items-center flex-grow">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  {value.icon}
                </div>
                <CardTitle className="text-2xl font-headline">{value.title}</CardTitle>
                <CardDescription className="pt-2 text-base">
                  {value.description}
                </CardDescription>
              </CardHeader>
              <div className="p-6 pt-0">
                <Button variant="outline" className="w-full rounded-full" onClick={() => setSelectedValue(value)}>Read More</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

       {selectedValue && (
        <Dialog open={!!selectedValue} onOpenChange={(isOpen) => !isOpen && setSelectedValue(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader className="items-center text-center">
               <div className="mb-4 rounded-full bg-primary/10 p-4">
                  {selectedValue.icon}
                </div>
              <DialogTitle className="text-2xl font-headline">{selectedValue.title}</DialogTitle>
            </DialogHeader>
            <div className="py-4 text-center">
              <p className="text-muted-foreground">{selectedValue.fullDescription}</p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
