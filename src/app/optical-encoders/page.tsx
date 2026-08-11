import type { Metadata } from "next";
import Link from "next/link";
import { ListingHero } from "@/components/listing-hero";
import { ModelTable } from "@/components/model-table";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Optical Encoders for Precision Positioning", description: "Compare incremental, absolute, linear, rotary, miniature and vacuum-oriented optical encoders.", alternates: { canonical: "/optical-encoders/" } };

const rows = [
  { model: "SMG20", type: "Incremental linear", primary: "20 µm pitch · down to 0.5 nm", secondary: "Miniature, high-resolution", href: "/optical-encoders/smg20/" },
  { model: "SMG26", type: "Incremental linear", primary: "256 µm pitch · down to 4 nm", secondary: "High-speed architecture", href: "/optical-encoders/smg26/" },
  { model: "SAG21", type: "Absolute linear", primary: "BiSS-C · 20 MHz clock", secondary: "Direct absolute position", href: "/optical-encoders/sag21/" },
  { model: "MICRON-P2", type: "Incremental linear", primary: "20 µm pitch · compact readhead", secondary: "Space-constrained systems", href: "/optical-encoders/micron-p2/" },
  { model: "SCG Series", type: "Incremental rotary", primary: "Four disc formats", secondary: "Rotary position feedback", href: "/optical-encoders/scg-series/" },
];

export default function EncodersPage() {
  return <>
    <ListingHero eyebrow="POSITION FEEDBACK" title="Optical encoders for precision positioning." description="Select by motion geometry, feedback type, resolution, speed, interface, installation envelope and environment—not by one headline number." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Optical encoders" }]} primaryLabel="Request an encoder recommendation" />
    <section className="section"><div className="shell"><SectionHeading eyebrow="SELECT ENCODER TECHNOLOGY" title="Start with the feedback architecture." /><div className="selection-grid">
      <Link href="/optical-encoders/incremental-linear/"><span>01</span><h3>Incremental linear</h3><p>Compact, configurable feedback for stages, linear motors and scientific motion.</p><b>→</b></Link>
      <Link href="/optical-encoders/absolute-linear/"><span>02</span><h3>Absolute linear</h3><p>Direct position data for systems that must avoid conventional homing.</p><b>→</b></Link>
      <Link href="/optical-encoders/rotary/"><span>03</span><h3>Rotary</h3><p>Disc-based feedback for rotary stages, spindles and angular positioning.</p><b>→</b></Link>
      <Link href="/optical-encoders/vacuum/"><span>04</span><h3>Vacuum-oriented</h3><p>Begin the review with materials, cable, vacuum level and outgassing evidence.</p><b>→</b></Link>
    </div></div></section>
    <section className="section table-section"><div className="shell"><SectionHeading eyebrow="MODEL COMPARISON" title="Compare the first-selection variables." description="Values shown here are source-backed. Final speed and environment suitability remain configuration-dependent." /><ModelTable rows={rows} /></div></section>
    <section className="section knowledge-band"><div className="shell knowledge-grid"><div><p className="eyebrow eyebrow-light">SELECTION KNOWLEDGE</p><h2>Incremental or absolute?</h2></div><div><p>Compare homing strategy, interface, failure recovery, travel and motion profile before selecting the feedback architecture.</p><Link className="button button-light" href="/technology/incremental-vs-absolute-encoder/">Read the engineering guide <span>→</span></Link></div></div></section>
  </>;
}
