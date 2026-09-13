import type { MetadataRoute } from "next";

// 静态导出（output: "export"）要求 metadata 路由显式声明为静态
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SENFU Technology",
    short_name: "SENFU",
    description: "Precision positioning and micro/nano fabrication solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b1d35",
  };
}
