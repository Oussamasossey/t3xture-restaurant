"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { DishCard } from "@/components/dish-card";
import { Button } from "@/components/ui/button";
import {
  getDishesByCategory,
  MENU_CATEGORIES,
  type DishCategory,
} from "@/data/menu";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function MenuTabs() {
  const [active, setActive] = useState<DishCategory>("starters");
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();

  const category = MENU_CATEGORIES.find((c) => c.id === active)!;
  const dishes = getDishesByCategory(active);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = MENU_CATEGORIES.length - 1;
    let next = index;

    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;

    event.preventDefault();
    setActive(MENU_CATEGORIES[next].id);
    tabsRef.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Menu categories"
        className="-mx-5 flex gap-1 overflow-x-auto border-b border-border px-5 sm:mx-0 sm:justify-start sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {MENU_CATEGORIES.map((item, index) => {
          const isActive = item.id === active;

          return (
            <button
              key={item.id}
              ref={(el) => {
                tabsRef.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-controls={`${baseId}-panel-${item.id}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(item.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={cn(
                "relative shrink-0 whitespace-nowrap px-5 py-4 font-serif text-lg transition-colors duration-300 md:px-7 md:pb-5 md:text-xl",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-500",
                isActive ? "text-foreground" : "text-ink-400 hover:text-ink-700"
              )}
            >
              {item.label}
              {isActive ? (
                <motion.span
                  layoutId={`${baseId}-tab-indicator`}
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-gold-500"
                  transition={{ duration: 0.4, ease: EASE }}
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${active}`}
        aria-labelledby={`${baseId}-tab-${active}`}
        tabIndex={0}
        className="mt-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="max-w-3xl">
              <p className="eyebrow">{category.kicker}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                {category.description}
              </p>
            </div>

            <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {dishes.map((dish, index) => (
                <DishCard key={dish.id} dish={dish} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-16 flex flex-col items-start gap-5 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          The menu changes every Monday. Dietary requirements are handled gladly.
          Tell us when you book.
        </p>
        <Button variant="gold" size="lg" asChild>
          <Link href="/reservation">Reserve a table</Link>
        </Button>
      </div>
    </div>
  );
}
