import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  href?: string;
  isInternalLink?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  variant,
  href,
  isInternalLink = false,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const commonClasses =
    "inline-flex px-6 items-center gap-2 border rounded-xl cursor-pointer";
  const styles = {
    primary: "border-white bg-white text-gray-900 h-12",
    secondary: "border-white/15 h-12",
  };

  const versionClassName = styles[variant];

  // If no href provided, render regular button
  if (!href) {
    return (
      <button
        className={`${commonClasses} ${versionClassName}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
    // For internal links return Link from next.js
  } else if (isInternalLink) {
    return (
      <Link className={`${commonClasses} ${versionClassName}`} href={href}>
        {children}
      </Link>
    );
    // For external links use standard anchor tag
  } else {
    return (
      <a
        className={`${commonClasses} ${versionClassName}`}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
  }
};

export default Button;
