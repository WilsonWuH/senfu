import { grayscaleLithographySystemSelection } from "@/lib/grayscale-lithography-article";

export type EditorialImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type EditorialSubsection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type EditorialSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  links?: { label: string; href: string }[];
  subsections?: EditorialSubsection[];
  image?: EditorialImage;
};

export type EditorialFaq = {
  question: string;
  answer: string;
};

export type EditorialPage = {
  eyebrow: string;
  title: string;
  description: string;
  challenge: string;
  requirements: { title: string; description: string }[];
  routes: { label: string; href: string; note: string }[];
  evidence: string[];
  slug?: string;
  publishedAt?: string;
  modifiedAt?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  directAnswer?: string[];
  featuredImage?: EditorialImage;
  comparisonTable?: { caption: string; headers: string[]; rows: string[][] };
  articleSections?: EditorialSection[];
  conclusion?: string[];
  faq?: EditorialFaq[];
  sources?: { publisher: string; label: string; href: string }[];
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
  "grayscale-lithography-system-selection": grayscaleLithographySystemSelection,
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
  "biss-c-encoder": {
    eyebrow: "TECHNOLOGY / ABSOLUTE FEEDBACK",
    title: "BiSS-C encoder: interface, timing and selection guide.",
    description: "Understand how a BiSS-C encoder communicates absolute position and what to verify before integrating it into a precision motion system.",
    primaryKeyword: "BiSS-C encoder",
    secondaryKeywords: ["absolute linear encoder", "BiSS-C interface", "absolute position feedback"],
    challenge: "A BiSS-C encoder is not selected by protocol name alone. The controller, cable, clock rate, latency, resolution format and startup behavior all influence whether the feedback loop will work as intended.",
    requirements: [{ title: "Controller compatibility", description: "Confirm the controller or interface card supports the BiSS-C frame format, clocking and error handling required by the axis." }, { title: "Timing budget", description: "Map cable length, clock frequency, frame length and control-loop period to the required position update rate." }, { title: "Absolute recovery", description: "Define how the machine handles power-up, multi-turn state, alarms and position validity before motion is enabled." }],
    routes: [{ label: "SAG21", href: "/optical-encoders/sag21/", note: "Absolute linear feedback" }, { label: "Absolute encoders", href: "/optical-encoders/absolute-linear/", note: "Compare absolute options" }, { label: "Discuss integration", href: "/contact/#application-form", note: "Review controller and cable" }],
    evidence: ["BiSS-C timing diagram", "Resolution and frame format", "Cable and clock limits", "Startup and alarm behavior"],
    articleSections: [
      { heading: "What is a BiSS-C encoder?", paragraphs: ["BiSS-C is a synchronous serial interface used to transfer absolute position and diagnostic information from an encoder to a controller. The controller supplies the clock, while the encoder returns a deterministic data frame. This makes the interface attractive for closed-loop stages that need a known position immediately after power-up.", "The interface is only one part of the selection. The mechanical scale, optical readhead, interpolation, resolution format and installation environment still determine the quality of the position signal. Treat BiSS-C as the communication layer in a complete feedback architecture, not as a substitute for an error budget."] },
      { heading: "How BiSS-C timing affects a motion axis", paragraphs: ["A BiSS-C transaction has a finite frame length. The clock frequency, number of data bits, status bits, CRC and cable delay determine how quickly a new absolute position can be delivered. A high clock rate can reduce transaction time, but the controller, cable, connector and EMC design must all support it.", "For a practical integration review, record the required control-loop period, the encoder resolution, the number of bits in the selected frame and the maximum cable length. Then check that the worst-case transaction time leaves enough margin for the servo calculation, diagnostics and any safety reaction."] , bullets: ["Controller clock and supported BiSS-C mode", "Position bit count and resolution format", "Cable length, shielding and termination", "CRC, warning and error handling"] },
      { heading: "Resolution is not the same as absolute accuracy", paragraphs: ["An absolute encoder can report a fine digital position increment while the scale and mechanics introduce larger position errors. Resolution describes the smallest reported step; accuracy describes how close the measured position is to the true position under stated conditions. Mounting, temperature, straightness, guide error and calibration can dominate the final axis result.", "SENFU’s SAG21 page lists absolute technical resolution formats and a BiSS-C interface. The orderable resolution code and the complete mechanical configuration should be confirmed for the required travel and control system before a purchase decision is made. This keeps the website specification useful without turning a nominal resolution into an unsupported accuracy claim."] , links: [{ label: "Read the encoder resolution vs accuracy guide", href: "/technology/encoder-resolution-vs-accuracy/" }, { label: "Review SAG21", href: "/optical-encoders/sag21/" }] },
      { heading: "BiSS-C selection checklist", paragraphs: ["Start with the machine sequence rather than the encoder catalogue. If the axis must retain a trustworthy position after power loss, an absolute encoder may remove a conventional homing step, but the machine still needs a defined startup validation and limit strategy. If the axis operates in a vacuum or a tight mechanical envelope, those constraints should be included in the same review.", "Ask the supplier for the exact interface drawing, frame definition, clock limit, cable recommendation and alarm behavior for the proposed model. For a new stage, provide the travel, speed, acceleration, controller and installation space so the encoder configuration can be evaluated as a system."] , bullets: ["Travel and scale mounting direction", "Required resolution and accuracy budget", "Maximum speed and acceleration", "BiSS-C controller, cable and connector", "Air, vacuum or UHV operating condition"] },
      { heading: "When an incremental encoder may be the better fit", paragraphs: ["Incremental A/B/Z feedback can be a strong choice when the controller already supports differential quadrature signals, the machine has a safe homing routine and the axis benefits from a simple high-rate signal path. Absolute feedback is valuable when startup position, recovery time or homing risk is the dominant constraint.", "The decision should be made with the same motion and integration data for both architectures. Comparing only the protocol label can hide the real trade-off between startup behavior, wiring, controller support, calibration and total system cost."] , links: [{ label: "Compare incremental and absolute encoders", href: "/technology/incremental-vs-absolute-encoder/" }, { label: "Request an encoder recommendation", href: "/contact/#application-form" }] },
    ],
    faq: [{ question: "Is BiSS-C the same as an absolute encoder?", answer: "No. BiSS-C is the communication interface; the encoder is the complete position-feedback device. Mechanical scale, sensing, resolution, accuracy and environmental configuration must still be specified." }, { question: "What should I provide for a BiSS-C encoder review?", answer: "Provide travel, speed, acceleration, required resolution, controller or interface card, cable length, installation space and air or vacuum conditions." }, { question: "Can a BiSS-C encoder eliminate homing?", answer: "It can provide absolute position at startup, but whether homing can be omitted depends on the machine’s safety, validation and control strategy." }],
  },
  "encoder-scale-pitch": {
    eyebrow: "TECHNOLOGY / SCALE SELECTION",
    title: "Encoder scale pitch: how to choose the right pitch for speed and resolution.",
    description: "Learn how optical encoder scale pitch influences interpolation, signal frequency, dynamic performance and the final motion-system error budget.",
    primaryKeyword: "encoder scale pitch",
    secondaryKeywords: ["optical encoder pitch", "linear encoder scale", "encoder resolution and speed"],
    challenge: "Scale pitch is a mechanical and signal-design decision. A finer pitch can support a smaller interpolated increment, while a coarser pitch can provide more signal margin at high travel speed. The correct choice depends on the complete readhead, interface and controller configuration.",
    requirements: [{ title: "Resolution target", description: "Separate scale pitch from interpolated resolution, commanded step, accuracy and repeatability." }, { title: "Motion profile", description: "Calculate signal frequency at the required speed and check the output interface and controller bandwidth." }, { title: "Installation", description: "Match scale material, mounting, readhead gap, alignment and thermal behavior to the axis." }],
    routes: [{ label: "SMG20", href: "/optical-encoders/smg20/", note: "20 µm pitch, fine resolution options" }, { label: "SMG26", href: "/optical-encoders/smg26/", note: "256 µm pitch, high-speed architecture" }, { label: "Optical encoders", href: "/optical-encoders/", note: "Compare linear and rotary options" }],
    evidence: ["Pitch and interpolation table", "Output-frequency limit", "Scale accuracy at temperature", "Installation drawing and gap"],
    articleSections: [
      { heading: "What does encoder scale pitch mean?", paragraphs: ["Encoder scale pitch is the repeat distance of the optical pattern on the scale. The readhead detects phase changes as it moves across those periodic features. Electronics then interpolate the signal to produce a smaller digital resolution than the physical pitch itself.", "Pitch therefore should not be confused with accuracy or resolution. A 20 µm pitch may be interpolated to a sub-nanometer output increment in a specified configuration, but scale accuracy, interpolation error, mounting and machine mechanics still determine the real position result."] },
      { heading: "Fine pitch and coarse pitch: the engineering trade-off", paragraphs: ["A finer pitch gives the sensing system more cycles over the same travel and can support fine interpolation. It may also impose tighter optical, alignment, contamination and signal-quality requirements. A coarser pitch produces fewer cycles per unit distance, which can simplify high-speed signal handling and preserve margin at demanding velocities.", "Neither choice is automatically better. The selection should start with the required resolution and error budget, then check the maximum speed, output frequency, controller input and installation envelope. The scale is part of a matched readhead-and-interface system."] , bullets: ["Finer pitch can support finer interpolation", "Coarser pitch can reduce signal frequency at a given speed", "Interpolation quality depends on signal amplitude and alignment", "Scale pitch does not establish scale accuracy"] },
      { heading: "How pitch, speed and output frequency are connected", paragraphs: ["As linear speed increases, the optical signal frequency increases. A simplified first check relates speed to pitch: the faster the axis moves and the smaller the pitch, the more cycles the interface must process. Interpolation and output coding then determine the required electrical bandwidth.", "Use the supplier’s resolution-versus-output-frequency data for the exact configuration. Do not publish or design around a single maximum speed without stating the resolution, interface frequency and controller conditions that produce it. This is especially important when comparing a fine-pitch miniature encoder with a high-speed coarser-pitch encoder."] , links: [{ label: "See SMG20 specifications", href: "/optical-encoders/smg20/" }, { label: "See SMG26 specifications", href: "/optical-encoders/smg26/" }] },
      { heading: "Examples from the SENFU encoder range", paragraphs: ["The SMG20 uses a 20 µm scale pitch and offers resolution options down to 0.5 nm in the documented configuration. Its compact readhead makes it relevant to miniature precision stages, but the final speed must be selected together with the output frequency and interpolation setting.", "The SMG26 uses a 256 µm pitch and is positioned for high-speed linear motion, with documented configurations down to 4 nm resolution. These two products illustrate why pitch should be evaluated with motion profile and interface data rather than used as a standalone ranking."] , links: [{ label: "Compare the optical encoder family", href: "/optical-encoders/" }, { label: "Read the resolution vs accuracy guide", href: "/technology/encoder-resolution-vs-accuracy/" }] },
      { heading: "A practical encoder pitch selection workflow", paragraphs: ["First write down the travel, maximum speed, acceleration, resolution, accuracy, repeatability and controller interface. Then define the scale material, mounting direction, readhead gap, cable route and temperature range. Finally, ask for the configuration-specific signal, frequency and installation data.", "For rotary axes, the same principle applies to disc diameter, line count, angular pitch and interpolation. The correct decision is the one that leaves measurable margin in the complete axis, not the one with the smallest number in a catalogue column."] , bullets: ["Define the machine error budget", "Calculate signal frequency at maximum speed", "Check interpolation and controller bandwidth", "Verify scale accuracy and temperature", "Confirm the mechanical installation drawing"] },
    ],
    faq: [{ question: "Does a smaller encoder scale pitch always give higher accuracy?", answer: "No. Pitch affects the periodic signal and interpolation opportunity. Scale accuracy, mechanics, mounting, temperature and calibration determine the system’s final accuracy." }, { question: "How should I compare SMG20 and SMG26?", answer: "Compare the required resolution, speed, output frequency, travel, installation envelope and environmental configuration. SMG20 is a 20 µm-pitch miniature option; SMG26 uses a 256 µm pitch for high-speed configurations." }, { question: "What data is needed to choose pitch?", answer: "Provide travel, speed, acceleration, resolution, accuracy, controller input, scale mounting, readhead gap and operating temperature." }],
  },
  "maskless-lithography-for-microfluidics": {
    eyebrow: "APPLICATION / MICROFLUIDICS",
    title: "Maskless lithography for microfluidics: process requirements and system selection.",
    description: "Use DMD maskless lithography to iterate microfluidic layouts, multilayer features and device prototypes without fabricating a physical mask for every design change.",
    primaryKeyword: "maskless lithography for microfluidics",
    secondaryKeywords: ["DMD lithography microfluidics", "microfluidic photolithography", "maskless aligner for microfluidics"],
    challenge: "Microfluidic development combines changing channel layouts, different substrate sizes and process-sensitive resist profiles. A maskless lithography system should be selected around feature size, overlay, sample thickness, wavelength, dose and inspection—not simply around a headline resolution.",
    requirements: [{ title: "Channel and feature geometry", description: "Define minimum feature, equal line/space, openings, pillars, gradients and the required sidewall or profile result." }, { title: "Substrate and resist", description: "Specify glass, silicon, polymer or other substrate, sample thickness, resist stack, wavelength and dose window." }, { title: "Iteration and alignment", description: "Plan design-file workflow, alignment marks, overlay, inspection and the number of process revisions expected." }],
    routes: [{ label: "ZML10A", href: "/lithography-systems/zml10a/", note: "Compact laboratory R&D" }, { label: "ZML100A", href: "/lithography-systems/zml100a/", note: "Active autofocus and overlay" }, { label: "ZML200A", href: "/lithography-systems/zml200a/", note: "Up to 8-inch substrates" }],
    evidence: ["Pattern image with scale", "Substrate and resist conditions", "Overlay measurement", "Throughput under defined settings"],
    articleSections: [
      { heading: "Why use maskless lithography for microfluidics?", paragraphs: ["Microfluidic research rarely stops at one layout. Channel widths, mixers, wells, membranes and alignment features often change as the fluidic behavior is measured. DMD maskless lithography removes the need to create a new physical photomask for every iteration, which can shorten the path from CAD revision to patterned sample.", "The benefit is most visible in R&D and pilot fabrication, where the value of a flexible direct-write workflow is higher than the cost of optimizing a single high-volume mask process. The system still needs a qualified resist, exposure and development process; maskless does not mean process-free."] },
      { heading: "Microfluidic process requirements to define first", paragraphs: ["Start with the actual geometry and process stack. A nominal minimum feature size is only useful when paired with substrate, resist, wavelength, dose, focus and development information. Channel sidewalls, openings, alignment marks and grayscale or relief structures may impose different constraints in the same device.", "Also define the sample envelope. ZML systems in the current range cover different substrate sizes and thickness conditions, so the system should be matched to the largest sample and the alignment or autofocus behavior required by the process."] , bullets: ["Minimum channel and gap dimensions", "Substrate material, size, thickness and flatness", "Resist type, thickness, wavelength and dose", "Layer count and overlay target", "Inspection method for dimensions and profile"] },
      { heading: "Choosing between ZML10A, ZML100A and ZML200A", paragraphs: ["ZML10A is positioned as a compact R&D maskless lithography system for laboratory work, rapid prototyping, MEMS and microfluidics. It supports 385/405 nm exposure and sample formats up to 4 inches in the documented configuration.", "ZML100A adds an advanced platform for R&D workflows that need active autofocus, motorized objective control and tighter overlay positioning. ZML200A is the family option for projects that need up to 8-inch substrates. All three should be compared using the same feature, overlay, sample and process conditions."] , links: [{ label: "Compare the ZML maskless lithography family", href: "/lithography-systems/maskless-lithography/" }, { label: "Review ZML10A", href: "/lithography-systems/zml10a/" }, { label: "Review ZML100A", href: "/lithography-systems/zml100a/" }, { label: "Review ZML200A", href: "/lithography-systems/zml200a/" }] },
      { heading: "Overlay and alignment in multilayer microfluidics", paragraphs: ["Many microfluidic devices combine channels with ports, electrodes, membranes or bonding marks. Overlay should therefore be treated as a process result, not only a machine specification. Define the alignment mark design, measurement instrument, reference layer, substrate handling and allowable error before comparing systems.", "When the process uses multiple tools, record the coordinate conventions and metrology between exposures. This makes it possible to diagnose whether an observed offset comes from the lithography system, substrate handling, thermal drift, bonding or the design file itself."] , links: [{ label: "Read the MEMS and microfluidics application page", href: "/applications/mems-microfluidics/" }, { label: "Discuss a lithography application", href: "/contact/#application-form" }] },
      { heading: "Throughput should be reported with conditions", paragraphs: ["Lithography rate depends on objective, feature setting, resolution, dose, pattern density, substrate and process recipe. A single maximum rate without those conditions can mislead a microfluidics buyer because a sparse test pattern and a dense multilayer device do not expose in the same way.", "For a useful evaluation, request the rate for the intended substrate and pattern class, together with exposure wavelength, objective, focus strategy and dose. SENFU can use those inputs to recommend a system and define the evidence required for a process trial."] , bullets: ["Pattern area and density", "Objective and optical setting", "Feature size and grayscale requirement", "Dose, resist and development", "Measurement method and acceptance criteria"] },
      { heading: "When a microfluidic workflow needs another lithography route", paragraphs: ["DMD maskless lithography is well suited to flexible microscale patterning. If a device contains critical nanoscale structures, electron-beam lithography may be reserved for those layers while DMD exposure handles larger supporting geometries. This hybrid approach can reduce unnecessary EBL write area while preserving nanoscale capability.", "The right route depends on the critical dimension, area, overlay, process sequence and available metrology. A technical review should include the complete layout and a realistic process flow rather than only a target linewidth."] , links: [{ label: "Compare DMD and electron-beam lithography", href: "/technology/dmd-vs-electron-beam-lithography/" }, { label: "Explore hybrid lithography", href: "/technology/hybrid-lithography/" }] },
    ],
    faq: [{ question: "What file formats can the ZML systems use?", answer: "The documented ZML configurations support DXF, GDS and BMP workflows. Confirm the exact import, preprocessing and alignment workflow for the intended system." }, { question: "Which ZML system is best for microfluidic prototypes?", answer: "ZML10A is positioned for compact laboratory R&D and rapid prototyping. ZML100A adds advanced autofocus and overlay features, while ZML200A is for projects requiring up to 8-inch substrates." }, { question: "Can maskless lithography replace a full production mask process?", answer: "It can be valuable for R&D, pilot work and frequent design changes. Production suitability depends on volume, cycle time, process window and the economics of the complete flow." }],
  },
};
