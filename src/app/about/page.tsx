import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EditorialImage, FinalCta, PageIntro } from "@/components/site-ui";
import { imageSet } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Event Swash",
  description:
    "Meet Event Swash, a Bengaluru audio-visual equipment rental company established in 2023.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="ABOUT EVENT SWASH"
        title="The right details make the whole room feel different."
        intro="An audio-visual rental partner based in Bengaluru, working across sound, lighting, trussing and LED screens."
      />
      <section className="section story-section">
        <EditorialImage src={imageSet.rig} alt="Concert stage production with event lighting" className="story-image" loading="eager" />
        <div className="story-copy">
          <span className="eyebrow">BENGALURU · ESTABLISHED 2023</span>
          <h2>Good events are built with care, not just equipment.</h2>
          <p>
            Event Swash provides audio-visual equipment rental solutions for events
            of different sizes and budgets. The range described by the business
            includes sound, lighting, trussing, LED screens, projection and
            displays.
          </p>
          <p>
            The company describes its approach as attentive to detail, quality
            of work, creative problem-solving and successful collaboration with
            clients. Share the shape of your event and the team can help discuss
            an appropriate setup.
          </p>
          <Link className="text-link" href="/contact">Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
      </section>
      <section className="about-facts section section-paper">
        <div><span className="eyebrow">ESTABLISHED</span><strong>2023</strong><p>Event Swash is based in Bengaluru.</p></div>
        <div><span className="eyebrow">TEAM EXPERIENCE</span><strong>4 to 6 years</strong><p>Combined experience as stated in the source brief; confirm before publication.</p></div>
        <div><span className="eyebrow">PROPRIETOR</span><strong>Vivek</strong><p>Name and role supplied in the brief; confirmation recommended.</p></div>
      </section>
      <FinalCta />
    </>
  );
}
