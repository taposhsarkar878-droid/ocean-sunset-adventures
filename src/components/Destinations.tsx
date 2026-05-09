import bali from "@/assets/dest-bali.jpg";
import santorini from "@/assets/dest-santorini.jpg";
import swiss from "@/assets/dest-swiss.jpg";
import { Star, MapPin } from "lucide-react";

const destinations = [
  { img: santorini, name: "Santorini, Greece", price: 899, country: "Aegean Sea" },
  { img: bali, name: "Bali, Indonesia", price: 649, country: "Southeast Asia" },
  { img: swiss, name: "Swiss Alps", price: 1299, country: "Switzerland" },
];

export function Destinations() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Featured Destinations
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Top picks for your next escape
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Hand-selected destinations loved by our community of explorers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <article
              key={d.name}
              className="group overflow-hidden rounded-2xl bg-card shadow-lg ring-1 ring-border transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  Starting from ${d.price}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-1 flex items-center gap-1.5 text-xs text-white/80">
                    <MapPin className="h-3.5 w-3.5" />
                    {d.country}
                  </div>
                  <h3 className="text-xl font-bold">{d.name}</h3>
                  <div className="mt-2 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                    <span className="ml-1 text-sm font-medium">5.0</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
