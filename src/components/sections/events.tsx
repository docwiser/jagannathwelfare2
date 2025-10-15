"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const upcomingEvents = [
  {
    date: "July 28, 2024",
    title: "Blood Donation Camp",
    location: "Community Hall, Hope City",
    description: "Save a life. Join our annual blood donation drive and make a difference."
  },
  {
    date: "August 15, 2024",
    title: "Independence Day Celebration with Orphans",
    location: "City Orphanage",
    description: "Celebrate freedom by sharing joy and happiness with children at the local orphanage. Cultural programs and lunch."
  },
  {
    date: "September 10, 2024",
    title: "Free Computer Literacy Workshop",
    location: "CSC Center, Rural Town",
    description: "Empowering our community with essential digital skills. A free workshop for all ages."
  }
];

const pastEvents = [
  PlaceHolderImages.find(img => img.id === 'gallery-2'),
  PlaceHolderImages.find(img => img.id === 'gallery-4'),
  PlaceHolderImages.find(img => img.id === 'gallery-5'),
];

type UpcomingEvent = typeof upcomingEvents[0];


export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | null>(null);

  return (
    <section id="events" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">Community Outreach</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay updated with our upcoming events and see highlights from our past activities. Get involved and make a difference!
          </p>
        </div>
        <Tabs defaultValue="upcoming" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Activities</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <Card key={event.title} className="flex flex-col shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <CalendarDays className="h-4 w-4" /> <span>{event.date}</span>
                    </div>
                    <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{event.description}</p>
                  </CardContent>
                  <CardFooter className="flex-col items-stretch gap-2">
                    <Button variant="outline" className="w-full rounded-full" onClick={() => setSelectedEvent(event)}>Read More</Button>
                    <Button className="w-full rounded-full">Volunteer</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="past" className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((eventImg) => {
                if (!eventImg) return null;
                return (
                  <Card key={eventImg.id} className="overflow-hidden group">
                    <div className="relative h-64 w-full">
                      <Image
                        src={eventImg.imageUrl}
                        alt={eventImg.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={eventImg.imageHint}
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                       <div className="absolute bottom-0 left-0 p-4">
                          <p className="text-white font-semibold">{eventImg.imageHint.charAt(0).toUpperCase() + eventImg.imageHint.slice(1)}</p>
                       </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {selectedEvent && (
        <Dialog open={!!selectedEvent} onOpenChange={(isOpen) => !isOpen && setSelectedEvent(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <CalendarDays className="h-4 w-4" /> <span>{selectedEvent.date}</span>
              </div>
              <DialogTitle className="font-headline text-2xl">{selectedEvent.title}</DialogTitle>
              <div className="flex items-center gap-2 text-sm text-accent pt-2 font-semibold">
                <MapPin className="h-4 w-4" /> <span>{selectedEvent.location}</span>
              </div>
            </DialogHeader>
            <div className="py-4">
              <p className="text-muted-foreground">{selectedEvent.description}</p>
            </div>
            <Button className="w-full rounded-full">Volunteer</Button>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
