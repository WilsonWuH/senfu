import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const siteRoot = process.cwd();
const sourceCandidates = [
  path.join(siteRoot, "SENFU_PRODUCT_MASTER_DATA_V1.json"),
  path.join(path.resolve(siteRoot, ".."), "SENFU_PRODUCT_MASTER_DATA_V1.json"),
];
let sourcePath = sourceCandidates[0];
for (const candidate of sourceCandidates) {
  try {
    await access(candidate);
    sourcePath = candidate;
    break;
  } catch {
    // Try the next source location so the site can build from a standalone deploy root.
  }
}
const outputPath = path.join(siteRoot, "src", "data", "public-products.json");

const source = JSON.parse(await readFile(sourcePath, "utf8"));

function projectVerifiedFields(fields = {}) {
  return Object.fromEntries(
    Object.entries(fields)
      .filter(([, field]) =>
        field &&
        field.verificationStatus === "verified" &&
        field.visibility === "public" &&
        Array.isArray(field.sourceRefs) &&
        field.sourceRefs.length > 0,
      )
      .map(([key, field]) => [
        key,
        {
          verificationStatus: "verified",
          visibility: "public",
          reviewStatus: field.reviewStatus,
          sourceRefs: field.sourceRefs,
          ...(Object.hasOwn(field, "value") ? { value: field.value } : {}),
          ...(Object.hasOwn(field, "values") ? { values: field.values } : {}),
          ...(field.unit ? { unit: field.unit } : {}),
          ...(field.conditions ? { conditions: field.conditions } : {}),
        },
      ]),
  );
}

const publicData = {
  project: source.project,
  version: source.version,
  sourceGeneratedAt: source.generatedAt,
  generatedAt: new Date().toISOString(),
  publicationMode: "source-backed-preview",
  disclosure:
    "Only source-backed, verified, public fields are projected. Conflicting, missing and internal-only fields are excluded.",
  products: source.products.map((product) => ({
    id: product.id,
    model: product.model,
    productName: product.productName,
    category: product.category,
    family: product.family,
    brand: product.brand,
    supplier: product.supplier,
    manufacturer: product.manufacturer,
    publicationStatus: product.publicationStatus,
    seo: product.seo,
    sourceIds: product.sourceIds,
    specifications: projectVerifiedFields(product.specifications),
    applications: product.applications ?? [],
  })),
};

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(publicData, null, 2)}\n`, "utf8");
console.log(`Synced ${publicData.products.length} source-backed product records.`);
