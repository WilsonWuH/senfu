import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 静态托管：完整导出到 out/ 目录
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // 静态导出模式不支持 Next 图片优化服务，直接输出原始图片
    unoptimized: true,
  },
  // 重定向与自定义响应头改由 Cloudflare Pages 的 _redirects / _headers 承担
};

export default nextConfig;
