import ContactFooter from "./ContactFooter";
import ContactForm from "./ContactForm";
import ContactProfile from "./ContactProfile";
import ContactSocials from "./ContactSocials";

export default function Contact() {
  return (
    <section className="section-primary relative font-sans bg-gradient-to-r from-amber-500 to-pink-500 max-[1100px]:p-8">
      {/* contact__wrapper */}
      <div>
        {/* contact__header */}
        <div className="mb-12">
          {/* section__header-title */}
          <div className="header-title text-white">/Contact</div>
          {/* section__header-subtitle */}
          <div className="header-subtitle">Get in touch</div>
        </div>
        <ContactForm />
        <ContactProfile />
        <ContactSocials />
        <ContactFooter />
      </div>
    </section>
  );
}
