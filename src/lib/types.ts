export type SourceRef = {
  sourceId: string;
  locator?: string;
};

export type PublicField = {
  verificationStatus: "verified";
  visibility: "public";
  reviewStatus?: string;
  sourceRefs: SourceRef[];
  value?: unknown;
  values?: unknown[];
  unit?: string;
  conditions?: string[];
};

export type PublicProduct = {
  id: string;
  model: string;
  productName: string;
  category: string;
  family: string;
  brand: string;
  supplier: string;
  manufacturer: string | null;
  publicationStatus: string;
  seo: {
    slug: string;
    primaryKeyword: string;
    status: string;
  };
  sourceIds: string[];
  specifications: Record<string, PublicField>;
  applications: string[];
};

export type PublicData = {
  project: string;
  version: string;
  generatedAt: string;
  publicationMode: string;
  disclosure: string;
  products: PublicProduct[];
};
