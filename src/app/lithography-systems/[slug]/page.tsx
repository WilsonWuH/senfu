import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { productContent } from "@/lib/product-content";
import { products } from "@/lib/products";
const routeMap: Record<string, string> = { zml10a: "ZML10A", zml100a: "ZML100A", zml200a: "ZML200A", zel304g: "ZEL304G" };
export function generateStaticParams() { return Object.keys(routeMap).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const product = products.find((item) => item.id === routeMap[slug]); if (!product) return {}; return { title: product.productName, description: productContent[product.id]?.summary, alternates: { canonical: product.seo.slug } }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = products.find((item) => item.id === routeMap[slug]); if (!product || !productContent[product.id]) notFound(); const siblings = products.filter((item) => item.category === product.category); return <ProductDetail product={product} content={productContent[product.id]} siblings={siblings} platform="lithography" />; }
