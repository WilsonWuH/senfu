import type { EditorialPage } from "@/lib/editorial-content";

export const precisionStageErrorBudgetAllocationGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / STAGE METROLOGY",
  title: "Precision Stage Error Budget: How to Allocate Positioning Accuracy Across a Motion Axis",
  description:
    "A positioning stage does not inherit its accuracy from any single component. This guide explains how to build a stage error budget: identify the dominant error sources, allocate tolerances across scale, mechanics, thermal behavior and dynamics, and verify each line item with the right metrology.",
  slug: "/technology/precision-stage-error-budget-allocation-guide/",
  publishedAt: "2026-10-09",
  modifiedAt: "2026-10-09",
  primaryKeyword: "precision stage error budget",
  secondaryKeywords: [
    "positioning stage accuracy allocation",
    "motion axis error sources",
    "stage repeatability vs accuracy",
    "machine error budget",
    "stage metrology verification",
  ],
  featuredImage: {
    src: "/images/technology/precision-stage-error-budget-allocation-guide/precision-stage-error-budget-allocation-guide-cover.webp",
    alt: "Precision linear motion stage on a granite base in a metrology laboratory, with a laser interferometer and environmental sensors arranged around it",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "A precision stage error budget is a written allocation of the axis's total permissible position error to its individual contributors: scale accuracy, interpolation error, mechanical geometry (straightness, squareness, pitch, yaw and roll), Abbe offsets, thermal expansion, structural compliance and vibration. Each contributor receives a share small enough that, combined, the axis still meets its positioning specification.",
    "The budget turns positioning accuracy from a hope into an engineering plan. It dictates which components need tighter specification, which measurements must be taken during build and commissioning, and which error sources should be compensated in the controller. Without it, teams over-specify the encoder while ignoring larger mechanical and thermal contributions, and discover the imbalance only at acceptance test.",
  ],
  challenge:
    "Most precision motion projects start with a single number: the positioning accuracy the machine must reach. The number then migrates into a datasheet line item and a purchase order, but nobody records how the accuracy will actually be achieved. In practice the failure pattern is consistent: teams buy the finest encoder resolution available, mount it on a stage whose straightness, thermal drift or Abbe geometry consume several times the entire budget, and then spend weeks at commissioning attributing the shortfall to the feedback device. A stage error budget exists to prevent exactly this cycle, because it forces every error source to be named, sized and verified before parts are ordered.",
  requirements: [
    { title: "Every source named and sized", description: "A line item for scale accuracy, interpolation error, geometric errors, Abbe, thermal, dynamics and environment, each with an estimated magnitude." },
    { title: "Verification method per line", description: "A defined measurement for each contributor, from laser interferometer runs to straightness artifacts and thermal drift logging." },
    { title: "Sums under process variation", description: "The budget must hold at temperature extremes, after warm-up and over the full travel, not only at reference conditions." },
    { title: "Compensation decided explicitly", description: "Which errors are corrected by mechanical build quality, which by calibration tables and which are left as residual risk." },
  ],
  routes: [
    { label: "Resolution vs accuracy", href: "/technology/encoder-resolution-vs-accuracy/", note: "Separate the two headline numbers" },
    { label: "Straightness & angular metrology", href: "/technology/linear-stage-straightness-angular-error-metrology-guide/", note: "Measure geometric error terms" },
    { label: "Laser interferometer verification", href: "/technology/linear-stage-accuracy-laser-interferometer-verification-guide/", note: "Verify the assembled axis" },
    { label: "Abbe error measurement", href: "/technology/optical-encoder-abbe-error-measurement-guide/", note: "Quantify the offset contribution" },
  ],
  evidence: [
    "Error budget table with per-source allocations summing to the axis specification",
    "Per-source verification data: interferometer, straightness, angular and thermal records",
    "Scale accuracy and interpolation error documents for the exact encoder configuration",
    "Compensation table version, calibration date and residuals after compensation",
    "Acceptance results under defined environmental conditions",
  ],
  comparisonTable: {
    caption: "Typical error budget line items for a precision linear axis and how each is verified",
    headers: ["Error source", "How it appears", "First verification", "Typical mitigation"],
    rows: [
      ["Scale accuracy", "Periodic and progressive deviation between reported and true position over travel", "Interferometer comparison over full travel", "Higher-grade scale; linear and periodic error mapping"],
      ["Geometric errors", "Position error coupled from straightness, pitch, yaw, roll and squareness", "Straightness artifact, autocollimator or laser vector measurement", "Tighter guide specification; geometry compensation"],
      ["Abbe offset", "Angular motion amplified by the distance between measurement axis and working point", "Repeatability test at the tool point versus at the scale", "Shorten the Abbe arm; measure at the working point"],
      ["Thermal expansion", "Slow drift of reported position with machine and ambient temperature", "Drift logging over a thermal cycle with stage at rest", "Material matching; warm-up routine; temperature compensation"],
      ["Dynamics & vibration", "Jitter, overshoot and settling error during and after motion", "On-axis accelerometer or capacity probe during move-settle cycles", "Isolation, servo tuning, stiffer structure"],
    ],
  },
  articleSections: [
    {
      heading: "Accuracy is a system property, not a component datasheet",
      paragraphs: [
        "The single most common specification error in precision motion is treating the encoder accuracy figure as the stage accuracy figure. A scale specified at ±2 µm per meter tells you about the scale, not about the axis. The assembled stage adds geometric errors from the guides, structural compliance, Abbe amplification, thermal behavior of every material in the loop, servo dynamics and environmental coupling. Each of these can exceed the scale error by a wide margin, and their sum is what the process actually experiences at the working point.",
        "An error budget makes this explicit. It lists every contributor, assigns a permissible magnitude, and requires the allocations to add up—by root-sum-square for independent random terms, or linearly where errors correlate—to the positioning specification. Writing the table early changes procurement conversations: instead of asking for the finest resolution available, the team asks which line item is furthest from closing and spends accordingly.",
      ],
      links: [
        { label: "Read the resolution vs accuracy guide", href: "/technology/encoder-resolution-vs-accuracy/" },
        { label: "Read the straightness and angular metrology guide", href: "/technology/linear-stage-straightness-angular-error-metrology-guide/" },
      ],
    },
    {
      heading: "Naming and sizing the dominant sources",
      paragraphs: [
        "Geometric errors are usually the largest mechanical contributors. Straightness and roll couple into position error through the Abbe arm, and yaw couples through the distance between the measurement axis and the center of rotation of angular motion. Squareness between axes produces an error proportional to travel on the second axis. These terms scale with geometry and can dominate even when every component is individually well made.",
        "Thermal behavior is the second family. A steel scale mounted on an aluminum body expands at a different rate than the structure it measures, so a temperature change produces position error even with a perfect scale. Drive motor dissipation adds gradients that bias the axis differently after an hour of operation than at start-up. Dynamic terms—vibration transmitted through the floor, structural modes excited by acceleration, and the settling behavior of the servo loop—complete the picture and often define repeatability rather than absolute accuracy.",
      ],
      bullets: [
        "Straightness, roll and yaw couple into position error through Abbe offsets",
        "Squareness errors grow proportionally with travel on the companion axis",
        "Scale-to-structure expansion mismatch turns temperature change into position error",
        "Vibration and servo settling typically set the repeatability floor",
      ],
    },
    {
      heading: "Allocating, verifying and closing the budget",
      paragraphs: [
        "A practical allocation starts from what is measurable and controllable. Assign the encoder line from the documented scale accuracy plus interpolation error; assign geometry from supplier data on the guides and the designed Abbe arm; estimate thermal terms from material coefficients, expected temperature range and dissipation; reserve the remainder for dynamics and residuals. If the sum overshoots the specification, the fix is not wishful thinking—it is a design change: shorter Abbe arms, better guides, matched materials, higher-grade scale, or compensation.",
        "Verification must follow the same structure as the budget. Measure the assembled axis with a laser interferometer over full travel at a controlled temperature; measure straightness and angular errors with an artifact or autocollimator; log drift through a thermal cycle; and record move-and-settle behavior at the working point. The verification data then feeds back into the budget table, replacing estimates with measurements and exposing which line items need a design revision before the machine ships.",
      ],
      image: {
        src: "/images/technology/precision-stage-error-budget-allocation-guide/precision-stage-error-budget-allocation-guide-detail.webp",
        alt: "Engineer aligning a laser interferometer beam toward a linear stage mirror while recording displacement data on a metrology log sheet",
        width: 1600,
        height: 900,
      },
      links: [
        { label: "Read the laser interferometer verification guide", href: "/technology/linear-stage-accuracy-laser-interferometer-verification-guide/" },
        { label: "Read the Abbe error measurement guide", href: "/technology/optical-encoder-abbe-error-measurement-guide/" },
      ],
    },
    {
      heading: "Keeping the budget honest in operation",
      paragraphs: [
        "A budget that closes at acceptance can drift in service. Scales accumulate contamination, guides wear, compensation tables age with the machine, and site environments differ from the qualification lab. Treat the error budget as a living document: re-verify the dominant line items on a maintenance interval, record compensation table changes with dates and residuals, and define the environmental envelope in which the specification holds.",
        "For procurement, the same discipline applies to the supplier conversation. Request the configuration-specific scale accuracy and interpolation error documents, the calibration method and its traceability, and the recommended installation tolerances, because each of these feeds a line item in your own budget. SENFU supports error budget reviews by providing per-configuration encoder data and installation documentation, so the feedback contribution to your stage budget is verifiable rather than assumed.",
      ],
      links: [
        { label: "Read the error mapping and compensation guide", href: "/technology/optical-encoder-error-mapping-compensation-guide/" },
        { label: "Request an error budget review", href: "/contact/#application-form" },
      ],
    },
  ],
  midCta: {
    eyebrow: "ERROR BUDGET REVIEW",
    title: "Which line item is eating your positioning accuracy?",
    description:
      "Send your travel, accuracy target, environment and working point geometry—SENFU can supply the per-configuration encoder data your stage error budget needs, and help place the feedback contribution in context.",
    label: "Request an error budget review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Positioning accuracy is allocated, not purchased.",
  conclusion: [
    "A precision stage reaches its specification because every error source was named, sized, verified and either engineered out or compensated. The encoder is one line among several, and usually not the largest. Geometric error, Abbe offsets, thermal expansion and dynamics each deserve their own allocation and their own measurement.",
    "Write the budget before ordering components, verify it line by line during build, and keep it alive through maintenance. Then positioning accuracy becomes a property the machine demonstrates repeatably—under acceptance conditions and in service alike.",
  ],
  faq: [
    {
      question: "What is a stage error budget?",
      answer:
        "A documented allocation of the axis's total permissible position error to its individual contributors—scale accuracy, interpolation error, geometric errors, Abbe offsets, thermal expansion, dynamics and environment—with each share chosen so the combined result meets the positioning specification.",
    },
    {
      question: "Why is encoder accuracy not the same as stage accuracy?",
      answer:
        "The encoder only reports position along its measurement axis. The working point experiences additional error from guide geometry, Abbe amplification of angular motion, thermal expansion of the structure, compliance and vibration. These contributions frequently exceed the scale error itself.",
    },
    {
      question: "How are error budget terms combined?",
      answer:
        "Independent, uncorrelated terms are commonly combined by root-sum-square; correlated or systematically aligned terms add linearly. The combination method should be stated, because it changes how much margin each line item must retain.",
    },
    {
      question: "Which error sources dominate in practice?",
      answer:
        "For most stages, geometric errors amplified by Abbe offsets and thermal expansion dominate absolute accuracy, while vibration and servo settling dominate repeatability. Scale accuracy matters, but a careful budget usually finds larger contributors elsewhere.",
    },
    {
      question: "When should the error budget be re-verified?",
      answer:
        "At build and commissioning, after any mechanical change or compensation table update, and on a maintenance interval defined for the machine. Re-verify the dominant line items first, since they move the total the most.",
    },
  ],
  sources: [
    {
      publisher: "ASPE",
      label: "American Society for Precision Engineering — precision metrology resources",
      href: "https://aspe.net/",
    },
    {
      publisher: "NIST",
      label: "NIST — precision engineering and dimensional metrology publications",
      href: "https://www.nist.gov/",
    },
    {
      publisher: "Heidenhain",
      label: "Heidenhain — encoder accuracy and installation documentation",
      href: "https://www.heidenhain.com/",
    },
    {
      publisher: "Renishaw",
      label: "Renishaw — laser interferometer measurement and encoder guides",
      href: "https://www.renishaw.com/",
    },
  ],
};
