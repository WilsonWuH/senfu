import type { EditorialPage } from "@/lib/editorial-content";

export const opticalEncoderRotaryVsLinearScaleThetaStageGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / THETA STAGE FEEDBACK",
  title: "Rotary Encoder vs Linear Scale for Theta Stages: Choosing Feedback for Rotation Axes",
  description: "A theta stage can be measured by an angular encoder at the rotation axis or by a linear scale arranged at the working radius. This guide compares the two feedback strategies across geometry, error sources, resolution and installation, and shows how to match the choice to the machine.",
  slug: "/technology/optical-encoder-rotary-vs-linear-scale-theta-stage-guide/",
  publishedAt: "2026-11-14",
  modifiedAt: "2026-11-14",
  primaryKeyword: "theta stage encoder selection",
  secondaryKeywords: [
    "rotary encoder vs linear scale",
    "theta stage position feedback",
    "angular encoder ring scale",
    "linear scale arc measurement",
    "rotation axis metrology",
    "rotary stage feedback selection",
  ],
  featuredImage: {
    src: "/images/technology/optical-encoder-rotary-vs-linear-scale-theta-stage-guide/optical-encoder-rotary-vs-linear-scale-theta-stage-guide-cover.webp",
    alt: "Precision rotary theta stage on a granite metrology table with a ring encoder scale around its rotation axis and an inspection microscope nearby",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "An angular encoder mounted at the rotation axis measures the angle directly, independently of any radius, and its dominant error term is axis eccentricity and tilt. A linear scale arranged along an arc or tangent at the working radius measures displacement first and converts it to angle by dividing by the radius, which moves the sensitivity to radius calibration, scale alignment and where the process actually happens relative to the measurement point.",
    "Neither strategy is universally better. Use an angular encoder when space around the axis is available, when the process tolerance is defined in angle, and when eccentricity can be engineered or dual-readhead compensated. Prefer a linear scale at the working radius when the specification lives at a large radius, when the axis line is inaccessible or noisy, or when the application needs position rather than angle. State the working radius, angle target and error budget first, and let the geometry decide the feedback.",
  ],
  challenge: "Theta stages are specified in angle, but the process usually happens at a radius, and that mismatch is where most feedback selections go wrong. A rotation stage buyer comparing an axis-mounted angular encoder against a linear scale at the periphery is really comparing two different measurement geometries: one measures the rotation itself and assumes the load rotates perfectly with the axis, the other samples displacement at one radius and assumes the radius is known and constant. Datasheets rarely help, because angular encoders quote arc-seconds while linear scales quote micrometres per metre, and the two figures cannot be compared until a radius and an error budget are declared. Axis eccentricity, wobble, radius uncertainty, cosine error and Abbe-like offsets between the measurement plane and the process plane each change sides depending on the chosen geometry. The confusion is usually discovered late, when a stage that reads 2 arc-seconds on the encoder delivers ten times that at the wafer edge, or when an arc-mounted scale cannot follow the thermal growth of the rotating structure. The fix is to treat feedback selection as a geometry decision made from the error budget, not as a component choice made from two catalogues.",
  requirements: [
    { title: "Declared working radius", description: "State the radius at which the process tolerance is defined, so angular and linear feedback figures can be converted and compared on the same terms." },
    { title: "Angle specification at the process", description: "Define whether the requirement is encoder angle, workpiece angle at a radius, or position along an arc, and which metrology will verify it." },
    { title: "Axis quality data", description: "Obtain eccentricity, axial and radial wobble figures for the bearing and axis, because their effect differs fundamentally between the two feedback strategies." },
    { title: "Installation and envelope evidence", description: "Confirm space at the axis for a ring or disc, space at the periphery for an arc scale, readhead access and the thermal behaviour of each mounting location." },
  ],
  routes: [
    { label: "Optical encoder range", href: "/optical-encoders/", note: "Compare linear and angular configurations" },
    { label: "Axis eccentricity error", href: "/technology/angular-encoder-axis-eccentricity-error-guide/", note: "The dominant axis-mounted error term" },
    { label: "Angular accuracy verification", href: "/technology/angular-encoder-accuracy-verification-protocol/", note: "Verify angular performance on the machine" },
    { label: "Selection review", href: "/contact/#application-form", note: "Send radius, angle target and error budget" },
  ],
  evidence: [
    "Working radius with its tolerance and temperature behaviour, and the plane in which the process tolerance is defined",
    "Encoder angle accuracy and resolution, and the same figures converted to micrometres at the declared radius",
    "Axis eccentricity and wobble data for the bearing system, with the compensation or dual-readhead plan if axis mounting is chosen",
    "Scale accuracy and alignment plan for the arc or tangent installation, including the radius calibration method",
    "Test data showing angle or arc-position error measured at the process radius, not only at the encoder",
  ],
  comparisonTable: {
    caption: "Angular encoder at the axis versus linear scale at the working radius",
    headers: ["Decision factor", "Angular (ring) encoder at the axis", "Linear scale at the working radius"],
    rows: [
      ["Measured quantity", "Angle directly, at the rotation axis, independent of radius", "Arc or tangent displacement, converted to angle by the calibrated radius"],
      ["Dominant error term", "Axis eccentricity, tilt and wobble between scale centre and rotation axis", "Radius calibration error, scale alignment and cosine error of the arc arrangement"],
      ["Eccentricity sensitivity", "High: a ring reads the true axis motion and inherits bearing geometry error", "Reduced at large radius: axis motion appears divided by the radius at the periphery"],
      ["Process-plane fidelity", "Depends on the load rotating rigidly with the axis; Abbe-like offsets at the process radius appear in full", "Measures where the process is, if the scale lies in the process plane at the process radius"],
      ["Resolution behaviour", "Arc-second resolution is radius-independent", "Linear resolution divided by radius; large radii improve the angular equivalent"],
      ["Mechanical demands", "Space and perpendicularity at the axis; ring mounting concentricity", "Straight, stable arc or tangent path at the periphery; larger scale length and envelope"],
    ],
  },
  articleSections: [
    {
      heading: "Two places to measure one rotation",
      paragraphs: [
        "A theta stage can only rotate, yet the feedback can be placed in two very different locations. The first is at the rotation axis itself: a ring or disc scale concentric with the bearing measures the angle directly, and the reading is the same whether the payload sits close to the axis or at the edge of a large platen. The second is at the working radius: a linear scale arranged along an arc, or a short tangent scale read at a known radius, samples displacement where the process happens and converts it to angle afterwards.",
        "The two readings are not interchangeable. The axis-mounted encoder reports how the axis rotated; the peripheral scale reports how a specific point on the rotating structure moved. If the structure is perfectly rigid and the axis perfect, the two agree exactly. In every real machine they differ, because the axis is not a geometric line and the structure is not infinitely stiff. Choosing between them is therefore choosing which errors the machine will carry, and that choice belongs to the error budget rather than to preference or price.",
      ],
      links: [
        { label: "Review the optical encoder family", href: "/optical-encoders/" },
        { label: "Read the resolution vs accuracy guide", href: "/technology/encoder-resolution-vs-accuracy/" },
      ],
    },
    {
      heading: "What the axis-mounted angular encoder measures",
      paragraphs: [
        "An angular encoder measures the angle between the scale ring and the readhead, so its reading is immune to anything happening away from the axis. That immunity is its strength: payload changes, platen deflection and peripheral thermal growth do not enter the feedback, and the servo loop stays clean at high acceleration. Resolution in arc-seconds or nanoradians is delivered identically for any stage size, and the same ring can serve axes from a compact goniometer-like stage to a large index table.",
        "The weakness is inherited from the same mounting position. The ring scale must be concentric and perpendicular to the true rotation axis, and any offset between scale centre and bearing centre appears directly as a once-per-revolution angle error. For a ring of radius R carrying an eccentricity e, the first-order error reaches approximately e divided by R radians, so a 10 micrometre offset on a 40 millimetre ring is worth about 50 arc-seconds before any compensation. Bearings also contribute wobble and walk that the encoder faithfully reports. These effects can be calibrated, and dual readheads mounted on opposite sides of the ring can cancel the first harmonic, but they must be measured and engineered rather than assumed away.",
      ],
      links: [
        { label: "Read the axis eccentricity error guide", href: "/technology/angular-encoder-axis-eccentricity-error-guide/" },
        { label: "See the angular accuracy verification protocol", href: "/technology/angular-encoder-accuracy-verification-protocol/" },
      ],
    },
    {
      heading: "What a linear scale at the working radius measures",
      paragraphs: [
        "A linear scale placed along the periphery measures displacement at a chosen radius, and the angle follows from dividing that displacement by the radius. This geometry has an attractive property: the reading tracks the point where the work is done. If a lithography or inspection process acts at a 150 millimetre radius and the scale sits in the same plane at that radius, motion of the structure between axis and periphery is captured instead of ignored, and Abbe-like offsets between the measurement plane and the process plane shrink dramatically.",
        "The costs are geometric and mechanical. Every nanometre of radius error becomes angular error: a 0.1 millimetre uncertainty in a 150 millimetre radius is already about 0.07 percent, comparable to hundreds of arc-seconds over a full revolution, so the radius must be calibrated and held across temperature. Alignment matters in two planes, because tilt of the scale path introduces a cosine error that grows with the square of the misalignment. The scale must be straight, flat and thermally stable along a large arc, and its length grows with radius, which drives envelope, cost and, on small stages, the practical limit of the approach. Where a full arc is impossible, a tangent scale read over a limited travel can serve, but then the conversion holds only over the calibrated segment.",
      ],
      image: {
        src: "/images/technology/optical-encoder-rotary-vs-linear-scale-theta-stage-guide/optical-encoder-rotary-vs-linear-scale-theta-stage-guide-detail.webp",
        alt: "Engineer aligning a curved linear encoder scale strip along the periphery of a rotary stage using a dial indicator on a granite surface plate",
        width: 1600,
        height: 900,
      },
    },
    {
      heading: "The geometry errors that decide the choice",
      paragraphs: [
        "The comparison reduces to three error families. Eccentricity and wobble dominate the axis-mounted strategy and shrink in importance at the periphery, where the same axis motion appears divided by the working radius. Radius calibration and scale alignment dominate the peripheral strategy and do not exist for the axis-mounted one. Process-plane offsets sit between the two: they punish the axis-mounted encoder when the load deflects or the structure does not rotate as a rigid body, and they punish the peripheral scale only when the scale plane and the process plane are separated.",
        "A practical way to decide is to compute both budgets at the declared working radius. Convert the angular encoder error, including uncompensated eccentricity, into micrometres at the radius, and convert the linear scale error, including radius and cosine terms, into arc-seconds. Compare each against the process tolerance and choose the smaller budget, including the cost of the compensation each strategy needs. On stiff small-radius stages the ring encoder usually wins; on large-radius platens, wafer chucks and index tables whose specifications are written at the edge, the peripheral measurement often does.",
      ],
      bullets: [
        "Axis-mounted error grows from eccentricity and wobble; cancel or calibrate them",
        "Peripheral error grows from radius, cosine and alignment terms; calibrate the radius",
        "Compare both budgets in the same units at the process radius",
        "Include compensation hardware and calibration effort in the comparison",
      ],
    },
    {
      heading: "A selection workflow for theta stage feedback",
      paragraphs: [
        "Start from the specification, not the catalogue. Write down the radius at which the tolerance is defined, the angle or arc-position target, the travel, the maximum speed and acceleration, and the temperature range. Then measure or request the axis quality data: eccentricity, radial and axial wobble of the bearing system. With these numbers, both feedback strategies can be budgeted honestly, and the choice becomes a short calculation rather than a debate.",
        "Finish the selection with the machine reality. Check whether space, perpendicularity and mounting access exist at the axis for a ring, and whether a straight, stable arc path exists at the periphery. Confirm the homing and reference strategy for the chosen architecture, since reference marks sit at different places in the two geometries. Whatever is chosen, verify it at the process radius with an independent angular metrology method at acceptance, so the certificate and the process specification finally speak the same language.",
      ],
      bullets: [
        "Declare working radius, angle target, travel and speed first",
        "Obtain bearing eccentricity and wobble data before comparing feedbacks",
        "Budget both strategies in the same units at the process radius",
        "Define reference-mark and homing behaviour for the chosen architecture",
        "Verify angular performance at the process radius at acceptance",
      ],
      links: [
        { label: "Plan the reference and homing strategy", href: "/technology/optical-encoder-index-pulse-homing-reference-guide/" },
        { label: "See the precision motion application", href: "/applications/precision-motion/" },
      ],
    },
  ],
  conclusion: [
    "Rotary versus linear feedback on a theta stage is a geometry decision, not a component preference. The axis-mounted angular encoder measures angle where it is generated and carries the bearing geometry in its reading; the linear scale at the working radius measures where the process acts and carries the radius calibration in its reading. Declare the working radius and the angle target, budget both strategies in the same units, and choose the one whose dominant errors can be engineered down for this machine. Verified at the process radius, either choice becomes defensible; chosen from two catalogues, neither is.",
  ],
  faq: [
    {
      question: "Which is more accurate for a theta stage, an angular encoder or a linear scale?",
      answer: "Neither is intrinsically more accurate. The axis-mounted encoder inherits eccentricity and wobble from the bearing, while the peripheral linear scale inherits radius calibration and alignment error. Compare both error budgets, converted to the same units at the declared working radius, and choose the smaller one.",
    },
    {
      question: "How do I convert a linear scale error into an angular error?",
      answer: "Divide the linear displacement error by the calibrated radius to obtain radians, then convert to arc-seconds. Radius uncertainty enters with the same sensitivity, so a radius error of 0.1 mm on a 150 mm stage contributes roughly proportional angular error across the travel and must be calibrated and thermally controlled.",
    },
    {
      question: "Can dual readheads help an axis-mounted ring encoder?",
      answer: "Yes. Two readheads mounted diametrically opposite on the ring sample the eccentricity signal in opposite phase, so the dominant once-per-revolution error harmonic can be cancelled electronically. Higher harmonics from bearing wobble remain and must be calibrated if the process needs them.",
    },
    {
      question: "When does the peripheral linear scale strategy clearly win?",
      answer: "When the specification is written at a large radius and the structure between axis and periphery may deflect or drift, such as large wafer chucks, index tables or inspection platens. Measuring in the process plane captures that motion instead of assuming the load rotates rigidly with the axis.",
    },
    {
      question: "Does the radius need recalibration after service or temperature change?",
      answer: "The radius enters the angle conversion directly, so any event that moves the scale path or changes its temperature relative to the rotation axis shifts the calibration. Record the radius, its temperature behaviour and its calibration method in the machine file, and re-verify after mechanical service or significant thermal events.",
    },
  ],
  sources: [
    { publisher: "NIST", label: "Angle and rotary stage metrology reference data", href: "https://www.nist.gov/" },
    { publisher: "PTB", label: "Angular metrology and small-angle measurement guidance", href: "https://www.ptb.de/" },
    { publisher: "SENFU", label: "Optical encoder product and application documentation", href: "https://senfuprecision.com/optical-encoders/" },
  ],
};
