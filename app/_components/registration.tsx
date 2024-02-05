"use client";
import Image from "next/image";
import Script from "next/script";
const Registration = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6">
      <Image
        src="/images/cube.webp"
        alt="Cube Image"
        width={1313}
        height={960}
        priority
        className="z-10 w-full max-w-xl"
      />

      <div className="flex flex-col gap-6 sm:ml-auto">
        <div className="flex flex-col justify-center gap-1">
          <span className="flex flex-wrap font-secondary text-3xl lowercase tracking-wider text-white sm:text-4xl">
            Application&nbsp;
            <span className="whitespace-nowrap">closes on&nbsp;</span>
          </span>
          <span className="flex flex-wrap font-tertiary text-5xl font-extrabold tracking-wider text-secondary sm:text-6xl">
            <span className="whitespace-nowrap">FEB 20,&nbsp;</span>
            <span className="text-primary">2024</span>
          </span>
        </div>

        <Script defer async src="https://apply.devfolio.co/v2/sdk.js" />
        <div
          className="apply-button"
          data-hackathon-slug="designathon24"
          data-button-theme="dark-inverted"
          style={{ height: "44px", width: "312px" }}
        ></div>
      </div>
    </div>
  );
};

export default Registration;
