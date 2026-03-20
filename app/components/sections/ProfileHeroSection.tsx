import profileImage from "../../../src/eduolihez_pfp.JPG";
import { profile } from "../../data/portfolioData";

type ProfileHeroSectionProps = {
  onOpenModal: () => void;
};

function ProfileHeroSection({ onOpenModal }: ProfileHeroSectionProps) {
  return (
    <section className="card profile-hero">
      <div className="profile-content">
        <div className="memoji-container">
          <img src={profileImage} alt="Profile photo of Abdur Rahman" />
          <div className="status-indicator">
            <span className="ping"></span>
          </div>
        </div>
        <div className="profile-text">
          <h1>{profile.name}</h1>
          <h2>
            Frontend Developer at{" "}
            <span className="highlight">{profile.roleCompany}</span>
          </h2>
          <p>{profile.bio}</p>
        </div>
      </div>
      <div className="action-buttons">
        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn primary"
        >
          <i className="fas fa-file-pdf"></i> <span>Download CV</span>
        </a>
        <button type="button" className="btn secondary" onClick={onOpenModal}>
          <i className="fas fa-plus"></i> <span>More Info</span>
        </button>
      </div>
    </section>
  );
}

export default ProfileHeroSection;
