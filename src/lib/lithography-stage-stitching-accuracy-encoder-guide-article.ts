import type { EditorialPage } from "@/lib/editorial-content";

export const lithographyStageStitchingAccuracyEncoderGuideArticle: EditorialPage = {
  eyebrow: "TECHNOLOGY / LITHOGRAPHY STAGE METROLOGY",
  title: "Stage Metrology for Field-Stitching Accuracy in Maskless Lithography",
  description:
    "What stitching accuracy really depends on in maskless lithography: stage position metrology, encoder scale mapping, air-bearing stage behavior, environmental drift and the acceptance tests that qualify field stitching.",
  slug: "/technology/lithography-stage-stitching-accuracy-encoder-guide/",
  publishedAt: "2026-09-16",
  modifiedAt: "2026-09-16",
  primaryKeyword: "lithography stage stitching accuracy encoder",
  secondaryKeywords: [
    "maskless lithography stitching error",
    "field stitching metrology stage encoder",
    "encoder scale calibration lithography stage",
    "air bearing stage position feedback",
    "stitching accuracy acceptance test",
  ],
  featuredImage: {
    src: "/images/technology/lithography-stage-stitching-accuracy-encoder-guide/lithography-stage-stitching-accuracy-encoder-guide-cover.webp",
    alt:
      "Precision air-bearing lithography stage with an optical encoder scale visible along its travel axis inside a metrology frame",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "In maskless and e-beam lithography, large fields are written as tiles that must join within a specified overlay tolerance; the error at the tile boundary is stitching error. Because the exposure tool projects or writes each tile at a position defined by the stage, stitching accuracy is governed first by stage metrology: the quality of the encoder or interferometer feedback, the mapping of that feedback against a reference, straightness and angular error motions of the stage, and the stability of the metrology frame against temperature.",
    "An encoder-based stage can reach sub-micrometer stitching accuracy when the scale errors are mapped and compensated, the readhead geometry is stable, and the environment is controlled; the acceptance test should measure stitching directly, by exposing tile-pair patterns and measuring boundary alignment on a metrology tool, rather than inferring it from axis accuracy numbers alone.",
  ],
  challenge:
    "Procurement documents often specify stage accuracy as a single axis number, then discover stitching errors three to five times larger at field boundaries. The gap comes from what the single number does not contain: differences between adjacent tile positions on the scale, cross-axis error motion coupling into in-plane position, scale error periodicity that aliases with the tile pitch, thermal drift of the metrology frame between tiles, and write-timing interaction with stage dynamics. None of these appear in a static positioning-error specification, yet each lands directly at the stitch boundary where the user's overlay requirement lives.",
  requirements: [
    {
      title: "Feedback quality and mapping",
      description:
        "Encoder or interferometer resolution and noise, scale error profile and its mapping, readhead configuration (multiple heads, averaging) and mounting stability over the full travel.",
    },
    {
      title: "Stage mechanical performance",
      description:
        "Straightness, flatness, pitch, yaw and roll error motions over travel, Abbe offsets between measurement axis and exposure plane, and the dynamic behavior at writing velocity.",
    },
    {
      title: "Environment and metrology frame",
      description:
        "Temperature stability of scale, frame and substrate, gradients between tiles written minutes apart, and vibration isolation adequate for the writing process.",
    },
    {
      title: "Stitching qualification",
      description:
        "A defined acceptance test exposing tile boundaries in both axes with matched process conditions, measured on a calibrated metrology tool, with the error budget and acceptance limits agreed before purchase.",
    },
  ],
  comparisonTable: {
    caption:
      "Contributors to stitching error and the evidence that characterizes each",
    headers: [
      "Error contributor",
      "Mechanism at the stitch boundary",
      "Characterization method",
      "Typical mitigation",
    ],
    rows: [
      [
        "Scale (grating) error",
        "Adjacent tiles are written at different scale positions; uncorrected scale errors appear directly as stitch offset",
        "Scale mapping against a laser interferometer or straightedge over full travel",
        "Linear and periodic error compensation tables in the controller; multi-head averaging",
      ],
      [
        "Straightness and angular error motion",
        "Cross-axis motion and yaw change the in-plane position between tiles, especially with Abbe offset",
        "Capacitive or optical probes on a reference artifact over travel",
        "Minimize Abbe distance; dual readheads across the axis; mechanical alignment of guides",
      ],
      [
        "Thermal drift of metrology frame",
        "Tiles written minutes apart land on a frame that has grown or bent between exposures",
        "Long-duration position drift log at fixed substrate with temperature recorded",
        "Low-CTE frame materials, symmetric structures, enclosure temperature control, delay management",
      ],
      [
        "Encoder noise and interpolation error",
        "Position noise at writing instant translates into line placement jitter within and between tiles",
        "Jitter measurement per supplier guidance; subdivision error testing",
        "High-quality optical interpolation, signal quality discipline, filtered velocity loops",
      ],
      [
        "Write-timing and stage dynamics",
        "Pixel placement referenced to a stage position that lags or leads the actual optical position",
        "Correlate stage data with written test patterns at production velocity",
        "Synchronized write trigger from encoder position, adequate settling before tile start",
      ],
    ],
  },
  articleSections: [
    {
      heading: "Why stitching accuracy is a metrology problem before it is a writing problem",
      paragraphs: [
        "A maskless tool builds a large area by writing fields, and the exposure system handles the geometry within a field. The stage handles the geometry between fields. When tile N+1 is written, its placement is whatever the stage position feedback said, translated through the machine's geometry into substrate coordinates. Every error in that translation appears at the boundary between tiles as an offset, rotation or distortion the user sees as stitching error. This is why two tools with identical optics and identical nominal stage accuracy can show very different stitch quality.",
        "The measurement chain is the foundation. An optical encoder with sub-micrometer resolution provides position feedback whose systematic error is dominated by the scale's graduations and by readhead geometry. Unlike an interferometer, an encoder measures directly at the stage with no beam path through air, which makes it robust to environmental index changes and compact enough for OEM integration; the cost is that scale errors become stitch errors unless they are mapped out. That trade is exactly why encoder-based lithography stages succeed or fail on calibration discipline.",
        "The budget should be built from the stitch requirement backward: if the process tolerates 150 nm stitch overlay, the budget allocates shares to scale mapping residual, error motion, thermal drift, noise and write-timing, each with a characterization method. A tool specified this way can be accepted by measurement instead of by hope.",
      ],
      links: [
        {
          label: "Review encoder subdivision error and position jitter",
          href: "/technology/encoder-subdivision-error-position-jitter/",
        },
        {
          label: "Review semiconductor-wafer-stage encoder integration",
          href: "/technology/semiconductor-wafer-stage-encoder-integration/",
        },
      ],
    },
    {
      heading: "Encoder configuration choices that decide stitch quality",
      paragraphs: [
        "Scale error mapping is the first lever. A stage supplier maps the encoder's position error against a reference over full travel and loads a compensation table; the residual after compensation, not the raw scale datasheet, is what belongs in the error budget. Residuals typically contain a small linear component plus low-order periodic terms; multi-head configurations that average two or more readheads spaced to suppress harmonic scale errors reduce the periodic part before compensation even starts. This is standard practice in high-accuracy stages and is worth verifying explicitly in procurement.",
        "Readhead mechanical stability matters as much as the scale. A readhead bracket that relaxes after thermal cycling shifts the measurement datum by a fraction of a micrometer, which repeats at every stitch boundary. Mounting design, materials with matched thermal expansion, and a verification check of datum stability over temperature belong in the design review. On rotary axes, angular encoder stages follow the same logic with the additional subtlety that eccentricity between scale and rotation axis maps directly into angle error and is best suppressed by multi-head averaging around the circumference.",
        "Air-bearing stages are the natural partner for this metrology: they remove guide friction and its stick-slip signature from the position loop, keep yaw and roll error motion at the arcsecond level over travel, and let the encoder close the loop on a stage that moves smoothly at writing velocity. The combination of air-bearing guides, mapped optical scales and encoder-synchronized write triggering is the practical recipe for sub-micrometer field stitching on compact maskless tools.",
      ],
      subsections: [
        {
          heading: "Specification language worth insisting on",
          paragraphs: [
            "These clauses convert stitching intent into checkable requirements:",
          ],
          bullets: [
            "Scale mapping residual stated as a value over full travel, with the mapping method named",
            "Readhead count, spacing and averaging scheme documented for each axis",
            "Error motion (straightness, yaw, pitch, roll) stated over travel with measurement setup",
            "Abbe offsets between encoder measurement lines and writing plane stated and minimized",
            "Write trigger derived from encoder position with defined timing uncertainty",
          ],
        },
      ],
    },
    {
      heading: "Environment, drift and the metrology frame",
      paragraphs: [
        "Between writing one tile and the next, minutes pass. If the machine frame, scale or substrate changes temperature in that interval, the second tile lands on coordinates that no longer match the first. The encoder cannot prevent this, because the scale itself is the reference: if the scale's support grows, positions measured against it move with it. The defense is material and structural: low-expansion frame materials, symmetric structures that bend rather than grow asymmetrically, and enclosure-level temperature stability so that gradients, not just absolute temperature, are controlled.",
        "Substrate effects add a second layer. The substrate clamped to the stage has its own thermal expansion, and the stitch relationship is defined in substrate coordinates, not stage coordinates. Tools that write large fields on glass or semiconductor substrates control the substrate's temperature or compensate for its expansion in the layout; otherwise a temperature difference between tiles converts directly into stitch error at a rate set by the substrate's expansion coefficient.",
        "A practical drift characterization is inexpensive and revealing: park the stage holding a written reference pattern, log reported position and temperature for hours, and correlate the two. The result tells the integrator whether the remaining stitch error will be dominated by drift or by the compensation residuals, which determines where the next engineering hour is best spent. SENFU supplies encoder configurations for lithography stages with the geometry and stability documentation needed to run this analysis, and supports the integration review from stage design through stitching acceptance.",
      ],
      links: [
        {
          label: "Review linear encoder thermal error management",
          href: "/technology/linear-encoder-thermal-error/",
        },
        {
          label: "Review maskless lithography selection considerations",
          href: "/technology/maskless-lithography-system-selection/",
        },
      ],
    },
    {
      heading: "Qualify stitching by measuring it directly",
      paragraphs: [
        "The acceptance test that matters exposes what the user's process will see: adjacent tiles written under production conditions, with the boundary pattern designed for metrology, such as vernier or cross-coupled gratings spanning the seam in both axes. Measure the boundary alignment on a calibrated metrology tool, across multiple seam locations and multiple field pairs, including seams written early and late in a long job to expose drift. Report the distribution, not just a best case.",
        "Correlate the measured stitch errors with stage data recorded during writing: encoder position at tile start and end, temperature logs, and error-motion traces. This correlation turns a failing number into a root cause: scale residual shows as a repeatable function of stage position, drift shows as a trend with time, dynamics show as velocity-dependent placement shifts. Each has a different fix, and only direct measurement distinguishes them.",
        "Agree the error budget and limits before purchase, in the specification, so acceptance is a measurement against pre-agreed numbers rather than a negotiation. SENFU supports this with application engineering review of the stage's encoder configuration, mapping and compensation documentation, and the stitching test plan, so that encoder-based metrology delivers its full accuracy where the user's requirement actually lives: at the field boundary.",
      ],
      image: {
        src: "/images/technology/lithography-stage-stitching-accuracy-encoder-guide/lithography-stage-stitching-accuracy-encoder-guide-detail.webp",
        alt:
          "Close view of an optical encoder readhead aligned to a precision scale on a lithography stage during calibration and mapping",
        width: 1600,
        height: 900,
      },
      links: [
        {
          label: "Review semiconductor-equipment applications",
          href: "/applications/semiconductor-equipment/",
        },
        {
          label: "Submit a stitching metrology plan for review",
          href: "/contact/#application-form",
        },
      ],
    },
  ],
  midCta: {
    eyebrow: "STAGE METROLOGY REVIEW",
    title: "Specifying a stage for field stitching?",
    description:
      "Send the stage concept, encoder configuration and stitch accuracy target for a metrology and error-budget review before build.",
    label: "Request the metrology review",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Stitching accuracy is won at the measurement chain.",
  conclusion: [
    "Field stitching in maskless lithography is governed by stage metrology: mapped optical encoder scales, stable readhead geometry, minimized Abbe offsets, air-bearing stage dynamics and a thermally stable metrology frame. A single axis-accuracy number does not predict stitch quality; the error budget and its characterization methods do. Tools that qualify stitching by direct boundary measurement, correlated with stage and environmental data, turn stitching from a field surprise into a pre-agreed acceptance measurement.",
    "For a SENFU technical review, send the stage design, encoder configuration, error budget draft and stitching test plan. SENFU can check the metrology chain against the stitch target and provide the configuration documentation needed for a defensible acceptance test.",
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
      note: "Submit the stage and stitching plan",
    },
  ],
  evidence: [
    "Scale mapping report: method, residual error over full travel, compensation table version",
    "Readhead configuration and datum-stability data across thermal cycles",
    "Error motion and Abbe offset documentation with measurement setup",
    "Stitching acceptance data: boundary alignment distribution across seams and job duration",
    "Correlation of stitch errors with stage, temperature and timing logs",
  ],
  faq: [
    {
      question:
        "Why is measured stitching error larger than the stage's stated positioning accuracy?",
      answer:
        "Positioning accuracy is usually a single-axis, whole-travel statistic. Stitching error is a differential measurement between two positions, so it is sensitive to scale error differences at those positions, cross-axis error motion with Abbe offset, thermal drift between tiles and write-timing effects. These are bounded only when the error budget treats them explicitly.",
    },
    {
      question:
        "Can encoders really support sub-micrometer stitching, or is an interferometer required?",
      answer:
        "Encoder-based stages achieve sub-micrometer stitching when scales are mapped against a reference and compensated, readheads are multiplied and averaged to suppress harmonic errors, and the metrology frame is thermally stable. Encoders measure directly at the stage and avoid interferometer beam-path sensitivity to air index, which is an advantage in compact tools; interferometers remain the reference for the mapping step.",
    },
    {
      question:
        "What is scale error mapping and how often is it needed?",
      answer:
        "Mapping measures the encoder's position error against a reference interferometer or straightedge over full travel and loads a compensation table into the controller. It is performed at build and repeated after major service or if datum stability checks suggest change. The mapped residual, not the raw scale datasheet error, belongs in the stitch budget.",
    },
    {
      question:
        "How does thermal drift create stitching error if the encoder is accurate?",
      answer:
        "The encoder measures position relative to the scale. If the scale, its support or the frame grows between writing one tile and the next, the second tile's coordinates shift with them. Control comes from low-expansion materials, symmetric structure and enclosure temperature stability, plus substrate temperature management for large fields.",
    },
    {
      question:
        "What should a stitching acceptance test actually measure?",
      answer:
        "Directly measured boundary alignment between adjacent tiles written under production conditions, using metrology-friendly seam patterns, sampled across multiple seams, field pairs and job durations, measured on a calibrated tool. Report the distribution and correlate outliers with stage, temperature and timing data for root cause.",
    },
    {
      question:
        "What should I send SENFU when designing a stage for stitching accuracy?",
      answer:
        "Send the stitch accuracy target and error budget draft, stage concept and travel, encoder configuration including readhead count and placement, thermal design of the metrology frame, and the intended acceptance test. SENFU application engineering can review the metrology chain and provide configuration-specific documentation for the qualification file.",
    },
  ],
  sources: [
    {
      publisher: "SENFU",
      label: "Encoder configurations for lithography stage metrology",
      href: "https://senfuprecision.com/resources/",
    },
    {
      publisher: "Renishaw",
      label: "Linear encoder scale error mapping and compensation application notes",
      href: "https://www.renishaw.com/en/encoder-technology--support-19146",
    },
    {
      publisher: "Heidenhain",
      label: "Position error compensation for machine and metrology axes",
      href: "https://www.heidenhain.com/",
    },
    {
      publisher: "American Society for Precision Engineering",
      label: "Precision stage design and error motion resources",
      href: "https://aspe.net/",
    },
    {
      publisher: "National Institute of Standards and Technology",
      label: "Metrology for lithography and stage calibration research",
      href: "https://www.nist.gov/",
    },
  ],
};
