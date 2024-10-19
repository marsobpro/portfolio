import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CustomLink from "@/components/CustomLink";
import { footerLinks } from "@/utils/constants";

const FooterContent = () => (
  <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
    <div className="text-white/40">&copy; 2024. All rights reserved.</div>
    <nav className="flex flex-col md:flex-row items-center gap-8">
      {footerLinks.map(item => (
        // <a
        //
        //   href={href}
        // >
        //   <span className="font-semibold">{title}</span>
        //
        // </a>
        //             <CustomLink item={item} className={className} key={item.title} />
        <CustomLink
          item={item}
          className="inline-flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowUpRightIcon className="size-4" />
        </CustomLink>
      ))}
    </nav>
  </div>
);

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Bg gradient */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
      <div className="container">
        <FooterContent />
      </div>
    </footer>
  );
};
