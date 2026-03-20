import { careerTimeline } from "../../data/portfolioData";

function ExperienceSection() {
  return (
    <section className="card experience-card">
      <h3>
        <i className="fas fa-briefcase"></i> Career
      </h3>
      <div className="timeline">
        {careerTimeline.map((item) => (
          <div
            key={`${item.company}-${item.date}`}
            className={`timeline-item${item.current ? " current" : ""}`}
          >
            <div className="time-dot"></div>
            <div className="time-content">
              <strong>{item.company}</strong>
              <span>{item.role}</span>
              <small>{item.date}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
