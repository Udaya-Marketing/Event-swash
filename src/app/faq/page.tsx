import type { Metadata } from "next";
import { FaqList } from "@/components/faq-list";
import { FinalCta, PageIntro } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about Event Swash equipment rentals, reference pricing, delivery, event types and quotations in Bengaluru.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageIntro
        label="QUESTIONS, ANSWERED"
        title="A few useful details before the show."
        intro="Information based on the available Event Swash reference pages. Please confirm current rates and arrangements with the team."
      />
      <section className="section faq-page-section">
        <div className="faq-page-intro">
          <span className="eyebrow">EVENT SWASH · BENGALURU</span>
          <h2>Plan with the right information.</h2>
          <p>These answers summarize the accessible reference information and are not a substitute for a confirmed quotation.</p>
        </div>
        <FaqList categorized />
      </section>
      <FinalCta />
    </>
  );
}
