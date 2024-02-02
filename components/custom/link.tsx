"use client";

import { useContext } from "react";
import Link, { LinkProps } from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
};

export default CustomLink;
