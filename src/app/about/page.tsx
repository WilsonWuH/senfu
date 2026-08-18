import type { Metadata } from "next";
import Link from "next/link";
import { ListingHero } from "@/components/listing-hero";
import { company, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About SENFU Technology",
  description: "SENFU Technology is a Shenzhen-based technical supplier for optical encoders and micro/nano fabrication systems.",
  alternates: { canonical: "/about/" },
};

export default function Page() {
  return <>
    <ListingHero
      eyebrow="ABOUT SENFU TECHNOLOGY"
      title="A technical supplier for precision positioning and micro/nano fabrication."
      description="SENFU Technology helps engineering teams evaluate optical encoders and lithography systems against the requirements of their machines, processes and research programs."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      primaryHref="/contact/#application-form"
      primaryLabel="Discuss your application"
    />

    <section className="section">
      <div className="shell detail-two-column">
        <div>
          <p className="eyebrow">OUR ROLE</p>
          <h2>Technical selection, documentation and commercial coordination.</h2>
        </div>
        <div>
          <p className="detail-positioning">
            Shenzhen-based SENFU Technology supplies product platforms from specialized technology brands, including ZEPTOOLS and HOPO. Our work is centered on matching motion-feedback and lithography requirements with a documented product configuration.
          </p>
          <p className="detail-copy">
            We identify the supplier, brand and manufacturer for each product where the source record supports it. Public specifications are taken from original product documents and qualified when a value depends on configuration or still needs technical confirmation.
          </p>
          <Link className="text-link" href="/contact/">Start a technical enquiry <span>→</span></Link>
        </div>
      </div>
    </section>

    <section className="section evidence-section">
      <div className="shell evidence-grid">
        <div className="evidence-copy">
          <p className="eyebrow eyebrow-light">WHAT WE SUPPORT</p>
          <h2>Engineering decisions with the right level of evidence.</h2>
          <p>Our two technology platforms serve precision motion, semiconductor equipment, microfabrication and research applications.</p>
        </div>
        <div className="evidence-metrics">
          <div><strong>Position feedback</strong><span>Incremental, absolute, linear, rotary and vacuum-oriented optical encoder configurations.</span></div>
          <div><strong>Micro/nano fabrication</strong><span>DMD maskless and electron beam lithography platforms for process development and research.</span></div>
          <div><strong>Technical route</strong><span>Product selection, configuration review, engineering documentation and RFQ coordination.</span></div>
          <div><strong>Data discipline</strong><span>Source-backed public fields, explicit review notes and no invented performance claims.</span></div>
        </div>
      </div>
    </section>

    <section className="section company-section">
      <div className="shell company-grid">
        <div>
          <p className="eyebrow">COMPANY INFORMATION</p>
          <h2>Contact the SENFU technical sales team.</h2>
          <p className="detail-copy">For product selection, configuration checks and document requests, send the application requirements through the enquiry form or contact us directly.</p>
          <Link className="button button-primary" href="/contact/#application-form">Discuss your application <span>→</span></Link>
        </div>
        <dl className="company-details">
          <div><dt>Legal entity</dt><dd>{company.legalName}</dd></div>
          <div><dt>Website brand</dt><dd>{siteConfig.name}</dd></div>
          <div><dt>Address</dt><dd>{company.address}</dd></div>
          <div><dt>Phone</dt><dd><a href={company.phoneHref}>{company.phone}</a></dd></div>
          <div><dt>WhatsApp</dt><dd><a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">{company.whatsapp}</a></dd></div>
          <div><dt>Business hours</dt><dd>{company.hours}</dd></div>
          <div><dt>Registration</dt><dd>{company.icp}</dd></div>
        </dl>
      </div>
    </section>
  </>;
}
