import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">404 · OFF THE RUNNING ORDER</span>
      <h1>This page isn’t in the set list.</h1>
      <p>The link may have moved. Head back to the homepage or explore the catalogue.</p>
      <div className="cta-actions">
        <Link className="button button-lime" href="/">Back to home</Link>
        <Link className="button button-outline" href="/catalogue">Browse equipment</Link>
      </div>
    </section>
  );
}
