import type { RefObject } from "react";
import AboutSection from "./modal/AboutSection";
import EducationSection from "./modal/EducationSection";
import ModalHeader from "./modal/ModalHeader";
import ProfileDetailsSection from "./modal/ProfileDetailsSection";
import ProjectsSection from "./modal/ProjectsSection";
import StackSection from "./modal/StackSection";
import useModal from "../hooks/useModal";
import ModalFooter from "./modal/ModalFooter";

type PortfolioModalProps = {
  modalRef: RefObject<HTMLDialogElement | null>;
  onClose: () => void;
};

function PortfolioModal({ modalRef, onClose }: PortfolioModalProps) {
  const { handleDialogClick } = useModal();

  return (
    <dialog ref={modalRef} className="modal-glass" onClick={handleDialogClick}>
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
        <ModalFooter/>
      </div>
    </dialog>
  );
}

export default PortfolioModal;
