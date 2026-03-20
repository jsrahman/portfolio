import { modalContent } from "../../data/portfolioData";

function ModalHeader() {
  return (
    <header className="modal-header">
      <h2>{modalContent.title}</h2>
      <p>{modalContent.subtitle}</p>
    </header>
  );
}

export default ModalHeader;
