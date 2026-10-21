import type { Metadata } from "next";
import { CatalogueClient } from "@/components/catalogue-client";
import { PageIntro } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Equipment Catalogue",
  description:
    "Browse Event Swash reference listings for LED walls, projectors and audio equipment rentals in Bengaluru. Confirm current rates and details before booking.",
  alternates: { canonical: "/catalogue" },
};

export default function CataloguePage() {
  return (
    <>
      <PageIntro
        label="EQUIPMENT · BENGALURU"
        title="Good gear for a room that needs to come alive."
        intro="Search the available reference listings, compare published rates and build an equipment list to discuss with Event Swash."
      />
      <section className="section catalogue-section">
        <CatalogueClient />
      </section>
    </>
  );
}
