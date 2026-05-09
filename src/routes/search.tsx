import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useState } from "react";
import { MapPin, Calendar, Wallet, Search, Star, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { tours, filterTours } from "@/lib/tours";

const searchSchema = z.object({
  destination: fallback(z.string(), "").default(""),
  date: fallback(z.string(), "").default(""),
  budget: fallback(z.number(), 0).default(0),
});

export const Route = createFileRoute("/search")({
  validateSearch: zodValidator(searchSchema),
  component: SearchPage,
  head: () => ({
    meta: [
      { title: "Search Results — Wanderly" },
      { name: "description", content: "Browse curated tours matching your destination, date, and budget." },
      { property: "og:title", content: "Search Results — Wanderly" },
      { property: "og:description", content: "Browse curated tours matching your destination, date, and budget." },
    ],
  }),
});

function SearchPage() {
  const { destination, date, budget } = Route.useSearch();
  const navigate = useNavigate({ from: "/search" });

  const [destInput, setDestInput] = useState(destination);
  const [dateInput, setDateInput] = useState(date);
  const [budgetInput, setBudgetInput] = useState(budget ? String(budget) : "");

  const results = filterTours(tours, {
    destination,
    date: date || undefined,
    budget: budget || undefined,
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({
      search: {
        destination: destInput.trim(),
        date: dateInput,
        budget: Number(budgetInput) || 0,
      },
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary pb-16 pt-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <h1 className="text-3xl font-bold md:text-4xl">Find your perfect trip</h1>
          <p className="mt-2 text-white/80">Refine your search to discover matching tours.</p>

          <form onSubmit={onSubmit} className="mt-8 rounded-2xl bg-card p-3 text-foreground shadow-2xl md:p-4">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
              <Field icon={<MapPin className="h-5 w-5 text-primary" />} label="Destination">
                <input
                  value={destInput}
                  onChange={(e) => setDestInput(e.target.value)}
                  placeholder="Where to?"
                  className="bg-transparent text-sm font-medium outline-none placeholder:text-muted-foreground"
                />
              </Field>
              <Field icon={<Calendar className="h-5 w-5 text-primary" />} label="Travel Date">
                <input
                  type="date"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                  className="bg-transparent text-sm font-medium outline-none placeholder:text-muted-foreground"
                />
              </Field>
              <Field icon={<Wallet className="h-5 w-5 text-primary" />} label="Max Budget (USD)">
                <input
                  type="number"
                  min={0}
                  value={budgetInput}
                  onChange={(e) => setBudgetInput(e.target.value)}
                  placeholder="Any budget"
                  className="bg-transparent text-sm font-medium outline-none placeholder:text-muted-foreground"
                />
              </Field>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition hover:scale-[1.02]"
              >
                <Search className="h-5 w-5" />
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {results.length} {results.length === 1 ? "tour" : "tours"} found
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {summarize({ destination, date, budget })}
            </p>
          </div>
        </div>

        {results.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <p className="text-lg font-semibold text-foreground">No tours match your filters</p>
            <p className="mt-2 text-sm text-muted-foreground">Try widening your budget or clearing the destination.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {results.map((t) => (
              <Link
                key={t.id}
                to="/tours/$tourId"
                params={{ tourId: t.id }}
                className="group block overflow-hidden rounded-2xl bg-card shadow-lg ring-1 ring-border transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <article>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                      Starting from ${t.price}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="mb-1 flex items-center gap-1.5 text-xs text-white/80">
                        <MapPin className="h-3.5 w-3.5" />
                        {t.country} · {t.durationDays} days
                      </div>
                      <h3 className="text-xl font-bold">{t.name}</h3>
                      <div className="mt-2 flex items-center gap-1">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                        <span className="ml-1 text-sm font-medium">{t.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">{icon}</div>
      <div className="flex flex-col text-left">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>
        {children}
      </div>
    </label>
  );
}

function summarize({ destination, date, budget }: { destination: string; date: string; budget: number }) {
  const parts: string[] = [];
  if (destination) parts.push(`Destination: ${destination}`);
  if (date) parts.push(`Date: ${date}`);
  if (budget) parts.push(`Budget: up to $${budget}`);
  return parts.length ? parts.join(" · ") : "Showing all available tours";
}
