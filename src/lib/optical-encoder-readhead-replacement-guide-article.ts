import type { EditorialPage } from "@/lib/editorial-content";

export const opticalEncoderReadheadReplacementGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / READHEAD SERVICE",
  title: "Optical Encoder Readhead Replacement: Swap-In-Place Procedure and Re-Commissioning Checks",
  description:
    "When an optical encoder readhead reaches end of life or fails, a disciplined swap-in-place procedure restores the axis without re-engineering the machine. This guide covers replacement versus remediable causes, spare-readhead version matching, mechanical reinstallation, signal and gain-margin verification, datum re-establishment and acceptance against the original error map.",
  slug: "/technology/optical-encoder-readhead-replacement-guide/",
  publishedAt: "2026-11-19",
  modifiedAt: "2026-11-19",
  primaryKeyword: "optical encoder readhead replacement",
  secondaryKeywords: [
    "readhead swap-in-place procedure",
    "encoder spare readhead version matching",
    "readhead re-commissioning checklist",
    "encoder datum re-establishment after service",
    "readhead gain margin re-adjustment",
    "encoder error map acceptance comparison",
  ],
  featuredImage: {
    src: "/images/technology/optical-encoder-readhead-replacement-guide/optical-encoder-readhead-replacement-guide-cover.webp",
    alt: "Engineer in an ESD smock replacing a compact optical encoder readhead on a precision linear stage using a hex driver, clean laboratory lighting",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Replacing a failing readhead is a controlled procedure, not a part swap. The work divides into three phases: proving that replacement is actually justified, installing the new head to the original setup knowledge, and re-verifying everything the old head contributed to. Mechanical steps re-establish the air gap, alignment and bracket torque; electrical steps confirm quadrature DC levels and a clean Lissajous figure; electronic steps restore the gain margin; and system steps re-home the datum and compare a fresh error map against the machine's archived baseline.",
    "Two decisions dominate the outcome. First, separate terminal failure signatures from remediable causes, because contamination, connectors and cable faults imitate dead readheads and most of them are fixable in place. Second, match the spare to the installed system in signal period, signal format, interpolation electronics and gain range before it is needed, because a mismatched spare turns a two-hour job into a week of debugging. Finish with records that tie the new serial number to the machine's traceability file.",
  ],
  challenge:
    "A readhead that has served for years rarely fails cleanly. Amplitude fades as the LED ages, offsets drift with thermal cycling, alarms appear intermittently under vibration, and the same symptoms can equally come from a contaminated scale, a corroded connector or a cracked cable in a flex zone. Production pressure pushes toward the fastest fix, and the fastest fix — pull the head, fit the spare, restart — is exactly the one that leaves the air gap unmeasured, the gain untuned and the datum shifted. The axis then runs with a signal that looks alive but measures differently, and the error surfaces weeks later as overlay drift or rejected parts, disconnected by time and distance from the replacement that caused it. The cure is a written swap-in-place procedure in which nothing is called finished until it has been measured against a recorded baseline.",
  requirements: [
    { title: "Failure evidence before the order", description: "Diagnostics captured before removal: alarm and status codes, signal amplitude and DC levels after cleaning, and a documented exclusion of scale, connector and cable causes." },
    { title: "A version-matched spare", description: "A spare readhead confirmed identical in signal period, scale pitch, signal format, interpolation electronics family, gain range, reference-mark code and qualified cable length." },
    { title: "Original setup knowledge available", description: "The commissioning record with air gap values, alignment methods, bracket torque figures, gain settings, signal amplitudes and datum positions the new installation must reproduce." },
    { title: "Instruments and a verification window", description: "Oscilloscope for Lissajous work, torque driver, gap setting tools and a scheduled window in which the axis can be re-homed and error-mapped without production interference." },
  ],
  routes: [
    { label: "Air gap clearance setup", href: "/technology/optical-encoder-air-gap-clearance-setup-guide/", note: "Re-establishing the working gap" },
    { label: "Quadrature and Lissajous tuning", href: "/technology/encoder-quadrature-lissajous-signal-tuning/", note: "First-signal verification method" },
    { label: "Gain margin adjustment", href: "/technology/encoder-readhead-gain-margin-adjustment/", note: "Restoring amplitude and margin" },
    { label: "Diagnostics and alarm monitoring", href: "/technology/optical-encoder-diagnostics-alarm-fault-monitoring-guide/", note: "Deciding replace versus remediate" },
  ],
  evidence: [
    "Diagnostic record supporting the replacement decision: alarm codes, cleaned-and-retried amplitude readings, connector and cable inspection results",
    "Spare's version-match confirmation against the installed scale, interpolation electronics and interface, with its serial number logged",
    "Gap, alignment and torque measurements taken during installation, compared with the original commissioning values",
    "Post-installation signal record: quadrature DC levels, differential amplitudes, Lissajous traces and final gain setting",
    "Datum re-establishment result and the acceptance error map compared against the machine's archived baseline with a pass or fail band",
  ],
  comparisonTable: {
    caption: "Replacement versus remediation: signature classes, the right route and the re-verification each demands",
    headers: ["Observed signature", "Typical root cause", "Route", "Re-verification after the fix"],
    rows: [
      ["Amplitude recovers after scale cleaning and gap reset", "Contamination or gap drift", "Remediate", "Signal quality check only"],
      ["Alarm follows cable movement or flex zones", "Connector or cable fault", "Remediate", "Continuity, shielding and signal check"],
      ["Amplitude stays low after cleaning with gap correct", "LED ageing or detector degradation", "Replace", "Full swap-in-place procedure"],
      ["DC offsets cannot be centred within gain range", "Electronics drift beyond adjustment", "Replace", "Full swap-in-place procedure"],
      ["Interpolation fault codes repeat on a verified clean signal", "Internal interpolation failure", "Replace", "Full swap-in-place procedure"],
      ["Cracked window, shock mark or visible optic damage", "Mechanical damage", "Replace", "Full swap-in-place procedure plus scale inspection"],
    ],
  },
  articleSections: [
    {
      heading: "Replacement or remediation: separating terminal failures from fixable causes",
      paragraphs: [
        "A readhead deserves replacement only after remediable causes have been excluded, because a large share of failed-encoder service calls end at a connector, a contaminated scale or a drifted gap instead. Before ordering a spare, work through the cheap causes: clean and inspect the scale window, reseat connectors and inspect the cable through its flex zone, confirm supply voltage and grounding at the head, and re-run the built-in diagnostics. The head's status and alarm bits separate persistent internal faults from intermittent external ones, and read correctly they decide the route.",
        "Certain signatures do justify replacement. Sine or cosine amplitude that stays below minimum after the scale is cleaned and the gap is reset points to LED ageing or detector degradation. DC offsets that can no longer be centred inside the gain adjustment range, interpolation fault codes that repeat on a verified clean signal, a cracked window or visible optic damage are terminal. Intermittent alarms that track temperature or vibration usually belong to the bracket, the cable or the environment, and fixing those returns the head to health. The diagnostics and alarm monitoring guide sets out the alarm-decode discipline that keeps this decision evidence-based rather than habitual.",
      ],
      links: [
        { label: "Read the diagnostics and alarm fault monitoring guide", href: "/technology/optical-encoder-diagnostics-alarm-fault-monitoring-guide/" },
      ],
    },
    {
      heading: "Spare-readhead strategy and version matching",
      paragraphs: [
        "A spare that does not match the installed system converts a two-hour swap into a week of debugging. Matching starts with the scale: signal period and pitch must be identical, because interpolation electronics are calibrated to a specific period and a mismatched pitch produces a scaled-but-wrong position. The signal format must match what the drive or controller expects — current sine, voltage sine, TTL square wave or a serial protocol such as BiSS-C or EnDat — since a wrong electrical format cannot be fixed at the connector.",
        "Beyond format, match the interpolation electronics family and revision, the gain range, the reference-mark code and position tolerance, and the cable length and termination the head was qualified with. Substitution across revisions is acceptable only with the vendor's written compatibility confirmation for the exact scale and interface combination in this machine. Store the spare in its packaging, power it once on the bench before it is ever needed, and record its serial number in the machine file. The incoming acceptance test guide provides the bench procedure that proves a spare is healthy and correctly configured before it reaches the machine.",
      ],
      links: [
        { label: "Follow the incoming acceptance test guide", href: "/technology/optical-encoder-incoming-acceptance-test-guide/" },
      ],
    },
    {
      heading: "Mechanical re-installation: air gap, alignment and bracket torque",
      paragraphs: [
        "Removal is a measurement opportunity. Before the old head comes off, record the shim stack, the packing or gauge-block method used at first installation and the fastener torque, and photograph the cable dressing. On removal, inspect the scale in the region the head covered: whatever prompted the replacement may have left contamination or a witness mark there that would compromise the new unit from its first hour.",
        "Install the new head using the original setup knowledge rather than by eye. Set the working air gap and angular alignment to the vendor's stated windows with the same method used at commissioning, torque the bracket fasteners to the documented values, and verify the gap holds over the full travel as the stage moves through its stroke and its thermal range. A gap set cold will read differently after an hour of running, so make the final verification after the stage reaches operating temperature. The air gap clearance setup guide details how to establish and verify the gap window, and the installation mechanical tolerance guide consolidates the alignment and torque targets this step must reproduce.",
      ],
      links: [
        { label: "Read the air gap clearance setup guide", href: "/technology/optical-encoder-air-gap-clearance-setup-guide/" },
        { label: "Read the installation mechanical tolerance guide", href: "/technology/optical-encoder-installation-mechanical-tolerance-guide/" },
      ],
    },
    {
      heading: "Electrical reconnection and first signal checks",
      paragraphs: [
        "Reconnect in a defined order: shield and ground first, then supply, then signals, with the stage stationary and the drive disabled. Before any motion is commanded, power the head and read the static signal health. The sine and cosine DC levels should sit near mid-supply, the differential amplitude inside the datasheet window, and no alarm bits active. These static checks catch wiring and configuration errors while the machine is still safe to touch.",
        "The dynamic check is the Lissajous figure. Move the axis slowly — by hand or in a safe jog — and watch the sine-cosine display on an oscilloscope in X-Y mode: a centred, round, unwavering circle confirms amplitude balance, quadrature phase and freedom from distortion across the traversed range, while flattening, offset or drift names the defect precisely. The quadrature and Lissajous tuning guide explains how to read this display and what each distortion signature means.",
      ],
      image: {
        src: "/images/technology/optical-encoder-readhead-replacement-guide/optical-encoder-readhead-replacement-guide-detail.webp",
        alt: "Close-up of a replaced encoder readhead on its scale interface beside an oscilloscope showing a clean quadrature Lissajous circle",
        width: 1600,
        height: 900,
      },
      links: [
        { label: "Read the quadrature and Lissajous signal tuning guide", href: "/technology/encoder-quadrature-lissajous-signal-tuning/" },
      ],
    },
    {
      heading: "Gain-margin re-adjustment to the recorded baseline",
      paragraphs: [
        "A new head ships with factory gain, which is rarely the gain the machine was tuned around. Once mechanical and signal checks pass, re-adjust the head or interpolation board gain so amplitude returns to the value recorded at original commissioning, and confirm margin remains inside the adjustment range with headroom for further LED ageing. Gain set too low starves the counting electronics of noise immunity; gain set too high clips the sine wave and distorts interpolation.",
        "Verify the setting the way the machine will use it. Sweep the axis through its full travel and speed range and confirm amplitude and DC levels hold at both stroke ends, after a thermal soak, and across the working gap tolerance rather than at a single nominal position. Log the final setting and achieved amplitude so the next service compares against numbers rather than memory. The gain margin adjustment guide defines the adjustment procedure and the margin criteria to verify against.",
      ],
      links: [
        { label: "Read the readhead gain margin adjustment guide", href: "/technology/encoder-readhead-gain-margin-adjustment/" },
      ],
    },
    {
      heading: "Datum and reference re-establishment on absolute and incremental systems",
      paragraphs: [
        "On an incremental system the datum is physically defined by the reference mark and the homing routine, so a replaced head must reproduce the original mark-reading position within the tolerance the homing logic assumes. Re-home and measure the datum shift against the recorded value; if the shift exceeds tolerance, correct it mechanically at the bracket rather than absorbing it into a controller offset that hides the error from every later job.",
        "On an absolute system the head reads position from the scale code directly, but machine zero is still the coupling between encoder position and the machine's own datum. After replacement, re-establish machine zero against a known physical reference and confirm the reported absolute position matches the archived axis position. The reference mark and datum strategies guide covers the datum architectures and the re-establishment procedure for both families.",
      ],
      links: [
        { label: "Read the reference mark and datum strategies guide", href: "/technology/optical-encoder-reference-mark-datum-strategies-guide/" },
      ],
    },
    {
      heading: "Acceptance verification against the machine's original error map",
      paragraphs: [
        "A replacement is not finished when the signal looks clean; it is finished when the axis measures to its archived baseline. Run the verification used at original acceptance — bidirectional error-map runs across the working travel at production speed — and compare against the machine's original error map rather than the datasheet. Small differences are expected, because a new head carries its own interpolated error signature and the scale's contribution has aged with the machine.",
        "If the deviation exceeds the acceptance band, refresh the machine's error compensation with a new map instead of chasing perfection inside the head; the compensation table exists precisely to reconcile a healthy but individually characterised encoder with the process specification. The error mapping and compensation guide explains how the map is taken and applied, and this acceptance comparison is the step that converts a part replacement into a restored specification.",
      ],
      links: [
        { label: "Read the error mapping and compensation guide", href: "/technology/optical-encoder-error-mapping-compensation-guide/" },
      ],
    },
    {
      heading: "Documentation and records for traceability",
      paragraphs: [
        "Close the job with a record set that ties the new unit to the machine: old and new serial numbers, the documented reason for replacement, the spare's version-match confirmation, gap and torque values, Lissajous traces, final gain and amplitude, the datum shift and its correction, and the acceptance comparison result. These records let the next engineer separate head drift from machine drift years later, and they are what makes a spare-readhead policy defensible, because stocking decisions then rest on the machine's own failure history rather than on habit. That is the entire value of traceability.",
        "Feeding replacement events into the reliability record also sharpens spare policy. Replacement intervals and repair times measured on the machine, rather than assumed from catalogues, decide how many spares to hold and which versions to stock. The reliability verification guide shows how those MTBF and MTTR figures are measured and turned into stocking decisions.",
      ],
      links: [
        { label: "Read the reliability MTBF and MTTR verification guide", href: "/technology/encoder-reliability-mtbf-mttr-verification-guide/" },
      ],
    },
  ],
  midCta: {
    eyebrow: "READHEAD SERVICE",
    title: "Replacing a readhead on an axis that has to hold its specification?",
    description:
      "Share the encoder model, machine baseline records and verification window, and SENFU can help plan the version match, re-commissioning steps and acceptance criteria for the swap.",
    label: "Discuss a readhead replacement",
    href: "/contact/#application-form",
  },
  conclusion: [
    "Readhead replacement succeeds when it is treated as re-commissioning rather than as part swapping. The procedure has one logic throughout: measure, compare against the recorded baseline, adjust to it, and record the result. Exclude remediable causes before ordering the spare; match the spare in period, format, electronics and gain before it is installed; reproduce the original gap, alignment and torque; verify quadrature DC levels and the Lissajous circle before motion; restore gain margin to the commissioning values; re-establish the datum honestly; and close with an error map compared against the machine's own history.",
    "A swap executed this way returns the axis to its archived specification within a single planned window. A swap executed under pressure leaves a signal that looks alive but measures differently, and the machine will eventually invoice the difference in rejected parts and lost weeks.",
  ],
  faq: [
    {
      question: "Can a readhead be replaced without re-verifying the error map?",
      answer:
        "Only if the acceptance run against the archived error map lands inside the machine's tolerance band. A new head carries its own interpolation signature and the scale has aged, so assume re-verification is required and let a passing comparison release the axis. On compensated machines, expect to refresh the error compensation table rather than relying on the old one.",
    },
    {
      question: "Can a spare readhead of a different hardware or firmware revision be used?",
      answer:
        "Only after the vendor confirms compatibility with the installed scale, interpolation electronics and interface, and after the spare passes a bench acceptance test. Revisions can change gain ranges, reference-mark processing or signal formats, so a revision mismatch is acceptable only with written confirmation and a successful bench verification.",
    },
    {
      question: "Why does the datum move after a readhead replacement on an incremental axis?",
      answer:
        "The datum is defined by where the head reads the reference mark, and small differences in the head's optics or mounting shift that reading. Re-home after replacement, measure the shift against the recorded value, and correct it mechanically at the bracket if it exceeds tolerance. Hiding the shift in a controller offset disconnects the machine from its own history.",
    },
    {
      question: "What must be checked before the stage is allowed to move after replacement?",
      answer:
        "With the drive disabled: supply voltage, shield and ground continuity, quadrature DC levels near mid-supply, differential amplitude inside the datasheet window and no active alarm bits. Command motion only after the static checks pass, then verify the Lissajous circle during slow, safe movement before closing the loop.",
    },
    {
      question: "Which records make a replacement auditable years later?",
      answer:
        "Old and new serial numbers, the reason for replacement, version-match confirmation, gap and torque values, Lissajous traces, final gain and amplitude, datum shift and correction, and the error-map comparison result. Stored in the machine file, this set lets any later engineer distinguish head drift from machine drift with evidence.",
    },
  ],
  sources: [
    { publisher: "NIST", label: "Dimensional metrology and precision engineering reference publications", href: "https://www.nist.gov/" },
    { publisher: "ASPE", label: "American Society for Precision Engineering — precision machine design and metrology resources", href: "https://aspe.net/" },
    { publisher: "SPIE", label: "Publications on optical instrumentation and metrology systems", href: "https://spie.org/" },
    { publisher: "IEC", label: "Standards for incremental and absolute encoder interfaces and testing", href: "https://www.iec.ch/" },
  ],
};
