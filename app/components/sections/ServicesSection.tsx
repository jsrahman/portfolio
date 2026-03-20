import { services } from "../../data/portfolioData";

function ServicesSection() {
  return (
    <section className="card services-card">
      <h3>Areas of Impact</h3>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.title} className="service-pill">
            <i className={service.iconClass} style={service.iconStyle}></i>
            <div>
              <strong>{service.title}</strong>
              <small>{service.subtitle}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
