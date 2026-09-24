import type { EditorialPage } from "@/lib/editorial-content";

export const longStrokeLinearStageEncoderScaleSplicingGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / ENCODER SCALE SPLICING",
  title: "Long-Stroke Linear Stage Scale Splicing: Joint Error, Splicing Process and Acceptance Measurement",
  description: "When travel exceeds the longest practical scale, accuracy has to survive a joint. This guide explains where scale splicing error comes from, how a splice is made and verified, and which acceptance measurements prove the spliced axis meets its error budget over the full stroke.",
  slug: "/technology/long-stroke-linear-stage-encoder-scale-splicing-guide/",
  publishedAt: "2026-09-24",
  modifiedAt: "2026-09-24",
  primaryKeyword: "encoder scale splicing",
  secondaryKeywords: [
    "long stroke linear encoder",
    "scale joint error",
    "spliced linear scale installation",
    "laser interferometer scale verification",
    "long travel position feedback",
    "scale segment alignment",
  ],
  featuredImage: {
    src: "/images/technology/long-stroke-linear-stage-encoder-scale-splicing-guide/long-stroke-linear-stage-encoder-scale-splicing-guide-cover.webp",
    alt: "Long-travel linear motor stage on a granite base with two precision encoder scale segments meeting at a splice joint, a readhead positioned between them",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Scale splicing joins two or more encoder scale segments into one continuous reference when travel exceeds the longest practical single piece. The joint is a manufactured feature, not an assembly accident: each segment brings its own accuracy curve, and the splice adds pitch mismatch, an axial gap and tilt between the segments. Those defects appear in the axis error as a step or local pitch error at the seam, which the readhead crosses on every stroke.",
    "Treat splicing as a specified process with a measured outcome. Require a joint error budget, an overlap-based alignment method with the signal or position criterion used to close the joint, a fixing and stress-relief procedure, and an acceptance measurement that maps axis error across the seam with a laser interferometer or equivalent reference. If a supplier cannot state how the joint is aligned and measured, the spliced axis has no verifiable accuracy claim.",
  ],
  challenge: "Long-travel machines meet a hard boundary: rigid scales are manufactured and certified in limited lengths, and beyond that the choices are a tape scale that follows the substrate, or spliced segments that preserve the preferred scale material. Splicing is often chosen for its accuracy promise and then executed like a fitting operation, which is where the promise is lost. A splice made without a reference and a measured criterion accumulates pitch mismatch, gap and tilt invisibly; the readhead crossing the seam may show a signal transient, a position step or a slow change in interpolation quality, and none of it appears until the axis is calibrated end to end. Because the error is localised, a spot check at mid-travel passes while the seam quietly sits outside the budget. Vendors rarely volunteer joint data, and buyers rarely ask for the alignment method, so spliced axes are accepted on the strength of their segment certificates alone. The fix is to buy the splice as a process: a stated budget, a defined alignment and fixing procedure, and an acceptance map that covers the seam explicitly.",
  requirements: [
    { title: "Joint error budget", description: "Require the permitted position step, pitch mismatch and signal-transient limits at the seam, derived from the axis error budget rather than left to workshop practice." },
    { title: "Alignment method and criterion", description: "Confirm how segments are aligned, whether by overlap against a reference, signal matching or calibrated displacement, and the numeric criterion that closes the joint." },
    { title: "Fixing and stress control", description: "Obtain the fixing pattern, adhesive or clamp specification and stress-relief design so joint geometry survives temperature cycling and service." },
    { title: "Acceptance across the seam", description: "Specify an end-to-end error map with a laser interferometer or equivalent, with measurement points placed so the joint region is resolved, not averaged away." },
  ],
  routes: [
    { label: "Optical encoder range", href: "/optical-encoders/", note: "Compare readhead and scale configurations" },
    { label: "Signal quality troubleshooting", href: "/technology/linear-encoder-signal-quality-distortion-troubleshooting-guide/", note: "Diagnose seam transients" },
    { label: "Thermal error budgeting", href: "/technology/linear-encoder-thermal-error-budget/", note: "Include joints in the budget" },
    { label: "Splicing project review", href: "/contact/#application-form", note: "Send travel, substrate and accuracy targets" },
  ],
  evidence: [
    "Permitted joint error in position step, pitch mismatch and tilt, with its derivation from the axis budget",
    "Written splicing procedure: alignment method, closing criterion, fixing pattern and stress-relief design",
    "Segment calibration certificates covering the end regions that meet at the joint",
    "End-to-end axis error map from acceptance, with points resolved across the seam",
    "Signal quality record across the joint: amplitude, symmetry and any readhead transient during crossing",
  ],
  comparisonTable: {
    caption: "Where scale joint error comes from and what it does to the axis",
    headers: ["Joint defect", "Physical origin", "Effect on the axis", "What closes it out"],
    rows: [
      ["Position step at the seam", "Pitch mismatch between segment end regions against the reference", "A one-off position jump every time the readhead crosses the joint", "Overlap alignment against a reference scale or calibrated displacement"],
      ["Local pitch error", "Segment accuracy curves disagreeing near their ends", "A short-wavelength error bump or dip around the seam", "End-region calibration data and measured segment selection"],
      ["Axial gap error", "Distance between segment ends differing from the assumed pitch continuation", "Dead zone or doubled counting risk at the crossing", "Gap specified and verified before fixing, readhead coverage confirmed"],
      ["Tilt between segments", "Angular mismatch of the grating planes at the joint", "Signal contrast loss and interpolation error near the seam", "Tilt measurement and shimming during alignment, verified after fixing"],
      ["Signal transient", "Readhead transition between segment signals at the crossing", "Jitter or velocity ripple localised at the joint position", "Joint placed outside critical process zones, transient measured at acceptance"],
      ["Substrate step at the joint", "Uneven base flatness or fixing stress across the seam", "Slow drift of joint geometry with temperature and time", "Base flatness class, stress-relief design and periodic re-verification"],
    ],
  },
  articleSections: [
    {
      heading: "Why long travel forces a scale decision",
      paragraphs: [
        "Rigid scales are manufactured, certified and shipped in limited lengths; beyond a few metres, straightness control, fragility and handling make a single piece impractical. A machine with ten metres of travel therefore chooses between a tensioned tape scale, which removes joints but adopts the substrate as its reference, and a spliced installation of rigid segments, which keeps the preferred scale material and its grating quality but introduces seams that must be engineered. Neither route is free; each moves the difficulty to a different place.",
        "Splicing earns its keep when the application needs the accuracy, stability or signal quality of rigid scales and the substrate cannot serve as the reference. What it demands in return is process discipline: a joint designed and measured like any other precision feature. Machines that treat the splice as an assembly convenience usually discover the cost during calibration, when a localised error appears exactly where the certificate ends.",
      ],
      links: [
        { label: "Read the scale material selection guide", href: "/technology/optical-encoder-scale-material-selection-guide/" },
        { label: "Compare the optical encoder family", href: "/optical-encoders/" },
      ],
    },
    {
      heading: "Where joint error comes from",
      paragraphs: [
        "Every segment carries its own calibration curve, and the two curves rarely agree at their ends. The difference appears as pitch mismatch across the seam, which the axis sees as a position step whenever the readhead crosses the joint. Add the physical realities of installation: an axial gap between segment ends, a small tilt between grating planes, and a substrate that may not be equally flat on both sides. Each defect has a distinct signature in the error map, and together they define the joint budget.",
        "The defects also interact with the readhead. Near the seam, signal contrast can dip, quadrature can shift, and interpolation quality can degrade for the few millimetres of transition, showing up as jitter or velocity ripple localised at one position of the stroke. Because all of this is confined to a narrow zone, a conventional accuracy test with sparse points can miss it entirely, which is why joint error is specified and measured explicitly rather than hoped away.",
      ],
      bullets: [
        "Pitch mismatch between the calibrated ends of adjacent segments",
        "Axial gap and tilt between grating planes at the seam",
        "Substrate flatness and fixing stress across the joint",
        "Readhead signal transient during the crossing",
      ],
    },
    {
      heading: "The splicing process: reference, alignment, closing",
      paragraphs: [
        "A controlled splice starts with data. The end regions of both segments should be calibrated, so the installer knows what mismatch is being closed, not just what the certificate says about mid-scale. Segments are then aligned by overlap against a reference: either a master scale spanning the seam, or a calibrated displacement stage that moves the readhead across the joint while position is compared against the reference. The closing criterion is numeric, a permitted step within the joint budget, and it is measured before anything is fixed.",
        "Fixing is where alignment survives or dies. The adhesive or clamp pattern, the stress-relief design and the substrate flatness across the seam decide whether the measured joint geometry holds through temperature cycling and service. Verification after fixing is part of the process, not an option: the seam is re-measured once the fixing has cured, because clamping stress and adhesive shrinkage both move geometry. A splice documented this way behaves like a manufactured feature, which is exactly what the axis error budget assumes.",
      ],
      image: {
        src: "/images/technology/long-stroke-linear-stage-encoder-scale-splicing-guide/long-stroke-linear-stage-encoder-scale-splicing-guide-detail.webp",
        alt: "Technician aligning two encoder scale segments at a splice joint on a granite machine base using a dial indicator and a reference scale with the readhead visible above the seam",
        width: 1600,
        height: 900,
      },
    },
    {
      heading: "Readhead behaviour at the seam",
      paragraphs: [
        "The readhead crossing a splice transitions from one segment's signal to the next, and the quality of that transition depends on joint geometry and readhead design. Where the gap, tilt and pitch mismatch are inside the specified window, the crossing is uneventful: amplitude stays within its band, interpolation continues, and the axis error map shows the step but no transient. Where they are not, the seam produces contrast dips, quadrature shifts and, in the worst case, a lost-count risk that appears as a position fault at one specific point of the stroke.",
        "Two design decisions reduce the exposure. First, place the joint where the process is least sensitive, away from the measurement or exposure zone the machine exists to serve. Second, choose a readhead whose gap and alignment tolerances accommodate the joint specification rather than consuming it. Ask the supplier for the signal record across a representative joint, amplitude and symmetry against position, because that record predicts how the seam will behave in service better than any statement about segment accuracy.",
      ],
      links: [
        { label: "See signal quality troubleshooting", href: "/technology/linear-encoder-signal-quality-distortion-troubleshooting-guide/" },
        { label: "Read the velocity feedback guide", href: "/technology/linear-encoder-velocity-feedback-servo-bandwidth/" },
      ],
    },
    {
      heading: "Acceptance measurement across the joint",
      paragraphs: [
        "Acceptance is where the splice is proven, and the method must resolve the seam. A laser interferometer comparing axis position against traceable displacement, measured along the full stroke with points dense enough to capture the joint region, produces the error map that matters. The map is read against the budget: the position step at the seam, any local pitch error around it, and the behaviour of repeatability measured on both sides. A sparse grid that happens to straddle the joint can hide a defect the process will find on day one.",
        "The measurement should be repeated after thermal soak or a representative warm-up, because joint geometry that passes cold can drift when the substrate expands. Record the signal quality trace across the seam at the same time, and file the segment certificates with the acceptance report so future service has the original mismatch data. Acceptance performed this way turns the splice from an unknown into a measured feature with a baseline for trend monitoring over the machine's life.",
      ],
      bullets: [
        "Laser interferometer map over the full stroke, points resolved at the seam",
        "Position step and local pitch error compared with the joint budget",
        "Repeatability measured on both sides of the joint",
        "Re-check after thermal soak, plus a filed baseline for future monitoring",
      ],
    },
    {
      heading: "Spliced segments or a single tape scale",
      paragraphs: [
        "The alternative to splicing is to let the reference follow the machine. A tensioned tape scale runs the full stroke without joints, installs on beds of many metres and inherits the substrate's expansion and form. On a stable steel structure the tape route is often cheaper, faster and lower risk than any splice; on a granite or low-expansion base, or where grating quality matters more than the substrate can offer, segments keep their appeal. The decision is structural, not categorical.",
        "What the two routes share is the need for evidence. A tape axis needs substrate flatness and installation process data; a spliced axis needs the joint budget, procedure and acceptance map described here. Ask any supplier of a long-stroke machine which route was taken and what measurement closes it out. A builder who answers with a documented process is selling a reference; one who answers with adjectives is selling a stroke length.",
      ],
      links: [
        { label: "Read the installation alignment errors guide", href: "/technology/linear-encoder-installation-alignment-errors/" },
        { label: "Plan a long-stroke feedback review", href: "/contact/#application-form" },
      ],
    },
  ],
  conclusion: [
    "A splice is a manufactured feature, and it should be bought as one: a joint error budget derived from the axis, a written alignment and fixing procedure with a numeric closing criterion, and an acceptance map that resolves the seam and survives a thermal soak. Specified and measured this way, spliced scales extend precision over long travel; unspecified, they localise an error exactly where the certificate stops.",
  ],
  faq: [
    {
      question: "How large can the position step at a splice joint be?",
      answer: "There is no universal figure; the tolerance comes from the axis error budget and the process sensitivity at the joint location. What matters is that the supplier states a numeric step limit, that alignment closes against it, and that the acceptance map verifies it with the readhead installed.",
    },
    {
      question: "Does the readhead lose count at the seam?",
      answer: "It should not, if joint gap, tilt and pitch mismatch are inside the readhead's specified window and the signal record across a representative joint is clean. A lost-count risk appears when joint geometry violates that window, which is why the seam signal trace belongs in acceptance.",
    },
    {
      question: "Why calibrate the segment ends instead of relying on certificates?",
      answer: "Standard certificates describe overall scale accuracy, usually with the best data away from the ends. The splice closes against the end regions specifically, so knowing the mismatch being joined turns alignment from guesswork into a measured operation with a defined criterion.",
    },
    {
      question: "When is a tape scale the better choice over splicing?",
      answer: "When the substrate is flat, stable and close to the tape's expansion coefficient, tape avoids joints entirely and is usually simpler and cheaper. Splicing wins where the application needs the grating quality and stability of rigid scales over travel longer than a single piece can serve.",
    },
    {
      question: "Should joint verification be repeated during the machine's life?",
      answer: "Yes, at least alongside scheduled calibration. Fixing stress and substrate behaviour can move joint geometry slowly, and a periodic re-measurement against the acceptance baseline turns any drift into a planned correction instead of an unexplained accuracy loss.",
    },
  ],
  sources: [
    { publisher: "NIST", label: "Length and dimensional metrology reference data", href: "https://www.nist.gov/" },
    { publisher: "BIPM", label: "Metre definition and traceability resources", href: "https://www.bipm.org/" },
    { publisher: "SENFU", label: "Optical encoder product and application documentation", href: "https://senfuprecision.com/optical-encoders/" },
  ],
};
