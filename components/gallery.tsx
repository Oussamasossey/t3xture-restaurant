"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";

import { Lightbox, type LightboxImage } from "@/components/lightbox";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface GalleryProps {
  images: LightboxImage[];
  className?: string;
}

export function Gallery({ images, className }: GalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className={cn(className)}>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Open image ${index + 1} of ${images.length}: ${image.alt}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: EASE, delay: (index % 4) * 0.06 }}
            className="group relative aspect-square overflow-hidden rounded-sm bg-cream-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              <span className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-cream-100">
                <Expand className="h-3.5 w-3.5" strokeWidth={1.75} />
                {image.caption ?? "View"}
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      {active !== null ? (
        <Lightbox
          images={images}
          index={active}
          onChange={setActive}
          onClose={() => setActive(null)}
        />
      ) : null}
    </div>
  );
}
