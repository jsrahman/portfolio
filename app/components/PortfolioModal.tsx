import type { MouseEvent, RefObject } from "react";
import {
  modalContent,
  type PortfolioProject,
} from "../data/portfolioData";

type PortfolioModalProps = {
  modalRef: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
  onDialogClick: (event: MouseEvent<HTMLDialogElement>) => void;
  portfolioProjects: PortfolioProject[];
  stackTags: string[];
};

function PortfolioModal({
  modalRef,
  onClose,
  onDialogClick,
  portfolioProjects,
  stackTags,
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
