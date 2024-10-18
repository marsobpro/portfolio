import { NavItem, navItems } from "@/utils/constants";
import Link from "next/link";
import { memo } from "react";

const NavLink = memo(
  ({
    item: { external, href, title },
    className,
  }: {
    item: NavItem;
    className: string;
  }) => {
    return external ? (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    ) : (
      <Link className={className} href={href} passHref>
        {title}
      </Link>
    );
  }
);

export const Header = () => {
  const getLinkClassName = (isHighlighted: boolean) =>
    isHighlighted
      ? "nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
      : "nav-item";

  return (
    <header className="w-full flex justify-center items-center fixed top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map(item => {
          const className = getLinkClassName(item.isHighlighted || false);
          return <NavLink item={item} className={className} key={item.title} />;
        })}
      </nav>
    </header>
  );
};
