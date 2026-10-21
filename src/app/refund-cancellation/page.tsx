import type { Metadata } from "next";
import { legalDrafts } from "@/lib/content";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = {
  title: "Refund & Cancellation",
  description: "Draft refund and cancellation information for Event Swash. Confirm the current policy with the business.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/refund-cancellation" },
};
export default function Page() { return <LegalPage page={legalDrafts["refund-cancellation"]} />; }
