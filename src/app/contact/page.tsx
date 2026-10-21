import type { Metadata } from "next";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/site-ui";
import { siteDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact & Event Enquiry",
  description:
    "Contact Event Swash in Bengaluru by phone, email or WhatsApp, or prepare an event AV enquiry.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="CONTACT · BENGALURU"
        title="Tell us what the room needs to do."
        intro="Share your event date, venue, audience size and equipment requirements. We’ll help you explore a suitable AV setup."
      />
      <section className="section contact-section">
        <div className="contact-details">
          <span className="eyebrow">DIRECT LINE TO THE TEAM</span>
          <h2>Let’s get the details in place.</h2>
          <a className="contact-method" href={`tel:${siteDetails.phone.replaceAll(" ", "")}`}>
            <Phone size={18} /><span><small>CALL</small>{siteDetails.phone}</span><ArrowUpRight size={16} />
          </a>
          <a className="contact-method" href={`https://wa.me/${siteDetails.whatsapp}?text=Hello%20Event%20Swash%2C%20I%27d%20like%20to%20discuss%20an%20event.`} target="_blank" rel="noopener noreferrer">
            <span className="whatsapp-symbol">WA</span><span><small>WHATSAPP</small>+91 85500 11040</span><ArrowUpRight size={16} />
          </a>
          {siteDetails.emails.map((email) => (
            <a className="contact-method" href={`mailto:${email}`} key={email}>
              <Mail size={18} /><span><small>EMAIL</small>{email}</span><ArrowUpRight size={16} />
            </a>
          ))}
          <a className="contact-method contact-address" href={siteDetails.mapUrl} target="_blank" rel="noopener noreferrer">
            <MapPin size={18} /><span><small>ADDRESS · DIRECTIONS</small>{siteDetails.address}</span><ArrowUpRight size={16} />
          </a>
          <p className="source-confirmation">Contact details supplied in the project brief. Confirm before launch.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
