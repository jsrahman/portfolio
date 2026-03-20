import { education } from "../../data/portfolioData";

function EducationSection() {
  return (
    <div className="modal-section">
      <h3>Education</h3>
      <div className="education-list">
        {education.map((item) => (
          <div
            key={`${item.degree}-${item.date}`}
            className="education-item"
            style={{ marginBottom: "1rem" }}
          >
            <strong>{item.degree}</strong>
            <div>{item.institution}</div>
            <small>
              {item.date} {item.grade && `| Grade: ${item.grade}`}
            </small>
            {item.courses && (
              <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                Courses: {item.courses}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationSection;
