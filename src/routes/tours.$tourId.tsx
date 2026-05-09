import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Clock, Calendar, Star, Check, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getTourById } from "@/lib/tours";

export const Route = createFileRoute("/tours/$tourId")({
  component: TourDetailPage,
  notFoundComponent: () => (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="mx-auto max-w-3xl px-6 pt-40 pb-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Tour not found</h1>
        <p className="mt-2 text-muted-foreground">The tour you're looking for may have moved or sold out.</p>
        <Link to="/search" search={{ destination: "", date: "", budget: 0 }} className="mt-6 inline-block rounded-xl bg-accent px-6 py-3 font-semibold text-accent-foreground">
          Browse all tours
        </Link>
      </section>
      <Footer />
    </main>
  ),
  loader: ({ params }) => {
    const tour = getTourById(params.tourId);
    if (!tour) throw notFound();
    return { tour };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.tour.name} — Wanderly` },
          { name: "description", content: loaderData.tour.summary },
          { property: "og:title", content: `${loaderData.tour.name} — Wanderly` },
          { property: "og:description", content: loaderData.tour.summary },
          { property: "og:image", content: loaderData.tour.img },
        ]
      : [],
  }),
});

function TourDetailPage() {
  const { tour } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[520px] w-full overflow-hidden">
        <img src={tour.img} alt={tour.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-primary/40" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-12 pt-32">
          <Link
            to="/search"
            search={{ destination: "", date: "", budget: 0 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/25"
          >
            <ArrowLeft className="h-4 w-4" /> Back to results
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-white/90">
            <span className="inline-flex items-center gap-1.5 text-sm"><MapPin className="h-4 w-4" /> {tour.destination}, {tour.country}</span>
            <span className="inline-flex items-center gap-1.5 text-sm"><Clock className="h-4 w-4" /> {tour.durationDays} days</span>
            <span className="inline-flex items-center gap-1">
              {Array.from({ length: tour.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </span>
          </div>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">{tour.name}</h1>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Overview</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{tour.summary}</p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {tour.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Day-by-day itinerary</h2>
              <ol className="mt-6 space-y-4">
                {tour.itinerary.map((d) => (
                  <li key={d.day} className="flex gap-5 rounded-2xl border border-border bg-card p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                      D{d.day}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{d.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{d.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground">What's included</h3>
                <ul className="mt-4 space-y-2">
                  {tour.inclusions.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground">Not included</h3>
                <ul className="mt-4 space-y-2">
                  {tour.exclusions.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
              <div className="text-sm text-muted-foreground">Starting from</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">${tour.price}</span>
                <span className="text-sm text-muted-foreground">/ person</span>
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="h-4 w-4 text-primary" /> {tour.durationDays} days
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Calendar className="h-4 w-4 text-primary" /> Available {tour.availableFrom} → {tour.availableTo}
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> {tour.destination}, {tour.country}
                </div>
              </div>
              <button className="mt-6 w-full rounded-xl bg-accent py-4 font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition hover:scale-[1.02]">
                Book this tour
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">Free cancellation up to 30 days prior</p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
