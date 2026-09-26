import type { EditorialPage } from "@/lib/editorial-content";

export const opticalEncoderReferenceMarkDatumStrategiesGuideArticle: EditorialPage = {
  eyebrow: "TECHNOLOGY / ENCODER REFERENCING",
  title: "Optical Encoder Reference Mark and Datum Strategies for Reliable Axis Homing",
  description: "Every incremental axis needs a defined datum before motion is productive. This guide compares single reference marks, distance-coded scales and multi-reference schemes, and shows how to specify a homing strategy that survives speed, travel direction and partial travel loss.",
  slug: "/technology/optical-encoder-reference-mark-datum-strategies-guide/",
  publishedAt: "2026-09-27",
  modifiedAt: "2026-09-27",
  primaryKeyword: "optical encoder reference mark datum strategy",
  secondaryKeywords: [
    "encoder reference mark",
    "distance-coded reference marks",
    "incremental encoder homing",
    "axis datum repeatability",
    "reference mark scanning quality",
    "homing speed repeatability",
  ],
  featuredImage: {
    src: "/images/technology/optical-encoder-reference-mark-datum-strategies-guide/optical-encoder-reference-mark-datum-strategies-guide-cover.webp",
    alt: "Close-up of an optical linear encoder readhead aligned above a glass scale showing a group of reference marks beside the incremental grating track",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "An incremental encoder reports position changes, so the axis must find a defined datum before its position numbers mean anything. The datum strategy is built into the scale: a single reference mark gives one repeatable home per travel, distance-coded marks let the controller recover the datum from any position after power-up with a short traverse, and absolute position codes remove the homing traverse entirely. Each option trades traverse time, mechanical margin and cost differently.",
    "Specify the strategy as part of the axis design, not as wiring detail added later. Decide where the home switch or reference zone sits relative to travel limits and work area, at which speed homing is repeatable, what happens when the axis stops inside the reference zone after a power loss, and how the datum repeatability will be verified at acceptance.and a reference mark placed inside the work area converts a good encoder into a recurring production fault.",
  ],
  challenge: "Reference marks are the least examined part of an encoder specification, yet the datum they provide anchors every measured or machined feature the machine will ever produce. Teams routinely select resolution and accuracy in detail and then leave homing to a default limit-switch routine, discovering later that the process zero drifts by micrometres between shifts, that homing from the far end of travel lands on a different position than homing from mid-travel, or that a crash recovery cannot re-establish the datum because the axis sits on the one reference mark the scale has. The fix is to treat referencing as a first-class requirement: choose the mark scheme deliberately, place it deliberately and verify it like any other axis parameter.",
  requirements: [
    { title: "Datum repeatability at homing speed", description: "Require the reference mark repeatability figure stated for the actual approach speed and direction, not only under laboratory conditions." },
    { title: "Recovery after power loss", description: "Define how the axis re-establishes position after an uncommanded stop, including behaviour when it halts inside the reference zone or between marks." },
    { title: "Placement and mechanics", description: "Locate the reference zone away from travel limits, cable flex extremes and the working volume, with approach clearance specified on the drawing." },
    { title: "Verification method", description: "Agree an acceptance test that homes the axis repeatedly from different starting points and records datum scatter against the stated figure." },
  ],
  routes: [
    { label: "Optical encoder range", href: "/optical-encoders/", note: "Incremental and absolute configurations" },
    { label: "Absolute vs incremental selection", href: "/technology/optical-encoder-incremental-vs-absolute-selection-guide/", note: "When to remove homing entirely" },
    { label: "Absolute startup recovery", href: "/technology/absolute-encoder-startup-recovery/", note: "Datum handling after power loss" },
    { label: "Datum strategy review", href: "/contact/#application-form", note: "Send travel, cycle and recovery requirements" },
  ],
  evidence: [
    "Reference mark repeatability at the declared homing speed, with approach-direction dependence if any",
    "Scale reference scheme: single mark, distance-coded series or absolute code, with recovery traverse requirements",
    "Behaviour specification for power loss inside the reference zone and between marks",
    "Electrical interface details: reference gating window, enable conditions and controller-side capture method",
    "Acceptance test procedure and recorded datum scatter from repeated homing at different starting positions",
  ],
  comparisonTable: {
    caption: "Reference mark schemes for incremental optical scales",
    headers: ["Decision factor", "Single reference mark", "Distance-coded reference marks", "Absolute position code"],
    rows: [
      ["Homing traverse", "Full traverse to the mark on every power-up", "Short traverse to the next mark, typically within a defined spacing window", "None; position available at switch-on"],
      ["Recovery after uncommanded stop", "Depends on whether motion continued past the mark", "Datum recoverable from any position by a short scan", "Position retained through power loss"],
      ["Repeatability behaviour", "Very good when approach speed and direction are fixed", "Good; each mark equally qualified, averaging options exist", "Independent of homing; set by code quality"],
      ["Work-area impact", "Mark must sit outside the working volume", "Marks distributed along travel, no single sensitive spot", "No reference zone required"],
      ["Failure exposure", "One mark; contamination there blocks referencing", "Robust to local damage; other marks remain usable", "No traverse, so no homing fault mode"],
      ["Typical use", "Compact stages with short, predictable homing cycles", "Long-travel machines and axes with random stop positions", "Machines where downtime or recovery cost dominates"],
    ],
  },
  articleSections: [
    {
      heading: "Why the datum anchors everything downstream",
      paragraphs: [
        "An incremental scale reports motion, not location. Until the axis references, every commanded position is a guess dressed in micrometres. Tool offsets, pallet origins, measurement baselines and process zero all inherit the quality of the homing event, so a reference mark that repeates to a few counts on one approach and a different few counts on another injects scatter into every downstream number.",
        "This is why datum strategy belongs in the axis specification. The properties that matter are not exotic: repeatability of the mark at the chosen approach speed, independence from approach direction or consistency when direction is fixed, and behaviour under the awkward cases that real machines encounter, such as stopping inside the reference window or coasting past it after a fault.",
      ],
      links: [
        { label: "Review the optical encoder family", href: "/optical-encoders/" },
        { label: "Read the signal quality troubleshooting guide", href: "/technology/linear-encoder-signal-quality-distortion-troubleshooting-guide/" },
      ],
    },
    {
      heading: "Single reference marks: simple and position-sensitive",
      paragraphs: [
        "The classic scheme places one reference mark beside the incremental track. The controller counts at high speed toward the mark, slows, re-approaches at low speed and latches position on the mark edge. Because the same mark is used every time, the mechanical quality of that single location defines the datum: mark edge quality, scanning quality at the approach speed and the electronics gating window all add their scatter.",
        "The approach profile dominates the result. Homing at production speed onto a mark specified for a slow approach produces spread that grows with velocity, and approaching from opposite directions can land on different sides of the gating window. The remaining structural weakness is placement. A single mark concentrates all referencing capability at one location, so damage, contamination or a mechanical obstruction there disables the datum for the whole axis, and the mark must sit outside the work area yet remain reachable before any limit is hit.",
      ],
      bullets: [
        "Simplest electronics and lowest scale cost",
        "Repeatability depends on fixed approach speed and direction",
        "One mark means one sensitive location for contamination and damage",
        "Placement must clear travel limits, cable extremes and the work area",
      ],
    },
    {
      heading: "Distance-coded marks: datum from anywhere",
      paragraphs: [
        "Distance-coded scales carry a series of reference marks whose spacing follows a known mathematical sequence. After power-up, the axis moves until the next mark is scanned; because the spacing pattern is unique along the scale, a single mark observation, or a short sequence of marks, is enough for the controller to compute absolute position within one code period. The homing traverse shrinks from full travel to the distance to the next mark, and after an uncommanded stop anywhere on the scale, recovery needs only the same short scan.",
        "The scheme removes the single-point failure of the lone mark and makes long-travel machines far more tolerant of random stop positions, which is why it is common on long beds, gantries and measuring machines. The specification points shift accordingly: confirm the mark spacing, the maximum traverse needed to find the next mark, the minimum and maximum speed the scanning accepts during the recovery move, and whether the controller requires motion in a defined direction to decode.",
      ],
      image: {
        src: "/images/technology/optical-encoder-reference-mark-datum-strategies-guide/optical-encoder-reference-mark-datum-strategies-guide-detail.webp",
        alt: "Engineer verifying distance-coded reference marks on a long glass scale with a microscope while the axis controller displays the recovered datum position",
        width: 1600,
        height: 900,
      },
    },
    {
      heading: "Absolute codes and when they replace referencing",
      paragraphs: [
        "An absolute encoder answers the datum question at the source: position is read directly from the code at switch-on, no traverse needed. For machines where downtime is expensive, where axes stop at arbitrary positions or where a homing traverse is mechanically awkward, absolute feedback is less an upgrade than a different contract with failure modes. There is no homing to be non-repeatable, and recovery after power loss is immediate.",
        "The choice is economic as much as technical. Incremental scales with distance-coded marks deliver most of the recovery benefit where homing time is tolerable; absolute code earns its premium where every restart counts or where the axis cannot safely traverse on power-up.",
      ],
      links: [
        { label: "Read the incremental vs absolute selection guide", href: "/technology/optical-encoder-incremental-vs-absolute-selection-guide/" },
        { label: "Read the absolute startup recovery guide", href: "/technology/absolute-encoder-startup-recovery/" },
      ],
    },
    {
      heading: "Specifying and verifying the homing routine",
      paragraphs: [
        "Whatever the mark scheme, the controller routine carries half the responsibility. Fix the approach speed, the direction and the final latching speed as parameters, not as whatever the commissioning engineer chose that day. Gate the reference capture against the enable state and the incremental signal quality so a degraded scan cannot produce a false datum, and log every homing event with its starting position and resulting datum so drift becomes visible in maintenance data instead of in process scrap.",
        "Verification closes the loop. Home the axis twenty or thirty times from spread-out starting positions at production conditions, record the datum scatter and compare it against the encoder datasheet figure. A datum strategy that passes those checks is one the machine can rely on for its working life; one that was never tested is a fault waiting for the worst possible shift.",
      ],
      bullets: [
        "Approach speed, direction and latching speed fixed as parameters",
        "Reference capture gated on signal quality and enable state",
        "Homing events logged with start position and resulting datum",
        "Acceptance test: repeated homing from varied positions plus power-loss recovery",
      ],
      links: [
        { label: "Plan a datum strategy review", href: "/contact/#application-form" },
        { label: "Read the incoming acceptance test guide", href: "/technology/optical-encoder-incoming-acceptance-test-guide/" },
      ],
    },
  ],
  conclusion: [
    "The reference mark is small, but the datum it provides defines every position the machine will report. Choose the mark scheme deliberately against travel, stop behaviour and recovery needs, place the reference zone with the same care as the travel limits, fix the homing routine as a specified parameter set, and verify datum repeatability at acceptance rather than trusting the datasheet in isolation. Axes referenced this way start every cycle from a position the process can trust.",
  ],
  faq: [
    {
      question: "What is a distance-coded reference mark?",
      answer: "A reference scheme where many marks are distributed along the scale with a defined, non-uniform spacing sequence. Because the pattern is unique along the travel, the controller can compute absolute position after scanning the next mark, requiring only a short traverse instead of a full trip to a single home position.",
    },
    {
      question: "Why does homing repeatability depend on approach speed?",
      answer: "The reference signal has a finite width and the electronics gate it with a counting window. At higher approach speed the axis travels further inside that window between samples, so the latched position scatters more. A slow, fixed-speed final approach keeps the scatter within the datasheet figure.",
    },
    {
      question: "Can homing direction change the datum position?",
      answer: "Yes. Approaching from opposite sides can latch on different edges of the gating window, producing a small offset. Machines either always home in the same direction or verify that both directions give the same position within tolerance during commissioning.",
    },
    {
      question: "What happens if the axis stops on the reference mark after a power loss?",
      answer: "With a single mark, the routine should detect the mark and latch directly without a traverse; this case belongs in the specification. With distance-coded marks a short scan resolves it, and with absolute feedback the position is simply read. Undefined behaviour in this case is a specification gap, not a rare event.",
    },
    {
      question: "Is an absolute encoder always the better choice?",
      answer: "Not always. Absolute feedback removes homing entirely and suits high-downtime-cost machines, but incremental scales with well-specified reference marks meet many requirements at lower cost. The decision should weigh restart frequency, recovery traverse feasibility and the cost of the restart, not fashion.",
    },
  ],
  sources: [
    { publisher: "NIST", label: "Precision engineering and dimensional metrology resources", href: "https://www.nist.gov/" },
    { publisher: "PTB", label: "Dimensional metrology guidance", href: "https://www.ptb.de/" },
    { publisher: "SENFU", label: "Optical encoder product and application documentation", href: "https://senfuprecision.com/optical-encoders/" },
  ],
};
