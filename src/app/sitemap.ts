import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const baseUrl = "https://www.eventwave.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/catalogue",
    "/why-us",
    "/about",
    "/faq",
    "/contact",
  ];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...products.map((product) => ({
      url: `${baseUrl}/catalogue/${product.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
