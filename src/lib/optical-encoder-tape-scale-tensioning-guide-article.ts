import type { EditorialPage } from "@/lib/editorial-content";

export const opticalEncoderTapeScaleTensioningGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / ENCODER MECHANICAL INTEGRATION",
  title: "Tape Scale Tensioning for Optical Encoders: Getting the Force Right on Long Axes",
  description:
    "A steel tape scale only measures straight when it is pulled straight. This guide explains what the tension specification actually controls, how temperature interacts with tape force, and how to install, tension and verify a tape scale so a long axis measures flat, stable and true across its full stroke.",
  slug: "/technology/optical-encoder-tape-scale-tensioning-guide/",
  publishedAt: "2026-11-08",
  modifiedAt: "2026-11-08",
  primaryKeyword: "encoder tape scale tensioning",
  secondaryKeywords: [
    "steel tape scale encoder",
    "tape scale tension force",
    "linear encoder tape scale installation",
    "tape scale thermal expansion tension",
    "long axis encoder scale mounting",
    "encoder scale tensioning fixture",
  ],
  featuredImage: {
    src: "/images/technology/optical-encoder-tape-scale-tensioning-guide/optical-encoder-tape-scale-tensioning-guide-cover.webp",
    alt: "Technician tensioning a steel tape linear encoder scale on a long machine bed using a tensioning fixture and force gauge",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "A steel tape scale is a thin, flexible measuring standard: unlike a rigid glass scale, it has essentially no bending stiffness of its own, so its geometry is set entirely by how it is held. Tensioning is the act of pulling the tape to a specified force so it lies straight, flat and plane-parallel in the readhead's measuring plane along the whole stroke. Too little tension leaves waviness and sag that the readhead reports as position error and signal-amplitude variation; too much tension stretches the tape permanently, loads the end anchors, and converts every kelvin of temperature change into additional force. The tension value is therefore a calibrated part of the measurement system, defined by the encoder manufacturer for the exact tape cross-section and end-fixing design.",
    "Correct practice is procedural, not intuitive: anchor one end, apply the manufacturer's specified force with a proper tensioning fixture at the documented reference temperature, secure the second end, then verify flatness and signal quality over the full stroke. On substrates whose expansion differs from the tape steel, the tension changes with temperature and the fixing design must be chosen accordingly. An axis that skips verification inherits any tension error as periodic position error, drift, or intermittent signal loss that only appears partway along the travel.",
  ],
  challenge:
    "Tape scales exist because long axes need measuring standards that survive their own weight, shipping and thermal cycling where a brittle glass scale would be impractical or impossible. Yet installation instructions are often reduced to 'tension to specification', and the specification itself lives in a drawing the assembler may never see. The result is a characteristic failure pattern: an axis that measures well near the home position but drifts or loses signal amplitude toward stroke ends as a wavy tape moves through the readhead; a machine whose repeatability changes with temperature because tape tension was set on a cold morning; or a tape that creeps over months because it was pulled past its elastic limit and is slowly relieving that stress. Because the symptoms mimic servo problems, structural issues and contamination, teams tune loops and replace components while the root cause is a few newtons of force that nobody recorded.",
  requirements: [
    { title: "Manufacturer tension specification for the exact configuration", description: "The specified force applies to a defined tape cross-section, end-fitting design and reference temperature; using a generic value from a different product family is a design change, not an assembly detail." },
    { title: "A real tensioning fixture with force indication", description: "Tension must be set with a fixture that measures or positively limits force at the documented reference temperature, not by feel, not by spring deflection guesswork and not with the tape already fixed at both ends." },
    { title: "End-fixing design matched to substrate and temperature range", description: "The anchors must carry the static tension plus any thermally induced force change over the working range without slipping, creeping or over-stressing the tape." },
    { title: "Verification across the full stroke and temperature cycle", description: "Flatness or straightness of the tape, signal amplitude and quadrature quality at multiple positions, and a temperature sweep proving the tension system stays inside the axis error budget." },
  ],
  routes: [
    { label: "CTE mismatch and scale mounting", href: "/technology/optical-encoder-scale-cte-mismatch-mounting-guide/", note: "Thermal interaction between scale and substrate" },
    { label: "Scale material selection", href: "/technology/optical-encoder-scale-material-selection-guide/", note: "When a tape scale is the right substrate choice" },
    { label: "Scale splicing for long strokes", href: "/technology/long-stroke-linear-stage-encoder-scale-splicing-guide/", note: "Beyond single-tape lengths" },
    { label: "Installation alignment errors", href: "/technology/linear-encoder-installation-alignment-errors/", note: "Tilt, gap and offset during mounting" },
  ],
  evidence: [
    "Tension specification sheet for the ordered tape scale: force, tolerance, tape cross-section, reference temperature and end-fitting design",
    "Tensioning record from installation: applied force, instrument used, substrate temperature at the moment of tensioning",
    "Straightness or flatness measurement of the tensioned tape along the full measuring length",
    "Signal amplitude and quadrature (Lissajous) quality recorded at several positions along the stroke, repeated after a temperature cycle",
  ],
  comparisonTable: {
    caption: "Tension conditions and their measurable signatures on a tape-scale axis",
    headers: ["Tension condition", "Mechanical signature", "Encoder symptom", "Correction"],
    rows: [
      ["Correct, per specification", "Tape flat in the measuring plane; anchors carry only the specified static force", "Stable signal amplitude along the whole stroke; no position-correlated periodic error beyond the datasheet", "Record force and temperature in the axis file and re-verify after thermal cycling"],
      ["Under-tensioned", "Visible waviness or sag between fixing points; tape height varies through the readhead", "Signal amplitude dips at certain positions; position error tracking the wave pattern; possible gap alarms", "Re-tension with a force-indicating fixture; increase fixing-point density only per manufacturer tables"],
      ["Over-tensioned", "Tape visibly stretched; anchor hardware loaded; possible local yielding at fixing edges", "Gradual scale-factor (length) error as the tape creeps back; occasional fracture at anchor edges", "Release and re-tension to specification; inspect the tape for permanent set; replace if stretched"],
      ["Correct at install, wrong for temperature", "Tension changes as the substrate expands at a different rate than tape steel", "Tension-dependent drift between cold start and warm soak; signal amplitude variation correlated with room temperature", "Select end-fixing and adhesive scheme rated for the differential; re-verify with a logged thermal cycle"],
      ["Tension set at wrong temperature", "Force correct at the bench value but offset at the reference temperature", "Systematic offset baked in from day one; asymmetric drift around the wrong zero", "Tension at the documented reference temperature with substrate and tape soaked together"],
    ],
  },
  articleSections: [
    {
      heading: "Why tape scales are tensioned at all",
      paragraphs: [
        "A rigid glass scale carries its own geometry: it is thick enough that, once fastened or bonded to a prepared surface, its measuring face stays where it was put. A steel tape scale works differently. At thicknesses of a few tenths of a millimeter, the tape has almost no bending stiffness, so its shape is whatever the fixing system imposes. Tension is the mechanism that turns a floppy strip into a measuring standard: pulled to the specified force between two anchors, the tape straightens, its measuring face settles into a defined plane, and the graduations travel through the readhead's field at a predictable height and angle.",
        "The tension value also serves the thermal design. Steel tape expands and contracts with temperature much like the steel structures it is mounted on, so a tape scale on a machine bed follows the substrate both mechanically and thermally—this is precisely why tape scales dominate long axes on steel and cast structures, where a glass scale would introduce a large differential-expansion error. The tension system must preserve that following behavior without letting the tape go slack when cold or overloaded when hot, which is why the specification is stated as a force at a reference temperature rather than as a tightness that can be judged by hand.",
        "Tape scales therefore sit at the intersection of two existing decisions: the substrate choice covered in the scale material guide, and the thermal pairing covered in the CTE mismatch guide. Tensioning is the mechanical act that makes both of those decisions actually hold on the machine.",
      ],
      links: [
        { label: "Read the scale material selection guide", href: "/technology/optical-encoder-scale-material-selection-guide/" },
        { label: "Read the CTE mismatch and scale mounting guide", href: "/technology/optical-encoder-scale-cte-mismatch-mounting-guide/" },
      ],
    },
    {
      heading: "What the tension specification actually controls",
      paragraphs: [
        "The specified force is sized so the tape's internal stress straightens it without approaching the elastic limit. Below the specification, the tape keeps residual waviness from its coiled storage and shipping form; between fixing points it sags under gravity and moves as a loose membrane whenever the axis accelerates. A readhead looking at a wavy tape sees the graduations pass at varying height and tilt, which shows up first as signal amplitude variation along the stroke and, because the wave pattern is periodic with the fixing spacing, as a position error repeating at that same spatial period.",
        "Above the specification, the failure mode is quieter and slower. Over-tension stretches the tape toward plastic deformation; some of that stretch relieves over weeks and months as creep, appearing as a slow scale-factor error—the axis measures long or short by a growing amount. The end anchors carry the excess force continuously, and the highest stress concentrates at the fixing edges, where over-tensioned tapes eventually develop fatigue cracks. A practical screening rule: any tensioning done without a force-indicating fixture should be treated as unverified, because human judgment cannot distinguish 30 N from 60 N on a steel strip by feel.",
        "The waveform diagnostic matters when commissioning a suspect axis: an error component repeating at the fixing-point spacing points at a tape geometry problem, while an error at the optical pitch of the scale points at signal-side issues instead. The cycle-error separation guide covers how to distinguish these periodic components before anyone starts adjusting the wrong subsystem.",
      ],
      links: [
        { label: "Read the scale pitch cycle error separation guide", href: "/technology/optical-encoder-scale-pitch-cycle-error-separation-guide/" },
        { label: "Read the signal quality troubleshooting guide", href: "/technology/linear-encoder-signal-quality-distortion-troubleshooting-guide/" },
      ],
    },
    {
      heading: "How temperature changes the tension you set",
      paragraphs: [
        "Tension is not set once and preserved; it is a force in a thermal system. On a steel substrate, tape steel and machine steel expand at nearly the same rate, so the distance between anchors grows at the same pace as the tape and the force stays close to its installation value. On an aluminum structure the anchor distance grows roughly twice as fast as the tape, and the tension rises with every kelvin; the end-fixing and adhesive scheme must be selected so that the worst-case hot condition neither over-stresses the tape nor pulls the anchors loose, while the coldest condition leaves the tape taut enough to stay flat.",
        "This is why manufacturers offer different end-fixing families for the same tape: rigid anchors that hold force constant while the geometry absorbs the difference, sliding or compliant ends that let the tape follow the substrate, and intermediate designs. Choosing among them is a thermal calculation, not a parts-bin decision—compute the differential expansion between substrate and tape over the full working range and confirm the fixing design tolerates it. The thermal-drift and warm-up stabilization guide explains how this term combines with the rest of the machine's warm-up behavior in the axis error budget.",
        "Installation temperature completes the picture. A tape tensioned in a cold workshop and specified for 20 °C starts life over-tensioned; a machine commissioned on a hot afternoon starts under-tensioned. Substrate and tape should be soaked together at the documented reference temperature before the force is applied, and the applied force, instrument and substrate temperature recorded in the axis file.",
      ],
      links: [
        { label: "Read the thermal drift and warm-up stabilization guide", href: "/technology/precision-stage-thermal-drift-warm-up-stabilization-guide/" },
        { label: "Read the linear encoder thermal error budget guide", href: "/technology/linear-encoder-thermal-error-budget/" },
      ],
    },
    {
      heading: "Installing and tensioning a tape scale correctly",
      paragraphs: [
        "A correct installation is a fixed sequence. The substrate surface is cleaned and checked for flatness at the tape line; the start anchor is fixed; the tape is fed into the tensioning fixture; and the specified force is applied and confirmed with the fixture's indication at the reference temperature. Only then is the second anchor secured and any intermediate fixing or bonding completed per the manufacturer's spacing tables. Tensioning with both ends already fixed, or tightening anchors while guessing at force, inverts the procedure and makes the specification unenforceable.",
        "Two adjacent disciplines belong to the same operation. The tape must also be aligned: its measuring face parallel to the guide motion within the specified tolerances for tilt, offset and gap, because a perfectly tensioned tape at the wrong angle produces the same cosine and Abbe-type errors as any other misaligned scale. And the fixing pattern itself must respect the manufacturer's tables—fixing-point spacing bounds the sag and wave amplitude between points, so deviating from it is a design change with a predictable error consequence. The installation alignment and mechanical tolerance guides cover these checks in detail.",
        "Finally, the installation is a documented one: force applied, instrument used, substrate temperature, fixture identification, and the tensioning date belong in the axis file next to the alignment measurements. When a tape-scale axis misbehaves two years later, that record is the difference between a five-minute diagnosis and a week of speculation.",
      ],
      links: [
        { label: "Read the installation alignment errors guide", href: "/technology/linear-encoder-installation-alignment-errors/" },
        { label: "Read the installation mechanical tolerance guide", href: "/technology/optical-encoder-installation-mechanical-tolerance-guide/" },
      ],
    },
    {
      heading: "Verifying tension and flatness over the full stroke",
      paragraphs: [
        "Verification starts with geometry: measure the straightness or flatness of the tensioned tape along the full measuring length, using a dial indicator on the measuring face or an optical straightness reference. A tape that waves between fixing points will show it immediately, and the spatial period of the measured deviation identifies whether the issue is fixing spacing, substrate flatness or insufficient force.",
        "Then verify the signal. Scan the axis through the full stroke and record signal amplitude, offset and quadrature (Lissajous) quality at intervals; a tension or flatness problem appears as amplitude variation correlated with position, worst at the midpoints between fixing points. Follow with a position accuracy check against an independent length reference—a laser interferometer on shorter axes, or a step-wise comparison on long ones—to confirm the installed scale's accuracy grade with the tension system in place. The interferometer verification guide defines the setup and compensation terms for that test.",
        "Close with temperature, because tension is a thermal quantity: run the axis through a representative warm-up and cool-down while logging position error and substrate temperature. Drift that reverses with temperature indicates the fixing design is fighting the substrate's expansion; amplitude variation that tracks room temperature indicates the force is migrating across the working range. An axis that passes all three checks owns its tension system explicitly; one that skips them will rediscover the physics later, at commissioning delay or in the field.",
      ],
      links: [
        { label: "Read the laser interferometer verification guide", href: "/technology/linear-stage-accuracy-laser-interferometer-verification-guide/" },
        { label: "Explore the precision motion application page", href: "/applications/precision-motion/" },
      ],
    },
  ],
  midCta: {
    eyebrow: "LONG-AXIS FEEDBACK",
    title: "Specifying a tape scale for a long axis—or recovering one that drifts?",
    description:
      "Send your travel, substrate material, working temperature range and end-fixing constraints—SENFU can help define the tension specification, fixing design and verification test that keep the tape flat and the axis inside its error budget.",
    label: "Discuss a tape scale installation",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Tension is part of the measurement, not part of the assembly.",
  conclusion: [
    "On a tape-scale axis, the specified tension is as much a part of the measurement system as the scale's accuracy grade: it sets the geometry the readhead sees, it interacts with the substrate's thermal expansion, and its errors appear as position-correlated periodic error, creeping scale-factor error or temperature-dependent signal variation. None of these can be tuned out in the servo loop, because the encoder is faithfully reporting what the tape is doing.",
    "Treat tensioning as a calibrated operation: use the manufacturer's specification for the exact configuration, apply the force with an indicating fixture at the documented reference temperature, select end fixings for the full thermal range, and verify flatness, signal quality and thermal behavior across the entire stroke. Axes installed this way turn a flexible strip of steel into a traceable measuring standard; axes installed by feel carry an unrecorded force that will surface as someone else's debugging problem.",
  ],
  faq: [
    {
      question: "Can I tension a tape scale by feel or by eye instead of using a force fixture?",
      answer:
        "No. Human judgment cannot reliably distinguish the specified force from two or three times that value on a steel strip, and the failure modes are asymmetric: under-tension leaves waviness and position error, over-tension stretches the tape and loads the anchors. A force-indicating fixture at the documented reference temperature is the only way the specification is actually enforced.",
    },
    {
      question: "Why does my tape-scale axis lose signal amplitude partway along the stroke?",
      answer:
        "The most common cause is tape geometry: an under-tensioned tape waves or sags between fixing points, so the graduations pass through the readhead at varying height and tilt. The amplitude dips typically repeat at the fixing-point spacing. Verify tape flatness and re-tension to specification before adjusting gain or suspecting electronics.",
    },
    {
      question: "What happens if a tape scale is over-tensioned?",
      answer:
        "Over-tension stresses the tape toward its elastic limit. Some stretch relieves as creep over months, appearing as a growing scale-factor error, while the anchors carry the excess force continuously and stress concentrates at the fixing edges, where fatigue cracks eventually form. Release, re-tension to specification, and replace the tape if it shows permanent set.",
    },
    {
      question: "Does temperature change the tension after installation?",
      answer:
        "It depends on the pairing. On a steel substrate, tape and substrate expand at nearly the same rate and the force stays close to its installation value. On faster-expanding substrates such as aluminum, each kelvin of temperature rise increases the anchor distance more than the tape length, raising the tension. The end-fixing design must be selected for the differential over the full working range.",
    },
    {
      question: "At what temperature should tape scale tensioning be done?",
      answer:
        "At the manufacturer's documented reference temperature, with the substrate and tape soaked together long enough to equalize. Tensioning a cold morning bench and zeroing a warm afternoon machine leaves the force offset from specification and the mechanical zero displaced; both errors are then frozen into the axis from day one.",
    },
    {
      question: "When is a tape scale the right choice instead of a glass scale?",
      answer:
        "Tape scales suit long strokes where a rigid scale is impractical, axes on steel or cast structures where tape steel closely matches the substrate's expansion, and machines that see shock, vibration or thermal cycling a brittle scale would not survive. The scale material selection guide compares the substrate families against these criteria.",
    },
  ],
  sources: [
    {
      publisher: "NIST",
      label: "NIST — dimensional metrology and materials reference data",
      href: "https://www.nist.gov/",
    },
    {
      publisher: "ISO",
      label: "ISO 230 series — test code for machine tools, position and thermal effects",
      href: "https://www.iso.org/",
    },
    {
      publisher: "ASPE",
      label: "American Society for Precision Engineering — precision machine design and metrology resources",
      href: "https://aspe.net/",
    },
    {
      publisher: "SPIE",
      label: "SPIE — publications on precision instrumentation and optical metrology",
      href: "https://spie.org/",
    },
  ],
};
