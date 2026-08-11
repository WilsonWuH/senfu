import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialDetail } from "@/components/editorial-detail";
import { technologyPages } from "@/lib/editorial-content";
export function generateStaticParams() { return Object.keys(technologyPages).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const page = technologyPages[slug]; if (!page) return {}; return { title: page.title, description: page.description, alternates: { canonical: `/technology/${slug}/` } }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = technologyPages[slug]; if (!page) notFound(); return <EditorialDetail page={page} section="Technology" />; }
