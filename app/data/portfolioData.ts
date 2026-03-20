import type { CSSProperties } from "react";
import resumePdf from "../../src/cv of Abdur Rahman.pdf";

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

export const metaContent = {
  title: "Abdur Rahman | Frontend Developer - Next.js, React and TypeScript",
  description:
    "Portfolio of Abdur Rahman. Frontend Developer with 3+ years of experience building SaaS and real-time applications using Next.js, TypeScript, and React.",
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdur Rahman",
  url: "https://github.com/jsrahman",
  jobTitle: "Frontend Developer",
  worksFor: {
    "@type": "Organization",
    name: "Thesoftking LTD.",
    url: "https://thesoftking.com",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Bangladesh National University",
  },
  sameAs: [
    "https://www.linkedin.com/in/abrahman",
    "https://github.com/jsrahman",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mirpur, Dhaka",
    addressRegion: "Dhaka",
    addressCountry: "BD",
  },
};

export const profile = {
  name: "Abdur Rahman",
  roleCompany: "Thesoftking",
  bio:
    "Frontend Developer with 3+ years of experience building high-performance SaaS and real-time applications using Next.js, TypeScript, and React.",
  resumeHref: resumePdf,
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/abrahman",
    className: "social-btn linkedin",
    ariaLabel: "LinkedIn",
    icon: "fab fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/jsrahman",
    className: "social-btn github",
    ariaLabel: "GitHub",
    icon: "fab fa-github",
    label: "GitHub",
  },
  {
    href: "mailto:abrahmandevbd@gmail.com",
    className: "social-btn email",
    ariaLabel: "Email",
    icon: "fas fa-envelope",
    label: "Email",
  },
  {
    href: "tel:+8801911411270",
    className: "social-btn instagram",
    ariaLabel: "Phone",
    icon: "fas fa-phone",
    label: "Phone",
  },
];

export const currentFocus: CurrentFocusItem[] = [
  {
    dotClass: "now-dot work",
    text: "Frontend Developer at Thesoftking LTD.",
  },
  {
    dotClass: "now-dot build",
    text: "Building SaaS and real-time web apps",
  },
  {
    dotClass: "now-dot location",
    text: "Dhaka, Bangladesh · Open to remote",
  },
];

export const careerTimeline: CareerItem[] = [
  {
    company: "Thesoftking LTD.",
    role: "Frontend Developer",
    date: "Sep 2023 - Present",
    current: true,
  },
  {
    company: "Febula IT",
    role: "Frontend Developer",
    date: "May 2023 - Aug 2023",
  },
  {
    company: "Inorium Ltd. (Remote)",
    role: "Frontend Developer",
    date: "Jan 2021 - Apr 2023",
  },
];

export const highlight = {
  badge: "3+ Years",
  title: "Frontend Excellence",
  description:
    "Led frontend teams, built 100+ sales products, and reduced project completion time by 20%.",
};

export const services: ServiceItem[] = [
  {
    iconClass: "fab fa-react blue",
    title: "React and Next.js",
    subtitle: "SSR, SSG, Redux, Jest, REST API",
  },
  {
    iconClass: "fab fa-js-square",
    iconStyle: { color: "#f0db4f" },
    title: "JavaScript / TS",
    subtitle: "ES6+, TypeScript, Redux, CI/CD",
  },
  {
    iconClass: "fas fa-paint-brush green",
    title: "UI and Styling",
    subtitle: "TailwindCSS, SCSS, Bootstrap",
  },
  {
    iconClass: "fab fa-git-alt red",
    title: "Workflow",
    subtitle: "Git, GitHub, GulpJS",
  },
  {
    iconClass: "fas fa-rocket",
    iconStyle: { color: "#bf5af2" },
    title: "Performance",
    subtitle: "Optimization, Real-time Apps",
  },
  {
    iconClass: "fas fa-layer-group",
    iconStyle: { color: "#ff9f0a" },
    title: "Theming",
    subtitle: "Ghost CMS, Templates",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    href: "#",
    className: "card project-card p-1",
    iconClass: "fas fa-gamepad",
    tag: "Gaming Platform",
    title: "Goldriders",
    description:
      "Scalable gaming platform built with Next.js and Zustand, with optimized rendering.",
  },
  {
    href: "#",
    className: "card project-card p-2",
    iconClass: "fas fa-users",
    tag: "Social Media",
    title: "Social Platform",
    description:
      "Paid social media app with real-time chat, membership system, and advanced post interactions.",
  },
  {
    href: "#",
    className: "card project-card p-3",
    iconClass: "fas fa-bolt",
    tag: "Live Gaming",
    title: "Stakegame",
    description:
      "Frontend for a live gaming platform focused on performance and real-time user interaction.",
  },
];

export const certifications: Certification[] = [
  {
    title: "Web Design Certificate",
    iconClass: "fas fa-palette",
    label: "Web Design",
  },
  {
    title: "Web Development Certificate",
    iconClass: "fas fa-code",
    label: "Web Dev",
  },
  {
    title: "English Proficiency - Native Level",
    iconClass: "fas fa-language",
    label: "English Native",
  },
  {
    title: "Bangla - Native Level",
    iconClass: "fas fa-globe",
    label: "Bangla Native",
  },
];

export const contactForm = {
  action: "https://formspree.io/f/mnnebybn",
  method: "POST",
  title: "Let's Talk",
  description: "Have a project in mind? Send me a direct message.",
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Bangladesh National University",
    date: "09/2015 - 01/2020",
    grade: "2.65 Out of 4.00",
    courses: "Business Studies",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Khan Saheb Kamaruddin College",
    date: "01/2013 - 03/2015",
    grade: "3.25 Out of 5.00",
    courses: "Business Studies",
  },
];

export const languages = ["English (Native)", "Bangla (Native)"];

export const interests = [
  "Reading Books",
  "Collecting Stamps",
  "Travelling",
  "Playing with AI",
];

export const modalContent = {
  title: "Full Professional Profile",
  subtitle: "Extended details, tech stack, and complete portfolio.",
  aboutTitle: "About Me",
  aboutText:
    "Frontend Developer with 3+ years of experience building high-performance SaaS and real-time applications using Next.js, TypeScript, and React. Experienced in leading frontend teams, optimizing performance, and developing scalable web applications with modern state management and API integration. Based in Dhaka, Bangladesh and open to remote opportunities.",
  projectTitle: "Project Portfolio",
  stackTitle: "Full Tech Stack",
  footerLabel: "View Full Profile on LinkedIn",
  footerHref: "https://www.linkedin.com/in/abrahman",
};

export const portfolioProjects: PortfolioProject[] = [
  {
    href: "#",
    iconClass: "fas fa-gamepad",
    title: "Goldriders",
    subtitle: "Gaming Platform — Next.js, Zustand",
  },
  {
    href: "#",
    iconClass: "fas fa-users",
    title: "Social Platform",
    subtitle: "Real-time chat, membership, Next.js",
  },
  {
    href: "#",
    iconClass: "fas fa-bolt",
    title: "Stakegame",
    subtitle: "Live Gaming Frontend",
  },
  {
    href: "#",
    iconClass: "fas fa-cut",
    title: "Salon Service",
    subtitle: "HTML, SCSS, jQuery, GulpJS",
  },
];

export const stackTags: string[] = [
  "HTML",
  "CSS / SCSS",
  "TailwindCSS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "Next.js",
  "SSR / SSG",
  "Redux",
  "Zustand",
  "PHP",
  "Laravel",
  "MySQL",
  "Git",
  "GitHub",
  "GulpJS",
];
