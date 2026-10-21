export type ProductCategory =
  | "Sound Systems"
  | "Lighting"
  | "LED Walls"
  | "TVs and Displays"
  | "Projectors"
  | "Mixers and Microphones"
  | "AV Accessories"
  | "Special Effects"
  | "Genset and Power Equipment"
  | "Trussing and other equipment";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  image: string;
  imageAlt: string;
  description: string;
  priceMin: number;
  priceMax: number;
  priceUnit: "day" | "sq ft";
  verifiedDetail: string;
  availability: "enquiry-only";
  rentalNote?: string;
};

export const products: Product[] = [
  {
    id: "projector-3200-lumens",
    slug: "3200-lumens-projector",
    name: "3200 Lumens Projector",
    category: "Projectors",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=960&q=85",
    imageAlt: "Projector beam illuminating a dark presentation room",
    description:
      "A projector listing with a published reference rental rate. Confirm inputs and included accessories when enquiring.",
    priceMin: 1000,
    priceMax: 1500,
    priceUnit: "day",
    verifiedDetail: "Published reference rate; current rate and exact model need confirmation.",
    availability: "enquiry-only",
    rentalNote: "Confirm image inputs and included accessories with the team.",
  },
  {
    id: "projector-short-throw",
    slug: "short-throw-projector",
    name: "Short Throw Projector",
    category: "Projectors",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=960&q=85",
    imageAlt: "Large presentation screen in a conference venue",
    description:
      "Short-throw projector listing. Confirm throw ratio, brightness and accessories for your room.",
    priceMin: 3000,
    priceMax: 3500,
    priceUnit: "day",
    verifiedDetail: "Published reference rate; current rate and exact model need confirmation.",
    availability: "enquiry-only",
    rentalNote: "Confirm throw distance, inputs and included accessories with the team.",
  },
  {
    id: "mixer-soundcraft-lx7",
    slug: "soundcraft-lx7",
    name: "Soundcraft LX7",
    category: "Mixers and Microphones",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=960&q=85",
    imageAlt: "Audio mixing console in a live production setting",
    description:
      "Mixer listing with a published reference rental rate. Confirm the configuration and included items.",
    priceMin: 2000,
    priceMax: 3000,
    priceUnit: "day",
    verifiedDetail: "Published reference rate; current rate and package details need confirmation.",
    availability: "enquiry-only",
    rentalNote: "Confirm mixer configuration and included accessories with the team.",
  },
  {
    id: "led-wall-8x6",
    slug: "led-wall-8x6",
    name: "8 × 6 ft LED Wall",
    category: "LED Walls",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=960&q=85",
    imageAlt: "Live event stage with a large LED display",
    description:
      "LED wall size and published reference rate. Confirm pixel pitch, installation and content requirements.",
    priceMin: 6000,
    priceMax: 7000,
    priceUnit: "day",
    verifiedDetail: "Published reference rate; current rate and technical package need confirmation.",
    availability: "enquiry-only",
    rentalNote: "Confirm pixel pitch, setup and content requirements with the team.",
  },
  {
    id: "led-wall-10x12",
    slug: "led-wall-10x12",
    name: "10 × 12 ft LED Wall",
    category: "LED Walls",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=960&q=85",
    imageAlt: "Concert audience facing a bright stage screen",
    description:
      "LED wall size and published reference rate. Confirm pixel pitch, installation and content requirements.",
    priceMin: 12000,
    priceMax: 14000,
    priceUnit: "day",
    verifiedDetail: "Published reference rate; current rate and technical package need confirmation.",
    availability: "enquiry-only",
    rentalNote: "Confirm pixel pitch, setup and content requirements with the team.",
  },
  {
    id: "led-wall-10x20",
    slug: "led-wall-10x20",
    name: "10 × 20 ft LED Wall",
    category: "LED Walls",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=960&q=85",
    imageAlt: "Wide live-music stage lit for an event",
    description:
      "LED wall size and published reference rate. Confirm pixel pitch, installation and content requirements.",
    priceMin: 20000,
    priceMax: 24000,
    priceUnit: "day",
    verifiedDetail: "Published reference rate; current rate and technical package need confirmation.",
    availability: "enquiry-only",
    rentalNote: "Confirm pixel pitch, setup and content requirements with the team.",
  },
  {
    id: "led-wall-10x30",
    slug: "led-wall-10x30",
    name: "10 × 30 ft LED Wall",
    category: "LED Walls",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=960&q=85",
    imageAlt: "Wide event stage with lighting and LED screens",
    description:
      "LED wall size and published reference rate. Confirm pixel pitch, installation and content requirements.",
    priceMin: 30000,
    priceMax: 36000,
    priceUnit: "day",
    verifiedDetail: "Published reference rate; current rate and technical package need confirmation.",
    availability: "enquiry-only",
    rentalNote: "Confirm pixel pitch, setup and content requirements with the team.",
  },
  {
    id: "led-wall-p2",
    slug: "p2-led-wall",
    name: "P2 LED Wall",
    category: "LED Walls",
    image:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=960&q=85",
    imageAlt: "Close view of a bright LED display at an event",
    description:
      "P2 LED wall listing priced by area. Add the required square footage before requesting an estimate.",
    priceMin: 120,
    priceMax: 150,
    priceUnit: "sq ft",
    verifiedDetail: "Published reference rate per square foot; confirm current rate and configuration.",
    availability: "enquiry-only",
    rentalNote: "Rate is per square foot; provide the required area when requesting an estimate.",
  },
];

export const productCategories = [
  "All equipment",
  "Sound Systems",
  "Lighting",
  "LED Walls",
  "TVs and Displays",
  "Projectors",
  "Mixers and Microphones",
  "AV Accessories",
  "Special Effects",
  "Genset and Power Equipment",
  "Trussing and other equipment",
] as const;

export const formatRupees = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export const productBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
