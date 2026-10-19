import type { EditorialPage } from "@/lib/editorial-content";

export const opticalEncoderUvwCommutationSignalAlignmentGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / OPTICAL ENCODER",
  title: "UVW Commutation Signal Alignment: Calibrating Encoder Output Phase for Brushless Motor Drives",
  description:
    "UVW commutation tracks tell a brushless drive where the rotor is within each electrical cycle, and their alignment to the ABZ incremental signals decides whether the motor runs smoothly or ripples. This guide explains the UVW-to-ABZ relationship, how commutation angle error becomes torque ripple, a practical oscilloscope alignment procedure, and how factory calibration is verified in the field.",
  slug: "/technology/optical-encoder-uvw-commutation-signal-alignment-guide/",
  publishedAt: "2026-10-17",
  modifiedAt: "2026-10-17",
  primaryKeyword: "UVW commutation signal alignment optical encoder",
  secondaryKeywords: [
    "UVW encoder commutation calibration",
    "UVW ABZ signal relationship",
    "commutation angle error torque ripple",
    "encoder commutation oscilloscope procedure",
    "BLDC commutation offset verification",
    "optical encoder commutation track alignment",
  ],
  featuredImage: {
    src: "/images/technology/optical-encoder-uvw-commutation-signal-alignment-guide/optical-encoder-uvw-commutation-signal-alignment-guide-cover.webp",
    alt: "Oscilloscope displaying UVW commutation and AB quadrature encoder waveforms beside a brushless motor and optical encoder module on a motion test bench in a precision laboratory",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "UVW commutation channels are three additional tracks on an incremental optical encoder that repeat once per electrical cycle of the motor—one full period every 360°/pole-pairs of mechanical rotation—offset 120 electrical degrees from each other. They give the drive a coarse absolute rotor angle so it can energize the correct phase pair at power-up, before the high-resolution ABZ incremental signals take over for position and velocity. Alignment means the UVW edges sit at defined ABZ positions: when the U channel rising edge occurs, the A/B states must match the sector table the drive expects, within a few electrical degrees.",
    "Commutation angle error converts directly into torque ripple and lost average torque: roughly the sine of the electrical error appears as ripple, so ten degrees of misalignment is consistent with fifteen to twenty percent ripple in block-commutated systems, felt at low speed as cogging, heard as acoustic noise, and seen as speed jitter that servo tuning cannot remove. The cure is procedural: verify the UVW-to-ABZ phase relation with a two-channel oscilloscope against the six-sector truth table, confirm quadrature quality, and document the commutation offset at factory calibration so field verification has a baseline to compare against.",
  ],
  challenge:
    "A brushless motor that runs rough at low speed, hums under load, or refuses to start smoothly is often blamed on the drive, the tuning, or the mechanics—when the actual culprit is a commutation signal misaligned by a few electrical degrees. Because UVW channels are coarse by design, a system can appear fully functional: the encoder counts correctly, the index fires, the servo loops hold position. Only the conversion between encoder phase and stator phase is wrong, and it announces itself as ripple, noise, and efficiency loss rather than as an error code. Integration teams assembling third-party motors with third-party encoders inherit the risk directly, since alignment is established at encoder manufacture and finalized in the drive. Without a documented alignment procedure and a recorded factory offset, every motor swap or encoder replacement re-opens the question with no baseline to compare against.",
  requirements: [
    { title: "Motor electrical data on hand", description: "Pole-pair count, electrical cycle definition, and the drive's expected sector table are needed to convert measured signal timing into electrical-degree error; without them, scope traces cannot be judged." },
    { title: "Two-channel oscilloscope with differential probing", description: "UVW and AB outputs are differential signals; probing them single-ended with shared grounds corrupts edges. A 100 MHz-class scope with differential probes or proper differential-to-single-ended adapters is the working minimum." },
    { title: "Controlled rotation method", description: "Alignment checks need repeatable shaft angles—hand rotation for static edge checks, a low-speed torque-mode spin for back-EMF comparison, or a second drive motor as a rotator." },
    { title: "Recorded factory commutation offset", description: "The baseline for field verification is the as-shipped alignment: the encoder manufacturer's mechanical UVW preparation and any drive-side electrical offset recorded at commissioning." },
  ],
  routes: [
    { label: "ABZ signal troubleshooting", href: "/technology/incremental-encoder-abz-signal-troubleshooting/", note: "Incremental track diagnostics" },
    { label: "Quadrature Lissajous tuning", href: "/technology/encoder-quadrature-lissajous-signal-tuning/", note: "A/B phase and amplitude correction" },
    { label: "Servo feedback tuning", href: "/technology/linear-motor-stage-encoder-feedback-tuning-guide/", note: "Encoder feedback in the servo loop" },
    { label: "Precision motion applications", href: "/applications/precision-motion/", note: "Where commutation quality matters" },
  ],
  evidence: [
    "Six-sector truth table with the AB state measured at every UVW edge, and the electrical-degree error computed from AB counts",
    "UVW duty cycle and 120-degree spacing measurements taken at a documented rotation speed",
    "Commutation offset recorded at factory calibration, with the drive register value used at commissioning",
    "Torque ripple or phase-current ripple measurement at low speed, compared against the pre-shipment baseline",
    "Index (Z) position relative to the UVW window, verified after any motor or encoder replacement",
  ],
  comparisonTable: {
    caption: "Commutation alignment methods compared",
    headers: ["Aspect", "Static six-sector check (scope)", "Back-EMF comparison (scope)", "Drive auto-calibration (locked rotor)"],
    rows: [
      ["What it verifies", "UVW-to-ABZ phase relation against the sector table", "UVW phase against the motor's own back-EMF", "Electrical zero at the drive, given working UVW or ABZ"],
      ["Equipment", "Oscilloscope, differential probes, hand rotation", "Oscilloscope plus a rotation source, motor leads accessible", "The commissioning drive only"],
      ["Detects", "Encoder-side alignment errors, sector logic mismatch", "Encoder-to-motor electrical angle error including stator placement", "Drive-side offset; assumes encoder hardware is correct"],
      ["Best use", "Incoming inspection and field verification", "First-time integration of motor and encoder", "Final commissioning step after the above two pass"],
    ],
  },
  articleSections: [
    {
      heading: "UVW and ABZ: one code disc, two different jobs",
      paragraphs: [
        "An incremental optical encoder with commutation outputs carries two independent signal families on the same code disc. The ABZ family is the metrology: A and B are quadrature square waves repeating every mechanical line pitch, and their count gives position with the encoder's full resolution; Z fires once per revolution to define the datum. The UVW family is the motor's coarse clock: three channels spaced 120 electrical degrees apart, each completing one full period per electrical cycle of the motor—that is, every 360°/pole-pairs of mechanical rotation. On a ten-pole-pair motor, the U channel repeats every 36 mechanical degrees, and the drive only needs to know the rotor angle within one sector (±30 electrical degrees) to apply current to the correct phase pair at power-up.",
        "The two families are physically linked: UVW tracks are exposed or masked on the same disc and read by the same optics, so their phase relation to ABZ is fixed at manufacture. When the encoder is correctly aligned, every UVW edge transition lands at a defined ABZ state—count N after the index, A high and B low, and so on, six sectors per electrical cycle. Alignment quality is exactly this: how closely the measured UVW edges match the expected ABZ positions, expressed in electrical degrees. A drive that trusts misaligned UVW channels applies its phase current at the wrong stator angle, and no amount of downstream servo gain fixes the error at the source. The incremental tracks and their own failure modes are covered signal by signal in the ABZ troubleshooting guide, which pairs naturally with this alignment check.",
      ],
      links: [
        { label: "Read the ABZ signal troubleshooting guide", href: "/technology/incremental-encoder-abz-signal-troubleshooting/" },
      ],
    },
    {
      heading: "How commutation angle error becomes torque ripple",
      paragraphs: [
        "A brushless drive produces smooth torque only when the stator current vector leads the rotor's electrical angle correctly. Commutation angle error shifts that vector: in sinusoidal commutation the average torque falls with the cosine of the error while the current between phases no longer converts cleanly into rotation, and in block or six-step commutation the error appears directly as ripple at the electrical frequency and its harmonics. As a working rule, the dominant ripple grows roughly with the sine of the electrical error—five degrees of misalignment is consistent with around nine percent ripple, ten degrees with fifteen to twenty percent, and a worst-case hall-style sector error of thirty electrical degrees can waste half the torque capacity at some rotor positions. The error also shows up as phase-current imbalance, extra heating, and acoustic noise with a signature tied to speed: ripple frequency scales with rotation, which is how it is distinguished from bearing or mechanical defects.",
        "For precision stages the consequences compound. Low-speed jitter from torque ripple limits velocity stability exactly where scanning and metrology applications operate, and it forces the servo loops to be detuned to avoid amplifying the disturbance. Position loops then hunt around the command, encoder interpolation sees irregular motion, and throughput drops because smooth slow moves become impossible. Keeping the total commutation chain—encoder mechanical alignment plus drive electrical offset—inside about ±5 electrical degrees is a reasonable target for demanding motion systems, and the budget should be written into the integration specification rather than discovered at commissioning. How ripple and residual periodic error propagate into servo behavior is treated in the encoder feedback tuning guide, which covers the loop side of the same budget.",
      ],
      links: [
        { label: "Read the encoder feedback tuning guide", href: "/technology/linear-motor-stage-encoder-feedback-tuning-guide/" },
      ],
    },
    {
      heading: "The oscilloscope alignment procedure",
      paragraphs: [
        "Preparation first. Power the encoder from a current-limited supply at its rated voltage and terminate the differential outputs per the datasheet; probe U, V, W, A and B with differential probes or a proper differential front end, keeping grounds clean. Use a 100 MHz-class scope, trigger on the U rising edge, and rotate the shaft slowly and repeatably—by hand for static checks, or with the drive in torque mode at a few RPM with the phase leads disconnected from power for dynamic checks.",
        "Method one is the static six-sector check. Rotate the shaft until the U channel rises, freeze the display, and record the A and B logic states and the AB counter reading. Advance through one full electrical cycle and repeat at every UVW edge: six transitions, each with an expected AB state from the drive's sector table. Convert any mismatch into angle directly—each AB count is 360/(counts per revolution) mechanical degrees, multiplied by the pole-pair count to give electrical degrees. The same pass yields the quality checks: UVW duty cycles near fifty percent, edge spacing near 120 electrical degrees, and clean edges with no chatter at the thresholds.",
        "Method two is the back-EMF comparison, the definitive check of encoder-to-motor electrical angle. Spin the motor with an unpowered drive or a second rotator and scope one phase back-EMF against the U channel: for the standard 120-degree sensor placement, the U rising edge should coincide with the phase back-EMF zero crossing. Repeat for the V and W phases against their own EMFs. Any fixed offset here is the commutation angle error; small residuals can be entered into the drive's commutation offset register, but a large or speed-dependent error points at encoder mounting or stator placement and must be fixed mechanically. Quadrature quality of the A and B channels themselves—phase error and amplitude balance—should be verified in the same session using the Lissajous method described in the quadrature signal tuning guide.",
      ],
      bullets: [
        "Trigger on U rising and record the AB state and count at all six UVW transitions per electrical cycle",
        "Convert count error to electrical degrees with the pole-pair factor before judging pass or fail",
        "Check UVW duty cycle, 120-degree spacing, and edge monotonicity, not just the presence of edges",
        "Verify back-EMF zero crossings against UVW edges before trusting any drive-side offset correction",
      ],
      image: {
        src: "/images/technology/optical-encoder-uvw-commutation-signal-alignment-guide/optical-encoder-uvw-commutation-signal-alignment-guide-detail.webp",
        alt: "Close-up of a dual-channel oscilloscope screen showing UVW commutation edges against AB quadrature traces, with differential probes attached to an encoder breakout board on a motor test bench",
        width: 1600,
        height: 900,
      },
      links: [
        { label: "Read the quadrature Lissajous tuning guide", href: "/technology/encoder-quadrature-lissajous-signal-tuning/" },
        { label: "Read the readhead gain margin guide", href: "/technology/encoder-readhead-gain-margin-adjustment/" },
      ],
    },
    {
      heading: "Factory calibration and field verification",
      paragraphs: [
        "Alignment is established in two stages that must not be confused. At the encoder manufacturer, the UVW mask and code disc are positioned and verified against the ABZ tracks—often with optical datum equipment—and the resulting commutation relation is checked over temperature and recorded with the unit. At the motor or stage integrator, the drive-side electrical zero is finalized: the classic procedure locks the rotor with a known current vector, reads back the encoder position, and writes the commutation offset register. Both numbers together define the delivered alignment, and both belong in the shipment documentation—an unrecorded offset is a baseline lost, and the incoming acceptance test should specifically check that commutation data accompanies the encoder.",
        "Field verification repeats the factory evidence rather than re-deriving it. After any motor swap, encoder replacement, or coupling rework, run the static six-sector check and compare the electrical-degree error against the as-shipped record; then spin at low speed with a clamp-on current probe and compare phase-current ripple against the commissioning baseline. The drive offset register can absorb a few electrical degrees of drift, but it should be treated as a trim, not a repair: a result that differs materially from the factory record means something mechanical moved, and reseating the encoder or correcting the mounting beats compensating for it. Systems built this way—documented factory alignment, sector-table verification on receipt, and ripple comparison after every intervention—keep commutation quality a specification instead of a surprise, which is the operating assumption in precision motion applications where torque ripple is a measured line item.",
      ],
      links: [
        { label: "Read the incoming acceptance test guide", href: "/technology/optical-encoder-incoming-acceptance-test-guide/" },
        { label: "Explore precision motion applications", href: "/applications/precision-motion/" },
      ],
    },
  ],
  conclusionHeading: "Alignment is a measured phase, not a startup ritual.",
  conclusion: [
    "UVW commutation tracks and ABZ incremental signals come from the same code disc but serve different masters: the drive's need for a coarse absolute rotor angle and the servo's need for fine position. Their fixed phase relationship is what converts encoder counts into correctly timed phase currents, and any deviation appears as torque ripple that grows roughly with the sine of the electrical error.",
    "The working discipline is short and repeatable: know the pole-pair count and sector table, verify the six UVW-to-ABZ transitions with a scope, confirm the back-EMF relation before trusting drive-side offsets, and keep the factory-committed alignment on record so field checks compare against evidence instead of memory. Treated as a calibration with a baseline, commutation alignment stays within the few electrical degrees that smooth, quiet, efficient motion requires.",
  ],
  faq: [
    {
      question: "What is the relationship between UVW and ABZ encoder signals?",
      answer:
        "They are separate tracks on the same code disc. ABZ provides high-resolution quadrature position (A, B in 90-degree phase) plus one index pulse Z per revolution. UVW provides three commutation channels spaced 120 electrical degrees apart, repeating once per electrical cycle (360°/pole-pairs of mechanical rotation). When aligned, each UVW edge occurs at a defined ABZ state, and that relationship is what the drive's sector table assumes.",
    },
    {
      question: "How much commutation angle error is acceptable?",
      answer:
        "For demanding motion systems, hold the total chain—encoder mechanical alignment plus drive electrical offset—within about ±5 electrical degrees. Ripple grows roughly with the sine of the error, so five degrees corresponds to roughly nine percent ripple, ten degrees to fifteen to twenty percent. Generic industrial drives with hall-style sensors tolerate up to ±30 electrical degrees because sector resolution is coarse, but precision stages should not plan on that allowance.",
    },
    {
      question: "Can the drive's commutation offset register fix a misaligned encoder?",
      answer:
        "Only within limits. The register trims a few electrical degrees of residual error and records the electrical zero at commissioning. A large error—UVW edges landing in the wrong sectors, or an offset that varies with speed—indicates mechanical misalignment of the encoder or a sector-table mismatch, which should be corrected physically rather than compensated, since compensation hides the root cause and consumes alignment margin.",
    },
    {
      question: "Why does torque ripple from commutation error show up most at low speed?",
      answer:
        "The ripple is periodic with the electrical cycle, so its frequency scales with rotation speed. At low speed the ripple falls within the servo loop's bandwidth and inside human hearing, appearing as speed jitter, cogging, and acoustic noise; at high speed it moves above the loop bandwidth and averages out in the velocity estimate. Low-speed operation is therefore both the symptom location and the standard test condition for verification.",
    },
    {
      question: "What should be re-checked after replacing a motor or encoder?",
      answer:
        "Repeat the static six-sector check—AB state and count at all six UVW transitions per electrical cycle—and compare the computed electrical-degree error against the factory record. Then run a low-speed spin with a current probe and compare phase-current ripple to the commissioning baseline. Re-enter the drive commutation offset only if the mechanical result matches the record; a deviation means reseat and remeasure before compensation.",
    },
  ],
  sources: [
    {
      publisher: "Texas Instruments",
      label: "Texas Instruments — BLDC motor control and commutation application literature",
      href: "https://www.ti.com/motor-drivers/overview.html",
    },
    {
      publisher: "Renishaw",
      label: "Renishaw — incremental optical encoder systems and commutation signal documentation",
      href: "https://www.renishaw.com/en/encoder-systems--11034",
    },
    {
      publisher: "Heidenhain",
      label: "Heidenhain — rotary encoder technical documentation",
      href: "https://www.heidenhain.com/",
    },
    {
      publisher: "Analog Dialogue (Analog Devices)",
      label: "Analog Dialogue — signal chain and measurement technique articles",
      href: "https://www.analog.com/en/resources/analog-dialogue.html",
    },
  ],
};
