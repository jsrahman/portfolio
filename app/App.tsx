import React from "react";
import PortfolioModal from "./components/PortfolioModal";
import ProfileHeroSection from "./components/sections/ProfileHeroSection";
import SocialSection from "./components/sections/SocialSection";
import NowSection from "./components/sections/NowSection";
import LocationSection from "./components/sections/LocationSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HighlightSection from "./components/sections/HighlightSection";
import ServicesSection from "./components/sections/ServicesSection";
import FeaturedProjectsSection from "./components/sections/FeaturedProjectsSection";
import CertificationsSection from "./components/sections/CertificationsSection";
import ContactSection from "./components/sections/ContactSection";
import useMeta from "./hooks/useMeta";
import useModal from "./hooks/useModal";

function App() {
  const { setIsModalOpen, modalRef } = useModal();
  const { schemaMarkup } = useMeta();
  return (
    <>
      <main className="bento-grid">
        <ProfileHeroSection onOpenModal={() => setIsModalOpen(true)} />
        <SocialSection />
        <NowSection />
        <LocationSection />
        <ExperienceSection />
        <HighlightSection />
        <ServicesSection />
        <FeaturedProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <PortfolioModal
        modalRef={modalRef}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="noise-overlay"></div>
      <div className="ambient-glow"></div>
      <script type="application/ld+json">{schemaMarkup}</script>
    </>
  );
}

export default App;
