import type { Metadata } from "next";
import Link from "next/link";
import { ListingHero } from "@/components/listing-hero";
import { technologyPages } from "@/lib/editorial-content";
export const metadata: Metadata = { title: "Technology", description: "Evergreen engineering guides for encoder selection and lithography technology.", alternates: { canonical: "/technology/" } };
export default function Page() { return <><ListingHero eyebrow="TECHNOLOGY CENTER" title="Engineering knowledge for better selection decisions." description="Evergreen guides explain the tradeoffs behind feedback architecture, metrology, vacuum integration and lithography routes." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Technology" }]} primaryLabel="Ask a technical question" /><section className="section"><div className="shell knowledge-cards">{Object.entries(technologyPages).map(([slug, page], index) => <Link href={`/technology/${slug}/`} key={slug}><span>GUIDE / 0{index + 1}</span><h2>{page.title}</h2><p>{page.description}</p><b>Read guide →</b></Link>)}</div></section></>; }
