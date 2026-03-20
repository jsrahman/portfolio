import type { MouseEvent, RefObject } from "react";
import {
  modalContent,
  type PortfolioProject,
  type EducationItem,
} from "../data/portfolioData";

type PortfolioModalProps = {
  modalRef: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  onDialogClick: (event: MouseEvent<HTMLDialogElement>) => void;
  portfolioProjects: PortfolioProject[];
  stackTags: string[];
  education: EducationItem[];
  languages: string[];
  interests: string[];
};

function PortfolioModal({
  modalRef,
  onClose,
  onDialogClick,
  portfolioProjects,
  stackTags,
  education,
  languages,
  interests,
}: PortfolioModalProps) {
  return (
    <dialog ref={modalRef} className="modal-glass" onClick={onDialogClick}>
      <div className="modal-wrapper">
        <button
          type="button"
          className="close-btn"
          aria-label="Close modal"
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>
        <header className="modal-header">
          <h2>{modalContent.title}</h2>
          <p>{modalContent.subtitle}</p>
        </header>
        <div className="modal-body">
          <div className="modal-section">
            <h3>{modalContent.aboutTitle}</h3>
            <p>{modalContent.aboutText}</p>
          </div>
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
          <div className="modal-section">
            <h3>{modalContent.projectTitle}</h3>
            <div className="projects-grid-full">
              {portfolioProjects.map((project) =>
                project.static ? (
                  <div
                    key={project.title}
                    className="proj-item"
                    title={project.tooltip}
                  >
                    <i className={project.iconClass}></i>
                    <div>
                      <strong>{project.title}</strong>
                      <small>{project.subtitle}</small>
                    </div>
                  </div>
                ) : (
                  <a
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-item"
                  >
                    <i className={project.iconClass}></i>
                    <div>
                      <strong>{project.title}</strong>
                      <small>{project.subtitle}</small>
                    </div>
                  </a>
                ),
              )}
            </div>
          </div>
          <div className="modal-section">
            <h3>{modalContent.stackTitle}</h3>
            <div className="skills-tags">
              {stackTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
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
        </div>
        <div className="modal-footer">
          <a
            href={modalContent.footerHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary full-width"
          >
            <i className="fab fa-linkedin"></i>{" "}
            <span>{modalContent.footerLabel}</span>
          </a>
        </div>
      </div>
    </dialog>
  );
}

export default PortfolioModal;
