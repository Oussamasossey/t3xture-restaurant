"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { formatPrice, type Dish, type DishTag } from "@/data/menu";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const TAG_VARIANT: Record<DishTag, "sage" | "ember" | "gold"> = {
  vegan: "sage",
  vegetarian: "sage",
  spicy: "ember",
  signature: "gold",
};

interface DishCardProps {
  dish: Dish;
  /** Stagger offset when a grid of cards mounts together. */
  index?: number;
  className?: string;
}

export function DishCard({ dish, index = 0, className }: DishCardProps) {
  return (
    <motion.article
      className={cn("group flex h-full flex-col", className)}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE, delay: Math.min(index, 6) * 0.07 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cream-200">
        <Image
          src={dish.image}
          alt={dish.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-ink-950/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {dish.tags.length > 0 ? (
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {dish.tags.map((tag) => (
              <Badge key={tag} variant={TAG_VARIANT[tag]}>
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-5 flex items-baseline gap-3">
        <h3 className="font-serif text-xl leading-snug transition-colors duration-300 group-hover:text-gold-800">
          {dish.name}
        </h3>
        <span
          aria-hidden="true"
          className="h-px min-w-6 flex-1 self-center bg-border transition-colors duration-300 group-hover:bg-gold-400"
        />
        <span className="font-serif text-lg tabular-nums text-gold-700">
          {formatPrice(dish.price)}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
        {dish.description}
      </p>
    </motion.article>
  );
}
