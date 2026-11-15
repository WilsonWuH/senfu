import type { EditorialPage } from "@/lib/editorial-content";

export const opticalEncoderPhaseVsAmplitudeGratingPrincipleGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / ENCODER SENSING PRINCIPLES",
  title: "Phase Grating vs Amplitude Grating Optical Encoders: How the Scale Principle Shapes Signal Quality and Subdivision",
  description:
    "Both read as 'optical encoder' on a datasheet, yet a diffractive phase grating scale and a geometric amplitude grating scale differ fundamentally in signal period, optical contrast, gap tolerance and contamination behavior. This guide explains how each principle generates its sinusoidal signal, what the difference means for interpolation, mechanical installation and scale cleanliness, and how to weigh the two principles against the requirements of a specific axis.",
  slug: "/technology/optical-encoder-phase-vs-amplitude-grating-principle-guide/",
  publishedAt: "2026-11-10",
  modifiedAt: "2026-11-10",
  primaryKeyword: "phase grating encoder",
  secondaryKeywords: [
    "amplitude grating encoder",
    "interferential encoder scale",
    "diffractive optical encoder principle",
    "encoder signal period per grating period",
    "encoder contamination tolerance scale principle",
    "encoder scale principle comparison",
  ],
  featuredImage: {
    src: "/images/technology/optical-encoder-phase-vs-amplitude-grating-principle-guide/optical-encoder-phase-vs-amplitude-grating-principle-guide-cover.webp",
    alt: "Precision optics laboratory bench showing an encoder scale strip and a readhead module under inspection lighting, with optical mounting fixtures and a signal-conditioning electronics board",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "An amplitude grating scale is a straightforward optical grid: transparent and opaque segments modulate light intensity as the readhead translates across them, so the photodetector produces one full sinusoidal signal cycle per scale grating period. A phase grating scale instead modulates the phase of the diffracted light; the readhead recombines diffraction orders so they interfere, producing several signal periods per grating period. The same physical graduation therefore yields a finer effective signal period on a phase grating, which is why interferential readheads achieve fine resolution from coarser, optically forgiving scales.",
    "The principle choice cascades into the practical properties that dominate installation and service. Phase gratings tolerate larger and more variable air gaps because the signal comes from recombined wavefronts rather than a sharply imaged shadow edge, and fine pitch amplitudes grids demand tighter optical alignment, cleaner illumination and cleaner scale surfaces to hold contrast. Neither principle is universally superior: the right choice depends on the axis's resolution target, speed profile, mechanical envelope, contamination exposure and budget, verified against the supplier's configuration-specific signal data rather than the principle label alone.",
  ],
  challenge:
    "Buyers routinely compare encoder datasheets as if all optical scales were the same technology wearing different numbers, because the marketing language—'optical', 'high resolution', 'non-contact'—deliberately abstracts away the sensing principle. The consequence shows up after installation: an amplitude grating readhead installed at the edge of its gap tolerance drifts in and out of contrast as the stage traverses and the bracket flexes, producing periodic signal degradation that looks like an electronics fault; a phase grating scale that looked expensive on paper delivers more stable subdivision than a finer-pitched amplitude alternative because its signal is optically cleaner from the start. Teams also misread contamination behavior: filming that barely dents an interferential signal can collapse an amplitude contrast budget, so cleaning intervals and sealing decisions inherit the principle choice whether or not anyone made it deliberately. Because the principle rarely appears as a named specification, it must be inferred from the stated scale pitch, signal period, gap figures and interpolation architecture—and that inference is exactly what most selection checklists omit."
  ,
  requirements: [
    { title: "Principle identified from the datasheet", description: "Scale pitch, signal period per graduation, gap range and interpolation architecture read together to infer whether the scale is amplitude or phase grating—and what each implies." },
    { title: "Signal quality evidence for the configuration", description: "Amplitude, DC offset and quadrature phase data at the ordered interpolation, not a generic waveform, so subdivision quality can be judged on the actual configuration." },
    { title: "Mechanical envelope and gap budget", description: "Bracket geometry, runout over full travel and thermal growth compared against the readhead's allowed gap window for the chosen principle." },
    { title: "Environmental cleanliness plan", description: "Expected filming, particle exposure, sealing and cleaning intervals matched to the contrast sensitivity the principle dictates." },
  ],
  routes: [
    { label: "Sine-cosine interpolation and subdivision", href: "/technology/optical-encoder-sine-cosine-interpolation-subdivision-guide/", note: "What the principle must feed" },
    { label: "Scale pitch and cycle error separation", href: "/technology/optical-encoder-scale-pitch-cycle-error-separation-guide/", note: "Graduation behavior in the error budget" },
    { label: "Air gap clearance setup", href: "/technology/optical-encoder-air-gap-clearance-setup-guide/", note: "Gap tolerance differs by principle" },
    { label: "Precision motion application", href: "/applications/precision-motion/", note: "Feedback selection in the complete axis" },
  ],
  evidence: [
    "Datasheet extract showing scale pitch, signal period and ordered resolution for the proposed configuration",
    "Signal amplitude, DC offset and quadrature phase measurements at installation, recorded for baseline comparison",
    "Measured gap and gap variation over full travel compared with the readhead's allowed window",
    "Cleaning and inspection schedule with observed signal health at each interval",
  ],
  comparisonTable: {
    caption: "Amplitude grating vs phase grating scale principles in practical terms",
    headers: ["Property", "Amplitude (geometric) grating", "Phase (diffractive) grating", "Selection consequence"],
    rows: [
      ["Signal generation", "Transparent/opaque segments shadow the detector; one signal period per grating period", "Diffracted orders recombine and interfere; multiple signal periods per grating period", "Phase gratings reach fine effective periods from coarser graduations"],
      ["Optical contrast", "Depends on sharp imaging of the grid edge; falls quickly with defocus and dirt", "Depends on wavefront recombination; inherently high contrast with DC-balanced multi-period averaging", "Phase principles hold signal quality wider across gap and contamination variation"],
      ["Air gap tolerance", "Tighter window; gap variation directly modulates contrast", "Wider window; larger nominal gaps and more tolerance to runout", "Amplitude demands stiffer brackets and tighter alignment discipline"],
      ["Subdivision behavior", "Interpolation quality governed by edge imaging quality and harmonic content", "Cleaner sine/cosine supports deeper interpolation at the same scale cleanliness", "Resolution targets reached with fewer electrical compromises on phase principles"],
      ["Contamination sensitivity", "High; a partial shadow of the grid edge shifts contrast and DC", "Moderate; filming mainly attenuates rather than distorts the recombined signal", "Cleaning intervals and sealing budgets inherit the principle choice"],
    ],
  },
  articleSections: [
    {
      heading: "Two optical principles behind the same label",
      paragraphs: [
        "An amplitude grating scale works like a moving optical slide. The graduation is a sequence of transparent and opaque segments; the readhead illuminates the grid and images it onto a photodetector array, so relative motion modulates the transmitted intensity and the detector output cycles once for every grating period traversed. The signal is fundamentally a shadow measurement: its quality depends on how sharply the optical system can project the grid edges onto the detector, which is why the graduated pitch, the imaging optics and the detector geometry all appear in the signal-conditioning design.",
        "A phase grating scale replaces the shadow with interference. The graduation is a phase-modulated relief structure—etch or embossed lines that delay light passing over them rather than blocking it. Diffraction orders leaving the scale are recombined in the readhead so their wavefronts overlap, and relative motion shifts the phase between the orders, sweeping the combined intensity through several full signal cycles per grating period. The effective signal period is therefore a fraction of the physical pitch, which is why interferential scales print coarser, optically robust graduations and still deliver very fine signal periods for interpolation.",
        "Both principles produce the familiar sinusoidal quadrature pair that downstream electronics treat identically. The difference lives upstream of that pair: how cleanly the sine and cosine are generated, how much of the grating period each signal cycle covers, and how sensitively the optical contrast responds to gap, contamination and misalignment. Those upstream differences are what the rest of the selection must account for, because the interpolation stage downstream can only be as good as the signal it receives.",
      ],
      links: [
        { label: "Read the scale pitch and cycle error separation guide", href: "/technology/optical-encoder-scale-pitch-cycle-error-separation-guide/" },
        { label: "Read the sine-cosine interpolation and subdivision guide", href: "/technology/optical-encoder-sine-cosine-interpolation-subdivision-guide/" },
      ],
    },
    {
      heading: "What the principle does to signal quality",
      paragraphs: [
        "The Lissajous circle is the honest witness of what the optics delivered. An amplitude grating's shadow signal contains the fundamental plus the higher harmonics of a sharp-edged transmission profile; the optical design filters them, but whatever harmonic residue and DC imbalance survive appear directly as figure distortion in the Lissajous display. Gap variation compounds this: as the readhead drifts toward or away from the scale, the grid image blurs, contrast drops, and the circle collapses asymmetrically—so the same axis can show excellent signal quality at one end of travel and marginal quality at the other.",
        "A phase grating's recombined signal is different in kind. Because the modulation comes from interference between coherent diffraction orders rather than from an imaged edge, the periodic signal is close to ideal from the start, and the readhead's multi-period signal averaging suppresses DC drift and localized scale imperfections. Contrast still attenuates with contamination and gross misalignment, but it attenuates in a benign, mostly symmetric way—the circle shrinks rather than distorting first. This is why interferential readheads often pass quadrature verification at gaps well outside what an amplitude readhead could tolerate, and why their signal health degrades more gracefully over service life.",
        "The practical diagnostic consequence: when a signal problem appears, the principle narrows the hypothesis space. Harmonic distortion and travel-dependent contrast on an amplitude axis point to imaging geometry, gap and illumination; slow attenuation with stable quadrature on a phase axis points toward filming or illuminator aging before it points to geometry. Signal-quality troubleshooting that starts from the principle skips a round of swapping electronics for optics problems.",
      ],
      links: [
        { label: "Read the quadrature and Lissajous signal tuning guide", href: "/technology/encoder-quadrature-lissajous-signal-tuning/" },
        { label: "Read the readhead gain margin adjustment guide", href: "/technology/encoder-readhead-gain-margin-adjustment/" },
      ],
    },
    {
      heading: "Air gap, brackets and the mechanical envelope",
      paragraphs: [
        "Gap is where the principle becomes an installation constraint. An amplitude readhead's gap window is narrow because contrast depends on the grid staying in focus at the detector; the allowed clearance may span only a few tenths of a millimeter with correspondingly tight runout limits across travel. Every contributor—bracket machining, scale flatness, guide straightness, thermal growth—competes for that window. The installation therefore leans on the bracket stiffness and alignment procedure as much as on the encoder itself.",
        "A phase grating readhead works with a wider nominal gap and a wider tolerance band, because the interfering wavefronts do not require the scale to sit at an optical focus. This gives the machine designer freedom the amplitude principle cannot: larger clearance for chips and coolant management, more tolerance for bracket compliance and thermal drift, and less sensitivity to the runout a long traverse accumulates. It also simplifies retrofit decisions where the original axis geometry was never designed around an encoder's gap budget.",
        "The consequence for commissioning is that the gap verification procedure must be matched to the principle's actual window—not to a generic 'check the gap' step. Measuring gap and gap variation over full travel, comparing them against the datasheet window for the ordered readhead, and recording the numbers in the axis file converts the principle difference from a datasheet footnote into a verified installation property.",
      ],
      links: [
        { label: "Read the air gap clearance setup guide", href: "/technology/optical-encoder-air-gap-clearance-setup-guide/" },
        { label: "Read the readhead mounting bracket stiffness guide", href: "/technology/optical-encoder-readhead-mounting-bracket-stiffness-guide/" },
      ],
    },
    {
      heading: "Subdivision: the principle decides how far interpolation can go",
      paragraphs: [
        "Interpolation multiplies whatever sine and cosine the optics deliver, so the principle sets the ceiling on subdivision quality. An amplitude grating's harmonic content and travel-dependent contrast limit how deep the electronics can subdivide before interpolation error becomes visible in the position data; pushing the ordered resolution higher on a marginal signal converts electrical resolution into position noise. The honest check is interpolation error measured on the actual axis, not the nominal subdivision factor on the box.",
        "A phase grating's cleaner fundamental signal supports deeper interpolation at equivalent scale cleanliness, and its multi-period averaging suppresses the localized graduation imperfections that would otherwise alias into periodic position error. This is why fine-resolution, high-accuracy axes—gauge machines, wafer stages, metrology platforms—are dominated by interferential principles despite their cost premium: the resolution figure is real only if the signal feeding the interpolation is genuinely sinusoidal, and the phase principle starts with a structural advantage.",
        "The selection discipline that follows: state the resolution target first, then ask for the configuration-specific signal quality and interpolation error data at that target—not the principle label, not the pitch, and not a generic waveform. Two encoders with identical printed resolution can differ by an order of magnitude in interpolation error depending on what the optics fed the electronics.",
      ],
      links: [
        { label: "Read the interpolation error testing guide", href: "/technology/encoder-interpolation-error-testing/" },
        { label: "Read the resolution vs accuracy tradeoffs guide", href: "/technology/optical-encoder-resolution-vs-accuracy-tradeoffs/" },
      ],
    },
    {
      heading: "Contamination, environment and making the choice",
      paragraphs: [
        "Contamination behaves differently against the two principles, and the difference should inform sealing and cleaning budgets. On an amplitude scale, film or dust that partially shadows the grid edges changes both contrast and DC balance—the signal degrades in shape as well as in amplitude, and the position interpolation inherits the distortion. On a phase scale, comparable filming attenuates the light available for recombination but leaves the interference pattern's shape largely intact; the warning comes as a gradual amplitude decline rather than a sudden quadrature corruption. Both principles fail eventually on a dirty scale, but the failure modes and the useful inspection intervals differ, and the sealing and purge decisions for the axis should be sized to the principle actually installed.",
        "The choice itself should be made per axis, not per catalogue. Amplitude grating scales earn their place where cost matters, signals feed simple counting electronics, moderate resolution suffices and the installation can hold tight gap discipline—compact OEM machinery, wood and metal-working axes, general automation. Phase grating scales earn their premium where deep subdivision, gap tolerance and graceful contamination behavior protect accuracy over service life: precision metrology, lithography and inspection stages, long-travel high-accuracy axes and anything operating in a contaminated or thermally active environment. The error budget decides, not the technology's prestige.",
      ],
      links: [
        { label: "Read the scale contamination and filming effects guide", href: "/technology/optical-encoder-scale-contamination-filming-effects-guide/" },
        { label: "Explore the precision motion application page", href: "/applications/precision-motion/" },
      ],
    },
  ],
  midCta: {
    eyebrow: "FEEDBACK SELECTION",
    title: "Choosing between scale principles for a new axis—or diagnosing one already installed?",
    description:
      "Send your resolution target, travel, environment and mechanical envelope—SENFU can help identify the sensing principle behind the datasheet numbers, verify the signal quality the configuration will actually deliver, and define the installation and cleaning plan the principle requires.",
    label: "Discuss a feedback selection review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "The principle is the first specification; everything else follows from it.",
  conclusion: [
    "Amplitude and phase grating scales both deliver quadrature signals, but they earn those signals by different physics, and the difference propagates through every practical property the machine builder cares about: signal contrast across the gap window, how gracefully the signal degrades with contamination, how deep interpolation can honestly go, and what the bracket and cleaning schedules owe the axis. A datasheet that prints only resolution and pitch hides the principle behind those numbers, and selections made without inferring it routinely discover the difference as post-installation signal problems that masquerade as electronics faults.",
    "Treat the sensing principle as an explicit selection criterion: infer it from pitch, signal period and gap figures, demand configuration-specific signal quality and interpolation error data, size the mechanical envelope and the sealing plan to the principle's actual tolerances, and record what was installed so service inherits the knowledge. Axes selected this way behave as their error budgets promised; axes selected by headline numbers keep the principle difference in reserve as a recurring diagnostic bill.",
  ],
  faq: [
    {
      question: "How can I tell from a datasheet whether a scale is amplitude or phase grating?",
      answer:
        "Look for the relationship between scale pitch and signal period: a signal period equal to the graduation pitch indicates an amplitude principle, while a signal period several times smaller than the pitch indicates diffractive recombination. Wider-than-expected gap windows and gap tolerances also point to a phase principle. When the datasheet is ambiguous, ask the supplier directly which graduation and readhead architecture the configuration uses—principle determines gap, contamination and interpolation behavior, so it is a legitimate specification question.",
    },
    {
      question: "Is a phase grating encoder always the better choice?",
      answer:
        "No. Phase principles cost more, and on axes with modest resolution targets, clean environments and stable mechanics, a well-installed amplitude grating delivers all the accuracy the error budget requires at lower cost. The premium pays for itself where deep subdivision, wide gap tolerance or contamination resilience genuinely protect system performance; elsewhere it is spending that the axis never notices.",
    },
    {
      question: "Why does my amplitude encoder's signal quality change along the travel?",
      answer:
        "Contrast in an amplitude readhead depends on the scale staying within a tight gap and focus window. Guide runout, bracket flex or scale flatness error moves the readhead through that window across travel, so signal quality varies with position. Measure gap and gap variation over full stroke and compare against the datasheet window; the fix is usually mechanical—bracket stiffness, alignment or scale flatness—before it is electrical.",
    },
    {
      question: "Does the scale principle affect which cleaning method I should use?",
      answer:
        "The cleaning materials are similar—lint-free wipes and the supplier-approved solvent—but the intervals and the alarm thresholds differ. Phase scales give a gradual amplitude decline as filming builds, which is a natural inspection trigger; amplitude scales can distort quadrature shape before amplitude alarms fire, so periodic signal-quality verification is more important on them. Either way, the inspection schedule should be tied to the principle's dominant failure mode rather than a generic calendar.",
    },
    {
      question: "Can I mix principles—amplitude on some axes and phase on others of the same machine?",
      answer:
        "Yes, and it is common: critical metrology axes carry interferential feedback while auxiliary axes use simpler amplitude scales. The requirements are documentation and diagnostic separation—each axis's principle, gap window and signal baselines recorded in its own file, and troubleshooting procedures that start from the installed principle rather than assuming the machine is uniform.",
    },
    {
      question: "Does the principle change the electrical interface or the counting logic?",
      answer:
        "No. Both principles deliver sinusoidal quadrature (plus reference marks) that the same conditioning and counting electronics process identically. The difference is entirely in the optics and mechanics upstream: contrast behavior, gap window, contamination response and achievable interpolation depth. Interface selection can therefore be made independently of principle selection.",
    },
  ],
  sources: [
    {
      publisher: "ASPE",
      label: "American Society for Precision Engineering — scale metrology and displacement sensing resources",
      href: "https://aspe.net/",
    },
    {
      publisher: "SPIE",
      label: "SPIE — publications on diffraction gratings and optical metrology",
      href: "https://spie.org/",
    },
    {
      publisher: "NIST",
      label: "NIST — precision engineering and dimensional metrology reference resources",
      href: "https://www.nist.gov/",
    },
    {
      publisher: "ISO",
      label: "ISO 230 series — test code for machine tools and positioning accuracy evaluation",
      href: "https://www.iso.org/",
    },
  ],
};
