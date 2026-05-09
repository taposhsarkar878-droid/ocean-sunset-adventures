import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Destinations } from "@/components/Destinations";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Wanderly — Explore the World, One Adventure at a Time" },
      { name: "description", content: "Find exclusive deals on tours and travel packages curated by local experts. Flights, hotels, and guided tours." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="pt-24" />
      <Destinations />
      <Services />
      <Footer />
    </main>
  );
}
