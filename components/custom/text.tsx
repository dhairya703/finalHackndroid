"use client";

import { useContext } from "react";
import { MouseEventHandler, ReactNode } from "react";

interface CustomTextProps {
  children: ReactNode;
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: MouseEventHandler<HTMLAnchorElement>;
  title?: boolean;
  highlightedTitle?: boolean;
  description?: boolean;
  highlightedDescription?: boolean;
  numeric?: boolean;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  title = false,
  highlightedTitle = false,
  description = false,
  highlightedDescription = false,
  numeric = false,
}) => {
  let className = numeric
    ? "font-tertiary font-extrabold "
    : title || highlightedTitle
    ? "font-secondary "
    : "font-tertiary ";

  className += description
    ? "font-regular "
    : highlightedDescription
    ? "font-extrabold "
    : "";

  if (title)
    className +=
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:max-w-[95%] xl:max-w-[80%] leading-tight tracking-wide lowercase flex flex-wrap text-white text-right self-end";
  else if (highlightedTitle)
    className +=
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:max-w-[95%] xl:max-w-[80%] leading-tight tracking-wide lowercase flex flex-wrap text-secondary whitespace-nowrap";
  else if (description)
    className += "text-md md:text-xl lg:text-2xl text-justify text-white";
  else if (highlightedDescription)
    className += "text-md md:text-xl lg:text-2xl text-justify text-white";

  return <span className={className}>{children}</span>;
};

export default CustomText;
