import Link from "next/link";

const encoderLinks = [
  { label: "All optical encoders", href: "/optical-encoders/", note: "Compare every encoder family" },
  { label: "Incremental linear", href: "/optical-encoders/incremental-linear/", note: "High-speed linear feedback" },
  { label: "Absolute linear", href: "/optical-encoders/absolute-linear/", note: "Position retained at power-up" },
  { label: "Rotary encoders", href: "/optical-encoders/rotary/", note: "Precision angular measurement" },
  { label: "Vacuum encoders", href: "/optical-encoders/vacuum/", note: "Designed for vacuum motion" },
];

const lithographyLinks = [
  { label: "All lithography systems", href: "/lithography-systems/", note: "Explore the complete portfolio" },
  { label: "Maskless lithography", href: "/lithography-systems/maskless-lithography/", note: "Rapid direct-write patterning" },
  { label: "Electron beam lithography", href: "/lithography-systems/electron-beam-lithography/", note: "Research-grade nanoscale writing" },
];

export function ProductMegaMenu() {
  return (
    <div className="mega-menu">
      <Link className="mega-menu-trigger" href="/products/" aria-haspopup="true">
        Products <span className="mega-menu-chevron" aria-hidden="true">⌄</span>
      </Link>
      <div className="mega-menu-panel" role="navigation" aria-label="Product navigation">
        <div className="mega-menu-heading">
          <div>
            <span className="mega-menu-kicker">Precision technology portfolio</span>
            <p>Find the right platform for motion feedback or micro/nano fabrication.</p>
          </div>
          <Link className="mega-menu-all" href="/products/">View all products <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="mega-menu-grid">
          <section className="mega-menu-column" aria-labelledby="encoder-menu-title">
            <h2 id="encoder-menu-title">Optical Encoders</h2>
            <p className="mega-menu-section-copy">Precision position feedback for demanding motion systems.</p>
            <div className="mega-menu-links">
              {encoderLinks.map((item) => (
                <Link key={item.href} href={item.href}><span>{item.label}</span><small>{item.note}</small></Link>
              ))}
            </div>
          </section>
          <section className="mega-menu-column" aria-labelledby="lithography-menu-title">
            <h2 id="lithography-menu-title">Lithography Systems</h2>
            <p className="mega-menu-section-copy">Direct-write systems from rapid prototyping to nanoscale R&amp;D.</p>
            <div className="mega-menu-links">
              {lithographyLinks.map((item) => (
                <Link key={item.href} href={item.href}><span>{item.label}</span><small>{item.note}</small></Link>
              ))}
            </div>
          </section>
          <aside className="mega-menu-advisor">
            <span className="mega-menu-advisor-tag">Engineering support</span>
            <h2>Start with the requirement.</h2>
            <p>Share resolution, travel, environment and integration constraints. We will help narrow the right technology and model.</p>
            <Link className="mega-menu-advisor-cta" href="/contact/#application-form">Discuss your application <span aria-hidden="true">↗</span></Link>
            <Link className="mega-menu-resource-link" href="/resources/">Browse technical resources <span aria-hidden="true">→</span></Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
