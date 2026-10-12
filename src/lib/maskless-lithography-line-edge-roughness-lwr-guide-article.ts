import type { EditorialPage } from "@/lib/editorial-content";

export const masklessLithographyLineEdgeRoughnessLwrGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / LITHOGRAPHY PROCESS METROLOGY",
  title: "Line Edge Roughness in Maskless Lithography: Understanding LER/LWR Sources and Getting Them Under Control",
  description:
    "LER and LWR set the floor on how small and how reproducible a lithographic feature can be. This guide explains where edge roughness comes from in DMD-based maskless lithography, how to measure it without fooling yourself, and which process and tool parameters actually reduce it.",
  slug: "/technology/maskless-lithography-line-edge-roughness-lwr-guide/",
  publishedAt: "2026-10-12",
  modifiedAt: "2026-10-12",
  primaryKeyword: "line edge roughness maskless lithography",
  secondaryKeywords: [
    "LER LWR measurement",
    "line width roughness lithography",
    "DMD lithography edge quality",
    "lithography shot noise LER",
    "CD uniformity maskless exposure",
    "resist LER optimization",
  ],
  featuredImage: {
    src: "/images/technology/maskless-lithography-line-edge-roughness-lwr-guide/maskless-lithography-line-edge-roughness-lwr-guide-cover.webp",
    alt: "Researcher reviewing SEM micrographs of photoresist line structures on a monitor in a cleanroom lithography laboratory, with linewidth measurement traces visible on screen",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Line edge roughness (LER) is the three-sigma deviation of a single resist feature edge from an ideal line; line width roughness (LWR) is the same measure applied to the width between two edges of a feature. It limits the effective resolution of any lithography process: a nominally 500 nm line with 40 nm of LWR has edges that wander across a 80 nm band, and downstream devices inherit that variation as linewidth spread, device mismatch or waveguide scattering loss.",
    "In DMD-based maskless lithography, LER/LWR arises from the interaction of photon and resist statistics, the pixel grid of the digital mask, dose and focus settings, bake and development conditions, and the metrology itself. Reduction comes from an engineered combination: sufficient dose within the resist window, pixel and grayscale handling matched to the target linewidth, optimized bake and development, and honest SEM or AFM measurement with defined sampling and spectral analysis so that roughness is distinguished from feature-to-feature variation and from stitching artifacts.",
  ],
  challenge:
    "Process engineers qualifying a maskless lithography step routinely report minimum feature size from the best line on the best die, and leave edge quality unmeasured. The consequence appears later as unexplained variation: waveguides with scattered loss statistics, MEMS resonators with Q-factor spread, membranes and gaps whose distribution is wider than the nominal CD suggests. When roughness is finally measured, the numbers are often irreproducible—two SEM sessions on the same wafer disagree by tens of nanometers because the sampling plan, the image analysis thresholds or the operator differed. Without a defined LER/LWR metric and a causal picture of its sources, engineers end up tuning dose by trial and error, blaming the resist when the pixel grid is the cause, or specifying roughness targets that the metrology could not have verified in the first place.",
  requirements: [
    { title: "Defined metric and sampling plan", description: "LER or LWR is stated as 3-sigma over a defined length, with a fixed number of lines, locations and measurement conditions agreed before qualification." },
    { title: "Dose and focus inside their windows", description: "The exposure operates at validated dose and focus settings with documented process windows, since both parameters trade CD against edge quality." },
    { title: "Pixel grid matched to target CD", description: "Projection pixel size, sub-pixel addressing or dithering and grayscale rendering are chosen so the digital mask does not dominate the roughness floor." },
    { title: "Metrology traceable and repeatable", description: "SEM or AFM measurement uses defined magnification, threshold convention, noise filtering and repeated check measurements so results survive operator and session changes." },
  ],
  routes: [
    { label: "Resist processing window", href: "/technology/maskless-lithography-resist-processing-window-guide/", note: "Dose and develop fundamentals" },
    { label: "Dose calibration and uniformity", href: "/technology/maskless-lithography-dose-calibration-uniformity/", note: "Uniform dose as LER prerequisite" },
    { label: "Data preparation and pattern fidelity", href: "/technology/maskless-lithography-data-preparation-pattern-fidelity/", note: "Pixel grid and rendering" },
    { label: "Stitching error feedforward", href: "/technology/maskless-lithography-write-field-stitching-error-feedforward-guide/", note: "Separating stitch artifacts from LER" },
  ],
  evidence: [
    "SEM or AFM micrographs of representative lines at defined magnification with scale bars and conditions",
    "LER/LWR values stated as 3-sigma over specified lengths, per structure class and field location",
    "Dose and focus matrix results showing the CD and roughness trade-off for the resist in use",
    "Pixel-size or rendering comparison demonstrating the digital mask contribution is below the target floor",
    "Repeat measurement on a reference line set showing session-to-session agreement within the stated uncertainty",
  ],
  comparisonTable: {
    caption: "LER/LWR sources in maskless lithography and their signatures",
    headers: ["Source", "Typical signature", "Where it dominates", "Primary mitigation"],
    rows: [
      ["Photon and resist statistics", "White-noise edge fluctuation, uncorrelated over short distances; grows as dose falls", "Thin, low-dose, high-resolution resists", "Raise dose within window; higher-contrast or larger-molecule resists"],
      ["DMD pixel grid and rendering", "Edge quantization steps at the pixel pitch; anisotropic roughness along X vs Y", "CDs near the projection pixel size", "Finer pixel at objective, sub-pixel grayscale, orientation-aware rendering"],
      ["Dose and focus error", "Roughness and CD move together; footed or undercut profiles", "Edges of the dose/focus window", "Matrix-qualify dose and focus; hold with autofocus and dose calibration"],
      ["Bake and development", "Standing waves, scalloping, develop-dependent edge attack", "Under-baked or under/over-developed films", "Optimize PAB/PEB and develop time; monitor with cross-sections"],
      ["Stitching and field joins", "Periodic edge displacement at write-field boundaries, distinct from random LER", "Long features crossing field edges", "Feedforward correction; analyze LER spectra to exclude stitch lines"],
    ],
  },
  articleSections: [
    {
      heading: "What LER and LWR actually measure",
      paragraphs: [
        "LER is conventionally the 3-sigma standard deviation of one resist edge position sampled along a line, over a stated evaluation length. LWR applies the same statistic to the width between the two edges of a feature. For uncorrelated edges, LWR is roughly the root-sum-square of the two edge roughnesses—about 1.4 times the single-edge value—so a 4 nm LER and a 6 nm LWR can describe the same wall. Neither number means anything without its conditions: evaluation length, line count, resist, measurement tool and image-analysis convention all move the reported value by tens of percent.",
        "Roughness matters because lithography's job is not to make one good line but to make every line the same. In photonics, edge roughness couples light out of waveguides and directly inflates propagation loss. In MEMS and NEMS, gap-width variation shifts resonant frequencies and pull-in voltages across a die. In sensors and quantum devices, critical junction dimensions inherit the roughness floor as device-to-device spread. In all of these, the roughness component of variation is invisible in a nominal CD number and only appears in statistics—until it appears in yield.",
      ],
      links: [
        { label: "Read the resist processing window guide", href: "/technology/maskless-lithography-resist-processing-window-guide/" },
        { label: "Read the data preparation and pattern fidelity guide", href: "/technology/maskless-lithography-data-preparation-pattern-fidelity/" },
      ],
    },
    {
      heading: "Where roughness comes from in DMD maskless exposure",
      paragraphs: [
        "The first floor is statistical. A resist edge is a molecular decision boundary decided by a finite number of absorbed photons interacting with a finite number of polymer molecules; the randomness of both shows up as edge position fluctuation. The magnitude scales inversely with the dose and the chemical gradient at the edge, which is why low-dose, high-resolution processes pay a roughness penalty and why resist chemistry—contrast, molecular size, acid diffusion length—sets a floor no tool can beat.",
        "The second floor is the digital mask itself. A DMD imaged through an objective renders the pattern on a pixel grid; a target edge that does not land exactly on the grid is approximated, and any rendering that quantizes the edge position adds step-like roughness correlated with the pixel pitch. Because the projection pixel size differs between objectives and systems, the same GDS file can expose with different edge quality on different configurations. Sub-pixel grayscale rendering, dithering and orientation-aware placement of critical geometry push this contribution below the statistical floor; ignoring it leaves the mask as the dominant roughness source for CDs close to the pixel size.",
        "The third family is process condition. Dose error and focus error both convert smoothly into edge degradation: under-dose edges are noisy and poorly anchored, out-of-focus edges get footed and wider with ragged walls. Bake quality decides whether standing waves scallop the sidewall, and development conditions decide how aggressively the developer attacks the rough edge. Finally, stitching at write-field boundaries produces displacement that is periodic and localized—not roughness in the statistical sense, but easily mistaken for it unless the analysis separates the two.",
      ],
      links: [
        { label: "Read the dose calibration and uniformity guide", href: "/technology/maskless-lithography-dose-calibration-uniformity/" },
        { label: "Read the substrate chuck flatness and focus control guide", href: "/technology/maskless-lithography-substrate-chuck-flatness-focus-control-guide/" },
      ],
    },
    {
      heading: "Measuring LER/LWR so the numbers are worth something",
      paragraphs: [
        "SEM is the workhorse: image the line at a magnification where the pixel size in the image is well below the roughness scale of interest, extract the edge profile with a fixed threshold convention, and compute the standard deviation over the defined length. AFM, especially CD-AFM, complements SEM where sidewall access matters or where charging makes SEM difficult on some substrates. Whatever the tool, three disciplines keep the number honest: fixed imaging and threshold settings, enough lines and locations for the statistic to mean something, and a repeated reference measurement to bound session-to-session drift.",
        "Spectral analysis turns a single number into diagnosis. The spatial frequency content of the edge profile separates the sources: white-noise-like fluctuation points at photon and resist statistics, peaks at the pixel pitch point at mask rendering, long-period content points at dose or focus drift across the field, and narrow localized spikes at known positions point at stitching. Without the spectrum, engineers routinely average all of these into one LER value and then optimize the wrong parameter.",
        "For qualification and purchase, the requirement is that the supplier and the process owner agree on the measurement plan in advance: which structures, how many lines, which evaluation length, which tool and convention, and what repeatability demonstration accompanies the numbers. An LER specification without a metrology plan is not a specification; it is an aspiration that will be renegotiated at the first discrepancy.",
      ],
      bullets: [
        "SEM pixel size at least 5–10x finer than the roughness scale",
        "Fixed threshold and edge-extraction convention across all measurements",
        "Enough lines, fields and locations for a meaningful 3-sigma",
        "Spectral analysis to attribute roughness before optimizing",
        "Reference line set re-measured every session",
      ],
      image: {
        src: "/images/technology/maskless-lithography-line-edge-roughness-lwr-guide/maskless-lithography-line-edge-roughness-lwr-guide-detail.webp",
        alt: "Close-up of SEM image analysis on a laboratory workstation showing an extracted resist line edge profile with roughness measurement overlay",
        width: 1600,
        height: 900,
      },
    },
    {
      heading: "Reducing roughness in a maskless process, in order",
      paragraphs: [
        "Start by separating the contributors, because the order of attack matters. First qualify the dose and focus windows with a matrix that records CD and roughness together—then hold the process at the roughness-optimal point inside both windows, not at the CD-nominal point that happens to sit on a roughness cliff. Second, check the pixel-grid contribution by exposing the same critical geometry at different orientations or with different rendering settings; anisotropy or a dependence on rendering is a mask-side signal that data preparation can fix. Third, optimize bake and development with cross-sections, since sidewall profile is the most direct read of what the chemistry is doing to the edge.",
        "Only after these is resist selection the lever. Higher-contrast chemistries and formulations with larger effective smoothing length reduce the statistical floor, at the usual price in sensitivity, resolution or etch resistance. In a maskless workflow the resist choice interacts with the available wavelength and the dose the tool can deliver economically, so resist optimization belongs after the tool-side parameters are already controlled—not first, where trial-and-error resist changes are most expensive and least diagnostic.",
      ],
      links: [
        { label: "Read the UV light source selection guide", href: "/technology/maskless-lithography-uv-light-source-selection-guide/" },
        { label: "Read the thick resist and high aspect ratio guide", href: "/technology/maskless-lithography-thick-resist-high-aspect-ratio-guide/" },
      ],
    },
  ],
  midCta: {
    eyebrow: "PROCESS QUALIFICATION",
    title: "Does your process spec include edge quality—or only CD?",
    description:
      "Send your target linewidth, resist system and device type—SENFU can help define the LER/LWR measurement plan, pixel-rendering settings and dose/focus matrix for your maskless process qualification.",
    label: "Discuss a process qualification plan",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Roughness is a specification only when it is measured.",
  conclusion: [
    "LER and LWR are the quiet terms in every lithography error budget: they do not appear in the nominal CD but they decide the distribution around it. In DMD maskless lithography the roughness floor is the sum of statistics, digital-mask rendering and process conditions—and each leaves a different fingerprint in the edge spectrum.",
    "Measure with a fixed plan, attribute before optimizing, and hold dose, focus, bake and rendering at their validated points. Processes that treat edge quality as an engineered, measured quantity inherit it as a stable part of device performance; processes that measure one good SEM photo inherit roughness as unexplained variation in every downstream number.",
  ],
  faq: [
    {
      question: "What is the difference between LER and LWR?",
      answer:
        "LER is the 3-sigma deviation of a single resist edge from an ideal line; LWR applies the same statistic to the width between the two edges of a feature. For uncorrelated edges, LWR is roughly 1.4 times the single-edge LER, so both numbers describe the same wall from different sides.",
    },
    {
      question: "What is a typical LER/LWR magnitude in optical maskless lithography?",
      answer:
        "It depends strongly on linewidth, resist and dose. Micron-scale features in standard resists commonly sit at tens of nanometers of LWR; near-resolution-limit features in high-contrast resists can reach single-digit nanometers. The meaningful comparison is always against the target CD and the device's tolerance for width variation, not against an absolute ranking.",
    },
    {
      question: "Why do SEM measurements of the same wafer disagree?",
      answer:
        "Usually because the imaging conditions, edge-extraction threshold, evaluation length or line sampling differ between sessions. LER is a statistic over a sampling plan; without a fixed plan and a repeated reference measurement, session-to-session agreement of better than tens of percent is unlikely.",
    },
    {
      question: "Can the DMD pixel grid cause edge roughness?",
      answer:
        "Yes. When the target CD approaches the projection pixel size, edge quantization and rendering choices add step-like, pitch-correlated contributions. Its signature—anisotropy between axes and sensitivity to rendering settings—distinguishes it from statistical resist noise, and data preparation or finer-pixel configurations can reduce it.",
    },
    {
      question: "Does increasing dose always reduce LER?",
      answer:
        "Statistical roughness decreases with dose, but dose is bounded by the resist processing window and by pattern fidelity: over-dose widens lines, rounds corners and degrades contrast. The optimum is the roughness-minimal dose inside the qualified window, found with a CD-and-roughness matrix rather than a monotonic assumption.",
    },
  ],
  sources: [
    {
      publisher: "NIST",
      label: "NIST — semiconductor metrology and CD/roughness measurement research",
      href: "https://www.nist.gov/",
    },
    {
      publisher: "SPIE",
      label: "SPIE — publications on line edge roughness and lithography metrology",
      href: "https://spie.org/",
    },
    {
      publisher: "ASPE",
      label: "American Society for Precision Engineering — precision fabrication resources",
      href: "https://aspe.net/",
    },
    {
      publisher: "SEMI",
      label: "SEMI standards — microlithography and materials",
      href: "https://www.semi.org/",
    },
  ],
};
