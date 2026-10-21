import type { Metadata } from "next";
import { legalDrafts } from "@/lib/content";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important information about Event Swash catalogue reference rates, product details and availability.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/disclaimer" },
};
export default function Page() { return <LegalPage page={legalDrafts.disclaimer} />; }
