import type { EditorialPage } from "@/lib/editorial-content";

export const opticalEncoderHighSpeedCountingFrequencyLimitsGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / HIGH-SPEED ENCODER FEEDBACK",
  title: "Optical Encoder High-Speed Counting: Output Frequency Limits and Bandwidth Constraints Explained",
  description:
    "High-speed counting pushes an optical encoder against several different limits at once: mechanical velocity, interpolation bandwidth, the electrical path and the controller counter. This guide shows how to build the frequency budget and verify it on the real axis.",
  slug: "/technology/optical-encoder-high-speed-counting-frequency-limits-guide/",
  publishedAt: "2026-09-29",
  modifiedAt: "2026-09-29",
  primaryKeyword: "optical encoder high speed counting frequency limits",
  secondaryKeywords: [
    "encoder maximum input frequency",
    "incremental encoder output frequency calculation",
    "interpolation bandwidth speed versus resolution",
    "encoder counting bandwidth",
    "controller counter input frequency limit",
    "encoder signal integrity at high speed",
  ],
  featuredImage: {
    src: "/images/technology/optical-encoder-high-speed-counting-frequency-limits-guide/optical-encoder-high-speed-counting-frequency-limits-guide-cover.webp",
    alt: "Oscilloscope displaying high-frequency incremental encoder signals beside a precision motion stage in a laboratory",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "An optical encoder's usable counting frequency is set by the whole chain between grating and counter, and no single datasheet number covers it. The output frequency of an incremental channel follows from geometry: scale pitch divided by velocity. A 20 µm pitch scale moving at 2 m/s produces a 100 kHz fundamental, and ×100 interpolation turns that into a 10 MHz edge stream. Each stage in the chain can become the binding limit: the readhead's mechanical velocity rating, the maximum input frequency of the interpolation electronics, the output driver and cable, and finally the controller counter input with its filter settings.",
    "Selection therefore works as a frequency budget rather than a headline figure. Calculate the edge frequency at the axis's worst-case velocity, read the interpolation speed-versus-resolution curve instead of the quoted resolution alone, respect the differential interface and cable length limits, and confirm the counter input toggles reliably at that frequency with the configured glitch filter. Then verify on the real axis by comparing counted displacement against known travel at full speed, because missed counts at velocity rarely appear in slow bench tests.",
  ],
  challenge:
    "High-speed counting failures are deceptive because the system usually works perfectly at low speed. The integrator sees clean counts during commissioning, then a production axis running at full velocity reports position jumps, lost pulses or occasional reference faults that cannot be reproduced when the machine is stopped. The cause is almost always a frequency limit that nobody budgeted: an interpolator running past its maximum input frequency, an unterminated cable whose edges have degraded into noise, or a counter input whose digital filter silently eats valid pulses. Datasheets contribute to the confusion by quoting resolution, maximum mechanical speed and interface frequency in three different places, each conditional on assumptions the reader rarely sees. The result is equipment selected on compatible numbers that still fails as a system. The fix is to treat counting frequency as a budget computed from the axis's own velocity profile, checked stage by stage, and proven with a counting test at full speed before the machine ships.",
  requirements: [
    { title: "Computed edge frequency", description: "The worst-case output frequency derived from scale pitch or line count and the axis maximum velocity, documented as a design input." },
    { title: "Interpolation curve, not headline resolution", description: "The supplier's speed-versus-resolution data confirming the required interpolation factor holds at the working velocity." },
    { title: "Electrical path statement", description: "Output interface type, cable length limits at frequency, termination recommendation and receiver input specification." },
    { title: "Full-speed counting evidence", description: "A counting verification at maximum velocity comparing encoder counts against known displacement, with the pass margin recorded." },
  ],
  comparisonTable: {
    caption: "Where the frequency limit sits in the counting chain",
    headers: ["Limit point", "What sets it", "Typical symptom when exceeded", "How to verify"],
    rows: [
      ["Readhead mechanics", "Maximum velocity rating of the optical head and scale, set by scan frequency and mechanical limits", "Signal amplitude collapse or physical damage beyond rated speed", "Datasheet velocity rating; check against axis velocity profile including overshoot"],
      ["Interpolation electronics", "Maximum input frequency of the analog-to-digital and interpolation pipeline", "Resolution silently falls back toward the raw pitch, or periodic position jumps", "Supplier speed-versus-resolution curve for the configured interpolation factor"],
      ["Output driver and cable", "Driver edge rates, cable capacitance and termination quality", "Rounded edges, reflected glitches, counts that drift with cable length or temperature", "Oscilloscope at the receiver end at working frequency; differential line check"],
      ["Controller counter input", "Counter maximum toggle frequency and digital filter bandwidth", "Valid pulses rejected by the glitch filter; counts lag commanded motion", "Counter input specification with the actual filter setting; full-speed counting test"],
    ],
  },
  articleSections: [
    {
      heading: "The frequency budget starts with pitch and velocity",
      paragraphs: [
        "Everything begins with one calculation. For a linear scale, the fundamental signal frequency equals velocity divided by pitch: a 20 µm grating at 2 m/s yields 100 kHz per analog channel. For a rotary ring, line count times revolutions per second gives the same figure. Interpolation multiplies this: ×100 turns 100 kHz into a 10 MHz quadrature pulse train, and a ×4 counter decode raises the edge rate again. The axis's worst case is not its nominal cruise speed but its peak velocity including overshoot, reversal transients and fault stops, so the budget must use the profile the drive can actually produce.",
        "Working the number through the chain stage by stage is what makes high-speed counting predictable. The readhead must be rated for the mechanical speed; the interpolator must accept the fundamental frequency at the wanted factor; the electrical path must deliver edges the receiver can interpret; and the counter must toggle at the resulting rate with its filters configured. A design that only checks one of these four stages has, at best, a quarter of the budget verified.",
      ],
      links: [
        { label: "Review the optical encoder family", href: "/optical-encoders/" },
        { label: "Read the resolution vs accuracy guide", href: "/technology/optical-encoder-resolution-vs-accuracy-tradeoffs/" },
      ],
    },
    {
      heading: "Interpolation bandwidth: why resolution falls as speed rises",
      paragraphs: [
        "The interpolation factor that delivers nanometre resolution at low speed cannot always be sustained at high speed. Interpolation electronics need processing time per cycle, so suppliers specify a maximum input frequency beyond which the pipeline either limits the factor or falls back toward the raw scale period. This is why the honest datasheet figure is a curve: resolution as a function of velocity for each interpolation setting. A stage that needs 1 nm resolution for metrology moves but cruises at 1 m/s will typically run two interpolation settings, and the controller must accept the resolution change as the axis accelerates.",
        "Two consequences deserve attention. First, the step size the controller sees changes with velocity, which affects gain scheduling and any compensation that assumes a fixed resolution. Second, exceeding the interpolation input limit does not usually stop the counts; it degrades them, introducing periodic error or jitter exactly at the speeds where the axis spends its production life. The budget should therefore confirm the interpolation setting at the axis peak velocity, not merely at commissioning speed.",
      ],
      links: [
        { label: "Read the subdivision error guide", href: "/technology/encoder-subdivision-error-position-jitter/" },
        { label: "Read the velocity feedback and servo bandwidth guide", href: "/technology/linear-encoder-velocity-feedback-servo-bandwidth/" },
      ],
    },
    {
      heading: "The electrical path: drivers, cable and receiver",
      paragraphs: [
        "A pulse that leaves the readhead perfectly formed can arrive unusable. Square-wave outputs depend on driver edge rates, cable capacitance and termination, and their usable frequency falls as cable length grows, which is why suppliers state cable length limits per interface type. Differential standards such as RS-422 exist precisely for this environment: the differential pair rejects common-mode noise and tolerates longer runs, while single-ended TTL outputs should stay short and well shielded. At megahertz edge rates, unterminated stubs and daisy-chained taps turn the cable itself into a signal integrity problem, and the symptoms—rounded edges, reflected glitches, temperature-dependent miscounts—appear only intermittently.",
        "The receiver side belongs to the same budget. The controller input has its own maximum toggle frequency, hysteresis and digital filter, and a filter width chosen for noise immunity at low speed will reject legitimate high-frequency pulses. Check the input specification with the actual filter configuration, keep the A and B channel pairs length-matched so quadrature phase is preserved, and measure at the receiver end, not at the encoder, when validating with an oscilloscope.",
      ],
      image: {
        src: "/images/technology/optical-encoder-high-speed-counting-frequency-limits-guide/optical-encoder-high-speed-counting-frequency-limits-guide-section.webp",
        alt: "Engineer probing differential encoder signals with an oscilloscope at the motion controller receiver end during a high-speed verification",
        width: 1600,
        height: 900,
      },
      links: [
        { label: "Read the interface protocols guide", href: "/technology/optical-encoder-interface-protocols-biss-endat-guide/" },
        { label: "Read the signal quality troubleshooting guide", href: "/technology/linear-encoder-signal-quality-distortion-troubleshooting-guide/" },
      ],
    },
    {
      heading: "Verifying high-speed counting on the real axis",
      paragraphs: [
        "Frequency budgets predict behavior; only a counting test proves it. The core method is simple: command the axis over a known displacement at maximum velocity and compare the counted position against the reference, then repeat bidirectionally and across the speed range. A discrepancy that grows with velocity indicates dropped or spurious counts; a discrepancy that appears only in one direction points to quadrature phase margin. Where absolute reference matters, run the test through the reference mark at speed, because reference capture has its own timing window.",
        "Well-instrumented systems add diagnostics that make marginal counting visible: period monitors that flag implausible pulse spacing, error bits on the interpolation status, and counters that accumulate filter rejections. Record the results as evidence, with the pass margin, because they define the axis's real frequency envelope for future changes to velocity profiles, cable routing or controller firmware. An axis whose counting margin is documented can be modified later without rediscovering the limit.",
      ],
      bullets: [
        "Bidirectional displacement comparison at peak velocity against known travel",
        "Reference mark capture tested at working speed, not only during homing setup",
        "Period monitor and error status enabled during the test and in production",
        "Pass margin recorded as part of the machine documentation",
      ],
      links: [
        { label: "Read the encoder signal integrity guide", href: "/technology/encoder-signal-integrity-emc-servo/" },
        { label: "Read the signal splitter guide", href: "/technology/optical-encoder-signal-splitter-dual-output-guide/" },
      ],
    },
    {
      heading: "How SENFU supports high-speed encoder selection",
      paragraphs: [
        "SENFU publishes speed-versus-resolution data for its readheads and states cable length and interface limits per model, so the frequency budget can be built on real curves rather than assumptions. When an application is submitted with the axis velocity profile, scale pitch options and controller interface, SENFU can confirm the achievable interpolation factor at peak speed and propose the output configuration the counter can actually digest.",
        "For demanding axes, SENFU can also support the counting verification itself, from recommended test displacements to interpretation of period monitor data, so the installed system is proven at speed before production release.",
      ],
      links: [
        { label: "Explore high-speed encoder options", href: "/optical-encoders/smg26/" },
        { label: "Submit a high-speed application review", href: "/contact/#application-form" },
      ],
    },
  ],
  midCta: {
    eyebrow: "FREQUENCY BUDGET REVIEW",
    title: "Pushing an axis beyond its current speed?",
    description:
      "Send the velocity profile, scale pitch and controller interface, and SENFU can check the counting frequency budget stage by stage before you commit the configuration.",
    label: "Request the frequency check",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Count the budget, then count the pulses.",
  conclusion: [
    "High-speed counting is never limited by a single number. Mechanical velocity, interpolation bandwidth, the electrical path and the counter input each impose a ceiling, and the axis runs at the lowest of them. Computing the edge frequency from pitch and peak velocity, then checking it against each stage with the supplier's actual curves, turns an intermittent production fault into a design constraint handled on paper.",
    "Close the loop with a full-speed counting test that compares counted displacement against known travel, and keep the pass margin in the machine documentation. An encoder chain selected and verified this way delivers its headline resolution where it matters—at production speed—rather than only on the bench.",
  ],
  routes: [
    { label: "Optical encoder range", href: "/optical-encoders/", note: "Readhead and interface options" },
    { label: "Interface protocols guide", href: "/technology/optical-encoder-interface-protocols-biss-endat-guide/", note: "BiSS-C and serial feedback" },
    { label: "Signal integrity and EMC guide", href: "/technology/encoder-signal-integrity-emc-servo/", note: "Noise and grounding" },
    { label: "Application review", href: "/contact/#application-form", note: "Send the velocity profile" },
  ],
  evidence: [
    "Worst-case edge frequency computed from scale pitch and peak axis velocity including overshoot",
    "Interpolation speed-versus-resolution curve confirming the required factor at working speed",
    "Interface type with cable length limit, termination recommendation and receiver input specification",
    "Counter input toggle frequency verified with the configured digital filter",
    "Bidirectional full-speed counting test with pass margin recorded",
    "Period monitor and error status active in production diagnostics",
  ],
  faq: [
    {
      question: "How do I calculate an incremental encoder's output frequency?",
      answer:
        "For a linear scale, divide velocity by signal period: a 20 µm pitch scale at 2 m/s gives a 100 kHz fundamental per analog channel. Multiply by the interpolation factor for the pulse train frequency, and remember that a ×4 quadrature decode sets the counter's edge rate. Always use the axis peak velocity, including overshoot, as the input.",
    },
    {
      question: "Why does encoder resolution drop at high speed?",
      answer:
        "Interpolation electronics need a fixed processing time per signal cycle, so beyond a maximum input frequency the interpolation factor is reduced or abandoned. Suppliers document this as a speed-versus-resolution curve; the headline resolution applies only below the corresponding velocity.",
    },
    {
      question: "Does cable length affect counting frequency?",
      answer:
        "Yes. Cable capacitance and imperfect termination slow signal edges and invite reflections, so usable frequency falls as length grows. This is why encoder suppliers state a maximum cable length per interface type, and why differential interfaces such as RS-422 are preferred for long, fast runs.",
    },
    {
      question: "What causes missed counts that only appear at high velocity?",
      answer:
        "Usually one of three things: the interpolation electronics running past their input limit, degraded edges at the receiver from cable or termination problems, or a counter digital filter wide enough to reject valid high-frequency pulses. An oscilloscope at the receiver end plus a full-speed counting test separates the cases quickly.",
    },
    {
      question: "How should the counter input filter be configured?",
      answer:
        "Set the filter from the noise environment, not habit. It must reject the shortest glitch the wiring can produce while passing the shortest valid pulse at peak frequency, which means re-checking the setting whenever velocity, interpolation factor or cabling changes.",
    },
    {
      question: "Can SENFU verify counting performance for my axis?",
      answer:
        "Yes. Submit the velocity profile, scale pitch options and controller interface. SENFU can confirm the interpolation factor at peak speed from its published curves, propose the output configuration, and support a full-speed counting verification with documented pass margins.",
    },
  ],
  sources: [
    { publisher: "NIST", label: "Time and frequency metrology reference", href: "https://www.nist.gov/" },
    { publisher: "PTB", label: "Dynamic measurement and signal processing guidance", href: "https://www.ptb.de/" },
    { publisher: "SENFU", label: "Optical encoder speed, resolution and interface documentation", href: "https://senfuprecision.com/optical-encoders/" },
  ],
};
