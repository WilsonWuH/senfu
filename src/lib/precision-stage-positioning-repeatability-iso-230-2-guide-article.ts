import type { EditorialPage } from "@/lib/editorial-content";

export const precisionStagePositioningRepeatabilityIso2302Guide: EditorialPage = {
  eyebrow: "TECHNOLOGY / STAGE METROLOGY PROTOCOLS",
  title: "Stage Positioning Repeatability Testing to ISO 230-2: Running the Protocol So the Numbers Hold Up",
  description:
    "Positioning repeatability is the most quoted and least consistently measured stage specification. This guide walks through the ISO 230-2 test method—targets, approaches, computations and setup conditions—that makes repeatability numbers comparable between suppliers, machines and days.",
  slug: "/technology/precision-stage-positioning-repeatability-iso-230-2-guide/",
  publishedAt: "2026-10-12",
  modifiedAt: "2026-10-12",
  primaryKeyword: "positioning repeatability ISO 230-2",
  secondaryKeywords: [
    "stage repeatability test method",
    "unidirectional repeatability linear stage",
    "bidirectional positioning test",
    "ISO 230-2 laser interferometer",
    "positioning accuracy verification",
    "repeatability vs accuracy stage",
  ],
  featuredImage: {
    src: "/images/technology/precision-stage-positioning-repeatability-iso-230-2-guide/precision-stage-positioning-repeatability-iso-230-2-guide-cover.webp",
    alt: "Laser interferometer optics aligned along a precision linear stage in a metrology laboratory, with environmental compensation unit and data acquisition laptop recording positioning measurements",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "ISO 230-2 defines the accepted method for determining the accuracy and repeatability of positioning on numerically controlled axes. The test moves the axis through a set of target positions distributed along the travel, approaching each target a defined number of times from each direction, and measures actual position with a length-measuring instrument—typically a laser interferometer. From the scatter at each target it computes unidirectional positioning repeatability, bidirectional positioning repeatability, and positioning accuracy or mean positioning deviation, each as a value attributable to the whole axis.",
    "The protocol's credibility lives in its conditions: a thermally stable machine and environment, a stated warm-up state, an agreed number of targets and cycles with targets spread over the travel, correct handling of approach direction, and measurement uncertainty that is small relative to the values claimed. A repeatability figure quoted without these conditions is not comparable across suppliers or across days on the same machine.",
  ],
  challenge:
    "Repeatability is the headline number on most precision stage datasheets, yet it is the specification most often measured inconsistently. One vendor tests five approaches at three targets near mid-travel and reports the best result; another runs the full ISO 230-2 cycle with thermal soak and reports the worst-target value. Purchasing compares the two numbers side by side and the machine with the weaker protocol wins the bid. In-house the same ambiguity repeats: a stage that 'passed repeatability' at acceptance fails to reproduce parts months later because the acceptance test approached every target from one direction in a cold lab, while production approaches targets bidirectionally at operating temperature. Without the ISO 230-2 discipline—defined targets, defined approaches, defined thermal state, defined statistics—repeatability remains a marketing number instead of an engineering one.",
  requirements: [
    { title: "Targets distributed over travel", description: "At least five target positions spread across the full travel, not clustered where the axis behaves best, so the reported value describes the whole axis." },
    { title: "Both approach directions, stated cycles", description: "Each target is approached a defined number of times from each direction—commonly five—from alternating sides, with results kept separate for unidirectional and bidirectional computation." },
    { title: "Thermally defined machine state", description: "Test runs after a specified warm-up, at stable ambient temperature, with the thermal state recorded—because thermal drift masquerades as poor repeatability and inflates the scatter." },
    { title: "Measurement uncertainty justified", description: "The laser interferometer or equivalent instrument is calibrated, environmentally compensated and shown to contribute uncertainty small against the repeatability being claimed." },
  ],
  routes: [
    { label: "Laser interferometer verification", href: "/technology/linear-stage-accuracy-laser-interferometer-verification-guide/", note: "Instrument and setup details" },
    { label: "Reversal error measurement", href: "/technology/linear-stage-reversal-error-measurement-compensation-guide/", note: "The bidirectional offset component" },
    { label: "Error budget allocation", href: "/technology/precision-stage-error-budget-allocation-guide/", note: "Where repeatability fits in the budget" },
    { label: "Thermal drift and warm-up", href: "/technology/precision-stage-thermal-drift-warm-up-stabilization-guide/", note: "The state the test must assume" },
  ],
  evidence: [
    "Test record stating target positions, number of approaches per direction, travel, speed and dwell",
    "Machine and ambient temperature logged before and during the test, with warm-up state stated",
    "Raw position readings at every target and approach, not only the computed summary values",
    "Computed unidirectional and bidirectional repeatability per target and for the whole axis",
    "Calibration certificate and uncertainty statement for the measurement instrument in use",
  ],
  comparisonTable: {
    caption: "What each ISO 230-2 result tells you",
    headers: ["Result", "Definition in the standard's terms", "What it answers", "Common misuse"],
    rows: [
      ["Unidirectional repeatability", "Scatter of approaches to one target from a single direction", "Can the axis return to a position the same way every time?", "Quoted alone for applications that approach from both sides"],
      ["Bidirectional repeatability", "Scatter including approaches from both directions at one target", "What happens in real bidirectional motion profiles?", "Compared against another vendor's unidirectional figure"],
      ["Positioning accuracy (mean deviation)", "Systematic deviation of mean position from target across all targets", "How far off commanded positions the axis lands on average?", "Used as repeatability, or compared without the axis average convention"],
      ["Reversal (backlash-related offset)", "Mean difference between unidirectional means from the two directions", "How much systematic hysteresis the axis carries?", "Hidden inside bidirectional scatter instead of being reported separately"],
    ],
  },
  articleSections: [
    {
      heading: "The test structure: targets, approaches, statistics",
      paragraphs: [
        "The ISO 230-2 cycle is simple to state and demanding to execute honestly. The axis visits each of at least five target positions along its travel, approaching each target a stated number of times from each direction—five is the convention—so the sequence alternates direction as it works through targets. At every arrival, the actual position is recorded by the external measuring instrument. The raw data set is therefore a matrix: targets by approaches by directions.",
        "From each target's directional subset the statistics fall out in a fixed order. For each direction, the mean position and the standard deviation of the approaches give the unidirectional repeatability at that target. The difference between the two directional means at the same target is the systematic reversal offset. Combining both directions yields the bidirectional repeatability at that target, which the standard then expresses as an axis-level value. The mean deviations across all targets give the positioning accuracy of the axis. Every one of these numbers is defined over the whole set of targets; the worst target and the average target are both information, and a report that gives only one of them is making a choice it should disclose.",
        "The reason the standard insists on both directions kept separate is that they answer different engineering questions. A unidirectional repeatability number describes a machine whose process always approaches the work from the same side—useful and real. A bidirectional number describes everything else, and it is always larger, because it includes the reversal offset. Comparing a unidirectional datasheet figure against a competitor's bidirectional figure is the single most common way stage specifications mislead buyers.",
      ],
      links: [
        { label: "Read the reversal error measurement guide", href: "/technology/linear-stage-reversal-error-measurement-compensation-guide/" },
        { label: "Read the laser interferometer verification guide", href: "/technology/linear-stage-accuracy-laser-interferometer-verification-guide/" },
      ],
    },
    {
      heading: "Setup conditions that decide whether the result means anything",
      paragraphs: [
        "The instrument setup comes first. Laser interferometer optics are aligned to the axis of motion with Abbe offset minimized, the wavelength is compensated for air temperature, pressure and humidity through the environmental unit, and the optics warm up with the laser before data collection. The interferometer measures displacement between its reference and moving optics—any rotation, Abbé arm or deadpath error in the setup lands directly in the numbers, so alignment quality is checked before the first cycle rather than discovered in the results.",
        "The thermal state is the second decisive condition. The machine runs its specified warm-up before the test; ambient temperature is recorded and held reasonably stable during the run; the thermal state at test time is written into the record. An uncompensated stage drifting a few microns over a cold-to-warm transition will produce scatter that has nothing to do with its mechanical repeatability, and a stage tested cold then used warm will appear to have 'lost' repeatability it never actually had in that state.",
        "The motion program is the third. Approach speed, dwell before the position reading, and the final creep into target must match what the controller does in production, because repeatability is a property of the machine as commanded, not of the axis in the abstract. A test that creeps in slowly at a fraction of production speed flatters the axis; a dwell too short captures a still-settling position and inflates scatter. Both the values and the conditions that produced them belong in the report.",
      ],
      bullets: [
        "Optics aligned with minimal Abbe offset; deadpath and cosine error corrected",
        "Environmental compensation active; air temperature, pressure and humidity logged",
        "Warm-up completed; thermal state stated in the record",
        "Approach speed, dwell and creep matched to production motion",
      ],
      image: {
        src: "/images/technology/precision-stage-positioning-repeatability-iso-230-2-guide/precision-stage-positioning-repeatability-iso-230-2-guide-detail.webp",
        alt: "Close-up of laser interferometer linear optics mounted on a precision stage carriage with alignment being checked against the axis of travel",
        width: 1600,
        height: 900,
      },
    },
    {
      heading: "Reading the results as an engineering document",
      paragraphs: [
        "A complete ISO 230-2 report is a table, not a sentence. Per-target unidirectional and bidirectional repeatability, the reversal offsets, the mean deviations and the axis-level summary values appear together with the raw scatter they came from. The per-target columns carry the diagnostic value: scatter that grows toward one end of travel suggests mechanical or scale issues specific to that region; a reversal offset that varies across travel points to different systematic contributors than a constant one; a single outlier target usually indicates a local event—a bump in the scale, a guide defect—rather than a globally noisy axis.",
        "Repeatability then has to be placed in the machine's error budget. It is one term among many: Abbe effects, straightness and angular errors, thermal behavior, and the interaction with the process all contribute to the accuracy the workpiece actually sees. A stage with excellent repeatability and an uncompensated Abbe arm still produces inaccurate parts. The budget allocates which term dominates which tolerance, and the ISO 230-2 results are the measured anchor for the repeatability share of that allocation.",
      ],
      links: [
        { label: "Read the error budget allocation guide", href: "/technology/precision-stage-error-budget-allocation-guide/" },
        { label: "Read the Abbe arm design guide", href: "/technology/linear-encoder-abbe-arm-design-minimization-guide/" },
      ],
    },
    {
      heading: "Writing repeatability into acceptance and purchase documents",
      paragraphs: [
        "A purchasing specification that simply says 'repeatability ±X µm' invites the ambiguity this guide exists to close. The document should state the standard and which statistic is meant—unidirectional or bidirectional, per-target worst value or axis-level value—that both approach directions are tested, the number of targets and cycles, the warm-up and thermal conditions, and the instrument with its uncertainty. With those terms fixed, two suppliers' numbers become comparable and the acceptance test becomes a replay of a defined procedure instead of a negotiation.",
        "The same terms carry into routine verification. Periodic abbreviated runs—the same targets, the same directions, a reduced cycle count—trend the axis's repeatability against its acceptance baseline and distinguish mechanical degradation from thermal or process drift. Repeatability tested once at handover and never again is a snapshot; repeatability tested to a fixed protocol over life is a health record, and it is the second kind that keeps production yields explainable.",
      ],
      links: [
        { label: "Read the factory acceptance test guide", href: "/technology/lithography-system-factory-acceptance-test-guide/" },
        { label: "Discuss repeatability requirements", href: "/contact/#application-form" },
      ],
    },
  ],
  midCta: {
    eyebrow: "ACCEPTANCE PLANNING",
    title: "Is your repeatability spec testable as written?",
    description:
      "Send your travel, application profile and tolerance targets—SENFU can help define the ISO 230-2 test parameters, conditions and reporting format for your stage acceptance documents.",
    label: "Request an acceptance plan review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "A repeatability number is only as good as its protocol.",
  conclusion: [
    "ISO 230-2 exists because repeatability is meaningless without its conditions. Targets spread over travel, approaches from both directions kept separate, a thermally defined machine state, and measurement uncertainty small against the claim—these are what turn a datasheet number into an engineering value that can be compared, verified and trended.",
    "Specify the protocol in purchasing, replay it at acceptance, and abbreviate it for periodic health checks. Stages whose repeatability is tested to a fixed protocol deliver numbers that hold up in a bid comparison, in a production dispute and in a service review; stages whose repeatability was measured loosely deliver numbers that fail in exactly those moments.",
  ],
  faq: [
    {
      question: "What is the difference between unidirectional and bidirectional repeatability?",
      answer:
        "Unidirectional repeatability is the scatter of approaches to a target from one direction only; bidirectional repeatability includes approaches from both directions and is always larger because it includes the systematic reversal offset. Applications that always approach from one side can use the unidirectional figure; everything else should be qualified bidirectionally.",
    },
    {
      question: "How many targets and approaches does ISO 230-2 require?",
      answer:
        "The standard's convention uses at least five target positions distributed over the travel, each approached five times from each direction. More targets and cycles improve confidence; fewer than the convention turns the result into a spot check that cannot describe the whole axis.",
    },
    {
      question: "Why does thermal state matter so much in repeatability testing?",
      answer:
        "Thermal drift moves the axis between measurements and its scatter adds directly to the measured dispersion, inflating repeatability for reasons unrelated to mechanics. A stage tested cold and used warm appears to lose performance it never had in that state, which is why warm-up and temperature logging are part of the protocol.",
    },
    {
      question: "Can repeatability be better than accuracy on the same stage?",
      answer:
        "Yes, and it usually is. Repeatability describes scatter around wherever the axis lands; accuracy describes how close that landing point is to the commanded position. A repeatable axis with systematic deviations can be calibrated or compensated to high effective accuracy, which is why the two are specified and tested separately.",
    },
    {
      question: "What instrument should be used for the test?",
      answer:
        "A calibrated laser interferometer with environmental compensation is the standard choice for linear positioning, with alignment that minimizes Abbe offset and corrections for deadpath and cosine error. The instrument's uncertainty must be small relative to the repeatability values claimed, and its calibration must be traceable.",
    },
  ],
  sources: [
    {
      publisher: "ISO",
      label: "ISO 230-2 — Test code for machine tools, Part 2: Determination of accuracy and repeatability of positioning of numerically controlled axes",
      href: "https://www.iso.org/standard/72313.html",
    },
    {
      publisher: "NIST",
      label: "NIST — dimensional metrology and laser interferometry resources",
      href: "https://www.nist.gov/",
    },
    {
      publisher: "ASPE",
      label: "American Society for Precision Engineering — precision metrology resources",
      href: "https://aspe.net/",
    },
    {
      publisher: "Renishaw",
      label: "Renishaw — laser interferometer measurement systems documentation",
      href: "https://www.renishaw.com/",
    },
  ],
};
