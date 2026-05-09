import { Plane, Hotel, Map } from "lucide-react";

const services = [
  { icon: Plane, title: "Flight Booking", desc: "Best fares from 500+ airlines worldwide with instant confirmation." },
  { icon: Hotel, title: "Hotel Reservation", desc: "From boutique stays to luxury resorts at unbeatable prices." },
  { icon: Map, title: "Guided Tours", desc: "Local expert guides for unforgettable cultural experiences." },
];

export function Services() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-accent">
            Our Services
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything you need, in one place
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
