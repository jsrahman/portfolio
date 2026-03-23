import { modalContent } from "../../data/portfolioData";

const ModalFooter = () => {
  return (
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
  );
};

export default ModalFooter;
