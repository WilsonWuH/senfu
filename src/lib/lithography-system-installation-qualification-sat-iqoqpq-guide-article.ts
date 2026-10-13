import type { EditorialPage } from "@/lib/editorial-content";

export const lithographySystemInstallationQualificationSatIqOqPqGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / ACCEPTANCE AND QUALIFICATION",
  title: "From FAT to PQ: Installation and Site Acceptance Qualification for Lithography Systems",
  description:
    "A factory acceptance test proves the tool left the vendor as specified; site qualification proves it works in your room, your process and your hands. This guide structures the SAT, IQ, OQ and PQ phases for maskless and electron-beam lithography systems—who does what, which tests belong to which phase, and the documentation that makes the qualification audit-proof.",
  slug: "/technology/lithography-system-installation-qualification-sat-iqoqpq-guide/",
  publishedAt: "2026-10-13",
  modifiedAt: "2026-10-13",
  primaryKeyword: "lithography system installation qualification IQ OQ PQ",
  secondaryKeywords: [
    "site acceptance test lithography",
    "SAT vs FAT acceptance",
    "operational qualification lithography system",
    "performance qualification semiconductor equipment",
    "lithography system commissioning checklist",
    "equipment qualification cleanroom tool",
  ],
  featuredImage: {
    src: "/images/technology/lithography-system-installation-qualification-sat-iqoqpq-guide/lithography-system-installation-qualification-sat-iqoqpq-guide-cover.webp",
    alt: "Engineers commissioning a lithography system in a cleanroom, one reviewing qualification documents on a clipboard while another aligns exposure test substrates at the tool",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Lithography system acceptance is a chain of qualifications, each answering a different question. The factory acceptance test (FAT) verifies the tool meets specification at the vendor's floor, under the vendor's conditions. The site acceptance test (SAT) verifies it survived transport and installation and meets specification in the user's facility. Installation qualification (IQ) documents that the tool was installed per the manufacturer's requirements—utilities, environment, geometry, safety. Operational qualification (OQ) proves the system's functions perform across their specified operating ranges. Performance qualification (PQ) proves the system produces acceptable results in the user's actual process, over a sustained period, with the user's own operators and recipes.",
    "The phases fail in predictable ways: SAT tests repeated from FAT without site-specific conditions; IQ treated as logistics paperwork when it is actually the evidence base for every later phase; OQ run only at nominal settings so the operating ranges go unproven; and PQ collapsed into the first week's demo instead of a sustained process run. Structuring the four phases with distinct objectives, agreed criteria and signed records is what turns a delivered instrument into a qualified production asset.",
  ],
  challenge:
    "The gap between a passing FAT and a working tool is where lithography projects lose their schedule. The system demonstrated beautifully at the vendor's site, then arrives into a room whose vibration floor was never measured, sits two weeks waiting for an exhaust duct or the correct power feed, and finally passes a compressed 'acceptance' that replays the FAT protocol without the site's thermal profile, the user's resist, or the customer's operators. Three months later the first overlay problems appear, and the dispute begins: vendor data says the tool meets spec, user data says the process does not close, and nobody can point to a signed record of what was tested where, on whose materials, against which criteria. The IQ/OQ/PQ structure exists precisely to prevent this—not as bureaucratic ritual but as a division of evidence: each phase answers one question with defined conditions, so that when something drifts later, the baseline exists to compare against.",
  requirements: [
    { title: "Site readiness verified before delivery", description: "Vibration, temperature stability, airflow, power quality, exhaust and grounding measured against the vendor's installation requirements before the tool ships—because installation reveals site deficiencies at the worst possible moment." },
    { title: "IQ evidence per manufacturer requirements", description: "Documented installation: utilities connected and verified, environmental conditions logged, clearances and anchoring per the layout drawing, safety interlocks functional, with deviations dispositioned in writing." },
    { title: "OQ across the operating ranges", description: "Functional tests run at the edges as well as the center of each specified range—stage speeds, exposure doses, autofocus range, substrate sizes—so the tool is qualified over its envelope, not just at one comfortable setting." },
    { title: "PQ with the user's process, sustained", description: "The user's resist, substrates, recipes and operators, run over an agreed duration and volume, with yield-relevant metrics—overlay, linewidth, dose repeatability—trended against the acceptance criteria." },
  ],
  routes: [
    { label: "Factory acceptance test guide", href: "/technology/lithography-system-factory-acceptance-test-guide/", note: "The vendor-side phase this builds on" },
    { label: "Site environmental requirements", href: "/technology/maskless-lithography-site-environmental-requirements-guide/", note: "What the room must deliver" },
    { label: "Supplier qualification with process demo", href: "/technology/lithography-supplier-qualification-process-demo/", note: "Qualification before the purchase" },
    { label: "Overlay accuracy with encoder feedback", href: "/technology/maskless-lithography-overlay-accuracy-encoder-feedback-guide/", note: "A key OQ/PQ metric" },
  ],
  evidence: [
    "Site readiness survey: vibration, temperature, power, exhaust and grounding measurements against vendor requirements",
    "Signed IQ record: utilities, environment, geometry, safety checks and disposition of deviations",
    "OQ test sheets with results at range edges and center for every qualified function",
    "PQ process runs: user materials and operators, trended overlay, linewidth and dose repeatability data",
    "Deviation log with dispositions, and a final acceptance certificate referencing all phase records",
  ],
  comparisonTable: {
    caption: "The qualification chain: who, where, what",
    headers: ["Phase", "Where", "Question answered", "Typical evidence"],
    rows: [
      ["FAT", "Vendor site", "Does the tool meet spec as built, before shipping?", "Vendor metrology: resolution, stage accuracy, patterned demos under vendor conditions"],
      ["SAT", "User site, after install", "Did the tool arrive, install and meet spec in this facility?", "Repeat of key spec tests plus site-specific checks: vibration response, thermal behavior"],
      ["IQ", "User site", "Was it installed per the manufacturer's requirements?", "Utility and environment verification, layout and safety checklist, deviation log"],
      ["OQ", "User site", "Does every function perform across its specified range?", "Function tests at range extremes and nominal, with recorded criteria and results"],
      ["PQ", "User site, sustained", "Does the process yield acceptable results in production hands?", "User recipes and operators, trended process metrics over agreed duration and volume"],
    ],
  },
  articleSections: [
    {
      heading: "SAT: proving the tool survived the journey",
      paragraphs: [
        "The site acceptance test answers a narrow question with a defined test set: did the system that passed FAT arrive intact and perform to specification here? The scope should be agreed at contract time—typically the headline specifications (exposure performance, stage accuracy, alignment or overlay capability) plus checks that only exist on site: vibration response of the installed tool, thermal behavior under the room's actual airflow pattern, and interlock and safety behavior in the installed configuration. Repeating every FAT test at SAT is expensive and usually unnecessary; the contract should name which results carry over and which must be reproduced.",
        "SAT is also the formal handover point. Before it passes, the room must already be qualified—this is where site readiness pays: a vibration survey on the actual floor, temperature stability logged across a full 24-hour cycle with the HVAC in its normal pattern, power quality verified, exhaust and materials requirements met. A SAT that begins before the room is ready does not test the tool; it tests the construction project, and both parties pay for the confusion.",
        "Discrepancies found at SAT are dispositioned in writing: retest after adjustment, accepted with limitation, or rejected. The disposition log is part of the acceptance record, and unlogged verbal waivers are the classic source of later disputes.",
      ],
      links: [
        { label: "Read the factory acceptance test guide", href: "/technology/lithography-system-factory-acceptance-test-guide/" },
        { label: "Read the site environmental requirements guide", href: "/technology/maskless-lithography-site-environmental-requirements-guide/" },
      ],
    },
    {
      heading: "IQ: the paperwork that becomes the baseline",
      paragraphs: [
        "Installation qualification documents that the tool was installed the way the manufacturer requires and the facility agreed. The content is concrete: utilities connected with measured values (electrical, exhaust, compressed air or gases where applicable), environmental conditions at the tool recorded, installation geometry per the layout—clearances, anchoring, vibration isolation settings—safety interlocks and emergency stops functionally checked, and consumables and spares verified against the shipment list. Each item gets a specification, a measured result, a pass/fail against criteria and a signature.",
        "Two IQ habits separate useful records from shelf documents. First, record deviations with dispositions rather than hiding them—a clearance compromise accepted in writing with its rationale is usable evidence later; an undocumented one is a landmine. Second, capture the as-built configuration: software versions, installed options, calibration states and network configuration. Every future service dispute, update or move is resolved against the as-built record, and reconstructing it years later is far more expensive than recording it during installation.",
        "IQ is complete when the tool is installed, documented and ready to operate—not when the crates are empty. The distinction matters because OQ presumes a stable installed state; tests run before IQ closes may need repeating.",
      ],
      bullets: [
        "Utilities verified with measured values, not just 'connected'",
        "As-built configuration captured: software, options, calibrations",
        "Deviations dispositioned in writing with rationale",
        "IQ closes before OQ begins—tests on an unsettled installation repeat anyway",
      ],
      image: {
        src: "/images/technology/lithography-system-installation-qualification-sat-iqoqpq-guide/lithography-system-installation-qualification-sat-iqoqpq-guide-detail.webp",
        alt: "Detail view of a qualification checklist and utility gauges beside an installed lithography tool during installation verification in a cleanroom",
        width: 1600,
        height: 900,
      },
    },
    {
      heading: "OQ: functions across their ranges",
      paragraphs: [
        "Operational qualification tests the system's functions against their specified operating ranges. For a maskless lithography platform the OQ set typically covers stage motion across speed and acceleration ranges with positioning verification; exposure dose across its calibration range with measured uniformity; autofocus across its working range on defined step targets; pattern fidelity with standard test patterns across the write field; alignment and overlay across substrate conditions; and alarm, interlock and diagnostic functions with forced triggers. The discipline that makes OQ meaningful is testing the edges: a dose calibration proven only at the nominal setting qualifies that setting, not the dose range the process will actually use.",
        "Criteria come from the specification, not from the first measurement. Each OQ test should carry its acceptance criterion into the test sheet before execution—written by the user or agreed with the vendor—so the record shows performance against a requirement rather than documenting whatever happened. Where a function's specification was defined at FAT under vendor conditions, the OQ criterion should account for site conditions, with the difference stated rather than silently absorbed.",
        "OQ also establishes the reference states that maintenance and service will trend against: baseline uniformity maps, baseline stage accuracy, baseline overlay. When those functions are re-verified after a service event, the comparison is against OQ's record—which is why the OQ data must be kept with the tool, not in a project archive.",
      ],
      links: [
        { label: "Read the dose calibration guide", href: "/technology/maskless-lithography-dose-calibration-uniformity/" },
        { label: "Read the alignment and overlay accuracy guide", href: "/technology/maskless-lithography-alignment-overlay-accuracy-guide/" },
      ],
    },
    {
      heading: "PQ: the user's process, sustained, in the user's hands",
      paragraphs: [
        "Performance qualification is where the vendor's tool becomes the user's process. The tests use the user's substrates, resist, recipes and—deliberately—the user's operators, because PQ must answer whether the qualified process survives normal operation, not only expert operation. The metrics are the ones production will be judged by: overlay across a realistic layer sequence, linewidth or pattern fidelity at the process's critical geometries, throughput under production-representative recipes, and yield-relevant defect levels.",
        "Duration and volume make PQ honest. A single afternoon of excellent results proves the tool can perform; a sustained run—an agreed number of substrates over an agreed period, with the metrics trended—proves the process holds. The trend data also seeds the machine's process control records, so PQ is not a gate before production but the first production dataset.",
        "Acceptance criteria at PQ may legitimately be tighter or looser than OQ's, because PQ measures the integrated process including materials and handling. What matters is that the criteria were agreed before the runs, that the data is kept raw and trended, and that any failures route into the deviation log with dispositions—closing the qualification with the same discipline every earlier phase used.",
      ],
      links: [
        { label: "Read the overlay accuracy with encoder feedback guide", href: "/technology/maskless-lithography-overlay-accuracy-encoder-feedback-guide/" },
        { label: "Discuss a qualification plan", href: "/contact/#application-form" },
      ],
    },
  ],
  midCta: {
    eyebrow: "ACCEPTANCE PLANNING",
    title: "Building the qualification plan before the tool ships?",
    description:
      "Send your substrate sizes, process metrics and facility conditions—SENFU can help define SAT scope, IQ checklists and OQ/PQ criteria for your lithography system acceptance.",
    label: "Request a qualification plan review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Four phases, four questions, one auditable record.",
  conclusion: [
    "FAT proves the tool as built; SAT proves it arrived and performs in this facility; IQ documents a correct installation; OQ proves the functions across their ranges; PQ proves the user's process over a sustained run. Each phase answers one question with agreed criteria and signed records, and together they form the baseline every future service event, process change and dispute will be measured against.",
    "The structure earns its keep in the failures it prevents: no compressed acceptance that replays vendor tests into an unverified room, no unlogged waivers, no qualification that stops at nominal settings. Tools qualified through the full chain deliver not just a passing handover but the evidence trail that keeps production explainable for the tool's whole life.",
  ],
  faq: [
    {
      question: "What is the difference between SAT and FAT for a lithography system?",
      answer:
        "FAT runs at the vendor's site before shipping, under vendor conditions, and verifies the tool meets its specification as built. SAT runs at the user's site after transport and installation, and verifies the tool arrived intact and still meets the key specifications in the actual facility—including site-specific checks like installed vibration response. Contracts should define which FAT results carry over and which tests SAT must reproduce.",
    },
    {
      question: "Do research labs without formal quality systems still need IQ/OQ/PQ?",
      answer:
        "The formality can scale down, but the structure remains valuable: document the installation state, verify functions across their ranges, and prove the process with your materials over a sustained run. Even informal records become the baseline for every future troubleshooting session and service visit.",
    },
    {
      question: "Why should OQ tests run at the edges of the operating range?",
      answer:
        "Because production will use those edges. A dose calibration or stage verification proven only at nominal settings qualifies one point; processes that use the full dose range or high-speed moves rely on performance across the envelope, which only edge testing establishes.",
    },
    {
      question: "How long should PQ run?",
      answer:
        "Long enough to capture normal variation: typically an agreed number of substrates or batches covering different operators, session times and consumable lots. The goal is trended evidence that the process holds, not a single demonstration afternoon.",
    },
    {
      question: "Who owns the qualification records after acceptance?",
      answer:
        "The user's organization owns and maintains them with the tool. OQ baselines and the as-built IQ record are the reference points for service verification, updates and eventual relocation—archiving them away from the tool forfeits most of their value.",
    },
  ],
  sources: [
    {
      publisher: "SENFU",
      label: "SENFU — lithography systems and factory acceptance documentation",
      href: "https://senfuprecision.com/lithography-systems/maskless-lithography/",
    },
    {
      publisher: "ISPE",
      label: "International Society for Pharmaceutical Engineering — baseline guides on commissioning and qualification",
      href: "https://ispe.org/",
    },
    {
      publisher: "SEMI",
      label: "SEMI International Standards — equipment installation and acceptance-related standards",
      href: "https://www.semi.org/",
    },
    {
      publisher: "FDA",
      label: "FDA — Process Validation: General Principles and Practices (guidance on IQ/OQ/PQ structure)",
      href: "https://www.fda.gov/",
    },
  ],
};
