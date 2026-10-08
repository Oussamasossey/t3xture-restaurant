import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { MenuTabs } from "@/components/menu-tabs";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Menu | Starters, mains, desserts & drinks",
  description:
    "Browse Saveur's seasonal menu: starters, mains, desserts and drinks, with vegan, vegetarian and spicy dishes marked. The menu changes every Monday.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "The menu at Saveur",
    description:
      "A market-led menu of starters, mains, desserts and drinks, changed every Monday.",
    url: "https://saveur.example.com/menu",
  },
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="The menu"
        title="Written after the market, plated the same day"
        description="Twenty-five dishes across four sections, all of them marked for vegan, vegetarian and spicy. Everything is cooked to order over wood and fire."
      />

      <section className="section" aria-label="Menu categories">
        <div className="container">
          <MenuTabs />
        </div>
      </section>

      <CtaBand
        title="Hungry already?"
        body="Tell us what you cannot eat when you book and the kitchen will build around it."
      />
    </>
  );
}
