import type { Metadata } from "next";
import Link from "next/link";
import { ListingHero } from "@/components/listing-hero";
import { engineeringResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Engineering Resources",
  description: "Download source documents, drawings and CAD files for SENFU optical encoders and lithography systems.",
  alternates: { canonical: "/resources/" },
};

export default function Page() {
  return <>
    <ListingHero eyebrow="ENGINEERING RESOURCES" title="Evidence for technical evaluation." description="Download the source documents currently available for product and configuration review. Files remain linked to the product record they support." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]} primaryHref="/contact/#application-form" primaryLabel="Request a technical document" />
    <section className="section">
      <div className="shell">
        <div className="section-heading-row resource-heading-row">
          <div><p className="eyebrow">AVAILABLE DOWNLOADS</p><h2>Product documents and CAD.</h2></div>
          <p>Use the product page for configuration context. If a file is not listed, request it through the technical enquiry form.</p>
        </div>
        <div className="resource-download-grid">
          {engineeringResources.map((resource) => <a className="resource-download-card" key={resource.href} href={resource.href} download><span>{resource.kind} · {resource.fileType}</span><strong>{resource.title}</strong><p>{resource.description}</p><small>{resource.sourceNote}<b>↓</b></small></a>)}
        </div>
      </div>
    </section>
    <section className="section resource-index-section">
      <div className="shell resource-grid">
        <article><span>01</span><h2>Certificates</h2><p>Model-level compliance records with covered-model scope kept explicit.</p><Link className="text-link" href="/resources/certificates/">View certificate registry <b>→</b></Link></article>
        <article><span>02</span><h2>Application notes</h2><p>Engineering guides connect configuration choices to operating requirements.</p><Link className="text-link" href="/technology/">Browse technology guides <b>→</b></Link></article>
        <article><span>03</span><h2>Additional evidence</h2><p>Ask about test reports, application results or source files not yet published here.</p><Link className="text-link" href="/contact/#application-form">Request a document <b>→</b></Link></article>
      </div>
    </section>
  </>;
}
