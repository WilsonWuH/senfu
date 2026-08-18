import type { Metadata } from "next";
import { ListingHero } from "@/components/listing-hero";
import { company, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Discuss Your Application",
  description: "Request an encoder recommendation or discuss a lithography application with SENFU Technology.",
  alternates: { canonical: "/contact/" },
};

export default function Page() {
  const emailReady = Boolean(siteConfig.email);
  const formSubmitEndpoint = "https://formsubmit.co/wh1007209170@gmail.com";
  return <>
    <ListingHero eyebrow="TECHNICAL ENQUIRY" title="Discuss your application." description="The useful first conversation starts with operating requirements. Choose the relevant route and share what is already known." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} primaryHref={emailReady ? `mailto:${siteConfig.email}` : "#application-form"} primaryLabel={emailReady ? "Email SENFU directly" : "Prepare an application brief"} />
    <section className="section contact-section" id="application-form">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow">APPLICATION BRIEF</p>
          <h2>Send enough context for a technical first response.</h2>
          <p>Required configuration and document availability will be confirmed against the controlled product record.</p>
          <div className="contact-direct">
            <small>DIRECT CONTACT</small>
            {emailReady ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : <strong>Sales email to be connected before launch</strong>}
            <a href={company.phoneHref}>{company.phone}</a>
            <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp: {company.whatsapp}</a>
            <span>{company.address}</span>
            <span>{company.hours}</span>
          </div>
        </div>
        <form className="rfq-form" action={formSubmitEndpoint} method="post" encType="application/x-www-form-urlencoded">
          <input type="hidden" name="_subject" value="New SENFU technical enquiry" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://senfuprecision.com/contact/?submitted=1" />
          <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label><span>Product area *</span><select name="Product area" required defaultValue=""><option value="" disabled>Select one</option><option>Optical encoder</option><option>Lithography system</option><option>Engineering resources</option><option>Other technical enquiry</option></select></label>
          <div className="form-two"><label><span>Name *</span><input name="Name" required autoComplete="name" /></label><label><span>Work email *</span><input name="Email" type="email" required autoComplete="email" /></label></div>
          <div className="form-two"><label><span>Company / institution *</span><input name="Company" required autoComplete="organization" /></label><label><span>Country / region *</span><input name="Country" required autoComplete="country-name" /></label></div>
          <label><span>Existing model or technology</span><input name="Existing model" placeholder="e.g. SMG20, ZML100A or current alternative" /></label>
          <label><span>Application and critical requirements *</span><textarea name="Application" required rows={7} placeholder="For encoders: resolution, travel, speed, interface, environment, space. For lithography: feature, substrate, resist, wavelength, overlay, grayscale, pattern format." /></label>
          <label><span>Drawing or process brief (optional)</span><input name="Attachment note" placeholder="Describe any drawing or process brief you will send separately" /></label>
          <label className="consent"><input type="checkbox" required name="Consent" value="Yes" /><span>I agree that SENFU may use this information to respond to my technical enquiry.</span></label>
          <button className="button button-primary" type="submit">Send enquiry <span>→</span></button>
          <p className="form-note">Your enquiry will be forwarded to SENFU by email. FormSubmit may ask the mailbox owner to activate the address on the first submission.</p>
        </form>
      </div>
    </section>
  </>;
}
