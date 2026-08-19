import type { EditorialPage } from "@/lib/editorial-content";

export const electronBeamLithographySystemSelection: EditorialPage = {
  eyebrow: "TECHNOLOGY / NANOFABRICATION LITHOGRAPHY",
  title: "Electron Beam Lithography Selection for Nanofabrication",
  description:
    "Compare electron beam lithography systems for nanofabrication: resolution, beam energy, write field, stitching, charging and throughput.",
  slug: "/technology/electron-beam-lithography-system-selection/",
  publishedAt: "2026-08-20",
  modifiedAt: "2026-08-20",
  primaryKeyword: "electron beam lithography system selection",
  secondaryKeywords: [
    "EBL system selection",
    "electron beam lithography for nanofabrication",
    "electron beam lithography resolution",
    "EBL write field stitching",
    "electron beam lithography acceptance testing",
  ],
  featuredImage: {
    src: "/images/technology/electron-beam-lithography-system-selection/electron-beam-lithography-system-selection-cover.webp",
    alt: "Nanofabrication engineer reviewing an electron beam lithography system column and chamber in a cleanroom",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Electron beam lithography system selection should start from the device requirement—critical dimension and pitch, pattern area, layer count, alignment budget, substrate, resist and metrology—not from a headline beam-spot number. EBL is a maskless direct-write process that can resolve features below 10 nm, but the linewidth a process actually holds depends on resist, dose, development, pattern density and the stage, while throughput is far lower than optical lithography. The real selection is a system decision spanning electron source, acceleration voltage, write field, stitching and overlay, charging control, vacuum behavior, resist compatibility, write-time cost and acceptance evidence.",
    "Send every shortlisted supplier the same technical brief and request configuration-specific answers: electron source and voltage range, beam current and current density at the operating voltage, image resolution and spot size with stated conditions, write-field list and calibration method, measured stitching and overlay with metrology, stage travel, scan speed and generator limits, vacuum specifications, supported resists, and proximity-effect correction availability. Ask which values are guaranteed, typical, calculated or process dependent, and close the decision with test patterns measured under the same process and metrology the facility will use.",
  ],
  challenge:
    "Electron beam lithography offers the highest-resolution direct-write patterning of the commonly used lithography routes, but a catalogue spot size says little about the patterns a system can actually produce. Nanofabrication teams must compare systems on electron source and voltage, write field, stitching and overlay, charging control, vacuum and bakeout behavior, resist and process compatibility, and the write-time cost of the intended workload—then close the decision with measured test-pattern evidence.",
  requirements: [
    { title: "Device requirement", description: "Critical dimension and pitch, pattern area, layer count, alignment budget, substrate, resist and process stack." },
    { title: "Beam and column", description: "Electron source, acceleration voltage range, beam current, spot size and image resolution with stated conditions." },
    { title: "Stage and writing", description: "Write field sizes, field calibration, stitching, overlay, stage travel, scan speed and job workflow." },
    { title: "Facility and process", description: "Charging control, vacuum and bakeout behavior, resist compatibility, throughput model and acceptance test." },
  ],
  comparisonTable: {
    caption: "Decision matrix for electron beam lithography system selection",
    headers: ["Decision", "Evidence to obtain", "Risk if left open"],
    rows: [
      ["Resolution target", "Test-pattern SEM with scale, resist, dose and development conditions", "Headline spot size is mistaken for usable production linewidth"],
      ["Beam energy", "Voltage range and image resolution and current at the operating voltage", "Voltage is mismatched to thin or sensitive substrates"],
      ["Write field", "Field-size list, calibration method, stage travel and scan limits", "Large patterns are split by unverified field stitching"],
      ["Stitching and overlay", "Measured stitch and overlay results with metrology and pattern class", "Multilayer devices misalign across write fields"],
      ["Charging control", "Discharge-layer and substrate-guidance for the intended material", "Charge buildup deflects the beam and destroys pattern fidelity"],
      ["Throughput", "Write-time estimate for the reference area, density, dose and current", "Tool time is underestimated in the project budget"],
      ["Acceptance", "Defined coupons, metrology, reproducibility rule and decision rule", "Commissioning data does not predict production behavior"],
    ],
  },
  articleSections: [
    {
      heading: "Start with the device requirement, not the catalogue",
      paragraphs: [
        "Begin selection with the pattern the facility actually needs to make. Electron beam lithography is a maskless, top-down direct-write process in which a focused beam of electrons changes the solubility of a resist, and development then selectively dissolves exposed or unexposed areas before etching, deposition or lift-off. Because no physical mask is produced for each revision, EBL is a natural fit for device research, small-series advanced components and photomask fabrication, where layout changes and short runs make optical mask cycles expensive.",
        "Write down the critical dimension and pitch, not only the smallest isolated line. Dense gratings, junction structures or repeated electrodes are limited by pitch, line-edge roughness and dose latitude rather than by a single demonstration feature. Record the pattern area per level, the number of levels, the alignment budget between levels and the largest substrate format the tool must handle, because these determine the required write field, stage travel, stitching and overlay behavior.",
        "Record the resist and process stack at the same time. The review literature describes EBL as a top-down technique in which positive or negative resist solubility is changed by electron exposure rather than light, with the beam scanning in raster or vector mode. Resist thickness, sensitivity, developer and the pattern-transfer method all influence which beam settings are useful, so a system compared without this stack can only be judged on numbers, not on process results.",
      ],
      links: [
        { label: "Review quantum and nanofabrication application requirements", href: "/applications/quantum-nanofabrication/" },
        { label: "Review photonics and micro-optics application requirements", href: "/applications/photonics/" },
      ],
    },
    {
      heading: "Separate beam resolution from usable pattern linewidth",
      paragraphs: [
        "Treat resolution as a process result. Dedicated EBL systems produce beams with spot sizes in the few-nanometer range, and research protocols using aberration-corrected scanning transmission electron microscopes have demonstrated sub-5 nm features in poly(methyl methacrylate) resist and better than 10 nm resolution in hydrogen silsesquioxane resist. Those demonstrations depend on instrument, resist, thickness, dose, development and metrology; they are capability evidence, not a specification every production tool must match.",
        "The ZEL304G datasheet documents an image resolution of ≤1 nm at 15 kV and ≤1.5 nm at 1 kV, a minimum spot size of ≤2 nm, and a single-exposure linewidth of <15 nm explicitly marked as process dependent. The distinction matters: image resolution describes the column under stated operating conditions, while the linewidth a process can hold depends on resist, dose, development, pattern density and substrate. Request SEM images with scale bars and the exact resist, voltage, dose and development used for every quoted result.",
      ],
      subsections: [
        {
          heading: "What to request in a resolution evidence pack",
          paragraphs: [
            "A useful response separates the column capability from the process result and gives both with conditions. Ask for the beam current and image resolution at the voltages you will use, not only at the best demonstration condition. Ask for linewidth results on isolated and dense features, line-edge or linewidth roughness, and a repeatability statement across multiple exposures. Keep the raw images and measurement settings so your team can audit the claim.",
          ],
          bullets: ["Image resolution with voltage and current conditions", "Spot size and beam current at operating settings", "Linewidth SEM with scale, resist, dose and developer", "Isolated versus dense feature results", "Repeatability across runs and calibration records"],
        },
      ],
      links: [
        { label: "Compare DMD and electron beam lithography routes", href: "/technology/dmd-vs-electron-beam-lithography/" },
        { label: "Review the ZEL304G system", href: "/lithography-systems/zel304g/" },
      ],
    },
    {
      heading: "Choose electron source and acceleration voltage deliberately",
      paragraphs: [
        "The electron source and acceleration voltage define the working envelope of the system. The ZEL304G uses a Schottky field emission source with a documented acceleration voltage range from 20 V to 30 kV, a beam current of ≥100 nA, a current density of >7000 A/cm² and a minimum spot size of ≤2 nm. These are documented datasheet values under stated conditions; the exact configuration, aperture and calibration for a given process still need to be fixed with the supplier.",
        "Acceleration voltage is a genuine tradeoff, not a ranking. Higher-energy electrons scatter less in the resist, which supports cleaner edges and finer features, but they are more likely to damage sensitive substrates. Low-voltage operation is better matched to thin or delicate samples and to devices that tolerate only shallow penetration. The review literature states this tradeoff directly: accelerated electrons can achieve higher resolution with less forward scattering, yet are more likely to cause significant damage to the substrate.",
        "Because image resolution and beam current trade against each other, request both at the voltages you will actually operate. A column that resolves a nanometer at low current may not hold the dose uniformity a dense pattern needs, while a high-current mode may be necessary to keep write time acceptable. The supplier's selection note applies the same logic: high beam current and high alignment accuracy for mask production, a wider voltage range for photonic and sensor research samples, and compact systems for small-sample development.",
      ],
      links: [
        { label: "Explore the electron beam lithography product range", href: "/lithography-systems/electron-beam-lithography/" },
        { label: "Review semiconductor equipment application requirements", href: "/applications/semiconductor-equipment/" },
      ],
    },
    {
      heading: "Match write field, stage and alignment to the pattern area",
      paragraphs: [
        "Write field, stage and alignment determine whether the pattern survives on the wafer. The ZEL304G documents a maximum write field of 500 × 500 µm with supported field sizes from 10 µm to 500 µm. Any pattern larger than one field is written in sub-fields and stitched by stage movement, so field calibration, stitching and overlay behavior are core selection criteria for large-area or multilayer work.",
        "Facility examples show what buyers can reasonably ask for. The nanofabrication laboratory at Politecnico di Milano states its dedicated research EBL system achieves patterning resolution below 10 nm, overlay and stitching accuracy below 25 nm, a 500 × 500 µm writing field and a writing speed above 1 cm² per hour, using a laser interferometer and piezo actuators for fine stage control. On interferometer-controlled stages, stitching errors are typically in the range from a few nanometers to a few tens of nanometers, so the supplier should state the measured value, the metrology and the pattern class used.",
        "For multilayer devices, define alignment marks, overlay budget and field calibration as part of the acceptance test. The ZEL304G documents field calibration, field stitching, overlay and multi-layer automatic exposure functions; these functions become meaningful only when verified with a test pattern on the actual substrate class and layer stack the facility will use.",
      ],
      image: {
        src: "/images/technology/electron-beam-lithography-system-selection/ebl-write-field-stitching-workflow.webp",
        alt: "Conceptual view of an electron beam writing sub-fields that are stitched and overlaid across a wafer",
        width: 1536,
        height: 1024,
      },
      links: [
        { label: "Read the maskless lithography RFQ and acceptance guide", href: "/technology/maskless-lithography-system-rfq/" },
        { label: "Explore hybrid optical and electron beam routes", href: "/technology/hybrid-lithography/" },
      ],
    },
    {
      heading: "Plan for charging, resist and vacuum compatibility",
      paragraphs: [
        "Plan for charging before quoting throughput. An electron beam hitting an insulating substrate or a thick dielectric film builds up charge that deflects the beam and disturbs pattern definition. DTU Nanolab's shared-facility guidance is explicit: substrates must be sufficiently conductive and grounded, and insulating substrates need a discharge layer—commonly a thin, thermally evaporated aluminum film, for example 20 nm, applied over the resist and removed before development—or a spin-on conductive layer. Include this step in the process budget and in the tool's workflow.",
        "Select resists as a process family rather than a single name. PMMA is a widely used positive resist, HSQ is a high-resolution negative resist, and high-sensitivity positive formulations can reduce write time. Resist thickness is a tradeoff: thin films support finer resolution and avoid pattern collapse, while thicker films are needed for pattern transfer such as lift-off or etch masks. Ask which resists and thickness ranges the system has been validated with, and whether the vacuum and stage configuration handle the substrate formats in your facility.",
        "Vacuum and contamination behavior determine reproducibility. The chamber must hold the base pressure the process needs, cope with outgassing from resists and substrates, and support bakeout or conditioning without degrading seals or cable materials. The supplier's own selection note highlights that some systems use multi-stage pumping with impurity adsorption to hold a stable target vacuum, and that precision systems may require higher standards for sealing-material outgassing. For a shared facility, bakeout frequency, recovery time and maintenance access can matter as much as a headline resolution.",
      ],
      image: {
        src: "/images/technology/electron-beam-lithography-system-selection/ebl-charging-resist-stack.webp",
        alt: "Layered resist and discharge stack concept showing how a thin conductive layer controls electron beam charging",
        width: 1536,
        height: 1024,
      },
      links: [
        { label: "Review MEMS and microfluidics application requirements", href: "/applications/mems-microfluidics/" },
        { label: "Download the ZEL304G electron beam overview", href: "/resources/datasheets/zel304g-electron-beam-lithography.pdf" },
      ],
    },
    {
      heading: "Model write time against your own workload",
      paragraphs: [
        "Electron beam lithography writes serially, and the review literature estimates its speed at roughly 10⁷ times slower than optical lithography methods. Write time is set by pattern area, feature density, dose, beam current, dwell increment and scan path. The ZEL304G documents a beam scan speed of ≤20 MHz, a generator maximum scan speed of 50 MHz, a 20-bit DAC and a minimum dwell increment of 10 ns; these define the electrical write path, but the practical rate still depends on the pattern and process.",
        "Estimate both a best-case and a production-representative case. A sparse test layout writes quickly, while a dense grating or a large-area pattern can require substantially more tool time. Compare suppliers on a time estimate for the same reference coupon, with current, dose, step size and stitching overhead stated. Proximity effect correction, where available, modulates dose so that sparse and dense regions receive uniform exposure; the ZEL304G documents proximity-effect correction as an optional function, and its processing time should be included in the throughput model when the design needs it.",
      ],
      bullets: [
        "Pattern area and density per level",
        "Resist dose and beam current at the operating voltage",
        "Dwell increment, scan path and generator limits",
        "Stitching and stage-move overhead between fields",
        "Proximity-effect correction processing time",
      ],
      links: [
        { label: "Compare DMD maskless and electron beam routes", href: "/technology/dmd-vs-electron-beam-lithography/" },
        { label: "Review the maskless lithography platform family", href: "/lithography-systems/maskless-lithography/" },
      ],
    },
    {
      heading: "Build an acceptance evidence package",
      paragraphs: [
        "Close the decision with an acceptance evidence package, not a datasheet comparison. Define coupons that test resolution on isolated and dense features, pitch, line-edge roughness, stitching across fields, overlay on a multilayer stack, and reproducibility across multiple runs. Specify the metrology with scale bars, the resist, voltage, dose and development conditions, and the exact tool configuration including calibration settings.",
        "Agree on the decision rule before purchase. Decide which results are acceptance criteria, which are informational, and how an inconclusive result will be handled. The evidence chain—source documents, configuration records, test data, calibration and revision control—should follow the same discipline as any precision subsystem purchase. SENFU's encoder supplier qualification guide applies the same evidence logic to position feedback and is a useful template for the lithography evaluation.",
        "Keep the raw data. A single best image can hide drift, field distortion or overlay failure. Retain maps of stitching error, overlay residuals and linewidth distribution so the commissioning result can be compared with production behavior later, and so the acceptance test remains auditable after the system is in service.",
      ],
      links: [
        { label: "Read the supplier evidence and qualification guide", href: "/technology/optical-encoder-supplier-qualification/" },
        { label: "Browse available datasheets and drawings", href: "/resources/" },
      ],
    },
    {
      heading: "Send suppliers a complete selection brief",
      paragraphs: [
        "Give every shortlisted supplier the same selection brief. Include the device stack, critical dimension and pitch, pattern area per level, layer count and alignment budget, substrate materials and formats, resist plan, cleanroom or vacuum environment, expected workload and the metrology available. Mark which values are fixed and which are still under development, so responses can be compared without ambiguity.",
        "Request configuration-specific answers: electron source and voltage range, beam current and current density at the operating voltage, spot size and image resolution with conditions, write-field list and calibration method, measured stitching and overlay with metrology, stage travel, scan speed and generator limits, vacuum specifications, supported resists and proximity-effect correction availability. Ask which values are guaranteed, typical, calculated or process dependent, and ask for the exact drawing and software revision used in the response.",
        "SENFU supplies the ZEL304G electron beam lithography system with the functions documented in the electron beam overview, including field calibration, stitching, overlay and multi-layer automatic exposure, plus optional proximity-effect correction. Submit the device requirement through the application form and SENFU can review it against the documented configuration and identify the test evidence that must be closed before a purchase decision.",
      ],
      links: [
        { label: "Review the ZEL304G system page", href: "/lithography-systems/zel304g/" },
        { label: "Download the ZEL304G datasheet", href: "/resources/datasheets/zel304g-electron-beam-lithography.pdf" },
        { label: "Submit the EBL selection brief", href: "/contact/#application-form" },
        { label: "Read SENFU's source-backed engineering approach", href: "/about/" },
      ],
    },
  ],
  midCta: {
    eyebrow: "EBL SELECTION REVIEW",
    title: "Have a device stack and target feature set?",
    description:
      "Send the critical dimensions, pattern area, substrate, resist plan and environment for a configuration-level electron beam lithography review.",
    label: "Review the EBL brief",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Qualify the process result, then the platform.",
  conclusion: [
    "Electron beam lithography system selection for nanofabrication starts with the device requirement and ends with measured test patterns. The comparison should cover electron source and acceleration voltage, write field, stitching and overlay, charging control, vacuum behavior, resist compatibility and a realistic write-time model—not a single resolution number.",
    "For a SENFU technical review, send the device stack, critical features, pattern area, alignment budget, substrate and resist plan, environment and workload. SENFU can review the requirement against the ZEL304G configuration and the documented datasheet, and define the test evidence needed before the facility commits to a platform.",
  ],
  routes: [
    { label: "ZEL304G electron beam system", href: "/lithography-systems/zel304g/", note: "Review documented specifications" },
    { label: "Electron beam lithography range", href: "/lithography-systems/electron-beam-lithography/", note: "Compare the system family" },
    { label: "DMD vs electron beam route", href: "/technology/dmd-vs-electron-beam-lithography/", note: "Choose the patterning route" },
    { label: "Technical application review", href: "/contact/#application-form", note: "Submit the EBL requirement" },
  ],
  evidence: [
    "Test-pattern SEM images with scale and full process conditions",
    "Beam current and image resolution at the operating voltage",
    "Measured stitching and overlay results with metrology",
    "Discharge-layer and vacuum guidance for the substrate class",
    "Write-time estimate for a representative pattern and dose",
    "Acceptance criteria, decision rule and raw data retention",
  ],
  faq: [
    {
      question: "What is the difference between EBL resolution and the linewidth I can actually use?",
      answer:
        "Resolution describes the column or instrument capability under stated conditions, while linewidth is a process result that depends on resist, dose, development, pattern density and substrate. Request SEM images with scale bars and the exact process conditions, and treat a quoted minimum linewidth as process dependent unless the supplier states otherwise.",
    },
    {
      question: "Does a smaller electron beam spot always mean a better system?",
      answer:
        "No. A small spot is only useful if the beam delivers enough current at the operating voltage, stays stable, and is matched by a calibrated stage and process. A system with a slightly larger spot but better current stability, stitching or throughput can outperform a headline spot size for a real workload.",
    },
    {
      question: "What acceleration voltage should I choose?",
      answer:
        "It depends on the process stack. Higher voltage reduces forward scattering and supports cleaner edges but can damage sensitive substrates; lower voltage suits thin or delicate samples. Choose the range that covers your devices, then evaluate image resolution and beam current at the voltages you will actually use.",
    },
    {
      question: "How do I evaluate field stitching and overlay?",
      answer:
        "Ask for measured stitching and overlay results with the metrology, pattern class and calibration settings used, ideally on the same substrate class. Verify with test coupons that cross field boundaries and stack multiple layers, and include a repeatability run in the acceptance test.",
    },
    {
      question: "Why does an insulating substrate need a discharge layer?",
      answer:
        "Electron exposure builds up charge on insulating substrates or thick dielectric films, deflecting the beam and disturbing pattern definition. Shared-facility guidance recommends conductive, grounded substrates or a thin discharge layer over the resist—for example 20 nm of thermally evaporated aluminum removed before development—or a spin-on conductive layer.",
    },
    {
      question: "What should I send SENFU for an EBL selection review?",
      answer:
        "Send the device stack, critical dimension and pitch, pattern area per level, layer count and alignment budget, substrate materials and formats, resist plan, environment, workload and available metrology. SENFU can review the requirement against the ZEL304G configuration and datasheet and identify the evidence to close before purchase.",
    },
  ],
  sources: [
    {
      publisher: "Discover Nano (Springer)",
      label: "Advances in lithographic techniques for precision nanostructure fabrication in biomedical applications",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10713959/",
    },
    {
      publisher: "Journal of Visualized Experiments (Brookhaven National Laboratory Center for Functional Nanomaterials)",
      label: "Single-Digit Nanometer Electron-Beam Lithography with an Aberration-Corrected Scanning Transmission Electron Microscope",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6235187/",
    },
    {
      publisher: "DTU Nanolab",
      label: "Electron-Beam Lithography at DTU Nanolab",
      href: "https://labadviser.nanolab.dtu.dk/index.php?title=Specific_Process_Knowledge/Lithography/EBeamLithography/EBLLandingpage",
    },
    {
      publisher: "PoliFab, Politecnico di Milano",
      label: "EBL System — Raith Voyager",
      href: "https://www.polifab.polimi.it/equipment/ebl-system-raith-voyager/",
    },
    {
      publisher: "ZEPTOOLS",
      label: "Electron beam lithography system selection reference points and working-condition matching",
      href: "https://www.zeptools.com/news/xingyedongtai/2026/0727/3418.html",
    },
  ],
};
