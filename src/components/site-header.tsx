import Link from "next/link";
import { primaryNav } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>Precision motion &amp; micro/nano fabrication</span>
          <span className="utility-proof">Source-backed technical data</span>
        </div>
      </div>
      <div className="shell nav-row">
        <Link className="brand" href="/" aria-label="SENFU Technology home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span className="brand-copy">
            <strong>SENFU</strong>
            <small>TECHNOLOGY</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Link className="button button-small button-dark header-cta" href="/contact/#application-form">
          Discuss your application <span aria-hidden="true">↗</span>
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link href="/contact/#application-form">Discuss your application</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
