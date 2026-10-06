import type { EditorialPage } from "@/lib/editorial-content";

export const masklessLithographyResistBakeOverlayGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / LITHOGRAPHY PROCESS",
  title: "Resist Bake Effects on Overlay in Maskless Lithography",
  description:
    "Between exposure and development, resist bakes can move the substrate more than the overlay budget allows. This guide explains how soft bake, post-exposure bake and chill steps distort substrates, how those distortions interact with encoder-based stage metrology in maskless lithography, and how to control bake-induced overlay error.",
  slug: "/technology/maskless-lithography-resist-bake-overlay-guide/",
  publishedAt: "2026-10-06",
  modifiedAt: "2026-10-06",
  primaryKeyword: "resist bake overlay error",
  secondaryKeywords: [
    "post exposure bake distortion lithography",
    "soft bake substrate deformation",
    "hotplate uniformity overlay",
    "chill plate wafer distortion",
    "maskless lithography overlay budget",
    "bake induced pattern shift",
  ],
  featuredImage: {
    src: "/images/technology/maskless-lithography-resist-bake-overlay-guide/maskless-lithography-resist-bake-overlay-guide-cover.webp",
    alt: "Cleanroom process bench with a precision hotplate, lift-pin chuck and coated substrate during a resist bake step beside a lithography tool",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "Resist bake steps deform the substrate, and that deformation becomes overlay error. Soft bake, post-exposure bake (PEB) and chill steps each impose temperature gradients and film stress changes that bow or warp the substrate; when the substrate is removed from the chuck, cooled, and returned for a subsequent layer, its shape and its pattern placement differ from the previous pass. Typical bake-induced shifts range from tens of nanometres on rigid, thick substrates to micrometres on thin or stressed stacks—enough to consume an entire overlay budget in precision maskless lithography.",
    "Control comes from treating bake as a metrology step, not just a process step. Bake on the same chuck geometry used for exposure where possible, control hotplate and chill plate temperature uniformity and transfer time, keep bake parameters fixed once overlay is qualified, and measure the distortion directly—alignment marks read before and after bake, or overlay metrology on dedicated test patterns—so the contribution is quantified and can be assigned within the overlay error budget rather than blamed on the tool.",
  ],
  challenge:
    "In a maskless lithography workflow, overlay is measured and tuned at the exposure tool: encoder-feedback stage accuracy, alignment marks, autofocus. Yet a common failure mode appears after the wafer has left the tool—bake the resist, develop, come back for the next layer, and overlay has degraded even though the tool reports perfect stage repeatability. The distortion happened between exposures, on a hotplate. Film stress changes during soft bake, anisotropic temperature gradients during PEB, and nonuniform cooling on the chill plate each reshape the substrate, and no amount of stage accuracy can compensate for a substrate that no longer sits where its previous pattern did. Teams that lack a bake-side overlay budget end up chasing a phantom tool problem.",
  requirements: [
    { title: "Controlled thermal uniformity", description: "Hotplate and chill plate temperature uniformity, ramp rates and setpoint stability specified and verified across the substrate area, with the substrate temperature—not just the plate—considered." },
    { title: "Repeatable transfer handling", description: "Identical transfer times, lift-pin vs vacuum contact behavior and cooling geometry for every wafer, because transient gradients during transfer cause as much distortion as the bake itself." },
    { title: "Fixed bake parameters after qualification", description: "Bake temperature, time and recipe changes treated as overlay-relevant events requiring requalification, since distortion scales with recipe." },
    { title: "Measured bake distortion", description: "Alignment mark or overlay metrology before and after bake on a representative substrate, feeding a quantified bake term into the overall overlay error budget." },
  ],
  routes: [
    { label: "Overlay accuracy with encoder feedback", href: "/technology/maskless-lithography-overlay-accuracy-encoder-feedback-guide/", note: "Tool-side overlay control" },
    { label: "Dose calibration and uniformity", href: "/technology/maskless-lithography-dose-calibration-uniformity/", note: "Exposure-side uniformity" },
    { label: "Resist processing window", href: "/technology/maskless-lithography-resist-processing-window-guide/", note: "Resist process limits" },
    { label: "Chuck flatness and focus control", href: "/technology/maskless-lithography-substrate-chuck-flatness-focus-control-guide/", note: "Substrate presentation at exposure" },
  ],
  evidence: [
    "Hotplate and chill plate uniformity map across the working area, with sensor calibration stated",
    "Overlay or alignment measurement taken before and after bake on an identical setup",
    "Recipe sheet fixing bake temperature, time, transfer method and cooling geometry",
    "Overlay error budget with an explicit, quantified bake-distortion term",
    "Repeat-wafer overlay data demonstrating process stability across a batch",
  ],
  comparisonTable: {
    caption: "Bake steps and their overlay-relevant effects",
    headers: ["Step", "Primary distortion mechanism", "Typical overlay impact", "Main controls"],
    rows: [
      ["Soft bake / pre-exposure bake", "Solvent loss and film stress relaxation bowing the substrate", "Low to moderate; sets the starting shape before exposure", "Uniform plate, consistent time, full edge bead management"],
      ["Exposure-side chucking", "Chuck vacuum and flatness imposing local shape during pattern writing", "Tool-managed; matters for layer-to-layer correlation", "Chuck flatness verification, consistent vacuum pattern"],
      ["Post-exposure bake (PEB)", "Temperature gradients through film and substrate; chemically amplified resist redistribution", "Highest; can reach micrometres on thin substrates", "Plate uniformity, proximity cup, fixed transfer time, controlled ramp"],
      ["Chill plate", "Nonuniform cooling rates, edge-first solidification", "Moderate; mirrors and can partially cancel or double PEB gradients", "Uniform backside contact, defined dwell, clean plate surface"],
      ["Develop and rinse", "Swelling and surface tension on fine features", "Low for overlay; relevant to CD control", "Fixed develop chemistry, time and agitation"],
      ["Hard bake / cure", "Further film stress change and substrate relaxation", "Moderate; permanent pattern displacement", "Ramp control, symmetric loading, requalified recipe"],
    ],
  },
  articleSections: [
    {
      heading: "How bakes move patterns",
      paragraphs: [
        "Every bake is a thermo-mechanical event. The substrate expands with temperature; the resist film and any underlayers expand at different rates and change stress as solvents leave or the resist chemically reacts. The result is bending and in-plane distortion that is rarely symmetric, because heating is rarely symmetric: edge heating, backside contact quality and lift-pin transfer all create gradients. When the substrate returns to room temperature on the exposure chuck, its pattern grid has shifted—usually by a combination of uniform scale change, bow-induced apparent distortion and local warp.",
        "For a single exposure layer, none of this matters. Overlay is where it bites: layer two must land on layer one, and everything that moved the substrate between the two exposures enters the overlay error. In maskless lithography for photonics, MEMS and multi-level devices, overlay budgets of 100 to 300 nanometres are common, while an uncontrolled PEB on a thin glass substrate can shift patterns by more than a micrometre. The tool's encoder-based stage metrology is accurate; the substrate simply is not where the stage's map says it should be.",
      ],
      links: [
        { label: "Read the overlay accuracy guide", href: "/technology/maskless-lithography-overlay-accuracy-encoder-feedback-guide/" },
        { label: "Read the chuck flatness and focus guide", href: "/technology/maskless-lithography-substrate-chuck-flatness-focus-control-guide/" },
      ],
    },
    {
      heading: "The PEB problem and the chill plate",
      paragraphs: [
        "Post-exposure bake dominates because it is the hottest, longest step and, for chemically amplified resists, functionally critical. Distortion during PEB comes from through-thickness and in-plane temperature gradients: the substrate edge heats faster than the centre when backside contact is poor, and lift-pin transfer adds a transient shock. Two wafers baked with identical setpoints but different transfer times can show measurably different distortion, which is why recipe control must extend beyond the plate to the handling.",
        "The chill step is not neutral either. Rapid, nonuniform cooling freezes in the gradient the substrate had at the end of PEB, and edge-first cooling can bow the wafer in the opposite sense. A chill plate with worn vacuum grooves or contamination under one corner produces a distortion signature that repeats per plate but varies between plates—one of the more confusing overlay failure modes, since 'the recipe did not change' while the hardware did.",
      ],
      bullets: [
        "PEB contributes the largest bake-induced overlay term in most flows",
        "Transfer time and lift-pin behavior are recipe parameters, not conveniences",
        "Chill plate condition and backside contact uniformity belong in preventive maintenance",
        "Distortion is repeatable per setup, which makes it measurable and partly compensable",
      ],
      image: {
        src: "/images/technology/maskless-lithography-resist-bake-overlay-guide/maskless-lithography-resist-bake-overlay-guide-detail.webp",
        alt: "Process engineer in a cleanroom measuring a baked substrate on an overlay inspection station with alignment targets visible under magnification",
        width: 1600,
        height: 900,
      },
    },
    {
      heading: "Measuring bake distortion honestly",
      paragraphs: [
        "The distortion is measurable with modest effort. Read alignment marks or dedicated overlay patterns on a representative substrate immediately after exposure, then again after the complete bake chain, using the same setup and the same metrology. The displacement field between the two readings is the bake contribution: decompose it into translation, scale, rotation and residuals. A dominated single term points at a specific cause—pure scale change suggests uniform temperature error, edge-heavy residuals suggest plate nonuniformity or transfer asymmetry.",
        "Once quantified, the term earns its place in the overlay error budget alongside stage accuracy, alignment error and pattern-placement contributions. Two practical cautions: measure on the production substrate stack, because distortion scales with substrate stiffness and film stress, not on a convenient dummy; and re-measure after any recipe, plate or resist change, because the term does not transfer between them.",
      ],
      links: [
        { label: "Read the dose calibration and uniformity guide", href: "/technology/maskless-lithography-dose-calibration-uniformity/" },
        { label: "Read the resist processing window guide", href: "/technology/maskless-lithography-resist-processing-window-guide/" },
      ],
    },
    {
      heading: "Designing the bake chain for overlay",
      paragraphs: [
        "Where the process allows, the strongest control is architectural: bake on the same chuck geometry used for exposure, or perform exposure and development between bakes without re-clamping, so distortion never has a chance to accumulate between pattern layers. Where separate plates are unavoidable, choose proximity-style uniform heating, verify plate maps periodically, fix handling, and keep a log linking every overlay campaign to its exact bake recipe and hardware.",
        "With those disciplines, bake distortion becomes a stable, quantified, partly compensable term rather than a random one. Some of it can even be pre-compensated: if the distortion field is repeatable, the maskless data path can apply a distortion correction to later layers, provided the compensation is requalified whenever the bake chain changes. The guiding principle is the same as anywhere in precision work—an error you can measure and hold constant is an error you can manage.",
      ],
      links: [
        { label: "Read the factory acceptance test guide", href: "/technology/lithography-system-factory-acceptance-test-guide/" },
        { label: "Submit an overlay requirement", href: "/contact/#application-form" },
      ],
    },
  ],
  midCta: {
    eyebrow: "OVERLAY BUDGET REVIEW",
    title: "Is overlay error escaping between exposures?",
    description:
      "Send your process flow—substrate, resist, bake recipe and overlay target—and SENFU can help attribute the error terms and define the bake-side measurements that close the overlay budget.",
    label: "Request an overlay review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Overlay is decided between exposures, not only during them.",
  conclusion: [
    "Encoder-feedback stage accuracy and alignment performance define what a maskless lithography tool can deliver at the moment of exposure. What actually lands on the wafer also depends on everything that happens to the substrate in between—soft bake, PEB, chill and cure each reshape it, and those reshapes are the overlay error no stage can correct.",
    "Treat the bake chain as part of the metrology: uniform and verified plates, fixed handling, measured distortion on production-representative stacks, and an explicit bake term in the overlay budget. With the contribution quantified and held constant, multi-layer maskless lithography reaches overlay performance that the tool-side numbers alone would promise and the process would otherwise quietly destroy.",
  ],
  faq: [
    {
      question: "How much overlay error can a resist bake cause?",
      answer:
        "It depends mainly on substrate stiffness and film stack. Rigid, thick substrates often show tens of nanometres; thin glass, membrane or highly stressed film stacks can see shifts of several hundred nanometres to more than a micrometre after PEB. The only reliable number is a measurement on your own stack, taken before and after the bake chain.",
    },
    {
      question: "Which bake step matters most for overlay?",
      answer:
        "Usually the post-exposure bake, because it is the hottest and longest step and involves the largest stress and gradient changes. The chill step follows closely, since nonuniform cooling freezes in whatever gradient PEB created. Soft bake matters mainly by setting the substrate shape before exposure.",
    },
    {
      question: "We did not change the recipe—why did overlay shift?",
      answer:
        "Distortion depends on hardware condition and handling, not only on setpoints. Chill plate contamination, worn vacuum grooves, changed lift-pin timing or a different loading pattern can alter gradients while the recipe stays identical. Plate condition belongs in preventive maintenance with overlay-relevant checks.",
    },
    {
      question: "Can bake distortion be compensated in maskless lithography?",
      answer:
        "Partially, when it is repeatable. Measuring the distortion field between exposure and post-bake lets later layers be written with a pre-applied correction. This works only while the substrate stack, bake recipe and hardware stay fixed, so any change requires requalification of the compensation.",
    },
    {
      question: "What should be in the overlay error budget besides the stage?",
      answer:
        "Alignment mark quality and reading error, pattern placement from data preparation, bake-induced substrate distortion, chucking repeatability and metrology uncertainty. A budget that credits the stage's full accuracy to the process leaves no room for these terms and predicts better overlay than the flow can deliver.",
    },
    {
      question: "What should I send SENFU for an overlay assessment?",
      answer:
        "The substrate and film stack, the resist and bake recipe, the overlay target between layers and any existing overlay measurements. SENFU can help attribute error terms across tool and process and define the measurements needed to qualify the bake contribution.",
    },
  ],
  sources: [
    {
      publisher: "SPIE",
      label: "Journal of Micro/Nanopatterning, Materials, and Metrology (JM3) — lithography process and overlay publications",
      href: "https://www.spiedigitallibrary.org/journals/journal-of-micro-nanolithography-mems-and-moems",
    },
    {
      publisher: "NIST",
      label: "NIST — semiconductor metrology and lithography research programs",
      href: "https://www.nist.gov/",
    },
    {
      publisher: "SEMI",
      label: "SEMI International Standards — materials, equipment and process control standards",
      href: "https://www.semi.org/",
    },
    {
      publisher: "ASML",
      label: "ASML — overlay and yield management technical publications",
      href: "https://www.asml.com/",
    },
  ],
};
