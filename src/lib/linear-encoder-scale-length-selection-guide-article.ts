import type { EditorialPage } from "@/lib/editorial-content";

export const linearEncoderScaleLengthSelectionGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / ENCODER SIZING",
  title: "How to Select Linear Encoder Scale Length: Travel, Dead Travel, Accuracy Grades and the Mechanical Cost of Every Extra Metre",
  description:
    "Scale length looks like the simplest line in an encoder order code, yet it drives accuracy grade availability, thermal error terms, mounting straightness requirements and cost more than any other single choice. This guide walks through how travel, dead travel, grade-per-length and scale material interact, and how to size a scale that matches the axis instead of overpaying for length the machine cannot exploit.",
  slug: "/technology/linear-encoder-scale-length-selection-guide/",
  publishedAt: "2026-11-24",
  modifiedAt: "2026-11-24",
  primaryKeyword: "linear encoder scale length",
  secondaryKeywords: [
    "encoder scale length vs travel",
    "dead travel linear encoder",
    "encoder accuracy grade per metre",
    "linear scale thermal expansion",
    "encoder scale straightness mounting",
    "measuring length selection",
  ],
  featuredImage: {
    src: "/images/technology/linear-encoder-scale-length-selection-guide/linear-encoder-scale-length-selection-guide-cover.webp",
    alt: "A long linear optical encoder scale being laid out beside the travel bed of a precision stage on an engineering workbench, with a readhead, calipers and a dimensioned layout drawing",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Linear encoder scale length is not travel plus a margin—it is a systems decision that sets which accuracy grades are available at which price, how much thermal expansion error the axis inherits, how straight the mounting surface must be machined, and how much dead travel the machine must carry at each end. A scale that is too short starves the axis of measuring range exactly where end-of-travel overhang and reader offsets consume it; a scale that is too long imports per-metre accuracy terms the process never needed, doubles the straightness burden on the substrate, and adds thermal length that expands and contracts under the readhead whether or not the servo cares.",
    "The workable sizing procedure is four steps. First, establish required measuring range from stage travel plus end-of-travel overhang, readhead window width and any reference-mark or limit offsets. Second, check grade availability against that length: accuracy grades are quoted per grade over defined measuring lengths, and the tightest grades are often reserved for shorter lengths or carry steeper per-metre terms. Third, evaluate the thermal equation—scale material, substrate material and operating temperature range—because the error contribution grows with length. Fourth, cost the mechanical consequences: straightness tolerance, mounting surface quality and installation effort all scale with length. Only then compare prices, because at that point the quotes describe the same machine requirement.",
  ],
  challenge:
    "Scale length is usually decided by whoever fills in the order code, often with a heuristic—'travel plus twenty percent'—inherited from a previous machine. The failure modes run in both directions. Undersized scales are discovered late: commissioning reveals that the readhead loses signal before the mechanical stop, or that the reference mark sits inside the zone the process needs, and the fix is a re-order with weeks of slip. Oversized scales fail more quietly: the quoted grade applies over a length the axis never traverses, but the per-metre term, the thermal expansion and the straightness requirement of the full scale are all paid anyway, and the axis ends up less accurate than a shorter scale would have been on the same machine. Between the two sits a subtler trap: a supplier quotes a tight grade for a long scale, the buyer accepts, and nobody checks that the machine's mounting surface can hold the straightness the grade presumes. The stage then measures its own mounting errors, and the grade on the box was never the limiting term.",
  requirements: [
    { title: "Measuring range derived from the machine, not the catalogue", description: "Travel plus end-of-travel overhang, readhead measuring window, reference-mark position and limit-switch offsets are summed explicitly, so the ordered length covers every position the head must physically read." },
    { title: "Grade availability checked per length", description: "Accuracy grades are evaluated against the actual selected length—grade tiers, per-metre terms and short-period components are recorded for the exact configuration quoted, not assumed constant across lengths." },
    { title: "Thermal equation solved for the length", description: "Scale material, machine substrate and operating temperature range are combined into an expected thermal contribution over the selected length, and the mounting scheme that manages it is specified." },
    { title: "Mechanical consequences costed", description: "Straightness tolerance, mounting-surface finish, splicing or single-piece constraints, and installation effort are carried as selection criteria, because every extra metre of scale adds metre-proportional mechanical demands." },
  ],
  routes: [
    { label: "Scale material selection", href: "/technology/optical-encoder-scale-material-selection-guide/", note: "Glass, steel tape and ceramic substrates" },
    { label: "Installation alignment errors", href: "/technology/linear-encoder-installation-alignment-errors/", note: "Mounting straightness and alignment budgets" },
    { label: "Error budget allocation", href: "/technology/precision-stage-error-budget-allocation-guide/", note: "Placing scale terms in the axis budget" },
    { label: "Application review", href: "/contact/#application-form", note: "Sizing a scale against your axis travel" },
  ],
  evidence: [
    "Travel and overhang calculation showing required measuring range, readhead window width, reference-mark and limit offsets for the axis in question",
    "Supplier confirmation of grade availability and per-metre terms for the exact scale length and material configuration quoted",
    "Thermal calculation combining scale and substrate CTEs across the operating temperature range over the selected length",
    "Mounting-surface straightness measurement along the full scale length compared against the installation tolerance the grade presumes",
  ],
  comparisonTable: {
    caption: "What scale length changes on the same axis, and where the decision goes wrong",
    headers: ["Dimension of the choice", "Shorter scale buys", "Longer scale costs", "Common misreading"],
    rows: [
      ["Measuring range", "Nothing—range is a requirement, set by travel, overhang and head window", "Range beyond travel is dead length the servo never uses", "Treating 'travel plus 20%' as a spec rather than deriving it from the machine"],
      ["Accuracy grade", "Tightest grades concentrate in shorter lengths; per-metre terms apply over less length", "Grade tiers may step down or steepen with length; per-metre error integrates over the whole travel", "Reading a headline grade as constant across every offered length"],
      ["Thermal behavior", "Less scale length expanding under the head; smaller mismatch term", "Error from CTE mismatch grows linearly with length and temperature span", "Judging thermal error from a short sample and extrapolating to long scales"],
      ["Mechanics", "Easier straightness, smaller mounting-surface demand, simpler handling", "Straightness tolerance, surface finish and installation effort scale with length; long scales may need splicing", "Assuming the machine bed that holds a 200 mm scale flat will hold 1 m equally well"],
      ["Cost & delivery", "Lower scale cost, shorter lead times", "Price and lead time step up with length, sometimes discontinuously at splicing thresholds", "Comparing quotes that describe different lengths and grades as if equivalent"],
    ],
  },
  articleSections: [
    {
      heading: "Deriving measuring range: travel, overhang and the readhead window",
      paragraphs: [
        "The starting point for scale length is a sum, not a multiplier. Required measuring range equals stage travel, plus the end-of-travel overhang the machine layout imposes—the distance the head travels beyond the usable work zone at each end—plus the width of the readhead's own measuring window, because the reported position is valid only while the full grating field is engaged. Add the offsets for anything else mounted along the scale: reference-mark or index position, limit-switch track, and any margin the controls engineer wants before soft limits become hard signal loss. Every one of these is a physical length the head must cross with signal intact. A scale ordered to the bare travel figure will be discovered short during commissioning, usually on the day the axis first drives to its end stop and the position reading dies before the mechanical limit does.",
        "The sum explains why scale length is a machine-layout decision rather than an encoder parameter. Where the overhang lands depends on how the stage homes, where the reference mark sits relative to the datum the process actually uses, and whether hard stops sit inside or outside the measured span. Machines that home against a single end can concentrate margin at one side; machines that use a center-referenced datum need signal at both extremes. Sketching the full motion envelope—including the overshoot of the servo at maximum velocity and the deceleration distance before a hard stop—converts scale length from a guess into a requirement that survives commissioning. It also exposes the honest minimum: any length beyond that envelope is paid for in grade, thermal and mechanical terms without buying a single additional micron of usable measurement.",
      ],
      links: [
        { label: "Read the reference mark and datum strategies guide", href: "/technology/optical-encoder-reference-mark-datum-strategies-guide/" },
      ],
    },
    {
      heading: "Grades per length: how accuracy scales with the span you order",
      paragraphs: [
        "Scale accuracy is quoted as a grade over a defined measuring length, and the relationship between grade and length is structural: the tightest grades are typically offered over shorter spans, while longer scales carry a per-metre term that integrates over the full travel. A ±1 µm figure over 220 mm and a ±1 µm/m term over 1 m are different commitments—the first caps deviation within the span, the second grows with every metre the axis traverses. When sizing, the grade must be read for the exact length being ordered: suppliers tier their grades by length, and the grade a shorter product line offers may simply be unavailable, or available only with a steeper per-metre component, once the length passes a threshold. Quoting a grade without the length it applies to is quoting nothing.",
        "The second length-dependent term is the short-period, or per-cycle, error: the deviation that repeats every signal period, which the per-metre grade does not describe. On short, high-resolution axes, a few millimetres of motion can cross several signal cycles and the short-period term can dominate; on long travels the per-metre term dominates. Length selection therefore decides which error term the process will actually feel. Sizing the scale to the derived measuring range—and no longer—keeps both terms as small as the grade structure allows. Ordering length the axis never measures imports the per-metre integration without buying any benefit, and it can push the configuration across a grade threshold that costs real accuracy headroom on the axis.",
      ],
      links: [
        { label: "Read the scale pitch and cycle error separation guide", href: "/technology/optical-encoder-scale-pitch-cycle-error-separation-guide/" },
      ],
    },
    {
      heading: "Thermal terms: every extra metre expands under the readhead",
      paragraphs: [
        "Thermal error in a linear encoder is a length-scaled phenomenon. The position the readhead reports is referenced to the scale's graduations, and the scale's physical length changes with temperature according to its coefficient of thermal expansion; meanwhile the machine substrate—steel, granite, aluminum, invar—expands at its own rate. The difference between the two CTEs, multiplied by the temperature span and by the scale length, is the thermal contribution to position error. Over 200 mm and a 5 °C span, a mismatch of a few ppm/°C yields hundred-nanometer-class deviations; over a metre, the same mismatch yields microns. This is why scale length and scale material are one decision, not two: the substrate choice that is benign at 200 mm can dominate the error budget at 1 m, and vice versa.",
        "The practical consequence is that long scales demand an explicit thermal strategy rather than a datasheet footnote. Options include matching scale material to the machine substrate so both grow together, mounting schemes that decouple the scale from substrate distortion while still coupling it thermally, and operating-temperature control that shrinks the span the mismatch acts over. None of these removes the length from the equation; they only manage its coefficients. The sizing stage is where the strategy is cheapest: computing the expected thermal term for the derived measuring range, comparing it against the process tolerance, and stepping the material or mounting scheme only if the number demands it. Axes that skip this step discover the term later as a drift they cannot attribute—position error that tracks the room's temperature and grows with every metre of scale they ordered.",
      ],
      image: {
        src: "/images/technology/linear-encoder-scale-length-selection-guide/linear-encoder-scale-length-selection-guide-detail.webp",
        alt: "Close-up of a long glass linear encoder scale clamped on a steel stage bed with a temperature probe and dial indicators arranged along its length during a thermal evaluation",
        width: 1600,
        height: 900,
      },
      links: [
        { label: "Read the scale CTE mismatch mounting guide", href: "/technology/optical-encoder-scale-cte-mismatch-mounting-guide/" },
        { label: "Read the scale material selection guide", href: "/technology/optical-encoder-scale-material-selection-guide/" },
      ],
    },
    {
      heading: "The mechanical bill: straightness, mounting surfaces and dead length",
      paragraphs: [
        "Every grade presumes an installation: the scale is graduated straight, and the accuracy it delivers on the machine depends on how straight the mounting surface holds it. That burden scales with length. A machining tolerance that is routine across a 200 mm pocket becomes a genuine metrology task across a metre, and long scales must either be mounted on surfaces finished to the corresponding straightness or be installed with incremental alignment against an indicator along the full span. Splicing—joining scale segments into long travels—moves the problem again: each joint is a local discontinuity that must be phased within a fraction of the budget, and the spliced assembly inherits cumulative alignment demands that a single-piece scale avoids. This is the machinery-side cost of length that order-code heuristics never surface.",
        "Dead length deserves equal billing. Scale beyond the derived measuring range—length the head crosses only during homing, overshoot or end-of-travel approach—is still full scale in every other respect: it carries grade structure, it expands thermally, and its mounting surface must meet the same straightness tolerance. Machines that carry half a metre of unused scale for a process that measures 100 mm are paying accuracy, thermal and mechanical costs for a region the workpiece never occupies. Trimming dead length is often the cheapest accuracy improvement available on an existing design, because it shrinks every length-proportional term at once. For new designs, the layout work in the first section—overhang, head window, reference position—is exactly what prevents dead length from accumulating by default.",
      ],
      links: [
        { label: "Read the installation alignment errors guide", href: "/technology/linear-encoder-installation-alignment-errors/" },
        { label: "Read the air gap and clearance setup guide", href: "/technology/optical-encoder-air-gap-clearance-setup-guide/" },
      ],
    },
    {
      heading: "The sizing procedure: four checks before the order code is filled in",
      paragraphs: [
        "A disciplined sizing sequence takes an hour and removes every failure mode described above. First, derive the measuring range: sum travel, end-of-travel overhang, readhead window width, reference-mark and limit offsets, and servo overshoot margin at maximum velocity. Second, check grade structure for that length against supplier data: record the grade tier, the per-metre term and the short-period behavior for the exact length and material being quoted, and reject configurations whose grade is unknown at the ordered span. Third, solve the thermal equation: scale CTE versus substrate CTE across the real operating temperature range, multiplied by the derived length, compared against the process tolerance—escalate material or mounting strategy only when the number demands it. Fourth, cost the mechanics: straightness tolerance along the full span, mounting-surface finish, splicing constraints and installation effort.",
        "Only after those four checks do the quotes describe the same requirement, and only then is a price comparison meaningful. The sequence also produces the paper trail a build needs: the range derivation for the mechanical engineer, the grade-and-length confirmation for purchasing, the thermal calculation for the error budget, and the straightness callout for the machining drawing. Run the same sequence when an axis is redesigned—travel extensions and substrate changes silently invalidate scale-length decisions made years earlier. Teams that treat scale length as a derived quantity instead of a catalogue dimension end up with axes whose feedback covers exactly the motion the process performs, whose grade matches the span actually measured, and whose error budget contains no term bought by accident.",
      ],
      links: [
        { label: "Read the error budget allocation guide", href: "/technology/precision-stage-error-budget-allocation-guide/" },
        { label: "Review the precision motion application page", href: "/applications/precision-motion/" },
      ],
    },
  ],
  midCta: {
    eyebrow: "SCALE SIZING REVIEW",
    title: "Sizing a scale for a new axis—or auditing one ordered by heuristic?",
    description:
      "Send the travel, layout, substrate and temperature data for your axis—SENFU will work through the range derivation, grade-per-length check, thermal equation and straightness requirements with you before the order code is fixed.",
    label: "Request a scale sizing review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Scale length is the one encoder choice every other choice depends on.",
  conclusion: [
    "Scale length looks like the least technical field in an encoder order code, and it quietly conditions the most: which accuracy grades are offered, how the per-metre and short-period terms integrate, how large the thermal mismatch contribution becomes, how straight the mounting surface must be, and how much dead length the machine carries for the process it performs. Undersize it and commissioning finds the gap between signal and stop; oversize it and every length-proportional error term grows without buying usable measurement. Neither failure appears on a datasheet comparison, because both live in the machine, not in the encoder.",
    "The discipline is to derive rather than assume. Sum travel, overhang, head window and datum offsets into a measuring-range requirement. Read the grade for the exact span ordered. Solve the thermal equation over the real temperature range. Cost the straightness and installation bill. Then, and only then, compare prices across suppliers—because a scale sized this way turns length from a guess inherited from the last machine into a requirement the error budget, the machining drawing and the purchase order all agree on.",
  ],
  faq: [
    {
      question: "How much longer than the stage travel should the scale be?",
      answer:
        "Enough to cover travel plus end-of-travel overhang, the readhead's measuring window width, reference-mark and limit offsets, and servo overshoot margin at maximum velocity—derived from the machine layout, not a fixed percentage. The 'travel plus 20 percent' habit either starves one axis of overhang and overserves another; the sum usually lands somewhere near it, but for defensible reasons.",
    },
    {
      question: "Does a tighter accuracy grade stay available at any scale length?",
      answer:
        "No. Grade tiers are structured by measuring length: the tightest grades concentrate in shorter spans, and longer scales carry per-metre terms that may step steeper with length. Always confirm grade availability and the per-metre component for the exact length and material configuration being quoted, and record both in the selection file.",
    },
    {
      question: "Why does a longer scale make thermal error worse if the grade is unchanged?",
      answer:
        "Thermal error from CTE mismatch between scale and substrate scales linearly with scale length and temperature span. The grade describes graduations; the thermal term is added by the installation. A mismatch that costs a few hundred nanometres over 200 mm can cost several microns over a metre—which is why material matching and mounting strategy matter more as length grows.",
    },
    {
      question: "Is scale beyond the usable travel really harmful, or just wasteful?",
      answer:
        "It is measurably harmful. Dead length carries the same grade structure, expands thermally under the readhead and requires the same mounting straightness as the measured span, so it inflates length-proportional error terms and mechanical requirements while contributing nothing to the process. Trimming dead length is often the cheapest accuracy improvement available on an existing axis.",
    },
    {
      question: "When does a long travel require a spliced scale instead of a single piece?",
      answer:
        "When the travel exceeds available single-piece scale lengths, splicing joins segments—but each joint is a local discontinuity that must be phased within a fraction of the error budget, and the assembly inherits cumulative alignment demands. Budget the splicing plan, joint verification and installation effort into the selection decision rather than treating splicing as a supplier detail.",
    },
  ],
  sources: [
    {
      publisher: "NIST",
      label: "NIST — dimensional metrology research and calibration reference data",
      href: "https://www.nist.gov/",
    },
    {
      publisher: "ISO",
      label: "ISO 230 series — test code for machine tools, positioning and geometry verification",
      href: "https://www.iso.org/",
    },
    {
      publisher: "ASPE",
      label: "American Society for Precision Engineering — precision machine design and metrology resources",
      href: "https://aspe.net/",
    },
    {
      publisher: "euspen",
      label: "European Society for Precision Engineering and Nanotechnology — precision dimensioning and metrology guidance",
      href: "https://www.euspen.eu/",
    },
  ],
};
