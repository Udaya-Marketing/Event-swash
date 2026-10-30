"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl, siteDetails } from "@/lib/content";
import { formatRupees, products } from "@/lib/products";
import { useQuote } from "@/components/quote-provider";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9][0-9\s()-]{7,16}$/, "Enter a valid phone number."),
  email: z.union([z.literal(""), z.string().trim().email("Enter a valid email address.")]),
  eventType: z.string().min(1, "Please select an event type."),
  date: z.string().min(1, "Please choose an event date."),
  venue: z.string().trim().min(2, "Please enter the venue or area."),
  audience: z.string().trim().min(1, "Please enter an estimated audience size."),
  requirements: z.string().trim().min(3, "Please tell us what you need."),
  message: z.string().optional(),
});

type EnquiryValues = z.infer<typeof enquirySchema>;

export function ContactForm() {
  const [fallback, setFallback] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const { entries, eventDate } = useQuote();
  const form = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      eventType: "",
      date: "",
      venue: "",
      audience: "",
      requirements: "",
      message: "",
    },
  });

  useEffect(() => {
    if (eventDate && !form.formState.dirtyFields.date) {
      form.setValue("date", eventDate);
    }
  }, [eventDate, form]);

  const onSubmit = (values: EnquiryValues) => {
    const message = [
      "Hello Event Swash, I'd like to request an event AV quotation.",
      "",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : "",
      `Event type: ${values.eventType}`,
      `Event date: ${values.date}`,
      `Venue / area: ${values.venue}`,
      `Audience size: ${values.audience}`,
      `Equipment requirements: ${values.requirements}`,
      ...entries.map((entry) => {
        const product = products.find((item) => item.id === entry.productId);
        if (!product) return "";
        const estimate =
          product.priceUnit === "day"
            ? `${formatRupees(product.priceMin * entry.days)}–${formatRupees(product.priceMax * entry.days)} for ${entry.days} day(s)`
            : entry.squareFeet
              ? `${entry.squareFeet} sq ft — ${formatRupees(product.priceMin * entry.squareFeet)}–${formatRupees(product.priceMax * entry.squareFeet)}`
              : "area to confirm; rate per sq ft";
        return `Selected equipment: ${product.name} — ${estimate}`;
      }),
      values.message ? `Additional message: ${values.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappWindow = window.open(buildWhatsAppUrl(message), "_blank");
    if (whatsappWindow) {
      whatsappWindow.opener = null;
      setFallback("");
      setCopied(false);
      setCopyError(false);
    } else {
      setFallback(message);
    }
  };

  const errorFor = (name: keyof EnquiryValues) => form.formState.errors[name]?.message;
  const copyFallback = async () => {
    try {
      await navigator.clipboard.writeText(fallback);
      setCopied(true);
      setCopyError(false);
    } catch (error) {
      console.error("Could not copy the enquiry message.", error);
      setCopied(false);
      setCopyError(true);
    }
  };

  return (
    <form className="enquiry-form" onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <div className="form-heading">
        <span className="eyebrow">TELL US WHAT YOU’RE PLANNING</span>
        <h2>Start a conversation.</h2>
        <p>Submitting opens a prepared WhatsApp message. Nothing is sent automatically.</p>
      </div>
      <div className="form-grid">
        <Field label="Full name" name="name" required error={errorFor("name")}>
          <input id="name" autoComplete="name" aria-invalid={Boolean(errorFor("name"))} aria-describedby={errorFor("name") ? "name-error" : undefined} {...form.register("name")} />
        </Field>
        <Field label="Phone number" name="phone" required error={errorFor("phone")}>
          <input id="phone" type="tel" autoComplete="tel" placeholder="+91" aria-invalid={Boolean(errorFor("phone"))} aria-describedby={errorFor("phone") ? "phone-error" : undefined} {...form.register("phone")} />
        </Field>
        <Field label="Email address" name="email" error={errorFor("email")}>
          <input id="email" type="email" autoComplete="email" aria-invalid={Boolean(errorFor("email"))} aria-describedby={errorFor("email") ? "email-error" : undefined} {...form.register("email")} />
        </Field>
        <Field label="Event type" name="eventType" required error={errorFor("eventType")}>
          <select id="eventType" aria-invalid={Boolean(errorFor("eventType"))} aria-describedby={errorFor("eventType") ? "eventType-error" : undefined} {...form.register("eventType")}>
            <option value="">Select an event</option>
            <option>Conference / summit</option>
            <option>Product launch / town hall</option>
            <option>Wedding / reception</option>
            <option>Concert / exhibition</option>
            <option>Other event</option>
          </select>
        </Field>
        <Field label="Event date" name="date" required error={errorFor("date")}>
          <input id="date" type="date" aria-invalid={Boolean(errorFor("date"))} aria-describedby={errorFor("date") ? "date-error" : undefined} {...form.register("date")} />
        </Field>
        <Field label="Venue and area" name="venue" required error={errorFor("venue")}>
          <input id="venue" placeholder="Venue name, Bengaluru area" aria-invalid={Boolean(errorFor("venue"))} aria-describedby={errorFor("venue") ? "venue-error" : undefined} {...form.register("venue")} />
        </Field>
        <Field label="Audience size" name="audience" required error={errorFor("audience")}>
          <input id="audience" placeholder="Approximate number of guests" aria-invalid={Boolean(errorFor("audience"))} aria-describedby={errorFor("audience") ? "audience-error" : undefined} {...form.register("audience")} />
        </Field>
        <Field label="Equipment requirements" name="requirements" required error={errorFor("requirements")} wide>
          <textarea id="requirements" rows={3} placeholder="Sound, lighting, LED, projection…" aria-invalid={Boolean(errorFor("requirements"))} aria-describedby={errorFor("requirements") ? "requirements-error" : undefined} {...form.register("requirements")} />
        </Field>
        <Field label="Anything else?" name="message" error={errorFor("message")} wide>
          <textarea id="message" rows={3} aria-invalid={Boolean(errorFor("message"))} aria-describedby={errorFor("message") ? "message-error" : undefined} {...form.register("message")} />
        </Field>
      </div>
      <button className="button button-dark" type="submit" disabled={form.formState.isSubmitting}>
        Continue to WhatsApp <ArrowUpRight size={16} />
      </button>
      {fallback && (
        <div className="form-fallback" role="alert">
          <p>WhatsApp did not open. Copy your enquiry and send it to {siteDetails.phone}.</p>
          <button className="text-link" type="button" onClick={copyFallback}>
            {copied ? "Enquiry copied" : "Copy enquiry"}
          </button>
          {copyError && <p role="alert">Clipboard access is unavailable. Please call the team instead.</p>}
        </div>
      )}
      <p className="form-disclaimer">
        Your details are included in a draft message for you to review before you send it.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  required = false,
  error,
  wide = false,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`form-field ${wide ? "form-field-wide" : ""}`}>
      <label htmlFor={name}>
        {label}{required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <span id={`${name}-error`} className="field-error" role="alert">{error}</span>}
    </div>
  );
}
