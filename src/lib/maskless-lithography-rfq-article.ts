import type { EditorialPage } from "@/lib/editorial-content";

export const masklessLithographySystemRfq: EditorialPage = {
  eyebrow: "BUYER GUIDE / SHARED CLEANROOMS",
  title: "University Cleanroom Maskless Lithography System RFQ Guide",
  description: "Build a maskless lithography system RFQ for a university cleanroom with user demand, facility interfaces, sample trials, acceptance tests, training and service evidence.",
  slug: "/technology/maskless-lithography-system-rfq/",
  publishedAt: "2026-08-18",
  modifiedAt: "2026-08-18",
  primaryKeyword: "maskless lithography system RFQ",
  secondaryKeywords: ["university cleanroom lithography equipment", "maskless lithography procurement", "shared nanofabrication facility equipment"],
  directAnswer: [
    "A useful maskless lithography system RFQ begins with the shared facility's job classes, not a copied feature list. Define the user groups, representative substrates, resist processes, pattern sizes, alignment needs, file workflow, expected access model and acceptance measurements. Then require every bidder to quote one controlled configuration and run the same application-relevant demonstration.",
    "For a university or research cleanroom, the purchase decision must also cover facilities, safety review, training, recipe governance, service access and long-term operating responsibility. Put factory and site acceptance tests, supplied documentation, exclusions and change control into the purchase package. This makes technical capability, total implementation effort and operational risk comparable before an award is made.",
  ],
  challenge: "A shared cleanroom serves researchers with different samples, process maturity and operator experience. A system that exposes one attractive demonstration pattern may still be a poor institutional fit if the facility interfaces, user workflow, acceptance method, training plan or support boundary are unclear.",
  requirements: [
    { title: "User demand", description: "Convert proposed projects into representative job classes, substrates, processes, pattern areas, alignment needs and annual usage assumptions." },
    { title: "Facility fit", description: "Close the exact footprint, access, utilities, environmental, safety, installation and service-clearance requirements for the quoted configuration." },
    { title: "Acceptance plan", description: "Define test vehicles, process conditions, measurements, sampling, pass criteria, data ownership and responsibilities before purchase." },
  ],
  featuredImage: {
    src: "/images/technology/maskless-lithography-system-rfq/university-cleanroom-maskless-lithography-rfq-cover.webp",
    alt: "University cleanroom team reviewing a maskless lithography system procurement plan beside a wafer exposure workstation",
    width: 1600,
    height: 900,
  },
  comparisonTable: {
    caption: "RFQ evidence matrix for a shared-facility maskless lithography purchase",
    headers: ["Decision area", "Buyer input", "Supplier response and evidence"],
    rows: [
      ["Research demand", "Three to six representative job classes", "Configuration fit, limits and assumptions by job class"],
      ["Patterning", "Geometry, area, resist, substrate and alignment targets", "Controlled sample result with settings and raw measurement data"],
      ["Facilities", "Room plan, access path, utilities and EHS constraints", "Site-planning document with interface values and exclusions"],
      ["User workflow", "Operator roles, files, recipes, data retention and scheduling", "Live workflow demonstration and administrator documentation"],
      ["Acceptance", "FAT/SAT method, sampling, metrology and pass rules", "Signed protocol tied to the quoted hardware and software"],
      ["Lifecycle", "Training, maintenance ownership, response route and spares policy", "Named deliverables, commercial boundaries and change process"],
    ],
  },
  articleSections: [
    {
      heading: "Start with the shared-instrument mission",
      paragraphs: [
        "A North American university cleanroom usually buys capability for a community rather than a single experiment. The U.S. National Science Foundation describes its Major Research Instrumentation program in terms of access to multi-user scientific and engineering instrumentation, research and research training. NIH's current S10 instrumentation programs likewise frame capital equipment as shared infrastructure. Even when neither program funds the purchase, that shared-use logic is a strong procurement test: the instrument should support a defined portfolio of research and a sustainable operating model.",
        "Write a one-page mission before writing the specification. Name the departments, principal user groups and external or industry users the facility expects to serve. Identify whether the priority is rapid prototype iteration, multilayer device fabrication, grayscale relief, teaching-supported process development, or a combination. Include the work the facility will not accept. A clear boundary prevents the RFQ from becoming an accumulation of unrelated options.",
        "The mission should also state how the tool will be operated. Some facilities train qualified users for independent access; others reserve advanced recipes for staff-assisted work. The University of Illinois Materials Research Laboratory, for example, describes both user training and staff-assisted work in its shared cleanroom. That is not a universal operating prescription, but it shows why staffing and access mode belong in the equipment decision rather than being postponed until installation.",
      ],
      links: [
        { label: "Explore SENFU maskless lithography systems", href: "/lithography-systems/maskless-lithography/" },
        { label: "Review MEMS and microfluidics applications", href: "/applications/mems-microfluidics/" },
      ],
    },
    {
      heading: "Translate research demand into job classes",
      paragraphs: [
        "Do not ask prospective users only whether they would use a maskless writer. Ask for a representative process. For each project, record substrate material and size, sample thickness, resist family and thickness, exposure wavelength constraints, minimum geometry, patterned area, layer count, alignment strategy, topography, expected design revisions and downstream processing. Separate firm needs from aspirational work so the procurement committee can see which requirements are shared and which are exceptional.",
        "Group the answers into three to six job classes. A microfluidic master may prioritize rapid layout changes and moderately large patterned areas. A photonics project may care more about overlay, field placement or grayscale profiles. A MEMS process may combine thick resist, alignment and nonstandard sample thickness. A semiconductor research group may require repeatable handling and documented process transfer. These examples are starting points; the RFQ should use the institution's actual substrates and recipes.",
        "For every job class, define a minimum viable workflow and a stretch workflow. The minimum case must be satisfied by the quoted configuration. The stretch case may justify an option or a later upgrade, but it should not silently determine the base award. This separation gives procurement a defensible way to compare a compact research platform with a more automated or larger-substrate platform without pretending that one model is universally better.",
      ],
      subsections: [
        {
          heading: "Build a demand sheet that engineering and procurement can both read",
          paragraphs: [
            "Use one row per job class and columns for user group, annual projects, sample geometry, material stack, critical pattern attribute, alignment, file type, operator mode and acceptance coupon. Add a confidence level to usage estimates. The purpose is not to promise future utilization; it is to expose the assumptions behind capacity, training and configuration decisions.",
          ],
          bullets: ["Representative sample and resist", "Critical geometry or profile", "Patterned area and revision frequency", "Alignment and focus challenge", "Likely operator and training level", "Acceptance measurement available on site"],
        },
      ],
    },
    {
      heading: "Specify the process result, not an isolated component",
      paragraphs: [
        "Texas Instruments describes DLP lithography as programmable light steering that directly exposes digital patterns onto photoresist without a contact mask. It also notes that the appropriate DMD and system design depend on feature size, patterning speed, form factor and wavelength. For a cleanroom buyer, this means the digital micromirror device is only one element in the result. Projection optics, illumination, focus, stage motion, alignment, data preparation, resist response and development all contribute to the patterned sample.",
        "Write requirements at the sample level. Instead of requesting the smallest advertised feature, define a representative line-space, opening, curve, field boundary or relief structure in the intended process. State the substrate, resist, thickness, bake and development conditions. Define where the sample will be measured and which metric will be calculated. If a process is not yet mature, label the target as a development objective and ask for a proposed evaluation plan rather than a guaranteed result.",
        "Treat throughput in the same way. A single exposure-rate number does not describe file preparation, alignment, focus mapping, field stepping, stage settling, handling or operator time. Give the supplier a representative job file and ask for a timed workflow with the included configuration. Record what is automated, what is manual and what is excluded from the timing. This produces a capacity estimate that a facility manager can use.",
      ],
      image: {
        src: "/images/technology/maskless-lithography-system-rfq/shared-cleanroom-rfq-workflow.webp",
        alt: "Conceptual workflow connecting university research demand, process coupons, facility interfaces and maskless lithography acceptance evidence",
        width: 1600,
        height: 1000,
      },
      links: [
        { label: "Compare DMD and electron-beam lithography", href: "/technology/dmd-vs-electron-beam-lithography/" },
        { label: "Read the grayscale system selection guide", href: "/technology/grayscale-lithography-system-selection/" },
      ],
    },
    {
      heading: "Close facility and EHS interfaces before award",
      paragraphs: [
        "A purchase order should not be the first time the facilities team sees the system. Give bidders a site questionnaire and request configuration-specific installation data. The review should cover equipment dimensions and mass, shipping and rigging path, service clearances, floor and vibration assumptions, electrical connections, heat rejection, compressed air or other gases, cooling, exhaust, network needs and any ancillary computer or enclosure. Do not assume that a product-family brochure describes the ordered arrangement.",
        "Route the proposed system through the institution's environmental health and safety process. Ask the supplier to identify light sources, interlocks, motion hazards, chemical interfaces, required personal protective equipment and intended service activities. The university remains responsible for its own safety determination. The supplier response should provide the technical facts needed for that review without substituting a generic compliance label for the local assessment.",
        "Define installation boundaries in a responsibility matrix. Identify who provides utilities, rigging, final placement, exhaust connection, network access, process materials, metrology samples and waste handling. State whether acceptance begins after mechanical installation, after process commissioning or after training. If any value remains preliminary, require a dated final site-planning package before a contractual release point.",
      ],
      bullets: ["Final configured footprint and service envelope", "Rigging path and packaging dimensions", "Utility values and connection points", "Environmental and vibration assumptions", "Safety features and EHS information", "Buyer-versus-supplier installation responsibilities"],
    },
    {
      heading: "Design the multi-user workflow before the demonstration",
      paragraphs: [
        "Shared facilities need repeatable handoffs between researchers, staff and the instrument. Ask the supplier to demonstrate file import, layer and coordinate conventions, data preprocessing, job preview, alignment setup, recipe selection, user permissions, result storage and recovery from an interrupted job. The repository-backed SENFU ZML documentation states support for DXF, GDS and BMP workflows; the RFQ should still confirm the exact import, conversion and size limits for the quoted software version.",
        "Create at least three roles for the demonstration: facility administrator, trained independent user and staff-assisted user. Walk through which settings each role may change, how approved recipes are protected and how a job can be traced to the input file and process settings. If the institution uses a scheduling or billing platform, document whether integration is required or whether an administrative procedure will bridge the systems.",
        "Data governance belongs in this section. Specify local or network storage, user-directory behavior, export formats, backup responsibility, software-update effects and the procedure for removing proprietary files. A university may serve external collaborators whose files require controlled access. Ask for an architecture description and administrator instructions, then let institutional IT and research-security teams decide what is acceptable.",
      ],
      links: [
        { label: "Browse the ZML overview and other engineering resources", href: "/resources/" },
        { label: "Learn how SENFU handles technical evaluation", href: "/about/" },
      ],
    },
    {
      heading: "Use one application trial for every shortlisted configuration",
      paragraphs: [
        "A controlled trial is more useful than a collection of unrelated supplier samples. Build a non-confidential test vehicle that combines the facility's common and difficult cases: representative pattern density, field edges, alignment marks, focus-sensitive regions and, if relevant, grayscale steps or curves. Provide the same source file, substrate and process definition to every bidder. If the real materials cannot be shipped, agree on a surrogate and document the limitation.",
        "Before exposure, freeze the evaluation protocol. Record the quoted hardware, software version, objective or optical configuration, wavelength, material lot, coating and development recipe, measurement instrument, sampling locations and analysis method. NIST's traceability guidance is useful here: traceability belongs to a measurement result, and supporting it requires a documented measurement system, result, reference and uncertainty. A claim that an instrument or laboratory is simply 'NIST traceable' is not enough.",
        "Ask for raw results as well as images prepared for a presentation. A useful package includes the source job, processed exposure file where available, recipe record, machine settings, sample map, measurement data and notes on any deviation. Review failures constructively. A supplier that identifies the limiting mechanism and proposes a controlled next test may reduce more risk than one that presents a selected image without conditions.",
      ],
      subsections: [
        {
          heading: "Separate demonstration success from contractual acceptance",
          paragraphs: [
            "The pre-award trial establishes technical confidence; it does not automatically define factory or site acceptance. Convert only the relevant, repeatable metrics into the contract. State sample preparation, allowed retests, buyer-observed measurements, data review time and the remedy path if a criterion is not met. Keep development goals outside pass-fail acceptance unless both parties have validated the method.",
          ],
        },
      ],
    },
    {
      heading: "Write FAT and SAT as executable protocols",
      paragraphs: [
        "Factory acceptance testing should verify the agreed configuration before shipment. The protocol may include hardware and software inventory, safety-function checks, motion and alignment checks, file-workflow demonstrations and exposure of an agreed coupon. Site acceptance testing should then verify that the installed system performs under the receiving facility's conditions. The exact split depends on which tests can be transported and which rely on local utilities, process equipment or metrology.",
        "For every acceptance item, list the test input, preparation, instrument settings, sample location, measurement method, calculation, pass criterion, record to be delivered and person authorized to sign. Define how measurement uncertainty and equipment status will be documented when they affect the decision. Also define the response to a failure: correction, repeat, agreed deviation or another contractual remedy. Ambiguity at this stage creates schedule pressure after delivery.",
        "Include document acceptance. Require the final as-built configuration list, operating instructions, administrator guide, maintenance schedule, safety information, utility drawing, software and license record, backup or recovery procedure, training record and acceptance data package. Attach revision identifiers. A shared facility depends on these records when staff change or when a new user needs a defensible recipe history.",
      ],
      bullets: ["Quoted configuration verified", "Safety and interlock checks recorded", "Application coupon executed", "Measurement method and pass rule applied", "Deviations closed or formally accepted", "Final document set received and revision controlled"],
    },
    {
      heading: "Compare lifecycle responsibility, not only capital price",
      paragraphs: [
        "Ask each bidder to separate the base system, required options, installation, commissioning, training, acceptance support, freight, taxes or duties where applicable, software, licenses, service coverage and recommended consumables or spares. The RFQ should state the commercial terms the institution requires, but it should not assume a warranty length, response time or spare-parts commitment that has not been quoted. Make every commitment explicit and attach it to the final configuration.",
        "Build an operating model with the facility manager. Estimate staff time for user qualification, recipe development, preventive maintenance, issue triage and data administration. Identify which tasks a trained facility engineer may perform and which require supplier service. Ask what remote diagnostics involve and what data would leave the institution. Confirm the escalation route, service access constraints and procedure for software or hardware changes that could affect qualified processes.",
        "Training should be role-based and outcome-based. Specify administrator, operator and maintenance audiences; expected class size; training materials; practical exercises; and how later staff can be trained. A completion certificate alone does not prove independent operation. An effective handoff demonstrates that the receiving team can load a controlled job, run an approved process, recognize alarms, protect recipes and collect the acceptance records.",
      ],
    },
    {
      heading: "Route the requirement to the appropriate SENFU platform",
      paragraphs: [
        "SENFU's source-backed ZML family provides three routes for discussion. ZML10A is positioned as a compact laboratory R&D platform with documented 2D and 8-bit grayscale capability. ZML100A adds active autofocus and advanced alignment functions. ZML200A addresses projects requiring substrates up to 8 inches. These are product-family distinctions, not a recommendation based on institution type alone.",
        "Use the demand sheet to decide which route deserves evaluation. Small samples and frequent design changes may point toward a compact configuration. Topography, multilayer work or demanding operator handoffs may increase the value of focus and alignment functions. Larger substrates require a review of the working area, handling, process uniformity and facility footprint. In every case, verify the exact quoted model, optical configuration, software, options and acceptance scope against the representative jobs.",
        "If critical nanoscale features dominate the research program, a DMD maskless system may not be the only tool to evaluate. SENFU also supplies the ZEL304G electron-beam lithography route, and some facilities may assign broader microscale patterns to optical direct write while reserving EBL for critical nanoscale structures. The correct architecture follows the device process, utilization plan and available staff expertise.",
      ],
      links: [
        { label: "Review ZML10A", href: "/lithography-systems/zml10a/" },
        { label: "Review ZML100A", href: "/lithography-systems/zml100a/" },
        { label: "Review ZML200A", href: "/lithography-systems/zml200a/" },
        { label: "Explore hybrid lithography", href: "/technology/hybrid-lithography/" },
      ],
    },
  ],
  midCta: {
    eyebrow: "RFQ REVIEW",
    title: "Have a user-demand sheet or facility questionnaire?",
    description: "Send representative job classes, site constraints and the proposed acceptance coupon for a configuration-level review.",
    label: "Review the procurement brief",
    href: "/contact/#application-form",
  },
  conclusionHeading: "Procure a transferable facility capability.",
  conclusion: [
    "A university cleanroom maskless lithography purchase succeeds when research demand, the process result, the facility interface and the operating model are specified together. A disciplined RFQ gives every bidder the same job classes, site information, trial vehicle and acceptance method. The committee can then compare evidence and implementation responsibility instead of isolated feature claims.",
    "For a SENFU application review, send the proposed substrates and resists, representative design files, critical geometry or profile, patterned area, alignment needs, user model, facility questionnaire and draft FAT/SAT criteria. SENFU can use those inputs to identify the appropriate ZML evaluation route and the technical documents that still need to be closed before procurement.",
  ],
  routes: [
    { label: "ZML maskless lithography systems", href: "/lithography-systems/maskless-lithography/", note: "Compare source-backed platform routes" },
    { label: "Engineering resources", href: "/resources/", note: "Review available ZML documentation" },
    { label: "Technical application review", href: "/contact/#application-form", note: "Submit jobs, site constraints and acceptance needs" },
  ],
  evidence: ["Multi-user demand matrix", "Configuration-specific site-planning package", "Controlled application-trial record", "Executable FAT/SAT protocol", "Role-based training and lifecycle responsibility matrix"],
  faq: [
    { question: "What should a maskless lithography system RFQ include?", answer: "Include user job classes, substrates, resists, geometry, patterned area, alignment, file workflow, facility interfaces, safety-review inputs, quoted configuration, application trial, FAT/SAT criteria, documentation, training, service boundaries and commercial exclusions." },
    { question: "How many user applications should a shared cleanroom evaluate?", answer: "Use enough job classes to represent common demand and the most important edge cases; three to six is often manageable for an RFQ. Base the number on actual institutional users rather than a fixed industry rule." },
    { question: "Should acceptance be based on the supplier's standard sample?", answer: "A standard sample can support initial screening, but purchasing acceptance should use an agreed coupon that represents the facility's materials, geometry and workflow. Record process conditions, sampling, metrology and pass criteria before the test." },
    { question: "What is the difference between FAT and SAT for lithography equipment?", answer: "Factory acceptance verifies the agreed configuration and tests that can be completed before shipment. Site acceptance verifies the installed system under the receiving facility's utilities, environment and process conditions. The contract should define which test belongs to each stage." },
    { question: "Which SENFU ZML system fits a university cleanroom?", answer: "It depends on sample size, focus and alignment needs, grayscale work, automation, facility constraints and user workflow. ZML10A is positioned for compact R&D, ZML100A adds active autofocus and advanced alignment, and ZML200A addresses projects requiring substrates up to 8 inches. Confirm the final choice through a configuration and sample review." },
    { question: "Can an NSF or NIH instrumentation program fund a maskless lithography system?", answer: "Eligibility and active opportunities depend on the program, institution and research case. NSF MRI and NIH S10 are authoritative starting points for U.S. shared-instrument funding, but buyers should use the current solicitation and institutional research office rather than treat this equipment guide as funding advice." },
  ],
  sources: [
    { publisher: "U.S. National Science Foundation", label: "Major Research Instrumentation Program", href: "https://www.nsf.gov/funding/opportunities/mri-major-research-instrumentation-program" },
    { publisher: "NIH Office of Research Infrastructure Programs", label: "S10 Notices of Funding Opportunities", href: "https://www.orip.nih.gov/division-construction-instruments/s10-instrumentation-programs/s10-notices-funding" },
    { publisher: "Texas Instruments", label: "TI DLP Technology for Lithography", href: "https://www.ti.com/lit/ml/dlpt025e/dlpt025e.pdf" },
    { publisher: "National Institute of Standards and Technology", label: "Metrological Traceability: Frequently Asked Questions and NIST Policy", href: "https://www.nist.gov/metrology/metrological-traceability" },
    { publisher: "University of Illinois Materials Research Laboratory", label: "Micro/Nano Fabrication and Cleanroom", href: "https://mrl.illinois.edu/facilities/research-cores/micronano-fabrication-and-cleanroom" },
  ],
};
