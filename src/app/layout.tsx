import type { Metadata } from "next";
import { QuoteProvider } from "@/components/quote-provider";
import { PageFrame } from "@/components/site-chrome";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eventwave.in"),
  title: {
    default: "Event Swash | AV Equipment Rental in Bengaluru",
    template: "%s | Event Swash",
  },
  description:
    "Audio, lighting, LED walls, projection and event AV equipment rentals in Bengaluru. Explore reference listings and request a confirmed quote.",
  applicationName: "Event Swash",
  creator: "Event Swash",
  publisher: "Event Swash",
  keywords: [
    "AV equipment rental Bengaluru",
    "LED screen rental Bengaluru",
    "event sound system rental",
    "event lighting rental Bengaluru",
    "projector rental Bengaluru",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Event Swash | AV Equipment Rental in Bengaluru",
    description:
      "Sound, lighting, LED and event AV rentals for conferences, launches, weddings and live events.",
    siteName: "Event Swash",
    locale: "en_IN",
    type: "website",
    url: "https://www.eventwave.in",
    images: [{
      url: "/images/event-swash-led-screens.jpg",
      width: 768,
      height: 768,
      alt: "Colorful LED screens on an event production stage",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Swash | AV Equipment Rental in Bengaluru",
    description:
      "Sound, lighting, LED and event AV rentals for conferences, launches, weddings and live events.",
    images: ["/images/event-swash-led-screens.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Event Swash",
    url: "https://www.eventwave.in",
    description:
      "Audio-visual equipment rentals for events in Bengaluru, including sound, lighting, LED and projection.",
    telephone: "+918550011040",
    email: ["devraj@eventwave.in", "info@eventwave.in"],
    image: "https://www.eventwave.in/images/event-swash-led-screens.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2254, 11th Main Road, 15E Bus Stop, Chandranagar, Kumaraswamy Layout",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560078",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },
    knowsAbout: [
      "Event audio equipment rental",
      "Stage lighting rental",
      "LED screen rental",
      "Projector rental",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
          }}
        />
        <QuoteProvider>
          <PageFrame>{children}</PageFrame>
        </QuoteProvider>
      </body>
    </html>
  );
}
