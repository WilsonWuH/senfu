import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { encoderGroupContent, productContent } from "@/lib/product-content";
import { products } from "@/lib/products";

const routeMap: Record<string, string> = { smg20: "SMG20", smg26: "SMG26", sag21: "SAG21", "micron-p2": "MICRON-P2" };

export function generateStaticParams() { return [...Object.keys(routeMap), "scg-series"].map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = slug === "scg-series" ? products.find((item) => item.id === "SCG04") : products.find((item) => item.id === routeMap[slug]);
  if (!product) return {};
  const title = slug === "scg-series" ? "SCG Series Rotary Optical Encoders" : product.productName;
  const description = slug === "scg-series" ? encoderGroupContent.summary : productContent[product.id]?.summary;
  return { title, description, alternates: { canonical: product.seo.slug } };
}

export default async function EncoderProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const scgProducts = products.filter((item) => item.category === "incremental_rotary_encoder");
  if (slug === "scg-series") {
    const product = scgProducts[0];
    if (!product) notFound();
    return <ProductDetail product={{ ...product, productName: "SCG Series Rotary Optical Encoders", model: "SCG Series" }} content={encoderGroupContent} siblings={scgProducts} platform="encoder" />;
  }
  const product = products.find((item) => item.id === routeMap[slug]);
  if (!product || !productContent[product.id]) notFound();
  const siblings = products.filter((item) => item.category === product.category && !item.id.startsWith("SCG"));
  return <ProductDetail product={product} content={productContent[product.id]} siblings={siblings} platform="encoder" />;
}
