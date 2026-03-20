import { MouseEvent, useEffect, useRef, useState } from "react";

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

  const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    const dialog = modalRef.current;
    if (!dialog) {
      return;
    }

    const rect = dialog.getBoundingClientRect();
    const clickedOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (clickedOutside) {
      setIsModalOpen(false);
    }
  };
  return { isModalOpen, setIsModalOpen, modalRef, handleDialogClick };
}

export default useModal;