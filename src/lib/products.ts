import data from "@/data/public-products.json";
import type { PublicData, PublicField, PublicProduct } from "@/lib/types";

const publicData = data as unknown as PublicData;

export const products = publicData.products;

export function getProduct(id: string) {
  return products.find((product) => product.id.toLowerCase() === id.toLowerCase());
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}

export function field(product: PublicProduct, key: string): PublicField | undefined {
  return product.specifications[key];
}

export function formatFieldValue(spec?: PublicField): string {
  if (!spec) return "Available on technical review";
  const raw = spec.values ?? spec.value;
  const value = Array.isArray(raw) ? raw.join(" / ") : formatUnknown(raw);
  const unit = spec.unit ? ` ${spec.unit}` : "";
  const condition = spec.conditions?.length ? ` · ${spec.conditions.join(", ")}` : "";
  return `${value}${unit}${condition}`;
}

function formatUnknown(value: unknown): string {
  if (value === null || value === undefined) return "Available on technical review";
  if (typeof value === "object") {
    return Object.entries(value as Record<string, unknown>)
      .map(([key, item]) => `${humanize(key)}: ${formatUnknown(item)}`)
      .join(" · ");
  }
  return String(value);
}

export function humanize(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function productRoute(product: PublicProduct) {
  return product.seo.slug;
}
