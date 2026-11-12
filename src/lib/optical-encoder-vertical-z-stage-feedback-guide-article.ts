import type { EditorialPage } from "@/lib/editorial-content";

export const opticalEncoderVerticalZStageFeedbackGuide: EditorialPage = {
  eyebrow: "TECHNOLOGY / OPTICAL ENCODERS",
  title: "Optical Encoder Feedback for Vertical Z Stages: Gravity, Safety, and Installation Practice",
  description:
    "A vertical Z axis changes what an optical encoder measures and what the machine must do when feedback is lost: gravity becomes a constant load on the scale, the readhead mount, and the servo, and a power fault can turn position uncertainty into a crash. This guide covers how gravity alters scale and mounting behavior, how to design scale orientation and thermal layout for vertical axes, how brakes and counterbalance interact with feedback, and the commissioning checks that prove a Z axis before it carries a wafer, an optic, or a spindle.",
  slug: "/technology/optical-encoder-vertical-z-stage-feedback-guide/",
  publishedAt: "2026-11-07",
  modifiedAt: "2026-11-07",
  primaryKeyword: "vertical stage encoder feedback",
  secondaryKeywords: [
    "Z-axis linear encoder",
    "vertical axis position feedback",
    "encoder scale vertical mounting",
    "Z stage gravity sag metrology",
    "vertical stage brake interlock encoder",
    "lithography Z stage focus feedback",
  ],
  featuredImage: {
    src: "/images/technology/optical-encoder-vertical-z-stage-feedback-guide/optical-encoder-vertical-z-stage-feedback-guide-cover.webp",
    alt: "Linear optical encoder scale mounted vertically on a precision Z stage column with readhead and brake assembly in a laboratory",
    width: 1600,
    height: 900,
  },
  directAnswer: [
    "A vertical Z axis is the same encoder hardware used differently, and gravity is the reason. On a horizontal axis, gravity loads the bearings and the machine frame in ways that barely touch the measurement path; on a vertical axis, it loads the scale, the readhead bracket, the counterbalance, and the servo continuously and directionally. Scale tape can creep under sustained shear, brackets can bend between up-stops and down-stops, stick-slip appears at the bottom of the stroke, and the servo carries a permanent bias current just to hold position. Because the Z axis is usually the focus axis in lithography and inspection tools, every one of these effects lands directly in the focus budget rather than somewhere the error allocation can absorb it.",
    "A vertical installation therefore needs three things a horizontal one can often skip: an orientation-aware mechanical design that treats scale tension, bracket stiffness, and cable exit as gravity-loaded decisions; a safety architecture in which the brake, the counterbalance, and the encoder's position-validity signals are wired as interlocks, because a lost power event on an unloaded horizontal axis wastes time while on a vertical one it can drop the payload; and a commissioning routine that exercises the axis in both directions over full travel and records behavior against an independent reference. An encoder qualified this way keeps the Z measurement as trustworthy as the horizontal axes beside it.",
  ],
  challenge:
    "Vertical-axis encoder problems are systematically misdiagnosed because teams test horizontally. A scale-and-readhead assembly that shows clean quadrature and stable positioning on the bench can behave differently once mounted on a vertical column: bidirectional error grows because gravity bends the metrology path one way moving up and another way moving down, position drifts while the axis 'holds' because the scale substrate creeps under sustained shear load, and alarms appear only at specific Z heights where bracket resonance or cable tension peaks. Teams also discover late that the safety logic is wrong in an unpleasant way: the machine homes and moves on an encoder signal that has not been validated since power-up, or the brake engages against a position the controller no longer trusts, leaving the axis parked at an unknown height with a payload attached. Because Z travel in lithography tools is short—often tens of millimeters—every micron of orientation-dependent error is a large fraction of the focus budget, and because the axis holds against gravity for hours, slow effects that a horizontal test would never reveal become visible shifts in focus over a shift of production.",
  requirements: [
    { title: "Orientation-loaded scale and bracket design", description: "Select the scale type and mounting for a gravity-loaded orientation: mechanically retained scale tape or glass scale, bracket stiffness checked against the measured up-down error difference, and cable exit and strain relief positioned so flex tension does not pull the readhead off its gap." },
    { title: "Thermal layout for a vertical structure", description: "Vertical columns develop top-to-bottom temperature gradients, and a tall column with a scale on one face and heat sources behind it bends in the measurement direction. Map convection and heat-source locations, separate scale and readhead from warm electronics, and verify the axis against the machine reference after thermal stabilization." },
    { title: "Safety architecture wired to feedback validity", description: "Treat the brake, counterbalance, and encoder position-validity status as one interlock chain: motion enabled only on validated feedback, brake engagement only on trusted position, and a defined safe state for power loss that does not rely on the encoder still being powered." },
    { title: "Bidirectional commissioning evidence over full travel", description: "Accept the axis only after cyclic bidirectional tests over the full Z travel, with position compared against an independent reference at defined heights and the up-down error difference, drift while holding, and repeatability recorded as acceptance numbers." },
  ],
  routes: [
    { label: "Installation alignment errors", href: "/technology/linear-encoder-installation-alignment-errors/", note: "Alignment tolerances that vertical mounting must also satisfy" },
    { label: "Data retention after power loss", href: "/technology/absolute-encoder-data-retention-power-loss-guide/", note: "Position validity when a vertical axis loses power" },
    { label: "Cable flex life and drag chains", href: "/technology/optical-encoder-cable-flex-life-drag-chain-guide/", note: "Vertical runs see their own flex cycle pattern" },
    { label: "Precision motion applications", href: "/applications/precision-motion/", note: "Where vertical feedback requirements are specified" },
  ],
  evidence: [
    "Up-down error difference measured over full Z travel against an independent reference, with the bracket stiffness change that produced it documented",
    "Hold test: position, drive bias current, and brake temperature logged while the axis holds at a defined height for the production duty cycle",
    "Power-loss recovery record: safe state behavior, brake engagement position, and position validity at restart for the exact encoder interface used",
    "Signal baseline (amplitude, quadrature balance, distortion) recorded with the axis at top, bottom, and mid travel, showing cable and orientation effects",
    "Thermal map of the vertical column at stabilization, with scale and readhead positions marked and drift-after-warm-up quantified",
  ],
  comparisonTable: {
    caption: "Feedback and safety architectures for vertical Z stages compared",
    headers: ["Aspect", "Horizontal design carried over unchanged", "Vertical-specific single feedback design", "Redundant monitored vertical feedback"],
    rows: [
      ["Measurement behavior", "Scale tension, bracket geometry, and cable exit designed for a horizontal axis; orientation-dependent error appears only after installation and is diagnosed late", "Scale retention, bracket stiffness, and cable routing chosen for the gravity-loaded orientation from the start; up-down error measured and compensated", "Two independent measurements (encoder plus interferometer or secondary readhead) cross-checked live; highest confidence for focus-critical tools, highest cost and integration effort"],
      ["Safety behavior on power loss", "Brake and limit logic written for an axis that cannot move unpowered; on a vertical axis this leaves the payload held only by the brake's static condition", "Brake, counterbalance, and encoder validity wired as one interlock chain with a defined safe state; motion enabled only on validated position", "Safety chain additionally monitored by an independent measurement so brake slip or counterbalance faults are detected while the axis is parked"],
      ["Failure modes seen first", "Slow focus drift over a production shift attributed to the process; bidirectional error discovered during overlay investigation", "Hold-test drift and bias-current growth detected during commissioning; brake wear trended before it becomes slip", "Discrepancy between the two measurements triggers an alarm at onset, before the process sees any focus change"],
      ["Best use", "Retrofits and short-travel axes with modest focus budgets and low payload value", "Lithography focus axes, wafer-handling lifts, and metrology columns where a single well-qualified encoder can carry the budget", "Long-travel vertical lifts with expensive payloads, or tools where feedback failure must never require operator intervention"],
    ],
  },
  articleSections: [
    {
      heading: "What gravity changes in an encoder-measured vertical axis",
      paragraphs: [
        "Gravity turns every previously benign mass into a sustained load on the measurement chain. On a horizontal axis the scale sees essentially no body force along or across its length, and the readhead bracket carries its own weight only; on a vertical axis the scale substrate is loaded continuously in shear where it is bonded or clamped, the readhead bracket bends between its top-of-travel and bottom-of-travel attitudes, and the machine column between them compresses and extends microscopically. None of these deflections is large in absolute terms, but they are directional: the metrology path sags one way when the stage is at the top of the stroke and a different way at the bottom, which is why the classic signature of a vertical installation is a growing bidirectional error—up moves and down moves disagree—while absolute scale accuracy on the datasheet looks perfectly adequate.",
        "The second change is dynamic rather than static. Gravity subtracts or adds to drive force depending on direction, so the servo carries a bias current simply to hold station, stick-slip appears preferentially at the bottom of the stroke where friction and gravity combine, and the velocity profile differs measurably between ascent and descent. In a lithography or inspection tool this is not an abstract motion-quality problem, because the Z axis is usually the focus axis: every micron of orientation-dependent measurement error and every micro-Kelvin-scale drift while the axis holds converts directly into focus error that the depth-of-focus budget must absorb. The axis-level consequences of measurement quality on stage behavior are easiest to see in the velocity stability and jitter context, which applies to the vertical direction with gravity added.",
        "It is worth being explicit about why short travel does not reduce the problem, because Z travel in lithography and inspection tools is often only tens of millimeters and teams sometimes reason that a short axis has little room for error. The opposite is true: a short-stroke focus axis concentrates the most demanding position requirements of the whole tool into the direction with the least mechanical symmetry. Its error budget is typically the tightest in the machine, its duty cycle includes more hold-still time than motion time, and its payload—the optical column's reference plane or the wafer itself—is the object the process cares about. A vertical axis with a modest absolute error can still fail the tool if that error is direction-dependent, because overlay and focus are bidirectional operations: the axis moves up to focus, holds, and moves down to clear, and any disagreement between those two directions is directly visible in the process result.",
      ],
      links: [
        { label: "Read the encoder jitter and stage velocity stability guide", href: "/technology/encoder-jitter-stage-velocity-stability-guide/" },
        { label: "See precision motion application requirements", href: "/applications/precision-motion/" },
      ],
    },
    {
      heading: "Scale orientation, mounting, and thermal layout on a vertical structure",
      paragraphs: [
        "Scale selection for a vertical axis starts with how the scale is retained. Adhesive-tape scales that behave well horizontally are loaded in permanent shear on a vertical face, and adhesive creep under sustained load is a slow, one-directional position change that appears as drift while the axis holds—a failure mode that mimics thermal drift and is difficult to distinguish from it without a controlled test. For vertical service, mechanically retained or end-clamped scale tapes, or rigid glass scales, remove the shear-load question; the remaining mechanical decisions are bracket stiffness across the full stroke attitude range and the cable exit orientation, because a readhead cable that hangs from its connector or is tensioned by its own weight at one end of the travel will pull the readhead off its nominal gap at the other. The gap, alignment, and tolerance rules that apply to every installation are the same ones a vertical axis must satisfy, with the added condition that they must hold in both stroke attitudes.",
        "Thermal layout is the second vertical-specific discipline. A tall column develops a top-to-bottom temperature gradient from convection alone, and heat sources—motors, brakes, drives—sit behind or beside the scale at particular heights, bending the structure in the measurement direction as the machine warms. The practical responses are to separate the scale and readhead from heat sources with brackets that do not bridge the warm structure directly, to orient the scale on the face that best matches the machine's metrology reference, and to define a warm-up and stabilization expectation for the axis before any accuracy claim is made. A vertical axis whose error changes between a cold morning start and a mid-shift measurement has a thermal layout problem, not an encoder problem, and the fix is in the structure's design rather than in re-calibrating the feedback.",
      ],
      links: [
        { label: "Read the installation tolerance and readhead gap guide", href: "/technology/linear-encoder-installation-tolerance-readhead-gap/" },
        { label: "Read the thermal drift and warm-up stabilization guide", href: "/technology/precision-stage-thermal-drift-warm-up-stabilization-guide/" },
      ],
    },
    {
      heading: "Brakes, counterbalance, and what happens when power is lost",
      paragraphs: [
        "On a horizontal axis, losing power and feedback simultaneously is an inconvenience; on a vertical axis it is a drop event, so the brake, the counterbalance, and the encoder's position-validity outputs must be designed as one chain. The brake is engaged against a position the controller last trusted; if feedback had already drifted or failed, the axis parks at an unknown height with the payload attached, and the next power-up must recover from that state safely. Counterbalance—pneumatic, spring, or mass—reduces the brake's job and the servo's bias, but it introduces its own faults: a leaking pneumatic counterbalance lets the axis sag while reported position says nothing changed, because a failing counterbalance does not necessarily disturb the encoder signal, only the relationship between reported and physical position at the payload. This is why the position-validity and alarm outputs of the encoder belong in the safety logic, not merely in the diagnostics page.",
        "Absolute feedback changes the recovery problem materially. After a power loss, an absolute encoder reports where the axis actually stopped—including the small uncontrolled motion that happened during the drop-and-catch transient—so the controller can validate the position before enabling motion and can decide whether the brake engaged inside the expected window. Incremental feedback on a vertical axis means every power-up begins from an unknown height, and the homing move itself becomes a safety-critical maneuver against gravity, with the reference mark strategy defining where the axis is allowed to seek datum and in which direction. The power-loss data-retention behavior of the chosen interface and the startup recovery logic it enables should be specified together as one requirement, because they only work as a pair.",
        "Between power events, the parked state deserves its own attention, because a vertical axis spends most of its life held rather than moving. A brake that is engaging and releasing cleanly holds the axis without measurable slip; a brake that is wearing, contaminated, or under-driven can micro-slip while the axis is nominally parked, and because the encoder is usually powered down or idle during that time, nothing records the motion. Facilities that run unattended production or long processes should decide deliberately whether the parked state is monitored—by keeping encoder power alive, by a periodic position check before each process step, or by accepting an unmonitored parked state with a documented counterbalance that can hold the load alone. Each answer is defensible; leaving the question unasked is not, because it is precisely the parked-state slip that later appears as an unexplained focus offset at the start of a shift, with the position log showing nothing wrong.",
      ],
      links: [
        { label: "Read the data retention and power loss guide", href: "/technology/absolute-encoder-data-retention-power-loss-guide/" },
        { label: "Read the absolute encoder startup recovery guide", href: "/technology/absolute-encoder-startup-recovery/" },
      ],
    },
    {
      heading: "Servo behavior, jitter, and dynamic stability in the vertical direction",
      paragraphs: [
        "Gravity is a constant disturbance the servo must reject in one direction and is assisted by in the other, and this asymmetry shows up in the feedback signal before it shows up in the process. An imperfect counterbalance leaves a steady-state bias current that rises and falls with temperature as the counterbalance spring or pneumatic system drifts; friction asymmetry between ascent and descent produces different following-error signatures moving in each direction; and any stick-slip at stroke extremes appears in the encoder signal as micro-motion bursts rather than as a smooth lag. These are servo-loop problems that the encoder faithfully reports, which is exactly why the vertical axis is the wrong place to discover that the velocity loop was tuned on a bench with no gravity load. Tuning should be completed and verified on the vertical axis itself, in both directions, across the temperature range the tool will see.",
        "The measurement side also has vertical-specific dynamic behavior. Readhead gap and alignment were set at one stroke attitude; verify they still hold at the other, because bracket deflection under gravity changes them between top and bottom of travel. Cable flex cycles on a vertical run have their own pattern—short flexing near the connector or at the drag-chain entry rather than a uniform bend radius—and a cable that passes horizontal bench tests can develop intermittent faults only at particular Z heights. Recording the signal baseline at top, mid, and bottom travel during commissioning converts these possibilities into measured numbers, and makes any later height-specific fault immediately interpretable as a mechanical or cabling interaction rather than an encoder mystery.",
      ],
      links: [
        { label: "Read the velocity feedback and servo bandwidth guide", href: "/technology/linear-encoder-velocity-feedback-servo-bandwidth/" },
        { label: "Read the cable flex life and drag chain guide", href: "/technology/optical-encoder-cable-flex-life-drag-chain-guide/" },
      ],
    },
    {
      heading: "Commissioning and acceptance checks specific to vertical axes",
      paragraphs: [
        "A vertical axis earns trust through tests a horizontal axis never needs. The core measurement is the up-down error difference: approach a defined set of heights over full travel from above and from below, compare reported position against an independent reference at each, and record the difference as a function of height. A large, height-dependent difference points at bracket stiffness or scale retention; a uniform difference points at compensation or gain; a difference that grows over repeated cycles points at adhesive creep or loosening hardware. Alongside it, run a hold test at the production working height—position, drive bias current, and brake temperature logged for the duty cycle length—because drift while holding is the failure mode that later presents as focus drift over a shift, and it is invisible to positioning tests.",
        "The acceptance set finishes with safety and thermal evidence. Exercise the power-loss sequence with the payload represented: confirm the brake engagement behavior, the position validity at restart, and that the recovery move is defined for the exact interface installed. Map the column's temperature field at stabilization and record the axis error before and after warm-up so the production team knows how long stabilization takes and what residual drift to expect. Finally, document the homing and datum strategy as it was actually commissioned, including direction and limit interactions, so any future change to the safety logic starts from the tested configuration rather than the original drawing. Positioning repeatability results for vertical axes should be reported with this context attached, because a repeatability number measured only in one direction is not describing what the axis will do in production.",
        "After release, the same evidence becomes the monitoring plan. The commissioning numbers—the up-down difference, the hold-test drift, the bias-current level at each working height, and the signal baseline at top, mid, and bottom travel—are the reference against which every later measurement is compared, and they are what turns an anomaly into a diagnosis. A rising bias current points at the counterbalance; a growing up-down difference at one height points at the bracket or the cable; a hold-test drift that tracks brake temperature points at the brake. Trend those few numbers at a defined interval and the axis announces its own problems while they are still scheduled interventions. This is the quiet advantage of commissioning a vertical axis properly: the tests are not just acceptance paperwork, they are the baseline of a monitoring system that costs minutes per month and prevents the expensive kind of discovery, the kind that starts with an operator asking why the focus is different this morning.",
      ],
      links: [
        { label: "Read the reference mark and datum strategies guide", href: "/technology/optical-encoder-reference-mark-datum-strategies-guide/" },
        { label: "Read the ISO 230-2 repeatability verification guide", href: "/technology/precision-stage-positioning-repeatability-iso-230-2-guide/" },
      ],
    },
  ],
  conclusionHeading: "Design the vertical axis for gravity, then trust the encoder.",
  conclusion: [
    "Gravity does not damage an optical encoder; it changes the loads, temperatures, and failure modes around it. Scale retention is loaded in shear instead of not at all, brackets bend directionally with stroke attitude, columns develop thermal gradients, the servo carries a permanent bias, and a power fault is a drop event instead of an inconvenience. Every one of these effects is predictable, and every one is cheaper to design out than to diagnose after the tool is qualified.",
    "The working discipline is compact: choose scale and bracket design for a gravity-loaded orientation and prove it with an up-down error measurement over full travel; lay out the vertical structure thermally and define a warm-up expectation; wire brake, counterbalance, and position validity into one safety chain with a defined power-loss state; and commission with bidirectional, hold, and power-recovery tests recorded as acceptance evidence. An axis qualified this way delivers the same trustworthiness from its encoder that the horizontal axes beside it already have—and the focus budget above it can assume so.",
  ],
  faq: [
    {
      question: "Can a horizontal-axis encoder design simply be rotated onto a vertical axis?",
      answer:
        "The hardware usually can; the design cannot. Scale retention must be checked for sustained shear load, bracket stiffness verified in both stroke attitudes, cable exit and strain relief repositioned so gravity and flex tension cannot change the readhead gap, and the up-down error difference measured before release. The most common vertical-axis failures are horizontal designs with exactly these checks skipped.",
    },
    {
      question: "Why does my Z axis drift while holding position even though the encoder reports no motion?",
      answer:
        "Most often the reported position is correct and something else moved: adhesive scale creep under sustained shear, bracket or column deflection as temperature changes, or a counterbalance fault letting the stage sag. Compare against an independent reference during a hold test; if the encoder is right, the fault is in the mechanical chain, not the feedback.",
    },
    {
      question: "Is an absolute encoder necessary on a vertical axis?",
      answer:
        "It is strongly preferred wherever the payload is valuable or operator recovery is undesirable, because it reports the actual stopped position after a power loss and lets the controller validate before motion. An incremental axis can be safe, but every power-up starts from an unknown height and the homing move becomes a gravity-loaded, safety-critical maneuver that must be engineered and tested as such.",
    },
    {
      question: "What acceptance evidence should a vertical Z axis produce before release?",
      answer:
        "At minimum: bidirectional positioning against an independent reference over full travel with the up-down error difference recorded, a hold test at the working height logging position and bias current for the production duty cycle, a power-loss and recovery sequence with the payload represented, and a warm-up drift measurement at stabilization. Repeatability numbers measured in one direction only are not sufficient for a vertical axis.",
    },
  ],
  sources: [
    {
      publisher: "Renishaw",
      label: "Renishaw — encoder scale installation and mounting guidance for linear encoders",
      href: "https://www.renishaw.com/en/encoder-installation-guides--12926",
    },
    {
      publisher: "Heidenhain",
      label: "Heidenhain — technical information on mounting linear encoders and machine integration",
      href: "https://www.heidenhain.com/en_US/support/documentation",
    },
    {
      publisher: "Physik Instrumente",
      label: "PI — vertical stage and Z-axis motion design resources",
      href: "https://www.physikinstrumente.com/",
    },
    {
      publisher: "ISO",
      label: "ISO 230 series — test code for machine tools, including positioning accuracy and repeatability",
      href: "https://www.iso.org/standard/63205.html",
    },
  ],
};
