import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import type { EditorialPage } from "@/lib/editorial-content";
import { siteConfig } from "@/lib/site";

function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${siteConfig.url}${path}`;
}

export function EditorialDetail({ page, section }: { page: EditorialPage; section: "Applications" | "Technology" }) {
  const fallbackSlug = page.primaryKeyword?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") ?? "";
  const pagePath = page.slug ?? `/${section.toLowerCase()}/${fallbackSlug}/`;
  const sectionImages = page.articleSections?.flatMap((articleSection) => articleSection.image ? [articleSection.image] : []) ?? [];
  const images = [page.featuredImage, ...sectionImages].filter((image): image is NonNullable<typeof image> => Boolean(image));
  const articleBody = [
    ...(page.directAnswer ?? []),
    ...(page.articleSections?.flatMap((articleSection) => [
      ...articleSection.paragraphs,
      ...(articleSection.subsections?.flatMap((subsection) => subsection.paragraphs) ?? []),
    ]) ?? []),
    ...(page.conclusion ?? []),
  ].join("\n\n");
  const articleSchema = page.articleSections ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    url: absoluteUrl(pagePath),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(pagePath) },
    ...(page.publishedAt ? { datePublished: page.publishedAt } : {}),
    ...(page.modifiedAt ? { dateModified: page.modifiedAt } : {}),
    ...(images.length ? { image: images.map((image) => absoluteUrl(image.src)) } : {}),
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    keywords: [page.primaryKeyword, ...(page.secondaryKeywords ?? [])].filter(Boolean).join(", "),
    articleSection: section,
    articleBody,
    wordCount: articleBody.trim().split(/\s+/).filter(Boolean).length,
    isAccessibleForFree: true,
  } : null;
  const faqSchema = page.faq?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  } : null;
  const midCta = page.midCta ?? {
    eyebrow: "PROCESS REVIEW",
    title: "Have a target profile or evaluation coupon?",
    description: "Send the substrate, resist, height map, tolerance and metrology plan for a configuration-level review.",
    label: "Plan a sample evaluation",
    href: "/contact/#application-form",
  };

  return <>
    <section className={`editorial-hero${page.featuredImage ? " editorial-hero-with-image" : ""}`}>
      <div className="shell editorial-hero-grid">
        <div>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: section, href: `/${section.toLowerCase()}/` }, { label: page.title }]} />
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
          {page.publishedAt ? <p className="article-date">Published <time dateTime={page.publishedAt}>{page.publishedAt}</time></p> : null}
        </div>
        {page.featuredImage ? <figure className="editorial-featured-image"><Image src={page.featuredImage.src} alt={page.featuredImage.alt} width={page.featuredImage.width} height={page.featuredImage.height} sizes="(max-width: 900px) 100vw, 46vw" preload /></figure> : null}
      </div>
    </section>

    {page.directAnswer?.length ? <section className="section answer-summary"><div className="shell detail-two-column"><div><p className="eyebrow">DIRECT ANSWER</p><h2>What should a buyer prioritize?</h2></div><div>{page.directAnswer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section> : null}

    <section className="section editorial-intro"><div className="shell detail-two-column"><div><p className="eyebrow">ENGINEERING CONTEXT</p><h2>The decision starts with the real constraint.</h2></div><div><p className="detail-positioning">{page.challenge}</p><Link className="text-link" href="/contact/#application-form">Discuss your requirement <span>↗</span></Link></div></div></section>
    <section className="section benefit-section"><div className="shell"><p className="eyebrow">CRITICAL REQUIREMENTS</p><h2 className="standalone-heading">Define these before model selection.</h2><div className="benefit-grid">{page.requirements.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>

    {page.comparisonTable ? <section className="section article-table-section"><div className="shell"><div className="section-heading-row"><div><p className="eyebrow">BUYER MATRIX</p><h2>Compare evidence, not feature labels.</h2></div><p>Give every shortlisted supplier the same process definition and request configuration-specific proof.</p></div><div className="article-table-wrap"><table><caption>{page.comparisonTable.caption}</caption><thead><tr>{page.comparisonTable.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{page.comparisonTable.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={cell} scope="row">{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></div></section> : null}

    {page.articleSections ? <section className="section editorial-article"><div className="shell editorial-article-grid"><aside className="editorial-article-label"><p className="eyebrow">TECHNICAL GUIDE</p><h2>Selection logic, explained.</h2></aside><div className="prose editorial-prose">{page.articleSections.map((articleSection, index) => <Fragment key={articleSection.heading}><section><h2>{articleSection.heading}</h2>{articleSection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{articleSection.image ? <figure className="editorial-inline-image"><Image src={articleSection.image.src} alt={articleSection.image.alt} width={articleSection.image.width} height={articleSection.image.height} sizes="(max-width: 900px) 100vw, 720px" loading="lazy" /></figure> : null}{articleSection.bullets ? <ul>{articleSection.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}{articleSection.subsections?.map((subsection) => <section className="editorial-subsection" key={subsection.heading}><h3>{subsection.heading}</h3>{subsection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{subsection.bullets ? <ul>{subsection.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}</section>)}{articleSection.links ? <div className="article-links">{articleSection.links.map((link) => <Link className="text-link" key={link.href} href={link.href}>{link.label} <span>↗</span></Link>)}</div> : null}</section>{index === 3 ? <aside className="article-mid-cta"><p className="eyebrow eyebrow-light">{midCta.eyebrow}</p><h2>{midCta.title}</h2><p>{midCta.description}</p><Link className="button button-light" href={midCta.href}>{midCta.label} <span>↗</span></Link></aside> : null}</Fragment>)}</div></div></section> : null}

    {page.conclusion?.length ? <section className="section article-conclusion"><div className="shell detail-two-column"><div><p className="eyebrow">CONCLUSION</p><h2>{page.conclusionHeading ?? "Qualify the process, then the platform."}</h2></div><div>{page.conclusion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section> : null}
    <section className="section route-section"><div className="shell specification-layout"><div><p className="eyebrow">SOLUTION ROUTES</p><h2>Continue from requirement to system.</h2></div><div className="route-list">{page.routes.map((route) => <Link key={route.href} href={route.href}><strong>{route.label}</strong><span>{route.note}</span><b>→</b></Link>)}</div></div></section>
    <section className="section evidence-checklist"><div className="shell detail-two-column"><div><p className="eyebrow eyebrow-light">EVIDENCE CHECKLIST</p><h2>Ask for evidence that closes the decision.</h2></div><ul>{page.evidence.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    {page.faq?.length ? <section className="section faq-section"><div className="shell detail-two-column"><div><p className="eyebrow">FAQ</p><h2>Questions engineers ask before selection.</h2></div><div className="faq-list">{page.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section> : null}
    {page.sources?.length ? <section className="section article-sources"><div className="shell detail-two-column"><div><p className="eyebrow">AUTHORITATIVE SOURCES</p><h2>Research used for this buyer guide.</h2></div><ol>{page.sources.map((source) => <li key={source.href}><span>{source.publisher}</span><a href={source.href} target="_blank" rel="noreferrer">{source.label} <b>↗</b></a></li>)}</ol></div></section> : null}
    <section className="section final-cta"><div className="shell cta-panel"><div><p className="eyebrow">TECHNICAL REVIEW</p><h2>Turn the requirement into a selection brief.</h2></div><div><p>Send the application, critical parameters and any drawing or process information available.</p><Link className="button button-dark" href="/contact/#application-form">Discuss your application <span>↗</span></Link></div></div></section>
    {articleSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} /> : null}
    {faqSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} /> : null}
  </>;
}
