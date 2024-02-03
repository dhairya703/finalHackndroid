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
  className?: string;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  title = false,
  highlightedTitle = false,
  description = false,
  highlightedDescription = false,
  numeric = false,
  className,
}) => {
  let baseClassName = numeric
    ? "font-tertiary font-extrabold "
    : title || highlightedTitle
      ? "font-secondary "
      : "font-tertiary ";

  baseClassName += description
    ? "font-regular "
    : highlightedDescription
      ? "font-extrabold "
      : "";

  if (title)
    baseClassName +=
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:max-w-[95%] xl:max-w-[80%] leading-tight tracking-wide lowercase flex flex-wrap text-white";
  else if (highlightedTitle)
    baseClassName +=
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:max-w-[95%] xl:max-w-[80%] leading-tight tracking-wide lowercase flex flex-wrap text-secondary whitespace-nowrap";
  else if (description)
    baseClassName += "text-md md:text-xl lg:text-2xl text-justify text-white";
  else if (highlightedDescription)
    baseClassName += "text-md md:text-xl lg:text-2xl text-justify text-white";

  const finalClassName = `${baseClassName}${className ? " " + className : ""}`;

  return <span className={finalClassName}>{children}</span>;
};

export default CustomText;
