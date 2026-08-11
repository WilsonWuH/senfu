import type { Metadata } from "next";
import Link from "next/link";
import { ListingHero } from "@/components/listing-hero";
import { applicationPages } from "@/lib/editorial-content";
export const metadata: Metadata = { title: "Applications", description: "Application-led optical encoder and lithography system selection.", alternates: { canonical: "/applications/" } };
export default function Page() { return <><ListingHero eyebrow="APPLICATION CENTER" title="Start with the engineering problem." description="Application pages connect operating constraints to critical specifications, suitable system routes and the evidence required for evaluation." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Applications" }]} /><section className="section"><div className="shell application-grid">{Object.entries(applicationPages).map(([slug, page], index) => <Link className="application-card" href={`/applications/${slug}/`} key={slug}><span>0{index + 1}</span><h3>{page.title.replace(/\.$/, "")}</h3><p>{page.description}</p><b>↗</b></Link>)}</div></section></>; }
