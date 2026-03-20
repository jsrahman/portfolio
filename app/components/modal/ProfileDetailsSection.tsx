import { languages, interests } from "../../data/portfolioData";

function ProfileDetailsSection() {
  return (
    <div className="modal-section">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
        }}
      >
        <div>
          <h3>Languages</h3>
          <ul style={{ paddingLeft: "1.2rem" }}>
            {languages.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Interests</h3>
          <ul style={{ paddingLeft: "1.2rem" }}>
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailsSection;
