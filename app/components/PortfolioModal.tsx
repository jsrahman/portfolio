import type { RefObject } from "react";
import { modalContent } from "../data/portfolioData";
import AboutSection from "./modal/AboutSection";
import EducationSection from "./modal/EducationSection";
import ModalHeader from "./modal/ModalHeader";
import ProfileDetailsSection from "./modal/ProfileDetailsSection";
import ProjectsSection from "./modal/ProjectsSection";
import StackSection from "./modal/StackSection";

type PortfolioModalProps = {
  modalRef: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
};

function PortfolioModal({
  modalRef,
  onClose,
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
        <ModalHeader />
        <div className="modal-body">
          <AboutSection />
          <EducationSection />
          <ProjectsSection />
          <StackSection />
          <ProfileDetailsSection />
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
