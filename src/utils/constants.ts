import { StaticImageData } from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

//Header

export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
  isHighlighted?: boolean;
}

export const navItems: NavItem[] = [
  { title: "Home", href: "#", isHighlighted: false },
  { title: "Projects", href: "#projects", isHighlighted: false },
  { title: "About", href: "#about", isHighlighted: false },
  {
    title: "Contact",
    href: "https://www.linkedin.com/in/marcin-sobieraj/",
    external: true,
    isHighlighted: true,
  },
];

// Projects

interface Result {
  title: string;
}

export interface Project {
  company: string;
  year: string;
  title: string;
  results: Result[];
  link: string;
  image: StaticImageData | string;
}

export const portfolioProjects: Project[] = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];
