import type { RefObject } from "react";
import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import ModalHeader from "./ModalHeader";
import ProfileDetailsSection from "./ProfileDetailsSection";
import ProjectsSection from "./ProjectsSection";
import StackSection from "./StackSection";
import useModal from "../../hooks/useModal";
import ModalFooter from "./ModalFooter";

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
        <ModalFooter />
      </div>
    </dialog>
  );
}

export default PortfolioModal;
