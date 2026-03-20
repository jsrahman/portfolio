import type { FormEvent } from "react";
import { contactForm, type FormStatus } from "../../data/portfolioData";

type ContactSectionProps = {
  formAction: string;
  formMethod: string;
  formStatus: FormStatus;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
};

function ContactSection({
  formAction,
  formMethod,
  formStatus,
  onSubmit,
}: ContactSectionProps) {
  return (
    <section className="card contact-card">
      <div className="contact-content">
        <h3>{contactForm.title}</h3>
        <p>{contactForm.description}</p>

        <form
          action={formAction}
          method={formMethod}
          className="contact-form-grid"
          onSubmit={onSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="form-input"
              aria-label="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="form-input"
              aria-label="Email address"
            />
          </div>
          <div className="form-group full">
            <textarea
              name="message"
              placeholder="How can I help you?"
              rows={3}
              required
              className="form-input"
              aria-label="Message"
            ></textarea>
          </div>
          <button type="submit" className="btn primary submit-btn">
            <span>Send Message</span> <i className="fas fa-paper-plane"></i>
          </button>
          <p
            className={`form-status${formStatus.type ? ` ${formStatus.type}` : ""}`}
            aria-live="polite"
          >
            {formStatus.message}
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
