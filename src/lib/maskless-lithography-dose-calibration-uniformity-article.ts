import type { EditorialPage } from "@/lib/editorial-content";

export const masklessLithographyDoseCalibrationUniformity: EditorialPage = {
  eyebrow: "TECHNOLOGY / MASKLESS LITHOGRAPHY",
  title: "Maskless Lithography Dose Calibration and Exposure Uniformity",
  description: "How to calibrate dose on a direct-write tool, verify exposure uniformity across the writing field, and keep both stable through resist changes, source aging and multi-layer processes.",
  slug: "/technology/maskless-lithography-dose-calibration-uniformity/",
  publishedAt: "2026-09-18",
  modifiedAt: "2026-09-18",
  primaryKeyword: "maskless lithography dose calibration",
  secondaryKeywords: [
    "direct-write lithography exposure uniformity",
    "lithography dose matrix calibration",
    "resist dose sensitivity direct write",
    "maskless exposure dose control",
    "lithography uniformity verification",
  ],
  featuredImage: {
    src: "/images/technology/maskless-lithography-dose-calibration-uniformity/maskless-lithography-dose-calibration-uniformity-cover.webp",
    alt: "Direct-write lithography exposure head illuminating a resist-coated wafer on a precision stage in a laboratory cleanroom",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Dose calibration on a maskless lithography tool is the experiment that connects a commanded exposure setting to the resist response actually achieved on the substrate. Because writing time scales with dose and CD, sidewall and sensitivity all follow from it, the calibration is a dose ladder: a set of test exposures stepping the commanded dose across the working range, developed and measured, from which the minimum dose that holds the target critical dimension with process margin is recorded in the process recipe.",
    "Exposure uniformity is a separate question from average dose. A direct-write tool delivers dose pixel by pixel across a writing field, so uniformity must be verified spatially — across the field, between fields, and through time — with a structured test pattern and a repeatable measurement, not assumed from a single open-frame exposure in the field center.",
  ],
  challenge: "A direct-write process that develops beautifully on the calibration wafer drifts a week later: lines widen on one side of the field, a second layer over-exposes at the same recipe, or a new resist batch needs a different dose entirely. In maskless lithography the exposure is synthesized in software and hardware rather than transferred through a mask, so dose depends on source output, optical transmission, addressing and pixel response, resist chemistry and development — and any of these can move. Teams that treat dose as a fixed recipe number rather than a calibrated, verified quantity spend their process margin invisibly, then lose days rediscovering that the tool, not the layout, changed.",
  requirements: [
    { title: "Dose ladder calibration", description: "Expose a structured dose-matrix pattern spanning the working range, develop under the production process, and record the dose that meets CD targets with margin for each resist and wavelength combination." },
    { title: "Uniformity verification", description: "Verify dose delivery across the writing field with spatially distributed test structures, at a measurement method sensitive enough to resolve the CD or residual-film variation that matters." },
    { title: "Stability monitoring", description: "Track the calibrated dose and uniformity result over time — across resist batches, source hours and maintenance events — with a control chart that separates tool drift from process change." },
  ],
  comparisonTable: {
    caption: "What moves dose on a direct-write tool and how each factor is managed",
    headers: ["Factor", "Effect on delivered dose", "Detection", "Control"],
    rows: [
      ["Source output aging", "Gradual reduction in intensity raises the dose needed for the same resist response", "Dose ladder shift between calibration runs; source hour log", "Scheduled re-calibration; source replacement at defined hours"],
      ["Optical path transmission", "Dust, degradation or alignment change alters throughput", "Uniformity map asymmetry; open-frame exposure check", "Optics inspection and cleaning in the maintenance plan"],
      ["Pixel and addressing response", "Non-uniform pixel response writes local dose variation", "Fine-pattern CD variation across the field", "Tool-level pixel correction; verification with dense test patterns"],
      ["Resist and process change", "New batch, thickness or developer changes the required dose", "Dose ladder before every recipe change", "Recipe-level dose record; re-calibration on change"],
      ["Development variation", "Same dose develops differently, masquerading as exposure error", "Repeat exposure with fresh developer", "Controlled develop time, temperature and agitation"],
    ],
  },
  articleSections: [
    {
      heading: "What dose means on a tool without a mask",
      paragraphs: [
        "In a mask-based exposure, dose is set once per reticle and delivered uniformly by the illumination system; the mask defines where it lands. In a direct-write tool the exposure is synthesized: the light source, the modulating element and the writing algorithm together decide, pixel by pixel, how much energy each location receives. Dose on a maskless tool is therefore the product of source intensity, optical transmission, modulation state, dwell or scan speed and any software correction — and the calibration task is to make that product reproducible against the resist's response.",
        "This is why a datasheet dose figure transfers poorly between tools, and often between identical tools. Two instruments with the same nominal wavelength can differ in source condition, optics and modulation calibration, so the same resist needs different commanded doses. The disciplined practice is to calibrate per tool, per resist and per wavelength, and to keep the resulting dose in the process recipe with its date, tool and resist batch — not as a magic number inherited from another lab's notebook.",
        "The reward for that discipline is schedule stability. Dose multiplies directly into writing time, and an over-conservative dose inflates every job; an under-calibrated dose produces marginal development and rework. A calibration that finds the true minimum with margin typically pays for itself within the first development cycle.",
      ],
      links: [
        { label: "Compare maskless lithography and laser direct imaging", href: "/technology/laser-direct-imaging-vs-maskless-lithography/" },
        { label: "Review maskless throughput and writing time", href: "/technology/maskless-lithography-throughput-writing-time-guide/" },
      ],
    },
    {
      heading: "Running the dose-matrix calibration",
      paragraphs: [
        "The core experiment is deliberately simple: a ladder of exposures at increasing commanded dose, developed under exactly the production process, then measured. What separates a useful ladder from a casual one is the pattern and the measurement. Use structures that resemble the production geometry — equal line/space pairs at the target CD, isolated lines, and a few larger areas for residual film — distributed across the writing field rather than clustered in the center. Measure by a method matched to the decision: CD metrology for dimensional targets, profilometry or microscopy for residual film, and inspect sidewall profile on selected structures where that matters.",
        "Read the ladder as a curve, not a single point. Below the clearing dose, residual film appears; through the working window, CD increases approximately linearly with dose; above it, lines swell and dense features bridge. The calibration dose is the value that lands the target CD with margin to both edges of the window — not the clearing dose itself. Record the window width, because a narrow window predicts sensitivity to every drift factor in the table above and may justify reconsidering resist, thickness or development before committing to production.",
        "Repeat the ladder whenever the process changes: a new resist batch, a different spin thickness, a developer concentration or temperature change, or a tool maintenance event that touches the optical path. The ladder is cheap — one calibration wafer and a few measurement hours — and each run extends the dose history that later diagnoses drift.",
      ],
      subsections: [
        {
          heading: "What to record with every calibration",
          paragraphs: [
            "The calibration only pays off if its context is preserved. Attach to every ladder run:",
          ],
          bullets: [
            "Tool identity, source hours and optics condition notes",
            "Resist material, batch, thickness, bake and develop recipe",
            "Commanded dose ladder and measured CD or residual per structure",
            "Selected calibration dose and the measured window edges",
            "Date, operator and any maintenance events since the previous run",
          ],
        },
      ],
      links: [
        { label: "Review grayscale lithography capabilities", href: "/technology/grayscale-lithography/" },
        { label: "Review SENFU maskless lithography systems", href: "/lithography-systems/" },
      ],
    },
    {
      heading: "Verifying exposure uniformity across the field",
      paragraphs: [
        "Average dose says nothing about how evenly it is delivered. A direct-write field is built from many pixels and often from stitched sub-fields or scan passes, so the verification pattern must interrogate spatial structure. Place identical CD test structures on a grid across the full writing field — center, corners, edges and mid-edges — and expose them at the calibrated dose in a single pass. The CD spread across that grid is the field uniformity figure; plotting it as a map turns a number into a diagnosis, because a radial gradient, an edge rolloff and a step between scan directions each point at different causes.",
        "Uniformity has a time axis as well. Source output drifts over hours; a field exposed at the start of a long job can differ from one exposed at the end. For long runs, verify with duplicate structures exposed at intervals through the job, or open-frame a monitor field periodically. Where the tool supports it, dose monitoring or reference-feedback features keep the delivered energy tracked against the calibrated setting; the verification pattern confirms that the mechanism works on the customer's process, not just on the vendor's test.",
        "Between fields on larger substrates, stage repeatability and field-to-field alignment add their own variation. Treat inter-field uniformity as a separate check on multi-field layouts: identical structures repeated in corresponding positions of several fields expose systematic differences that a single-field map cannot show. On multi-layer processes, the overlay-relevant question is the same uniformity measured through the alignment chain, so include at least one two-layer uniformity test in process qualification.",
      ],
      image: {
        src: "/images/technology/maskless-lithography-dose-calibration-uniformity/maskless-lithography-dose-calibration-uniformity-detail.webp",
        alt: "Close view of a lithography process engineer measuring CD test structures on a dose calibration wafer under a microscope",
        width: 1600,
        height: 900,
      },
      links: [
        { label: "Review stage stitching accuracy and encoder feedback", href: "/technology/lithography-stage-stitching-accuracy-encoder-guide/" },
        { label: "Review substrate and resist compatibility", href: "/technology/maskless-lithography-substrate-resist-compatibility/" },
      ],
    },
    {
      heading: "Keeping dose and uniformity stable over time",
      paragraphs: [
        "Stability is a monitoring problem, and monitoring needs a chart. Track two numbers per production period: the calibration dose for the active recipe and the field-uniformity spread from a periodic verification wafer. Plot them against time with source hours and maintenance events marked. Stable processes produce flat lines with occasional steps at resist changes; a slowly rising dose on a flat uniformity map points at source aging, while a rising uniformity spread at constant dose points at optics or modulation trouble. The chart converts vague impressions of drift into a specific maintenance action.",
        "Separate tool drift from process change before adjusting anything. A dose that jumps after a resist batch change is not tool drift; re-calibrating the tool for a process problem hides the cause and contaminates the history. The control discipline is the same one used in any precision process: change one factor at a time, re-run the ladder after each change, and never adjust dose to compensate for a development problem without first confirming the development is at its recipe.",
        "For labs operating multiple tools or multiple users, make the calibration and verification records part of the process release: the recipe names the calibrated dose, the verification wafer defines the uniformity acceptance, and both carry revision history. SENFU's application engineering supports this discipline for ZML-series tools, including recommended calibration patterns, verification structures and a review of dose and uniformity records during process ramp-up, so the exposure process is documented to the same standard as the tool's mechanical specifications.",
      ],
      links: [
        { label: "Review electron-beam lithography system selection", href: "/technology/electron-beam-lithography-system-selection/" },
        { label: "Review maskless lithography cost of ownership", href: "/technology/maskless-lithography-cost-of-ownership/" },
      ],
    },
  ],
  midCta: {
    eyebrow: "DOSE PROCESS REVIEW",
    title: "Setting up dose calibration on a direct-write tool?",
    description: "Send the resist, wavelength, CD targets and substrate details for a recommended dose-ladder and uniformity verification plan.",
    label: "Request a calibration plan",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Dose is a calibrated quantity, not a recipe constant.",
  conclusion: [
    "On a maskless lithography tool the delivered dose is synthesized from source, optics, modulation and writing settings, and its uniformity is built pixel by pixel across the field. Treating dose as a calibrated, verified and monitored quantity — with a dose ladder per resist and wavelength, a spatial uniformity map, and a control chart that separates tool drift from process change — keeps the process window honest and the writing schedule predictable.",
    "For a SENFU process review, send the resist system, wavelength, CD targets, substrate and current recipe. SENFU application engineering can propose a dose-matrix and uniformity verification plan suited to the ZML-series configuration, and help establish the calibration records that keep future process changes priced and predictable.",
  ],
  routes: [
    { label: "ZML10A maskless lithography", href: "/lithography-systems/zml10a/", note: "Compact laboratory R&D patterning" },
    { label: "ZML100A maskless lithography", href: "/lithography-systems/zml100a/", note: "Active autofocus and overlay" },
    { label: "Technical application review", href: "/contact/#application-form", note: "Submit resist and process data" },
  ],
  evidence: [
    "Dose-ladder record per resist, batch and wavelength with measured window edges",
    "Field uniformity map from a spatially distributed CD test structure grid",
    "Periodic verification results charted against source hours and maintenance events",
    "Documented calibration dose in the released process recipe, with revision history",
    "Multi-layer uniformity check through the alignment chain for overlay-critical processes",
  ],
  faq: [
    { question: "How often should dose be re-calibrated on a maskless lithography tool?", answer: "Re-run the dose ladder whenever the resist batch, thickness, develop recipe or any optical-path maintenance changes, and periodically — for example monthly or per defined source-hour interval — even without changes. A control chart of calibration dose over time shows whether the periodic interval is catching drift early enough." },
    { question: "Why does my calibrated dose differ between two identical tools?", answer: "Commanded dose depends on source condition, optical transmission and modulation calibration, which differ between individual instruments even of the same model. Calibrate per tool and keep the dose in the recipe with the tool identity; do not copy a dose value between machines." },
    { question: "What pattern should I use for a dose-matrix calibration?", answer: "Use structures that resemble production geometry: equal line/space pairs at the target CD, isolated lines and larger areas for residual film, distributed across the writing field rather than clustered at the center. Measure CD for dimensional targets and residual film for clearing behavior, and record the full window, not just the chosen dose." },
    { question: "How is exposure uniformity verified on a direct-write tool?", answer: "Expose identical test structures on a grid spanning the full writing field at the calibrated dose in a single pass, and measure the CD spread across the grid. Plot the result as a map: radial gradients, edge rolloff and scan-direction steps point at different causes. Add duplicate structures at intervals through long jobs to catch time drift, and repeat corresponding structures across fields for inter-field checks." },
    { question: "Can development error be mistaken for dose error?", answer: "Yes, and it is one of the most common misdiagnoses. A change in developer concentration, temperature, time or agitation shifts the apparent dose response. Repeat the suspect exposure with a fresh, recipe-controlled develop before changing the commanded dose; if the result reproduces, the exposure side is implicated." },
    { question: "What does SENFU need to propose a dose calibration plan?", answer: "Send the resist material and thickness, exposure wavelength, CD and profile targets, substrate, develop recipe and the tool configuration. SENFU application engineering returns a recommended dose-ladder design, uniformity verification structures and a record-keeping format suited to the ZML-series tool and the process." },
  ],
  sources: [
    { publisher: "SENFU", label: "Maskless lithography systems and application notes", href: "https://senfuprecision.com/resources/" },
    { publisher: "National Institute of Standards and Technology", label: "Nanofabrication and lithography research resources", href: "https://www.nist.gov/" },
    { publisher: "International Organization for Standardization", label: "ISO standards catalog — optics and optical instruments, semiconductor processing", href: "https://www.iso.org/" },
    { publisher: "International Electrotechnical Commission", label: "IEC webstore — laser product safety and equipment standards", href: "https://webstore.iec.ch/" },
    { publisher: "SENFU", label: "ZML-series maskless lithography system specifications", href: "https://senfuprecision.com/lithography-systems/" },
  ],
};
