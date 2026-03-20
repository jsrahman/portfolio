import type { FormEvent } from "react";
import type { FormStatus } from "../data/portfolioData";
import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import FeaturedProjectsSection from "./sections/FeaturedProjectsSection";
import HighlightSection from "./sections/HighlightSection";
import LocationSection from "./sections/LocationSection";
import NowSection from "./sections/NowSection";
import ProfileHeroSection from "./sections/ProfileHeroSection";
import ServicesSection from "./sections/ServicesSection";
import SocialSection from "./sections/SocialSection";

type MainContentProps = {
  time: string;
  formAction: string;
  formMethod: string;
  formStatus: FormStatus;
  onOpenModal: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
};

function MainContent({
  time,
  formAction,
  formMethod,
  formStatus,
  onOpenModal,
  onSubmit,
}: MainContentProps) {
  return (
    <>
      <ProfileHeroSection onOpenModal={onOpenModal} />
      <SocialSection />
      <NowSection />
      <LocationSection time={time} />
      <ExperienceSection />
      <HighlightSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <CertificationsSection />
      <ContactSection
        formAction={formAction}
        formMethod={formMethod}
        formStatus={formStatus}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default MainContent;
