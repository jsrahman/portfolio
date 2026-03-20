import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent,
} from "react";
import profileImage from "../src/img.jpg";
import MainContent from "./components/MainContent";
import PortfolioModal from "./components/PortfolioModal";
import {
  type FormStatus,
  contactForm,
  metaContent,
  personSchema,
  portfolioProjects,
  stackTags,
  education,
  languages,
  interests,
} from "./data/portfolioData";
import { useDhakaClock } from "./hooks/useDhakaClock";

function App() {
  const time = useDhakaClock();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: "",
    message: "",
  });
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const schemaMarkup = useMemo(() => {
    const imageUrl = `${window.location.origin}${profileImage}`;
    return JSON.stringify({ ...personSchema, image: imageUrl });
  }, []);

  useEffect(() => {
    document.title = metaContent.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", metaContent.description);
    }

    const imageUrl = `${window.location.origin}${profileImage}`;
    ['meta[property="og:image"]', 'meta[name="twitter:image"]'].forEach(
      (selector) => {
        const tag = document.querySelector(selector);
        if (tag) {
          tag.setAttribute("content", imageUrl);
        }
      },
    );
  }, []);

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

  useEffect(() => {
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      return undefined;
    }

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".card"));
    const cleanups = cards.map((card) => {
      const handleMouseMove = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / rect.height / 2) * -1.5;
        const rotateY = ((x - rect.width / 2) / rect.width / 2) * 1.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
      };

      const handleMouseLeave = () => {
        card.style.transform = "translateY(0)";
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
        card.style.transform = "";
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatus({ type: "", message: "Sending..." });

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setFormStatus({
        type: "success",
        message: "Message sent successfully!",
      });
    } catch {
      setFormStatus({
        type: "error",
        message: "There was an error. Please try again.",
      });
    }
  };

  return (
    <>
      <script type="application/ld+json">{schemaMarkup}</script>
      <div className="noise-overlay"></div>
      <div className="ambient-glow"></div>

      <main className="bento-grid">
        <MainContent
          time={time}
          formAction={contactForm.action}
          formMethod={contactForm.method}
          formStatus={formStatus}
          onOpenModal={() => setIsModalOpen(true)}
          onSubmit={handleSubmit}
        />
      </main>

      <PortfolioModal
        modalRef={modalRef}
        onClose={() => setIsModalOpen(false)}
        onDialogClick={handleDialogClick}
        portfolioProjects={portfolioProjects}
        stackTags={stackTags}
        education={education}
        languages={languages}
        interests={interests}
      />
    </>
  );
}

export default App;
