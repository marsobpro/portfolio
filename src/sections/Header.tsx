import CustomLink from "@/components/CustomLink";
import { navItems } from "@/utils/constants";

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
          return (
            <CustomLink item={item} className={className} key={item.title} />
          );
        })}
      </nav>
    </header>
  );
};
