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
import GithubIcon from "@/assets/icons/github.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import SassIcon from "@/assets/icons/sass.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import TSIcon from "@/assets/icons/ts.svg";

//Header
export interface NavItem {
  title: string;
  href: string;
  isExternal?: boolean;
  isHighlighted?: boolean;
}

export const navItems: NavItem[] = [
  { title: "Home", href: "#", isHighlighted: false },
  { title: "Projects", href: "#projects", isHighlighted: false },
  { title: "About", href: "#about", isHighlighted: false },
  {
    title: "Contact",
    href: "https://www.linkedin.com/in/marcin-sobieraj/",
    isExternal: true,
    isHighlighted: true,
  },
];

// Hero
const icons = {
  circle: "circle",
  sparkle: SparkleIcon,
  star: StarIcon,
};

export const orbitConfig = [
  {
    size: 430,
    rotation: -14,
    orbitDuration: "38s",
    icon: icons.sparkle,
    iconSize: 8,
    shouldOrbit: true,
    shouldSpin: true,
    spinDuration: "3s",
  },
  {
    size: 440,
    rotation: 79,
    orbitDuration: "42s",
    icon: icons.sparkle,
    iconSize: 5,
    shouldOrbit: true,
    shouldSpin: true,
    spinDuration: "3s",
  },
  {
    size: 520,
    rotation: -41,
    orbitDuration: "46s",
    icon: "circle",
    iconSize: 4,
    shouldOrbit: true,
  },
  {
    size: 530,
    rotation: 178,
    orbitDuration: "42s",
    icon: icons.sparkle,
    iconSize: 10,
    shouldOrbit: true,
    shouldSpin: true,
    spinDuration: "3s",
  },
  {
    size: 550,
    rotation: 20,
    orbitDuration: "48s",
    icon: StarIcon,
    iconSize: 12,
    shouldOrbit: true,
    shouldSpin: true,
    spinDuration: "6s",
  },
  {
    size: 590,
    rotation: 98,
    orbitDuration: "50s",
    icon: StarIcon,
    iconSize: 8,
    shouldOrbit: true,
    shouldSpin: true,
    spinDuration: "6s",
  },
  {
    size: 650,
    rotation: -5,
    orbitDuration: "52s",
    icon: "circle",
    iconSize: 2,
    shouldOrbit: true,
  },
  {
    size: 710,
    rotation: 144,
    orbitDuration: "54s",
    icon: icons.sparkle,
    iconSize: 20,
    shouldOrbit: true,
    spinDuration: "6s",
  },
  {
    size: 720,
    rotation: 85,
    orbitDuration: "56s",
    icon: "circle",
    iconSize: 4,
    shouldOrbit: true,
    spinDuration: "6s",
  },
  {
    size: 800,
    rotation: -72,
    orbitDuration: "58s",
    icon: StarIcon,
    iconSize: 8,
    shouldOrbit: true,
    shouldSpin: true,
    spinDuration: "10s",
  },
  {
    size: 800,
    rotation: 85,
    orbitDuration: "32s",
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
    name: "Karina Kupp",
    position: "Creator of Chill Subs",
    text: `(...)  He's fantastic with frontend, <strong>always pays attention to the little details, responsiveness and animations</strong>, and is great at communication if anything needs clarification. </br></br> He also immediately felt part of the team, making everyone laugh from the first Slack exchanges and every daily meeting :) <br/></br> Working at a startup is an intense experience with plans and processes changing all the time, and I really appreciate Marcin being there for the ride and adapting and growing with us <3`,
    avatar: memojiAvatar1,
  },
  {
    name: "Natalia Filip",
    position: "Senior Recruiter",
    text: "I had a real pleasure to work with Marcin. He is very proactive, communicative and open minded person. :)<br/><br/> (...) He has very creative approach, he's not afraid to take initiative. I definitely recommend Marcin, he is great colleague! :)",
    avatar: memojiAvatar2,
  },
  {
    name: "Diana Getka",
    position: "International Business Graduate",
    text: "I had a pleasure to work with Marcin for couple of months. He is always eager to learn new things, very open-minded, focused on development. <br/>He always thinks what would be <strong>the best for the whole team.</strong> Moreover, he’s is a great English speaker. I strongly recommend to work with Marcin! :)",
    avatar: memojiAvatar3,
  },
];

// About me
export const technologyGroupA = [
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
    title: "Sass",
    iconType: SassIcon,
  },
];

export const technologyGroupB = [
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
  {
    title: "Next.js",
    iconType: NextjsIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "TypeScript",
    iconType: TSIcon,
  },
];

export interface Hobby {
  title: string;
  emoji: string;
  left: string;
  top: string;
}

export const hobbies: Hobby[] = [
  { title: "Painting", emoji: "🎨", left: "5%", top: "5%" },
  { title: "Photography", emoji: "📸", left: "50%", top: "5%" },
  { title: "Hiking", emoji: "🥾", left: "35%", top: "40%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
  { title: "Music", emoji: "🎵", left: "70%", top: "45%" },
  { title: "Fitness", emoji: "🏋️‍♂️", left: "5%", top: "65%" },
  { title: "Reading", emoji: "📖", left: "45%", top: "70%" },
];

// Footer

const personalURLs = {
  linkedin: "https://www.linkedin.com/in/marcin-sobieraj/",
  github: "https://github.com/marsobpro",
  email: "mailto:marsobpro@gmail.com",
};

export const footerLinks: NavItem[] = [
  {
    title: "Linkedin",
    href: personalURLs.linkedin,
    isExternal: true,
  },
  { title: "Email", href: personalURLs.email },
  { title: "Github", href: personalURLs.github, isExternal: true },
];
