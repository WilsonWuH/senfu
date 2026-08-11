import type { MetadataRoute } from "next";

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
