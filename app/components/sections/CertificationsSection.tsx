import { certifications } from "../../data/portfolioData";

function CertificationsSection()  {
  return (
    <section className="card certs-card">
      <h3>Certifications</h3>
      <div className="certs-grid">
        {certifications.map((item) => (
          <div key={item.label} className="cert-btn" title={item.title}>
            <div className="cert-icon-box">
              <i className={item.iconClass}></i>
            </div>
            <span className="cert-label">{item.label}</span>
            <i className="fas fa-external-link-alt arrow-mini"></i>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;
