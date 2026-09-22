import type { EditorialPage } from "@/lib/editorial-content";

export const opticalEncoderObsolescenceLifecycleSupportGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / ENCODER LIFECYCLE",
  title: "Optical Encoder Obsolescence and Lifecycle Support: EOL Risk, Spares and Long-Term Supply Agreements",
  description: "Encoders usually outlive their own components. This guide explains how end-of-life notices really work, how to size last-time-buy and spares before the window closes, what clone and counterfeit risk costs, and which lifecycle clauses belong in a purchase order.",
  slug: "/technology/optical-encoder-obsolescence-lifecycle-support-guide/",
  publishedAt: "2026-09-22",
  modifiedAt: "2026-09-22",
  primaryKeyword: "optical encoder obsolescence",
  secondaryKeywords: [
    "encoder end-of-life notice",
    "encoder last time buy",
    "long-term encoder supply agreement",
    "encoder firmware protocol compatibility",
    "encoder lifecycle due diligence",
    "legacy encoder replacement strategy",
  ],
  featuredImage: {
    src: "/images/technology/optical-encoder-obsolescence-lifecycle-support-guide/optical-encoder-obsolescence-lifecycle-support-guide-cover.webp",
    alt: "Precision motion assembly built around an optical encoder readhead and scale in an equipment service workshop with spare readhead modules and lifecycle documentation on the bench",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Obsolescence is a component-level event that arrives on the supplier's schedule, not the machine builder's. It happens when a detector array, LED die, ASIC, connector or magnet is discontinued by someone further up the chain, and it is announced through a product change or end-of-life notice that starts a clock. The useful notice states three dates: the last date orders will be accepted, the last delivery date, and the date after which support shifts to a recommended successor. It also states the minimum supply period still available, the part numbers affected, and whether the successor is form, fit and function compatible.",
    "Buyers hold real cards if they play them early. Ask for a written lifecycle statement with the purchase order: minimum availability period, change notification lead time, last-time-buy terms including price and delivery behaviour, and a compatibility rule for successors covering mounting, gap, output interface and timing. Then size a spares policy against fleet count, expected operating years and repair turnaround rather than against a round number, and keep one verified alternative configuration documented. Buying that information before the notice arrives costs hours; assembling it afterwards costs a redesign.",
  ],
  challenge: "The machine and its components do not age at the same speed. A precision stage platform stays in service for a decade or more, while the semiconductors inside its feedback device may have a commercial life of five to eight years. When that shorter clock reaches its end, the manufacturer issues a product change notification and a last order date, and the buyer learns that a carefully qualified part now has an expiration date attached. The options left at that point are unattractive and expensive: a large unplanned last-time purchase, an emergency requalification of a successor, or a search for grey-market parts whose provenance nobody can verify. None of those three are failures of engineering; they are failures of scheduling, because every lever that would have helped was cheaper before the notice. That is why lifecycle due diligence belongs in the selection stage alongside accuracy, interface and environment, rather than in a maintenance folder nobody opens.",
  requirements: [
    { title: "Written lifecycle commitment", description: "Require a stated minimum availability period and change notification lead time for the exact configuration ordered, including any variants dependent on discontinued upstream components." },
    { title: "Last-time-buy and EOL terms", description: "Agree how notice is given, how long the final order window stays open, how pricing and delivery behave during it, and what support continues afterwards." },
    { title: "Successor compatibility rule", description: "Insist on a documented statement covering mechanical mounting, readhead gap, connector pinout, output protocol and interface timing for any recommended replacement." },
    { title: "Change control and firmware versioning", description: "Require notification of firmware, protocol or signal-format changes, with versions, dates and the interface behaviour affected, so qualification stays valid." },
  ],
  routes: [
    { label: "Optical encoder range", href: "/optical-encoders/", note: "Compare current configurations" },
    { label: "Absolute vs incremental selection", href: "/technology/absolute-incremental-encoder-selection-machine-guide/", note: "Document the interface before it matters" },
    { label: "Supplier qualification", href: "/technology/optical-encoder-supplier-qualification/", note: "Add lifecycle to the scorecard" },
    { label: "Request a lifecycle review", href: "/contact/#application-form", note: "Send fleet count and service years" },
  ],
  evidence: [
    "Lifecycle statement naming minimum availability period, notification lead time and the affected configuration numbers",
    "Product change notification policy describing what triggers notice, who receives it and through which channel",
    "Last-time-buy terms covering order window, pricing, delivery duration and post-window support scope",
    "Form, fit and function comparison between the current part and its recommended successor, including interface timing",
    "Firmware and protocol version register with change dates, and the qualification evidence used when the change was accepted",
  ],
  comparisonTable: {
    caption: "Lifecycle clauses worth putting into the purchase order",
    headers: ["Clause", "What good looks like", "What it protects", "Weak answers to reject"],
    rows: [
      ["Availability period", "A stated number of years of supply for the exact configuration, with the start date defined", "Budgeting for the platform programme rather than replacing parts reactively", "A general commitment to support customers without a defined period or configuration"],
      ["Change notification", "A defined lead time and named contact channel before any construction, firmware or notice change", "Time to qualify the difference instead of discovering it in a failed machine", "Notice only through distributor channels or after the change has already shipped"],
      ["Last-time-buy terms", "Order window, pricing behaviour, delivery duration and residual repair support in writing", "A predictable final purchase rather than an auction against other customers", "Price and lead time quoted only on request at the moment of the EOL notice"],
      ["Successor compatibility", "Form, fit and function comparison covering mounting, gap, pinout, protocol and timing", "The option of a requalification instead of a mechanical and software redesign", "A replacement part number with no stated differences or test data"],
      ["Firmware version control", "Version register, change dates and documented interface behaviour for each revision", "Servo tuning and controller integration that survive a firmware update", "Silent revisions described only as the same product with the same part number"],
      ["Spares and repair support", "Availability of spares, repair turnaround and calibration of replacements for a stated period", "Uptime planning for installed machines outside their warranty window", "Support available while stocks last with no visibility of remaining stock"],
    ],
  },
  articleSections: [
    {
      heading: "Why an encoder becomes obsolete before the machine does",
      paragraphs: [
        "A feedback device is a small assembly of parts with very different commercial lifespans. The scale substrate and mechanics age gracefully; the semiconductors do not. Detector arrays, LED dies, interpolation ASICs, memory devices and even specific connectors follow consumer and automotive volumes, and when those volumes move on the part is discontinued. No amount of machine importance changes upstream economics, which is why obscure legacy components disappear from even the most critical programmes.",
        "The result is a mismatch that nobody intends and everybody inherits. A coordinate measuring machine, a wafer stage or a precision print platform may be supported for fifteen years, while the device at its heart has an eight-year component horizon. Buyers rarely see this coming because nothing on the datasheet mentions it. Lifecycle is not a specification column; it is a policy question, and the only place it can be answered credibly is in a written commitment from the manufacturer before purchase.",
      ],
      links: [
        { label: "Compare current optical encoder configurations", href: "/optical-encoders/" },
        { label: "Add lifecycle evidence to supplier qualification", href: "/technology/optical-encoder-supplier-qualification/" },
      ],
    },
    {
      heading: "Reading an end-of-life notice without losing options",
      paragraphs: [
        "A proper end-of-life notice is short, dated and specific. It names the affected part numbers and configuration codes, gives the last date orders will be accepted, states the final delivery window, and offers a recommended successor with its differences stated plainly. Cheaper notices omit the successor altogether, offer one without a compatibility statement, or leave the last order date vague enough to be negotiable later. Treat vagueness as risk rather than as flexibility, because flexibility there favours the supplier, not the buyer holding ageing machines.",
        "Once the notice arrives the realistic paths are a last-time purchase, a successor requalification, or a redesign. Cost rises steeply in that order and time availability falls in the same direction. The decision inputs are simple to collect if collected early: installed base and expected remaining service years, annual failure and repair rate, repair turnaround time, the cost of downtime per day, and the qualification effort required for a successor. Those five numbers usually show whether to buy spares for five years or to requalify now.",
      ],
      bullets: [
        "Last order acceptance date, final delivery window and post-window support commitment",
        "Recommended successor with differences stated, not only a part number",
        "Installed base, failure rate and remaining service years for the platform",
        "Repair turnaround time and the cost of a day of downtime",
      ],
    },
    {
      heading: "Sizing last time buy and spares without guessing",
      paragraphs: [
        "Sizing is an availability calculation, not a procurement ritual. Start with the number of installed units, multiply by expected surviving service years, then multiply again by the observed annual failure or damage rate, and add the units needed to cover repair turnaround and any units that cannot be repaired at all. Round upward, because the option to buy more later disappears with the order window. Storage conditions then matter as much as quantity: sealed, dry, temperature-stable storage with documented first-in-first-out rotation keeps an aged part usable.",
        "There is a second cost worth pricing honestly. Encoders stored for a decade need verification before service use, since adhesives, seals and optical surfaces do not improve with time. Budget for that verification, document it, and keep the commissioning baseline data with each unit so a replacement can be compared against a known record. A spare that nobody can prove is functional is inventory, not availability, and it only becomes a problem during the outage it was bought to prevent.",
      ],
      image: {
        src: "/images/technology/optical-encoder-obsolescence-lifecycle-support-guide/optical-encoder-obsolescence-lifecycle-support-guide-warehouse.webp",
        alt: "Climate-controlled parts store holding labelled optical encoder readheads and scales on shelving with a technician checking inventory records against a printed lifecycle and last-time-buy file",
        width: 1600,
        height: 900,
      },
    },
    {
      heading: "Clone, counterfeit and unauthorised copy risk",
      paragraphs: [
        "When the original part becomes scarce, copies appear. Some are honest third-party alternatives with their own specification; others are cosmetically convincing parts made to pass a visual inspection rather than a metrology one. The difference is expensive to discover on a machine, because a cloned readhead can produce plausible signals with worse interpolation error, poor amplitude margin, an undocumented gain range and no traceable accuracy evidence. The failure then presents as unexplained process drift rather than as a part that is obviously wrong.",
        "Mitigation starts at purchase and continues at goods-in. Buy from the manufacturer or an authorised channel, require serial numbers and documentation that can be checked against delivery records, and inspect packaging, labelling and finishing carefully. On receipt, verify signal amplitude, subdivision error and interface behaviour against the values recorded for previous units of the same configuration. If a bargain-priced replacement cannot clear those three checks, its price advantage is irrelevant to a machine whose output depends on the feedback.",
      ],
      links: [
        { label: "Test signal quality on receipt", href: "/technology/linear-encoder-signal-quality-distortion-troubleshooting-guide/" },
        { label: "Plan unpacking, storage and inspection", href: "/technology/encoder-cleanroom-unpacking-storage-inspection-guide/" },
      ],
    },
    {
      heading: "Firmware, protocol and signal compatibility in a replacement",
      paragraphs: [
        "Form and fit are visible; interface behaviour is not. A successor of the same mechanical outline may differ in output protocol, frame length, resolution format, clock tolerance, alarm handling or startup sequence, and the difference often appears only when the controller refuses to talk to it or accepts data with changed timing. This is why the compatibility statement requested at selection must explicitly cover the electrical and protocol layers, not just the drawing dimensions and the part numbering.",
        "Change control covers the same risk in the other direction. A part sold under the same number across several years can ship with revised firmware that alters timing or diagnostic behaviour. Require a version register, notification when firmware changes, and interface evidence for each revision, then decide which versions are qualified for which machines. Treat replacement and firmware changes as controlled qualification events rather than as stock swaps, and keep the qualification record with the machine service file.",
      ],
      bullets: [
        "Protocol, frame format, clock tolerance and startup behaviour for the successor",
        "Alarm, warning and diagnostic handling visible to the controller",
        "Version register with change dates and interface evidence per revision",
        "Which firmware versions are qualified for which installed machine",
      ],
    },
    {
      heading: "Lifecycle due diligence to run before selection",
      paragraphs: [
        "Add six questions to the selection scorecard and ask them of every shortlisted supplier. What is the minimum availability period for this exact configuration? What triggers a change notification, how much lead time comes with it and who receives it? What are the last-time-buy terms? Is there a recommended successor today, and what does the compatibility statement cover? How long are repairs and replacement units supported beyond the supply window? Finally, how are firmware, protocol and construction changes documented and communicated?",
        "Then write the answers into the purchase documentation rather than the email archive, since the people reading them in ten years will not be the people who negotiated them. Include the same items when qualifying an alternative configuration for strategic machines: a verified second sourcing option costs little if established during selection and is very expensive to develop after an end-of-life notice has already started the clock.",
      ],
      links: [
        { label: "Request a lifecycle statement", href: "/contact/#application-form" },
        { label: "Read the supplier qualification guide", href: "/technology/optical-encoder-supplier-qualification/" },
      ],
    },
  ],
  conclusion: [
    "Lifecycle is a negotiation worth having before there is anything to negotiate. Ask for the availability commitment, the notification policy, the last-time-buy terms and the successor compatibility statement while the part is still current, write them into the purchase documentation, and size spares from failure data rather than from convenience. Buyers who do this treat obsolescence as a scheduled event with a known response; buyers who do not discover it as an emergency, priced by whoever still has stock.",
  ],
  faq: [
    {
      question: "What does an end-of-life notice usually include?",
      answer: "The affected part numbers, the last date orders are accepted, the final delivery window and a recommended successor. A useful notice also states the differences between the successor and the original part and defines what support continues afterwards.",
    },
    {
      question: "How many spare encoders should we hold?",
      answer: "Size from data rather than a round number: installed base multiplied by remaining service years and observed annual failure rate, plus units covering repair turnaround and non-repairable damage. Round upward, because buying later may not be possible.",
    },
    {
      question: "Is a form, fit and function replacement enough?",
      answer: "Not by itself. The statement should explicitly cover mounting geometry, readhead gap, connector pinout, output protocol, frame timing and alarm behaviour, since interface differences rarely show up in a drawing comparison.",
    },
    {
      question: "Why are cloned or grey-market encoders risky?",
      answer: "They can produce plausible signals while missing interpolation quality, amplitude margin and traceable accuracy evidence. The failure appears as unexplained process drift rather than as an obviously faulty part, which makes diagnosis expensive.",
    },
    {
      question: "Can a manufacturer change firmware under the same part number?",
      answer: "Yes, unless the purchase agreement prevents it. Require a version register, notification of changes and interface evidence per revision, then record which firmware versions are qualified for which machines.",
    },
  ],
  sources: [
    { publisher: "IEC", label: "Electromechanical component and obsolescence management guidance", href: "https://www.iec.ch/" },
    { publisher: "IPC", label: "Component obsolescence risk management standards", href: "https://www.ipc.org/" },
    { publisher: "SENFU", label: "Optical encoder product and lifecycle documentation", href: "https://senfuprecision.com/optical-encoders/" },
  ],
};
