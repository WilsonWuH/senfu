import type { EditorialPage } from "@/lib/editorial-content";

export const electronBeamLithographyChargingEffectCompensationGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / ELECTRON-BEAM LITHOGRAPHY",
  title: "Charging Effects in Electron-Beam Lithography: Detection, Prevention and Dose Correction",
  description:
    "Charge accumulated on a resist or an insulating substrate deflects the electron beam, shifts pattern placement and distorts dose before proximity correction can help. This guide explains how charging is diagnosed, prevented with grounded or conductive paths, and controlled when an insulating stack is unavoidable.",
  slug: "/technology/electron-beam-lithography-charging-effect-compensation-guide/",
  publishedAt: "2026-10-04",
  modifiedAt: "2026-10-04",
  primaryKeyword: "electron beam lithography charging effect",
  secondaryKeywords: [
    "EBL charging and beam deflection",
    "resist charging compensation",
    "conductive discharge layer e-beam",
    "pattern placement error charging",
    "insulating substrate e-beam lithography",
    "charge dissipation layer removal",
  ],
  featuredImage: {
    src: "/images/technology/electron-beam-lithography-charging-effect-compensation-guide/electron-beam-lithography-charging-effect-compensation-guide-cover.webp",
    alt: "Electron-beam lithography column and chamber in a cleanroom laboratory, with a resist-coated wafer loaded on a grounded stage and a process engineer monitoring the write log on an adjacent console",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Charging is the accumulation of electrons on the resist surface or in an insulating substrate during electron-beam exposure. The trapped charge creates a local electric field that deflects the incoming beam and can also change the effective landing energy, so the pattern lands where the deflection pushes it. On insulating or floating substrates the placement error can reach micrometres and the local dose can vary across a single field, producing stitching errors, linewidth drift and, in the worst case, a pattern that is anchored to the charging history rather than to the designed coordinates.",
    "The fix is always layered and ordered: first give the electrons a path to leave, using a grounded conductive substrate, a conductive coating or a discharge layer; then control the current density and write order so charge does not build faster than it can dissipate; only then apply dose and proximity corrections, because correction assumes the beam arrives where it is aimed. Dose correction applied on top of uncontrolled charging corrects the wrong quantity and can make results worse rather than better.",
  ],
  challenge:
    "A pattern that wrote cleanly on a silicon wafer with an identical resist throws the same features hundreds of nanometres off target when the substrate is changed to glass, quartz or a polymer. The dose, the beam current and the design file are unchanged, so the natural assumption is that the resist or the process has drifted. In reality the new substrate is insulating, the electrons deposited by the beam have nowhere to go, and the resulting surface potential quietly bends the column's own beam. The effect is insidious because it grows during the write: early fields look acceptable, later fields are progressively displaced, and the error often appears as a smooth position-dependent drift that no proximity correction was designed to remove.",
  requirements: [
    { title: "A defined charge path", description: "A grounded conductive route from the resist surface or substrate to the stage, established before any correction is applied, so the primary charging mechanism is removed rather than compensated." },
    { title: "Substrate and stack awareness", description: "Substrate conductivity, any conductive or discharge layer, resist thickness and underlying films documented for the actual lot, because the same recipe behaves differently on insulating and conducting stacks." },
    { title: "Current density and write order control", description: "Beam current, dwell time and field order set so that charge generation stays within what the dissipation path can remove during the write." },
    { title: "Charging-aware verification", description: "Placement and linewidth measured on dedicated test structures at the beginning, middle and end of the write, so a charging drift is separated from a dose or focus error." },
  ],
  routes: [
    { label: "Electron-beam lithography systems", href: "/lithography-systems/electron-beam-lithography/", note: "Direct-write EBL platforms" },
    { label: "Proximity effect correction guide", href: "/technology/electron-beam-lithography-proximity-effect-correction-guide/", note: "Dose correction after charging is controlled" },
    { label: "Substrate and resist compatibility", href: "/technology/maskless-lithography-substrate-resist-compatibility/", note: "Stack selection and process windows" },
    { label: "Discuss an insulating stack", href: "/contact/#application-form", note: "Review substrate and layer plan" },
  ],
  evidence: [
    "Stack drawing showing substrate, any conductive or discharge layer, resist and the grounding point",
    "Placement error measured at several fields across the write, with the substrate and layer construction stated",
    "Linewidth and dose data on insulating and conducting control samples using the same recipe",
    "Beam current, dwell time and field order used for the qualification run",
    "Discharge-layer removal and inspection result for the process after exposure",
  ],
  comparisonTable: {
    caption: "Charging control options and what each one solves",
    headers: ["Approach", "How it works", "Best for", "Limit or cost"],
    rows: [
      ["Conductive or grounded substrate", "Deposited charge drains to ground through the substrate and a defined contact", "Conducting wafers, metal-coated samples, stacks with a buried conductor", "Not possible on many glass and polymer substrates"],
      ["Discharge layer on top", "A thin conductive film spreads and removes surface charge", "Insulating and floating substrates that cannot be grounded directly", "Adds a deposition step and must be removed without damaging the pattern"],
      ["Writable conductive underlayer", "A removable conductive film below the resist connects the stack to ground", "Stacks where a top layer would interfere with the exposure or the resist", "Requires a compatible etch or lift-off removal step"],
      ["Current density and write-order control", "Keeps charge generation below the dissipation rate of the real path", "Any stack, as a supporting measure alongside a charge path", "May reduce throughput and is not a substitute for grounding"],
      ["Dose and proximity correction", "Adjusts delivered dose for scattering after placement is stable", "Correcting genuine proximity and resist effects once charging is under control", "Cannot correct placement error caused by beam deflection"],
    ],
  },
  articleSections: [
    {
      heading: "What charging actually does to the beam",
      paragraphs: [
        "Electron-beam lithography writes with electrons that stop in the resist, the substrate or the layers between them. If those electrons cannot leave, a negative charge accumulates at the surface and a positive charge can build where the beam has stripped electrons from deeper layers. The resulting field deflects the low-energy beam on its way in, so the landing point moves relative to the designed coordinate. Because the field grows during the exposure, the deflection is not constant: it depends on how much has already been written nearby, on the write order and on the local pattern density.",
      ],
    },
    {
      heading: "Diagnosing charging versus a genuine process drift",
      paragraphs: [
        "Charging has a signature that distinguishes it from dose and focus errors. It varies with position across the substrate and with the order in which the fields were written, it changes when the substrate conductivity changes while the recipe stays fixed, and it often improves if the same area is written a second time with a lower current. A design that adds dedicated placement structures at the start, middle and end of a write lets the operator compare these patterns directly; a uniform offset points to calibration, while a progressive or density-dependent offset points to charging.",
        "A useful confirmation is a controlled substrate change. Write the same design on a conducting wafer and on the insulating material of interest with everything else held constant. If the insulating sample shows a larger and position-dependent placement error, charging is confirmed and its magnitude is now known. That number sets the target for the charge path, and it becomes the acceptance criterion for the process once the fix is in place.",
      ],
      bullets: [
        "Compare placement at the start, middle and end of a single write",
        "Repeat the recipe on a conducting control substrate with no other change",
        "Check whether the error scales with pattern density or with field order",
        "Log beam current and dwell time so rate effects can be separated from stack effects",
      ],
    },
    {
      heading: "Giving the charge somewhere to go",
      paragraphs: [
        "The most reliable charging fix is to remove the accumulation, not to compensate for it. If the substrate conducts, a firm, defined contact to the stage may be all that is required, but the contact must be real: a thin native oxide, a scratched carrier or a poorly seated sample can leave the substrate floating even when it looks grounded. For insulating and glass substrates, a thin conductive layer either below or above the resist provides the missing path, chosen so that it can be removed after exposure without damaging the pattern.",
      ],
      image: {
        src: "/images/technology/electron-beam-lithography-charging-effect-compensation-guide/electron-beam-lithography-charging-effect-compensation-guide-detail.webp",
        alt: "Coatings and process engineer preparing a resist-coated insulating sample with a thin conductive discharge layer and checking the grounding contact to the stage",
        width: 1600,
        height: 900,
      },
    },
    {
      heading: "Managing charge generation during the write",
      paragraphs: [
        "When a charge path exists but is imperfect, the write itself can be arranged to help. Lowering the beam current reduces the charge generated per unit time without changing the designed dose, because the same total charge is delivered over a longer period during which the path can remove it. Reordering fields or adding a short delay between passes spreads the accumulation over time. These measures trade throughput for stability, so they should be applied only where the charge path cannot be improved further.",
        "Write-order effects also interact with the pattern. Dense areas generate charge faster than sparse ones, so a design with a dense block next to an isolated feature will show the largest distortion at the boundary between them. Keeping a consistent field order and, where practical, balancing pattern density across the substrate reduces the spatial variation of the accumulated field.",
      ],
    },
    {
      heading: "Correcting dose only after placement is stable",
      paragraphs: [
        "Proximity effect correction and dose calibration are powerful once the beam lands where it is aimed. Applied before charging is controlled, they correct a dose distribution that is being spatially smeared by deflection, which is why teams sometimes see proximity correction fail to improve, or even worsen, results on insulating stacks. The correct sequence is charge path first, then verify placement, then build the dose and proximity model on that verified geometry.",
        "Once charging is under control, the dose model behaves as documented: resist and developer, beam energy and pattern density determine the correction, and the resulting linewidth becomes predictable across the design. Recording the charging-relevant conditions, substrate stack, grounding method, beam current and write order, alongside the dose model turns an apparently inconsistent process into a reproducible one. When results later drift, the record shows whether the stack or the write conditions have changed.",
      ],
      links: [
        { label: "Read the proximity effect correction guide", href: "/technology/electron-beam-lithography-proximity-effect-correction-guide/" },
        { label: "Read the substrate and resist compatibility guide", href: "/technology/maskless-lithography-substrate-resist-compatibility/" },
        { label: "Request an EBL process review", href: "/contact/#application-form" },
      ],
    },
  ],
  midCta: {
    eyebrow: "EBL CHARGING REVIEW",
    title: "Pattern placement drifting across the write?",
    description:
      "Send the substrate stack, resist, beam current and any placement data across the field, and SENFU can help separate charging from dose and focus effects and recommend a charge-dissipation and verification plan.",
    label: "Request a charging review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Control the charge, then correct the dose.",
  conclusion: [
    "Charging is a placement problem before it is a dose problem. Trapped electrons create a field that deflects the beam and shifts the landing point, so the pattern can miss its designed coordinate by far more than any proximity correction can address. Diagnosis relies on placement measured across the write and on a controlled comparison between conducting and insulating substrates.",
    "Solve it in order: establish a real charge path with a grounded substrate, a discharge layer or a removable conductive underlayer; manage current density and write order so charge is generated no faster than it can leave; and only then apply dose and proximity correction to a beam that lands where it is aimed. Handled this way, insulating stacks become as predictable as conducting ones.",
  ],
  faq: [
    {
      question: "How do I know an error is caused by charging rather than by dose?",
      answer:
        "Charging produces a position- and order-dependent placement error that grows during the write and changes when the substrate conductivity changes. Dose errors usually show up as a linewidth change that is more uniform across the pattern. Adding placement test structures at the start, middle and end of a write, and comparing a conducting control substrate, separates the two.",
    },
    {
      question: "Does proximity effect correction fix charging?",
      answer:
        "No. Proximity correction adjusts the delivered dose for electron scattering and resist effects. It assumes the beam lands where it is aimed, so it cannot correct a placement error caused by beam deflection. Charging must be controlled with a charge path first; proximity correction should be applied afterwards, on verified placement.",
    },
    {
      question: "What is a discharge layer and when should I use one?",
      answer:
        "A discharge layer is a thin conductive film applied to spread and remove surface charge. It is most useful on insulating or floating substrates that cannot be grounded directly. Because it sits in the beam path and must be removed after exposure, its deposition method and its removal step should be selected together and qualified as part of the process.",
    },
    {
      question: "What should I provide for an EBL charging review?",
      answer:
        "Provide the substrate material and conductivity, the full layer stack, resist type and thickness, any conductive or discharge layer, the grounding method, the beam current and dwell time, the field order, and any placement or linewidth data measured across the write. SENFU can then help define a charge-control and verification plan.",
    },
  ],
  sources: [
    {
      publisher: "NIST",
      label: "Nanofabrication and electron-beam lithography research",
      href: "https://www.nist.gov/",
    },
    {
      publisher: "SPIE",
      label: "Journal of Micro/Nanopatterning, Materials, and Metrology — charging and EBL process studies",
      href: "https://www.spie.org/",
    },
    {
      publisher: "SENFU",
      label: "Electron-beam lithography system specification and application documentation",
      href: "https://senfuprecision.com/lithography-systems/",
    },
  ],
};
