export type EditorialPage = {
  eyebrow: string;
  title: string;
  description: string;
  challenge: string;
  requirements: { title: string; description: string }[];
  routes: { label: string; href: string; note: string }[];
  evidence: string[];
};

export const applicationPages: Record<string, EditorialPage> = {
  "semiconductor-equipment": {
    eyebrow: "APPLICATION / SEMICONDUCTOR EQUIPMENT",
    title: "Position feedback and lithography for semiconductor equipment.",
    description: "Evaluate motion feedback and research patterning tools around precision, environment, repeatability and integration evidence.",
    challenge: "Semiconductor tools combine demanding motion profiles with controlled environments and limited mechanical envelopes. Selection must distinguish encoder resolution from accuracy and must qualify any vacuum statement with exact operating evidence.",
    requirements: [{ title: "Motion performance", description: "Travel, resolution, accuracy, speed, acceleration and control-loop interface." },{ title: "Environment", description: "Temperature, pressure range, materials, cable and outgassing evidence." },{ title: "Integration", description: "Readhead envelope, scale geometry, installation tolerances and service access." }],
    routes: [{ label: "SMG20", href: "/optical-encoders/smg20/", note: "Miniature linear feedback" },{ label: "SMG26", href: "/optical-encoders/smg26/", note: "High-speed architecture" },{ label: "ZEL304G", href: "/lithography-systems/zel304g/", note: "Nanoscale R&D patterning" }],
    evidence: ["Resolution and speed matrix", "Installation drawing and CAD", "Vacuum-level and outgassing data", "Model-specific compliance scope"],
  },
  "precision-motion": {
    eyebrow: "APPLICATION / PRECISION MOTION",
    title: "Optical encoders for precision motion and linear stages.",
    description: "Build the feedback selection around the complete axis rather than a single resolution target.",
    challenge: "The best encoder choice depends on mechanical envelope, scale mounting, motion profile, controller interface and environmental stability. A nominal nanometer value alone does not establish positioning accuracy.",
    requirements: [{ title: "Feedback target", description: "Separate commanded resolution, encoder resolution, scale accuracy and system repeatability." },{ title: "Dynamic profile", description: "Map maximum velocity and acceleration to output frequency and controller capability." },{ title: "Mechanical stack", description: "Confirm travel, scale material, readhead gap, cable routing and Abbe offsets." }],
    routes: [{ label: "SMG20", href: "/optical-encoders/smg20/", note: "Compact high-resolution" },{ label: "SMG26", href: "/optical-encoders/smg26/", note: "High-speed linear motion" },{ label: "SAG21", href: "/optical-encoders/sag21/", note: "Absolute BiSS-C feedback" }],
    evidence: ["Configuration-specific speed", "Scale accuracy at stated temperature", "Installation tolerance", "Repeatability and positioning test method"],
  },
  "vacuum-motion": {
    eyebrow: "APPLICATION / VACUUM MOTION",
    title: "Optical feedback for vacuum motion systems.",
    description: "Treat vacuum compatibility as a defined operating condition, not a generic label.",
    challenge: "A vacuum-oriented encoder selection must account for pressure range, outgassing, materials, cable, heat dissipation, bakeout and contamination risk. These details are application-specific and must be confirmed before order configuration.",
    requirements: [{ title: "Pressure & process", description: "Specify base pressure, process gases, bakeout and cleanliness expectations." },{ title: "Material control", description: "Review cable jacket, adhesive, lubricant, scale and connector construction." },{ title: "Thermal design", description: "Plan heat paths and thermal expansion when convection is unavailable." }],
    routes: [{ label: "Vacuum encoder guide", href: "/optical-encoders/vacuum/", note: "Selection framework" },{ label: "SMG20", href: "/optical-encoders/smg20/", note: "Vacuum/UHV use stated" },{ label: "MICRON-P2", href: "/optical-encoders/micron-p2/", note: "Vacuum version stated" }],
    evidence: ["Exact vacuum rating", "RGA/outgassing report", "Cable and adhesive declaration", "Bakeout and thermal limits"],
  },
  "mems-microfluidics": {
    eyebrow: "APPLICATION / MEMS & MICROFLUIDICS",
    title: "Maskless lithography for MEMS and microfluidics.",
    description: "Use direct-write patterning to accelerate geometry changes, alignment cycles and process learning.",
    challenge: "MEMS and microfluidic development often involves frequent layout revisions, varied substrates and multiple layer alignments. The system choice depends on feature size, overlay, sample thickness, resist and required exposure area.",
    requirements: [{ title: "Pattern geometry", description: "Minimum feature, equal line/space, grayscale and sidewall-profile targets." },{ title: "Substrate", description: "Material, size, thickness, flatness and handling constraints." },{ title: "Process", description: "Resist, wavelength, dose, overlay and inspection method." }],
    routes: [{ label: "ZML10A", href: "/lithography-systems/zml10a/", note: "Compact laboratory R&D" },{ label: "ZML100A", href: "/lithography-systems/zml100a/", note: "Active autofocus + overlay" },{ label: "ZML200A", href: "/lithography-systems/zml200a/", note: "Up to 8-inch substrates" }],
    evidence: ["Pattern micrograph", "Exposure wavelength and resist", "Overlay measurement method", "Throughput under defined settings"],
  },
  photonics: {
    eyebrow: "APPLICATION / PHOTONICS & MICRO-OPTICS",
    title: "Lithography workflows for photonics and micro-optics.",
    description: "Select between grayscale optical patterning and electron-beam writing according to profile and critical dimension.",
    challenge: "Photonic structures may combine broad optical features, multilevel topography and critical nanoscale elements. A hybrid process can assign each pattern level to the most suitable exposure technology.",
    requirements: [{ title: "Optical function", description: "Translate target phase, profile or periodicity into lithography requirements." },{ title: "Critical dimension", description: "Separate microscale area patterning from nanoscale critical structures." },{ title: "Layer strategy", description: "Define overlay, alignment marks, resist stack and metrology between exposures." }],
    routes: [{ label: "ZML100A", href: "/lithography-systems/zml100a/", note: "Grayscale-capable DMD platform" },{ label: "ZEL304G", href: "/lithography-systems/zel304g/", note: "Nanoscale electron-beam writing" },{ label: "Hybrid lithography", href: "/technology/hybrid-lithography/", note: "Combined process route" }],
    evidence: ["Profile measurement", "SEM or optical micrograph", "Resist and development conditions", "Overlay result"],
  },
  "quantum-nanofabrication": {
    eyebrow: "APPLICATION / QUANTUM & NANOFABRICATION",
    title: "Lithography for quantum devices and nanofabrication.",
    description: "Combine broad-area optical patterning with critical electron-beam features where the process benefits.",
    challenge: "Quantum and nanoscale devices require strict critical dimensions, alignment and contamination control. The process plan should reserve electron-beam writing for structures that need it while using optical direct write for larger supporting levels.",
    requirements: [{ title: "Critical features", description: "Define linewidth, pitch, junction or nanostructure target and measurement method." },{ title: "Alignment", description: "Set overlay budgets across optical and electron-beam layers." },{ title: "Process integrity", description: "Specify substrate, resist stack, dose strategy and cleaning constraints." }],
    routes: [{ label: "ZEL304G", href: "/lithography-systems/zel304g/", note: "Critical nanoscale writing" },{ label: "ZML Series", href: "/lithography-systems/maskless-lithography/", note: "Broader-area supporting patterns" },{ label: "DMD vs EBL", href: "/technology/dmd-vs-electron-beam-lithography/", note: "Technology comparison" }],
    evidence: ["SEM with scale and conditions", "Field-stitching result", "Overlay measurement", "Process flow and raw test data"],
  },
};

export const technologyPages: Record<string, EditorialPage> = {
  "incremental-vs-absolute-encoder": {
    eyebrow: "TECHNOLOGY / ENCODER ARCHITECTURE",
    title: "Incremental vs absolute encoder: which feedback system should you choose?",
    description: "Compare position availability, homing, interface, system recovery and motion requirements.",
    challenge: "Incremental encoders provide relative position changes and commonly use a reference signal; absolute encoders return a position code. The right choice follows machine behavior, not a universal ranking.",
    requirements: [{ title: "Startup & recovery", description: "Decide whether the axis can home safely and how position should recover after power loss." },{ title: "Interface", description: "Match differential incremental signals or digital absolute protocols to the controller." },{ title: "System risk", description: "Consider travel limits, collision risk, cycle time and calibration strategy." }],
    routes: [{ label: "SMG20", href: "/optical-encoders/smg20/", note: "Incremental miniature linear" },{ label: "SMG26", href: "/optical-encoders/smg26/", note: "Incremental high-speed linear" },{ label: "SAG21", href: "/optical-encoders/sag21/", note: "Absolute BiSS-C linear" }],
    evidence: ["Interface timing", "Homing/recovery sequence", "Resolution and accuracy budget", "Motion profile"],
  },
  "encoder-resolution-vs-accuracy": {
    eyebrow: "TECHNOLOGY / METROLOGY BASICS",
    title: "Encoder resolution vs accuracy: avoid the most common specification error.",
    description: "Resolution is the smallest reported increment; accuracy describes closeness to the true position under stated conditions.",
    challenge: "A 0.5 nm output increment does not make the whole axis accurate to 0.5 nm. Scale error, interpolation error, mounting, thermal expansion, mechanics and calibration all contribute to system accuracy.",
    requirements: [{ title: "Resolution", description: "The measurement increment or digital output step available from the encoder configuration." },{ title: "Scale accuracy", description: "The documented scale deviation, typically stated per meter and at a reference temperature." },{ title: "System accuracy", description: "The complete machine result including mechanics, alignment, environment and compensation." }],
    routes: [{ label: "Optical encoders", href: "/optical-encoders/", note: "Selection overview" },{ label: "SMG20", href: "/optical-encoders/smg20/", note: "See resolution and scale accuracy separately" },{ label: "Request a review", href: "/contact/#application-form", note: "Build an error budget" }],
    evidence: ["Calibration method", "Reference instrument", "Temperature and travel", "Repeatability and uncertainty"],
  },
  "dmd-vs-electron-beam-lithography": {
    eyebrow: "TECHNOLOGY / PATTERNING ROUTES",
    title: "DMD maskless lithography vs electron beam lithography.",
    description: "Choose between broader-area optical direct write and critical nanoscale electron-beam patterning.",
    challenge: "DMD systems support flexible microscale direct writing with no physical mask, while EBL addresses much smaller critical features at a different write-speed and process complexity. Many R&D workflows benefit from both.",
    requirements: [{ title: "Critical dimension", description: "Use the actual process linewidth and pitch target, not only imaging resolution." },{ title: "Area & throughput", description: "Map required patterned area, dose and exposure settings to acceptable cycle time." },{ title: "Overlay & workflow", description: "Plan alignment, resist stacks, inspection and handoff between tools." }],
    routes: [{ label: "ZML Series", href: "/lithography-systems/maskless-lithography/", note: "DMD optical direct write" },{ label: "ZEL304G", href: "/lithography-systems/zel304g/", note: "Electron-beam direct write" },{ label: "Hybrid lithography", href: "/technology/hybrid-lithography/", note: "Combine both routes" }],
    evidence: ["Feature measurement", "Area and exposure conditions", "Overlay result", "Process flow"],
  },
  "hybrid-lithography": {
    eyebrow: "TECHNOLOGY / HYBRID PROCESS",
    title: "Hybrid lithography: combining maskless and electron beam lithography.",
    description: "Assign large microscale patterns to DMD exposure and reserve EBL for critical nanoscale structures.",
    challenge: "A hybrid flow can reduce unnecessary electron-beam write area while preserving nanoscale capability. Its value depends on cross-tool alignment, resist compatibility, process sequencing and metrology.",
    requirements: [{ title: "Partition the pattern", description: "Identify which layers or geometries require EBL and which can use optical direct write." },{ title: "Share alignment", description: "Design marks and overlay budgets that both exposure systems can use." },{ title: "Validate the process", description: "Record resist, dose, development, metrology and yield for each handoff." }],
    routes: [{ label: "ZML100A", href: "/lithography-systems/zml100a/", note: "Microscale DMD exposure" },{ label: "ZEL304G", href: "/lithography-systems/zel304g/", note: "Critical nanoscale exposure" },{ label: "Discuss process", href: "/contact/#application-form", note: "Define a hybrid evaluation" }],
    evidence: ["Process flow", "Alignment-mark design", "SEM and profile data", "Overlay and yield results"],
  },
  "vacuum-encoder-guide": {
    eyebrow: "TECHNOLOGY / VACUUM FEEDBACK",
    title: "Vacuum encoder selection guide.",
    description: "Define pressure, material, cable, thermal and contamination requirements before selecting an encoder configuration.",
    challenge: "The phrase vacuum-compatible is incomplete without an exact pressure range and construction evidence. Selection should explicitly close the gaps around outgassing, bakeout, heat and service life.",
    requirements: [{ title: "Operating environment", description: "Base pressure, process gases, bakeout, radiation and contamination limits." },{ title: "Construction", description: "Materials, cable, adhesive, connector and any lubricant used in the assembly." },{ title: "Validation", description: "RGA/outgassing evidence, thermal test, signal integrity and installation qualification." }],
    routes: [{ label: "Vacuum encoders", href: "/optical-encoders/vacuum/", note: "Product selection route" },{ label: "SMG20", href: "/optical-encoders/smg20/", note: "Vacuum/UHV use stated" },{ label: "Application review", href: "/contact/#application-form", note: "Confirm exact environment" }],
    evidence: ["Pressure rating", "RGA/outgassing", "Material declaration", "Bakeout and thermal data"],
  },
};
