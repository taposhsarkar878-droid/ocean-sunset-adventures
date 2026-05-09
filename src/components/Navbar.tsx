import { Link } from "@tanstack/react-router";
import { Plane, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", to: "/" },
    { name: "Tours", to: "/" },
    { name: "Destinations", to: "/" },
    { name: "About", to: "/" },
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Plane className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">Worldwide Travel</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.name}>
              <a href="#" className="text-sm font-medium text-white/90 transition hover:text-accent">
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition hover:scale-105">
            Sign Up
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="text-white md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mx-6 rounded-2xl bg-background/95 p-6 shadow-xl backdrop-blur md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.name}>
                <a href="#" className="text-sm font-medium text-foreground">
                  {l.name}
                </a>
              </li>
            ))}
            <li>
              <button className="w-full rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
