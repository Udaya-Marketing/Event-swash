import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EditorialImage, FinalCta, PageIntro } from "@/components/site-ui";
import { imageSet } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Event Swash",
  description:
    "Learn how Event Swash approaches event AV equipment rental, pricing, quality checks and delivery in Bengaluru.",
  alternates: { canonical: "/why-us" },
};

const reasons = [
  ["01", "Delivery & pickup", "The reference site says equipment is delivered to your venue, set up and collected after the event. Confirm the arrangement for your venue."],
  ["02", "Pricing you can start with", "Published reference rates help frame an enquiry. Prices are negotiable and the final quotation must be confirmed by Event Swash."],
  ["03", "Checked before dispatch", "The business states that each unit is quality-checked before dispatch. Ask the team about the kit and setup suited to your event."],
  ["04", "Equipment for the full room", "The reference mentions sound, lighting, LED, projection, displays, accessories, trussing and special effects. Confirm current models and availability."],
];

export default function WhyUsPage() {
  return (
    <>
      <PageIntro
        label="WHY EVENT SWASH"
        title="The kit matters. The care around it matters more."
        intro="A practical AV partner for the moving parts of your event, from first equipment list to collection after the show."
      />
      <section className="section why-page-feature">
        <div className="why-page-copy">
          <span className="eyebrow">THOUGHTFUL PRODUCTION, FROM THE START</span>
          <h2>Make your plan work for the room you have.</h2>
          <p>
            Venue, audience, schedule and content all shape the setup. Share those
            details early and the team can help you work through the equipment
            choices before a final quote is confirmed.
          </p>
          <Link className="text-link" href="/contact">Discuss your event <ArrowUpRight size={16} /></Link>
        </div>
        <EditorialImage src={imageSet.conference} alt="Conference event with presentation screens" />
      </section>
      <section className="reasons-section section section-paper">
        {reasons.map(([number, title, body]) => (
          <article key={number} className="reason-row">
            <span className="reason-number">{number}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <section className="section process-detail">
        <span className="eyebrow">A STRAIGHTFORWARD PROCESS</span>
        <h2>Brief. Configuration. Confirmed plan.</h2>
        <div className="process-steps compact">
          <div><span>01</span><h3>Tell us the essentials</h3><p>Date, venue, audience and what the event needs to do.</p></div>
          <div><span>02</span><h3>Discuss the equipment</h3><p>Work through a suggested configuration and quotation with the team.</p></div>
          <div><span>03</span><h3>Confirm arrangements</h3><p>Agree on the scope, rates, transport and event-day arrangements directly.</p></div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
