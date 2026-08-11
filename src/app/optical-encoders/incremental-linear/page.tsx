import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";

export const metadata: Metadata = { title: "Incremental Linear Optical Encoders", description: "Compare miniature and high-speed incremental linear optical encoders.", alternates: { canonical: "/optical-encoders/incremental-linear/" } };

export default function Page() { return <CategoryPage eyebrow="INCREMENTAL LINEAR ENCODERS" title="Incremental linear optical encoders." description="Position feedback families for compact stages, high-speed axes and precision OEM motion systems." parent={{ label: "Optical encoders", href: "/optical-encoders/" }} rows={[
  { model: "SMG20", type: "20 µm pitch", primary: "0.5–100 nm documented options", secondary: "Miniature, high resolution", href: "/optical-encoders/smg20/" },
  { model: "SMG26", type: "256 µm pitch", primary: "4–100 nm documented options", secondary: "High-speed architecture", href: "/optical-encoders/smg26/" },
  { model: "MICRON-P2", type: "20 µm pitch", primary: "Standard options under review", secondary: "Compact systems", href: "/optical-encoders/micron-p2/" },
]} requirements={[
  { title: "Resolution", description: "Specify control-loop and measurement needs without confusing resolution with scale accuracy." },
  { title: "Motion profile", description: "Maximum speed must be evaluated together with resolution and output frequency." },
  { title: "Integration", description: "Confirm readhead envelope, scale material, gap, cable and environment." },
]} note="Orderable combinations and maximum speed are confirmed against configuration-specific source data." />; }
