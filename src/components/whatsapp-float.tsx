import { company } from "@/lib/site";

const message = "Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.";

export function WhatsAppFloat() {
  const href = `https://wa.me/${company.whatsappNumber}?text=${message}`;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact SENFU on WhatsApp"
      title="Contact SENFU on WhatsApp"
    >
      <span className="whatsapp-float-label" aria-hidden="true">WhatsApp</span>
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M16 4.2A11.55 11.55 0 0 0 6.2 21.86L4.7 27.3l5.58-1.46A11.58 11.58 0 1 0 16 4.2Zm0 20.98c-1.78 0-3.52-.48-5.04-1.39l-.36-.21-3.31.87.89-3.22-.23-.37A9.41 9.41 0 1 1 16 25.18Zm5.16-7.04c-.28-.14-1.67-.82-1.93-.92-.26-.09-.45-.14-.64.14-.19.28-.73.92-.9 1.11-.16.19-.33.21-.61.07-.28-.14-1.19-.44-2.26-1.4a8.48 8.48 0 0 1-1.57-1.95c-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.54c-.19 0-.49.07-.75.35-.26.28-.99.97-.99 2.36s1.02 2.74 1.16 2.93c.14.19 2 3.05 4.85 4.28.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.67-.68 1.91-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33Z" />
      </svg>
    </a>
  );
}
