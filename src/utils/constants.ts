import { StaticImageData } from "next/image";
// Projects
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
// Referrals
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
// Hero
import SparkleIcon from "@/assets/icons/sparkle.svg";
import StarIcon from "@/assets/icons/star.svg";
// About
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";

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

// Hero

export const orbitConfig = [
  {
    size: 430,
    rotation: -14,
    orbitDuration: "28s",
    icon: SparkleIcon,
    iconSize: 8,
    shouldOrbit: true,
    shouldSpin: true,
    spinDuration: "3s",
  },
  {
    size: 440,
    rotation: 79,
    orbitDuration: "32s",
    icon: SparkleIcon,
    iconSize: 5,
    shouldOrbit: true,
    shouldSpin: true,
    spinDuration: "3s",
  },
  {
    size: 520,
    rotation: -41,
    orbitDuration: "36s",
    icon: "circle",
    iconSize: 4,
    shouldOrbit: true,
  },
  {
    size: 530,
    rotation: 178,
    orbitDuration: "36s",
    icon: SparkleIcon,
    iconSize: 10,
    shouldOrbit: true,
    shouldSpin: true,
    spinDuration: "3s",
  },
  {
    size: 550,
    rotation: 20,
    orbitDuration: "38s",
    icon: StarIcon,
    iconSize: 12,
    shouldOrbit: true,
    shouldSpin: true,
    spinDuration: "6s",
  },
  {
    size: 590,
    rotation: 98,
    orbitDuration: "40s",
    icon: StarIcon,
    iconSize: 8,
    shouldOrbit: true,
    shouldSpin: true,
    spinDuration: "6s",
  },
  {
    size: 650,
    rotation: -5,
    orbitDuration: "42s",
    icon: "circle",
    iconSize: 2,
    shouldOrbit: true,
  },
  {
    size: 710,
    rotation: 144,
    orbitDuration: "44s",
    icon: SparkleIcon,
    iconSize: 20,
    shouldOrbit: true,
    spinDuration: "6s",
  },
  {
    size: 720,
    rotation: 85,
    orbitDuration: "46s",
    icon: "circle",
    iconSize: 4,
    shouldOrbit: true,
    spinDuration: "6s",
  },
  {
    size: 800,
    rotation: -72,
    orbitDuration: "48s",
    icon: StarIcon,
    iconSize: 8,
    shouldOrbit: true,
    shouldSpin: true,
    spinDuration: "10s",
  },
  {
    size: 800,
    rotation: 85,
    orbitDuration: "22s",
    icon: "circle",
    iconSize: 4,
    shouldOrbit: true,
    spinDuration: "6s",
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

// Tape
export const tapeWords: string[] = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Optimized",
  "Reliable",
  "Efficient",
  "Innovative",
];

// Referrals

export interface Referral {
  name: string;
  position: string;
  text: string;
  avatar: StaticImageData | string;
}

export const referrals: Referral[] = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

// About me
export const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

export const hobbies = [
  { title: "Painting", emoji: "🎨", left: "5%", top: "5%" },
  { title: "Photography", emoji: "📸", left: "50%", top: "5%" },
  { title: "Hiking", emoji: "🥾", left: "35%", top: "40%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
  { title: "Music", emoji: "🎵", left: "70%", top: "45%" },
  { title: "Fitness", emoji: "🏋️‍♂️", left: "5%", top: "65%" },
  { title: "Reading", emoji: "📖", left: "45%", top: "70%" },
];
