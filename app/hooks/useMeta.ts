import React, { useEffect, useMemo } from 'react'
import {
  metaContent,
  personSchema,
} from "../data/portfolioData";
import profileImage from "../../src/img.jpg";
const useMeta = () => {
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
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      return undefined;
    }

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".card"));
    const cleanups = cards.map((card) => {
      const handleMouseMove = (event: globalThis.MouseEvent) => {
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
  return {schemaMarkup}
}

export default useMeta