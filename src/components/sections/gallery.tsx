"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const galleryImages = [
  'gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5', 'gallery-6'
].map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

type ImagePlaceholder = typeof galleryImages[0];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder>(null);

  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">Glimpses of Our Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A picture is worth a thousand words. Explore our gallery to see the impact of our efforts and the smiles we help create.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, idx) => (
            image && (
              <div
                key={image.id}
                className={`group relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg ${
                  idx === 0 || idx === 5 ? 'col-span-2 row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            )
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.description}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg object-contain"
              data-ai-hint={selectedImage.imageHint}
            />
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
