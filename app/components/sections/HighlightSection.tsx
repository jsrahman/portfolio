import { highlight } from "../../data/portfolioData";

function HighlightSection() {
  return (
    <section className="card highlight-card">
      <div className="trophy-icon">
        <i className="fas fa-trophy"></i>
      </div>
      <div className="highlight-content">
        <span className="badge-gold">{highlight.badge}</span>
        <h3>{highlight.title}</h3>
        <p>{highlight.description}</p>
      </div>
    </section>
  );
}

export default HighlightSection;
