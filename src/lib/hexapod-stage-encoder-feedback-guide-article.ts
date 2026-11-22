import type { EditorialPage } from "@/lib/editorial-content";

export const hexapodStageEncoderFeedbackGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / PARALLEL KINEMATICS FEEDBACK",
  title: "Hexapod Stage Encoder Feedback: Why Parallel Kinematics Changes the Metrology Plan",
  description:
    "In a hexapod, platform position is not measured—it is computed from six strut lengths through forward kinematics. This guide explains what strut-level encoder feedback actually buys, why serial-axis selection habits fail on parallel kinematics, and how to build and verify a platform-level accuracy claim.",
  slug: "/technology/hexapod-stage-encoder-feedback-guide/",
  publishedAt: "2026-11-20",
  modifiedAt: "2026-11-20",
  primaryKeyword: "hexapod encoder feedback",
  secondaryKeywords: [
    "hexapod stage position feedback",
    "parallel kinematics metrology",
    "strut linear encoder",
    "hexapod positioning accuracy",
    "six-axis stage error budget",
    "hexapod calibration",
  ],
  featuredImage: {
    src: "/images/technology/hexapod-stage-encoder-feedback-guide/hexapod-stage-encoder-feedback-guide-cover.webp",
    alt: "Six-axis hexapod positioning platform with instrumented struts on a granite metrology table in a laboratory, a laser tracker reflector mounted on the moving platform",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "A hexapod positions its platform with six actuator struts arranged in parallel between a base and a moving plate. Encoders integrated in those struts close the length-control loop for each actuator—but the platform pose itself is never measured directly. It is computed from the six measured lengths through forward kinematics, so every encoder error is transformed by the geometry: a strut length error appears at the platform as a mixture of translation and rotation that changes with pose, payload and strut orientation. A nanometer-class strut encoder does not translate into a nanometer-class platform; the mapping between the two is nonlinear and workspace-dependent.",
    "This is why parallel kinematics demands a two-layer metrology plan. At the strut layer, select encoders for length-control quality: resolution, accuracy grade, mounting envelope, cable flex life and thermal behavior. At the platform layer, treat the kinematic model as a calibrated instrument: verify pose against an independent external reference across the workspace, fit the model coefficients, and budget the residual. A hexapod whose accuracy claim rests only on strut encoder resolution is making a claim its feedback cannot support.",
  ],
  challenge:
    "Teams that spec their first hexapod usually carry habits over from stacked serial axes. There, each encoder sits along one Cartesian direction and maps more or less directly to one degree of freedom, so selecting resolution and accuracy per axis feels like selecting the machine's accuracy. On a hexapod the same habit produces a false sense of control: the datasheet resolution of the strut encoders is quoted, the platform specification is copied from the strut numbers, and nobody asks what the kinematic transformation does to the error. The mismatch surfaces later as orientation-dependent positioning behavior—perfect at the calibration pose, drifting or coupling at the workspace edges, sensitive to payload and to which direction the platform approaches a target. Debugging is hard because the error is not in any single strut; it is in the geometry-dependent mixture of six strut errors passing through an uncalibrated or optimistic kinematic model.",
  requirements: [
    { title: "Strut truth and platform truth kept separate", description: "Strut encoder specifications (resolution, scale accuracy, speed) are written against strut length control, while every platform-level pose claim is derived and documented through the kinematic model—not copied from strut numbers." },
    { title: "Kinematic model delivered as calibration data", description: "The forward-kinematics implementation, joint geometry assumptions and fitted calibration coefficients are documented deliverables, with the residual against the verification reference stated per workspace region." },
    { title: "Encoders matched to strut mechanics", description: "Scale and readhead fit the strut envelope, tolerate the mounting tolerances of a slender loaded tube, survive continuous articulation with flexing cables, and carry the environmental rating the application requires." },
    { title: "Platform verification against an independent reference", description: "Pose accuracy, repeatability and coupling are measured across the workspace against an external instrument—laser tracker, interferometer or angular reference—not asserted from strut counts and model output alone." },
  ],
  routes: [
    { label: "Multi-axis cross-coupling error", href: "/technology/multi-axis-stage-cross-coupling-error-guide/", note: "The serial-axis version of the coupling problem" },
    { label: "Error budget allocation", href: "/technology/precision-stage-error-budget-allocation-guide/", note: "Allocating terms across the kinematic chain" },
    { label: "Encoder vs laser interferometer feedback", href: "/technology/linear-stage-encoder-vs-laser-interferometer-feedback-guide/", note: "Choosing the reference for verification" },
    { label: "Application review", href: "/contact/#application-form", note: "Discuss a parallel-kinematics axis" },
  ],
  evidence: [
    "Strut encoder specification sheet with resolution, scale accuracy, output interface and speed limits for the exact fitted configuration",
    "Kinematic calibration report: measured platform pose versus strut lengths across the workspace, fitted model coefficients and residuals",
    "Platform verification data: pose error measured against an independent external reference at multiple poses, payloads and approach directions",
    "Cable flex-life and articulation endurance data for the strut wiring, plus environmental ratings where the application demands them",
  ],
  comparisonTable: {
    caption: "Feedback architectures for hexapod-class platforms and what each can honestly claim",
    headers: ["Architecture", "What it controls", "Strengths", "Limits"],
    rows: [
      ["Strut encoders only", "Individual strut length in each closed loop", "Direct, high-bandwidth length control; simple per-strut servo tuning", "Platform pose is computed, not measured; errors transform with geometry and grow at poses with poor conditioning"],
      ["Strut encoders + calibrated kinematic model", "Estimated platform pose across the workspace", "Detects drift, supports workspace-level accuracy claims after calibration", "Model residual depends on joint quality, thermal state and load; still not an independent measurement"],
      ["Strut encoders + external metrology at verification", "Validated platform pose specification", "Traceable pose accuracy across the workspace; separates encoder, joint and geometry terms", "Verification is offline; instrument setup adds effort and cost"],
      ["Strut encoders + auxiliary platform sensors", "Direct sensing of selected pose degrees of freedom", "Removes chosen terms from the kinematic chain; supports in-process correction", "Added integration complexity; covers only the sensed degrees of freedom"],
    ],
  },
  articleSections: [
    {
      heading: "What strut encoders actually measure in a hexapod",
      paragraphs: [
        "A hexapod carries its platform on six actuator struts—motorized, often ball-screw or voice-coil driven legs arranged between a base plate and a moving plate at fixed joint points. Each strut's job, at the control level, is to hold a commanded length. A linear encoder fitted along the strut measures that length directly, which is exactly what the strut's servo loop needs. Everything else the machine does—platform translation, rotation, tilt, the six-degree-of-freedom pose the user commands—is produced by combining the six lengths through forward kinematics. The encoders measure the inputs to that computation, never the output.",
        "This has a consequence that datasheets rarely spell out: strut encoder resolution and platform resolution are different quantities connected by nonlinear geometry. The sensitivity of platform pose to strut length—the Jacobian of the kinematic map—changes continuously across the workspace. Near certain poses the geometry distributes errors benignly; near others it amplifies them, and the amplification differs for every degree of freedom. Two poses ten millimeters apart can turn the same strut error into different platform errors by factors that depend on strut angles and platform height. This is the parallel-kinematics version of the coupling problem that stacked serial stages solve with cross-axis error mapping, except here the coupling is baked into the mechanism rather than added by imperfect stacking.",
      ],
      links: [
        { label: "Read the multi-axis cross-coupling error guide", href: "/technology/multi-axis-stage-cross-coupling-error-guide/" },
        { label: "Read the resolution vs accuracy trade-offs guide", href: "/technology/optical-encoder-resolution-vs-accuracy-tradeoffs/" },
      ],
    },
    {
      heading: "Why serial-axis selection habits fail on parallel kinematics",
      paragraphs: [
        "On a stacked XY stage, each encoder reads along one Cartesian direction and the error budget can be assembled axis by axis, with cross terms measured and mapped afterward. The habits that work there—pick resolution from the positioning target, verify accuracy with a laser along each axis—do not survive contact with a parallel mechanism. A strut length error does not appear at the platform as a pure Cartesian displacement: depending on the strut's orientation at that pose, the same length error produces some mixture of translation and rotation, and the mixture changes continuously as the platform moves. Payload makes it worse, because joint compliance and structural deflection under load quietly change the effective geometry the kinematic model assumes.",
        "The practical failure mode is a specification copied across layers. A team quotes one nanometer strut resolution, writes one nanometer platform resolution into a proposal, and discovers at customer qualification that platform repeatability varies with orientation and payload by amounts far larger than the quoted number. Nothing is broken—the strut encoders are doing their job—but the claim sat on the wrong layer of the machine. The honest sequence runs the other way: define the platform pose specification first, transform it through the kinematics into strut-level requirements, and verify the platform result against an independent reference rather than trusting the transformation on paper.",
      ],
      image: {
        src: "/images/technology/hexapod-stage-encoder-feedback-guide/hexapod-stage-encoder-feedback-guide-detail.webp",
        alt: "Close-up of a linear optical encoder scale and readhead fitted inside the slender strut of a hexapod actuator during assembly on a laboratory workbench",
        width: 1600,
        height: 900,
      },
    },
    {
      heading: "Selecting encoders for strut integration",
      paragraphs: [
        "Strut mechanics impose constraints that ordinary stage selection never meets. The measuring path runs inside or along a slender tube that must carry motor, screw, bearing and wiring, so the scale and readhead have to fit a tight, often cylindrical envelope; the installation tolerances—gap, yaw, pitch, offset—are set by surfaces on a structure that is itself a loaded elastic member. Mounting the scale against a surface that deflects with payload means the encoder reads real length changes of the load path, which may or may not be the quantity the kinematic model wants; the decision should be made deliberately, not left to whichever surface was convenient.",
        "Articulation adds the environmental dimension. Struts rotate and translate continuously, so strut wiring flexes through the full motion envelope for the life of the machine—cable flex life belongs in the encoder selection alongside resolution, and connector strain relief is part of the feedback reliability, not an assembly afterthought. Thermal behavior matters in both directions: strut temperature changes alter the mechanical length the encoder should logically report, and the scale substrate's own expansion behavior must be understood against the strut material. Applications in synchrotrons, beamlines or telescope instrumentation add vacuum or low-outgassing requirements to the same list. Absolute versus incremental feedback follows the machine's startup strategy: absolute position removes homing of each strut at power-up, which on a hexapod with a suspended or oriented platform is often a meaningful safety and recovery argument, but the startup validation plan is still required either way.",
      ],
      links: [
        { label: "Review installation tolerance and readhead gap", href: "/technology/linear-encoder-installation-tolerance-readhead-gap/" },
        { label: "Review the precision motion application page", href: "/applications/precision-motion/" },
      ],
    },
    {
      heading: "Building the platform error budget through kinematics",
      paragraphs: [
        "The strut-level terms are conventional: scale accuracy, interpolation error, mounting-induced error, thermal behavior, plus joint runout, drive compliance and strut thermal expansion. The platform-level terms are those same quantities passed through the kinematic transformation at each pose of interest, combined with base and platform manufacturing deviations and the model's own parameter uncertainty. A structured error budget allocation is the right tool: assign each strut-level term a share, propagate it through the geometry at representative poses, and sum honestly. The result usually surprises first-time hexapod builders—the terms that dominate are rarely encoder resolution; they are joint quality, thermal geometry and calibration residual.",
        "Calibration is what turns the kinematic model from an assumption into an instrument. Platform pose is measured against an external reference across a grid of workspace poses, payloads and orientations; the measured pose-strut-length pairs are used to fit the model's geometric parameters—joint centers, strut datum offsets, orthogonality terms. The fitted residual is then the only defensible basis for a platform accuracy claim. Calibration is not permanent: significant payload changes, collision or service events, and thermal environment changes all shift the geometry, so the calibration report should state its validity range and the triggers for re-verification, the same way any other metrology instrument's calibration carries conditions.",
      ],
      links: [
        { label: "Read the error budget allocation guide", href: "/technology/precision-stage-error-budget-allocation-guide/" },
      ],
    },
    {
      heading: "Verifying the platform with independent metrology",
      paragraphs: [
        "Verification means measuring the output layer, not re-reading the input layer. For most hexapod travel classes a laser tracker is the natural platform-level reference: it measures pose over the full workspace without constraining the machine, and modern trackers resolve the angular and lateral accuracy that hexapod specifications quote. For machines with tighter demands on selected degrees of freedom, interferometric length references and autocollimator or electronic-level angular references resolve individual terms more precisely, at the cost of covering less of the workspace per setup. The choice mirrors the trade-offs between encoders and interferometric references on linear axes—the reference must be independent of the feedback being verified and uncertainty-matched to the claim being tested.",
        "A verification plan worth paying for samples the workspace deliberately: poses near the calibration point and near the extremes, minimum and maximum payload, both approach directions on each degree of freedom, and a warm-up sequence recorded against strut temperature. The deliverables are the measured pose errors, their repeatability, and the observed coupling between commanded and parasitic motion—compared line by line against the specification the proposal made. Machines verified this way carry platform accuracy as a measured, bounded property; machines verified by strut arithmetic carry it as a hope, and the difference is discovered at exactly the moment the application starts depending on it.",
      ],
      links: [
        { label: "Read the encoder vs laser interferometer feedback guide", href: "/technology/linear-stage-encoder-vs-laser-interferometer-feedback-guide/" },
      ],
    },
  ],
  midCta: {
    eyebrow: "PARALLEL KINEMATICS REVIEW",
    title: "Is your platform accuracy claim derived from strut encoders—or verified at the platform?",
    description:
      "Send your hexapod geometry, travel class, payload range and pose specification—SENFU can help select strut-level feedback that fits the mechanical envelope and define the platform-level verification plan that supports the claim.",
    label: "Discuss a hexapod feedback plan",
    href: "/contact/#application-form",
  },
  conclusionHeading: "In a hexapod, the encoder lives at the strut and the specification lives at the platform.",
  conclusion: [
    "Parallel kinematics breaks the quiet assumption that encoder numbers can be quoted as machine numbers. Six strut encoders give each control loop exactly what it needs—an accurate, high-bandwidth length reference—and then hand everything else to a nonlinear geometric transformation whose error behavior changes with pose, payload and thermal state. Treating strut resolution as platform resolution is not a rounding error; it is a category error, and it is the most common way hexapod metrology plans go wrong.",
    "The workable plan has two layers and one bridge. Select strut encoders for length-control quality inside the real mechanical and environmental envelope. Build the platform error budget by propagating strut-level terms through the kinematics at representative poses. Bridge the two layers with calibration against an independent external reference, and keep the residual—not the strut datasheet—as the published accuracy. A hexapod specified this way behaves in a customer's process the way it behaved in the lab, because every number in its specification was measured where the specification is actually used.",
  ],
  faq: [
    {
      question: "Can strut encoder resolution be quoted as hexapod platform resolution?",
      answer:
        "No. Platform pose is computed from six strut lengths through forward kinematics, and the sensitivity between strut length and platform pose varies across the workspace. The correct platform resolution is derived through the kinematic model at the poses of interest and confirmed by measurement—an untransformed strut number is not a platform specification.",
    },
    {
      question: "Why does a hexapod need calibration if every strut has an encoder?",
      answer:
        "The encoders measure strut lengths, but the kinematic model that converts lengths into pose depends on geometric parameters—joint centers, strut datums, orthogonality—that are never known perfectly from manufacturing. Calibration measures platform pose against an external reference and fits those parameters; the residual is the real accuracy of the machine.",
    },
    {
      question: "Should hexapod struts use absolute or incremental encoders?",
      answer:
        "It follows the machine's startup and recovery strategy. Absolute feedback gives each strut a valid length at power-up, which avoids homing a platform that may be carrying an oriented or suspended load—but the machine still needs a defined startup validation before motion is enabled. Incremental feedback remains workable where a safe homing routine exists.",
    },
    {
      question: "What external instruments are used to verify hexapod performance?",
      answer:
        "Laser trackers are the general-purpose choice because they measure full six-degree-of-freedom pose across the workspace without constraining the platform. For tighter demands on individual degrees of freedom, interferometric length references and autocollimator or electronic-level angular references resolve selected terms with lower uncertainty, trading workspace coverage per setup.",
    },
    {
      question: "When should a hexapod be re-calibrated or re-verified?",
      answer:
        "Whenever the geometry the model assumes may have changed: significant payload class changes, collision or overload events, service on joints or struts, or a move to a new thermal environment. The calibration report should state its validity range and triggers; a periodic re-verification against the external reference keeps the platform accuracy claim traceable over the machine's life.",
    },
  ],
  sources: [
    {
      publisher: "NIST",
      label: "NIST — dimensional metrology research and calibration reference data",
      href: "https://www.nist.gov/",
    },
    {
      publisher: "ISO",
      label: "ISO 230 series — test code for machine tools, positioning and geometry verification",
      href: "https://www.iso.org/",
    },
    {
      publisher: "ASPE",
      label: "American Society for Precision Engineering — precision machine design and metrology resources",
      href: "https://aspe.net/",
    },
    {
      publisher: "SPIE",
      label: "SPIE — publications on precision positioning systems and optical instrumentation",
      href: "https://spie.org/",
    },
  ],
};
