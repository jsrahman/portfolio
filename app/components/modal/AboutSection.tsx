import { modalContent } from "../../data/portfolioData";

function AboutSection() {
  return (
    <div className="modal-section">
      <h3>{modalContent.aboutTitle}</h3>
      <p>{modalContent.aboutText}</p>
    </div>
  );
}

export default AboutSection;
