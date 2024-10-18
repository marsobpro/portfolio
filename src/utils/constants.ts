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
