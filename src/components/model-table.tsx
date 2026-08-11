import Link from "next/link";

export type ModelRow = {
  model: string;
  type: string;
  primary: string;
  secondary: string;
  href: string;
  status?: string;
};

export function ModelTable({ rows }: { rows: ModelRow[] }) {
  return (
    <div className="model-table" role="table" aria-label="Product model comparison">
      <div className="model-row model-head" role="row"><span>Model</span><span>Type</span><span>Key specification</span><span>Positioning</span><span /></div>
      {rows.map((row) => (
        <Link className="model-row" href={row.href} key={row.model} role="row">
          <strong>{row.model}</strong><span>{row.type}</span><span>{row.primary}</span><span>{row.secondary}</span><b aria-label={`View ${row.model}`}>→</b>
        </Link>
      ))}
    </div>
  );
}
