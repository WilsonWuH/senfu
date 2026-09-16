import type { EditorialPage } from "@/lib/editorial-content";

export const absoluteEncoderDataRetentionPowerLossGuideArticle: EditorialPage = {
  eyebrow: "TECHNOLOGY / POSITION FEEDBACK RELIABILITY",
  title: "Absolute Encoder Data Retention After Power Loss: A Buyer's Guide",
  description:
    "How absolute encoders keep position without power: single-turn and multi-turn principles, battery-backed versus battery-free designs, failure modes, and the verification an equipment buyer should demand.",
  slug: "/technology/absolute-encoder-data-retention-power-loss-guide/",
  publishedAt: "2026-09-16",
  modifiedAt: "2026-09-16",
  primaryKeyword: "absolute encoder power loss data retention",
  secondaryKeywords: [
    "multi-turn absolute encoder battery backup",
    "battery-free multiturn encoder Wiegand",
    "absolute position after power cycle",
    "encoder battery replacement interval",
    "BiSS-C absolute position retention",
  ],
  featuredImage: {
    src: "/images/technology/absolute-encoder-data-retention-power-loss-guide/absolute-encoder-data-retention-power-loss-guide-cover.webp",
    alt:
      "Absolute optical encoder readhead on a precision axis with its interface electronics powered down during a position-retention test",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "An absolute encoder earns its name by reporting position immediately after power-up, without a homing move and without motion. Single-turn designs retain the position within one revolution optically, on a code disc read at power-on. Multi-turn designs must additionally remember how many revolutions elapsed while unpowered, and they do this in two ways: a battery or supercapacitor backing the turn counter, or a battery-free mechanism such as a gear-based mechanical counter or an energy-harvesting electronic counter that powers itself from shaft rotation.",
    "For a machine buyer, the meaningful questions are not marketing labels but retention mechanics: what stores the multi-turn count, what maintains or refreshes it, how the system behaves at the retention limit, whether the counter is protected against shaft motion while unpowered, and what evidence proves retention across the required power-off duration and environmental range. Each answer carries a maintenance obligation, and the right choice depends on the machine's power-off profile and service concept.",
  ],
  challenge:
    "Equipment is sold on 'absolute' as a single property, but the underlying retention mechanisms differ fundamentally. A battery-backed counter depends on a consumable whose end of life is silent: the encoder works perfectly until the cell depletes, then the machine homes unexpectedly after a long weekend. A mechanical gear counter is rugged but limits unpowered shaft rotation. An energy-harvesting counter can be drained if the shaft spins while unpowered. Because none of these failure modes show up in a short factory test, buyers discover them in the field, attributed to 'the encoder' when the real issue is an unexamined retention design decision made at selection time.",
  requirements: [
    {
      title: "Power-off profile",
      description:
        "Define the longest realistic unpowered interval, expected shaft motion while unpowered, and whether the machine must be production-ready immediately at power-up or can tolerate a homing routine.",
    },
    {
      title: "Retention mechanism specification",
      description:
        "State the multi-turn principle in the specification: battery-backed, battery-free mechanical or energy-harvesting, with retention duration, motion limits and behavior at limit defined by the supplier.",
    },
    {
      title: "Maintenance and monitoring",
      description:
        "Battery state monitoring, replacement interval, diagnostics access and what the controller does on a low-battery or count-invalid flag.",
    },
    {
      title: "Verification evidence",
      description:
        "A defined test: power off for the specified duration, exercise shaft rotation within the declared limits, power on and compare absolute position to an independent reference.",
    },
  ],
  comparisonTable: {
    caption: "Multi-turn retention mechanisms and their buyer-relevant properties",
    headers: [
      "Mechanism",
      "How the turn count survives",
      "Typical limits",
      "Maintenance and failure behavior",
    ],
    rows: [
      [
        "Single-turn absolute",
        "Optical code disc read at power-on; only position within one revolution is absolute",
        "No multi-turn memory by definition; machine homing strategy must tolerate this",
        "No retention consumables; simplest failure surface",
      ],
      [
        "Battery-backed multi-turn",
        "Turn counter electronics kept alive by a battery or supercapacitor while unpowered",
        "Retention duration and temperature range defined by cell capacity; unpowered rotation generally tolerated within counter range",
        "Battery has a defined service life even unused; needs monitoring and scheduled replacement; depleted cell appears as loss of multi-turn count, not as gradual error",
      ],
      [
        "Gear-based mechanical multi-turn",
        "Small gear train mechanically accumulates revolutions and is read optically at power-on",
        "Limited unpowered rotation per power-off event; added mechanics and mass; lubrication and temperature considerations",
        "Battery-free; wear is long-term and mechanical; count cannot be corrupted electrically",
      ],
      [
        "Energy-harvesting electronic multi-turn",
        "Shaft rotation generates energy that writes the count to non-volatile memory",
        "Count valid as long as rotation while unpowered stays within the harvesting capability; fast unpowered spinning beyond the limit loses count accuracy",
        "Battery-free; failure mode is unpowered rotation beyond specification, which must be respected in machine design and service procedures",
      ],
    ],
  },
  articleSections: [
    {
      heading: "What 'absolute' actually guarantees at power-up",
      paragraphs: [
        "An absolute interface such as BiSS-C reports a position value, not a count of edges since startup. Within one shaft revolution, that value is derived from a multi-track or pseudo-random code pattern on the disc and is available immediately, regardless of how the encoder was powered down or whether the shaft moved while unpowered. This is why an absolute single-turn encoder removes the homing routine for any axis that never accumulates more than one revolution between power cycles, including most linear axes driven through a ball screw.",
        "The moment revolutions accumulate while unpowered, the design question appears. A vertical axis held against gravity, a rotary table parked at an arbitrary angle, a robot joint that back-drives when the brake opens: each adds turns the encoder must remember without electronics being powered. The supplier datasheet will state whether the device is single-turn or multi-turn, but the buyer must look one level deeper and ask what stores the multi-turn count, because the mechanisms differ in maintenance profile, motion limits and failure behavior.",
        "A useful specification sentence reads: after any power-off interval of up to N days at temperature range T, with unpowered shaft motion up to M revolutions, the encoder shall report absolute position within the specified accuracy immediately at power-up, and shall flag any condition in which retention cannot be guaranteed. Everything else in this guide serves that sentence.",
      ],
      links: [
        {
          label: "Review incremental versus absolute encoders",
          href: "/technology/incremental-vs-absolute-encoder/",
        },
        {
          label: "Review BiSS-C absolute interface",
          href: "/technology/biss-c-encoder/",
        },
      ],
    },
    {
      heading: "Battery-backed counters: capable, but with a service obligation",
      paragraphs: [
        "Battery-backed multi-turn encoders keep the counter electronics alive with a cell sized for a stated retention duration at a stated temperature. The design is mature and tolerant: unpowered shaft rotation is generally fine within the counter range, which suits axes that move between power-off and power-on. The obligations are equally clear. The battery ages even when unused, its capacity depends on temperature and history, and its end of life is silent unless the encoder monitors it and reports a low-battery diagnostic.",
        "A buyer should therefore demand three things: a stated replacement interval with the recommended cell type, a battery-state diagnostic accessible to the controller, and a defined machine behavior on a count-invalid condition. Scheduled replacement is the honest cost of this mechanism; retrofitting a battery change procedure after a field incident is more expensive. Where machines are serviced by swapping encoder modules, plan the spare-part battery logistics too, since spares age on the shelf.",
        "Behavior at the limit matters as much as the limit itself. A well-designed encoder flags the condition before count loss occurs, and the controller responds predictably, for example by scheduling a battery change and enabling a homing fallback. A design that simply loses the count at end of life converts a maintenance item into an unplanned machine stop, and the difference is visible only in the specification documents, not in a demo.",
      ],
      subsections: [
        {
          heading: "Questions that expose battery design quality",
          paragraphs: [
            "These are the questions that separate a documented battery design from a marketing checkbox:",
          ],
          bullets: [
            "Retention duration stated at what temperature, and what shortens it?",
            "Is battery state monitored and reportable over the interface?",
            "Is the replacement interval calendar-based or load-based?",
            "What exactly happens at count-invalid: flag, position value, or silence?",
            "Can the battery be replaced without disturbing encoder alignment?",
          ],
        },
      ],
    },
    {
      heading: "Battery-free counters: removing the consumable, adding constraints",
      paragraphs: [
        "Battery-free multi-turn designs remove the cell and its replacement schedule, which is attractive for machines with long service lives, distributed installations or difficult access. Gear-based mechanical counters accumulate revolutions mechanically and read them optically at power-on; they are robust and electrically immune to count corruption, at the cost of added mechanics and a finite unpowered rotation allowance per power-off event. Energy-harvesting electronic counters generate power from shaft rotation and write the count to non-volatile memory; they handle many revolutions while unpowered, but only as long as rotation stays within the harvesting and writing capability, and very fast unpowered spinning can exceed it.",
        "The buyer's task is to match the constraint to the machine. A parking axis that moves a few turns while unpowered suits either design. A freely coasting spindle or a gravity axis that can spin rapidly on power loss needs the motion profile checked against the supplier's limit, or a brake applied before unpowered motion can occur. Documenting these cases in the machine risk analysis is what keeps a battery-free design genuinely maintenance-free.",
        "SENFU supplies absolute optical encoders with BiSS-C interfaces and states the retention mechanism, retention duration and operating limits explicitly in the configuration documentation. Where the machine's power-off profile is unusual, SENFU application engineering reviews the axis behavior and recommends the appropriate single-turn or multi-turn configuration rather than defaulting to the largest option.",
      ],
      links: [
        {
          label: "Review semiconductor-equipment applications",
          href: "/applications/semiconductor-equipment/",
        },
        { label: "Compare SENFU optical encoders", href: "/optical-encoders/" },
      ],
    },
    {
      heading: "Prove retention with a test, not a datasheet",
      paragraphs: [
        "Retention claims deserve acceptance-level evidence. The core test is simple to specify: with the axis at a recorded reference position, power the machine down for the qualified duration and temperature condition, rotate the shaft by a defined number of turns within the declared limits, power up, and compare the reported absolute position against an independent reference such as a dial indicator, a calibrated scale or the machine's metrology system. Record the deviation, the interface diagnostics and any flags raised.",
        "Repeat the test across the corners of the envelope that matter: the longest qualified power-off interval, the highest storage temperature, the maximum unpowered motion, and, for battery designs, a deliberately aged or low-battery condition if the supplier supports simulation of it. The pass criterion is not only position accuracy but also correct flagging behavior when retention is degraded, because a diagnostic that fires early is worth more than accuracy that fails silently.",
        "Write the test and its acceptance limits into the machine's qualification plan, and repeat it at battery replacement or after any service event that touches the encoder electronics. SENFU supports this verification with configuration-specific test notes and can review an integrator's retention acceptance test before commissioning, so that 'absolute' remains a demonstrated property of the machine rather than an assumption inherited from the datasheet.",
      ],
      image: {
        src: "/images/technology/absolute-encoder-data-retention-power-loss-guide/absolute-encoder-data-retention-power-loss-guide-detail.webp",
        alt:
          "Precision rotary stage with absolute encoder connected to test instrumentation during a power-loss position retention verification",
        width: 1600,
        height: 900,
      },
      links: [
        {
          label: "Review angular encoder accuracy verification protocol",
          href: "/technology/angular-encoder-accuracy-verification-protocol/",
        },
        {
          label: "Submit a retention test plan for review",
          href: "/contact/#application-form",
        },
      ],
    },
  ],
  midCta: {
    eyebrow: "RETENTION DESIGN REVIEW",
    title: "Need the multi-turn mechanism matched to your power-off profile?",
    description:
      "Send the axis list, unpowered durations, unpowered motion cases and service concept for a configuration-level retention review.",
    label: "Request the review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Absolute is a system property, not a label.",
  conclusion: [
    "Absolute position after power loss depends on the retention mechanism doing its job inside the machine's real power-off profile: duration, temperature and unpowered motion. Battery-backed counters deliver capability with a maintenance obligation; battery-free counters remove the consumable and impose motion limits. Either works well when the mechanism is written into the specification, monitored by diagnostics and proven by an acceptance test.",
    "For a SENFU technical review, send the axis configurations, power-off profile, unpowered motion cases and service plan. SENFU can confirm the appropriate single-turn or multi-turn configuration, define the diagnostics and provide the test guidance that turns retention claims into commissioning evidence.",
  ],
  routes: [
    {
      label: "SAG21 absolute feedback",
      href: "/optical-encoders/sag21/",
      note: "Absolute BiSS-C interface",
    },
    {
      label: "SMG20 linear encoder",
      href: "/optical-encoders/smg20/",
      note: "Compact high-resolution feedback",
    },
    {
      label: "Technical application review",
      href: "/contact/#application-form",
      note: "Submit the retention and service plan",
    },
  ],
  evidence: [
    "Specification sentence covering duration, temperature, unpowered motion and flagging behavior",
    "Retention mechanism documented: battery-backed, gear-based or energy-harvesting, with limits",
    "Battery diagnostics, replacement interval and count-invalid machine behavior defined",
    "Retention acceptance test: power off, qualified motion, power up, compare to independent reference",
    "Service record: battery replacements and retention re-tests logged per serial number",
  ],
  faq: [
    {
      question:
        "Does an absolute encoder lose position when power is removed?",
      answer:
        "Within one revolution, no: a single-turn absolute encoder reads its code disc optically at power-up and reports position without homing. The multi-turn count is the part that needs a retention mechanism, and whether it survives depends on the design: battery-backed, gear-based mechanical, or energy-harvesting electronic.",
    },
    {
      question:
        "How often does a multi-turn encoder battery need replacing?",
      answer:
        "It depends on the cell, temperature history and the supplier's design, which is why the datasheet's stated retention duration and the recommended replacement interval should both be written into the maintenance plan. The battery ages even when the machine is unused, and a low-battery diagnostic should be monitored by the controller so replacement is scheduled rather than discovered after a count loss.",
    },
    {
      question:
        "What happens if an energy-harvesting multi-turn encoder spins while unpowered?",
      answer:
        "It keeps counting as long as the rotation stays within the harvesting and memory-writing capability stated by the supplier. Very fast unpowered rotation can exceed that capability and lose count validity, so machines with coasting or gravity-driven motion need the profile checked at design time or a brake applied before unpowered motion.",
    },
    {
      question:
        "Is a battery-free multi-turn encoder always the better choice?",
      answer:
        "It is better when the machine can respect the motion limits and you want to eliminate battery maintenance. Gear-based designs add mechanics and have a finite unpowered rotation allowance per power-off event; harvesting designs handle more motion but not unbounded speed. A battery-backed design remains the most tolerant of unpowered motion, at the cost of a scheduled battery change.",
    },
    {
      question:
        "How can I verify retention before accepting a machine?",
      answer:
        "Specify a test: record a reference position, power off for the qualified duration and temperature, rotate the shaft within declared limits, power up, and compare reported position to an independent reference. Also verify that diagnostics and flags behave correctly in degraded conditions, and record the results in the qualification file.",
    },
    {
      question:
        "What should I send SENFU when selecting an absolute encoder for a power-loss-critical axis?",
      answer:
        "Send the axis type, the longest unpowered interval and its temperature range, expected unpowered shaft motion, whether immediate production-readiness at power-up is required, and your service concept. SENFU application engineering can recommend the appropriate single-turn or multi-turn configuration and define the acceptance test for retention.",
    },
  ],
  sources: [
    {
      publisher: "SENFU",
      label: "Absolute encoder configurations and retention specifications",
      href: "https://senfuprecision.com/resources/",
    },
    {
      publisher: "Heidenhain",
      label: "Absolute encoders: functional principles and battery-free multi-turn concepts",
      href: "https://www.heidenhain.com/",
    },
    {
      publisher: "International Electrotechnical Commission",
      label: "IEC 61131 / industrial electronics: battery and energy storage handling practice",
      href: "https://webstore.iec.ch/",
    },
    {
      publisher: "BiSS Association",
      label: "BiSS-C interface protocol: absolute position transmission and diagnostics",
      href: "https://www.biss-interface.com/",
    },
    {
      publisher: "National Institute of Standards and Technology",
      label: "Position metrology and calibration resources",
      href: "https://www.nist.gov/",
    },
  ],
};
