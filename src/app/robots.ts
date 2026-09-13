import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// 静态导出（output: "export"）要求 metadata 路由显式声明为静态
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/_next/", "/api/"] },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
