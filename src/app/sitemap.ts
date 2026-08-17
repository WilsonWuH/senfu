import type { MetadataRoute } from "next";
import { applicationPages, technologyPages } from "@/lib/editorial-content";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = [
    "", "/products/", "/optical-encoders/", "/optical-encoders/incremental-linear/", "/optical-encoders/absolute-linear/", "/optical-encoders/rotary/", "/optical-encoders/vacuum/",
    "/lithography-systems/", "/lithography-systems/maskless-lithography/", "/lithography-systems/electron-beam-lithography/",
    "/applications/", "/technology/", "/resources/", "/resources/certificates/", "/about/", "/contact/", "/privacy/",
  ];
  const productRoutes = [...new Set(products.map((product) => product.seo.slug))];
  const applicationRoutes = Object.keys(applicationPages).map((slug) => `/applications/${slug}/`);
  const technologyRoutes = Object.keys(technologyPages).map((slug) => `/technology/${slug}/`);
  const lastModified = new Date("2026-08-15T00:00:00+08:00");
  return [...fixed, ...productRoutes, ...applicationRoutes, ...technologyRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: route.startsWith("/technology/") && technologyPages[route.split("/")[2]]?.modifiedAt ? new Date(`${technologyPages[route.split("/")[2]].modifiedAt}T00:00:00+08:00`) : lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/technology/") || route.includes("/applications/") ? 0.7 : 0.8,
    ...(route === "" ? { images: [`${siteConfig.url}/materials/smg20-product.png`, `${siteConfig.url}/materials/zml-system-product.png`] } : {}),
    ...(route.startsWith("/technology/") && technologyPages[route.split("/")[2]]?.featuredImage ? { images: [
      `${siteConfig.url}${technologyPages[route.split("/")[2]].featuredImage?.src}`,
      ...(technologyPages[route.split("/")[2]].articleSections?.flatMap((section) => section.image ? [`${siteConfig.url}${section.image.src}`] : []) ?? []),
    ] } : {}),
  }));
}
