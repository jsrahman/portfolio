import { useEffect, useRef, useState } from "react";

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) {
      return undefined;
    }

    if (isModalOpen && !modal.open) {
      modal.showModal();
    }

    if (!isModalOpen && modal.open) {
      modal.close();
    }

    const syncClosedState = () => setIsModalOpen(false);
    modal.addEventListener("close", syncClosedState);
    modal.addEventListener("cancel", syncClosedState);

    return () => {
      modal.removeEventListener("close", syncClosedState);
      modal.removeEventListener("cancel", syncClosedState);
    };
  }, [isModalOpen]);

  return { isModalOpen, setIsModalOpen, modalRef };
}

export default useModal;