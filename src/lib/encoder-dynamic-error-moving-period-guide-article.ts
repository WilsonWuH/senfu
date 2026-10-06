import type { EditorialPage } from "@/lib/editorial-content";

export const encoderDynamicErrorMovingPeriodGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / ENCODER DYNAMICS",
  title: "Encoder Dynamic Error and Moving Period Error: Evaluation for Production Velocities",
  description:
    "Static calibration at dwell speed can certify a stage that still misbehaves at production feed rates. This guide explains encoder dynamic error and moving period error, why they appear only while the axis is moving, how to measure them, and what to write into an encoder or stage specification.",
  slug: "/technology/encoder-dynamic-error-moving-period-guide/",
  publishedAt: "2026-10-06",
  modifiedAt: "2026-10-06",
  primaryKeyword: "encoder dynamic error",
  secondaryKeywords: [
    "moving period error encoder",
    "dynamic positioning error stage",
    "encoder error at velocity",
    "interpolation error at speed",
    "servo tracking error vs encoder error",
    "dynamic encoder acceptance test",
  ],
  featuredImage: {
    src: "/images/technology/encoder-dynamic-error-moving-period-guide/encoder-dynamic-error-moving-period-guide-cover.webp",
    alt: "Metrology bench with an optical linear encoder readhead mounted on a moving carriage of a precision stage, connected to an oscilloscope and data acquisition electronics during a dynamic error test",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Encoder dynamic error is the difference between reported position and true position while the axis is moving, as opposed to the static error measured during stop-and-go calibration. A specific component, often called moving period error, is the cyclic position error that appears or changes only at velocity: interpolation and subdivision errors smear or shift with speed, readhead and electronics bandwidth filter the signal, mechanical vibration modulates the gap, and the servo loop adds tracking lag on top. Because most acceptance measurements are taken at creep speed or at rest, these effects pass certification unnoticed and surface later as process errors at production feed rates.",
    "Evaluation therefore has to be dynamic by design: measure position error while the stage travels at the velocities used in production, using methods that keep pace with the axis—a moving interferometer with careful deadpath control, a calibrated grid encoder, dynamic circle tests, or on-axis periodic-error analysis from the encoder signal itself. Specify the velocity range, the sampling method and the allowed error envelope at speed, and keep servo tracking error separate from encoder error, because the two have different causes and different fixes.",
  ],
  challenge:
    "A stage passes its factory acceptance test beautifully: laser interferometer, dwell at each target, nanometre-grade curves. In production, running three times faster, the process shows pitch marks, stitching offsets or contour errors that the certificate says cannot exist. The gap is dynamics. Every static measurement freezes the machine; at velocity, interpolation phase shifts, signal bandwidths roll off, vibration modulates the readhead, and the servo lags the command. None of these appear in a stop-and-go calibration, and none of them are captured by a datasheet resolution figure. Buyers who specify only static accuracy routinely discover that their real error at speed is several times larger, with no contractual basis to challenge it.",
  requirements: [
    { title: "Velocity-defined error specification", description: "The error envelope is stated as a function of velocity, at minimum for creep, process feed rate and maximum traverse, not as a single static number." },
    { title: "Measurement that follows the motion", description: "The chosen method samples true and reported position continuously during motion, with bandwidth and sampling rate sufficient for the fastest error components of interest." },
    { title: "Separation of error sources", description: "Servo tracking error, controller-induced error and encoder-intrinsic dynamic error are measured or estimated separately, so each can be assigned to the responsible party." },
    { title: "Periodic-error analysis at speed", description: "Moving period error is quantified by spectral analysis of the error signal against scale signal period, distinguishing encoder-periodic components from machine-periodic ones." },
  ],
  routes: [
    { label: "Sub-divisional error and position jitter", href: "/technology/encoder-subdivision-error-position-jitter/", note: "Static periodic error basics" },
    { label: "High-speed counting limits", href: "/technology/optical-encoder-high-speed-counting-frequency-limits-guide/", note: "Signal frequency at velocity" },
    { label: "Laser interferometer verification", href: "/technology/linear-stage-accuracy-laser-interferometer-verification-guide/", note: "Static positioning practice" },
    { label: "Servo bandwidth and velocity feedback", href: "/technology/linear-encoder-velocity-feedback-servo-bandwidth/", note: "Loop-side dynamic behavior" },
  ],
  evidence: [
    "Error-versus-velocity curves from measurements at creep, process and traverse speeds",
    "Spectral plot of position error against travel, with encoder signal period marked",
    "Sampling bandwidth and sensor bandwidth of the dynamic measurement, stated on the report",
    "Separation statement: which error components are encoder-intrinsic, which are servo or mechanical",
    "Repeat-run overlay demonstrating measurement repeatability at speed",
  ],
  comparisonTable: {
    caption: "Methods for evaluating position error under motion",
    headers: ["Method", "What it captures", "Velocity capability", "Practical notes"],
    rows: [
      ["Static dwell interferometer", "Positioning accuracy and repeatability at rest", "Zero (dwell only)", "The baseline certificate method; blind to every dynamic effect"],
      ["Moving interferometer", "Continuous error at speed along one axis", "Moderate to high, optics-limited", "Deadpath and Abbe errors grow at speed; environmental compensation must keep up"],
      ["Calibrated grid (2D) encoder", "X and Y error simultaneously, including crosstalk at speed", "High", "Ideal for scanning stages; the reference itself needs calibration and is stroke-limited"],
      ["Dynamic circle (ballbar-type) test", "Contouring error of coordinated axes", "Process-representative", "Mixes servo, geometry and encoder effects; excellent screening, weaker attribution"],
      ["On-axis periodic-error analysis", "Moving period error at the encoder signal period", "Full speed range", "Uses the encoder's own signals; separates SDE-at-speed from machine periodicity"],
      ["Step response and settling", "Tracking lag and settling after motion", "Transient", "Quantifies servo contribution that must not be booked as encoder error"],
    ],
  },
  articleSections: [
    {
      heading: "Why dynamic error is a different quantity",
      paragraphs: [
        "A static calibration measures position error when nothing is moving: the axis settles at each target, the reference reads, the error is recorded. Dynamic error asks a harder question—while the carriage is sweeping past a point at feed rate, how far is the reported position from the truth at that instant? The answer involves every static effect plus a set of terms that only exist in motion: finite bandwidth in the readhead and interpolation electronics, phase lag between scale signal and counted position, vibration excited by the drive and modulating the scale gap, and, on the control side, tracking lag that pulls reported position away from commanded position during the move.",
        "Moving period error deserves its own name because of how it manifests. Sub-divisional error, the cyclic error within each scale signal period, is usually characterized statically, where it appears as a clean periodic ripple. At speed the same mechanism produces an error whose amplitude and phase depend on velocity: interpolation filters introduce speed-dependent phase shift, and signal imbalance combines with counting dynamics so the ripple can double in amplitude or shift in phase relative to the static case. A stage whose static SDE is a comfortable 15 nanometres can exhibit moving period error of double that at production velocity, on top of tracking error from the servo.",
      ],
      links: [
        { label: "Read the sub-divisional error and jitter guide", href: "/technology/encoder-subdivision-error-position-jitter/" },
        { label: "Read the high-speed counting limits guide", href: "/technology/optical-encoder-high-speed-counting-frequency-limits-guide/" },
      ],
    },
    {
      heading: "Measuring error while the axis is moving",
      paragraphs: [
        "The measurement method must keep up with the axis. A laser interferometer can measure continuously during motion, but at speed its own error sources sharpen: deadpath error grows with any drift between setup and measurement, atmospheric compensation lags, and beam jitter from stage vibration adds apparent displacement. A calibrated two-dimensional grid encoder measures both axes simultaneously at high velocity with excellent bandwidth, which makes it the preferred reference for scanning-stage work, within the limits of its calibrated area. Dynamic circle tests exercise coordinated motion at process speeds and are unmatched as a screening tool, though they attribute error to the machine as a whole rather than to the encoder.",
        "For moving period error specifically, on-axis analysis is powerful: recording the encoder's own fine-phase or interpolation diagnostics while the axis runs at constant velocity reveals the periodic component directly against signal period. Whatever the method, three disciplines apply—sampling bandwidth well above the fastest error frequency of interest, environmental conditions recorded, and repeat runs overlaid to prove the measurement itself is repeatable at speed.",
      ],
      bullets: [
        "Sampling rate at least five to ten times the highest error frequency of interest",
        "Reference instrument bandwidth stated alongside its calibration",
        "Constant-velocity segments isolated for periodic-error spectral analysis",
        "Repeat runs overlaid to separate machine error from measurement noise",
      ],
      image: {
        src: "/images/technology/encoder-dynamic-error-moving-period-guide/encoder-dynamic-error-moving-period-guide-detail.webp",
        alt: "Engineer reviewing a position error versus velocity plot on a laboratory workstation beside an optical encoder test rig with readhead, scale and signal electronics",
        width: 1600,
        height: 900,
      },
    },
    {
      heading: "Separating encoder error from servo error",
      paragraphs: [
        "At velocity, reported position deviates from commanded position for two distinct reasons. The servo loop lags: a tracking error that grows with acceleration and depends entirely on controller tuning, feedforward quality and loop bandwidth. The encoder also errs: its own dynamic terms described above. Both appear on the same position trace, and conflating them wastes everyone's time—the stage builder tunes the servo while the encoder supplier checks a static report, and neither finding explains the process problem.",
        "Clean separation is procedural. Step and ramp responses quantify the tracking component and its dependence on feedforward. On-axis periodic analysis isolates encoder-periodic error. A grid encoder or moving interferometer references true motion independently of the encoder under test. A specification that simply says 'dynamic accuracy' invites this confusion; one that defines tracking error, moving period error and total error-at-velocity as separate line items lets each be verified against its own limit and owned by its own supplier.",
      ],
      links: [
        { label: "Read the servo bandwidth and velocity feedback guide", href: "/technology/linear-encoder-velocity-feedback-servo-bandwidth/" },
        { label: "Read the error mapping and compensation guide", href: "/technology/optical-encoder-error-mapping-compensation-guide/" },
      ],
    },
    {
      heading: "Writing dynamic error into a specification",
      paragraphs: [
        "A usable dynamic specification names the velocities—at minimum creep, production feed and rapid traverse—and states an error envelope at each. It defines the measurement method or accepts a proposed one with its bandwidth, requires the periodic-error spectrum at process speed, and fixes the responsibility split between servo tracking and encoder-intrinsic terms. Compensation state must be declared, because an error map calibrated statically can behave differently once velocity-dependent phase shifts move the periodic components it was meant to cancel.",
        "The return on this paperwork is direct. Scanning processes—writing, inspection, metrology—spend their time in motion, so their quality is governed by error at speed, not error at rest. A stage qualified dynamically at process velocity delivers contour quality that a statically certified stage cannot promise, and when something drifts in production, the archived dynamic baseline turns 'the machine feels worse' into a measured delta with a date and a spectrum.",
      ],
      links: [
        { label: "Read the interferometer verification guide", href: "/technology/linear-stage-accuracy-laser-interferometer-verification-guide/" },
        { label: "Submit a dynamic error requirement", href: "/contact/#application-form" },
      ],
    },
  ],
  midCta: {
    eyebrow: "DYNAMIC PERFORMANCE REVIEW",
    title: "Is your stage certified only at standstill?",
    description:
      "Send the motion profile—velocities, accelerations, process tolerance—and SENFU can help define the dynamic error tests, moving period error limits and responsibility split for the encoder and stage specification.",
    label: "Request a dynamic error review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "The process runs at speed. The error spec should too.",
  conclusion: [
    "Static calibration remains the foundation of stage metrology, but it measures a machine at rest while production uses a machine in motion. Interpolation phase shifts, bandwidth limits, vibration and servo lag create error terms that appear only at velocity, and moving period error is their most distinctive signature within each scale signal period.",
    "Specify what the process actually experiences: error envelopes at defined velocities, periodic-error spectra at process speed, sampling and reference bandwidths on the report, and a clean split between servo tracking and encoder-intrinsic terms. With that evidence, dynamic performance becomes a contractual property of the machine instead of a surprise discovered in production.",
  ],
  faq: [
    {
      question: "What is moving period error in an optical encoder?",
      answer:
        "The cyclic position error occurring at the scale signal period while the axis is moving. It arises from the same interpolation and signal-balance mechanisms as static sub-divisional error, but its amplitude and phase become velocity-dependent through interpolation filter dynamics and counting behavior, so a statically characterized SDE value does not bound the error at speed.",
    },
    {
      question: "Why does a stage pass static acceptance but show errors in production?",
      answer:
        "Acceptance is usually measured at dwell or creep speed, where dynamic terms vanish. At production feed rate, servo tracking lag, readhead and electronics bandwidth limits, vibration modulation and velocity-dependent interpolation phase all contribute error that the static measurement never exercised.",
    },
    {
      question: "How is dynamic position error measured?",
      answer:
        "With a reference that follows the motion: a laser interferometer sampling continuously during travel, a calibrated two-dimensional grid encoder for planar stages, or dynamic circle tests for coordinated axes. Moving period error is typically extracted by spectral analysis of the error signal against the encoder signal period during constant-velocity runs.",
    },
    {
      question: "Is servo tracking error part of encoder dynamic error?",
      answer:
        "No. Tracking error comes from the control loop lagging the command and is tuned out through servo gains and feedforward. Encoder-intrinsic dynamic error comes from the sensing chain. They appear on the same trace, so a good specification measures and limits them separately and assigns responsibility accordingly.",
    },
    {
      question: "Does error compensation calibrated statically help at speed?",
      answer:
        "Partially. Slowly varying geometric errors remain valid, but velocity-dependent phase shifts can move periodic error components relative to the map that was calibrated to cancel them. The compensation state should be declared during dynamic testing, and periodic components at speed should be verified against the map's assumptions.",
    },
    {
      question: "What should I send SENFU for a dynamic error assessment?",
      answer:
        "The motion profile—velocity, acceleration and dwell phases—plus the process tolerance and any existing static calibration reports. SENFU can propose the dynamic test plan, the error envelope at each velocity and the acceptance criteria for encoder and servo contributions.",
    },
  ],
  sources: [
    {
      publisher: "ASPE",
      label: "American Society for Precision Engineering — precision machine dynamics and metrology resources",
      href: "https://aspe.net/",
    },
    {
      publisher: "euspen",
      label: "European Society for Precision Engineering and Nanotechnology — conference proceedings on dynamic metrology",
      href: "https://www.euspen.eu/",
    },
    {
      publisher: "NIST",
      label: "NIST — precision engineering and machine metrology research publications",
      href: "https://www.nist.gov/",
    },
    {
      publisher: "ISO",
      label: "ISO 230 series — test code for machine tools, including positioning and dynamic test methods",
      href: "https://www.iso.org/",
    },
  ],
};
