import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { SectionHeading } from "@/components/section-heading";
import { field, formatFieldValue, humanize } from "@/lib/products";
import type { ProductContent } from "@/lib/product-content";
import { siteConfig } from "@/lib/site";
import type { PublicProduct } from "@/lib/types";

type ProductDetailProps = {
  product: PublicProduct;
  content: ProductContent;
  siblings?: PublicProduct[];
  platform: "encoder" | "lithography";
};

export function ProductDetail({ product, content, siblings = [], platform }: ProductDetailProps) {
  const parent = platform === "encoder"
    ? { label: "Optical encoders", href: "/optical-encoders/" }
    : { label: "Lithography systems", href: "/lithography-systems/" };
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.productName,
    model: product.model,
    brand: { "@type": "Brand", name: product.brand },
    ...(product.manufacturer ? { manufacturer: { "@type": "Organization", name: product.manufacturer } } : {}),
    description: content.summary,
    url: `${siteConfig.url}${product.seo.slug}`,
  };

  return (
    <>
      <section className="detail-hero">
        <div className="shell">
          <Breadcrumb items={[{ label: "Home", href: "/" }, parent, { label: product.model }]} />
          <div className="detail-hero-grid">
            <div>
              <p className="eyebrow">{content.eyebrow}</p>
              <h1>{product.productName}</h1>
              <p className="detail-summary">{content.summary}</p>
              <div className="detail-actions">
                <Link className="button button-primary" href="/contact/#application-form">Request technical evaluation <span>↗</span></Link>
                <Link className="button button-secondary" href="/resources/">Engineering resources <span>→</span></Link>
              </div>
              <div className="role-line"><span>Brand <strong>{product.brand}</strong></span><span>Supplied by <strong>SENFU Technology</strong></span></div>
            </div>
            <div className="detail-visual">
              <Image src={content.image} alt={`${product.productName} product image`} fill loading="eager" sizes="(max-width: 900px) 100vw, 46vw" style={{ objectFit: "cover", objectPosition: content.imagePosition }} />
              <div className="detail-visual-label"><span>{product.model}</span><span>SOURCE-BACKED RECORD</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-spec-bar">
        <div className="shell detail-spec-grid">
          {content.specKeys.slice(0, 4).map((key) => (
            <div key={key}><small>{humanize(key)}</small><strong>{formatFieldValue(field(product, key))}</strong></div>
          ))}
        </div>
      </section>

      <section className="section detail-overview">
        <div className="shell detail-two-column">
          <div><p className="eyebrow">PRODUCT OVERVIEW</p><h2>Selection starts with the operating requirement.</h2></div>
          <div><p className="detail-positioning">{content.positioning}</p><div className="review-note"><strong>Open technical item</strong><span>{content.reviewNote}</span></div></div>
        </div>
      </section>

      <section className="section benefit-section">
        <div className="shell">
          <SectionHeading eyebrow="ENGINEERING VALUE" title="What this platform brings to the design." />
          <div className="benefit-grid">
            {content.benefits.map((benefit, index) => <article key={benefit.title}><span>0{index + 1}</span><h3>{benefit.title}</h3><p>{benefit.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section specification-section">
        <div className="shell specification-layout">
          <div><p className="eyebrow">KEY SPECIFICATIONS</p><h2>Source-backed technical data.</h2><p>These fields are projected from the product master record. Conflicting, missing and internal-only values do not enter this table.</p></div>
          <dl className="spec-table">
            {content.specKeys.map((key) => <div key={key}><dt>{humanize(key)}</dt><dd>{formatFieldValue(field(product, key))}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="section product-applications">
        <div className="shell">
          <SectionHeading eyebrow="SUITABLE APPLICATIONS" title="Evaluate fit in context." />
          <div className="application-pill-grid">{content.applications.map((application) => <div key={application}><span>↗</span>{application}</div>)}</div>
        </div>
      </section>

      {siblings.length > 1 ? (
        <section className="section related-products">
          <div className="shell">
            <SectionHeading eyebrow="FAMILY COMPARISON" title="Related configurations." />
            <div className="related-grid">{siblings.filter((item) => item.id !== product.id).slice(0, 3).map((item) => <Link key={item.id} href={item.seo.slug}><small>{item.brand}</small><strong>{item.model}</strong><span>{item.productName.replace(item.model, "").trim()}</span><b>→</b></Link>)}</div>
          </div>
        </section>
      ) : null}

      <section className="section product-cta"><div className="shell cta-panel"><div><p className="eyebrow">TECHNICAL EVALUATION</p><h2>Confirm the configuration against your machine or process.</h2></div><div><p>Send the motion profile, installation envelope, environment or lithography process target. We will turn it into a structured selection review.</p><Link className="button button-dark" href="/contact/#application-form">Discuss your application <span>↗</span></Link></div></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </>
  );
}
