import bali from "@/assets/dest-bali.jpg";
import santorini from "@/assets/dest-santorini.jpg";
import swiss from "@/assets/dest-swiss.jpg";

export type ItineraryDay = { day: number; title: string; description: string };

export type Tour = {
  id: string;
  name: string;
  destination: string;
  country: string;
  price: number;
  rating: number;
  durationDays: number;
  img: string;
  availableFrom: string;
  availableTo: string;
  summary: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
};

const baliItinerary = (days: number): ItineraryDay[] =>
  [
    { day: 1, title: "Arrival in Denpasar", description: "Airport pickup, sunset welcome dinner in Seminyak." },
    { day: 2, title: "Ubud Cultural Day", description: "Sacred Monkey Forest, Tegallalang rice terraces, traditional dance." },
    { day: 3, title: "Mount Batur Sunrise Trek", description: "Pre-dawn volcano hike, breakfast at the summit, hot springs." },
    { day: 4, title: "Nusa Penida Island", description: "Speedboat to Kelingking Beach, snorkeling with manta rays." },
    { day: 5, title: "Uluwatu & Beaches", description: "Cliffside temple, Kecak fire dance, seafood at Jimbaran Bay." },
    { day: 6, title: "Spa & Wellness Day", description: "Balinese massage, yoga session, free afternoon." },
    { day: 7, title: "Gili Islands Day Trip", description: "Crystal-clear waters, snorkeling, beach lunch." },
    { day: 8, title: "Departure", description: "Breakfast and transfer to Denpasar airport." },
  ].slice(0, days);

const santoriniItinerary = (days: number): ItineraryDay[] =>
  [
    { day: 1, title: "Arrival in Fira", description: "Caldera-view check-in, evening stroll, welcome dinner." },
    { day: 2, title: "Oia Sunset Tour", description: "Walk Fira to Oia along the caldera, world-famous sunset." },
    { day: 3, title: "Catamaran Cruise", description: "Red Beach, hot springs, BBQ on board." },
    { day: 4, title: "Akrotiri & Wine Tour", description: "Bronze Age ruins, Assyrtiko tasting at three wineries." },
    { day: 5, title: "Volcano & Thirassia", description: "Hike Nea Kameni crater, swim in sulfur springs, lunch on Thirassia." },
    { day: 6, title: "Free Day & Farewell", description: "Beach time at Perissa, farewell dinner overlooking the caldera." },
    { day: 7, title: "Mykonos Day Trip", description: "Ferry to Mykonos, Little Venice, windmills." },
    { day: 8, title: "Private Yacht Experience", description: "Full-day yacht charter with chef and crew." },
    { day: 9, title: "Spa & Leisure", description: "Caldera-view spa, optional cooking class." },
    { day: 10, title: "Departure", description: "Breakfast and transfer to Santorini airport." },
  ].slice(0, days);

const swissItinerary = (days: number): ItineraryDay[] =>
  [
    { day: 1, title: "Arrival in Zurich", description: "Scenic train to Interlaken, alpine welcome dinner." },
    { day: 2, title: "Jungfraujoch — Top of Europe", description: "Cogwheel train to 3,454m, Ice Palace, glacier views." },
    { day: 3, title: "Lauterbrunnen Valley Hike", description: "72 waterfalls trail, lunch in Mürren, cable car descent." },
    { day: 4, title: "Lake Brienz Cruise", description: "Steamboat cruise, Giessbach Falls, Iseltwald village." },
    { day: 5, title: "Matterhorn Day", description: "Train to Zermatt, Gornergrat railway, photo at the Matterhorn." },
    { day: 6, title: "Lucerne & Mt. Pilatus", description: "Chapel Bridge, world's steepest cogwheel railway." },
    { day: 7, title: "Departure from Zurich", description: "Morning at leisure, transfer to airport." },
    { day: 8, title: "Ski Day in St. Moritz", description: "Lessons, gear, lift pass and après-ski." },
    { day: 9, title: "Glacier Express", description: "Panoramic rail journey across the Alps." },
  ].slice(0, days);

const baseInclusions = [
  "All accommodations (4★ or boutique)",
  "Daily breakfast and select meals",
  "Airport transfers",
  "Local English-speaking guide",
  "All entrance fees & activities listed",
  "Ground transportation in private vehicle",
];

const baseExclusions = [
  "International flights",
  "Travel insurance",
  "Personal expenses & gratuities",
  "Optional add-on excursions",
];

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
    summary:
      "A six-day immersion in the white-washed villages, volcanic beaches, and legendary sunsets of the Cyclades.",
    highlights: ["Caldera-view stays in Fira", "Oia sunset walk", "Catamaran cruise with BBQ", "Wine tasting at three wineries"],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    itinerary: santoriniItinerary(6),
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
    summary: "Eight days through Bali's temples, rice terraces, and turquoise islands — culture and beach in equal measure.",
    highlights: ["Mt. Batur sunrise trek", "Manta rays at Nusa Penida", "Uluwatu Kecak dance", "Gili Islands snorkel day"],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    itinerary: baliItinerary(8),
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
    summary: "A seven-day alpine grand tour from Interlaken to Zermatt with the best train rides in the world.",
    highlights: ["Jungfraujoch — Top of Europe", "Lauterbrunnen waterfalls hike", "Matterhorn at Gornergrat", "Lake Brienz steamboat"],
    inclusions: baseInclusions,
    exclusions: baseExclusions,
    itinerary: swissItinerary(7),
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
    summary: "Ten days across the Aegean with private yacht days, Mykonos hop, and the finest caldera-view suites.",
    highlights: ["Private yacht charter", "Mykonos day trip", "Caldera-view spa", "Two volcano excursions"],
    inclusions: [...baseInclusions, "Private yacht day with chef", "Caldera-view suite upgrade"],
    exclusions: baseExclusions,
    itinerary: santoriniItinerary(10),
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
    summary: "Five fast-paced days hitting Bali's must-see icons on a backpacker-friendly budget.",
    highlights: ["Mt. Batur sunrise hike", "Ubud rice terraces", "Uluwatu sunset", "Surf lesson at Kuta"],
    inclusions: ["Hostel & guesthouse stays", "Daily breakfast", "Airport transfers", "Local guide", "Group transport"],
    exclusions: baseExclusions,
    itinerary: baliItinerary(5),
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
    summary: "Nine days of skiing, fondue, and panoramic rail across snow-blanketed Switzerland.",
    highlights: ["St. Moritz ski day", "Glacier Express", "Jungfraujoch ice palace", "Lucerne old town"],
    inclusions: [...baseInclusions, "Ski lift pass & gear", "Glacier Express panoramic seat"],
    exclusions: baseExclusions,
    itinerary: swissItinerary(9),
  },
];

export function getTourById(id: string): Tour | undefined {
  return tours.find((t) => t.id === id);
}

export type SearchFilters = {
  destination?: string;
  date?: string;
  budget?: number;
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
