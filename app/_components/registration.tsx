"use client";

import Image from "next/image";
import Script from "next/script";

const Registration = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-6 pb-6 pt-0 sm:pt-8 md:-mb-12 md:mt-12 md:pb-8 xl:pb-4">
      <Image
        src="/images/cube.webp"
        alt="Cube Image"
        width={1313}
        height={960}
        priority
        className="relative bottom-0 left-0 z-10 w-full max-w-3xl md:absolute md:opacity-30 lg:opacity-15 xl:opacity-50 2xl:opacity-100"
      />

      <div className="flex w-full items-center justify-center">
        <div className="z-10 flex w-full max-w-lg flex-col gap-6 md:pb-28 lg:ml-auto">
          <div className="w-full rounded-xl border border-primary bg-primary bg-opacity-15 px-6 py-3 text-center font-secondary text-lg text-primary sm:px-0 sm:text-xl md:text-2xl xl:text-3xl">
            REGISTER FOR FREE
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="flex flex-wrap font-secondary text-[5.5vw] lowercase tracking-wider text-white sm:py-1 sm:text-[5.7vw] md:text-[38px]">
              Application&nbsp;
              <span className="whitespace-nowrap">closes on</span>
            </span>
            <span className="flex flex-wrap font-tertiary text-[5vw] font-medium tracking-wider text-white md:text-[64px]">
              <span className="whitespace-nowrap">FEB 22,&nbsp;</span>
              <span>2024</span>
            </span>
          </div>
          <Script defer async src="https://apply.devfolio.co/v2/sdk.js" />
          <div className="relative flex h-[56px] w-full items-center justify-center overflow-clip rounded-xl bg-white">
            <div className="absolute flex origin-center scale-75 items-center justify-center sm:relative sm:w-full sm:scale-100">
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
    </div>
  );
};

export default Registration;
