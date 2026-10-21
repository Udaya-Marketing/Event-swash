import type { Metadata } from "next";
import { legalDrafts } from "@/lib/content";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Draft rental terms for Event Swash. Confirm approved rental conditions with the business before booking.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/terms-and-conditions" },
};
export default function Page() { return <LegalPage page={legalDrafts["terms-and-conditions"]} />; }
