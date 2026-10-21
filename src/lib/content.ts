export const siteDetails = {
  name: "Event Swash",
  phone: "+91 91879 29918",
  whatsapp: "919187929918",
  emails: ["devraj@eventwave.in", "info@eventwave.in"],
  address:
    "2254, 11th Main Road, 15E Bus Stop, Chandranagar, Kumaraswamy Layout, Bengaluru, Karnataka 560078, India",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=2254%2C+11th+Main+Road%2C+Kumaraswamy+Layout%2C+Bengaluru%2C+Karnataka+560078",
  website: "https://www.eventwave.in",
};

export const navigation = [
  { href: "/#events", label: "Events" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/why-us", label: "Why us" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const faqs = [
  {
    category: "Products & equipment",
    question: "What equipment can I rent from Event Swash in Bengaluru?",
    answer:
      "The reference site lists sound systems and line-array packages (including JBL, RCF and QSC), audio mixers, stage and effect lighting, P3 and P2 LED walls, projectors, 43–75 inch TVs and touch screens, AV accessories, trussing, smoke, haze, cold fire and confetti blasters. Ask the team to confirm the current catalogue and configuration.",
  },
  {
    category: "Rental prices",
    question: "Are the prices per day?",
    answer:
      "Most catalogue prices are published per day. The P2 LED wall is listed per square foot. Rates are negotiable and can change, so confirm the current price and rental duration with the team.",
  },
  {
    category: "Delivery & pickup",
    question: "Do you deliver and set up the equipment?",
    answer:
      "The reference site says Event Swash delivers to the venue, sets up the equipment and picks it up after the event. Every unit is quality-checked before dispatch. Confirm arrangements for your venue and event.",
  },
  {
    category: "Event types",
    question: "Which types of events do you support?",
    answer:
      "The business describes AV setups for corporate events, conferences, product launches, weddings and receptions, concerts and exhibitions, across different audience sizes and budgets.",
  },
  {
    category: "Quotations",
    question: "How can I get a quotation?",
    answer:
      "Share your venue, event date, audience size and equipment requirements by phone or WhatsApp. The team can help recommend a configuration and confirm the quotation.",
  },
  {
    category: "Delivery & pickup",
    question: "Are transportation charges included?",
    answer:
      "Transportation is charged separately according to the reference site. Confirm transport and any other charges for your specific venue before booking.",
  },
  {
    category: "Customized configurations",
    question: "Can I request a customized AV configuration?",
    answer:
      "Yes. Share the event type, venue, audience size and requirements so the team can discuss a suitable setup and confirm the available equipment.",
  },
];

export const imageSet = {
  hero: "/images/event-swash-led-screens.jpg",
  conference:
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85",
  launch:
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=85",
  wedding:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  concert:
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=85",
  rig:
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1500&q=85",
};

export const legalDrafts: Record<
  string,
  { title: string; description: string; sections: string[] }
> = {
  "privacy-policy": {
    title: "Privacy policy",
    description: "Draft page — business and legal review required before publication.",
    sections: [
      "The source policy page could not be accessed during the reference review. This draft is not a substitute for the business’s approved privacy policy.",
      "Before publishing, Event Swash should document what information is collected through calls, email, WhatsApp and enquiry forms; why it is used; how long it is retained; who can access it; and how customers can request access or deletion.",
      "Do not publish this page as final legal advice. Confirm the applicable privacy requirements and approved contact details with the business and its legal adviser.",
    ],
  },
  "terms-and-conditions": {
    title: "Terms & conditions",
    description: "Draft page — business and legal review required before publication.",
    sections: [
      "The source terms page could not be accessed during the reference review. Rental conditions, payment requirements, deposits, responsibility for equipment, cancellation rules and dispute terms have not been verified.",
      "Confirm the complete terms with Event Swash before publishing or accepting a rental enquiry. A quotation should be treated as subject to confirmation by the business.",
    ],
  },
  "refund-cancellation": {
    title: "Refund & cancellation",
    description: "Draft page — business and legal review required before publication.",
    sections: [
      "The source refund and cancellation page could not be accessed during the reference review. No refund eligibility, cancellation deadlines or fee schedule has been assumed here.",
      "Event Swash should provide and approve its current cancellation and refund policy before this page is published as final.",
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    description: "Draft page — business and legal review required before publication.",
    sections: [
      "Catalogue rates shown here are reference figures reported by the source website and are not current confirmed quotations. Availability, specifications and package inclusions must be verified with Event Swash.",
      "Transportation is charged separately according to the source FAQ. Final scope, charges and arrangements are subject to confirmation by the business.",
      "This draft needs business and legal review before publication.",
    ],
  },
};

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${siteDetails.whatsapp}?text=${encodeURIComponent(message)}`;
