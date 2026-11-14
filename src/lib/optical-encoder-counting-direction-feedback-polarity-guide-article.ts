import type { EditorialPage } from "@/lib/editorial-content";

export const opticalEncoderCountingDirectionFeedbackPolarityGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / ENCODER SIGNAL COMMISSIONING",
  title: "Counting Direction and Feedback Sign for Optical Encoders: Getting the Axis Positive the First Time",
  description:
    "A quadrature encoder does not know which way is positive; something in the signal chain defines it. This guide explains where counting direction is set across the scale, readhead, cabling and drive, what a swapped A–B channel or an inverted differential pair does to a closed loop, and how to verify feedback sign with a repeatable commissioning procedure instead of trial and error.",
  slug: "/technology/optical-encoder-counting-direction-feedback-polarity-guide/",
  publishedAt: "2026-11-09",
  modifiedAt: "2026-11-09",
  primaryKeyword: "encoder counting direction",
  secondaryKeywords: [
    "optical encoder counting direction",
    "encoder feedback sign inversion",
    "quadrature A B lead lag direction",
    "encoder scale mounting direction",
    "servo feedback polarity commissioning",
    "incremental encoder direction signal",
  ],
  featuredImage: {
    src: "/images/technology/optical-encoder-counting-direction-feedback-polarity-guide/optical-encoder-counting-direction-feedback-polarity-guide-cover.webp",
    alt: "Commissioning engineer verifying encoder counting direction on a precision linear stage with a jog pendant, controller display and oscilloscope showing quadrature signals",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "An optical encoder produces a relative motion signal: quadrature channels A and B change state as the scale moves, and the direction of travel is encoded only in the phase relationship between them—A leading B means one direction, B leading A means the other. Which physical direction the controller labels 'positive' is a convention assembled from several independent choices: which face of the scale the readhead views, how A and B are wired to the receiver, whether the differential pair is crossed anywhere in the harness, and how the drive maps motor phase to commanded direction. Any one of these choices, made differently from the documentation's assumption, inverts the count.",
    "An inverted feedback sign is not a cosmetic labeling problem. In a closed velocity or position loop it turns negative feedback into positive feedback: the drive pushes the axis in the direction the error appears to demand, the position runs away from the command, and the loop either trips a following error alarm immediately or, worse, oscillates on a limit that looks like a tuning problem. The fix is procedural, not iterative—establish the sign convention with the loop disabled, jog a small positive increment in open-loop or torque mode, and confirm the counted position increases. Record the convention in the axis file so every later service, swap or retrofit inherits a documented answer.",
  ],
  challenge:
    "Counting direction failures are rare enough that teams forget them and common enough that every commissioning group meets them eventually. The symptoms are dramatic and misleading: a jog command that moves the axis the wrong way while the DRO counts the wrong way too, a velocity loop that runs away the instant it is enabled, a homing cycle that captures the reference while moving in the wrong direction, or a dual-drive gantry whose two axes fight each other because their sign conventions disagree. Each of these looks like a wiring fault, a drive configuration error or a tuning failure, and each can be 'fixed' by compensating changes in three or four other places—until the next encoder swap silently reintroduces the original convention and the machine misbehaves again. Because the direction decision is spread across the scale mounting, the readhead, the intermediate electronics, the cabling and the drive firmware, nobody owns it, and it rarely appears on a commissioning checklist."
  ,
  requirements: [
    { title: "A documented sign convention for the machine", description: "A written statement of which physical direction is positive on each axis, which channel is A, and whether feedback is negated in the drive—the reference every other decision is checked against." },
    { title: "Loop-disabled jog capability", description: "A way to move the axis with the position loop open—torque or velocity mode jog—so feedback direction is verified before the drive can fight the command." },
    { title: "Signal-level visibility", description: "Oscilloscope or diagnostic access to A, B and reference channels to observe lead–lag relationships directly, not only the controller's interpretation of them." },
    { title: "Verification at the signal level and the counted level", description: "Confirm quadrature phase order with the scope and confirm the counted position increments positively with a positive jog—two independent observations that must agree." },
  ],
  routes: [
    { label: "Quadrature and Lissajous signal tuning", href: "/technology/encoder-quadrature-lissajous-signal-tuning/", note: "Phase relationships that encode direction" },
    { label: "Incremental ABZ signal troubleshooting", href: "/technology/incremental-encoder-abz-signal-troubleshooting/", note: "Diagnosing channel-level faults" },
    { label: "Index pulse homing and reference", href: "/technology/optical-encoder-index-pulse-homing-reference-guide/", note: "Direction interacts with homing strategy" },
    { label: "Precision motion application", href: "/applications/precision-motion/", note: "Feedback selection in the complete axis" },
  ],
  evidence: [
    "Machine sign-convention sheet: positive direction per axis, A/B channel assignment, drive feedback-negation setting",
    "Scope capture of A and B during a positive-direction jog showing the documented lead–lag relationship",
    "Controller position readout before and after the positive jog showing the counted increment matches the sign convention",
    "Homing verification record: approach direction, latch edge and captured reference consistent with the convention sheet",
  ],
  comparisonTable: {
    caption: "Feedback sign conditions and their signatures on a quadrature axis",
    headers: ["Condition", "Where the inversion lives", "Observed behavior", "Correction"],
    rows: [
      ["Correct per convention", "—", "Positive jog moves the axis positive and counts positive; quadrature lead–lag matches the convention sheet; loop stable on enable", "Record the convention and move on to tuning"],
      ["A and B channels swapped", "Readhead wiring, connector pinout or receiver input mapping", "Axis moves correctly under open-loop jog but the count runs opposite; closed loop runs away on enable", "Swap A and B at the receiver, or invert counting direction in the drive—once, and document it"],
      ["Scale read from the opposite face", "Readhead mounted to view the scale from its reverse side", "Lead–lag relationship reversed relative to the mechanical direction; same symptom as a channel swap but caused by geometry", "Re-mount per the readhead's orientation marking, or flip the configured direction and record why"],
      ["Differential pair crossed in the harness", "Pair landings or terminal blocks between readhead and drive", "One channel inverted relative to the other; count runs or quadrature degenerates depending on which pair is crossed", "Correct the pair landing; verify with a scope before re-enabling the loop"],
      ["Feedback negated in the drive only", "Drive configuration (sign/polarity parameter)", "Open-loop jog and count agree, but the closed loop is positive feedback and runs away or oscillates on enable", "Set the negation so the loop is negative feedback; never compensate with command sign instead"],
    ],
  },
  articleSections: [
    {
      heading: "Where counting direction is actually decided",
      paragraphs: [
        "Quadrature encoding is elegant precisely because it contains no absolute direction information: two channels 90 electrical degrees apart repeat their state sequence as the scale moves, and only the order of the sequence—A leading B or B leading A—distinguishes one direction from the other. The controller's counter interprets that order according to an assumption about the signal chain. The chain, however, contains several places where the order can be established or reversed: which side of the scale the readhead views (many readheads read a transmission or reflection geometry that flips the sequence when mounted on the opposite face), which conductor of each differential pair lands on which receiver input, whether any intermediate electronics pass channels through or swap them, and how the drive's counting logic maps the channel pair to a signed increment.",
        "Each of these is individually documented—by the scale manufacturer, the readhead datasheet, the interconnect drawing and the drive manual respectively—but the composed result belongs to nobody. Two correctly documented components can still combine into an inverted axis when the readhead is mounted on the opposite face from the datasheet's example, which is a legitimate and often necessary mechanical choice. This is why the direction question cannot be answered from datasheets alone; it must be verified on the assembled axis and then written down as the machine's convention.",
        "The signal-level view makes the convention concrete. On a scope, a positive jog should show channel A rising before channel B in the documented direction—exactly the phase relationship the Lissajous tuning procedure uses when it verifies quadrature health. Direction and signal quality are read from the same two traces, which is why commissioning procedures check them together.",
      ],
      links: [
        { label: "Read the quadrature and Lissajous signal tuning guide", href: "/technology/encoder-quadrature-lissajous-signal-tuning/" },
        { label: "Explore the precision motion application page", href: "/applications/precision-motion/" },
      ],
    },
    {
      heading: "The four ways a sign gets inverted",
      paragraphs: [
        "Channel swap is the classic: A and B exchange identities somewhere between the readhead and the counter. The count then runs opposite to motion, and the tell-tale is that the axis behaves perfectly under open-loop jog—moving the commanded direction—while the position display runs the wrong way. This inversion can be a pinout error at a connector, a mislabeled terminal landing, or an intermediate module that passes channels through in the wrong order. It is also the cheapest to correct, either at the wiring or with the drive's single direction-configuration parameter.",
        "Geometric inversion is subtler: the readhead is mounted to view the scale from the opposite side, so the optics legitimately produce the mirrored sequence. Nothing is wrong at the signal level—the Lissajous circle is healthy—and nothing is wrong at the wiring level, yet the count is inverted relative to the mechanical convention. Installations that flip readheads for envelope or cable-exit reasons hit this routinely, and the correction is a deliberate configuration decision recorded in the axis file, not a rewiring task.",
        "The remaining two inversions are electrical and logical. A crossed differential pair inverts one channel alone, which corrupts quadrature rather than merely reversing it—the axis counts garbage or not at all, and the scope shows the phase relationship destroyed rather than mirrored. And a negated feedback sign in the drive parameter set inverts the loop, not the count: jog and DRO agree with each other and both disagree with the loop's expectation, which is the configuration that produces the most violent symptom—a runaway on enable. Distinguishing these four cases at the signal level takes minutes; distinguishing them by tuning symptoms takes days.",
      ],
      links: [
        { label: "Read the incremental ABZ signal troubleshooting guide", href: "/technology/incremental-encoder-abz-signal-troubleshooting/" },
        { label: "Read the EMC cable routing and grounding guide", href: "/technology/encoder-emc-cable-routing-grounding-guide/" },
      ],
    },
    {
      heading: "A commissioning procedure that settles the sign once",
      paragraphs: [
        "The verification sequence is short and must be done with the position loop disabled. First, establish the mechanical convention: choose and document which physical direction is positive on the axis. Second, jog a small increment in torque or velocity mode in that direction while watching the controller's counted position: it must increase. Third, confirm at the signal level that A leads B in the documented direction, so the convention is anchored in the wiring, not just the counter. Fourth, only after jog and count agree, configure the drive's feedback polarity so the closed loop is negative feedback, and enable the loop at low gain to confirm it commands against, not with, any disturbance.",
        "Homing belongs in the same verification. The index or reference mark is latched at a specific counted position while the axis moves in a specific direction; if the direction convention changes later, the homing approach direction, the latch edge and the captured datum all shift meaning with it. Re-running the homing cycle and confirming the captured reference against a mechanical datum after any sign-related change is part of the procedure, not an optional extra.",
        "One discipline makes the procedure durable: the convention sheet. Positive direction per axis, A/B channel assignment, any deliberate geometric inversion, the drive's negation parameter and the homing approach direction—recorded in the axis file next to the alignment measurements. Every later encoder swap, readhead replacement or drive upgrade is then a five-minute check against the sheet instead of a rediscovery of the same runaway.",
      ],
      links: [
        { label: "Read the index pulse homing and reference guide", href: "/technology/optical-encoder-index-pulse-homing-reference-guide/" },
        { label: "Read the installation alignment errors guide", href: "/technology/linear-encoder-installation-alignment-errors/" },
      ],
    },
    {
      heading: "What a wrong sign does inside the closed loop",
      paragraphs: [
        "A servo loop assumes negative feedback: the drive commands in the direction that reduces the measured error. With the feedback sign inverted, the measured error is mirrored, so the drive commands exactly the wrong way—positive feedback. At low gains the axis may merely run to a limit or trip a following-error window; at working gains it oscillates or runs away until a limit switch or drive protection intervenes. The dangerous habit this creates is compensating in the wrong place: negating the command, reversing the motor phasing or flipping a second sign somewhere else can make the loop superficially stable while the count, the homing behavior and any downstream metrology all remain mirrored relative to the mechanical reality.",
        "Layered corrections of this kind also contaminate tuning. Bandwidth, inertia ratio and feedforward gains are all defined against the assumption of an honest feedback sign; a compensated-sign axis may tune acceptably in one direction and behave differently in the other, and direction-dependent asymmetries then get chased into gain tables where they do not belong. The servo tuning work that follows a clean sign verification is shorter and its results transfer between axes; tuning performed on top of an unverified sign encodes the confusion permanently.",
        "Multi-axis machines raise the stakes. On a dual-drive gantry, two axes with disagreeing sign conventions fight each other mechanically the moment the loop closes, with the master commanding one way and the mirrored slave following the other. Consistency across axes—same convention sheet logic applied everywhere—is what makes synchronized motion even expressible in the controller.",
      ],
      links: [
        { label: "Read the velocity feedback and servo bandwidth guide", href: "/technology/linear-encoder-velocity-feedback-servo-bandwidth/" },
        { label: "Read the linear motor stage feedback tuning guide", href: "/technology/linear-motor-stage-encoder-feedback-tuning-guide/" },
      ],
    },
    {
      heading: "Conventions, retrofits and the axis file",
      paragraphs: [
        "Retrofit and service are where undocumented conventions extract their cost. Replacing a readhead with a unit from the opposite mounting orientation, swapping a drive for a different brand whose polarity parameter defaults the other way, or extending a cable through an intermediate junction can each reintroduce an inversion into a machine that ran correctly for years. The axis file with its convention sheet converts each of these events into a comparison against a documented reference—the same discipline that protects alignment and tensioning records on precision axes.",
        "The convention decision also interacts with adjacent choices that deserve a glance during the same verification window: the counting direction assumed by the machine's coordinate system, the sign conventions of rotary axes and their angular feedback, and any direction-dependent compensation tables such as reversal error maps. A sign verified and documented once, at the signal level and the counted level, is the foundation every one of those layers silently relies on.",
      ],
      links: [
        { label: "Read the retrofit of legacy stages guide", href: "/technology/optical-encoder-retrofit-legacy-stage-guide/" },
        { label: "Explore the precision motion application page", href: "/applications/precision-motion/" },
      ],
    },
  ],
  midCta: {
    eyebrow: "FEEDBACK COMMISSIONING",
    title: "Commissioning a new axis—or recovering one that runs away on enable?",
    description:
      "Send your drive platform, encoder interface and machine layout—SENFU can help define the sign convention, the verification sequence and the documentation that get the axis positive the first time and keep it that way through every service event.",
    label: "Discuss a feedback commissioning plan",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Direction is a convention; a convention is only useful when it is written down.",
  conclusion: [
    "A quadrature encoder reports motion faithfully; whether that motion is positive is a decision the surrounding system makes in several independent places. Because the decision is spread across scale geometry, readhead orientation, cabling and drive configuration, it fails quietly and expensively—inverted counts on open-loop jogs, positive-feedback runaways on enable, homing cycles that latch the wrong meaning, and gantries whose axes fight each other. None of these are encoder faults, and none can be tuned away.",
    "Treat feedback sign as a verified, documented property of the axis: establish the mechanical convention, confirm the counted increment with the loop disabled, anchor the convention at the signal level, configure the drive for negative feedback, and record every element in the axis file. Machines commissioned this way make encoder swaps and drive upgrades routine; machines commissioned by trial and error keep a hidden sign inversion in reserve for the next person who opens the cabinet.",
  ],
  faq: [
    {
      question: "How do I tell an A–B channel swap from a scale read from the opposite side?",
      answer:
        "Both invert the counted direction, so the symptoms match. The difference is at the signal level: a channel swap is a wiring event and the scope shows the leads and lags exchanged relative to the documentation, while a geometric inversion is a mounting event and the signals are internally consistent—just mirrored relative to the mechanical direction. Check the readhead's orientation marking and the wiring pinout; whichever differs from the convention sheet is your inversion point.",
    },
    {
      question: "Should I fix direction in the wiring or with a drive parameter?",
      answer:
        "Either is legitimate if it is deliberate and documented. Correcting the wiring keeps the signal chain aligned with the datasheet's example and is preferable when the inversion is an assembly error; using the drive's direction parameter is preferable when the geometric mounting genuinely requires the mirrored sequence. What is not acceptable is fixing it in both places, or leaving the choice undocumented so the next service event double-corrects it.",
    },
    {
      question: "Why does my axis run away the moment the velocity loop is enabled, even though the jog and position display agree?",
      answer:
        "Jog and count agreeing means the counting chain is consistent; the runaway means the loop itself sees positive feedback. This is the signature of a negated feedback polarity in the drive: the counted position and the loop's expectation differ by a sign. Set the drive's feedback polarity so the loop commands against error, then re-enable at low gain to confirm stable negative feedback.",
    },
    {
      question: "Does counting direction matter for an absolute encoder?",
      answer:
        "Yes, though differently. An absolute encoder reports a position value rather than counting increments, so there is no lead–lag to swap, but the reported value's direction convention relative to the mechanical axis still matters for coordinate systems, soft limits and homing direction. The same verification—positive jog, expected reported change, documented convention—applies, with the drive's absolute-protocol direction configuration in place of the counter logic.",
    },
    {
      question: "Can a wrong counting direction damage the machine?",
      answer:
        "It can. A positive-feedback loop can drive the axis into a mechanical limit or hard stop at speed, and a dual-drive gantry with disagreeing conventions can load its structure as the axes fight. Even without damage, the diagnostic cost is real: direction faults masquerade as tuning, wiring and homing problems, and each wrong hypothesis consumes commissioning time.",
    },
    {
      question: "What should be in the sign-convention record for an axis?",
      answer:
        "At minimum: which physical direction is positive, the A/B channel assignment at the receiver, any deliberate geometric inversion from readhead orientation, the drive's feedback-negation setting, the homing approach direction and latch edge, and the date the convention was verified. The record belongs in the axis file with the alignment and signal-quality measurements.",
    },
  ],
  sources: [
    {
      publisher: "NIST",
      label: "NIST — precision engineering and dimensional metrology reference resources",
      href: "https://www.nist.gov/",
    },
    {
      publisher: "ISO",
      label: "ISO 230 series — test code for machine tools, positioning and axis conventions",
      href: "https://www.iso.org/",
    },
    {
      publisher: "ASPE",
      label: "American Society for Precision Engineering — precision machine design and motion control resources",
      href: "https://aspe.net/",
    },
    {
      publisher: "SPIE",
      label: "SPIE — publications on precision instrumentation and motion systems",
      href: "https://spie.org/",
    },
  ],
};
