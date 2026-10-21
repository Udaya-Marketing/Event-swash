import { faqs } from "@/lib/content";

export function FaqList({ categorized = false }: { categorized?: boolean }) {
  const groups = categorized
    ? [...new Set(faqs.map((faq) => faq.category))]
    : [""];

  return (
    <div className="faq-list">
      {groups.map((group) => (
        <div className="faq-group" key={group || "all"}>
          {group && <h3 className="faq-category">{group}</h3>}
          {faqs
            .filter((faq) => !group || faq.category === group)
            .map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-toggle" aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
        </div>
      ))}
    </div>
  );
}
