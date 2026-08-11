import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "file:///C:/Users/%E5%90%B4%E6%98%8A/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";

const baseUrl = "http://127.0.0.1:3000";
const outputDir = new URL("../tmp/visual-qa/", import.meta.url);
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
});

const checks = [];
const routes = [
  ["home-desktop", "/", { width: 1440, height: 1000 }],
  ["home-mobile", "/", { width: 390, height: 844 }],
  ["smg20", "/optical-encoders/smg20/", { width: 1440, height: 1000 }],
  ["maskless", "/lithography-systems/maskless-lithography/", { width: 1280, height: 900 }],
  ["contact", "/contact/", { width: 390, height: 844 }],
];

for (const [name, route, viewport] of routes) {
  const page = await browser.newPage({ viewportSize: viewport });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 700) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(300);
  const result = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelector("h1")?.textContent?.trim() ?? null,
    linkCount: document.querySelectorAll("a[href]").length,
    imageCount: document.images.length,
    brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
    horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    schemaCount: document.querySelectorAll('script[type="application/ld+json"]').length,
    mainPresent: Boolean(document.querySelector("main")),
    salesEmailLinks: [...document.querySelectorAll('a[href^="mailto:"]')].map((link) => link.getAttribute("href")),
    submitDisabled: document.querySelector('button[type="submit"]')?.disabled ?? null,
  }));
  await page.screenshot({ path: fileURLToPath(new URL(`${name}.png`, outputDir)), fullPage: true });
  checks.push({ name, route, viewport, status: response?.status() ?? null, errors, ...result });
  await page.close();
}

const journey = await browser.newPage({ viewportSize: { width: 1280, height: 900 } });
await journey.goto(`${baseUrl}/optical-encoders/`, { waitUntil: "networkidle" });
const encoderUrl = journey.url();
await Promise.all([
  journey.waitForURL("**/optical-encoders/smg20/**"),
  journey.locator('a[href="/optical-encoders/smg20/"]').first().click(),
]);
await journey.waitForLoadState("networkidle");
const productUrl = journey.url();
const productHeading = await journey.locator("h1").innerText();
checks.push({ name: "journey", encoderUrl, productUrl, productHeading });

await browser.close();
await writeFile(new URL("report.json", outputDir), `${JSON.stringify(checks, null, 2)}\n`, "utf8");
console.log(JSON.stringify(checks, null, 2));
