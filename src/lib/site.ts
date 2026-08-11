export const siteConfig = {
  name: "SENFU Technology",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_SALES_EMAIL ?? "",
  description:
    "Source-backed optical encoder and lithography system selection for precision motion, semiconductor equipment and micro/nano fabrication.",
};

export const primaryNav = [
  { label: "Products", href: "/products/" },
  { label: "Applications", href: "/applications/" },
  { label: "Technology", href: "/technology/" },
  { label: "Resources", href: "/resources/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];
