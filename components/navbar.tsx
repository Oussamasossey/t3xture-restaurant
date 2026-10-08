"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Over the home hero the bar floats on the image; elsewhere it is solid.
  const isHome = pathname === "/";
  const solid = !isHome || scrolled || open;

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 32));

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500",
          solid
            ? "border-b border-border bg-background/92 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-ink-950/55 to-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 md:h-24 lg:px-12">
          <Link
            href="/"
            className={cn(
              "group flex items-center gap-2.5 transition-colors duration-500",
              solid ? "text-foreground" : "text-cream-100"
            )}
            aria-label="Saveur, home"
          >
            <span className="font-serif text-xl uppercase tracking-[0.34em] md:text-2xl">
              Saveur
            </span>
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rotate-45 bg-gold-500 transition-transform duration-500 group-hover:rotate-[135deg]"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
            {LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative text-[0.7rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-gold-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full",
                    solid
                      ? active
                        ? "text-gold-800 after:w-full"
                        : "text-ink-600 hover:text-foreground"
                      : active
                        ? "text-cream-100 after:w-full"
                        : "text-cream-100/75 hover:text-cream-100"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant={solid ? "gold" : "outlineLight"}
              size="sm"
              className="hidden sm:inline-flex"
              asChild
            >
              <Link href="/reservation">Reserve</Link>
            </Button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-sm transition-colors duration-300 md:hidden",
                solid
                  ? "text-foreground hover:bg-secondary"
                  : "text-cream-100 hover:bg-cream-100/10"
              )}
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <MenuIcon className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-background px-6 pt-24 md:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.06 * index + 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-baseline gap-4 border-b border-border py-5 font-serif text-4xl text-foreground transition-colors hover:text-gold-800"
                  >
                    <span className="text-xs font-sans tracking-editorial text-gold-600">
                      0{index + 1}
                    </span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.32 }}
              className="mt-10 flex flex-col gap-4"
            >
              <Button variant="gold" size="lg" asChild>
                <Link href="/reservation">Reserve a table</Link>
              </Button>
              <p className="text-xs leading-relaxed text-muted-foreground">
                148 Alder Lane, San Francisco · +1 (415) 555-0148
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
