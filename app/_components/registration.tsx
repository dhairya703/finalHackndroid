"use client";

import Image from "next/image";
import Script from "next/script";

const Registration = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-6 pb-6 pt-0 sm:pt-12 md:flex-row md:pt-24 xl:pt-48">
      <Image
        src="/images/cube.webp"
        alt="Cube Image"
        width={1313}
        height={960}
        priority
        className="z-10 w-full max-w-3xl md:w-1/2"
      />

      <div className="z-10 flex w-full flex-col items-center justify-center gap-6">
        <div className="w-full rounded-lg bg-primary px-6 py-2 text-center font-secondary text-lg text-dark sm:px-0 sm:text-xl md:text-2xl xl:text-3xl">
          REGISTER FOR FREE
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="flex flex-wrap font-secondary text-xl lowercase tracking-wider text-white lg:text-4xl">
            Application&nbsp;
            <span className="whitespace-nowrap">closes on&nbsp;</span>
          </span>
          <span className="flex flex-wrap font-tertiary text-3xl font-extrabold tracking-wider text-white lg:text-6xl">
            <span className="whitespace-nowrap">FEB 20,&nbsp;</span>
            <span>2024</span>
          </span>
        </div>

        <Script defer async src="https://apply.devfolio.co/v2/sdk.js" />

        <div
          className="apply-button"
          data-hackathon-slug="designathon24"
          data-button-theme="dark-inverted"
          style={{ height: "44px" }}
        ></div>
      </div>
    </div>
  );
};

export default Registration;
