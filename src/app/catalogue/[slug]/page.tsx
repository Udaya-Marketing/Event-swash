import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AddProductButton } from "@/components/product-actions";
import { products, productBySlug, formatRupees } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return { title: "Equipment not found" };
  return {
    title: `${product.name} Rental`,
    description: `${product.name} rental reference listing in Bengaluru. Confirm current pricing, specifications and availability with Event Swash.`,
    alternates: { canonical: `/catalogue/${product.slug}` },
    openGraph: {
      title: `${product.name} | Event Swash`,
      description: product.description,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  return (
    <section className="section product-detail">
      <Link href="/catalogue" className="back-link"><ArrowLeft size={15} /> Back to catalogue</Link>
      <div className="product-detail-grid">
        <div className="product-detail-image">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 55vw"
            className="cover-image"
          />
          <span className="eyebrow image-label">{product.category}</span>
        </div>
        <div className="product-detail-copy">
          <span className="eyebrow">REFERENCE LISTING · BENGALURU</span>
          <h1>{product.name}</h1>
          <p className="detail-description">{product.description}</p>
          <div className="detail-price">
            <span>Published reference rate</span>
            <strong>{formatRupees(product.priceMin)}–{formatRupees(product.priceMax)}</strong>
            <small>per {product.priceUnit === "day" ? "day" : "square foot"}</small>
          </div>
          <p className="detail-verification">{product.verifiedDetail}</p>
          <ul className="detail-facts">
            <li><span>Category</span><strong>{product.category}</strong></li>
            <li><span>Estimate</span><strong>{product.priceUnit === "day" ? "Rental duration × daily reference rate" : "Area × reference rate per sq ft"}</strong></li>
            <li><span>Availability</span><strong>{product.availability === "enquiry-only" ? "Enquiry only — confirm with Event Swash" : "Confirm directly with Event Swash"}</strong></li>
          </ul>
          <p className="detail-verification">{product.rentalNote}</p>
          <AddProductButton productId={product.id} />
          <Link className="text-link detail-contact-link" href="/contact">Ask about this equipment <ArrowUpRight size={15} /></Link>
          <p className="detail-footnote">
            Transport is charged separately. No inventory availability or final quote is
            implied by this listing. Photography is illustrative and does not identify the
            exact rental unit.
          </p>
        </div>
      </div>
    </section>
  );
}
