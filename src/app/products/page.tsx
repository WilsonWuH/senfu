import type { Metadata } from "next";
import Link from "next/link";
import { ListingHero } from "@/components/listing-hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Products", description: "Optical encoders and lithography systems supplied by SENFU Technology.", alternates: { canonical: "/products/" } };

export default function ProductsPage() {
  return <>
    <ListingHero eyebrow="PRODUCT PLATFORMS" title="Precision feedback and fabrication systems." description="Browse products by engineering objective. Each technical record separates supplier, brand and manufacturer roles and exposes only source-backed public specifications." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]} />
    <section className="section"><div className="shell platform-grid">
      <Link className="platform-card platform-card-dark" href="/optical-encoders/"><div className="platform-number">01 / POSITION FEEDBACK</div><div><p className="platform-kicker">Optical encoders</p><h3>Linear and rotary feedback for precision motion.</h3><p>Incremental, absolute, miniature and vacuum-oriented product families.</p></div><div className="tag-row"><span>SMG</span><span>SAG</span><span>SCG</span><span>MICRON</span></div><span className="platform-link">Explore encoder families <b>→</b></span></Link>
      <Link className="platform-card platform-card-blue" href="/lithography-systems/"><div className="platform-number">02 / PATTERNING</div><div><p className="platform-kicker">Lithography systems</p><h3>Direct-write tools for micro- and nanoscale fabrication.</h3><p>DMD maskless and electron-beam platforms for research and process development.</p></div><div className="tag-row"><span>ZML</span><span>ZEL</span><span>DMD</span><span>EBL</span></div><span className="platform-link">Compare fabrication routes <b>→</b></span></Link>
    </div></section>
    <section className="section capabilities-section"><div className="shell"><SectionHeading eyebrow="CONTROLLED DATA" title="A product page is the output of a governed record." description="Parameter-level source references, claim controls and build guards keep unverified marketing language out of public specifications." /><Link className="text-link" href="/resources/">Explore the engineering resource system <span>→</span></Link></div></section>
  </>;
}
