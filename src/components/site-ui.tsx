"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Plus } from "lucide-react";
import { useQuote } from "@/components/quote-provider";
import type { Product } from "@/lib/products";
import { formatRupees } from "@/lib/products";

export function EditorialImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 760px) 100vw, (max-width: 1200px) 60vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`image-frame ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="cover-image"
      />
    </div>
  );
}

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add } = useQuote();
  return (
    <article className="product-card">
      <Link className="product-image-link" href={`/catalogue/${product.slug}`}>
        <EditorialImage src={product.image} alt={product.imageAlt} />
        <span className="product-index">0{index + 1}</span>
        <span className="image-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="product-card-meta">
        <span className="eyebrow">{product.category}</span>
        <h3><Link href={`/catalogue/${product.slug}`}>{product.name}</Link></h3>
        <p className="product-price">
          {formatRupees(product.priceMin)}–{formatRupees(product.priceMax)}
          <span> / {product.priceUnit === "day" ? "day" : "sq ft"}</span>
        </p>
        <p className="product-card-description">{product.description}</p>
        <button className="add-button" onClick={() => add(product.id)}>
          <Plus size={15} /> Add to quote
        </button>
      </div>
    </article>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  light = false,
}: {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "text-light" : ""}`}>
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function PageIntro({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="page-intro">
      <div className="page-intro-inner">
        <span className="eyebrow">{label}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <ArrowDownRight className="intro-mark" size={64} strokeWidth={1} aria-hidden="true" />
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="final-cta">
      <EditorialImage
        src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1800&q=85"
        alt="Live event stage illuminated by concert lighting"
        className="cta-backdrop"
      />
      <div className="cta-shade" />
      <div className="final-cta-content">
        <span className="eyebrow">LET’S TALK ABOUT YOUR EVENT</span>
        <h2>Let’s make your next event sound and look exceptional.</h2>
        <p>Tell us your venue, date and audience. We’ll help shape the right AV setup.</p>
        <div className="cta-actions">
          <Link className="button button-lime" href="/contact">Request a quote <ArrowUpRight size={16} /></Link>
          <a className="button button-glass" href="https://wa.me/918550011040?text=Hello%20Event%20Swash%2C%20I%27d%20like%20to%20discuss%20an%20event." target="_blank" rel="noopener noreferrer">WhatsApp us <ArrowUpRight size={16} /></a>
          <a className="button button-glass" href="tel:+918550011040">Call the team <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
