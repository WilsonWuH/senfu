import type { EditorialPage } from "@/lib/editorial-content";

export const multiAxisStageCrossCouplingErrorGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / STAGE METROLOGY",
  title: "Multi-Axis Cross-Coupling Error in Precision XY Stages: Sources, Measurement and Mitigation",
  description:
    "Commanding X and watching Y move is the defining symptom of cross-coupling error. This guide explains where XY cross-coupling comes from in precision stages, how to measure it with grid encoders, circle tests and laser vector methods, and how to specify and mitigate it in a multi-axis system.",
  slug: "/technology/multi-axis-stage-cross-coupling-error-guide/",
  publishedAt: "2026-10-06",
  modifiedAt: "2026-10-06",
  primaryKeyword: "cross-coupling error stage",
  secondaryKeywords: [
    "XY stage crosstalk error",
    "multi-axis positioning error coupling",
    "squareness error compensation",
    "grid encoder 2D measurement",
    "contouring error precision stage",
    "axis orthogonality precision machine",
  ],
  featuredImage: {
    src: "/images/technology/multi-axis-stage-cross-coupling-error-guide/multi-axis-stage-cross-coupling-error-guide-cover.webp",
    alt: "Precision XY motion stage on a granite base with a two-dimensional grid encoder and alignment optics set up for cross-coupling error measurement",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Cross-coupling error is the motion error that appears on one axis when another axis is commanded. In an ideal XY stage, moving X leaves Y untouched; in a real one, Y sees a parasitic displacement or rotation composed of geometric contributions—straightness error of each axis, squareness error between them, Abbe offsets—and control contributions, where dual-axis drives or imperfect decoupling push correction forces into the wrong axis. The result shows up directly as contouring error: a circle programmed on the axes comes out elliptical or tilted, and scanned trajectories carry systematic cross-tracks.",
    "Measurement needs instruments that watch both axes simultaneously: a calibrated two-dimensional grid encoder reports X and Y error at the tool point during motion, dynamic circle tests expose coupling as shape distortion at process speed, and laser vector or straightness measurements attribute the coupling to specific axes. Mitigation is layered—mechanical (improve straightness and squareness, reduce Abbe offsets), geometric (map and compensate squareness and cross-track in the controller) and control-side (decoupling and cross-coupling gains)—and each layer should be verified with the same 2D measurement that found the error.",
  ],
  challenge:
    "Single-axis specifications look impeccable: X positioning accuracy certified with a laser interferometer, Y likewise, both within nanometres. Then a diagonal scan, a circular trajectory or a raster with flyback shows errors several times larger, purely in the combination of axes. The culprit is cross-coupling—every axis certification was taken with only one axis moving, so the interaction terms were invisible. Straightness error of the X carriage displaces Y; an 80-microradian squareness error displaces Y by 80 nanometres per millimetre of X travel; dual-drive control loops fight each other at direction reversals. None of these appear on a single-axis report, yet they dominate every multi-axis process: raster scanning, stitching, wafer mapping and contour following all live exactly where the coupling lives.",
  requirements: [
    { title: "Simultaneous 2D measurement", description: "Error measured on both axes at the working point while both axes move, using a grid encoder, 2D interferometry or an equivalent calibrated reference—not single-axis tests extrapolated." },
    { title: "Quantified geometric terms", description: "Straightness per axis, squareness between axes and Abbe offsets measured and reported as separate line items, so coupling can be attributed and compensated." },
    { title: "Dynamic coupling at process speed", description: "Coupling evaluated during representative trajectories—rasters, circles, direction reversals—at production velocity, since control-induced coupling is speed- and acceleration-dependent." },
    { title: "Compensation state and verification", description: "Squareness and cross-coupling compensations documented, and their effect verified with the same 2D measurement after application, with residual contouring error stated." },
  ],
  routes: [
    { label: "Straightness and angular error metrology", href: "/technology/linear-stage-straightness-angular-error-metrology-guide/", note: "Per-axis geometric errors" },
    { label: "Reversal error measurement", href: "/technology/linear-stage-reversal-error-measurement-compensation-guide/", note: "Bidirectional behavior" },
    { label: "Error mapping and compensation", href: "/technology/optical-encoder-error-mapping-compensation-guide/", note: "From map to compensation" },
    { label: "Dual-drive gantry synchronization", href: "/technology/dual-drive-gantry-encoder-synchronization-guide/", note: "Control-side coupling" },
  ],
  evidence: [
    "Grid encoder or equivalent 2D error map over the working area, both axes simultaneously",
    "Squareness measurement with method, instrument and uncertainty stated",
    "Straightness and angular error records for each axis from the same campaign",
    "Contouring test result at process velocity, before and after compensation",
    "Compensation table or parameter set documented with version and date",
  ],
  comparisonTable: {
    caption: "Sources of XY cross-coupling and how they are handled",
    headers: ["Source", "Signature", "Measured by", "Primary mitigation"],
    rows: [
      ["Axis straightness error", "Y displacement proportional to X position, periodic with carriage travel", "Straightness interferometer or artifact; 2D grid encoder", "Mechanical improvement, then cross-track error map compensation"],
      ["Squareness between axes", "Y error growing linearly with X travel; tilted trajectories", "Squareness straightedge, optical square or reversal; grid encoder area map", "Squareness compensation in controller; mechanical realignment if severe"],
      ["Abbe offsets with angular error", "Coupling that grows with angular error of the moving carriage", "Angular metrology plus offset measurement", "Reduce offsets toward the tool point; correct angular terms"],
      ["Dual-drive / gantry control conflict", "Error spikes at direction reversal or high acceleration; oscillation at drive modes", "Dynamic circle test; synchronized 2D capture at speed", "Cross-coupling control gains, synchronized dual-axis tuning"],
      ["Guideway wear or contamination", "Coupling that drifts over time and varies along travel", "Periodic 2D remapping against the baseline", "Maintenance schedule plus periodic remap"],
      ["Foundation and thermal asymmetry", "Slowly changing squareness with temperature drift", "Squareness re-measurement across thermal states", "Thermal control, symmetric structures, warmup procedure"],
    ],
  },
  articleSections: [
    {
      heading: "What cross-coupling is and where it comes from",
      paragraphs: [
        "Cross-coupling is defined at the point that matters—the tool, sensor or beam spot. When X is commanded, the working point should move only along X; its parasitic motion along Y and in rotation is cross-coupling error. The geometric part decomposes neatly: the X carriage's straightness error moves the point sideways, any squareness error between the axes makes X travel lean into Y by a fixed angle, and Abbe offsets convert the carriage's roll, pitch and yaw into lateral displacement. These terms are quasi-static, repeatable and therefore compensable.",
        "The control part is less polite. Multi-axis machines with dual drives, gantry configurations or coordinated trajectories couple through the controller: each axis loop sees disturbance forces from the others, and imperfect decoupling means accelerating X kicks Y, most visibly at reversals and high acceleration. This component is velocity- and tuning-dependent, so it must be measured under representative motion rather than inferred from static geometry. A stage can have perfect geometric squareness and still contour poorly because its loops fight at every corner.",
      ],
      links: [
        { label: "Read the straightness and angular metrology guide", href: "/technology/linear-stage-straightness-angular-error-metrology-guide/" },
        { label: "Read the dual-drive synchronization guide", href: "/technology/dual-drive-gantry-encoder-synchronization-guide/" },
      ],
    },
    {
      heading: "Measuring coupling in two dimensions",
      paragraphs: [
        "The defining measurement discipline is simultaneity: both axes' errors captured at the tool point while motion happens. A calibrated two-dimensional grid encoder is the reference of choice—it reads X and Y displacement continuously at high bandwidth across its calibrated area, producing a map in which straightness coupling appears as cross-track deviation, squareness as a systematic tilt that grows with travel, and control coupling as distortion concentrated at reversals and corners. Circle tests compress the same information into one shape: a perfect circle command returns an ellipse from squareness, a tilted ellipse from cross-axis offset, and lobed distortion from control coupling at reversal points.",
        "Attribution then needs the per-axis record. Straightness and angular measurements on each axis alone, taken in the same campaign, let the 2D map be decomposed into causes. The practical sequence is: map in 2D, measure per-axis geometry, apply compensation—squareness constant, cross-track map, control decoupling gains—then remap in 2D and state the residual contouring error. Compensation that is never re-verified in 2D is a guess with a parameter file.",
      ],
      bullets: [
        "Grid encoder: continuous 2D error at the working point, ideal for mapping",
        "Circle test: fastest coupling screen, sensitive to squareness and reversal behavior",
        "Per-axis straightness and squareness records for attribution",
        "Post-compensation 2D remap to state the residual honestly",
      ],
      image: {
        src: "/images/technology/multi-axis-stage-cross-coupling-error-guide/multi-axis-stage-cross-coupling-error-guide-detail.webp",
        alt: "Engineer analyzing a two-dimensional error map and circular contour plot on a monitor beside a granite-based XY precision stage",
        width: 1600,
        height: 900,
      },
    },
    {
      heading: "Compensating without hiding the mechanics",
      paragraphs: [
        "Modern controllers absorb a remarkable share of cross-coupling: squareness constants correct the fixed axis-to-axis angle, cross-track error maps cancel straightness-induced coupling over travel, and decoupling control terms reduce dynamic interaction between loops. Applied well, a stage with micrometre-scale raw geometric coupling can contour at sub-micrometre levels. The discipline is to treat compensation as a layer over measured mechanics, not a substitute for them: compensations are valid only over the travel and conditions where they were mapped, they add parameters that can be mis-set, and they cannot follow mechanical drift they were never re-measured against.",
        "Two habits keep the layer honest. First, version and date every compensation table, and tie each re-measurement campaign to the table version active during it—when a stage's behavior changes months later, the baseline answers whether the mechanics moved or the parameters did. Second, watch the thermal boundary: squareness is a property of a structure at a temperature, and a machine that maps beautifully at 20 degrees can couple differently at 22. Specification of the thermal state belongs with the squareness number.",
      ],
      links: [
        { label: "Read the error mapping and compensation guide", href: "/technology/optical-encoder-error-mapping-compensation-guide/" },
        { label: "Read the reversal error guide", href: "/technology/linear-stage-reversal-error-measurement-compensation-guide/" },
      ],
    },
    {
      heading: "Specifying cross-coupling for a multi-axis order",
      paragraphs: [
        "A single-axis accuracy clause cannot buy contouring quality. A useful multi-axis specification adds: squareness between axes with method and uncertainty; straightness and angular error per axis; a 2D error map over the working area from a grid encoder or equivalent; residual contouring error at a defined trajectory and speed, measured after compensation; and the compensation state, documented, that produced the result. For scanning applications, add the coupling behavior during constant-velocity raster segments and at flyback, since those are where the process spends its time.",
        "The payoff is measured in process terms: stitched fields land on each other, rasters keep their pitch across the full scan, and circles stay round. Machines qualified only axis-by-axis deliver all of these poorly, and the deficiency surfaces exactly where the work is—on the diagonal. Multi-axis performance is a property of the pair of axes and their control, and it should be specified, measured and accepted as such.",
      ],
      links: [
        { label: "Read the laser interferometer verification guide", href: "/technology/linear-stage-accuracy-laser-interferometer-verification-guide/" },
        { label: "Submit a multi-axis requirement", href: "/contact/#application-form" },
      ],
    },
  ],
  midCta: {
    eyebrow: "MULTI-AXIS PERFORMANCE REVIEW",
    title: "Do your axes agree with each other?",
    description:
      "Send the travel range, trajectory types and contouring tolerance for your multi-axis application, and SENFU can help define the cross-coupling measurements, squareness specification and compensation verification plan.",
    label: "Request a cross-coupling review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Two certified axes are not one certified system.",
  conclusion: [
    "Cross-coupling error lives in the interaction that single-axis certification never exercises: straightness of one axis displacing another, squareness leaning every diagonal trajectory, Abbe offsets converting tilt to lateral error, and control loops interfering at reversals. For any process that scans, stitches or follows contours, these interaction terms dominate the accuracy that the individual axis certificates promise.",
    "Specify and verify the system as a system: simultaneous two-dimensional measurement at the tool point, per-axis geometry for attribution, compensation applied and then re-verified in 2D with residuals stated, and thermal and compensation states documented with every campaign. Contouring quality is bought with this evidence—not with two good single-axis reports.",
  ],
  faq: [
    {
      question: "What is cross-coupling error in an XY stage?",
      answer:
        "The parasitic motion that appears on one axis when another is commanded, evaluated at the working point. It combines geometric sources—straightness error of each axis, squareness between axes, Abbe offsets—with control-side coupling between axis loops, and it appears directly as contouring and cross-track error in multi-axis trajectories.",
    },
    {
      question: "How does squareness error translate into positioning error?",
      answer:
        "Linearly with travel: a squareness error of one microradian displaces the working point by one nanometre per millimetre of travel on the other axis, so 80 microradians—about 17 arcseconds—yields 80 nanometres of cross-error per millimetre. Over a 300-millimetre travel, that is 24 micrometres before any compensation.",
    },
    {
      question: "Why do both axes pass their single-axis tests but contour poorly?",
      answer:
        "Single-axis tests move one axis at a time, so interaction terms never activate. Cross-coupling appears only during combined motion, and control-induced coupling additionally depends on velocity and acceleration. A circle or raster test at process speed exposes what the individual axis certificates cannot see.",
    },
    {
      question: "Which instrument is best for measuring cross-coupling?",
      answer:
        "A calibrated two-dimensional grid encoder is the strongest general tool: it captures X and Y error simultaneously at the tool point with high bandwidth across the working area. Dynamic circle tests are an excellent fast screen, while laser straightness and squareness measurements provide the per-axis attribution needed to assign causes.",
    },
    {
      question: "Can controller compensation fix cross-coupling completely?",
      answer:
        "It can remove a large, repeatable share—squareness constants and cross-track maps handle the geometric terms, decoupling gains reduce dynamic interaction. What remains is whatever drifted after mapping, plus terms outside the mapped conditions. Compensation must be re-verified in 2D after any mechanical, thermal or parameter change.",
    },
    {
      question: "What should I send SENFU for a cross-coupling assessment?",
      answer:
        "Travel ranges, the trajectory types and speeds your process uses, the contouring or overlay tolerance, and any existing axis certification reports. SENFU can help define the 2D measurement plan, squareness specification and compensation verification for the application.",
    },
  ],
  sources: [
    {
      publisher: "NPL",
      label: "National Physical Laboratory — dimensional metrology and machine verification good practice guides",
      href: "https://www.npl.co.uk/",
    },
    {
      publisher: "ASPE",
      label: "American Society for Precision Engineering — multi-axis machine metrology resources",
      href: "https://aspe.net/",
    },
    {
      publisher: "euspen",
      label: "European Society for Precision Engineering and Nanotechnology — machine tool verification proceedings",
      href: "https://www.euspen.eu/",
    },
    {
      publisher: "ISO",
      label: "ISO 230-1 — geometric accuracy of machines operating under no-load or quasi-static conditions",
      href: "https://www.iso.org/",
    },
  ],
};
