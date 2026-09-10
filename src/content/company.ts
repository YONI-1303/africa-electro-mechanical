/**
 * Single source of truth for all company content.
 * Every string lives here so copy can be edited (or localised to Amharic later)
 * without touching component code. Only client-confirmed facts are stored here.
 */

// Local images: put your PNG files in /public/images/ using these exact names.
export const images = {
  logo: "/images/logo.png",
  pressBrake: "/images/press-brake.png",
  crushingScreening: "/images/crushing-screening.png",
  controlCabinet: "/images/control-cabinet.png",
  vibratingFeeder: "/images/vibrating-feeder.png",
  paddyScreen: "/images/paddy-screen.png",
  processMachine: "/images/process-machine.png",
  laundryInstallation: "/images/laundry-installation.png",
  controlPanels: "/images/control-panels.png",
  panelWiring: "/images/panel-wiring.png",
  appliances: "/images/appliances.png",
  transformerGenset: "/images/transformer-genset.png",
  jawCrusher: "/images/jaw-crusher.png",
  inductionMotor: "/images/induction-motor.png",
  hvacUnit: "/images/hvac-unit.png",
  elevator: "/images/elevator.png",
  dieselGenerator: "/images/diesel-generator.png",
} as const;

export const company = {
  name: "Africa Electro Mechanical Engineering PLC",
  shortName: "Africa Electro Mechanical",
  manager: "Engineer Aregawi Berihu",
  managerRole: "General Manager",
  email: "afrielctro@gmail.com",
  phone: "0973737494",
  phoneHref: "tel:+251973737494",
  location: "Bole, Addis Ababa, Ethiopia",
  logo: images.logo,
  tagline: "Engineering systems that keep operations moving.",
  intro:
    "Electromechanical engineering, installation, commissioning, maintenance, repair, servicing and technical support for industrial, commercial, healthcare and agricultural applications.",
  about: [
    "Africa Electro Mechanical Engineering PLC is a professional electromechanical engineering company specializing in industrial, commercial, and agricultural electromechanical solutions.",
    "We provide reliable installation, maintenance, repair, servicing, and technical support for a wide range of electromechanical systems and equipment.",
    "Our services are focused on delivering quality workmanship, reliable solutions, timely service, and customer satisfaction. We work with businesses, industries, institutions, agricultural projects, and other organizations to ensure the safe, efficient, and continuous operation of their electromechanical systems.",
    "We provide comprehensive electromechanical consulting, engineering design, installation, commissioning, maintenance, repair, and technical services for industrial, commercial, agricultural, and institutional projects — including electromechanical system design, equipment installation, preventive and corrective maintenance, troubleshooting, and technical support.",
  ],
  commitment:
    "Our commitment is to provide professional, dependable, and cost-effective electromechanical solutions that meet our clients' needs and industry standards.",
} as const;

/** Formspree endpoint */
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnpqwpyd";

export type Service = {
  slug: string;
  title: string;
  short: string;
  overview: string;
  includes: string[];
  need: string;
  industries: string[];
  faq: { q: string; a: string }[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "industrial-electromechanical-works",
    title: "Industrial Electromechanical Works",
    short:
      "Electromechanical works for factories, plants and production lines — from power and control systems to rotating and process equipment.",
    overview:
      "We carry out electromechanical works for industrial facilities, covering the electrical and mechanical systems that production depends on. Work is planned around plant operation so that downtime stays controlled and equipment returns to service safely.",
    includes: [
      "Electromechanical system design support for industrial plants",
      "Power and control equipment installation",
      "Motor, drive and rotating equipment works",
      "Panel and cabling works",
      "Commissioning and functional checks",
      "Corrective works following inspection or breakdown",
    ],
    need: "A production facility needs electromechanical systems installed, upgraded, corrected or returned to reliable service without extended interruption.",
    industries: ["industrial", "institutional"],
    faq: [
      {
        q: "Do you work on existing plant as well as new installations?",
        a: "Yes. We handle installation and commissioning of new equipment as well as maintenance, troubleshooting and repair of systems already in operation.",
      },
      {
        q: "Can you support work outside normal production hours?",
        a: "Scheduling is agreed with each client so that works fit around the plant's operating pattern. Please share your constraints when you submit an inquiry.",
      },
    ],
    image: images.pressBrake,
    imageAlt: "Industrial press brake machine on a factory floor",
  },
  {
    slug: "commercial-electromechanical-works",
    title: "Commercial Electromechanical Works",
    short:
      "Electromechanical installation and service for commercial buildings, offices, retail and mixed-use facilities.",
    overview:
      "We deliver electromechanical works for commercial properties, covering building services equipment, distribution and control systems, and the servicing that keeps them dependable for tenants and operations teams.",
    includes: [
      "Building electromechanical equipment installation",
      "Distribution and control panel works",
      "Vertical transport and building equipment support",
      "Air conditioning and building services equipment servicing",
      "Preventive maintenance programmes",
      "Fault finding and corrective repair",
    ],
    need: "A property owner, developer or facility manager needs building electromechanical systems installed, maintained or restored with minimal disruption to occupants.",
    industries: ["commercial", "institutional"],
    faq: [
      {
        q: "Do you provide ongoing maintenance for commercial buildings?",
        a: "Yes. We provide preventive and corrective maintenance alongside installation and commissioning work.",
      },
      {
        q: "Can you attend a fault on equipment you did not install?",
        a: "Yes. Troubleshooting, repair and technical support are offered on existing systems.",
      },
    ],
    image: images.elevator,
    imageAlt: "Elevator installation works inside a building shaft",
  },
  {
    slug: "hospital-electromechanical-facility-works",
    title: "Hospital Electromechanical Facility Works",
    short:
      "Electromechanical facility works for hospitals and healthcare buildings, where equipment continuity matters most.",
    overview:
      "We work as an electromechanical facilities and service provider for healthcare buildings. Our scope covers the building's electromechanical equipment — power, standby supply, air conditioning, laundry and utility plant — installed, serviced and supported so that facility teams can rely on it.",
    includes: [
      "Facility electromechanical equipment installation",
      "Standby power and distribution equipment works",
      "Air conditioning and utility plant servicing",
      "Laundry and support-facility equipment installation",
      "Preventive maintenance planning",
      "Corrective repair and technical support",
    ],
    need: "A healthcare facility needs its electromechanical building equipment installed, serviced or repaired by an engineering partner that understands continuity of operation.",
    industries: ["healthcare", "institutional"],
    faq: [
      {
        q: "What exactly do you cover in a hospital?",
        a: "Building and facility electromechanical equipment. We are an electromechanical engineering provider and do not work on medical devices or clinical systems.",
      },
      {
        q: "Can maintenance be planned around clinical activity?",
        a: "Yes. Timing and access are agreed with the facility team before works begin.",
      },
    ],
    image: images.laundryInstallation,
    imageAlt: "Technician installing a row of commercial washing machines",
  },
  {
    slug: "agricultural-electromechanical-works",
    title: "Agricultural Electromechanical Works",
    short:
      "Electromechanical solutions for agricultural processing, handling and production equipment.",
    overview:
      "We support agricultural projects with the electromechanical systems behind processing and handling equipment — installation, commissioning, servicing and repair of machinery and its electrical and mechanical drives.",
    includes: [
      "Processing and handling equipment installation",
      "Motor, drive and transmission works",
      "Control and power supply installation",
      "Seasonal preventive maintenance",
      "Troubleshooting and corrective repair",
      "Technical support during operating season",
    ],
    need: "An agricultural business needs processing or handling equipment installed, kept running through the season, or repaired quickly when it stops.",
    industries: ["agriculture", "industrial"],
    faq: [
      {
        q: "Do you service equipment on site?",
        a: "Servicing, troubleshooting and repair are carried out according to the equipment and site conditions. Share the location and equipment in your inquiry.",
      },
      {
        q: "Can maintenance be scheduled before harvest?",
        a: "Yes. Preventive maintenance can be planned ahead of periods of heavy use.",
      },
    ],
    image: images.paddyScreen,
    imageAlt: "Agricultural paddy screen processing machine",
  },
  {
    slug: "installation-and-commissioning",
    title: "Installation & Commissioning",
    short:
      "Equipment installed, connected, tested and handed over in a controlled, documented sequence.",
    overview:
      "We install electromechanical equipment and take it through commissioning: mechanical setting, electrical connection, control checks, functional testing and handover to the operating team.",
    includes: [
      "Site and installation readiness review",
      "Mechanical installation and alignment",
      "Electrical connection and panel termination",
      "Control and protection checks",
      "Functional testing and commissioning",
      "Handover and operator familiarisation",
    ],
    need: "New or relocated equipment must be installed correctly and proven to work before it is handed to operations.",
    industries: ["industrial", "commercial", "healthcare", "agriculture", "institutional"],
    faq: [
      {
        q: "Do you commission equipment installed by others?",
        a: "Yes. Commissioning and functional testing can be provided as a standalone scope.",
      },
      {
        q: "Is operator familiarisation included?",
        a: "Handover to the operating team is part of our commissioning approach and can be scoped in more detail on request.",
      },
    ],
    image: images.controlCabinet,
    imageAlt: "Open electrical control cabinet during installation in an industrial warehouse",
  },
  {
    slug: "preventive-and-corrective-maintenance",
    title: "Preventive & Corrective Maintenance",
    short:
      "Planned maintenance that prevents failures, and corrective maintenance that resolves them.",
    overview:
      "We provide preventive maintenance to keep electromechanical systems in reliable condition, and corrective maintenance when a fault or deterioration has already affected performance.",
    includes: [
      "Maintenance planning by equipment and duty",
      "Scheduled inspection and servicing visits",
      "Condition checks on motors, drives and panels",
      "Adjustment, cleaning, lubrication and part replacement",
      "Corrective maintenance after fault or inspection findings",
      "Maintenance records and recommendations",
    ],
    need: "An operator wants fewer unplanned stoppages and a predictable maintenance routine instead of reacting to breakdowns.",
    industries: ["industrial", "commercial", "healthcare", "agriculture", "institutional"],
    faq: [
      {
        q: "Can maintenance be set up as a recurring programme?",
        a: "Yes. Intervals are agreed with you based on the equipment and how heavily it is used.",
      },
      {
        q: "What happens if a fault is found during a preventive visit?",
        a: "We report the finding and agree the corrective work with you before proceeding.",
      },
    ],
    image: images.controlPanels,
    imageAlt: "Row of industrial electrical control panels",
  },
  {
    slug: "repair-and-technical-services",
    title: "Repair & Technical Services",
    short:
      "Fault diagnosis and repair for electromechanical equipment that has stopped or is underperforming.",
    overview:
      "We diagnose electromechanical faults and carry out the repair. The work starts with troubleshooting — establishing the actual cause rather than replacing parts speculatively — followed by repair, testing and return to service.",
    includes: [
      "Fault diagnosis and troubleshooting",
      "Electrical and mechanical repair works",
      "Motor, drive and panel repair support",
      "Component replacement",
      "Post-repair testing and return to service",
      "Follow-up technical advice",
    ],
    need: "Equipment has failed or is running abnormally and the cause needs to be found and corrected.",
    industries: ["industrial", "commercial", "healthcare", "agriculture", "institutional"],
    faq: [
      {
        q: "How do you approach a fault you have not seen before?",
        a: "By inspection and systematic diagnosis of the electrical and mechanical condition before any parts are changed.",
      },
      {
        q: "What information helps most when reporting a fault?",
        a: "The equipment type, what changed, when it started, and any alarms or readings observed.",
      },
    ],
    image: images.panelWiring,
    imageAlt: "Open electrical control panel showing internal wiring and components",
  },
  {
    slug: "electromechanical-equipment-servicing",
    title: "Electromechanical Equipment Servicing",
    short:
      "Routine servicing that keeps machinery, motors, panels and building equipment in working condition.",
    overview:
      "We service a wide range of electromechanical equipment — industrial machinery, motors and drives, control and distribution panels, generators, air conditioning and building plant — so that it stays in dependable working order.",
    includes: [
      "Equipment inspection and condition assessment",
      "Cleaning, adjustment and lubrication",
      "Electrical connection and protection checks",
      "Consumable and wear part replacement",
      "Functional testing after service",
      "Service reporting and recommendations",
    ],
    need: "Equipment is working but needs regular attention to stay efficient, safe and available.",
    industries: ["industrial", "commercial", "healthcare", "agriculture", "institutional"],
    faq: [
      {
        q: "Which equipment can you service?",
        a: "A wide range of electromechanical systems and equipment. Describe your equipment in an inquiry and we will confirm the scope we can cover.",
      },
      {
        q: "Do you provide a report after servicing?",
        a: "Yes. Findings and recommendations are shared with the client after the visit.",
      },
    ],
    image: images.inductionMotor,
    imageAlt: "Three phase induction motor",
  },
  {
    slug: "engineering-and-technical-support",
    title: "Engineering & Technical Support",
    short:
      "Direct access to engineering input for operating problems, modifications and equipment decisions.",
    overview:
      "We provide engineering and technical support to client teams: assessing equipment condition, advising on operating problems, supporting modifications and helping decide between repair, replacement and upgrade.",
    includes: [
      "Technical assessment of systems and equipment",
      "Support with operating and performance issues",
      "Advice on repair versus replacement",
      "Support during modification and upgrade works",
      "Coordination with client maintenance teams",
      "Follow-up support after works are completed",
    ],
    need: "An in-house team needs engineering judgement on an electromechanical system before committing to a course of action.",
    industries: ["industrial", "commercial", "healthcare", "agriculture", "institutional"],
    faq: [
      {
        q: "Can you work alongside our own maintenance team?",
        a: "Yes. Support can be provided to complement in-house teams rather than replace them.",
      },
      {
        q: "Do you support upgrades to existing systems?",
        a: "Yes, technical support during modification and upgrade works is part of this service.",
      },
    ],
    image: images.processMachine,
    imageAlt: "Industrial manufacturing machine with a touchscreen control interface",
  },
  {
    slug: "consulting-and-engineering-design",
    title: "Consulting & Engineering Design",
    short:
      "Comprehensive electromechanical consulting and engineering design for new and modified installations.",
    overview:
      "We provide comprehensive electromechanical consulting and engineering design for industrial, commercial, agricultural and institutional projects, defining systems and equipment before installation begins.",
    includes: [
      "Electromechanical consulting",
      "Electromechanical system design",
      "Equipment selection support",
      "Installation scope definition",
      "Design input for modifications and expansions",
      "Coordination with installation and commissioning",
    ],
    need: "A project needs its electromechanical systems properly defined before procurement and installation.",
    industries: ["industrial", "commercial", "healthcare", "agriculture", "institutional"],
    faq: [
      {
        q: "Can you design and then deliver the installation?",
        a: "Yes. Design, installation, commissioning and ongoing maintenance can be delivered as a continuous scope.",
      },
      {
        q: "Do you provide consulting alone?",
        a: "Yes. Consulting and design can be engaged independently of installation work.",
      },
    ],
    image: images.transformerGenset,
    imageAlt: "Electrical transformer and generator set installation",
  },
];

export type Industry = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  needs: string[];
  services: string[];
  image: string;
  imageAlt: string;
};

export const industries: Industry[] = [
  {
    slug: "industrial",
    name: "Industrial",
    headline: "Production equipment that has to keep running.",
    description:
      "Factories, plants and processing facilities where electromechanical systems drive output. We install, commission, maintain and repair the equipment that production depends on.",
    needs: [
      "Machinery installation and commissioning",
      "Motor, drive and panel works",
      "Preventive maintenance on production equipment",
      "Fault diagnosis and corrective repair",
    ],
    services: [
      "industrial-electromechanical-works",
      "installation-and-commissioning",
      "preventive-and-corrective-maintenance",
      "repair-and-technical-services",
    ],
    image: images.crushingScreening,
    imageAlt: "Industrial stone crushing and screening plant",
  },
  {
    slug: "commercial",
    name: "Commercial",
    headline: "Buildings that stay comfortable, powered and available.",
    description:
      "Offices, retail and mixed-use properties where building services equipment must run quietly in the background. We install and service the electromechanical systems behind them.",
    needs: [
      "Building equipment installation",
      "Air conditioning and building plant servicing",
      "Distribution and control panel works",
      "Planned maintenance for facility teams",
    ],
    services: [
      "commercial-electromechanical-works",
      "electromechanical-equipment-servicing",
      "preventive-and-corrective-maintenance",
      "installation-and-commissioning",
    ],
    image: images.hvacUnit,
    imageAlt: "Air conditioning unit with outdoor compressor installed at a commercial property",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    headline: "Facility equipment where continuity is not optional.",
    description:
      "Hospitals and healthcare buildings rely on standby power, air conditioning, laundry and utility plant. We work on that building equipment as an electromechanical service provider.",
    needs: [
      "Standby power and distribution equipment",
      "Air conditioning and utility plant servicing",
      "Laundry and support facility equipment",
      "Planned maintenance around clinical activity",
    ],
    services: [
      "hospital-electromechanical-facility-works",
      "preventive-and-corrective-maintenance",
      "electromechanical-equipment-servicing",
      "engineering-and-technical-support",
    ],
    image: images.dieselGenerator,
    imageAlt: "Diesel generator set with electronic control panel for standby power",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    headline: "Seasonal equipment that cannot afford downtime.",
    description:
      "Agricultural projects and processing businesses where handling and processing machinery works hard for concentrated periods. We prepare, service and repair that equipment.",
    needs: [
      "Processing and handling machinery installation",
      "Drive and transmission works",
      "Pre-season preventive maintenance",
      "Fast corrective repair during operating season",
    ],
    services: [
      "agricultural-electromechanical-works",
      "installation-and-commissioning",
      "preventive-and-corrective-maintenance",
      "repair-and-technical-services",
    ],
    image: images.vibratingFeeder,
    imageAlt: "Industrial vibrating feeder machine used for material handling",
  },
  {
    slug: "institutional",
    name: "Institutional",
    headline: "Engineering support for institutions and organizations.",
    description:
      "Institutions and organizations operating their own facilities and equipment. We provide consulting, design, installation and continuing technical support across the equipment lifecycle.",
    needs: [
      "Electromechanical consulting and design",
      "Equipment installation and commissioning",
      "Maintenance programmes",
      "Technical support for in-house teams",
    ],
    services: [
      "consulting-and-engineering-design",
      "installation-and-commissioning",
      "preventive-and-corrective-maintenance",
      "engineering-and-technical-support",
    ],
    image: images.appliances,
    imageAlt: "Electrical appliances and equipment of the type serviced at institutional facilities",
  },
];

export type EquipmentItem = {
  id: string;
  label: string;
  category: string;
  alt: string;
  image: string;
};

/**
 * Labels are deliberately descriptive rather than specification claims.
 * No models, capacities, manufacturers or ownership claims are asserted
 * beyond what is visible in the client-supplied photographs.
 */
export const equipment: EquipmentItem[] = [
  {
    id: "press-brake",
    label: "Metal Forming Press Brake",
    category: "Industrial Machinery",
    alt: "Industrial press brake machine for sheet metal forming",
    image: images.pressBrake,
  },
  {
    id: "crushing-screening",
    label: "Crushing & Screening Plant",
    category: "Industrial Machinery",
    alt: "Stone crushing and screening plant installed outdoors",
    image: images.crushingScreening,
  },
  {
    id: "jaw-crusher",
    label: "Jaw Crusher Unit",
    category: "Industrial Machinery",
    alt: "Jaw crusher unit used in aggregate processing",
    image: images.jawCrusher,
  },
  {
    id: "vibrating-feeder",
    label: "Vibrating Feeder",
    category: "Material Handling",
    alt: "Industrial vibrating feeder machine in a factory setting",
    image: images.vibratingFeeder,
  },
  {
    id: "paddy-screen",
    label: "Grain Screening Machine",
    category: "Agricultural Equipment",
    alt: "Paddy screening machine used in grain processing",
    image: images.paddyScreen,
  },
  {
    id: "process-machine",
    label: "Process Machine with Touchscreen Control",
    category: "Industrial Machinery",
    alt: "Industrial process machine with a touchscreen control interface",
    image: images.processMachine,
  },
  {
    id: "control-cabinet",
    label: "Electrical Control Cabinet",
    category: "Electrical Systems",
    alt: "Open electrical control cabinet in a sunlit industrial warehouse",
    image: images.controlCabinet,
  },
  {
    id: "control-panels",
    label: "Industrial Control Panels",
    category: "Electrical Systems",
    alt: "Row of industrial electrical control panels",
    image: images.controlPanels,
  },
  {
    id: "panel-wiring",
    label: "Panel Wiring & Components",
    category: "Electrical Systems",
    alt: "Open electrical control panel with internal wiring and components",
    image: images.panelWiring,
  },
  {
    id: "induction-motor",
    label: "Three Phase Induction Motor",
    category: "Motors & Drives",
    alt: "Three phase induction motor",
    image: images.inductionMotor,
  },
  {
    id: "transformer-genset",
    label: "Transformer & Generator Set",
    category: "Power Systems",
    alt: "Electrical transformer alongside a generator set",
    image: images.transformerGenset,
  },
  {
    id: "diesel-generator",
    label: "Diesel Generator Set",
    category: "Power Systems",
    alt: "Diesel generator set with an electronic control panel",
    image: images.dieselGenerator,
  },
  {
    id: "hvac-unit",
    label: "Air Conditioning Unit",
    category: "Building Services",
    alt: "Air conditioning unit with outdoor compressor and remote control",
    image: images.hvacUnit,
  },
  {
    id: "elevator",
    label: "Elevator Installation",
    category: "Building Services",
    alt: "Elevator installation works inside a building shaft",
    image: images.elevator,
  },
  {
    id: "laundry-installation",
    label: "Commercial Laundry Equipment",
    category: "Facility Equipment",
    alt: "Technician installing a row of commercial washing machines",
    image: images.laundryInstallation,
  },
  {
    id: "appliances",
    label: "Electrical Appliances",
    category: "Facility Equipment",
    alt: "Range of electrical appliances including refrigeration and washing equipment",
    image: images.appliances,
  },
];

export const equipmentCategories = [
  "All",
  ...Array.from(new Set(equipment.map((item) => item.category))),
];

export const lifecycle = [
  {
    step: "01",
    title: "Understand",
    body: "We start with the system, the duty it performs and the operating constraints around it.",
  },
  {
    step: "02",
    title: "Assess / Design",
    body: "Condition assessment, electromechanical consulting and engineering design define the scope before work starts.",
  },
  {
    step: "03",
    title: "Install",
    body: "Mechanical installation, electrical connection and panel works carried out to the agreed scope.",
  },
  {
    step: "04",
    title: "Commission",
    body: "Control checks, functional testing and handover so the equipment is proven before it goes into service.",
  },
  {
    step: "05",
    title: "Maintain",
    body: "Preventive maintenance and equipment servicing planned around how the equipment is actually used.",
  },
  {
    step: "06",
    title: "Repair / Support",
    body: "Troubleshooting, corrective repair and continuing engineering and technical support.",
  },
] as const;

export const valueProps = [
  {
    title: "Reliable Engineering Support",
    body: "A dependable engineering partner for electromechanical systems across their working life.",
  },
  {
    title: "Installation & Commissioning",
    body: "Equipment installed, connected, tested and handed over ready for operation.",
  },
  {
    title: "Preventive & Corrective Maintenance",
    body: "Planned maintenance to avoid failures, and corrective work when conditions change.",
  },
  {
    title: "Troubleshooting & Repair",
    body: "Systematic fault diagnosis followed by repair, testing and return to service.",
  },
] as const;

export const whyUs = [
  { title: "Professional engineering service", body: "Work carried out by an engineering company, not a general contractor." },
  { title: "Reliable technical support", body: "Access to technical support before, during and after works." },
  { title: "Cost-conscious solutions", body: "Cost-effective electromechanical solutions matched to the actual need." },
  { title: "Quality workmanship", body: "Installation and repair executed to a standard that holds up in service." },
  { title: "Timely service", body: "Scheduling planned around your operation and agreed in advance." },
  { title: "Customer-focused execution", body: "Scope, findings and recommendations communicated clearly throughout." },
] as const;

export const serviceOptions = [
  ...services.map((s) => s.title),
  "Other",
];

export const industryOptions = [
  "Industrial",
  "Commercial",
  "Healthcare",
  "Agriculture",
  "Institutional",
  "Other",
];

export const timelineOptions = [
  "Urgent / breakdown",
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "Planning stage",
];

export const SITE_URL = "https://africaelectromechanical.lovable.app";
