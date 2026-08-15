import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import type { EditorialPage } from "@/lib/editorial-content";
import { siteConfig } from "@/lib/site";

export function EditorialDetail({ page, section }: { page: EditorialPage; section: "Applications" | "Technology" }) {
  const articleSchema = page.articleSections ? {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: page.title,
    description: page.description,
    url: `${siteConfig.url}/${section.toLowerCase()}/${page.primaryKeyword ? page.primaryKeyword.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") : ""}/`,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    keywords: [page.primaryKeyword, ...(page.secondaryKeywords ?? [])].filter(Boolean).join(", "),
    articleBody: page.articleSections.flatMap((section) => section.paragraphs).join("\n\n"),
  } : null;
  const faqSchema = page.faq?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  } : null;
  return <>
    <section className="editorial-hero"><div className="shell"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: section, href: `/${section.toLowerCase()}/` }, { label: page.title }]} /><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.description}</p></div></section>
    <section className="section editorial-intro"><div className="shell detail-two-column"><div><p className="eyebrow">ENGINEERING CONTEXT</p><h2>The decision starts with the real constraint.</h2></div><div><p className="detail-positioning">{page.challenge}</p><Link className="text-link" href="/contact/#application-form">Discuss your requirement <span>↗</span></Link></div></div></section>
    <section className="section benefit-section"><div className="shell"><p className="eyebrow">CRITICAL REQUIREMENTS</p><h2 className="standalone-heading">Define these before model selection.</h2><div className="benefit-grid">{page.requirements.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    {page.articleSections ? <section className="section editorial-article"><div className="shell editorial-article-grid"><div className="editorial-article-label"><p className="eyebrow">TECHNICAL GUIDE</p><h2>Selection logic, explained.</h2>{page.primaryKeyword ? <p className="article-keyword">Primary topic: {page.primaryKeyword}</p> : null}</div><div className="prose editorial-prose">{page.articleSections.map((articleSection) => <section key={articleSection.heading}><h2>{articleSection.heading}</h2>{articleSection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{articleSection.bullets ? <ul>{articleSection.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}{articleSection.links ? <div className="article-links">{articleSection.links.map((link) => <Link className="text-link" key={link.href} href={link.href}>{link.label} <span>↗</span></Link>)}</div> : null}</section>)}</div></div></section> : null}
    <section className="section route-section"><div className="shell specification-layout"><div><p className="eyebrow">SOLUTION ROUTES</p><h2>Continue from requirement to system.</h2></div><div className="route-list">{page.routes.map((route) => <Link key={route.href} href={route.href}><strong>{route.label}</strong><span>{route.note}</span><b>→</b></Link>)}</div></div></section>
    <section className="section evidence-checklist"><div className="shell detail-two-column"><div><p className="eyebrow eyebrow-light">EVIDENCE CHECKLIST</p><h2>Ask for evidence that closes the decision.</h2></div><ul>{page.evidence.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    {page.faq?.length ? <section className="section faq-section"><div className="shell detail-two-column"><div><p className="eyebrow">FAQ</p><h2>Questions engineers ask before selection.</h2></div><div className="faq-list">{page.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section> : null}
    <section className="section final-cta"><div className="shell cta-panel"><div><p className="eyebrow">TECHNICAL REVIEW</p><h2>Turn the requirement into a selection brief.</h2></div><div><p>Send the application, critical parameters and any drawing or process information available.</p><Link className="button button-dark" href="/contact/#application-form">Discuss your application <span>↗</span></Link></div></div></section>
    {articleSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} /> : null}
    {faqSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} /> : null}
  </>;
}
