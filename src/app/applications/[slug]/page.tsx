import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialDetail } from "@/components/editorial-detail";
import { applicationPages } from "@/lib/editorial-content";
export function generateStaticParams() { return Object.keys(applicationPages).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const page = applicationPages[slug]; if (!page) return {}; return { title: page.title, description: page.description, alternates: { canonical: `/applications/${slug}/` } }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = applicationPages[slug]; if (!page) notFound(); return <EditorialDetail page={page} section="Applications" />; }
