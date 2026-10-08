import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Info, Phone } from "lucide-react";

import { OpeningHours } from "@/components/opening-hours";
import { PageHeader } from "@/components/page-header";
import { ReservationForm } from "@/components/reservation-form";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Reserve a table",
  description:
    "Request a table at Saveur. Choose your date, time and party size.",
  alternates: { canonical: "/reservation" },
  openGraph: {
    title: "Reserve a table at Saveur",
    description: "Pick a date, a sitting and a party size for dinner on Alder Lane.",
    url: "https://saveur.example.com/reservation",
  },
};

export default function ReservationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reservations"
        title="Request a table"
        description="Tables open thirty days ahead. We confirm every booking by phone within a few hours of the request."
      />

      <section className="section" aria-label="Reservation request form">
        <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="rounded-sm border border-border bg-card p-6 sm:p-9">
              <h2 className="display-title text-3xl">Your details</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Everything except the notes field is required. Confirmation
                happens by phone, never by bot.
              </p>
              <div className="mt-8">
                <ReservationForm />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5 xl:col-span-4" aria-label="Reservation information">
            <div className="rounded-sm border border-border bg-cream-200/70 p-6 sm:p-8">
              <h2 className="flex items-center gap-2 font-serif text-2xl">
                <Clock className="h-5 w-5 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
                Service hours
              </h2>
              <OpeningHours className="mt-6" />
            </div>

            <div className="mt-6 rounded-sm border border-border bg-card p-6 sm:p-8">
              <h2 className="flex items-center gap-2 font-serif text-2xl">
                <Info className="h-5 w-5 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
                Good to know
              </h2>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li>
                  Parties of one to twelve can book online. Larger groups, please call
                  the restaurant directly.
                </li>
                <li>
                  We hold tables for fifteen minutes past the booked time.
                </li>
                <li>
                  The dining room is on the ground floor and step-free; the bar
                  has two high stools.
                </li>
                <li>
                  Tell us about allergies in the notes and the kitchen will
                  adapt the menu.
                </li>
              </ul>

              <div className="mt-7 flex flex-col gap-3 border-t border-border pt-6">
                <Button variant="outline" asChild>
                  <Link href={SITE.phoneHref}>
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {SITE.phone}
                  </Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
