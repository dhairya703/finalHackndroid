"use client";  // ✅ Fix for useState issue in Client Components

import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  return (
    <div className="flex h-fit items-center justify-center overflow-hidden pt-8 sm:pt-12">
      <div className="flex h-fit flex-col items-center justify-evenly gap-4 overflow-hidden md:flex-row md:justify-center md:gap-0 md:px-8 lg:justify-center lg:gap-[6%] lg:px-36 xl:gap-[10%] xl:px-48">
        
        {/* Left Section - Text & Logo */}
        <div className="flex origin-top scale-100 transform flex-col items-center justify-center gap-12 md:-ml-10 lg:my-auto lg:-ml-4 lg:origin-center xl:ml-0">
          <div className="flex flex-col items-center justify-center w-full">
            
            {/* Date Text */}
            <span className="text-center font-tertiary text-3xl font-extrabold text-white">
              14th
              <span className="text-tertiary">&nbsp;&</span>
              &nbsp;15th FEB,&nbsp;
              <span className="text-tertiary">2025</span>
            </span>

            {/* Logo Image - Fixed */}
            <Image
              src="/logos/logohaa.png"
              width={700}   
              height={700}  
              alt="Hack-n-droid Logo"
              priority
              className="w-[700px] h-auto mx-auto md:w-[800px] lg:w-[900px]"
            />

            {/* Slogan */}
            <span className="text-center font-secondary text-2xl lowercase tracking-wider text-primary">
              BIGGER<span className="text-secondary">.&nbsp;</span>GRANDER
              <span className="text-secondary">.&nbsp;</span>WILDER
              <span className="text-secondary">.</span>
            </span>
          </div>

          {/* Info Boxes */}
          <div className="flex flex-wrap justify-evenly gap-4">
            {[{ value: "24", label: "Hours" }, { value: "1L+", label: "Prizepool" }].map((item, index) => (
              <div key={index} className="flex flex-col px-2 text-center">
                <p className="font-tertiary text-6xl font-extrabold text-tertiary">{item.value}</p>
                <p className="font-secondary text-xl lowercase text-white md:text-2xl">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Lottie Animation */}
        <DotLottieReact
        width={1044}
        height={960}
          src="https://lottie.host/36c93aa5-189e-481e-998d-71e7a663d861/uNwzlIa57o.lottie"
          loop
          autoplay
        />

        {/* <Image
          src="/images/hero-img.png"
          width={1047}
          height={960}
          alt="Designathon Image"
          priority
          className="h-auto w-full max-w-[960px] px-2 md:w-[50%] md:max-w-none xl:w-[60%]"
        /> */}
      </div>
    </div>
  );
};

export default Hero;
