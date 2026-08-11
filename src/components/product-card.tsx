import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  model: string;
  title: string;
  description: string;
  facts: string[];
  href: string;
  image: string;
  imagePosition?: string;
  tone?: "light" | "blue";
};

export function ProductCard({ model, title, description, facts, href, image, imagePosition = "50% 35%", tone = "light" }: ProductCardProps) {
  return (
    <article className={`product-card product-card-${tone}`}>
      <div className="product-image-frame">
        <Image
          src={image}
          alt={`${model} product image`}
          fill
          loading="eager"
          sizes="(max-width: 760px) 100vw, 33vw"
          style={{ objectFit: "cover", objectPosition: imagePosition }}
        />
        <span className="source-badge">Source-backed data</span>
      </div>
      <div className="product-card-body">
        <p className="product-model">{model}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>{facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
        <Link className="text-link" href={href}>View product <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
