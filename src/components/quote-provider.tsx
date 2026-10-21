"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/content";
import { formatRupees, products } from "@/lib/products";

type QuoteEntry = { productId: string; days: number; squareFeet: number };
type QuoteContextValue = {
  entries: QuoteEntry[];
  count: number;
  eventDate: string;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  setEventDate: (date: string) => void;
  add: (productId: string) => void;
  remove: (productId: string) => void;
  update: (productId: string, patch: Partial<QuoteEntry>) => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);
const storageKey = "event-wave-quote-v1";

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) throw new Error("useQuote must be used within QuoteProvider");
  return context;
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<QuoteEntry[]>([]);
  const [eventDate, setEventDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [storageReady, setStorageReady] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(
      () => document.querySelector<HTMLButtonElement>(".quote-trigger")?.focus(),
      0,
    );
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved) {
          const parsed: unknown = JSON.parse(saved);
          if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
            const savedQuote = parsed as { entries?: unknown; eventDate?: unknown };
            if (typeof savedQuote.eventDate === "string") {
              setEventDate(savedQuote.eventDate);
            }
            if (Array.isArray(savedQuote.entries)) {
              setEntries(
                savedQuote.entries.filter(
                  (entry): entry is QuoteEntry =>
                    typeof entry?.productId === "string" &&
                    products.some((product) => product.id === entry.productId) &&
                    Number.isInteger(entry.days) &&
                    entry.days > 0 &&
                    Number.isFinite(entry.squareFeet) &&
                    entry.squareFeet >= 0,
                ),
              );
            }
          } else if (Array.isArray(parsed)) {
            setEntries(
              parsed.filter(
                (entry): entry is QuoteEntry =>
                  typeof entry?.productId === "string" &&
                  products.some((product) => product.id === entry.productId) &&
                  Number.isInteger(entry.days) &&
                  entry.days > 0 &&
                  Number.isFinite(entry.squareFeet) &&
                  entry.squareFeet >= 0,
              ),
            );
          }
        }
      } catch (error) {
        console.error("Could not restore the saved quote.", error);
      } finally {
        setStorageReady(true);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!storageReady) return;
    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify({ entries, eventDate }),
      );
    } catch (error) {
      console.error("Could not save the quote locally.", error);
    }
  }, [entries, eventDate, storageReady]);

  const add = useCallback((productId: string) => {
    setEntries((current) => {
      if (current.some((entry) => entry.productId === productId)) return current;
      return [...current, { productId, days: 1, squareFeet: 0 }];
    });
    setIsOpen(true);
  }, []);

  const remove = useCallback((productId: string) => {
    setEntries((current) =>
      current.filter((entry) => entry.productId !== productId),
    );
  }, []);

  const update = useCallback(
    (productId: string, patch: Partial<QuoteEntry>) => {
      setEntries((current) =>
        current.map((entry) =>
          entry.productId === productId
            ? {
                ...entry,
                ...patch,
                days: Math.max(1, Math.floor(patch.days ?? entry.days)),
                squareFeet: Math.max(
                  0,
                  Math.floor(patch.squareFeet ?? entry.squareFeet),
                ),
              }
            : entry,
        ),
      );
    },
    [],
  );

  const value = useMemo(
    () => ({
      entries,
      count: entries.length,
      eventDate,
      isOpen,
      open,
      close,
      setEventDate,
      add,
      remove,
      update,
    }),
    [add, close, entries, eventDate, isOpen, open, remove, setEventDate, update],
  );

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuoteDrawer />
    </QuoteContext.Provider>
  );
}

function QuoteDrawer() {
  const { entries, eventDate, isOpen, close, remove, setEventDate, update } = useQuote();
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const selected = entries.flatMap((entry) => {
    const product = products.find((item) => item.id === entry.productId);
    return product ? [{ ...entry, product }] : [];
  });

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const dialog = document.querySelector<HTMLElement>(".quote-drawer");
      const focusable = dialog?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close, isOpen]);

  const message = [
    "Hello Event Swash, I would like a quotation.",
    eventDate ? `Planned event date: ${eventDate}` : "",
    "",
    ...selected.map(({ product, days, squareFeet }) => {
      const estimate =
        product.priceUnit === "day"
          ? ` — ${formatRupees(product.priceMin * days)}–${formatRupees(product.priceMax * days)} estimated for ${days} day(s)`
          : squareFeet
            ? ` — ${squareFeet} sq ft, estimated ${formatRupees(product.priceMin * squareFeet)}–${formatRupees(product.priceMax * squareFeet)}`
            : " — please quote (rate per sq ft)";
      return `• ${product.name}${estimate}`;
    }),
    "",
    "Please confirm current rates, availability, specifications and transportation.",
  ].join("\n");
  const totalMin = selected.reduce(
    (sum, { product, days, squareFeet }) =>
      sum +
      (product.priceUnit === "day"
        ? product.priceMin * days
        : squareFeet > 0
          ? product.priceMin * squareFeet
          : 0),
    0,
  );
  const totalMax = selected.reduce(
    (sum, { product, days, squareFeet }) =>
      sum +
      (product.priceUnit === "day"
        ? product.priceMax * days
        : squareFeet > 0
          ? product.priceMax * squareFeet
          : 0),
    0,
  );
  const hasEstimatedItems = selected.some(
    ({ product, squareFeet }) => product.priceUnit === "day" || squareFeet > 0,
  );
  const needsArea = selected.some(
    ({ product, squareFeet }) => product.priceUnit === "sq ft" && squareFeet === 0,
  );

  async function copyList() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setCopyError(false);
      window.setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      console.error("Could not copy the equipment list.", error);
      setCopied(false);
      setCopyError(true);
    }
  }

  return (
    <>
      {isOpen && (
        <div className="drawer-backdrop" onClick={close}>
          <section
            className="quote-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="drawer-heading">
              <div>
                <span className="eyebrow">YOUR EVENT LIST</span>
                <h2 id="quote-title">Quote builder</h2>
              </div>
              <button ref={closeButtonRef} className="icon-button" onClick={close} aria-label="Close quote builder">
                <X size={20} />
              </button>
            </div>
            {selected.length === 0 ? (
              <div className="quote-empty">
                <p>{eventDate ? `Event date noted: ${eventDate}. Add equipment to continue.` : "Your list is ready for its first piece of kit."}</p>
                <Link href="/catalogue" className="text-link" onClick={close}>
                  Explore the catalogue <span aria-hidden="true">↗</span>
                </Link>
              </div>
            ) : (
              <>
                <div className="quote-date-field">
                  <label htmlFor="quote-event-date">What date are you planning the event?</label>
                  <input
                    id="quote-event-date"
                    type="date"
                    value={eventDate}
                    onChange={(event) => setEventDate(event.target.value)}
                  />
                </div>
                <div className="quote-items">
                  {selected.map(({ product, days, squareFeet }) => (
                    <article className="quote-item" key={product.id}>
                      <div className="quote-item-copy">
                        <span className="eyebrow">{product.category}</span>
                        <h3>{product.name}</h3>
                        <button
                          className="remove-link"
                          onClick={() => remove(product.id)}
                        >
                          <Trash2 size={13} /> Remove
                        </button>
                      </div>
                      <div className="quote-item-controls">
                        {product.priceUnit === "day" ? (
                          <>
                            <span className="control-label">Rental days</span>
                            <div className="stepper">
                              <button
                                aria-label={`Remove one rental day for ${product.name}`}
                                onClick={() => update(product.id, { days: days - 1 })}
                              >
                                <Minus size={14} />
                              </button>
                              <span>{days}</span>
                              <button
                                aria-label={`Add one rental day for ${product.name}`}
                                onClick={() => update(product.id, { days: days + 1 })}
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </>
                        ) : (
                          <>
                            <label className="control-label" htmlFor={`area-${product.id}`}>
                              Area (sq ft)
                            </label>
                            <input
                              id={`area-${product.id}`}
                              className="area-input"
                              min="0"
                              type="number"
                              value={squareFeet || ""}
                              placeholder="Add area"
                              onChange={(event) =>
                                update(product.id, {
                                  squareFeet: Number(event.target.value),
                                })
                              }
                            />
                          </>
                        )}
                        <p className="quote-estimate">
                          {product.priceUnit === "day"
                            ? `${formatRupees(product.priceMin * days)}–${formatRupees(product.priceMax * days)} est.`
                            : squareFeet
                              ? `${formatRupees(product.priceMin * squareFeet)}–${formatRupees(product.priceMax * squareFeet)} est.`
                              : "Estimate on request"}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
                <Link className="drawer-event-link" href="/contact" onClick={close}>
                  Add event details in the enquiry form <span aria-hidden="true">↗</span>
                </Link>
                <div className="quote-total">
                  <span>{needsArea ? "Estimated total for priced items" : "Estimated equipment total"}</span>
                  <strong>
                    {hasEstimatedItems
                      ? `${formatRupees(totalMin)}–${formatRupees(totalMax)}`
                      : "Add area for estimate"}
                  </strong>
                  {needsArea && <small>Enter square footage to estimate P2 LED wall pricing.</small>}
                  <small>Excludes transport; final quote subject to confirmation.</small>
                </div>
                <p className="estimate-note">
                  Estimates use published reference rates only. Transport is extra; confirm
                  the final quotation with Event Swash.
                </p>
                <div className="drawer-actions">
                  <a
                    className="button button-lime button-full"
                    href={buildWhatsAppUrl(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Continue on WhatsApp <span aria-hidden="true">↗</span>
                  </a>
                  <button className="button button-outline button-full" onClick={copyList}>
                    {copied ? "Equipment list copied" : "Copy equipment list"}
                  </button>
                  {copyError && (
                    <p className="copy-error" role="alert">
                      Clipboard access is unavailable. You can still continue to WhatsApp
                      to review the prepared equipment list.
                    </p>
                  )}
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
}
