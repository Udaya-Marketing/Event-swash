import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EventDatePlanner } from "@/components/event-date-planner";
import { FaqList } from "@/components/faq-list";
import { FinalCta, ProductCard, SectionHeading, EditorialImage } from "@/components/site-ui";
import { buildWhatsAppUrl, imageSet } from "@/lib/content";
import { products } from "@/lib/products";

const services = [
  {
    number: "01",
    name: "Conferences & summits",
    description: "LED walls, podium microphones, confidence displays and show control.",
    image: imageSet.conference,
    alt: "Conference venue prepared for a live audience",
    className: "service-large",
  },
  {
    number: "02",
    name: "Launches & town halls",
    description: "Stage lighting, line-array sound and live video switching.",
    image: imageSet.launch,
    alt: "Live stage with event lighting and screens",
    className: "service-offset",
  },
  {
    number: "03",
    name: "Weddings & receptions",
    description: "Entry effects, cold fire, haze and full-venue sound.",
    image: imageSet.wedding,
    alt: "Wedding reception space ready for a celebration",
    className: "",
  },
  {
    number: "04",
    name: "Concerts & exhibitions",
    description: "Outdoor LED screens, moving-head lighting and high-output PA systems.",
    image: imageSet.concert,
    alt: "Concert crowd and stage production",
    className: "service-offset service-last",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero hero-editorial">
        <div className="hero-editorial-inner">
          <div className="hero-brand-art">
            <p className="hero-display-wordmark" aria-hidden="true">EVENT SWASH</p>
            <div className="hero-editorial-image">
              <EditorialImage
                src={imageSet.hero}
                alt="Event production stage with colorful LED video screens"
                className="hero-editorial-image-content"
                loading="eager"
                sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1200px) 84vw, 1000px"
              />
              <span className="hero-image-label">AUDIO · LIGHTING · LED · AV RENTALS — BENGALURU</span>
            </div>
          </div>
          <div className="hero-editorial-bottom">
            <div className="hero-copy">
              <h1>Complete audio-visual solutions for events of every scale.</h1>
              <p>
                Sound systems, stage lighting, trussing, LED walls, projection and
                displays. Delivered to your venue, set up, then picked up after the show.
              </p>
              <div className="hero-actions">
                <Link className="button button-lime" href="/catalogue">
                  Browse the catalogue <ArrowUpRight size={16} />
                </Link>
                <a className="hero-whatsapp" href={buildWhatsAppUrl("Hello Event Swash, I'd like to discuss an event.")} target="_blank" rel="noopener noreferrer">
                  WhatsApp us <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
            <Link className="hero-round-link" href="#events" aria-label="Explore event setups">
              <ArrowUpRight size={34} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="About Event Swash">
        <div><span>ESTABLISHED</span><strong>2023</strong></div>
        <div><span>TEAM EXPERIENCE</span><strong>4 to 6 years</strong></div>
        <div><span>PRODUCTS & PACKAGES</span><strong>52 reported</strong></div>
        <p>The source homepage reports 52 products and packages. Only {products.length} price examples were accessible; the full inventory and current rates need confirmation. Team experience is reported as 4 to 6 years.</p>
      </section>
      <EventDatePlanner />

      <section className="section services-section" id="events">
        <div className="services-intro">
          <SectionHeading
            label="MADE FOR THE MOMENT"
            title="One partner for every audio-visual need."
            description="Tailored AV setups for corporate events, conferences, weddings and concerts — for different audience sizes and budgets."
          />
          <Link className="text-link" href="/contact">Talk through your event <ArrowUpRight size={16} /></Link>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className={`service-item ${service.className}`} key={service.number}>
              <Link className="service-image" href="/contact" aria-label={`Request a setup for ${service.name}`}>
                <EditorialImage src={service.image} alt={service.alt} />
                <span className="service-number">{service.number}</span>
                <span className="service-arrow"><ArrowUpRight size={19} /></span>
              </Link>
              <div className="service-copy">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="equipment-section section-dark">
        <div className="section equipment-inner">
          <div className="equipment-heading-row">
            <SectionHeading
              label="THE EQUIPMENT"
              title="Find the right gear for your event."
              description="Explore reference listings across LED, projection and audio. Ask us to verify a full setup for your venue."
              light
            />
            <Link className="text-link text-link-light" href="/catalogue">View the catalogue <ArrowUpRight size={16} /></Link>
          </div>
          <div className="product-grid home-product-grid">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <p className="pricing-footnote">Published reference rates shown. Current prices, specifications, availability and transport are subject to confirmation. Images are illustrative and do not confirm Event Swash inventory.</p>
        </div>
      </section>

      <section className="equipment-checklist section section-paper">
        <div className="checklist-intro">
          <span className="eyebrow">A USEFUL STARTING POINT</span>
          <h2>What equipment might your event need?</h2>
          <p>Build a setup around the room, audience and programme. These are equipment types described in the available Event Swash information; ask the team to confirm current models and availability.</p>
        </div>
        <div className="checklist-items">
          <article>
            <span>01 · SOUND</span>
            <h3>Make every word and note count.</h3>
            <p>Sound systems and line-array packages, speakers, audio mixers and podium microphones.</p>
            <small>Brands named in the reference: JBL · RCF · QSC</small>
          </article>
          <article>
            <span>02 · LIGHTING & STAGE</span>
            <h3>Shape the room and the moment.</h3>
            <p>Stage and effect lighting, moving-head lights and trussing for event production.</p>
            <small>Suitable configurations depend on the venue and event plan.</small>
          </article>
          <article>
            <span>03 · SCREENS & PROJECTION</span>
            <h3>Bring presentations into view.</h3>
            <p>P2 and P3 LED walls, projectors, 43–75 inch TVs, touch screens and displays.</p>
            <small>Share viewing distance, content and room size when enquiring.</small>
          </article>
          <article>
            <span>04 · EFFECTS & ACCESSORIES</span>
            <h3>Add the finishing touches.</h3>
            <p>AV accessories, smoke, haze, cold fire and confetti blasters.</p>
            <small>Confirm suitability, permissions and setup details with the team.</small>
          </article>
        </div>
      </section>

      <section className="why-section section">
        <div className="why-image-wrap">
          <EditorialImage src={imageSet.rig} alt="Lighting truss and production lighting above an event stage" />
          <span className="image-caption">BUILT AROUND THE SHOW, NOT JUST THE KIT.</span>
        </div>
        <div className="why-copy">
          <SectionHeading
            label="WHY EVENT SWASH"
            title="Equipment that shows up ready. People who know the show."
            description="Good event technology is more than a spec sheet. It is the right kit, handled with care, and a team that can help you think it through."
          />
          <div className="why-list">
            <div><span>01</span><p><strong>Delivery & pickup</strong>Equipment delivered to the venue and collected after the event, by arrangement.</p></div>
            <div><span>02</span><p><strong>Upfront reference rates</strong>Published rates give you a place to start; the final quote is confirmed by the team.</p></div>
            <div><span>03</span><p><strong>Quality-checked equipment</strong>Every unit is quality-checked before dispatch, as stated by the business.</p></div>
            <div><span>04</span><p><strong>Helpful human support</strong>Get help choosing equipment around your venue, audience and event plan.</p></div>
          </div>
          <Link className="text-link" href="/why-us">More about how we work <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="process-section section section-paper">
        <div className="process-heading">
          <SectionHeading label="THE RENTAL PROCESS" title="From your brief to show time." />
          <p>Clear steps, with the details confirmed together before the event.</p>
        </div>
        <div className="process-steps">
          <div><span>01</span><h3>Share your brief</h3><p>Send the event date, venue, audience size and equipment requirements.</p></div>
          <div><span>02</span><h3>Get a configuration</h3><p>The team can recommend suitable equipment and provide a quotation.</p></div>
          <div><span>03</span><h3>Delivery & setup</h3><p>Equipment is delivered and set up according to the agreed arrangement.</p></div>
          <div><span>04</span><h3>Show & pickup</h3><p>Event needs are handled as agreed, with collection arranged after the event.</p></div>
        </div>
      </section>

      <section className="about-teaser section">
        <div className="about-teaser-copy">
          <span className="eyebrow">ROOTED IN BENGALURU · EST. 2023</span>
          <h2>Your trusted AV partner since 2023.</h2>
          <p>
            Event Swash provides audio, lighting, trussing and LED screen rentals
            for events of different sizes and budgets. The work is guided by
            attention to detail, quality and creative problem-solving.
          </p>
          <Link className="text-link" href="/about">Get to know Event Swash <ArrowUpRight size={16} /></Link>
        </div>
        <EditorialImage src={imageSet.launch} alt="Event stage and lighting production" />
        <div className="about-teaser-note"><span>TEAM EXPERIENCE</span><strong>4 to 6 years </strong><small> As stated by the business; verify before publication.</small></div>
      </section>

      <section className="faq-section section section-paper">
        <div className="faq-layout">
          <div className="faq-intro">
            <SectionHeading label="GOOD TO KNOW" title="A few things you might be wondering." />
            <Link className="text-link" href="/faq">All questions <ArrowUpRight size={16} /></Link>
          </div>
          <FaqList />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
