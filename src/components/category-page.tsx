import Link from "next/link";
import { ListingHero } from "@/components/listing-hero";
import { ModelTable, type ModelRow } from "@/components/model-table";
import { SectionHeading } from "@/components/section-heading";

type CategoryPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  parent: { label: string; href: string };
  rows: ModelRow[];
  requirements: { title: string; description: string }[];
  note: string;
};

export function CategoryPage({ eyebrow, title, description, parent, rows, requirements, note }: CategoryPageProps) {
  return <>
    <ListingHero eyebrow={eyebrow} title={title} description={description} breadcrumbs={[{ label: "Home", href: "/" }, parent, { label: title }]} />
    <section className="section"><div className="shell"><SectionHeading eyebrow="ENGINEERING REQUIREMENTS" title="Define the selection boundary first." /><div className="benefit-grid">{requirements.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    <section className="section table-section"><div className="shell"><SectionHeading eyebrow="AVAILABLE MODELS" title="Compare source-backed first-selection data." description={note} /><ModelTable rows={rows} /></div></section>
    <section className="section final-cta"><div className="shell cta-panel"><div><p className="eyebrow">APPLICATION REVIEW</p><h2>Need the right configuration, not just the nearest model?</h2></div><div><p>Share the operating requirement and available integration envelope. We will structure a technical comparison.</p><Link className="button button-dark" href="/contact/#application-form">Request a recommendation <span>↗</span></Link></div></div></section>
  </>;
}
