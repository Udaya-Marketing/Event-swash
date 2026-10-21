# Event Swash — AV Rental Website

A responsive, multi-route Next.js App Router site for Event Swash, an audio-visual rental business in Bengaluru. It includes an editorial homepage, searchable equipment catalogue, product detail routes, persistent quote builder, WhatsApp enquiry flow, contact form, FAQs and draft legal pages.

## Run locally

Requirements: Node.js compatible with Next.js 16 and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production build:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

No database, authentication or environment variables are required.

## Main routes

- `/` — Homepage and service overview
- `/catalogue` — Search, category filter, sort and equipment list
- `/catalogue/[slug]` — Product reference details
- `/why-us`, `/about`, `/faq`, `/contact`
- `/privacy-policy`, `/terms-and-conditions`, `/refund-cancellation`, `/disclaimer`
- `/sitemap.xml` and `/robots.txt`

## Data and pre-launch review

Product records live in `src/lib/products.ts`; quote estimates and the contact message use that shared catalogue. The accessible reference exposed eight example price listings, although its homepage reports 52 products and packages. The remaining catalogue was not accessible during this implementation, so the site does not fabricate products, prices, availability or specifications. Confirm the complete inventory and all rates with Event Wave before launch.

Business contact information and claims were supplied in the project brief and should be confirmed. Legal routes are explicitly drafts because the source policy pages redirected to the homepage during review; obtain approved legal copy before publication. Product and event images are illustrative Unsplash-hosted photography, not representations of specific Event Wave equipment.

## Deployment

Deploy as a standard Next.js application (for example, to Vercel or a Node.js host). Configure the production domain in `src/app/layout.tsx`, `src/app/sitemap.ts` and `src/app/robots.ts` if it differs from `https://www.eventwave.in`. The remote image host `images.unsplash.com` is allowed in `next.config.ts`.
