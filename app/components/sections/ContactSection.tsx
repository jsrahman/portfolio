import { useState, type FormEvent } from "react";
import { contactForm } from "../../data/portfolioData";
import type { FormStatus } from "../../data/portfolioData.types";

function ContactSection() {
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: "",
    type: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      setFormStatus({ message: "Sending...", type: "" });
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus({ message: "Message sent successfully!", type: "success" });
        form.reset();
      } else {
        setFormStatus({
          message: "Oops! There was a problem submitting your form",
          type: "error",
        });
      }
    } catch (error) {
      setFormStatus({
        message: "Oops! There was a problem submitting your form",
        type: "error",
      });
    }
  };

  return (
    <section className="card contact-card">
      <div className="contact-content">
        <h3>{contactForm.title}</h3>
        <p>{contactForm.description}</p>

        <form
          action={contactForm.action}
          method={contactForm.method}
          className="contact-form-grid"
          onSubmit={handleSubmit}
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
