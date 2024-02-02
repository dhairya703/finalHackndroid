"use client";

import clsx from "clsx";
import Link from "next/link";
import { ReactNode, useContext } from "react";
import AnimatedSectionLayout from "./animated-section-layout";

interface SectionProps {
  children: ReactNode;
  full?: boolean;
  float?: boolean;
  explorable?: boolean;
  navigate?: string;
  noanimation?: boolean;
}

const SectionLayout = ({
  children,
  full = false,
  float = false,
  explorable = false,
  navigate = "",
  noanimation = true,
}: SectionProps) => {
  return (
    <div
      className={clsx(
        "px-6 sm:px-12 bg-dark border border-x-0 border-t-0 border-quarternary",
        {
          "z-10 fixed top-0 left-0 right-0": float,
        }
      )}
    >
      <div
        className={clsx("relative border-quarternary border border-y-0", {
          "px-4 py-2 sm:px-8 sm:py-4 lg:px-16 lg:py-9": !full,
          "pb-10": explorable,
        })}
      >
        <AnimatedSectionLayout
          noanimation={noanimation}
          initial={{ opacity: 0, scale: 0, translateY: 50 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          viewPort={{ once: true }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
        >
          {children}
        </AnimatedSectionLayout>
      </div>
    </div>
  );
};

export default SectionLayout;
