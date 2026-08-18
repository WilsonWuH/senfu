import Image from "next/image";
import Link from "next/link";
import { company, primaryNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="footer-brand" href="/" aria-label="SENFU Technology home">
            <Image
              className="footer-brand-logo"
              src="/brand/senfu-logo.png"
              alt="SENFU Technology"
              width={208}
              height={76}
            />
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
          <a className="footer-contact-line" href={company.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp: {company.whatsapp}</a>
          <p className="footer-note">{company.address}<br />{company.hours}</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} SENFU Technology · {company.legalName} · {company.icp}</span>
        <span>Specifications are configuration-dependent and subject to technical confirmation.</span>
      </div>
    </footer>
  );
}
