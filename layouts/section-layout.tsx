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
  gapless?: boolean;
}

const SectionLayout = ({
  children,
  full = false,
  float = false,
  explorable = false,
  navigate = "",
  noanimation = true,
  gapless = false,
}: SectionProps) => {
  return (
    <div
      className={clsx(
        "overflow-clip border border-x-0 border-t-0 border-quarternary px-6 sm:px-12",
        {
          "fixed left-0 right-0 top-0 z-10": float,
        },
      )}
    >
      <div
        className={clsx("relative border border-y-0 border-quarternary", {
          "px-6 py-12 sm:px-12 sm:py-20 lg:px-16 lg:py-24 xl:px-32 xl:py-32 2xl:px-48":
            !full,
          "pb-12": explorable,
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
          <div className={clsx({ "flex flex-col gap-24": !gapless })}>
            {children}
          </div>
        </AnimatedSectionLayout>
      </div>
    </div>
  );
};

export default SectionLayout;
