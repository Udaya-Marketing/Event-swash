"use client";

import { ArrowRight } from "lucide-react";
import { useQuote } from "@/components/quote-provider";

export function EventDatePlanner() {
  const { eventDate, setEventDate, open } = useQuote();

  return (
    <section className="event-date-planner" aria-labelledby="event-date-heading">
      <div className="event-date-copy">
        <span className="eyebrow">LET’S START WITH THE DATE</span>
        <h2 id="event-date-heading">Which date are you planning your event?</h2>
        <p>Choose a date now, then add equipment to build your enquiry.</p>
      </div>
      <div className="event-date-controls">
        <label htmlFor="home-event-date">Your event date</label>
        <input
          id="home-event-date"
          type="date"
          value={eventDate}
          onChange={(event) => setEventDate(event.target.value)}
        />
        <button className="button button-dark" onClick={open}>
          Continue to quote <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
