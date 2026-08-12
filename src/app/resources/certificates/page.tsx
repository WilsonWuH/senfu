import type { Metadata } from "next";
import { ListingHero } from "@/components/listing-hero";
import { complianceResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Certificate Registry",
  description: "Model-scoped SENFU product compliance documents and certificate downloads.",
  alternates: { canonical: "/resources/certificates/" },
};

export default function Page() {
  return <>
    <ListingHero eyebrow="COMPLIANCE REGISTRY" title="Certificate scope stays attached to the covered model." description="A certificate for one model is not generalized to the entire website. Records below remain tied to the source document and its stated scope." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources/" }, { label: "Certificates" }]} />
    <section className="section">
      <div className="shell certificate-list">
        <div className="certificate-row certificate-head"><span>Certificate</span><span>Covered models</span><span>Directive</span><span>Document</span></div>
        {complianceResources.map((item) => <div className="certificate-row" key={item.href}><div><strong>{item.sourceNote.replace("Certificate ", "")}</strong><small>{item.title}</small></div><span>{item.products.join(" / ")}</span><span>{item.title.includes("LVD") ? "2014/35/EU" : "2014/30/EU"}</span><a className="text-link" href={item.href} download>Download <b>↓</b></a></div>)}
      </div>
    </section>
  </>;
}
