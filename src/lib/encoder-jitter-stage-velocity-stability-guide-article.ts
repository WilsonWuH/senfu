import type { EditorialPage } from "@/lib/editorial-content";

export const encoderJitterStageVelocityStabilityGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / SERVO FEEDBACK QUALITY",
  title: "Encoder Signal Jitter and Stage Velocity Stability: Diagnosing Velocity Ripple at the Source",
  description:
    "Velocity ripple that survives controller tuning often starts in the feedback path. This guide explains how encoder signal noise, interpolation error and latency become velocity jitter in a precision stage, how to separate encoder-induced ripple from mechanical and control-loop causes, and what to fix first.",
  slug: "/technology/encoder-jitter-stage-velocity-stability-guide/",
  publishedAt: "2026-10-16",
  modifiedAt: "2026-10-16",
  primaryKeyword: "encoder signal jitter stage velocity stability",
  secondaryKeywords: [
    "encoder velocity ripple diagnosis",
    "velocity feedback noise precision stage",
    "encoder interpolation noise velocity estimate",
    "stage velocity stability constant velocity scanning",
    "encoder latency velocity loop",
    "write-on-the-fly velocity banding",
  ],
  featuredImage: {
    src: "/images/technology/encoder-jitter-stage-velocity-stability-guide/encoder-jitter-stage-velocity-stability-guide-cover.webp",
    alt: "Oscilloscope showing quadrature encoder signals beside a linear motor precision stage with an optical linear encoder scale and readhead mounted along its base in a laboratory",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "A precision stage does not measure velocity directly in most architectures: the servo loop derives velocity by differentiating encoder position over the control period. Every imperfection in the position signal—interpolation noise, amplitude imbalance, harmonic distortion, counter quantization and propagation delay—is therefore amplified into the velocity estimate, where it appears as velocity ripple, audible servo noise and, in scanning applications, as periodic streaks or banding in the delivered process.",
    "The diagnostic distinction is frequency behavior. Encoder-induced jitter scales with speed and its ripple frequency locks to mechanical velocity or scale pitch (for example, once per signal period or per interpolation cycle), while mechanical causes such as cogging and friction stick to machine geometry (per magnet pitch or per revolution) and often persist at standstill as positioning jitter. Capturing the velocity error spectrum at two or three different constant speeds separates the families quickly and points to whether the fix belongs in the encoder installation, the signal path or the velocity-loop filtering.",
  ],
  challenge:
    "Teams usually meet this problem as a symptom that tuning cannot remove. The stage holds position beautifully, yet at constant velocity the feedback shows a periodic ripple—sometimes a few counts, sometimes enough to produce visible banding in a write-on-the-fly exposure or thickness modulation in a coated web. Engineers raise gain, retune filters and add mass, and the ripple stays, because the velocity loop is faithfully amplifying noise that enters through the position signal itself. The difficulty is that the encoder is specified by position accuracy and resolution, while the defect lives in signal quality and timing: interpolation error that depends on Lissajous circle quality, quantization noise set by the resolution step, and latency that shifts the differentiated velocity in phase. Without a structured way to attribute the ripple, effort is spent on the controller when the source is a misaligned readhead, a marginal signal amplitude, a damaged cable shield or an interface running at the edge of its bandwidth.",
  requirements: [
    { title: "A clean position signal to differentiate", description: "Quadrature signals with balanced amplitude, correct 90-degree phase, low distortion and adequate edge rate, verified against the readhead alignment procedure, are the prerequisite for any stable velocity estimate." },
    { title: "A velocity error spectrum at known speeds", description: "Velocity error captured at two or more constant speeds, with its spectrum plotted against time and against mechanical geometry, is the primary evidence for attributing ripple to encoder, mechanics or controller." },
    { title: "Known interface latency and resolution", description: "The counter or BiSS/EnDat frame period, interpolation cycle time and filter delays in the feedback path must be documented, because latency and quantization set floors on achievable velocity smoothness." },
    { title: "A defined velocity stability target", description: "The application must state what the process needs—for example a percentage ripple band during constant-velocity writing—so that mitigation effort is judged against a measurable criterion rather than an oscilloscope impression." },
  ],
  routes: [
    { label: "Velocity feedback and servo bandwidth", href: "/technology/linear-encoder-velocity-feedback-servo-bandwidth/", note: "Bandwidth side of the velocity loop" },
    { label: "Quadrature Lissajous signal tuning", href: "/technology/encoder-quadrature-lissajous-signal-tuning/", note: "Fixing the signal at the source" },
    { label: "Interpolation error testing", href: "/technology/encoder-interpolation-error-testing/", note: "Quantifying interpolation contribution" },
    { label: "Write-on-the-fly synchronization", href: "/technology/lithography-write-on-the-fly-encoder-synchronization-guide/", note: "Where velocity stability becomes pattern quality" },
  ],
  evidence: [
    "Quadrature signal capture (amplitude, DC offset, phase, distortion) at operating speed",
    "Velocity error time record and spectrum at two or more constant speeds",
    "Ripple frequency mapped against scale pitch, signal period, magnet pitch and revolve rate",
    "Interface latency and quantization step documented from the encoder and controller datasheets",
    "Before-and-after velocity stability measurement against the application target",
  ],
  comparisonTable: {
    caption: "Attributing velocity ripple: signatures of the three common source families",
    headers: ["Signature", "Encoder signal / interpolation", "Mechanical (motor, guides, friction)", "Control loop / interface"],
    rows: [
      ["Ripple frequency vs speed", "Scales with speed; locked to signal period, scale pitch or interpolation cycle", "Locked to machine geometry: magnet pitch, ball screw pitch, revolve frequency", "Often fixed at loop or sampling frequency, or appears after a tuning change"],
      ["Behavior at standstill", "Minimal; may show as fine position jitter from noise", "Cogging visible as position steps; stiction shows as stick-slip on slow moves", "Limit cycling or dither from high gain and noisy differentiation"],
      ["Direction dependence", "Often differs forward vs reverse when alignment or contamination is directional", "Cogging identical both directions; friction differs with direction and load", "Symmetric unless feedforward or delay compensation is asymmetric"],
      ["First effective fix", "Readhead alignment, signal balancing, cleaner interpolation, better shielding", "Motor choice, gearing, guide quality, lubrication, drive commissioning", "Filtering, latency compensation, resolution increase, sampling alignment"],
    ],
  },
  articleSections: [
    {
      heading: "Where velocity comes from in an encoder servo loop",
      paragraphs: [
        "Most precision stages have no independent velocity sensor. The drive closes its velocity loop on a velocity estimate formed by differencing successive encoder positions over the sampling period, or on an analog velocity signal derived the same way inside the encoder electronics. Differentiation is the crux: it amplifies high-frequency content. A position error that looks negligible on a micrometer scale—one count of quantization, a few nanometers of interpolation noise—becomes a proportional velocity perturbation every time it is divided by a short sampling interval. At a 10 kHz loop rate, a single 1-nanometer increment of noise becomes a 10-micrometer-per-second velocity ripple before the controller reacts.",
        "This is why velocity stability is a feedback-chain property, not a tuning setting alone. Three properties of the encoder path dominate the estimate: signal quality (how cleanly the analog quadrature signals represent position), quantization (the size of the smallest reported increment) and latency (how old the position sample is when the loop uses it). Latency deserves particular respect in velocity loops because differentiation of a delayed signal adds phase lag, which erodes stability margin and tempts the tuner to lower gains—trading away the bandwidth the stage needed in the first place.",
      ],
      links: [
        { label: "Read the velocity feedback and servo bandwidth guide", href: "/technology/linear-encoder-velocity-feedback-servo-bandwidth/" },
      ],
    },
    {
      heading: "Signal-level mechanisms that become velocity jitter",
      paragraphs: [
        "The dominant encoder-side contributors are well characterized and mostly correctable at installation. Interpolation error—deviation caused by amplitude imbalance, DC offset and harmonic distortion in the sine and cosine signals—repeats every signal period, so its velocity signature sits at the electrical frequency of the quadrature cycle and its harmonics, scaling directly with speed. Poor Lissajous circle quality is the tell: an elliptical or offset circle indicates the imbalance that will surface as velocity ripple at the signal rate. Subdivision noise adds a broadband component on top, and counter quantization injects a step-noise floor fixed by the resolution configuration.",
        "Environmental and integration factors complete the list. Electrical noise coupled through inadequately shielded or routed cables produces asynchronous spikes that the differentiator converts to sharp velocity kicks; a marginal signal amplitude near the interpolation threshold exaggerates all of the above; and a readhead running at the edge of its gap or alignment tolerance makes the error speed- and temperature-dependent, so the stage behaves differently in the morning than after an hour of scanning. Each of these has a distinct footprint, which is what makes systematic attribution possible.",
      ],
      bullets: [
        "Interpolation error: periodic at the quadrature cycle; grows with speed; visible as Lissajous distortion",
        "Quantization: constant step-noise floor; worse with coarse resolution settings",
        "Electrical noise: asynchronous spikes; correlates with cable routing, grounding and nearby switching sources",
        "Latency: phase lag in the velocity estimate; erodes margin and limits achievable gain",
      ],
    },
    {
      heading: "Diagnosing: separate the source families before changing anything",
      paragraphs: [
        "The fastest diagnostic is a velocity error spectrum captured at two or three constant speeds, ideally with the stage moving in both directions. Plot the ripple frequency against speed: a component that moves proportionally with velocity and lands on the quadrature signal period or an interpolation harmonic belongs to the encoder path; one that stays fixed relative to mechanical geometry (magnet pitch, screw pitch, revolve frequency) belongs to the mechanics; one anchored at the sampling frequency belongs to the loop and its interface. Standing still adds a third view—significant jitter at zero speed points away from speed-scaled encoder interpolation and toward cogging, noise or tuning.",
        "Confirm the encoder hypothesis at the signal level before ordering parts. A scope view of the differential quadrature signals at speed shows amplitude balance, edge quality and noise; the Lissajous figure exposes offset, ellipse and harmonics directly. Check the cable route against the grounding plan and verify the readhead gap and alignment against the installation drawing. In most field cases the encoder-family fix is one or two of: re-alignment, signal amplitude and offset correction, improved shielding and routing, a finer resolution or higher-quality interpolation configuration, or latency compensation in the drive.",
      ],
      image: {
        src: "/images/technology/encoder-jitter-stage-velocity-stability-guide/encoder-jitter-stage-velocity-stability-guide-detail.webp",
        alt: "Close-up of an optical encoder readhead aligned above a linear scale on a precision stage base, with differential signal wires routed into a shielded drag-chain cable",
        width: 1600,
        height: 900,
      },
      links: [
        { label: "Read the quadrature Lissajous signal tuning guide", href: "/technology/encoder-quadrature-lissajous-signal-tuning/" },
        { label: "Read the interpolation error testing guide", href: "/technology/encoder-interpolation-error-testing/" },
      ],
    },
    {
      heading: "Mitigating without sacrificing bandwidth",
      paragraphs: [
        "Mitigation has an order of operations. Fix the analog signal first—alignment, amplitude, offset, grounding—because filtering cannot recover information a distorted signal never contained, and every filter added to the velocity path costs phase. Second, choose resolution and interface settings deliberately: finer quantization lowers the differentiation noise floor, but only if the interface and controller can carry the resulting data rate with margin, as documented in the counting-frequency limits of the selected configuration. Third, address latency explicitly—many drives offer delay or feedforward compensation that removes the phase lag without touching gain.",
        "Only then tune the loop. With the signal clean, the velocity loop can usually run higher gains than the noisy configuration allowed, which itself reduces sensitivity to load disturbances. Set filter corner frequencies against the measured ripple spectrum rather than habit: a notch placed on a genuine interpolation harmonic can help, but a broad low-pass that swallows servo bandwidth converts a signal problem into a performance ceiling. The acceptance test is the application criterion—for example, holding a stated velocity ripple band during constant-velocity writing—measured before and after, on the same setup.",
      ],
      links: [
        { label: "Read the high-speed counting frequency limits guide", href: "/technology/optical-encoder-high-speed-counting-frequency-limits-guide/" },
        { label: "Read the write-on-the-fly synchronization guide", href: "/technology/lithography-write-on-the-fly-encoder-synchronization-guide/" },
      ],
    },
    {
      heading: "Specifying velocity stability at selection time",
      paragraphs: [
        "The cheapest mitigation is to specify for it. When an application depends on constant velocity—write-on-the-fly lithography, inspection scanning, coating, metrology rastering—state the velocity stability target in the requirement set alongside resolution and accuracy, and ask how the proposed encoder configuration behaves at the working speed: interpolation quality at that signal frequency, the resolution and interface combination, and the latency through the chosen protocol. A configuration excellent at position holding can still be the wrong choice for a high-speed scanning axis if its interpolation or interface behavior degrades exactly where the process needs smoothness.",
        "Treat the vendor's signal-quality and installation documentation as part of the deliverable. The guides to readhead gain margin, air gap setup and EMC routing exist because most velocity ripple traced to encoders originates in installation detail rather than in the scale itself. A selection review that includes the motion profile, controller and cable plan closes the loop before the stage is built.",
      ],
      links: [
        { label: "Read the readhead gain margin adjustment guide", href: "/technology/encoder-readhead-gain-margin-adjustment/" },
        { label: "Read the EMC cable routing and grounding guide", href: "/technology/encoder-emc-cable-routing-grounding-guide/" },
      ],
    },
  ],
  midCta: {
    eyebrow: "VELOCITY STABILITY",
    title: "Is the ripple in the signal, the machine or the loop?",
    description:
      "Send your motion profile, encoder configuration and a velocity error capture at two speeds—SENFU can help attribute the ripple and define the signal-quality evidence that closes it.",
    label: "Request a velocity stability review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Velocity stability is a feedback-chain result.",
  conclusion: [
    "A stage can be no smoother than the position signal the velocity loop differentiates. Interpolation noise, quantization, electrical disturbance and latency each leave a characteristic signature in the velocity error spectrum, and a two-speed capture is usually enough to tell encoder, mechanics and controller apart. The discipline costs one afternoon of measurement and prevents weeks of retuning against a noise source the controller cannot fix.",
    "Work the chain in order: signal quality first, resolution and interface second, latency compensation third, loop tuning last—then verify against the application's velocity stability criterion rather than a scope trace. Encoders specified with that criterion in mind, and installed to their signal-quality documentation, give the servo loop a fair chance to deliver the velocity the process was designed around.",
  ],
  faq: [
    {
      question: "How is encoder-induced velocity jitter different from mechanical velocity ripple?",
      answer:
        "Frequency behavior separates them. Encoder-induced jitter scales with speed and locks to the quadrature signal period, scale pitch or interpolation cycle; mechanical ripple locks to machine geometry such as magnet pitch or revolve frequency. Capturing the velocity error spectrum at two speeds shows which components move with velocity and which stay fixed.",
    },
    {
      question: "Does a finer encoder resolution always improve velocity stability?",
      answer:
        "It lowers the quantization contribution to the differentiated noise floor, but only helps if the interface and controller can process the higher data rate within their bandwidth, and if the underlying analog signal quality supports the finer increment. A finer resolution on a distorted signal or an overloaded interface can make behavior worse.",
    },
    {
      question: "Can filtering remove velocity ripple?",
      answer:
        "Filtering can suppress specific periodic components, but it adds phase lag that reduces servo bandwidth, and it cannot recover information lost to signal distortion. The recommended order is to fix alignment, amplitude, offset and grounding first, then apply narrow filtering against measured spectral components—not broad low-pass filtering as a substitute for signal repair.",
    },
    {
      question: "What role does encoder latency play in a velocity loop?",
      answer:
        "Latency delays the position sample used for differentiation, adding phase lag that erodes stability margin and limits achievable gain. Many drives provide delay compensation or feedforward terms that counteract it. The latency budget should be documented from the encoder protocol, counter and controller sampling configuration before tuning.",
    },
    {
      question: "What evidence should I collect before reporting a velocity stability problem?",
      answer:
        "Quadrature signal captures at operating speed (amplitude, offset, phase, noise), velocity error records and spectra at two or more constant speeds in both directions, the encoder resolution and interface configuration, cable routing and grounding details, and the application's velocity stability target. This set usually identifies the source family on the first pass.",
    },
  ],
  sources: [
    {
      publisher: "SENFU",
      label: "SENFU — optical encoder technical documentation and signal-quality guides",
      href: "https://senfuprecision.com/optical-encoders/",
    },
    {
      publisher: "NIST",
      label: "NIST — precision motion and metrology publications",
      href: "https://www.nist.gov/",
    },
    {
      publisher: "ASPE",
      label: "American Society for Precision Engineering — precision machine design and servo resources",
      href: "https://aspe.net/",
    },
    {
      publisher: "IEEE",
      label: "IEEE — industrial electronics literature on encoder-based velocity estimation",
      href: "https://ieee.org/",
    },
  ],
};
