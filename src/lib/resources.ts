export type ResourceKind = "Datasheet" | "Drawing" | "CAD" | "Certificate";

export type EngineeringResource = {
  title: string;
  description: string;
  kind: ResourceKind;
  fileType: string;
  href: string;
  products: string[];
  sourceNote: string;
};

export const engineeringResources: EngineeringResource[] = [
  {
    title: "SMG20 product datasheet",
    description: "Incremental optical linear encoder specifications, scale options and electrical interface data.",
    kind: "Datasheet",
    fileType: "PDF",
    href: "/resources/datasheets/smg20-datasheet.pdf",
    products: ["SMG20"],
    sourceNote: "ZEPTOOLS source document",
  },
  {
    title: "SMG20 installation drawing",
    description: "Installation dimensions and mechanical reference for SMG20 integration.",
    kind: "Drawing",
    fileType: "PDF",
    href: "/resources/drawings/smg20-installation-drawing.pdf",
    products: ["SMG20"],
    sourceNote: "ZEPTOOLS source document",
  },
  {
    title: "SMG20 3D CAD model",
    description: "STEP model for preliminary mechanical layout and envelope review.",
    kind: "CAD",
    fileType: "STEP",
    href: "/resources/cad/smg20-atom-1-clv.step",
    products: ["SMG20"],
    sourceNote: "ZEPTOOLS source file",
  },
  {
    title: "SMG26 product datasheet",
    description: "Incremental encoder specifications including pitch, resolution options and operating conditions.",
    kind: "Datasheet",
    fileType: "PDF",
    href: "/resources/datasheets/smg26-datasheet.pdf",
    products: ["SMG26"],
    sourceNote: "ZEPTOOLS source document",
  },
  {
    title: "SAG21 product datasheet",
    description: "Absolute linear encoder data covering BiSS-C interface and technical resolution formats.",
    kind: "Datasheet",
    fileType: "PDF",
    href: "/resources/datasheets/sag21-datasheet.pdf",
    products: ["SAG21"],
    sourceNote: "ZEPTOOLS source document",
  },
  {
    title: "SCG Series product datasheet",
    description: "Rotary encoder family reference for disc geometry, line-count and angular-resolution selection.",
    kind: "Datasheet",
    fileType: "PDF",
    href: "/resources/datasheets/scg-series-datasheet.pdf",
    products: ["SCG04", "SCG14", "SCG26", "SCG50", "SCG Series"],
    sourceNote: "ZEPTOOLS source document",
  },
  {
    title: "MICRON-P2 product datasheet",
    description: "HOPO miniature incremental encoder specifications and standard resolution options.",
    kind: "Datasheet",
    fileType: "PDF",
    href: "/resources/datasheets/micron-p2-datasheet.pdf",
    products: ["MICRON-P2"],
    sourceNote: "HOPO source document",
  },
  {
    title: "MICRON-P2 2D drawing",
    description: "Mechanical drawing for installation envelope and sensing-gap review.",
    kind: "Drawing",
    fileType: "PDF",
    href: "/resources/drawings/micron-p2-2d-drawing.pdf",
    products: ["MICRON-P2"],
    sourceNote: "HOPO source document",
  },
  {
    title: "MICRON-P2 3D CAD model",
    description: "STEP model for preliminary mechanical integration.",
    kind: "CAD",
    fileType: "STEP",
    href: "/resources/cad/micron-p2-3d.step",
    products: ["MICRON-P2"],
    sourceNote: "HOPO source file",
  },
  {
    title: "ZML maskless lithography overview",
    description: "DMD maskless lithography platform overview for research and process-development evaluation.",
    kind: "Datasheet",
    fileType: "PDF",
    href: "/resources/datasheets/zml-maskless-lithography.pdf",
    products: ["ZML10A", "ZML100A", "ZML200A", "ZML Series"],
    sourceNote: "ZEPTOOLS source document",
  },
  {
    title: "ZEL304G electron beam lithography overview",
    description: "Electron beam lithography system reference covering the documented beam and write functions.",
    kind: "Datasheet",
    fileType: "PDF",
    href: "/resources/datasheets/zel304g-electron-beam-lithography.pdf",
    products: ["ZEL304G"],
    sourceNote: "ZEPTOOLS source document",
  },
];

export const complianceResources: EngineeringResource[] = [
  {
    title: "SMG26 EMC certificate",
    description: "EMC certificate record covering SMG26 and the interfaces listed in the certificate scope.",
    kind: "Certificate",
    fileType: "PDF",
    href: "/resources/certificates/smg26-emc-certificate.pdf",
    products: ["SMG26", "TF15HP-*", "TF15-*"],
    sourceNote: "Certificate 25AE060366E001",
  },
  {
    title: "MC-N01C / MC-N01CS EMC certificate",
    description: "Model-scoped EMC certificate for the covered control units.",
    kind: "Certificate",
    fileType: "PDF",
    href: "/resources/certificates/mcn01-emc-certificate.pdf",
    products: ["MC-N01C", "MC-N01CS"],
    sourceNote: "Certificate 26AE011843E001",
  },
  {
    title: "ZT03 LVD certificate",
    description: "Low-voltage directive certificate for the ZT03 model listed in the source document.",
    kind: "Certificate",
    fileType: "PDF",
    href: "/resources/certificates/zt03-lvd-certificate.pdf",
    products: ["ZT03"],
    sourceNote: "Certificate ZKT-25112427892C-R1",
  },
  {
    title: "ZEM / ZEPTOOLS EMC certificate",
    description: "EMC certificate record for the ZEM / ZEPTOOLS scope stated in the source document.",
    kind: "Certificate",
    fileType: "PDF",
    href: "/resources/certificates/zem-emc-certificate.pdf",
    products: ["ZEM / ZEPTOOLS"],
    sourceNote: "Certificate ZKT-25052610746C",
  },
];

export function getResourcesForProduct(productId: string) {
  return engineeringResources.filter((resource) => resource.products.includes(productId));
}
