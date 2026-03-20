import { socialLinks } from "../../data/portfolioData";

function SocialSection() {
  return (
    <section className="card social-card">
      <h3>Connect With Me</h3>
      <div className="social-grid-links">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={link.className}
            aria-label={link.ariaLabel}
          >
            <i className={link.icon}></i>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default SocialSection;
