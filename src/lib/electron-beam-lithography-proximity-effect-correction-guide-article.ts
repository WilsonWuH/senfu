import type { EditorialPage } from "@/lib/editorial-content";

export const electronBeamLithographyProximityEffectCorrectionGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / ELECTRON BEAM LITHOGRAPHY",
  title: "Electron Beam Lithography Proximity Effect Correction: A Practical Selection Guide",
  description:
    "Understand the electron beam lithography proximity effect, compare dose and shape correction methods, and define the evidence to request before patterning dense nanoscale layouts.",
  slug: "/technology/electron-beam-lithography-proximity-effect-correction-guide/",
  publishedAt: "2026-09-28",
  modifiedAt: "2026-09-28",
  primaryKeyword: "electron beam lithography proximity effect correction",
  secondaryKeywords: [
    "EBL proximity effect",
    "proximity effect correction PEC",
    "electron scattering dose modification",
    "point spread function electron beam lithography",
    "GHOST correction e-beam",
  ],
  featuredImage: {
    src: "/images/technology/electron-beam-lithography-proximity-effect-correction-guide/electron-beam-lithography-proximity-effect-correction-guide-cover.webp",
    alt: "Engineer observing an electron beam lithography column in a cleanroom nanofabrication laboratory",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Proximity effect correction (PEC) in electron beam lithography compensates for electrons that forward-scatter inside the resist and backscatter from the substrate, depositing energy outside the intended exposure geometry. Without correction, dense features grow, isolated features shrink, and linewidths deviate from the layout in a pattern-density-dependent way. Correction is applied either by modifying the dose assigned to each shape (dose modification, including self-consistent and GHOST-style methods) or by adjusting pattern dimensions (shape modification), usually guided by a point spread function (PSF) model of the electron scattering.",
    "When selecting a system or planning a dense nanoscale process, treat PEC as part of the workflow rather than an optional software checkbox. Ask which correction methods the toolchain supports, how the PSF is determined for your resist, substrate and voltage, what computation time the correction adds to a representative layout, and how corrected results are verified on measured test structures such as dense gratings next to isolated lines.",
  ],
  challenge:
    "Electron scattering is a physical property of the resist–substrate stack, not a defect that a better column can remove. As pattern density increases and features shrink, the energy deposited by forward and backscattered electrons shifts linewidths, rounds corners and degrades gratings in ways that depend on layout, dose, voltage, resist and substrate. Teams that ignore the proximity effect discover it after development; teams that plan for it need to understand which correction methods exist, what data they require and what throughput cost they add.",
  requirements: [
    { title: "Layout analysis", description: "Identify dense versus isolated regions, minimum pitch and the geometry classes most sensitive to scattered dose." },
    { title: "Scattering model", description: "A point spread function appropriate to the resist thickness, substrate material and acceleration voltage of the process." },
    { title: "Correction method", description: "Dose modification, shape modification or a hybrid scheme, matched to the pattern generator and software toolchain." },
    { title: "Verification", description: "Measured test structures—dense gratings against isolated features—under the same resist, dose and development used in production." },
  ],
  comparisonTable: {
    caption: "Proximity effect correction approaches compared",
    headers: ["Method", "How it works", "Best suited for", "Watch for"],
    rows: [
      ["Self-consistent dose modification", "Solves for the dose per shape so every shape absorbs the same target energy", "Layouts where every shape can receive an individual dose", "Computation time and dose-map data volume grow with shape count"],
      ["GHOST-style backscan", "Adds a low-dose correcting exposure that evens out the background dose", "Systems without per-shape dose freedom; quick implementation", "Adds writing time and does not solve short-range effects"],
      ["Pattern-density dose mapping", "Assigns dose from a local density map of the layout", "High-voltage processes where long-range backscatter dominates", "Needs an accurate density map and PSF parameters"],
      ["Shape modification", "Adjusts pattern dimensions so developed features match the target", "Projection-style systems or when dose flexibility is limited", "Correction resolution limited by beam spot and address grid"],
      ["Hybrid schemes", "Shape modification for forward scattering plus dose modification for backscattering", "Complex layouts mixing dense and sparse regions", "Requires careful calibration of both model components"],
    ],
  },
  articleSections: [
    {
      heading: "Why electron scattering creates the proximity effect",
      paragraphs: [
        "In electron beam lithography, the focused beam is intended to expose exactly the shapes in the layout. In practice, incident electrons scatter twice. Forward scattering widens the energy distribution inside the resist over a short range comparable to the resist thickness, and backscattering returns electrons from the substrate over a much longer range, exposing resist far outside the written shape. The result is a dose background that depends on what has been written nearby—dense regions receive extra energy and their features grow, while isolated features receive less supporting dose and develop smaller.",
        "Reviewers describe this as a convolution of the written dose distribution with a radially symmetric point spread function that captures both scattering components. As minimum feature sizes decrease and pattern density rises, the discrepancy between the intended pattern and the deposited energy grows, which is why most nanoscale EBL exposures now require correction. The effect is not a machine fault; it follows from physics, so it must be managed in the process and data preparation rather than engineered away in the column.",
        "The consequence for planning is concrete: a process qualified on an isolated-line test pattern can fail on a dense grating of the same nominal linewidth, and a layout revision that changes local density can silently shift every dimension. Proximity awareness belongs in the design review, not only in the software recipe.",
      ],
      links: [
        { label: "Review the EBL system selection guide", href: "/technology/electron-beam-lithography-system-selection/" },
        { label: "Compare DMD and electron beam routes", href: "/technology/dmd-vs-electron-beam-lithography/" },
      ],
    },
    {
      heading: "Dose modification, shape modification and hybrid correction",
      paragraphs: [
        "The established correction literature divides into two families. Dose modification assigns a different dose to each written shape so that, after scattered contributions are added, every shape receives the same target exposure. The classic self-consistent method formulates this as a set of linear equations over all shapes, and density-based variants approximate the same idea at lower computational cost. GHOST-style methods take a different route: they superimpose a deliberately under-dosed correcting exposure that flattens the long-range backscatter background.",
        "Shape modification instead adjusts the pattern geometry itself—shrinking shapes that would grow under scattered dose and expanding shapes that would develop small—so the developed resist matches the design. This suits systems and pattern generators where per-shape dose control is impractical, at the cost of a correction resolution bounded by the beam spot and address grid. Hybrid methods combine the two: shape modification handles the short-range forward-scattering component while dose modification handles the long-range backscattering component.",
        "Each family carries a practical cost. Dose modification is mathematically exact for a given PSF but demands computation time and a dose database that scale with shape count, and it requires a pattern generator able to vary dose per shape. GHOST is simple and portable but adds writing time and does not address short-range effects. The right choice follows from the toolchain, the layout style and the write-time budget—not from a generic ranking.",
      ],
      image: {
        src: "/images/technology/electron-beam-lithography-proximity-effect-correction-guide/electron-beam-lithography-proximity-effect-correction-guide-detail.webp",
        alt: "Microscope inspection of a developed nanoscale grating pattern on a resist-coated wafer",
        width: 1600,
        height: 900,
      },
      links: [
        { label: "Read the EBL acceptance test plan guide", href: "/technology/electron-beam-lithography-acceptance-test-plan/" },
        { label: "Review data preparation and pattern fidelity", href: "/technology/maskless-lithography-data-preparation-pattern-fidelity/" },
      ],
    },
    {
      heading: "The point spread function is the heart of the correction",
      paragraphs: [
        "Every dose- or shape-based correction depends on how accurately the scattering energy distribution—the PSF—is modeled for the actual resist, substrate and voltage. Common representations include the double Gaussian, Monte Carlo simulation, and measurement-based extraction. Recent research has explored composite models that pair a power-function forward-scattering component with a Gaussian backscattering component to keep accuracy while reducing computation, and validated the approach by correcting a hydrogen silsesquioxane zone plate with a 30 nm outer ring width using commercial correction software.",
        "For a production process, the practical questions are narrower. How is the PSF parameterized for your stack and voltage? Is it simulated, extracted from test exposures or taken from a library? How sensitive is the corrected result to errors in the parameters? A correction built on a mismatched PSF can be worse than none, because it redistributes dose with confidence in the wrong direction.",
        "Acceleration voltage changes the balance. Higher voltage reduces forward scattering in the resist but enlarges the backscattering range in the substrate; lower voltage concentrates the interaction but limits penetration. The PSF must therefore be revalidated whenever the stack or the voltage changes, and a recipe carried over from another project should be treated as unverified.",
      ],
      subsections: [
        {
          heading: "What to ask a supplier or facility about PEC",
          paragraphs: [
            "Frame the questions around your layout, not around software feature lists. Ask which correction methods are supported on the toolchain, how PSF parameters are determined for the resist–substrate combination and voltages you will use, and what correction computation time is typical for a layout of your size and shape count.",
          ],
          bullets: [
            "Supported correction methods: dose, shape, hybrid, GHOST-style",
            "PSF determination: simulation, measurement or library, with conditions",
            "Correction compute time for a representative layout",
            "Minimum address grid and dose granularity of the pattern generator",
            "Verification coupons: dense versus isolated features with metrology",
          ],
        },
      ],
      links: [
        { label: "Review the maskless lithography RFQ guide", href: "/technology/maskless-lithography-system-rfq/" },
        { label: "Explore hybrid lithography workflows", href: "/technology/hybrid-lithography/" },
      ],
    },
    {
      heading: "Where correction helps—and where it reaches its limits",
      paragraphs: [
        "PEC is highly effective for the systematic, layout-dependent component of linewidth deviation: dense regions stabilized against growth, isolated features brought to target, gratings held at uniform pitch across changing local density. It also protects overlay-sensitive multilayer work, because a dimension that drifts with density behaves like a process shift between layers.",
        "Its limits are equally real. Correction cannot remove statistical roughness, resist development nonlinearity, charging on insulating substrates or mechanical stage errors; those must be handled by their own measures. Physical mitigation techniques—high or low beam energy, multilayer resists, conductive discharge layers and substrate choice—remain relevant and complement software correction rather than duplicating it. Charging, in particular, distorts the dose distribution itself and should be eliminated before dose correction is trusted.",
        "Finally, correction adds data-preparation time before the first exposure. For iterative R&D this is usually acceptable; for large or deadline-driven jobs the correction compute time belongs in the schedule alongside the write time itself.",
      ],
      links: [
        { label: "Read the charging and discharge-layer discussion in the EBL selection guide", href: "/technology/electron-beam-lithography-system-selection/" },
        { label: "Discuss an EBL application with SENFU", href: "/contact/#application-form" },
      ],
    },
    {
      heading: "Building PEC into a qualification workflow",
      paragraphs: [
        "Treat PEC qualification like any other process module. Define test coupons that pair dense gratings with isolated features at the target linewidth, include corner-intensive geometries if your devices need them, and measure results with the same SEM-based metrology the production parts will use. Run the coupon before correction, after correction with the production PSF, and after a deliberate density change, so the sensitivity of the process to layout style is known rather than assumed.",
        "Record the complete correction configuration with the process data: PSF parameters and their origin, correction method and settings, software version, voltage, dose, resist and development. This makes the recipe auditable and transferable, and it turns an observed linewidth deviation into a diagnosable event instead of a mystery.",
        "SENFU supplies the ZEL304G electron beam lithography system and supports customers in defining the exposure and verification evidence their device stack requires. Submit the layout class, resist plan and target dimensions, and SENFU can help define the correction and test strategy before the first write.",
      ],
      links: [
        { label: "Review the ZEL304G system page", href: "/lithography-systems/zel304g/" },
        { label: "Submit an application review", href: "/contact/#application-form" },
      ],
    },
  ],
  midCta: {
    eyebrow: "PEC PROCESS REVIEW",
    title: "Dense gratings, isolated features or both?",
    description:
      "Send the layout class, resist stack, substrate and target linewidths, and SENFU can help define the proximity correction and verification plan.",
    label: "Request a PEC review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Plan for scattering, then verify on silicon.",
  conclusion: [
    "The proximity effect is a predictable consequence of electron scattering in the resist and substrate, and it is managed by deliberate correction—dose modification, shape modification or a hybrid—built on a scattering model matched to the actual process stack. Selecting the right scheme is a workflow decision that weighs correction accuracy, computation time, pattern generator capability and verification cost.",
    "Close the loop with measured coupons that combine dense and isolated geometries, keep the correction configuration with the process record, and revalidate whenever the stack or voltage changes. That discipline converts PEC from a software afterthought into a controlled part of the lithography process.",
  ],
  routes: [
    { label: "ZEL304G electron beam system", href: "/lithography-systems/zel304g/", note: "Nanoscale electron beam writing" },
    { label: "EBL system selection guide", href: "/technology/electron-beam-lithography-system-selection/", note: "Full selection framework" },
    { label: "EBL acceptance test plan guide", href: "/technology/electron-beam-lithography-acceptance-test-plan/", note: "Qualification evidence" },
    { label: "Technical application review", href: "/contact/#application-form", note: "Submit the layout class" },
  ],
  evidence: [
    "Correction method and PSF determination with resist, substrate and voltage conditions",
    "Dense-versus-isolated test coupon results with SEM metrology",
    "Correction computation time for a representative layout",
    "Dose granularity and address grid of the pattern generator",
    "Sensitivity check after a deliberate pattern-density change",
    "Recorded software version and correction configuration",
  ],
  faq: [
    {
      question: "What causes the proximity effect in electron beam lithography?",
      answer:
        "Electrons forward-scatter within the resist and backscatter from the substrate, depositing energy outside the intended exposure geometry. Dense regions accumulate extra dose and grow, isolated features develop smaller, and the deviation depends on local pattern density, voltage, resist thickness and substrate.",
    },
    {
      question: "What is the difference between dose modification and shape modification?",
      answer:
        "Dose modification assigns each written shape a corrected dose so all shapes absorb the same target energy after scattering; shape modification adjusts pattern dimensions so the developed resist matches the design. Dose modification is more exact but needs per-shape dose control and heavier computation; shape modification is simpler but limited by beam spot and address grid.",
    },
    {
      question: "Do I need proximity effect correction for every EBL job?",
      answer:
        "Not every job. Sparse layouts at relaxed dimensions may tolerate uncorrected exposure, but as density rises and features shrink, most nanoscale exposures benefit from correction. The decision should follow a test coupon on your actual layout class rather than a universal rule.",
    },
    {
      question: "Why does the PSF matter so much?",
      answer:
        "The point spread function describes how electron energy distributes after scattering for a given resist, substrate and voltage. All dose- and shape-based corrections are computed from it, so a mismatched PSF redistributes dose incorrectly and can make linewidths worse rather than better.",
    },
    {
      question: "Does PEC fix charging on insulating substrates?",
      answer:
        "No. Charge buildup deflects the beam and disturbs the dose distribution itself, so it must be controlled first with grounded or conductive substrates or a discharge layer. Once charging is removed, dose correction can be trusted.",
    },
    {
      question: "What should I send SENFU for a proximity correction review?",
      answer:
        "Send the layout class and density range, target linewidth and pitch, resist stack, substrate materials and voltages you plan to use. SENFU can help define the correction approach and the test evidence needed before production exposure.",
    },
  ],
  sources: [
    {
      publisher: "Discover Nano (Springer Nature)",
      label: "Proximity effect correction in electron beam lithography using a composite function model of electron scattering energy distribution",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12089565/",
    },
    {
      publisher: "arXiv",
      label: "A Review of Proximity Effect Correction in Electron-beam Lithography",
      href: "https://arxiv.org/abs/1509.05169",
    },
    {
      publisher: "DTU Nanolab",
      label: "Electron-Beam Lithography at DTU Nanolab",
      href: "https://labadviser.nanolab.dtu.dk/index.php?title=Specific_Process_Knowledge/Lithography/EBeamLithography/EBLLandingpage",
    },
  ],
};
