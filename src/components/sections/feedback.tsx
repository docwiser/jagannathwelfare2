"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export default function FeedbackSection() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(rating === 0) {
        toast({
            variant: "destructive",
            title: "No Rating Provided",
            description: "Please select a star rating before submitting.",
        });
        return;
    }
    console.log({ rating, feedback });
    toast({
        title: "Feedback Submitted!",
        description: "Thank you for your valuable feedback.",
    });
    setRating(0);
    setFeedback("");
  };

  return (
    <section id="feedback" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">Share Your Feedback</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your opinion matters to us. Please rate our work and provide your valuable feedback to help us improve.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl rounded-lg border bg-card p-6 md:p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-center">
              <label className="text-lg font-medium">Rate Our Welfare Services</label>
              <div className="flex justify-center items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={cn(
                      "h-8 w-8 cursor-pointer transition-colors",
                      (hoverRating >= star || rating >= star)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-muted-foreground/50"
                    )}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="feedback-text" className="font-medium">Your Feedback</label>
              <Textarea
                id="feedback-text"
                placeholder="Tell us what you think..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full rounded-full font-bold" size="lg">
              Submit Feedback
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
