"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, Users } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const reservationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please tell us the name for the booking." })
    .max(80, { message: "That name is a little long for our book." }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter a reachable phone number." })
    .regex(/^[+()\d\s.-]{7,20}$/, {
      message: "Use digits only, e.g. +1 (415) 555-0148.",
    }),
  date: z
    .string()
    .min(1, { message: "Choose a date for your table." })
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: "That date does not look right.",
    }),
  time: z.string().min(1, { message: "Choose a sitting time." }),
  guests: z
    .number({ message: "How many guests are joining?" })
    .int("Guests must be a whole number.")
    .min(1, { message: "At least one guest, please." })
    .max(12, { message: "For parties above 12, call us directly." }),
  notes: z
    .string()
    .max(500, { message: "Keep notes under 500 characters." })
    .optional()
    .or(z.literal("")),
});

export type ReservationInput = z.infer<typeof reservationSchema>;

/** Local date (yyyy-mm-dd) so min stays correct in the visitor's timezone. */
function todayIso() {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

const SLOTS = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

const formatTime = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  const suffix = hour >= 12 ? "pm" : "am";
  const display = hour % 12 === 0 ? 12 : hour % 12;
  return `${display}:${String(minute).padStart(2, "0")} ${suffix}`;
};

const formatGuests = (guests: number) =>
  `${guests} ${guests === 1 ? "guest" : "guests"}`;

export function ReservationForm() {
  const [confirmed, setConfirmed] = useState<ReservationInput | null>(null);
  const min = todayIso();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationInput>({
    resolver: zodResolver(reservationSchema),
    defaultValues: { name: "", phone: "", date: "", time: "", guests: 2, notes: "" },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ReservationInput> = (values) => {
    // No request is sent anywhere yet.
    setConfirmed(values);
  };

  const fieldError = (name: keyof ReservationInput) =>
    errors[name]?.message as string | undefined;

  const summary: Array<{ label: string; value: string }> = confirmed
    ? [
        {
          label: "Date",
          value: new Date(`${confirmed.date}T00:00:00`).toLocaleDateString(
            "en-US",
            { weekday: "long", day: "numeric", month: "long", year: "numeric" }
          ),
        },
        { label: "Time", value: formatTime(confirmed.time) },
        { label: "Party size", value: formatGuests(confirmed.guests) },
        { label: "Contact", value: confirmed.phone },
        ...(confirmed.notes
          ? [{ label: "Notes", value: confirmed.notes }]
          : []),
      ]
    : [];

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {confirmed ? (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-sm border border-gold-300/60 bg-gold-100/50 p-8 sm:p-10"
            role="status"
            aria-live="polite"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-ink-950">
              <CircleCheck className="h-6 w-6" strokeWidth={1.75} />
            </div>

            <h2 className="display-title mt-6 text-3xl sm:text-4xl">
              Thank you, {confirmed.name.split(" ")[0]}.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
              Your request for the details below has been received. Please keep this
              summary until the restaurant confirms your table.
            </p>

            <dl className="mt-8 grid gap-px overflow-hidden rounded-sm border border-gold-300/50 bg-gold-300/50 sm:grid-cols-2">
              {summary.map((row) => (
                <div key={row.label} className="bg-cream-50 px-5 py-4">
                  <dt className="text-[0.62rem] font-semibold uppercase tracking-editorial text-gold-800">
                    {row.label}
                  </dt>
                  <dd className="mt-1.5 font-serif text-lg text-foreground">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <Button
              variant="outline"
              className="mt-8"
              onClick={() => {
                setConfirmed(null);
                reset();
              }}
            >
              Make another reservation
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="grid gap-6 sm:grid-cols-2"
          >
            <div className="sm:col-span-2">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                autoComplete="name"
                placeholder="Élodie Marchand"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="mt-2"
                {...register("name")}
              />
              <FieldError id="name-error" message={fieldError("name")} />
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+1 (415) 555-0148"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className="mt-2"
                {...register("phone")}
              />
              <FieldError id="phone-error" message={fieldError("phone")} />
            </div>

            <div>
              <Label htmlFor="guests">Guests</Label>
              <div className="relative mt-2">
                <select
                  id="guests"
                  aria-invalid={!!errors.guests}
                  aria-describedby={errors.guests ? "guests-error" : undefined}
                  className={cn(
                    "h-11 w-full appearance-none rounded-sm border border-input bg-cream-50 px-4 pr-10 text-sm text-foreground transition-colors focus-visible:border-gold-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500",
                    errors.guests && "border-destructive"
                  )}
                  {...register("guests", { valueAsNumber: true })}
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
                <Users
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
                />
              </div>
              <FieldError id="guests-error" message={fieldError("guests")} />
            </div>

            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                min={min}
                aria-invalid={!!errors.date}
                aria-describedby={errors.date ? "date-error" : undefined}
                className="mt-2"
                {...register("date")}
              />
              <FieldError id="date-error" message={fieldError("date")} />
            </div>

            <div>
              <Label htmlFor="time">Time</Label>
              <div className="relative mt-2">
                <select
                  id="time"
                  aria-invalid={!!errors.time}
                  aria-describedby={errors.time ? "time-error" : undefined}
                  className={cn(
                    "h-11 w-full appearance-none rounded-sm border border-input bg-cream-50 px-4 pr-10 text-sm text-foreground transition-colors focus-visible:border-gold-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-500",
                    errors.time && "border-destructive"
                  )}
                  {...register("time")}
                >
                  <option value="">Select a sitting</option>
                  {SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {formatTime(slot)}
                    </option>
                  ))}
                </select>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-r border-ink-400"
                />
              </div>
              <FieldError id="time-error" message={fieldError("time")} />
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="notes">
                Notes <span className="normal-case tracking-normal text-ink-400">(optional)</span>
              </Label>
              <Textarea
                id="notes"
                rows={4}
                placeholder="Allergies, celebrations, seating preferences…"
                aria-invalid={!!errors.notes}
                aria-describedby={errors.notes ? "notes-error" : undefined}
                className="mt-2"
                {...register("notes")}
              />
              <FieldError id="notes-error" message={fieldError("notes")} />
            </div>

            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
                No payment is taken. We hold tables for 15 minutes past the
                booked time.
              </p>
              <Button
                type="submit"
                variant="gold"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                Request this table
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-xs font-medium text-destructive">
      {message}
    </p>
  );
}
