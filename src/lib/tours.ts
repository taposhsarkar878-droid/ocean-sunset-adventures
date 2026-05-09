import bali from "@/assets/dest-bali.jpg";
import santorini from "@/assets/dest-santorini.jpg";
import swiss from "@/assets/dest-swiss.jpg";

export type Tour = {
  id: string;
  name: string;
  destination: string;
  country: string;
  price: number;
  rating: number;
  durationDays: number;
  img: string;
  // ISO dates the tour is available
  availableFrom: string;
  availableTo: string;
};

export const tours: Tour[] = [
  {
    id: "santorini-sunset",
    name: "Santorini Sunset Escape",
    destination: "Santorini",
    country: "Greece",
    price: 899,
    rating: 5,
    durationDays: 6,
    img: santorini,
    availableFrom: "2026-01-01",
    availableTo: "2026-12-31",
  },
  {
    id: "bali-bliss",
    name: "Bali Island Bliss",
    destination: "Bali",
    country: "Indonesia",
    price: 649,
    rating: 5,
    durationDays: 8,
    img: bali,
    availableFrom: "2026-01-01",
    availableTo: "2026-12-31",
  },
  {
    id: "swiss-peaks",
    name: "Swiss Alps Peaks Trek",
    destination: "Swiss Alps",
    country: "Switzerland",
    price: 1299,
    rating: 5,
    durationDays: 7,
    img: swiss,
    availableFrom: "2026-05-01",
    availableTo: "2026-10-31",
  },
  {
    id: "santorini-luxury",
    name: "Santorini Luxury Cruise",
    destination: "Santorini",
    country: "Greece",
    price: 1499,
    rating: 5,
    durationDays: 10,
    img: santorini,
    availableFrom: "2026-04-01",
    availableTo: "2026-10-31",
  },
  {
    id: "bali-budget",
    name: "Bali Backpacker Special",
    destination: "Bali",
    country: "Indonesia",
    price: 399,
    rating: 4,
    durationDays: 5,
    img: bali,
    availableFrom: "2026-01-01",
    availableTo: "2026-12-31",
  },
  {
    id: "swiss-winter",
    name: "Swiss Winter Wonderland",
    destination: "Swiss Alps",
    country: "Switzerland",
    price: 1799,
    rating: 5,
    durationDays: 9,
    img: swiss,
    availableFrom: "2026-11-01",
    availableTo: "2027-03-31",
  },
];

export type SearchFilters = {
  destination?: string;
  date?: string; // ISO yyyy-mm-dd
  budget?: number; // max price
};

export function filterTours(all: Tour[], f: SearchFilters): Tour[] {
  const q = f.destination?.trim().toLowerCase();
  return all.filter((t) => {
    if (q) {
      const hay = `${t.destination} ${t.country} ${t.name}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (f.budget && t.price > f.budget) return false;
    if (f.date) {
      if (f.date < t.availableFrom || f.date > t.availableTo) return false;
    }
    return true;
  });
}
