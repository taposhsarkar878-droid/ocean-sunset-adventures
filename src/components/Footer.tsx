import { Plane, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Plane className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">Wanderly</span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Crafting unforgettable journeys since 2010. Your adventure starts here.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-accent hover:text-accent-foreground">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {["Destinations", "Tours", "Hotels", "Flights", "Travel Guides"].map((l) => (
                <li key={l}><a href="#" className="hover:text-accent">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /><span>221B Baker St, London</span></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /><span>+1 (555) 123-4567</span></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /><span>hello@wanderly.com</span></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Newsletter</h4>
            <p className="mb-4 text-sm text-primary-foreground/80">Get exclusive deals delivered to your inbox.</p>
            <form className="flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 outline-none ring-1 ring-white/20 focus:ring-accent"
              />
              <button className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} Wanderly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
