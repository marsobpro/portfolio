import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  { title: "Linkedin", href: "#" },
  { title: "Email", href: "#" },
  { title: "Github", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8">
            {footerLinks.map(link => (
              <a className="inline-flex items-center gap-1.5" href={link.href}>
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
