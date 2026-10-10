import type { EditorialPage } from "@/lib/editorial-content";

export const electronBeamLithographyFocusStigmatorCalibrationGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / ELECTRON BEAM LITHOGRAPHY",
  title: "Electron Beam Lithography Focus and Stigmator Calibration: A Practical Guide",
  description:
    "Critical dimension in electron beam lithography is set as much by column condition as by the pattern data. This guide explains how focus, stigmator and beam-position calibration work, which drift contributors matter, and how to build a repeatable calibration routine that keeps linewidths inside specification.",
  slug: "/technology/electron-beam-lithography-focus-stigmator-calibration-guide/",
  publishedAt: "2026-10-10",
  modifiedAt: "2026-10-10",
  primaryKeyword: "electron beam lithography focus calibration",
  secondaryKeywords: [
    "EBL stigmator correction",
    "astigmatism calibration electron beam",
    "electron beam focus drift",
    "working distance calibration EBL",
    "beam column conditioning",
  ],
  featuredImage: {
    src: "/images/technology/electron-beam-lithography-focus-stigmator-calibration-guide/electron-beam-lithography-focus-stigmator-calibration-guide-cover.webp",
    alt: "Electron beam lithography column above a vacuum chamber with a calibration sample loaded on the stage",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Focus and stigmator calibration in electron beam lithography aligns the electron-optical column so that the beam spot is small, round and correctly positioned on the substrate. The routine typically sets the working distance, minimizes astigmatism with the stigmator coils using a stigmation target, verifies spot size against a resolution standard, and checks beam-position offsets against alignment marks—all before the first patterned exposure.",
    "Calibration is repeated at a defined cadence because the column drifts: gun emission changes with filament age and vacuum, lens currents and stage temperature shift over hours, and every new sample height changes the working distance. A documented routine—same targets, same settings, same acceptance metrics—turns calibration from an expert ritual into a controlled process step with measurable output.",
  ],
  challenge:
    "An electron beam column does not hold one calibration indefinitely, and it does not warn before it drifts. Gun emission ages, vacuum events perturb alignment, lens currents wander with temperature, and each substrate with a different thickness or chuck stack moves the focal plane. The result on the wafer is quiet and cumulative: line edges soften, dense features close at nominal dose, corner rounding grows, and pattern-to-pattern linewidth scatter widens until the process is blamed for what the column caused. Teams without a structured calibration routine spend process-development time chasing dose and resist variables that were never the problem.",
  requirements: [
    { title: "Working distance set per sample", description: "Focus adjusted to the actual substrate height, including chuck stack and thickness variation, before any exposure." },
    { title: "Astigmatism corrected with evidence", description: "Stigmator tuned on a defined target so the beam spot is round in both directions, verified by an image or line scan rather than by eye alone." },
    { title: "Spot size and current verified", description: "Resolution standard measured after tuning; beam current within the specification used for dose calculations." },
    { title: "Repeatable routine and records", description: "Documented sequence, settings, acceptance thresholds and logs so drift is visible over weeks, not rediscovered." },
  ],
  routes: [
    { label: "EBL system selection", href: "/technology/electron-beam-lithography-system-selection/", note: "Column and platform choices" },
    { label: "Proximity effect correction", href: "/technology/electron-beam-lithography-proximity-effect-correction-guide/", note: "Pattern-level dose correction" },
    { label: "Charging effect compensation", href: "/technology/electron-beam-lithography-charging-effect-compensation-guide/", note: "Insulating substrate handling" },
    { label: "Data preparation & fidelity", href: "/technology/maskless-lithography-data-preparation-pattern-fidelity/", note: "From CAD to faithful features" },
  ],
  evidence: [
    "Calibration log with date, working distance, stigmator settings, measured spot size and beam current",
    "Resolution or stigmation target images captured after tuning, with scan conditions",
    "Linewidth measurements from a qualification pattern tracked against calibration events",
    "Gun vacuum, emission and filament hours recorded alongside calibration history",
  ],
  comparisonTable: {
    caption: "Focus and stigmation verification methods in an EBL routine",
    headers: ["Method", "What it shows", "Strengths", "Watch-outs"],
    rows: [
      ["Knife-edge or line scan", "Spot profile and approximate size in one direction", "Fast, quantitative, suitable for daily checks", "Sensitive to scan settings; one axis at a time"],
      ["Image of stigmation target", "Roundness of the spot via image sharpness", "Reveals astigmatism directly; standard practice", "Subjective without FFT or numeric sharpness scoring"],
      ["Resolution standard", "Smallest distinguishable feature under write conditions", "Ties tuning to realistic CD capability", "Requires a well-preserved standard kept in the load lock"],
      ["Qualification pattern linewidth", "End-to-end process result including resist and dose", "Closest to the actual deliverable", "Slow; conflates column and process contributors if used alone"],
    ],
  },
  articleSections: [
    {
      heading: "Why focus and stigmator state define the critical dimension",
      paragraphs: [
        "Electron beam lithography writes with a spot whose size and shape are set by the column optics: condenser and objective lenses form the beam, deflection systems place it, and the stigmator coils correct residual ellipticity introduced by imperfect lens machining or alignment. When focus is off by a fraction of the depth of field, the landed spot is larger than the designed probe size; when astigmatism is present, the spot is round in one direction and elongated in the other, so lines in one orientation come out wider than lines in the other.",
        "Both defects act directly on linewidth, edge slope and pattern fidelity before resist chemistry contributes anything. This is why a qualification pattern that scatters in CD by orientation, or that widens after a vacuum event, is a column signal first. Proximity effect correction and dose modulation cannot compensate an elongated spot; they assume a calibrated probe as their input.",
      ],
      links: [
        { label: "Read the proximity effect correction guide", href: "/technology/electron-beam-lithography-proximity-effect-correction-guide/" },
        { label: "Read the charging effect compensation guide", href: "/technology/electron-beam-lithography-charging-effect-compensation-guide/" },
      ],
    },
    {
      heading: "Setting focus and working distance correctly",
      paragraphs: [
        "Focus begins with geometry. The working distance is the distance from the objective lens reference to the substrate surface, and it changes with every new chuck stack, substrate thickness and backside film. Most systems measure substrate height with an optical or capacitive sensor and command the corresponding focus; the operator's task is to confirm the sensor reference and then verify focus optically on a target at the actual write height, not on a fixture of assumed height.",
        "Focus verification should be quantitative. A knife-edge scan or a line scan across a sharp target gives a measurable edge slope; images of a resolution standard at successive focus values show where the smallest resolvable feature lands. Record the focus value that wins, and compare it to the commanded working distance—a persistent offset indicates a stage or sensor calibration issue worth fixing at the source rather than trimming around.",
      ],
      bullets: [
        "Measure substrate height on the real chuck stack for every geometry change",
        "Verify focus on a target at the actual write height, both on-axis and across the field",
        "Use edge-slope or smallest-resolvable-feature metrics, recorded numerically",
        "Investigate a persistent commanded-versus-measured focus offset rather than trimming it away",
      ],
    },
    {
      heading: "Correcting astigmatism with the stigmator",
      paragraphs: [
        "The stigmator applies a quadrupole field that counteracts residual beam ellipticity. Correcting it is iterative: focus for best sharpness in one direction, adjust stigmator to sharpen the orthogonal direction, refocus, and repeat until the image of a round target is sharp in all directions. Modern systems assist with automatic routines, but automatic results still deserve verification—an image captured before and after correction, with sharpness scored numerically, is the record that the routine converged.",
        "Astigmatism should be checked after anything that can perturb the column: gun maintenance or filament change, vacuum events, objective lens current changes, or a large working-distance move. It is also field-dependent near the edge of large deflection fields, so for high-accuracy work verify roundness at the field positions where the finest features will actually be written, not only at the center.",
      ],
      image: {
        src: "/images/technology/electron-beam-lithography-focus-stigmator-calibration-guide/electron-beam-lithography-focus-stigmator-calibration-guide-detail.webp",
        alt: "Close-up of a calibration monitor showing a round beam spot on a stigmation target next to the vacuum column of an electron beam system",
        width: 1600,
        height: 900,
      },
      links: [
        { label: "Read the EBL system selection guide", href: "/technology/electron-beam-lithography-system-selection/" },
        { label: "Read the data preparation and pattern fidelity guide", href: "/technology/maskless-lithography-data-preparation-pattern-fidelity/" },
      ],
    },
    {
      heading: "Drift contributors and calibration cadence",
      paragraphs: [
        "Column state moves on several timescales. Within a session, stage and lens temperatures stabilize over the first tens of minutes, so heavy work should follow a warm-up period rather than start cold. Over days, gun emission and filament geometry age, shifting current and alignment; over weeks, mechanical and vacuum changes accumulate. Each substrate type adds step-changes in working distance. The practical response is a tiered routine: a brief focus and stigmation check every session, a full spot-size and current verification at defined intervals or after any gun or vacuum event, and a qualification-pattern linewidth check per process lot.",
        "Records make the cadence rational. Logging working distance, stigmator values, spot size, beam current, vacuum readings and filament hours lets the team see which parameter moves first and how fast, so the interval between full calibrations is chosen from evidence. When linewidth scatter later appears, the log distinguishes column drift from resist aging or dose error within minutes instead of days.",
      ],
      links: [
        { label: "Read the EBL acceptance test plan guide", href: "/technology/electron-beam-lithography-acceptance-test-plan/" },
        { label: "Read the maskless dose calibration and uniformity guide", href: "/technology/maskless-lithography-dose-calibration-uniformity/" },
      ],
    },
    {
      heading: "A session calibration routine you can standardize",
      paragraphs: [
        "A workable routine fits in minutes and protects the whole session: vent and load, allow the stage and column to stabilize, confirm substrate height and working distance, run focus verification on the reference target, correct astigmatism and record the before-and-after images, verify beam current against the dose plan, and write a small qualification pattern before committing the real exposure. Each step has an acceptance threshold; any miss triggers the deeper full calibration instead of a live-process rescue.",
        "Institutionalizing the routine matters as much as the optics. The same targets, the same scan settings and the same log format across operators make the column's condition comparable over time and across shifts. That is what converts electron beam lithography from a skill-dependent process into a qualified one.",
      ],
      bullets: [
        "Warm-up period before precision work; no critical exposures on a cold column",
        "Height, focus, stigmator, current—checked in the same order every session",
        "Numeric acceptance thresholds with automatic escalation to full calibration",
        "Qualification pattern written per lot; linewidth results filed with the calibration log",
      ],
    },
  ],
  midCta: {
    eyebrow: "COLUMN CALIBRATION REVIEW",
    title: "Is linewidth scatter coming from your process or your column?",
    description:
      "Share your calibration log and qualification-pattern linewidth results—SENFU can help you build a tiered focus and stigmator routine with acceptance thresholds that fit your system and process.",
    label: "Request a calibration review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Calibration is a process step, not a rescue.",
  conclusion: [
    "Every nanometer of critical dimension in electron beam lithography passes through a spot that someone calibrated—or failed to. Focus sets the probe size, the stigmator sets its shape, and both drift on timescales that a process cannot see but a log can. A tiered routine with numeric acceptance criteria keeps the column inside its envelope and makes drift visible before it reaches the wafer.",
    "Standardize the routine, record the evidence, and escalate to full calibration on defined triggers. Then the qualification pattern confirms a column in condition, dose and resist variables stay honest, and critical dimensions hold because the probe they depend on was never left to chance.",
  ],
  faq: [
    {
      question: "How often should EBL focus and stigmator calibration be performed?",
      answer:
        "A brief focus and astigmatism check every session, after warm-up. A full verification—spot size, beam current and stigmation on the resolution standard—belongs at defined intervals or immediately after gun maintenance, vacuum events or large working-distance changes.",
    },
    {
      question: "What is the stigmator in an electron beam column?",
      answer:
        "It is a set of quadrupole coils that counteracts residual astigmatism, making the beam spot round. Without it, the spot is elliptical and lines written in different orientations come out with different widths.",
    },
    {
      question: "Why does linewidth differ by pattern orientation?",
      answer:
        "Elliptical spot shape from uncorrected astigmatism is a leading cause: the elongated spot widens features in one direction more than the other. Check stigmation across the relevant field positions before adjusting dose.",
    },
    {
      question: "Does changing substrate thickness require refocusing?",
      answer:
        "Yes. Working distance is measured to the substrate surface, so thickness, chuck stack and backside films all move the focal plane. Measure height per sample and verify focus at the actual write height.",
    },
    {
      question: "Can automatic stigmation routines replace manual tuning?",
      answer:
        "They are a good starting point and save time, but their result should be verified with a captured image and a numeric sharpness or spot-size metric, especially for critical features and off-center field positions.",
    },
  ],
  sources: [
    {
      publisher: "Raith",
      label: "Raith — electron beam lithography system and calibration documentation",
      href: "https://www.raith.com/",
    },
    {
      publisher: "JEOL",
      label: "JEOL — electron optics and EBL application notes",
      href: "https://www.jeol.com/",
    },
    {
      publisher: "Elsevier",
      label: "Microelectronic Engineering journal — electron beam lithography process studies",
      href: "https://www.journals.elsevier.com/microelectronic-engineering",
    },
    {
      publisher: "NIST",
      label: "NIST — nanofabrication and electron beam metrology publications",
      href: "https://www.nist.gov/",
    },
  ],
};
