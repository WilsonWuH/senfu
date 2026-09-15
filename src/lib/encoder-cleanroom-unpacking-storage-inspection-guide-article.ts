import type { EditorialPage } from "@/lib/editorial-content";

export const encoderCleanroomUnpackingStorageInspectionGuideArticle: EditorialPage = {
  eyebrow: "TECHNOLOGY / QUALITY & HANDLING",
  title: "Encoder Cleanroom Unpacking, Storage and Incoming Inspection Guide",
  description:
    "Protect encoder accuracy before installation: receiving procedure, ESD and cleanroom handling, storage limits, packaging controls and incoming inspection evidence for optical scale and readhead assemblies.",
  slug: "/technology/encoder-cleanroom-unpacking-storage-inspection-guide/",
  publishedAt: "2026-09-16",
  modifiedAt: "2026-09-16",
  primaryKeyword: "encoder cleanroom handling and storage",
  secondaryKeywords: [
    "encoder incoming inspection procedure",
    "optical scale storage conditions",
    "encoder ESD handling precautions",
    "encoder shelf life and packaging",
    "linear scale receiving inspection",
  ],
  featuredImage: {
    src: "/images/technology/encoder-cleanroom-unpacking-storage-inspection-guide/encoder-cleanroom-unpacking-storage-inspection-guide-cover.webp",
    alt:
      "Gloved technician inspecting an optical encoder scale assembly under a microscope on a cleanroom workbench with ESD controls",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Most encoder damage that appears later as accuracy or signal complaints happens before installation: during shipping, unpacking, temporary storage or first handling. Optical scales and readheads are precision parts with tight geometry, coated optical surfaces and sensitive electronics, so receiving, storage and incoming inspection deserve a written procedure rather than improvisation at the dock.",
    "The core rules are simple. Keep parts in original moisture-barrier packaging until the point of use, respect the supplier's temperature, humidity and shelf-life limits, handle scales by the mounting features rather than the measurement surface, enforce ESD discipline around readhead electronics, and document an incoming inspection that records identification, visual condition, packaging state and, where specified, an electrical check on the bench before the part is committed to a build.",
  ],
  challenge:
    "A machine builder receives encoder components weeks or months before they are installed. In that interval the parts pass through goods-in, stores, kitting and pre-assembly, each with different handling habits and environmental control. A scale can be scratched by the wrong glove, a readhead can absorb moisture through a punctured moisture-barrier bag, a graduated scale can be laid on an uneven bench and take a subtle bow, and none of this is visible when the part is finally mounted. The failure then presents as an encoder problem at commissioning, when the root cause lives in the receiving and storage records nobody kept.",
  requirements: [
    {
      title: "Receiving procedure",
      description:
        "Defined inspection at goods-in: packaging integrity, moisture indicators, part identification against the delivery note, and photographic records before anything leaves its packaging.",
    },
    {
      title: "Handling and ESD controls",
      description:
        "Glove, tooling and workbench rules for optical surfaces and readhead electronics, with ESD-safe grounding for any unbagged handling.",
    },
    {
      title: "Storage specification",
      description:
        "Temperature, humidity, shelf-life and re-bake requirements that respect the supplier's packaging limits and the scale's material stability.",
    },
    {
      title: "Incoming inspection evidence",
      description:
        "A checklist with acceptance criteria and recorded results, referenced by serial number, so any later field issue can be traced back to the part's condition at receipt.",
    },
  ],
  comparisonTable: {
    caption:
      "Typical receiving and storage risks, and the practice that removes each",
    headers: ["Risk stage", "Typical failure mode", "Preventive practice", "Evidence to record"],
    rows: [
      [
        "Transport and goods-in",
        "Impact or vibration damage; punctured moisture-barrier bag lost among other cartons",
        "Inspect outer packaging on arrival, photograph damage before signing, retain packing materials for a claim",
        "Packaging condition, photos, courier claim reference if applicable",
      ],
      [
        "Unpacking",
        "Optical surface touched or abraded; readhead cable strain relieved incorrectly during removal",
        "Unpack on a clean, grounded bench; handle scales by mounting features; keep cable service loops natural",
        "Unpacking checklist entry with serial number",
      ],
      [
        "Temporary storage",
        "Condensation from moving parts between temperature zones; expired desiccant; shelf-life overrun",
        "Keep original sealed packaging until point of use; respect humidity-indicator limits; obey supplier storage temperature range",
        "Storage location, environmental log, humidity-indicator reading",
      ],
      [
        "Handling in kitting",
        "Scale bowed by point support; glove residue on graduations; ESD event on readhead electronics",
        "Support scales at supplier-specified points, use powder-free ESD-safe gloves, ground handlers at cleanroom wrist straps",
        "Kitting transfer record with handler initials",
      ],
      [
        "Incoming inspection",
        "Defect discovered only at installation; no baseline for a claim",
        "Bench check of identification, visual condition and, where specified, signal or interface check before build commitment",
        "Inspection record with acceptance result and tester signature",
      ],
    ],
  },
  articleSections: [
    {
      heading: "Receive and inspect at goods-in without opening what you must not open",
      paragraphs: [
        "Incoming control begins at the delivery note, not at the workbench. Check the outer packaging for crush marks, punctures and signs of tipping, and photograph any damage before signing for the consignment: courier claims move quickly only when the condition at arrival is documented. Confirm part numbers, serial numbers and quantities against the order, and confirm that any temperature- or humidity-sensitive items carry their intended indicators. If a package is damaged, do not unpack it; contact the supplier with photographs while the packing materials are still intact.",
        "Moisture-barrier bags used for optical and electronic components carry a humidity indicator card visible through a window or after controlled opening. If the indicator shows that humidity inside the bag has risen beyond the manufacturer's threshold, or the bag is punctured, treat the contents as suspect: log the event, keep the part quarantined from production and follow the supplier's re-bake or re-inspection instruction rather than assuming the part is fine because it looks fine.",
        "Record what arrived and in what condition, referenced by serial number. This record costs a few minutes and is the difference between a defensible supplier claim and an argument three months later about when a defect appeared.",
      ],
      links: [
        {
          label: "Review optical encoder supplier qualification",
          href: "/technology/optical-encoder-supplier-qualification/",
        },
        {
          label: "Review precision-motion application requirements",
          href: "/applications/precision-motion/",
        },
      ],
    },
    {
      heading: "Handle like a metrology part, not like a bracket",
      paragraphs: [
        "An optical scale is a precision artifact: its graduations, coating and flatness define the accuracy the readhead will see. Handle scales by their designated mounting or support features, never by gripping the measurement surface, and never lay a scale flat on a hard bench unsupported. When a scale must be staged temporarily, support it at the points the supplier's installation drawing specifies, on clean soft material, and keep it in its protective sleeve until mounting.",
        "Readheads and their interfaces are electronics as well as optics. Enforce ESD discipline whenever a readhead is outside its protective bag: grounded bench mat, wrist strap and ESD-safe containers. Use clean powder-free gloves for all contact with optical surfaces; bare-hand contact leaves residues that alter reflectivity and become visible later as signal-level anomalies at specific scale positions, a fault that is hard to distinguish from contamination inside the machine.",
        "Cable strain relief matters during unpacking too. Do not suspend a readhead by its cable and do not form the cable into bends tighter than the supplier's minimum bend radius while handling. A cable damaged in kitting produces the same intermittent signal symptoms as one damaged in the chain months later, with far less traceable history.",
      ],
      subsections: [
        {
          heading: "Cleanroom and controlled-environment practice",
          paragraphs: [
            "Where unpacking happens inside a cleanroom or a controlled assembly area, the same rules apply with tighter limits: work only on laminar-flow or designated clean benches for any operation that exposes optical surfaces, keep packaging materials out of the clean zone, and avoid cardboard and paper near exposed scales.",
          ],
          bullets: [
            "Powder-free ESD-safe gloves, changed whenever contamination is suspected",
            "Scales supported at specified points; never clamped or stacked",
            "Protective sleeves retained until the point of installation",
            "No unbagged readhead handling without a grounded wrist strap",
            "Cleaning only per supplier instruction; no solvents or wipes of uncertain grade",
          ],
        },
      ],
    },
    {
      heading: "Store to the supplier's limits, not the storeroom's habits",
      paragraphs: [
        "Storage requirements for encoder components are set by two constraints. The first is the packaging: moisture-barrier bags and desiccant have a defined shelf life, and once a bag is opened or its indicator trips, the protection clock restarts only after correct re-baking and resealing. The second is the part itself: scale substrates and adhesives have temperature limits for long-term exposure, and thermal cycling between a cold truck and a warm storeroom can condense moisture onto optical surfaces if parts are opened too early.",
        "Practical rules that prevent most storage damage: keep parts in original sealed packaging until the point of use; store at the supplier's specified temperature and humidity range rather than general storeroom ambient; allow packages to reach room temperature before opening after a cold transport leg; log storage durations against shelf life for any part held beyond a few months; and rotate stock so the oldest qualifying parts are used first.",
        "For projects with long lead times between receipt and build, such as semiconductor tools or instruments with staged delivery, agree the storage plan with the encoder supplier up front. SENFU supplies storage and handling requirements with its encoder configurations and can review a storeroom or kitting process where parts will be held for extended periods, so that the accuracy specified on the datasheet survives the interval between delivery and installation.",
      ],
      links: [
        {
          label: "Review linear encoder installation and alignment errors",
          href: "/technology/linear-encoder-installation-alignment-errors/",
        },
        { label: "Compare SENFU optical encoders", href: "/optical-encoders/" },
      ],
    },
    {
      heading: "Make incoming inspection a recorded acceptance gate",
      paragraphs: [
        "Incoming inspection should be proportionate but written down. A sensible baseline for encoder components: verify identification and serial numbers against the delivery and order; inspect packaging, bags and humidity indicators; inspect exposed surfaces only to the extent the packaging allows without violating the handling rules; and perform an electrical check on the bench where the supplier's documentation specifies one, using the recommended interface equipment and a powered-up verification per the supplier's test note.",
        "What to do when inspection finds an anomaly is part of the procedure, not an improvisation: photograph the finding, quarantine the part with its packaging, and open a quality notification with the supplier. Never return a suspect part to stock, and never reinstall an opened moisture-barrier bag without resealing it correctly.",
        "Document the result per serial number with a named inspector and date. When a commissioning issue later implicates an encoder, this record lets both parties determine whether the condition existed at receipt or developed in the machine, which is exactly the question that decides a warranty discussion. SENFU supports this gate with configuration-specific inspection criteria and can review an integrator's receiving procedure before the first delivery arrives.",
      ],
      image: {
        src: "/images/technology/encoder-cleanroom-unpacking-storage-inspection-guide/encoder-cleanroom-unpacking-storage-inspection-guide-detail.webp",
        alt:
          "Optical encoder scale held by its mounting features for bench inspection beside a sealed moisture-barrier bag and humidity indicator card",
        width: 1600,
        height: 900,
      },
      links: [
        {
          label: "Review semiconductor-equipment applications",
          href: "/applications/semiconductor-equipment/",
        },
        {
          label: "Submit a receiving and storage plan for review",
          href: "/contact/#application-form",
        },
      ],
    },
  ],
  midCta: {
    eyebrow: "RECEIVING & STORAGE REVIEW",
    title: "Storing encoder components between delivery and build?",
    description:
      "Send the part configurations, storage duration and environment for a configuration-specific handling and storage review before delivery.",
    label: "Request the storage review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Accuracy is preserved, not only manufactured.",
  conclusion: [
    "An encoder's accuracy survives delivery only if receiving, storage and handling treat the component as a metrology artifact: sealed until use, stored to specification, handled by the right features, and inspected against a written checklist with records per serial number. Most of the effort is procedure and discipline rather than cost, and it removes a class of field failures that otherwise presents as unexplained encoder defects at commissioning.",
    "For a SENFU review, send the encoder configurations, planned storage duration and environment, and your current receiving checklist. SENFU can provide configuration-specific handling, storage and incoming inspection criteria that plug into your quality system and support the acceptance record.",
  ],
  routes: [
    {
      label: "SMG20 linear encoder",
      href: "/optical-encoders/smg20/",
      note: "Compact high-resolution feedback",
    },
    {
      label: "SAG21 absolute feedback",
      href: "/optical-encoders/sag21/",
      note: "Absolute BiSS-C interface",
    },
    {
      label: "Technical application review",
      href: "/contact/#application-form",
      note: "Submit the receiving and storage plan",
    },
  ],
  evidence: [
    "Goods-in record: packaging condition, identification and serial numbers per delivery",
    "Humidity indicator readings and bag integrity for moisture-barrier packaging",
    "Storage environmental log against supplier temperature, humidity and shelf-life limits",
    "Incoming inspection checklist with acceptance results, inspector and date per serial number",
    "Quality notifications and supplier responses for any anomaly found at receipt",
  ],
  faq: [
    {
      question:
        "Can I store optical encoder scales in the original packaging for a year or more?",
      answer:
        "Often yes, but only if the packaging remains sealed and within its shelf life and the storeroom respects the supplier's temperature and humidity limits. For long holds, log the storage duration and check humidity indicators periodically; once a moisture-barrier bag is opened, reseal correctly or follow the supplier's re-bake instruction rather than assuming protection continues.",
    },
    {
      question: "What should incoming inspection of a readhead actually include?",
      answer:
        "At minimum: identification and serial verification, packaging and humidity-indicator condition, and a visual check of anything safely visible without violating handling rules. Where the supplier's documentation specifies an electrical check, perform it on a grounded bench with the recommended interface equipment and record the result per serial number before the part is committed to a build.",
    },
    {
      question:
        "Why do gloves matter so much for optical scales?",
      answer:
        "Bare-hand contact leaves fingerprints and residues on the scale surface that change local reflectivity. The symptom later is signal-level or interpolation anomalies at specific scale positions, which is expensive to diagnose in a built machine and usually requires cleaning or replacement. Powder-free ESD-safe gloves used from receiving onward avoid the problem entirely.",
    },
    {
      question:
        "A package arrived dented but the part looks fine. Can I use it?",
      answer:
        "Do not decide by appearance alone. Photograph the packaging damage, do not fully unpack, and contact the supplier while packing materials are intact. Impact that dents an outer carton can transfer to scale mounts or readhead mechanics, and the supplier needs the packaging evidence to assess the transport event and process any claim.",
    },
    {
      question:
        "Do encoder components need cleanroom storage?",
      answer:
        "Not usually. What they need is the supplier's specified temperature and humidity range, sealed protective packaging and clean handling conditions. Cleanroom discipline matters at unpacking and pre-assembly when optical surfaces are exposed, not necessarily in the storeroom itself.",
    },
    {
      question:
        "What should I send SENFU to define inspection criteria for our receiving process?",
      answer:
        "Send the encoder configurations and quantities, the planned interval between delivery and installation, the storage environment, and your current receiving checklist. SENFU can map configuration-specific handling, storage and incoming inspection requirements onto your quality procedure so the acceptance record is traceable from delivery to commissioning.",
    },
  ],
  sources: [
    {
      publisher: "International Electrotechnical Commission",
      label: "IEC 61340 series — Electrostatics: ESD control and protection",
      href: "https://webstore.iec.ch/en/publication/64922",
    },
    {
      publisher: "EOS/ESD Association",
      label: "ANSI/ESD S20.20 — Protection of electrical and electronic parts and equipment",
      href: "https://www.esda.org/standards/",
    },
    {
      publisher: "SENFU",
      label: "Encoder handling, storage and incoming inspection guidance",
      href: "https://senfuprecision.com/resources/",
    },
    {
      publisher: "International Organization for Standardization",
      label: "ISO 14644 series — Cleanrooms and associated controlled environments",
      href: "https://www.iso.org/standard/71160.html",
    },
    {
      publisher: "International Electrotechnical Commission",
      label: "IEC 60721-3-3 — Classification of environmental conditions for stationary use",
      href: "https://webstore.iec.ch/en/publication/4014",
    },
  ],
};
