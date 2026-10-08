"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}

export function Lightbox({ images, index, onChange, onClose }: LightboxProps) {
  const [open, setOpen] = useState(true);
  const [direction, setDirection] = useState(1);
  const image = images[index];

  const close = () => {
    setOpen(false);
    onClose();
  };

  const go = useCallback(
    (step: number) => {
      setDirection(step);
      onChange((index + step + images.length) % images.length);
    },
    [index, images.length, onChange]
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [go]);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
      }}
    >
      <DialogPortal forceMount>
        <AnimatePresence>
          {open ? (
            <DialogOverlay key="overlay" asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              />
            </DialogOverlay>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {open ? (
            <DialogContent
              key="content"
              asChild
              forceMount
              showCloseButton={false}
              className="inset-0 m-auto h-fit translate-x-0 translate-y-0"
              onOpenAutoFocus={(event) => event.preventDefault()}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="flex flex-col gap-4"
              >
                <div className="relative overflow-hidden rounded-sm bg-ink-900">
                  <div className="relative aspect-[16/10] w-full">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        width={1600}
                        height={1000}
                        initial={{ opacity: 0, x: direction * 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -40 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="absolute inset-0 h-full w-full object-contain"
                      />
                    </AnimatePresence>
                  </div>

                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous image"
                    className="group absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-cream-100/25 bg-ink-950/50 p-2.5 text-cream-100 backdrop-blur transition-colors hover:bg-ink-950/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  >
                    <ChevronLeft
                      className="h-5 w-5 transition-transform group-hover:-translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next image"
                    className="group absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-cream-100/25 bg-ink-950/50 p-2.5 text-cream-100 backdrop-blur transition-colors hover:bg-ink-950/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  >
                    <ChevronRight
                      className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close gallery"
                    className="absolute right-3 top-3 z-10 rounded-full border border-cream-100/25 bg-ink-950/50 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cream-100 backdrop-blur transition-colors hover:bg-ink-950/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  >
                    Close
                  </button>
                </div>

                <div className="flex items-baseline justify-between gap-6 px-1 pb-1">
                  <div>
                    <DialogTitle className="font-serif text-lg text-cream-100 sm:text-xl">
                      {image.caption ?? image.alt}
                    </DialogTitle>
                    <DialogDescription className="mt-1 text-cream-100/60">
                      {image.alt}
                    </DialogDescription>
                  </div>
                  <p className="shrink-0 text-[0.68rem] font-medium uppercase tracking-editorial text-gold-300">
                    {index + 1} / {images.length}
                  </p>
                </div>
              </motion.div>
            </DialogContent>
          ) : null}
        </AnimatePresence>
      </DialogPortal>
    </Dialog>
  );
}

export function LightboxHint({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs uppercase tracking-editorial text-ink-400", className)}>
      Select an image to open the gallery
    </p>
  );
}
