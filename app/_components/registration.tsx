"use client";

import Image from "next/image";
import Script from "next/script";

const Registration = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 pb-6 pt-0 sm:pt-12 md:pt-24 xl:pt-48">
      <Image
        src="/images/cube.webp"
        alt="Cube Image"
        width={1313}
        height={960}
        priority
        className="relative left-0 z-10 w-full max-w-3xl 2xl:absolute"
      />

      <div className="z-10 ml-auto flex min-w-full flex-col  gap-6">
        <div className="w-full rounded-lg bg-primary px-6 py-2 text-center font-secondary text-lg text-dark sm:px-0 sm:text-xl md:text-2xl xl:text-3xl">
          REGISTER FOR FREE
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="flex flex-wrap font-secondary text-xl lowercase tracking-wider text-white sm:text-4xl">
            Application&nbsp;
            <span className="whitespace-nowrap">closes on&nbsp;</span>
          </span>
          <span className="flex flex-wrap font-tertiary text-3xl font-extrabold tracking-wider text-white sm:text-6xl">
            <span className="whitespace-nowrap">FEB 20,&nbsp;</span>
            <span>2024</span>
          </span>
        </div>

        <Script defer async src="https://apply.devfolio.co/v2/sdk.js" />

        <div className="relative flex h-[44px] w-full items-center justify-center overflow-clip rounded-lg bg-white">
          <div className="absolute flex origin-left scale-75 items-center justify-center sm:relative sm:w-full sm:origin-center sm:scale-100">
            <div
              className="apply-button"
              data-hackathon-slug="designathon24"
              data-button-theme="dark-inverted"
              style={{ height: "44px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
