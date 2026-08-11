import Link from "next/link";
import { primaryNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand brand-light" href="/">
            <span className="brand-mark" aria-hidden="true">S</span>
            <span className="brand-copy"><strong>SENFU</strong><small>TECHNOLOGY</small></span>
          </Link>
          <p className="footer-statement">
            Technical supply and application support for precision position feedback and micro/nano fabrication systems.
          </p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <div className="footer-links">
            {primaryNav.slice(0, 4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="footer-label">Company</p>
          <div className="footer-links">
            {primaryNav.slice(4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/privacy/">Privacy</Link>
          </div>
        </div>
        <div>
          <p className="footer-label">Technical enquiries</p>
          {siteConfig.email ? <a className="footer-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : <Link className="footer-email" href="/contact/">Technical enquiry form</Link>}
          <p className="footer-note">Shenzhen, China · Global B2B support</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} SENFU Technology</span>
        <span>Specifications are configuration-dependent and subject to technical confirmation.</span>
      </div>
    </footer>
  );
}
