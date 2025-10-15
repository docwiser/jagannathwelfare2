import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const upcomingEvents = [
  {
    date: "July 25, 2024",
    title: "Annual Health Check-up Camp",
    location: "Community Hall, Hope City",
    description: "Join us for a free health screening event. Doctors and specialists will be available for consultations."
  },
  {
    date: "August 10, 2024",
    title: "Educational Scholarship Drive",
    location: "City Library Auditorium",
    description: "An event to award scholarships to bright students and kickstart our annual fundraising for the education program."
  },
  {
    date: "September 5, 2024",
    title: "Senior Citizens Day Out",
    location: "Tranquil Park",
    description: "A day of fun, games, and companionship for the elderly members of our community."
  }
];

const pastEvents = [
  PlaceHolderImages.find(img => img.id === 'gallery-2'),
  PlaceHolderImages.find(img => img.id === 'gallery-4'),
  PlaceHolderImages.find(img => img.id === 'gallery-5'),
];


export default function EventsSection() {
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
                    <p className="text-muted-foreground">{event.description}</p>
                    <div className="flex items-center gap-2 text-sm text-accent mt-4 font-semibold">
                      <MapPin className="h-4 w-4" /> <span>{event.location}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full rounded-full">Volunteer</Button>
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
    </section>
  );
}
