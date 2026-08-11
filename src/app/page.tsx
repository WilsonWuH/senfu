import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Precision Positioning & Micro/Nano Fabrication",
  description: "Explore source-backed optical encoders and lithography systems for precision motion, semiconductor equipment and research fabrication.",
  alternates: { canonical: "/" },
};

const applications = [
  ["01", "Semiconductor equipment", "Position feedback and fabrication tools for tightly controlled process environments.", "/applications/semiconductor-equipment/"],
  ["02", "Precision motion", "Encoder selection for linear motors, XY stages and closed-loop positioning.", "/applications/precision-motion/"],
  ["03", "Vacuum motion", "Compact optical feedback configurations for vacuum-oriented motion systems.", "/applications/vacuum-motion/"],
  ["04", "MEMS & microfluidics", "Direct-write lithography platforms for iterative microscale device development.", "/applications/mems-microfluidics/"],
  ["05", "Photonics & micro-optics", "Grayscale and aligned exposure workflows for optical microstructures.", "/applications/photonics/"],
  ["06", "Quantum & nanofabrication", "DMD and electron-beam routes from large-area patterns to critical nanoscale features.", "/applications/quantum-nanofabrication/"],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">PRECISION MOTION · MICRO/NANO FABRICATION</p>
            <h1>Engineering systems for position feedback and patterning.</h1>
            <p className="hero-lead">
              SENFU Technology supplies source-backed optical encoders and lithography systems for OEM equipment, precision motion platforms and advanced research.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/optical-encoders/">Explore optical encoders <span aria-hidden="true">→</span></Link>
              <Link className="button button-secondary" href="/lithography-systems/">Explore lithography <span aria-hidden="true">→</span></Link>
            </div>
            <Link className="quiet-link" href="/contact/#application-form">Have a defined requirement? Discuss your application ↗</Link>
          </div>
          <div className="hero-visual" aria-label="SMG20 miniature optical encoder product image">
            <div className="visual-meta"><span>POSITION FEEDBACK / 01</span><span>20 µm SCALE PITCH</span></div>
            <div className="hero-image-window">
              <Image src="/materials/smg20-product.png" alt="SMG20 miniature optical encoder" fill loading="eager" sizes="(max-width: 900px) 100vw, 48vw" style={{ objectFit: "cover", objectPosition: "50% 34%" }} />
            </div>
            <div className="visual-readout">
              <div><small>FORMAT</small><strong>Incremental</strong></div>
              <div><small>FORM</small><strong>Miniature linear</strong></div>
              <div><small>DATA</small><strong>Traceable</strong></div>
            </div>
          </div>
        </div>
        <div className="shell proof-strip">
          <span><strong>12</strong> tracked product models</span>
          <span><strong>2</strong> technology platforms</span>
          <span><strong>1</strong> controlled data source</span>
          <span className="proof-note">Conflicting claims are blocked from publication.</span>
        </div>
      </section>

      <section className="section platform-section">
        <div className="shell">
          <SectionHeading eyebrow="TWO TECHNOLOGY PLATFORMS" title="Select by engineering objective." description="Start with the feedback or fabrication requirement, then compare configurations using parameters tied to original technical sources." />
          <div className="platform-grid">
            <article className="platform-card platform-card-dark">
              <div className="platform-number">01 / POSITION</div>
              <div>
                <p className="platform-kicker">Optical encoders</p>
                <h3>Close the loop with the right feedback architecture.</h3>
                <p>Incremental and absolute, linear and rotary, miniature and vacuum-oriented configurations.</p>
              </div>
              <div className="tag-row"><span>Linear</span><span>Rotary</span><span>BiSS-C</span><span>Vacuum</span></div>
              <Link className="platform-link" href="/optical-encoders/">Explore encoder selection <span>→</span></Link>
            </article>
            <article className="platform-card platform-card-blue">
              <div className="platform-number">02 / FABRICATION</div>
              <div>
                <p className="platform-kicker">Lithography systems</p>
                <h3>Move from digital pattern to micro- and nanoscale structures.</h3>
                <p>DMD maskless, grayscale and electron-beam platforms for research and advanced fabrication.</p>
              </div>
              <div className="tag-row"><span>DMD</span><span>Direct write</span><span>Grayscale</span><span>EBL</span></div>
              <Link className="platform-link" href="/lithography-systems/">Compare lithography routes <span>→</span></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section capabilities-section">
        <div className="shell capabilities-grid">
          <div className="capabilities-intro">
            <p className="eyebrow">BUILT AROUND REQUIREMENTS</p>
            <h2>Specifications mean more when the operating condition is visible.</h2>
            <p>Resolution, speed, overlay and throughput are not treated as isolated headline numbers. We preserve the configuration and source context needed for technical evaluation.</p>
            <Link className="text-link" href="/resources/">Review engineering resources <span>→</span></Link>
          </div>
          <div className="capability-list">
            <article><span>01</span><div><h3>Incremental &amp; absolute</h3><p>Match homing, interface and position retention requirements.</p></div></article>
            <article><span>02</span><div><h3>Linear &amp; rotary</h3><p>Select feedback geometry around travel, envelope and motion profile.</p></div></article>
            <article><span>03</span><div><h3>Vacuum configurations</h3><p>Surface exact vacuum grade and outgassing gaps before selection.</p></div></article>
            <article><span>04</span><div><h3>DMD &amp; electron beam</h3><p>Choose the patterning route by feature size, area, overlay and workflow.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section applications-section">
        <div className="shell">
          <SectionHeading eyebrow="APPLICATION ROUTES" title="Find a solution for your application." description="Engineering pages connect process challenges to critical specifications, suitable systems and the evidence needed for evaluation." />
          <div className="application-grid">
            {applications.map(([number, title, description, href]) => (
              <Link className="application-card" href={href} key={href}>
                <span>{number}</span><h3>{title}</h3><p>{description}</p><b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section products-section">
        <div className="shell">
          <div className="section-heading-row">
            <SectionHeading eyebrow="FEATURED SYSTEMS" title="Start with the most defined product records." description="The first release prioritizes models with the strongest source coverage. Configuration-dependent claims remain qualified." />
            <Link className="text-link desktop-only" href="/products/">View all products <span>→</span></Link>
          </div>
          <div className="product-grid">
            <ProductCard model="SMG20" title="Miniature optical linear encoder" description="Compact incremental feedback for constrained precision-motion assemblies." facts={["20 µm scale pitch", "Readhead: 5 × 12 × 21 mm"]} href="/optical-encoders/smg20/" image="/materials/smg20-product.png" />
            <ProductCard model="SMG26" title="High-speed incremental linear encoder" description="A larger-pitch architecture with configurations for high-speed positioning." facts={["256 µm scale pitch", "Resolution options down to 4 nm"]} href="/optical-encoders/smg26/" image="/materials/smg26-product.png" imagePosition="50% 28%" />
            <ProductCard model="ZML SERIES" title="DMD maskless lithography systems" description="Direct-write platforms spanning compact R&amp;D through larger-substrate configurations." facts={["385 / 405 nm", "DXF / GDS / BMP pattern formats"]} href="/lithography-systems/maskless-lithography/" image="/materials/zml-system-product.png" imagePosition="50% 36%" tone="blue" />
          </div>
        </div>
      </section>

      <section className="section evidence-section">
        <div className="shell evidence-grid">
          <div>
            <p className="eyebrow eyebrow-light">ENGINEERING EVIDENCE</p>
            <h2>A claim is only useful when its source and conditions travel with it.</h2>
          </div>
          <div className="evidence-copy">
            <p>Our content system separates brand, supplier and manufacturer roles; traces technical fields to source documents; and blocks conflicting or internal-only facts from public pages.</p>
            <div className="evidence-metrics">
              <div><strong>Parameter</strong><span>Source ID + locator</span></div>
              <div><strong>Certificate</strong><span>Model-level scope</span></div>
              <div><strong>Performance</strong><span>Conditions retained</span></div>
            </div>
            <Link className="button button-light" href="/resources/">Explore technical resources <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="shell cta-panel">
          <div><p className="eyebrow">APPLICATION REVIEW</p><h2>Bring us the requirement, not just a part number.</h2></div>
          <div><p>Share travel, resolution, environment, substrate or process targets. We will structure the next technical questions around your application.</p><Link className="button button-dark" href="/contact/#application-form">Discuss your application <span>↗</span></Link></div>
        </div>
      </section>
    </>
  );
}
