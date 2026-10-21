"use client";

import { Plus } from "lucide-react";
import { useQuote } from "@/components/quote-provider";

export function AddProductButton({ productId }: { productId: string }) {
  const { add } = useQuote();
  return (
    <button className="button button-dark" onClick={() => add(productId)}>
      <Plus size={16} /> Add to quote
    </button>
  );
}
