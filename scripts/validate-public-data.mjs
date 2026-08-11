import { readFile } from "node:fs/promises";
import path from "node:path";

const siteRoot = process.cwd();
const dataPath = path.join(siteRoot, "src", "data", "public-products.json");
const data = JSON.parse(await readFile(dataPath, "utf8"));
const violations = [];

for (const product of data.products) {
  for (const [fieldName, field] of Object.entries(product.specifications ?? {})) {
    if (field.verificationStatus !== "verified") {
      violations.push(`${product.id}.${fieldName}: not verified`);
    }
    if (field.visibility !== "public") {
      violations.push(`${product.id}.${fieldName}: not public`);
    }
    if (!Array.isArray(field.sourceRefs) || field.sourceRefs.length === 0) {
      violations.push(`${product.id}.${fieldName}: missing source reference`);
    }
  }
}

if (violations.length > 0) {
  console.error("Public data build guard failed:\n" + violations.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(`Build guard passed for ${data.products.length} public product records.`);
