import Link from "next/link";
import React, { memo, PropsWithChildren } from "react";
import { NavItem } from "@/utils/constants";

interface CustomLinkProps {
  item: NavItem;
  className?: string;
}

const CustomLink = memo(
  ({
    item: { isExternal, href, title },
    className,
    children,
  }: PropsWithChildren<CustomLinkProps>) => {
    return isExternal ? (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
        {children}
      </a>
    ) : (
      <Link className={className} href={href} passHref>
        {title}
        {children}
      </Link>
    );
  }
);

CustomLink.displayName = "CustomLink";
export default CustomLink;
