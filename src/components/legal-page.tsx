import type { ReactNode } from "react";
import Link from "next/link";
import { PageIntro } from "@/components/site-ui";

export function LegalPage({
  page,
}: {
  page: { title: string; description: string; sections: string[] };
}): ReactNode {
  return (
    <>
      <PageIntro label="IMPORTANT INFORMATION" title={page.title} intro={page.description} />
      <section className="section legal-page">
        <div className="legal-warning"><strong>Draft — not approved for publication.</strong> This page needs business and legal review.</div>
        {page.sections.map((section) => <p key={section}>{section}</p>)}
        <Link className="text-link" href="/contact">Contact Event Swash <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
