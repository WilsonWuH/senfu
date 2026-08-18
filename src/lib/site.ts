export const siteConfig = {
  name: "SENFU Technology",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://senfuprecision.com",
  email: process.env.NEXT_PUBLIC_SALES_EMAIL ?? "wh1007209170@gmail.com",
  description:
    "Source-backed optical encoder and lithography system selection for precision motion, semiconductor equipment and micro/nano fabrication.",
};

export const company = {
  legalName: "深圳市森孚科技有限公司",
  address: "Room 2521, Nanguang Jiejia Building, No. 3037 Shennan Middle Road, Futian District, Shenzhen, Guangdong, China",
  phone: "150 1385 6255",
  phoneHref: "tel:+8615013856255",
  whatsapp: "+86 136 4570 0210",
  whatsappNumber: "8613645700210",
  whatsappHref: "https://wa.me/8613645700210",
  hours: "Monday–Friday, 09:00–18:00 (China Standard Time, UTC+8)",
  icp: "粤ICP备20045095号",
};

export const primaryNav = [
  { label: "Products", href: "/products/" },
  { label: "Applications", href: "/applications/" },
  { label: "Technology", href: "/technology/" },
  { label: "Resources", href: "/resources/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];
