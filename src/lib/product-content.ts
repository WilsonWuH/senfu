export type ProductContent = {
  eyebrow: string;
  summary: string;
  positioning: string;
  specKeys: string[];
  benefits: { title: string; description: string }[];
  applications: string[];
  image: string;
  imagePosition: string;
  reviewNote?: string;
};

export const productContent: Record<string, ProductContent> = {
  SMG20: {
    eyebrow: "MINIATURE INCREMENTAL LINEAR FEEDBACK",
    summary: "A compact optical readhead and scale system for precision linear motion where installation envelope and configurable resolution matter.",
    positioning: "Use SMG20 as a starting point for constrained stages, scientific instruments and semiconductor-oriented motion platforms. Final speed must be evaluated against the selected resolution and output frequency.",
    specKeys: ["scalePitch", "resolutionOptions", "readheadDimensions", "scaleAccuracy", "outputSignals", "supplyVoltage", "operatingTemperature", "scaleMaterials"],
    benefits: [
      { title: "Compact integration", description: "A 5 × 12 × 21 mm readhead supports space-constrained mechanical layouts." },
      { title: "Configuration-aware performance", description: "Resolution and maximum speed are treated as linked choices, not independent headline values." },
      { title: "Scale flexibility", description: "Source documentation covers both stainless-steel and glass scale configurations." },
    ],
    applications: ["Precision linear stages", "Semiconductor equipment", "Microscope positioning", "Vacuum-oriented motion"],
    image: "/materials/smg20-product.png",
    imagePosition: "50% 33%",
    reviewNote: "Exact vacuum grade, RGA and outgassing data require supplier confirmation.",
  },
  SMG26: {
    eyebrow: "HIGH-SPEED INCREMENTAL LINEAR FEEDBACK",
    summary: "A 256 µm pitch optical linear encoder family with configurations developed for high-speed precision motion.",
    positioning: "SMG26 is suited to OEM motion architectures that need a compact readhead and a broader speed envelope. Final performance depends on the selected resolution, output frequency and integration conditions.",
    specKeys: ["scalePitch", "resolutionOptions", "readheadDimensions", "scaleAccuracy", "outputSignals", "supplyVoltage", "operatingTemperature", "maximumCableLength"],
    benefits: [
      { title: "High-speed architecture", description: "The larger scale pitch supports configurations optimized for higher motion speed." },
      { title: "Resolution options", description: "Published technical data includes resolution choices down to 4 nm." },
      { title: "Documented EMC scope", description: "Available compliance records are associated at model and interface level." },
    ],
    applications: ["Linear motors", "High-speed XY stages", "Semiconductor tools", "Scientific motion platforms"],
    image: "/materials/smg26-product.png",
    imagePosition: "50% 27%",
    reviewNote: "Exact vacuum grade and outgassing evidence remain to be confirmed.",
  },
  SAG21: {
    eyebrow: "ABSOLUTE LINEAR POSITION FEEDBACK",
    summary: "An absolute optical linear encoder with BiSS-C interface for motion systems that require direct position availability without conventional homing.",
    positioning: "SAG21 targets high-dynamic absolute feedback applications. The 25 nm technical format appears in source data, but orderability remains under review and is not presented as a standard option.",
    specKeys: ["interface", "maximumClockFrequency", "technicalResolutionFormats", "maximumSpeed", "maximumAcceleration", "supplyVoltage", "maximumCableLength", "homingRequirement"],
    benefits: [
      { title: "Absolute position", description: "Position information is available without a conventional reference-return cycle." },
      { title: "BiSS-C interface", description: "A digital interface path supports integration into compatible motion controllers." },
      { title: "Dynamic motion", description: "Technical records include high-speed and high-acceleration operating data." },
    ],
    applications: ["Semiconductor stages", "Automated metrology", "Precision handling", "Closed-loop OEM axes"],
    image: "/materials/smg26-product.png",
    imagePosition: "50% 27%",
    reviewNote: "25 nm orderability and ordering code require manufacturer confirmation.",
  },
  "MICRON-P2": {
    eyebrow: "MINIATURE INCREMENTAL LINEAR FEEDBACK",
    summary: "A compact HOPO incremental optical encoder for tight integration envelopes, with glass and stainless-scale configurations documented.",
    positioning: "MICRON-P2 can be evaluated for compact precision stages. Public selection data uses source-consistent standard resolutions only; the disputed 1 nm marketing statement is blocked.",
    specKeys: ["scalePitch", "standardResolutionOptions", "readheadDimensions", "installationGap", "outputSignals", "supplyVoltage", "protectionRating", "scaleMaterials"],
    benefits: [
      { title: "Miniature package", description: "A 21 × 10 × 5 mm readhead supports compact machine layouts." },
      { title: "Defined installation gap", description: "Source drawings provide a nominal sensing gap for mechanical integration." },
      { title: "Material options", description: "Glass and stainless scale formats support different travel and mounting strategies." },
    ],
    applications: ["Compact stages", "Microscope platforms", "Laboratory automation", "OEM motion modules"],
    image: "/materials/smg20-product.png",
    imagePosition: "50% 33%",
    reviewNote: "The 1 nm / 5 nm / 10 nm source conflict must be resolved before broader resolution claims are published.",
  },
  ZML10A: {
    eyebrow: "COMPACT DMD MASKLESS LITHOGRAPHY",
    summary: "A compact direct-write lithography system for laboratory research, rapid process iteration and small-substrate microfabrication.",
    positioning: "ZML10A is the entry point for laboratories evaluating DMD maskless lithography across MEMS, microfluidics and research prototyping.",
    specKeys: ["minimumFeature", "minimumEqualLineSpace", "overlayAccuracy", "exposureWavelengths", "sampleSize", "sampleThickness", "patternFormats", "grayscaleLithography"],
    benefits: [
      { title: "Mask-free iteration", description: "Move from DXF, GDS or BMP pattern files to exposure without a physical photomask." },
      { title: "Laboratory format", description: "Designed around research-scale samples and iterative process development." },
      { title: "Multi-application platform", description: "Supports workflows spanning MEMS, microfluidics and photonic microstructures." },
    ],
    applications: ["MEMS", "Microfluidics", "Rapid prototyping", "Academic cleanrooms"],
    image: "/materials/zml-system-product.png",
    imagePosition: "50% 36%",
    reviewNote: "Throughput values are withheld until objective, dose and exposure conditions are mapped.",
  },
  ZML100A: {
    eyebrow: "ADVANCED DMD MASKLESS LITHOGRAPHY",
    summary: "An advanced DMD direct-write platform with active autofocus and finer overlay capability for demanding research fabrication.",
    positioning: "ZML100A fits advanced R&D programs that need more automated focus control, tighter overlay and optional larger-substrate handling.",
    specKeys: ["minimumFeature", "minimumEqualLineSpace", "overlayAccuracy", "exposureWavelengths", "autofocus", "motorizedObjectiveSwitching", "sampleSize", "patternFormats"],
    benefits: [
      { title: "Active autofocus", description: "Laser-based focus control supports more consistent exposure over the working area." },
      { title: "Advanced alignment", description: "Source specifications document a tighter overlay target than the compact platform." },
      { title: "Research flexibility", description: "Pattern formats and objective control support varied process-development workflows." },
    ],
    applications: ["Advanced MEMS", "Micro-optics", "2D materials", "Photonics research"],
    image: "/materials/zml-system-product.png",
    imagePosition: "50% 36%",
    reviewNote: "Throughput claims remain conditional pending exposure-setting documentation.",
  },
  ZML200A: {
    eyebrow: "8-INCH DMD MASKLESS LITHOGRAPHY",
    summary: "A larger-substrate DMD maskless lithography platform for research and process-development workflows up to 8 inches.",
    positioning: "ZML200A extends the ZML platform to larger substrates while retaining direct-write pattern flexibility and active autofocus.",
    specKeys: ["minimumFeature", "minimumEqualLineSpace", "overlayAccuracy", "exposureWavelengths", "autofocus", "sampleSize", "sampleThickness", "patternFormats"],
    benefits: [
      { title: "Larger substrates", description: "The documented sample range extends the DMD platform to 8-inch formats." },
      { title: "Direct-write workflow", description: "Digital patterns reduce photomask dependency during iterative development." },
      { title: "Automated focus", description: "Active autofocus supports process consistency across a larger exposure area." },
    ],
    applications: ["Large-area R&D", "MEMS process development", "Micro-optics", "Research pilot lines"],
    image: "/materials/zml-system-product.png",
    imagePosition: "50% 36%",
    reviewNote: "Maximum lithography rate is not promoted without mapped exposure conditions.",
  },
  ZEL304G: {
    eyebrow: "ELECTRON BEAM LITHOGRAPHY",
    summary: "A Schottky field-emission electron beam lithography system for nanoscale patterning, aligned multilayer exposure and advanced research.",
    positioning: "ZEL304G addresses critical nanoscale structures where electron-beam resolution is required. Stage and acceleration-voltage wording remains qualified pending manufacturer confirmation.",
    specKeys: ["electronGun", "imageResolution", "beamCurrent", "minimumSpotSize", "writeField", "singleExposureLinewidth", "dacResolution", "patternFormats"],
    benefits: [
      { title: "Nanoscale patterning", description: "Field-emission electron optics support critical feature development below optical lithography scale." },
      { title: "Aligned exposure", description: "Documented functions include field stitching, overlay and multi-layer exposure." },
      { title: "Pattern workflow", description: "GDSII, DXF and BMP inputs connect established design formats to the write system." },
    ],
    applications: ["Quantum devices", "Nanophotonics", "2D materials", "Advanced semiconductor R&D"],
    image: "/materials/zel304g-product.png",
    imagePosition: "72% 16%",
    reviewNote: "Stage-travel semantics and the stated minimum acceleration voltage require confirmation.",
  },
};

export const encoderGroupContent: ProductContent = {
  eyebrow: "ROTARY OPTICAL POSITION FEEDBACK",
  summary: "A family of incremental rotary encoder discs and readheads covering multiple disc diameters, line counts and angular-resolution configurations.",
  positioning: "SCG selection starts with disc diameter, available line count, mechanical stack and required angular resolution. Maximum-speed figures are withheld because the supplied table is not reliably mapped across all models.",
  specKeys: ["discDiameter", "lineCount", "scalePitch", "angularResolutionConfigurations", "readheadDimensions", "outputSignals", "supplyVoltage", "operatingTemperature"],
  benefits: [
    { title: "Model-based geometry", description: "SCG04, SCG14, SCG26 and SCG50 provide distinct disc envelopes and line-count options." },
    { title: "Configuration comparison", description: "Angular resolution is evaluated using documented lines and interpolation configurations." },
    { title: "Guarded performance data", description: "Unmapped maximum-speed claims remain blocked until model-specific evidence is confirmed." },
  ],
  applications: ["Rotary stages", "Goniometers", "Precision spindles", "Scientific instruments"],
  image: "/materials/smg26-product.png",
  imagePosition: "50% 27%",
  reviewNote: "Complete model-specific maximum-speed data is required before publication.",
};
