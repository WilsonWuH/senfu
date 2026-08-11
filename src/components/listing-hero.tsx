import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";

type ListingHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: { label: string; href?: string }[];
  primaryHref?: string;
  primaryLabel?: string;
};

export function ListingHero({ eyebrow, title, description, breadcrumbs, primaryHref = "/contact/#application-form", primaryLabel = "Request a recommendation" }: ListingHeroProps) {
  return (
    <section className="listing-hero">
      <div className="shell">
        <Breadcrumb items={breadcrumbs} />
        <div className="listing-hero-grid">
          <div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div>
          <div><p>{description}</p><Link className="button button-primary" href={primaryHref}>{primaryLabel} <span>↗</span></Link></div>
        </div>
      </div>
    </section>
  );
}
