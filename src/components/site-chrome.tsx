"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, siteDetails } from "@/lib/content";
import { useQuote } from "@/components/quote-provider";

export function SiteHeader() {
  const { count, open } = useQuote();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Event Swash home">
          <span className="wordmark-icon" aria-hidden="true">ES</span>
          <span>EVENT <span className="wordmark-light">SWASH</span></span>
        </Link>
        <nav className={`primary-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a className="mobile-phone" href={`tel:${siteDetails.phone.replaceAll(" ", "")}`}>
            Call the team
          </a>
        </nav>
        <div className="header-actions">
          <Link className="header-search" href="/catalogue" aria-label="Search catalogue">
            Find gear <ArrowUpRight size={15} />
          </Link>
          <button className="quote-trigger" onClick={open}>
            Quote <span className="quote-count" aria-label={`${count} item${count === 1 ? "" : "s"} in quote`}>{count}</span>
          </button>
          <button
            className="mobile-menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="wordmark" href="/">
            <span className="wordmark-icon" aria-hidden="true">ES</span>
            <span>EVENT <span className="wordmark-light">SWASH</span></span>
          </Link>
          <p>AV rentals for the moments that matter. Based in Bengaluru, ready for the room.</p>
          <a className="footer-contact-link" href={`tel:${siteDetails.phone.replaceAll(" ", "")}`}>
            {siteDetails.phone} <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="footer-column">
          <span className="eyebrow">EXPLORE</span>
          <Link href="/catalogue">Equipment catalogue</Link>
          <Link href="/why-us">Why Event Swash</Link>
          <Link href="/about">Our story</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-column">
          <span className="eyebrow">EQUIPMENT</span>
          <Link href="/catalogue">LED walls</Link>
          <Link href="/catalogue">Projectors</Link>
          <Link href="/catalogue">Mixers</Link>
          <Link href="/#events">Event setups</Link>
        </div>
        <div className="footer-column">
          <span className="eyebrow">GET IN TOUCH</span>
          <a href={`mailto:${siteDetails.emails[0]}`}>{siteDetails.emails[0]}</a>
          <a href={siteDetails.mapUrl} target="_blank" rel="noopener noreferrer">Bengaluru, India ↗</a>
          <p className="footer-address">{siteDetails.address}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Event Swash · Bengaluru</span>
        <div className="legal-links">
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-and-conditions">Terms</Link>
          <Link href="/refund-cancellation">Refunds</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
        <span>Reference rates require confirmation.</span>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
