import { StaticImageData } from "next/image";
// Projects
import musicMentorScreen from "@/assets/images/music-mentor.png";
import brainwaveScreen from "@/assets/images/brainwave.png";
import portfolioScreen from "@/assets/images/portfolio.png";
// Referrals
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
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
import goldfinchCover from "@/assets/images/goldfinch.png";
import millionCover from "@/assets/images/million.png";
import mojoCover from "@/assets/images/mojo.png";
import hungerCover from "@/assets/images/hunger.png";
import habitsCover from "@/assets/images/habits.png";

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
    company: "Eye-catching layout",
    year: "2024",
    title: "AI Chat Landing Page",
    results: [
      { title: "Landing page project built using React and TailwindCSS" },
      { title: "Parallax effect for both scroll and mouse movement" },
      { title: "Bento Box design" },
    ],
    link: "https://reactaichat.netlify.app/",
    image: brainwaveScreen,
  },
  {
    company: "More about me",
    year: "2024",
    title: "Personal Portfolio",
    results: [
      {
        title: "TypeScript, Next.js, TailwindCSS",
      },
      {
        title: "Smooth animations and transitions, Framer Motion",
      },
      { title: "Modern, eye-catching layout" },
    ],
    link: "https://msobierajportfolio.netlify.app",
    image: portfolioScreen,
  },
  {
    company: "Find your music teacher",
    year: "2022",
    title: "Music Mentor",
    results: [
      {
        title: "Connects students with music teachers",
      },
      {
        title: "Search and add lessons by instrument and location",
      },
      {
        title: "User registration, login, and password reset",
      },
    ],
    link: "https://clever-rolypoly-d6ccde.netlify.app/",
    image: musicMentorScreen,
  },
];

// Tape
export const tapeWords: string[] = [
  "Dynamic",
  "Intuitive",
  "Modular",
  "Seamless",
  "Refined",
  "Elegant",
  "Collaborative",
  "Adaptive",
  "Thoughtful",
  "Immersive",
  "Helpful",
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
    text: `(...)  He&apos;s fantastic with frontend, <strong>always pays attention to the little details, responsiveness and animations</strong>, and is great at communication if anything needs clarification. </br></br> He also immediately felt part of the team, making everyone laugh from the first Slack exchanges and every daily meeting :) <br/></br> Working at a startup is an intense experience with plans and processes changing all the time, and I really appreciate Marcin being there for the ride and adapting and growing with us <3`,
    avatar: memojiAvatar1,
  },
  {
    name: "Natalia Filip",
    position: "Senior Recruiter",
    text: "I had a real pleasure to work with Marcin. He is very proactive, communicative and open minded person. :)<br/><br/> (...) He has very creative approach, he&apos;s not afraid to take initiative. I definitely recommend Marcin, he is great colleague! :)",
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
  { title: "Badminton", emoji: "🏸", left: "5%", top: "5%" },
  { title: "Piano", emoji: "🎹", left: "50%", top: "5%" },
  { title: "Swimming", emoji: "🏊‍♀️", left: "10%", top: "35%" },
  { title: "Prison Break series", emoji: "👮", left: "60%", top: "45%" },
  { title: "Pilates", emoji: "🤸🏻‍♀️", left: "5%", top: "65%" },
  { title: "Carting", emoji: "🏎️", left: "50%", top: "30%" },
  { title: "Volunteering", emoji: "🫱🏻‍🫲🏽", left: "45%", top: "70%" },
];

interface Book {
  src: StaticImageData | string;
  title: string;
}

export const books: Book[] = [
  {
    src: goldfinchCover,
    title: "The Goldfinch",
  },
  {
    src: habitsCover,
    title: "Atomic Habits",
  },
  {
    src: hungerCover,
    title: "Hunger",
  },
  {
    src: millionCover,
    title: "Million Dollar Weekend",
  },
  {
    src: mojoCover,
    title: "Total Cat Mojo: The Ultimate Guide to Life with Your Cat",
  },
];

// Footer

export const personalURLs = {
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
