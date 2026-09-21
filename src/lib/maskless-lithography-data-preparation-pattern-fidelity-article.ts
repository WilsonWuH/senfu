import type { EditorialPage } from "@/lib/editorial-content";

export const masklessLithographyDataPreparationPatternFidelity: EditorialPage = {
  eyebrow: "TECHNOLOGY / LITHOGRAPHY DATA",
  title: "Maskless Lithography Data Preparation: Formats, Fracturing, Corner Rounding and a Pattern Fidelity Checklist",
  description: "Pattern fidelity in maskless lithography is decided before the substrate is loaded. This guide covers layout formats and units, fracture versus rasterization choices, the resolution and write-time trade-off, corner rounding and CD control, and a practical checklist for data preparation.",
  slug: "/technology/maskless-lithography-data-preparation-pattern-fidelity/",
  publishedAt: "2026-09-21",
  modifiedAt: "2026-09-21",
  primaryKeyword: "maskless lithography data preparation",
  secondaryKeywords: [
    "lithography pattern fidelity",
    "GDSII OASIS DXF lithography data",
    "fracture rasterization write time",
    "corner rounding CD control",
    "maskless lithography grid size",
    "layout data preparation checklist",
  ],
  featuredImage: {
    src: "/images/technology/maskless-lithography-data-preparation-pattern-fidelity/maskless-lithography-data-preparation-pattern-fidelity-cover.webp",
    alt: "Data preparation workstation in a lithography laboratory with a layout file displayed on screen beside a maskless lithography system in the background",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Data preparation decides pattern fidelity before exposure begins. Three choices dominate: the input format and its unit and grid handling, the conversion strategy into write primitives, and the grid or pixel size relative to the minimum feature. Get the units wrong and the pattern is scaled by a thousand. Choose a grid too coarse and corners round and line ends shorten. Choose a grid too fine and write time grows with the square of the improvement.",
    "A workable rule is to import vector layout in GDSII or OASIS with the database unit and grid stated explicitly, snap geometry once and deliberately, flatten only where the writer requires it, and select a pixel or grid size between roughly one fifth and one tenth of the smallest dimension you must control. Then budget corner rounding and line-end pullback as known offsets and compensate them in the data rather than discovering them in the SEM image.",
  ],
  challenge: "Maskless lithography removes the photomask, which moves the entire fidelity burden onto the data path. There is no mask shop to catch a unit error, a self-intersecting polygon or a doubling of dose where two shapes overlap. The writer faithfully exposes whatever the file describes, including its mistakes. In practice most first-run pattern defects are not optical or mechanical at all: they are a database unit interpreted as micrometres instead of nanometres, a hierarchy that flattened into overlapping shapes, a raster grid coarse enough to round every corner, or a fracture setting that produced a shot count nobody budgeted time for. These failures are cheap to prevent and expensive to diagnose, because the micrograph looks like a process problem and the investigation starts at the resist rather than at the file.",
  requirements: [
    { title: "Know the format and its units", description: "State whether the layout arrives as GDSII, OASIS, DXF or a bitmap, and confirm the database unit, user unit and intended grid before any geometry is snapped or scaled." },
    { title: "Choose the conversion strategy deliberately", description: "Decide between fracturing into vector shots and rasterizing onto a pixel grid, and match that decision to the writer architecture, the feature mix and the time budget." },
    { title: "Set the grid from the critical dimension", description: "Select a pixel or step size relative to the smallest controlled dimension, and accept that write time scales with the square of the pixel count across the patterned area." },
    { title: "Budget known geometric offsets", description: "Treat corner rounding, line-end shortening and proximity-driven bias as predictable offsets to be compensated in the data and verified by measurement." },
  ],
  routes: [
    { label: "Maskless lithography systems", href: "/lithography-systems/maskless-lithography/", note: "Compare ZML platforms" },
    { label: "Throughput and write time", href: "/technology/maskless-lithography-throughput-writing-time-guide/", note: "Budget the exposure time" },
    { label: "Dose calibration and uniformity", href: "/technology/maskless-lithography-dose-calibration-uniformity/", note: "Close the CD loop" },
    { label: "Discuss a data workflow", href: "/contact/#application-form", note: "Send a sample layout" },
  ],
  evidence: [
    "Import report stating source format, database unit, user unit, applied scale and snap grid",
    "Conversion log with shape count, shot or pixel count, and estimated write time for the chosen settings",
    "Micrograph of the critical structure with scale, magnification and the measurement method stated",
    "CD measurement set with sampling locations and uniformity result across the patterned area",
    "Corner and line-end comparison between the design intent and the measured pattern",
  ],
  comparisonTable: {
    caption: "Data preparation decisions in maskless lithography and their effect on fidelity and write time",
    headers: ["Decision", "Options", "Effect on fidelity", "Effect on write time"],
    rows: [
      ["Input format", "GDSII or OASIS for vector layout, DXF for CAD geometry, bitmap for raster input", "Vector formats preserve edges at any output resolution; bitmaps fix the resolution at export and cannot be refined", "Indirect; a bitmap of the wrong resolution may force a re-export rather than a longer exposure"],
      ["Units and snap grid", "Explicit database unit with a deliberate snap, versus implicit default handling", "A misread unit scales the whole pattern; an inappropriate grid shifts edges by up to half a grid step", "Negligible, but an undetected unit error wastes an entire run"],
      ["Hierarchy handling", "Preserve hierarchy, or flatten before conversion", "Flattening can create overlapping shapes that double the local dose and change the developed result", "Flattened files can be far larger to process, adding preparation time before exposure starts"],
      ["Conversion strategy", "Fracture into vector shots, or rasterize onto a pixel grid", "Fracturing preserves edges as drawn; rasterizing quantizes every edge onto the grid", "Fracture time scales with shape count; raster time scales with pixel count across the area"],
      ["Grid or pixel size", "Coarse grid for speed, fine grid for edge definition", "A finer grid reduces corner rounding and line-end shortening; a coarse grid rounds both", "Halving the grid multiplies the pixel or shot count by roughly four, and the write time follows"],
      ["Grayscale and dose assignment", "Binary exposure, or multilevel dose per pixel or shape", "Grayscale edge pixels smooth staircase edges and can compensate corner loss; binary exposure shows the grid directly", "Multilevel writing can add dose levels and settling time, increasing exposure time for the same area"],
      ["Proximity and bias correction", "No correction, geometric bias, or model-based correction", "Correction restores line ends, corners and dense-to-isolated parity", "Correction runs in preparation, not on the tool, so exposure time is largely unaffected"],
      ["Verification", "Single micrograph, or a defined sampling plan with measurement conditions", "A single image hides across-field CD variation and edge roughness", "Inspection time increases, but it prevents a repeat exposure of the full pattern"],
    ],
  },
  articleSections: [
    {
      heading: "Start with the format, the units and the grid",
      paragraphs: [
        "GDSII and OASIS are the natural inputs for semiconductor-style layout because they store polygons with an explicit database unit and a hierarchy. OASIS handles large files far more compactly, which matters once a design reaches the point where GDSII export itself becomes the slow step. DXF is the practical route when the geometry originates in mechanical CAD, as it often does for microfluidic channels and MEMS structures, but it carries less layout discipline and more opportunities for open polygons, duplicate edges and inconsistent units. Bitmaps are appropriate when the pattern is genuinely pixel-native, such as a grayscale height map, and a poor choice otherwise, because the resolution is fixed at export and cannot be refined later.",
        "The unit question deserves its own line in every preparation procedure. State the database unit, the user unit, the applied scale factor and the snap grid, and record them in an import report. Then snap geometry once, deliberately, at a grid chosen for the design rather than accepting an import default. Two habits prevent most scaling disasters: verify a known dimension in the imported data against the design database before conversion, and place a deliberate reference structure of known size in the layout so any scale error is visible in the first micrograph.",
      ],
      links: [
        { label: "Compare maskless lithography platforms", href: "/lithography-systems/maskless-lithography/" },
        { label: "Review alignment and overlay practice", href: "/technology/maskless-lithography-alignment-overlay-accuracy-guide/" },
      ],
    },
    {
      heading: "Fracture or rasterize: choosing the conversion strategy",
      paragraphs: [
        "Every writer needs primitives. A vector writer fractures polygons into shots, typically rectangles and trapezoids of bounded size, so edges are preserved as drawn and the cost scales with the number of shots and the area they cover. A spatial-light-modulator or raster writer converts the layout onto a fixed pixel grid, so every edge is quantized onto that grid and the cost scales with the pixel count across the patterned area. Neither is universally better; the right choice follows the feature mix and the writer architecture.",
        "In practice the decision is usually made for you by the tool, and the real decision is how to use it well. For dense, mostly Manhattan geometry, vector fracturing keeps shot counts modest and edges clean. For curved, grayscale or topographical structures, raster output with dose modulation is the natural fit and gives predictable three-dimensional profiles. Where a design mixes both, splitting the layout by layer and assigning each layer to the strategy that suits it is often better than forcing one conversion onto everything.",
      ],
    },
    {
      heading: "Resolution versus write time, and why the cost is quadratic",
      paragraphs: [
        "Raster writing makes the trade-off painfully explicit. The number of pixels across a patterned area scales with the inverse square of the pixel size, so halving the pixel size multiplies the pixel count by four for the same area, and the exposure time follows unless the writer can project four times as many pixels in the same frame time. Halving again costs another factor of four. This is why the grid should be selected from the smallest dimension that must actually be controlled, not set to the smallest value the tool offers.",
        "A useful starting point is a pixel or step size between roughly one fifth and one tenth of the minimum controlled dimension, which keeps grid quantization well below the process blur while avoiding pointless exposure time. Finer than that buys little, because below a certain point the edge is defined by the optical or beam spread function and the resist rather than by the grid. Coarser than that puts the grid itself into the error budget, and the symptom is visible immediately: staircase edges, rounded corners and shortened line ends.",
      ],
      image: {
        src: "/images/technology/maskless-lithography-data-preparation-pattern-fidelity/maskless-lithography-data-preparation-pattern-fidelity-fracture.webp",
        alt: "Lithography engineer reviewing a fractured and rasterized layout on a data preparation workstation screen with the exposure grid and shot count displayed beside the pattern preview",
        width: 1600,
        height: 900,
      },
      links: [
        { label: "Budget write time properly", href: "/technology/maskless-lithography-throughput-writing-time-guide/" },
      ],
    },
    {
      heading: "Corner rounding, line ends and where CD error really comes from",
      paragraphs: [
        "Three mechanisms shape the printed edge, and they add. Grid quantization places every boundary on a discrete lattice, so an interior corner loses material and a convex corner gains a staircase. The exposure system spreads energy over a finite area, whether that is an optical point-spread function or a beam with scattering tails, which smooths the corner further and shortens line ends. The resist and its development then apply a contrast-dependent threshold, converting a gradient in deposited energy into the final edge position.",
        "Because all three are systematic, they can be budgeted and compensated rather than endured. Geometric bias adjusts the drawn edge inward or outward to land the developed edge on target. Corner compensation, serifs or small end extensions restore material where corners and line ends predictably lose it. Assigning intermediate dose to edge pixels, or using grayscale levels, replaces a staircase with a smooth ramp and recovers corner definition without halving the grid. Model-based proximity correction addresses the remaining density-dependent term, which is what separates an isolated line from a dense line at the same drawn width.",
      ],
      links: [
        { label: "Close the dose and uniformity loop", href: "/technology/maskless-lithography-dose-calibration-uniformity/" },
        { label: "Check substrate and resist compatibility", href: "/technology/maskless-lithography-substrate-resist-compatibility/" },
      ],
    },
    {
      heading: "Measuring the result so fidelity is a number, not an impression",
      paragraphs: [
        "Fidelity claims need measurement conditions attached. State the instrument, the magnification, the calibration status and where on the sample the image was taken. A single attractive micrograph at the centre of the field says nothing about across-field CD variation, and CD variation is usually what breaks a device rather than the mean width. Define a sampling plan with fixed locations, measure the same structures in the same order, and record the spread as well as the mean.",
        "Compare design intent against measurement explicitly for the features that matter: corner radius, line-end pullback, sidewall angle, isolated versus dense parity, and CD uniformity across the patterned area. When the measured corner differs from the predicted corner, the cause is usually a data path assumption rather than a process surprise, so the first check is the import report and the conversion log rather than the resist.",
      ],
    },
    {
      heading: "A pattern fidelity checklist to run before every exposure",
      paragraphs: [
        "Run the same short list every time and most first-run defects disappear. Confirm the source format and version, the database unit, the user unit and the applied scale. Confirm the snap grid and verify one known dimension against the design database. Check for open or self-intersecting polygons and for overlapping shapes that would double the local dose after flattening. Confirm the layer-to-process mapping, the origin, the rotation and whether the pattern is mirrored relative to the substrate.",
        "Then confirm the conversion output: shot or pixel count, estimated write time, and the chosen grid size relative to the minimum controlled dimension. Confirm the dose assignment and any bias or proximity correction that has been applied, and record it with the job so the result can be reproduced. Finally expose a test structure carrying known dimensions, corner targets and line-end targets alongside the real pattern, so any systematic offset is measured on a feature designed to reveal it rather than inferred from a device.",
      ],
      bullets: [
        "Format, version, database unit and user unit recorded",
        "Snap grid chosen deliberately and one known dimension verified",
        "Open, self-intersecting and overlapping geometry checked",
        "Origin, rotation, mirroring and layer mapping confirmed",
        "Grid or pixel size set relative to the minimum controlled dimension",
        "Shot or pixel count and estimated write time reviewed before exposure",
        "Bias, serif and proximity settings recorded with the job",
        "Test structure with corners, line ends and known dimensions included",
        "Measurement plan defined with instrument, magnification and sampling locations",
      ],
      links: [
        { label: "Discuss a data preparation workflow", href: "/contact/#application-form" },
        { label: "Compare DMD and electron-beam routes", href: "/technology/dmd-vs-electron-beam-lithography/" },
      ],
    },
  ],
  conclusion: [
    "Maskless lithography is fast to iterate precisely because there is no mask between the design and the substrate, and that same property makes the data path the place where fidelity is won or lost. Fix the units, choose the grid from the critical dimension, decide the conversion strategy by feature type, budget corner rounding and line-end pullback as known offsets, and verify against a test structure designed to expose them. Teams that treat data preparation as part of the process rather than as a file export step spend their exposure time on patterns instead of on diagnosis.",
  ],
  faq: [
    {
      question: "Which layout format should I send to a maskless lithography system?",
      answer: "GDSII or OASIS for semiconductor-style vector layout, DXF when the geometry originates in mechanical CAD, and a bitmap only when the pattern is genuinely pixel-native such as a grayscale height map. Always state the database unit and the intended grid.",
    },
    {
      question: "How do I choose the raster grid or pixel size?",
      answer: "Set it relative to the smallest dimension you must control, typically between one fifth and one tenth of that dimension. A finer grid costs exposure time proportional to the square of the pixel count and buys little once the edge is limited by the optical spread and the resist.",
    },
    {
      question: "Why are my corners rounded and my line ends short?",
      answer: "Grid quantization, the finite spread of the exposure and the resist threshold all remove material at convex corners and line ends. Compensate with geometric bias, corner or serif features, dose modulation on edge pixels, and proximity correction for density-dependent effects.",
    },
    {
      question: "Should I flatten the layout hierarchy before conversion?",
      answer: "Only when the writer or the conversion step requires it. Flattening can turn nested instances into overlapping shapes that double the local dose, and it makes the file slower to process. Check for overlaps after any flattening step.",
    },
    {
      question: "How should pattern fidelity be verified?",
      answer: "With a defined sampling plan rather than a single image. State the instrument, magnification and calibration, measure the same structures in the same order, record the spread as well as the mean, and include a test structure with known dimensions, corners and line ends in every exposure.",
    },
    {
      question: "Does finer data resolution always give better critical dimension control?",
      answer: "No. It improves edge placement only until the grid stops being the limiting term. Beyond that point the critical dimension is set by dose, focus, resist contrast and development, so the exposure budget is better spent on the process window than on a finer grid.",
    },
  ],
  sources: [
    { publisher: "NIST", label: "Dimensional metrology and semiconductor metrology", href: "https://www.nist.gov/metrology" },
    { publisher: "SENFU", label: "Maskless lithography system and application documentation", href: "https://senfuprecision.com/lithography-systems/maskless-lithography/" },
  ],
};
