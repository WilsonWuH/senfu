import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import type { EditorialPage } from "@/lib/editorial-content";

export function EditorialDetail({ page, section }: { page: EditorialPage; section: "Applications" | "Technology" }) {
  return <>
    <section className="editorial-hero"><div className="shell"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: section, href: `/${section.toLowerCase()}/` }, { label: page.title }]} /><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.description}</p></div></section>
    <section className="section editorial-intro"><div className="shell detail-two-column"><div><p className="eyebrow">ENGINEERING CONTEXT</p><h2>The decision starts with the real constraint.</h2></div><div><p className="detail-positioning">{page.challenge}</p><Link className="text-link" href="/contact/#application-form">Discuss your requirement <span>↗</span></Link></div></div></section>
    <section className="section benefit-section"><div className="shell"><p className="eyebrow">CRITICAL REQUIREMENTS</p><h2 className="standalone-heading">Define these before model selection.</h2><div className="benefit-grid">{page.requirements.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    <section className="section route-section"><div className="shell specification-layout"><div><p className="eyebrow">SOLUTION ROUTES</p><h2>Continue from requirement to system.</h2></div><div className="route-list">{page.routes.map((route) => <Link key={route.href} href={route.href}><strong>{route.label}</strong><span>{route.note}</span><b>→</b></Link>)}</div></div></section>
    <section className="section evidence-checklist"><div className="shell detail-two-column"><div><p className="eyebrow eyebrow-light">EVIDENCE CHECKLIST</p><h2>Ask for evidence that closes the decision.</h2></div><ul>{page.evidence.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    <section className="section final-cta"><div className="shell cta-panel"><div><p className="eyebrow">TECHNICAL REVIEW</p><h2>Turn the requirement into a selection brief.</h2></div><div><p>Send the application, critical parameters and any drawing or process information available.</p><Link className="button button-dark" href="/contact/#application-form">Discuss your application <span>↗</span></Link></div></div></section>
  </>;
}
