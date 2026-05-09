import heroImg from "@/assets/hero-travel.jpg";
import { MapPin, Calendar, Wallet, Search } from "lucide-react";

export function Hero() {
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
        <div className="rounded-2xl bg-card p-3 shadow-2xl ring-1 ring-border md:p-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
            <SearchField icon={<MapPin className="h-5 w-5 text-primary" />} label="Destination" placeholder="Where to?" />
            <SearchField icon={<Calendar className="h-5 w-5 text-primary" />} label="Travel Date" placeholder="Add dates" />
            <SearchField icon={<Wallet className="h-5 w-5 text-primary" />} label="Budget" placeholder="Any budget" />
            <button className="flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition hover:scale-[1.02]">
              <Search className="h-5 w-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchField({ icon, label, placeholder }: { icon: React.ReactNode; label: string; placeholder: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-secondary">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</span>
        <input className="bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground" placeholder={placeholder} />
      </div>
    </div>
  );
}
