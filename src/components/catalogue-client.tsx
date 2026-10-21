"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/site-ui";
import { productCategories, products } from "@/lib/products";

export function CatalogueClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All equipment");
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    const results = products.filter((product) => {
      const matchesCategory =
        category === "All equipment" || product.category === category;
      const matchesSearch =
        !query ||
        `${product.name} ${product.category} ${product.description} ${product.verifiedDetail}`
          .toLowerCase()
          .includes(query);
      return matchesCategory && matchesSearch;
    });
    if (sort === "name") results.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "price") results.sort((a, b) => a.priceMin - b.priceMin);
    return results;
  }, [category, search, sort]);

  return (
    <>
      <section className="catalogue-controls" aria-label="Catalogue filters">
        <label className="catalogue-search">
          <Search size={19} aria-hidden="true" />
          <span className="sr-only">Search equipment</span>
          <input
            type="search"
            placeholder="Search by product, category or detail"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          {search && (
            <button aria-label="Clear search" onClick={() => setSearch("")}>
              <X size={16} />
            </button>
          )}
        </label>
        <label className="filter-select">
          <SlidersHorizontal size={17} aria-hidden="true" />
          <span className="sr-only">Filter by category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {productCategories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="sort-select">
          <span className="eyebrow">SORT</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="name">Name A–Z</option>
            <option value="price">Price low–high</option>
          </select>
        </label>
      </section>
      <div className="catalogue-result-line">
        <span>{filtered.length} reference listings</span>
        <span>Rates shown are subject to business confirmation</span>
      </div>
      {filtered.length > 0 ? (
        <div className="product-grid catalogue-grid">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span className="eyebrow">NO MATCHES YET</span>
          <h2>Try another search.</h2>
          <p>Search a product name or clear the filters to view all reference listings.</p>
          <button
            className="button button-dark"
            onClick={() => {
              setSearch("");
              setCategory("All equipment");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
      <div className="catalogue-disclaimer">
        <strong>Before you plan around a rate:</strong> these eight listings are the price
        examples accessible in the supplied reference. The source mentions 52 products and
        packages, but its catalogue pages redirected to the homepage during review. This
        is not a verified complete inventory. Rates are negotiable; confirm current
        prices, units, package details, availability and transport charges directly with
        Event Swash.
      </div>
    </>
  );
}
