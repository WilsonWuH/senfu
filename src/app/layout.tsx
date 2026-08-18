import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { company, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Precision Positioning & Micro/Nano Fabrication", template: "%s | SENFU Technology" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Precision Positioning & Micro/Nano Fabrication",
    description: siteConfig.description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: "SENFU Technology", description: siteConfig.description },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b1d35" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: company.legalName,
    url: siteConfig.url,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    telephone: company.phone,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shenzhen",
      addressCountry: "CN",
      streetAddress: company.address,
    },
    contactPoint: [{
      "@type": "ContactPoint",
      contactType: "technical sales",
      telephone: company.phone,
      ...(siteConfig.email ? { email: siteConfig.email } : {}),
      availableLanguage: ["en", "zh-CN"],
    }],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <WhatsAppFloat />
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
