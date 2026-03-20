import { modalContent, stackTags } from "../../data/portfolioData";

function StackSection() {
  return (
    <div className="modal-section">
      <h3>{modalContent.stackTitle}</h3>
      <div className="skills-tags">
        {stackTags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default StackSection;
