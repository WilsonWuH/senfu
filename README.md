# SENFU Technology Website

Next.js App Router website for SENFU Technology's precision position feedback and micro/nano fabrication business.

## Data flow

The canonical product source is `../SENFU_PRODUCT_MASTER_DATA_V1.json`.

- `pnpm data:sync` projects only source-backed, verified, public fields into `src/data/public-products.json`.
- `pnpm data:validate` fails when a generated field is not verified, public or traceable to a source reference.
- `pnpm dev` and `pnpm build` run the data sync automatically.

Conflicting, missing and internal-only facts are not copied into the website data layer.

## Local development

```bash
pnpm install
pnpm dev
```

The site is available at `http://localhost:3000` by default.

## Launch configuration

Copy `.env.example` to `.env.local` and replace both values with confirmed information:

```text
NEXT_PUBLIC_SITE_URL=https://confirmed-domain.example
NEXT_PUBLIC_SALES_EMAIL=wh1007209170@gmail.com
```

Until a sales email is configured, the RFQ page remains visible but its submit button is intentionally disabled.

## Quality checks

```bash
pnpm data:validate
pnpm lint
pnpm build
```

`scripts/browser-smoke.mjs` runs the local desktop/mobile route and image checks used during development.
