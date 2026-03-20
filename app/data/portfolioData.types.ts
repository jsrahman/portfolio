import type { CSSProperties } from "react";

export type FormStatus = {
  type: "" | "success" | "error";
  message: string;
};

export type SocialLink = {
  href: string;
  className: string;
  ariaLabel: string;
  icon: string;
  label: string;
};

export type CurrentFocusItem = {
  dotClass: string;
  text: string;
};

export type CareerItem = {
  company: string;
  role: string;
  date: string;
  current?: boolean;
};

export type ServiceItem = {
  iconClass: string;
  iconStyle?: CSSProperties;
  title: string;
  subtitle: string;
};

export type FeaturedProject = {
  href: string;
  className: string;
  iconClass: string;
  tag: string;
  title: string;
  description: string;
};

export type Certification = {
  title: string;
  iconClass: string;
  label: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  date: string;
  grade?: string;
  courses?: string;
};

export type PortfolioProject = {
  href?: string;
  iconClass: string;
  title: string;
  subtitle: string;
  static?: boolean;
  tooltip?: string;
};
