import type { EditorialPage } from "@/lib/editorial-content";

export const opticalEncoderEnclosedVsOpenScaleSelectionGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / OPTICAL ENCODER SELECTION",
  title: "Enclosed vs Open Linear Scale Selection: A Practical Guide for Machine Builders",
  description:
    "Compare enclosed sealed linear scales and open exposed scale systems on environment protection, accuracy, mechanical integration, thermal behavior and lifecycle cost, and define the evidence to request before selecting.",
  slug: "/technology/optical-encoder-enclosed-vs-open-scale-selection-guide/",
  publishedAt: "2026-11-12",
  modifiedAt: "2026-11-12",
  primaryKeyword: "enclosed vs open linear scale selection",
  secondaryKeywords: [
    "sealed linear encoder",
    "exposed linear encoder",
    "open scale tape encoder",
    "enclosed scale housing machine tool",
    "linear encoder architecture selection",
  ],
  featuredImage: {
    src: "/images/technology/optical-encoder-enclosed-vs-open-scale-selection-guide/optical-encoder-enclosed-vs-open-scale-selection-guide-cover.webp",
    alt: "Machine tool axis fitted with an enclosed aluminum scale housing beside a precision stage using an open scale tape and readhead",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Linear scale systems come in two architectures. Enclosed (sealed) scales house the graduations and scanning carriage inside an aluminum housing with sealing lips, protecting them from chips, dust and coolant — the standard choice for machine tools and factory-floor axes. Open (exposed) scales mount the graduations directly on the machine surface with a contactless readhead over it, eliminating mechanical hysteresis and friction and enabling the finest accuracy classes — the standard choice for metrology equipment, semiconductor stages and other machines with controlled environments.",
    "The selection is decided by four questions. How dirty is the environment? What accuracy and repeatability does the axis actually need? What mounting surface flatness and installation space can the machine offer? And how will the system be maintained over its life? Enclosed scales tolerate hard environments and large mounting tolerances; open scales deliver superior metrology but demand clean conditions, flat mounting surfaces and disciplined installation.",
  ],
  challenge:
    "Buyers often choose a linear scale by accuracy grade and price alone, then discover the architecture mismatch in commissioning or in the field. An exposed scale fitted to a machining center fills with coolant residue and loses signal within months; an enclosed scale fitted to a nanometre metrology stage adds mechanical hysteresis and coupling errors that the axis budget cannot absorb. The two architectures embody opposite tradeoffs between environmental robustness and metrological performance, and the right choice follows from the machine's environment, error budget and mechanical integration — not from a datasheet headline.",
  requirements: [
    { title: "Environment survey", description: "Coolant mist, chips, dust, washdown, vibration sources and the cleanliness class the axis actually operates in." },
    { title: "Accuracy and repeatability budget", description: "Target positioning accuracy, repeatability and the share of the budget allocated to the feedback element." },
    { title: "Mechanical integration envelope", description: "Mounting surface flatness, available cross-section, measuring length, acceleration loading and installation tolerances." },
    { title: "Lifecycle and service plan", description: "Expected maintenance intervals, spare-part strategy and the environmental conditions during transport, storage and standstill." },
  ],
  comparisonTable: {
    caption: "Enclosed versus open linear scale architectures compared",
    headers: ["Attribute", "Enclosed sealed scale", "Open exposed scale", "Watch for"],
    rows: [
      ["Contamination protection", "Aluminum housing with sealing lips shields scale and carriage from chips, dust and coolant", "Graduations exposed; relies on controlled environment and clean air", "Sealed systems still need lip inspection; exposed systems degrade quickly with mist"],
      ["Accuracy potential", "Accuracy grades typically down to ±2 µm and better", "Finest grades, sub-micron and nanometre-class measuring steps", "Sealed housing and coupling can add hysteresis; exposed accuracy depends on surface flatness"],
      ["Mechanical integration", "External mounting block with coupling compensating guideway misalignment; large mounting tolerances", "Scale fastened directly to the machine surface; flatness is a prerequisite", "Coupling errors on sealed; surface preparation burden on open"],
      ["Friction and dynamics", "Low-friction carriage guided inside the housing", "No mechanical contact between head and scale", "Carriage friction affects fine dynamics; open heads are sensitive to tilt and gap"],
      ["Measuring length", "Up to 30 m and beyond with full-size housings", "Up to 30 m with tapes; splicing for longer strokes", "Slimline housings limit length; long tapes need tensioning and splicing discipline"],
      ["Typical applications", "Machine tools, machining centers, grinding, wood and stone working", "Semiconductor stages, metrology machines, direct drives, ultra-precision axes", "Mixed environments may justify a hybrid selection axis by axis"],
    ],
  },
  articleSections: [
    {
      heading: "Two architectures, two failure models",
      paragraphs: [
        "An enclosed linear scale is a subsystem: graduations, scanning carriage and an internal guideway live inside an extruded aluminum housing, with elastic sealing lips directed toward the machine to keep chips, dust and fluids out. The carriage is coupled to the machine slide through an external mounting block, and that coupling deliberately compensates for guideway misalignment and mounting error. The failure model follows from the construction: seal wear, coolant ingress through damaged lips, contamination accumulated inside the housing over years, and coupling-induced hysteresis.",
        "An open linear scale is a metrology component: the scale graduations — glass substrate or steel tape — are fastened directly to the machine body and a contactless readhead scans them across a small air gap. Because nothing touches, there is no friction, no wear from scanning and minimal hysteresis, which is why the finest accuracy classes and measuring steps are only offered in exposed designs. Its failure model is different: contamination landing on the graduations, gap and tilt errors from installation, and thermal mismatch between the scale substrate and the machine structure.",
        "The selection question is therefore not which architecture is better, but which failure model the application can manage. A machining center operator can inspect and replace sealing lips on a maintenance schedule; a semiconductor stage builder can hold a cleanroom class and prepare a lapped mounting surface. Each architecture rewards the discipline it demands.",
      ],
      links: [
        { label: "Read the IP rating and environmental sealing guide", href: "/technology/optical-encoder-ip-rating-environmental-sealing-guide/" },
        { label: "Review contamination and filming effects on scales", href: "/technology/optical-encoder-scale-contamination-filming-effects-guide/" },
      ],
    },
    {
      heading: "Environment decides first",
      paragraphs: [
        "Start the selection with the dirtiest realistic condition the axis will see, including events rather than steady state: a coolant line bursting, chips piling against the housing, a washdown cycle, or days of standstill in a humid workshop. Enclosed scales with appropriate sealing lips are engineered exactly for this class of exposure, and full-size housings additionally provide high resistance to vibration loading. If the axis sees coolant mist, abrasive dust or mechanical impact, an exposed scale should be excluded unless the entire working zone is shrouded and positively pressurized.",
        "Exposed scales assume the opposite contract: an environment the builder controls. Metrology labs, cleanroom stages and enclosed direct-drive positioning systems keep particulates and films away from the graduations, so the contactless scanning delivers its full accuracy without a housing in the metrology loop. Where the environment is marginal, consider whether an enclosure or air curtain can create a controlled zone — retrofitting cleanliness onto an open scale usually costs more than selecting an enclosed scale from the start.",
        "Note that sealing ratings and architecture are related but not identical decisions. An enclosed housing achieves its protection physically, while open systems rely on environment class and, in some designs, sealed readhead constructions. Specify both the architecture and the environmental evidence — IP rating, coolant resistance, condensation behavior — rather than assuming one implies the other.",
      ],
      links: [
        { label: "Compare scale material and substrate options", href: "/technology/optical-encoder-scale-material-selection-guide/" },
        { label: "Review precision motion application requirements", href: "/applications/precision-motion/" },
      ],
    },
    {
      heading: "Accuracy, dynamics and the mechanical loop",
      paragraphs: [
        "On metrological potential the architectures differ fundamentally. Enclosed scales reach accuracy grades typically as fine as ±2 µm, with measuring steps down to the nanometre range through interpolation, and their coupling compensates misalignment at the cost of a small mechanical hysteresis in the measurement loop. Exposed scales eliminate that hysteresis entirely and reach sub-micron grades, because the graduations sit directly in the machine structure and nothing moves between head and scale. For an axis whose error budget assigns tens of nanometres to feedback, an exposed architecture is usually the only candidate; for an axis budgeted in single-digit microns, an enclosed scale is normally sufficient and far more robust.",
        "Dynamics split similarly. Open systems scan contactlessly and tolerate high speeds and accelerations with minimal moving mass, which suits direct drives and fast stages. Enclosed systems carry the carriage on an internal low-friction guideway — a small but real friction and inertia contribution at fine motion levels — while offering large permissible acceleration loading through the mounting block. Match the architecture to the velocity and acceleration profile, and to the servo bandwidth the machine control expects from the feedback signal.",
        "The mounting surface completes the mechanical picture. Exposed scale flatness on installation directly shapes the achieved accuracy: a glass scale or tape fastened to an uneven surface introduces pitch-periodic and longer-period errors that no interpolation can remove. Enclosed scales tolerate larger mounting tolerances by design because the housing, not the machine surface, defines the scale geometry. Check the installation specification against what the machine shop can actually produce and hold in series.",
      ],
      image: {
        src: "/images/technology/optical-encoder-enclosed-vs-open-scale-selection-guide/optical-encoder-enclosed-vs-open-scale-selection-guide-detail.webp",
        alt: "Close-up of a linear scale tape mounted on a precision stage with a contactless readhead scanning above it",
        width: 1600,
        height: 900,
      },
      links: [
        { label: "Read the scale splicing guide for long strokes", href: "/technology/long-stroke-linear-stage-encoder-scale-splicing-guide/" },
        { label: "Review installation tolerances and alignment errors", href: "/technology/linear-encoder-installation-alignment-errors/" },
      ],
    },
    {
      heading: "Thermal behavior and long-stroke considerations",
      paragraphs: [
        "The scale substrate becomes part of the machine's thermal loop. Exposed glass scales follow the mounting surface closely, which suits machines whose structure is thermally controlled; exposed steel tapes have a different expansion coefficient from most machine beds, and enclosed housings add their own thermal mass and gradients between scale and machine. For axes with tight accuracy over temperature, model the scale–structure pair as a system: expansion mismatch, thermal gradients along the housing, and the machine's own drift behavior. Compensation is possible, but only when the thermal behavior is known rather than assumed.",
        "Long strokes amplify every one of these effects. Full-size enclosed housings are available for measuring lengths up to 30 m and beyond, but slimline housings limit practical length and accelerate differently under high loading. Long open tapes need correct tensioning, and strokes beyond the longest single graduation require spliced scales with joint discipline at every seam. Long-travel axes should shortlist architectures together with the length-limiting mechanics, not sequentially.",
        "Transport, storage and standstill belong in the same analysis. A sealed housing protects the graduations during shipping and months of installation delay; an exposed scale unpacked into a marginal environment can accumulate condensation films before the machine ever runs. Whatever the architecture, define the receiving inspection and storage conditions in the delivery contract, not after arrival.",
      ],
      links: [
        { label: "Read the linear encoder thermal error budget guide", href: "/technology/linear-encoder-thermal-error-budget/" },
        { label: "Review cleanroom unpacking and storage inspection", href: "/technology/encoder-cleanroom-unpacking-storage-inspection-guide/" },
      ],
    },
    {
      heading: "Lifecycle, maintenance and selection workflow",
      paragraphs: [
        "Service profiles differ as much as the hardware. Enclosed scales need periodic inspection of sealing lips and the internal guideway path, plus cleaning of the housing exterior; their failure modes develop slowly and are visible on schedule. Open scales need environment monitoring and cleanliness discipline, and their contamination-driven signal degradation can appear abruptly after an unexpected event. Budget cables similarly: both architectures live or die with flex-life-rated cabling routed for the full stroke.",
        "Run the selection as a short checklist. First, classify the environment and exclude architectures that cannot survive its worst case. Second, allocate the axis error budget and check whether an enclosed grade suffices. Third, verify the mechanical envelope: mounting surface flatness, available space, measuring length, acceleration loading. Fourth, price the lifecycle — installation effort, maintenance intervals, spare strategy — rather than the purchase price alone. Fifth, demand evidence: IP and coolant-resistance ratings with test conditions, achieved accuracy on a calibration artifact, and installation acceptance criteria.",
        "SENFU supplies optical linear encoders in both architectures and supports customers in matching the feedback system to the axis error budget and operating environment. Submit the environment class, accuracy and repeatability targets, stroke length and mechanical envelope, and SENFU can help define the architecture choice and the acceptance evidence before ordering.",
      ],
      links: [
        { label: "Read the incoming acceptance test guide", href: "/technology/optical-encoder-incoming-acceptance-test-guide/" },
        { label: "Review cable flex life and drag chain routing", href: "/technology/optical-encoder-cable-flex-life-drag-chain-guide/" },
      ],
    },
  ],
  midCta: {
    eyebrow: "ARCHITECTURE REVIEW",
    title: "Enclosed scale, open scale — or mixed?",
    description:
      "Send the environment class, accuracy and repeatability budget, stroke length and mounting envelope, and SENFU can help define the scale architecture and acceptance evidence.",
    label: "Request a selection review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Match the architecture to the environment and the budget, then verify.",
  conclusion: [
    "Enclosed and open linear scales are answers to different contracts. The enclosed architecture buys environmental robustness, large mounting tolerances and long trouble-free lengths with a housing in the metrology loop; the open architecture buys the finest accuracy, contactless dynamics and minimal hysteresis with a strict demand on cleanliness and surface preparation. Machines fail on feedback most often because the architecture was chosen against its contract.",
    "Classify the environment, allocate the error budget, check the mechanical envelope, price the lifecycle, and require environmental and accuracy evidence with stated test conditions. That sequence turns scale selection from a catalog decision into an engineering one — and it is the difference between feedback that holds its grade in production and feedback that quietly loses it.",
  ],
  routes: [
    { label: "SMG20 linear encoder", href: "/optical-encoders/smg20/", note: "Miniature linear feedback" },
    { label: "Optical encoder overview", href: "/optical-encoders/", note: "Compare linear and rotary options" },
    { label: "Incoming acceptance test guide", href: "/technology/optical-encoder-incoming-acceptance-test-guide/", note: "Receiving evidence" },
    { label: "Technical application review", href: "/contact/#application-form", note: "Submit the axis profile" },
  ],
  evidence: [
    "Environmental exposure statement with worst-case events, and IP or coolant-resistance rating with test conditions",
    "Accuracy grade and repeatability measured on a calibration artifact, with the measurement setup documented",
    "Mounting surface flatness specification and achieved scale alignment record from installation",
    "Thermal expansion behavior of the scale–structure pair over the operating temperature range",
    "Maintenance intervals and seal or cleanliness inspection plan matched to the environment class",
    "Cable flex-life rating and routing confirmation for the full stroke",
  ],
  faq: [
    {
      question: "What is the difference between enclosed and open linear scales?",
      answer:
        "Enclosed scales house the graduations and scanning carriage inside a sealed aluminum housing with sealing lips, protecting them from chips, dust and coolant. Open scales mount the graduations directly on the machine with a contactless readhead scanning above, eliminating friction and hysteresis but requiring a controlled environment and flat mounting surface.",
    },
    {
      question: "When is an enclosed scale the better choice?",
      answer:
        "Whenever the axis operates where contamination is uncontrolled: machine tools exposed to coolant mist and chips, washdown environments, dusty shops, or axes with high vibration loading. Enclosed housings also tolerate larger mounting tolerances, which simplifies series production installation.",
    },
    {
      question: "Why do open scales achieve finer accuracy?",
      answer:
        "Because nothing moves between the readhead and the graduations. There is no friction, no internal guideway and no coupling in the measurement loop, so mechanical hysteresis is essentially eliminated and the graduations sit directly in the machine structure — enabling sub-micron accuracy grades and nanometre-class measuring steps.",
    },
    {
      question: "Can an open scale survive on a machine tool?",
      answer:
        "Generally no, unless the working zone is fully shrouded, positively pressurized and kept free of coolant mist. Contamination films on exposed graduations degrade signal amplitude and introduce errors; where conditions cannot be controlled, an enclosed scale is the safer engineering choice.",
    },
    {
      question: "How does the coupling on an enclosed scale affect accuracy?",
      answer:
        "The coupling between the scale carriage and the machine slide compensates for misalignment, which relaxes mounting tolerances, but it introduces a small mechanical hysteresis into the measurement loop. For micrometre-class axes this is negligible; for nanometre-class budgets it must be measured and included in the error allocation.",
    },
    {
      question: "What should I send SENFU for a scale architecture review?",
      answer:
        "Send the environment class with worst-case events, the axis accuracy and repeatability targets, stroke length, speed and acceleration profile, mounting surface specification and the maintenance plan. SENFU can recommend the architecture and define the acceptance evidence before ordering.",
    },
  ],
  sources: [
    {
      publisher: "HEIDENHAIN US",
      label: "Linear encoders product overview — sealed and exposed linear encoders",
      href: "https://www.heidenhain.us/products/linear-encoders/",
    },
    {
      publisher: "Expo21XX (HEIDENHAIN company profile)",
      label: "HEIDENHAIN sealed and exposed linear encoder portfolios with accuracy grades and measuring lengths",
      href: "https://www.expo21xx.com/industry/1664_st3_iot_embedded/default.htm",
    },
    {
      publisher: "Encoder.in",
      label: "HEIDENHAIN linear scales — sealed vs exposed design comparison and installation guidance",
      href: "https://encoder.in/heidenhain-linear-scales/",
    },
  ],
};
