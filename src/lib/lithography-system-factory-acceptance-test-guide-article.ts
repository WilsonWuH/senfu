import type { EditorialPage } from "@/lib/editorial-content";

export const lithographySystemFactoryAcceptanceTestGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / SUPPLIER QUALIFICATION",
  title: "Factory and Site Acceptance Tests for Lithography Systems: A Buyer's Guide",
  description:
    "Define factory acceptance tests (FAT) and site acceptance tests (SAT) for a lithography system: coupons, positioning verification, environmental conditions, decision rules and evidence retention.",
  slug: "/technology/lithography-system-factory-acceptance-test-guide/",
  publishedAt: "2026-09-28",
  modifiedAt: "2026-09-28",
  primaryKeyword: "lithography system factory acceptance test",
  secondaryKeywords: [
    "site acceptance test lithography",
    "FAT SAT precision equipment",
    "lithography system acceptance criteria",
    "ISO 230-2 positioning verification",
    "lithography tool commissioning",
  ],
  featuredImage: {
    src: "/images/technology/lithography-system-factory-acceptance-test-guide/lithography-system-factory-acceptance-test-guide-cover.webp",
    alt: "Engineers performing acceptance measurements on a lithography system inside a cleanroom",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "A factory acceptance test (FAT) verifies a lithography system against agreed criteria at the supplier's floor before shipment, while a site acceptance test (SAT) repeats the critical subset after installation in the buyer's facility. The FAT de-risks shipping and installation by proving the tool met specification at the source; the SAT proves it survived the journey and holds specification under the buyer's environment, foundation and utilities.",
    "An effective test plan defines, before the order is signed: which coupons are patterned and measured (resolution, overlay, stitching, dose uniformity), how positioning accuracy and repeatability are verified with a traceable reference such as a laser interferometer, the environmental conditions under which each result is valid, which numbers are acceptance criteria versus informational, and how an inconclusive result is resolved. Both parties should retain the raw data, not only the summary report.",
  ],
  challenge:
    "Lithography systems are bought on specifications but delivered as installed machines, and the gap between the two is where projects lose months. A tool that met a demonstration condition at the supplier may behave differently on a different floor, under different temperature gradients, with different operators and resist lots. Without a pre-agreed FAT/SAT plan, acceptance becomes a negotiation after delivery; with one, it is a measurement exercise both parties already agreed to.",
  requirements: [
    { title: "Pre-agreed criteria", description: "Acceptance values, test methods and decision rules fixed in the purchase contract, not negotiated after installation." },
    { title: "Representative coupons", description: "Test patterns matching the production workload: dense and isolated features, multilayer overlay, stitching across fields, grayscale levels where relevant." },
    { title: "Traceable metrology", description: "Positioning verified against a calibrated reference—for example bidirectional laser interferometer runs per ISO 230-2 style methodology—and pattern dimensions measured with stated SEM or optical metrology." },
    { title: "Environmental discipline", description: "Temperature stabilization, defined warm-up, and recorded environmental conditions during every test, so results are comparable between FAT and SAT." },
  ],
  comparisonTable: {
    caption: "Factory acceptance test versus site acceptance test",
    headers: ["Aspect", "FAT (supplier site)", "SAT (buyer site)"],
    rows: [
      ["Purpose", "Prove the system meets specification before shipment", "Prove the installed system meets specification in the buyer's environment"],
      ["Environment", "Supplier's facility, calibrated conditions", "Buyer's cleanroom, foundation, utilities and operators"],
      ["Scope", "Full capability demonstration including functions not transportable", "Critical subset: positioning, overlay, resolution, repeatability"],
      ["Timing", "Before packing and shipment", "After installation, alignment and commissioning"],
      ["Consequence", "Gate for shipment and payment milestone", "Gate for final acceptance, warranty start and production release"],
      ["Data retention", "Raw measurement data delivered with the report", "Raw data retained for warranty and periodic verification baseline"],
    ],
  },
  articleSections: [
    {
      heading: "Why acceptance must be planned before the order",
      paragraphs: [
        "Precision equipment practice separates verification into a factory test at the builder's site and a site test after installation, because each answers a different question. The factory test answers whether the machine as built meets the specification; the site test answers whether that machine, after transport, installation and commissioning, still meets it in the room where it will work. Skipping the FAT leaves transport damage and build variance undetected until commissioning; skipping the SAT leaves the buyer without evidence for warranty claims or production release.",
        "The single most important step costs nothing at the tool level: write the acceptance plan into the purchase phase. Define which values are acceptance criteria, which are informational, which standard or method each measurement follows, and what happens when a result is inconclusive. An acceptance limit is a contractual matter—measurement standards define how to test, while the pass/fail threshold must come from the purchase specification.",
        "Buyers who run a supplier qualification process already know this pattern from subsystems: the same evidence discipline used for encoders and stages applies to the complete lithography tool. The difference is only in the coupons and the metrology.",
      ],
      links: [
        { label: "Read the supplier qualification guide", href: "/technology/optical-encoder-supplier-qualification/" },
        { label: "Read the lithography supplier qualification and process demo guide", href: "/technology/lithography-supplier-qualification-process-demo/" },
      ],
    },
    {
      heading: "Positioning accuracy and repeatability: the mechanical backbone",
      paragraphs: [
        "Most lithography processes depend first on how well the stage holds position, so the positioning test belongs at the center of both FAT and SAT. The established method measures axis positioning directly with a laser interferometer: the machine moves to target positions across the full travel, approaching each position bidirectionally and repeating multiple runs, which allows positioning accuracy, repeatability and reversal error to be computed from the same data set.",
        "Standards frameworks such as ISO 230-2 define this direct-measurement methodology—target selection, number of runs, bidirectional approach and statistical evaluation—for numerically controlled axes. The standard defines the test and reporting method; the pass/fail limit comes from the purchase contract. Treat 20 °C as the reference condition for interpretation, require thermal stabilization and a warm-up run before testing, and record ambient conditions throughout, because thermal expansion directly shifts measured position.",
        "A useful addition is to compare the interferometer result with the machine's own encoder reading at the same positions. The difference is the axis error map; if the system relies on compensation, the SAT should verify the compensated result, not just the raw motion.",
      ],
      image: {
        src: "/images/technology/lithography-system-factory-acceptance-test-guide/lithography-system-factory-acceptance-test-guide-detail.webp",
        alt: "Laser interferometer setup measuring a precision motion stage during a site acceptance test",
        width: 1600,
        height: 900,
      },
      links: [
        { label: "Read the laser interferometer verification guide", href: "/technology/linear-stage-accuracy-laser-interferometer-verification-guide/" },
        { label: "Read the error mapping and compensation guide", href: "/technology/optical-encoder-error-mapping-compensation-guide/" },
      ],
    },
    {
      heading: "Patterned coupons: proving the lithographic result",
      paragraphs: [
        "Positioning is necessary but not sufficient. The lithographic result must be proven on resist, with the process stack the facility will actually use. Define coupons that cover the workload: minimum feature on isolated and dense geometries, equal line/space at target pitch, stitching across write fields for direct-write tools, dose uniformity across the exposure area, and multilayer overlay with the alignment strategy planned for production.",
        "Each coupon needs a measurement plan: which instrument measures what, with what scale calibration and repeatability statement. Linewidth results should be reported with the resist, dose, focus and development conditions, because a dimension without its process conditions cannot be compared or reproduced. For grayscale or 3D work, profile metrology joins the plan.",
        "Run the coupon set at both stages of acceptance. The FAT establishes the tool's capability on the supplier's floor; repeating the same coupons in the SAT shows what changed. Differences that appear only after installation usually trace to environment, foundation, utilities or setup—exactly the factors the SAT exists to expose.",
      ],
      subsections: [
        {
          heading: "A minimum coupon set for direct-write systems",
          paragraphs: [
            "For maskless and direct-write platforms, a compact coupon set covers most decision risk without extending acceptance indefinitely. Agree on the exact patterns, measurement instruments and reporting format in advance.",
          ],
          bullets: [
            "Isolated and dense minimum features with SEM conditions stated",
            "Line/space grating at production pitch across the exposure field",
            "Stitching coupon crossing write-field boundaries",
            "Dose uniformity map across the maximum exposure area",
            "Two-layer overlay coupon with production alignment marks",
          ],
        },
      ],
      links: [
        { label: "Read the maskless lithography RFQ guide", href: "/technology/maskless-lithography-system-rfq/" },
        { label: "Read the overlay accuracy guide", href: "/technology/maskless-lithography-alignment-overlay-accuracy-guide/" },
      ],
    },
    {
      heading: "Decision rules, raw data and what happens after sign-off",
      paragraphs: [
        "An acceptance test without a decision rule is a demonstration. Before the FAT, agree on which results gate shipment, which gate final acceptance, how many reruns are permitted and on what grounds, and how disputes about metrology are resolved—for example by joint measurement or an agreed third party. These rules are cheap to agree early and expensive to improvise later.",
        "Insist on raw data, not only summary reports. A positioning report can summarize away a directional trend; an overlay report can average out a field-dependent offset. Retain the measurement files, the instrument configuration, the environmental log and the software or recipe versions in force during testing, so the result remains auditable and can serve as the baseline for periodic re-verification during the tool's life.",
        "After sign-off, the SAT baseline becomes an asset. Repeat a reduced version of the same tests at maintenance intervals, compare against the baseline, and drift becomes visible as data. The same evidence-chain discipline that governs subsystem purchases applies to the tool as a whole.",
      ],
      links: [
        { label: "Read the EBL acceptance test plan guide", href: "/technology/electron-beam-lithography-acceptance-test-plan/" },
        { label: "Read the obsolescence and lifecycle support guide", href: "/technology/optical-encoder-obsolescence-lifecycle-support-guide/" },
      ],
    },
    {
      heading: "How SENFU supports acceptance planning",
      paragraphs: [
        "SENFU supplies maskless lithography systems and treats acceptance planning as part of the selection conversation. When a requirement is submitted—substrate formats, feature targets, overlay needs, environment and workload—SENFU can propose the test points that best de-risk that specific configuration and define the evidence, from positioning runs to patterned coupons, that each acceptance milestone requires.",
        "For systems that integrate SENFU encoders into a larger tool, the same logic applies at subsystem level: scale accuracy at stated temperature, installation tolerances and interface documentation delivered as part of the qualification package, so the builder's own FAT has solid inputs.",
        "Submit the application requirement through the form and SENFU can help turn a specification sheet into an executable acceptance plan before the purchase order is placed.",
      ],
      links: [
        { label: "Explore the maskless lithography platform family", href: "/lithography-systems/maskless-lithography/" },
        { label: "Submit an application review", href: "/contact/#application-form" },
      ],
    },
  ],
  midCta: {
    eyebrow: "ACCEPTANCE PLANNING",
    title: "Buying a lithography system this quarter?",
    description:
      "Send the substrate, feature, overlay and environment requirements, and SENFU can help define the FAT/SAT coupons and decision rules before you sign.",
    label: "Start the acceptance plan",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Agree the evidence first; the measurement is then routine.",
  conclusion: [
    "Factory and site acceptance tests turn a lithography purchase from a demonstration into a measurement: the FAT proves the built system against the specification at the source, and the SAT proves the installed system holds it in the buyer's environment. Both rest on the same foundations—pre-agreed criteria, representative coupons, traceable metrology and recorded conditions.",
    "Fix the decision rules in the contract, keep the raw data, and reuse the SAT baseline for periodic verification. Buyers who invest a small amount of planning before the order save months of negotiation after delivery, and end up with a machine whose performance is documented rather than assumed.",
  ],
  routes: [
    { label: "Maskless lithography family", href: "/lithography-systems/maskless-lithography/", note: "System selection overview" },
    { label: "Maskless lithography RFQ guide", href: "/technology/maskless-lithography-system-rfq/", note: "Pre-purchase requirements" },
    { label: "Supplier qualification guide", href: "/technology/optical-encoder-supplier-qualification/", note: "Evidence discipline" },
    { label: "Technical application review", href: "/contact/#application-form", note: "Submit the requirement" },
  ],
  evidence: [
    "Acceptance criteria, methods and decision rules fixed in the purchase contract",
    "Bidirectional positioning runs with traceable reference and environmental log",
    "Patterned coupon results with resist, dose and development conditions",
    "Stitching, dose uniformity and overlay results with stated metrology",
    "Raw measurement data retained by both parties",
    "SAT baseline agreed for future periodic verification",
  ],
  faq: [
    {
      question: "What is the difference between FAT and SAT for a lithography system?",
      answer:
        "The factory acceptance test verifies the system against agreed criteria at the supplier's facility before shipment; the site acceptance test verifies the installed system after transport and commissioning, in the buyer's environment. The FAT de-risks shipping and build quality, while the SAT gates production release and warranty start.",
    },
    {
      question: "Which standard defines the positioning accuracy test?",
      answer:
        "Standards in the ISO 230 family define the direct-measurement methodology for numerically controlled axes—target positions, bidirectional approaches, number of runs and statistical evaluation—with laser interferometry as the common measurement method. The standard defines how to test; the pass/fail limit comes from the purchase contract.",
    },
    {
      question: "Why repeat the same coupons at FAT and SAT?",
      answer:
        "Repeating identical coupons under recorded conditions makes any difference between the two sites attributable to transport, installation, environment or setup rather than to pattern or metrology variation. It converts 'it feels different here' into a diagnosable, quantitative comparison.",
    },
    {
      question: "What environmental conditions matter most during acceptance?",
      answer:
        "Temperature and its gradients dominate: results are interpreted against a 20 °C reference, and the machine should reach thermal equilibrium through a warm-up before testing. Record temperature, and where relevant humidity and vibration, during every measurement so FAT and SAT results are comparable.",
    },
    {
      question: "Should the buyer keep raw test data?",
      answer:
        "Yes. Summary reports can hide directional trends and field-dependent offsets. Raw measurement files, instrument configuration, environmental logs and recipe versions make the result auditable and provide the baseline for periodic re-verification during the tool's service life.",
    },
    {
      question: "How can SENFU help with acceptance planning?",
      answer:
        "Submit the substrate formats, feature targets, overlay requirements, environment and workload. SENFU can propose the test points and evidence—positioning runs through patterned coupons—that each acceptance milestone should require for the specific system configuration.",
    },
  ],
  sources: [
    {
      publisher: "Hymson Laser",
      label: "ISO 230-2 Positioning Accuracy: reading axis positioning and repeatability from laser interferometer reports",
      href: "https://www.hymsonlaser.com/resources/guides/iso-230-2-accuracy",
    },
    {
      publisher: "SZGHTECH",
      label: "How to Verify CNC Machine Accuracy Before Shipment: geometric tests, laser interferometer and sample-cut verification",
      href: "https://www.szghtech.com/how-to-verify-cnc-machine-accuracy-before-shipment",
    },
    {
      publisher: "Discover Nano (Springer Nature)",
      label: "Advances in lithographic techniques for precision nanostructure fabrication",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10713959/",
    },
  ],
};
