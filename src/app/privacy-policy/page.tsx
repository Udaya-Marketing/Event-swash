import type { Metadata } from "next";
import { legalDrafts } from "@/lib/content";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Draft privacy policy for Event Swash. This page requires business and legal review before publication.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy-policy" },
};
export default function Page() { return <LegalPage page={legalDrafts["privacy-policy"]} />; }
