import heroImg from "@/assets/hero-travel.jpg";
import { MapPin, Calendar, Wallet, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export function Hero() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({
      to: "/search",
      search: {
        destination: destination.trim(),
        date,
        budget: Number(budget) || 0,
      },
    });
  };

  return (
    <section className="relative min-h-[760px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Tropical island paradise"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-background" />

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-40 text-center">
        <span className="mb-5 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
          ✈ Trusted by 50,000+ travelers
        </span>
        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          Explore the World, <span className="text-accent">One Adventure</span> at a Time
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
          Find exclusive deals on tours and travel packages curated by local experts.
        </p>
      </div>

      {/* Floating search bar */}
      <div className="absolute bottom-0 left-1/2 z-10 w-full max-w-5xl -translate-x-1/2 translate-y-1/2 px-6">
        <form onSubmit={onSubmit} className="rounded-2xl bg-card p-3 shadow-2xl ring-1 ring-border md:p-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
            <Field icon={<MapPin className="h-5 w-5 text-primary" />} label="Destination">
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where to?"
                className="bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground"
              />
            </Field>
            <Field icon={<Calendar className="h-5 w-5 text-primary" />} label="Travel Date">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground"
              />
            </Field>
            <Field icon={<Wallet className="h-5 w-5 text-primary" />} label="Max Budget (USD)">
              <input
                type="number"
                min={0}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Any budget"
                className="bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground"
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
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>
        {children}
      </div>
    </label>
  );
}
