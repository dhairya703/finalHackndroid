"use client";

import Image from "next/image";
import { SocialIcon } from "./svg/icons";
import { CustomLink } from "@/components/custom";

const Connect = () => {
  return (
    <div className="flex flex-col justify-center gap-16 py-12 font-secondary text-white relative">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="flex flex-wrap justify-between items-center gap-8 border-b border-white/10 pb-12 relative z-10">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
          KNOW <span className="text-primary text-glow-purple">MORE?</span>
        </h2>

        <Image
          src="/icons/connect.svg"
          width={100}
          height={50}
          alt="Connect Icon"
          className="filter invert brightness-100 opacity-50"
        />
      </div>

      <div className="flex flex-col items-center gap-12 relative z-10">
        <div className="glass-card px-8 py-3 rounded-full border border-white/10 bg-white/5 shadow-glow-purple">
          <p className="text-lg md:text-2xl font-black uppercase tracking-widest text-white">
            GET IN TOUCH
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex items-center gap-6 group">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary transition-all duration-500">
              <Image
                src="/icons/arrow.svg"
                width={24}
                height={24}
                alt="Arrow"
                className="filter invert opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
              />
            </div>
            <CustomLink
              href="mailto:androidclub@vit.ac.in"
              className="font-vcr text-2xl md:text-4xl font-black hover:text-primary transition-colors tracking-tighter"
            >
              androidclub@vit.ac.in
            </CustomLink>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-tertiary/20 group-hover:border-tertiary transition-all duration-500">
              <Image
                src="/icons/arrow.svg"
                width={24}
                height={24}
                alt="Arrow"
                className="filter invert opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 font-vcr text-2xl md:text-4xl font-black tracking-tighter">
              <CustomLink href="tel:+917305537375" className="hover:text-tertiary transition-colors">+91 7305537375</CustomLink>
              <span className="hidden md:inline text-white/20">|</span>
              <CustomLink href="tel:+919343399132" className="hover:text-tertiary transition-colors">+91 9343399132</CustomLink>
              <span className="hidden md:inline text-white/20">|</span>
              <CustomLink href="tel:+919592042162" className="hover:text-tertiary transition-colors">+91 9592042162</CustomLink>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const SocialConnect = () => {
  return (
    <div className="flex flex-col lg:flex-row glass-card rounded-[3rem] border-white/5 overflow-hidden mb-12 shadow-2xl relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5 pointer-events-none"></div>

      {/* Left Section - Logos */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/5 lg:w-1/2 relative z-10">
        <CustomLink href="https://androidclub.in" className="group">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Image
              src="/logos/androidlogo.jpg"
              width={140}
              height={140}
              alt="Android Club"
              className="relative glass-card p-3 rounded-3xl border-white/10 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </CustomLink>
        <CustomLink href="https://vit.ac.in" className="group">
          <Image
            src="/logos/vitlogo.svg"
            width={120}
            height={100}
            alt="VIT"
            className="filter brightness-0 invert opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        </CustomLink>
      </div>

      {/* Right Section - Socials */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-12 lg:p-16 lg:w-1/2 bg-black/20 relative z-10">
        <p className="text-3xl font-black text-white/40 uppercase tracking-widest leading-none">FOLLOW US</p>

        <div className="flex gap-10">
          <CustomLink
            href="https://www.instagram.com/androidvitc"
            className="group"
          >
            <div className="w-20 h-20 glass-card rounded-2xl flex items-center justify-center border-white/10 group-hover:bg-primary group-hover:shadow-glow-purple group-hover:-translate-y-2 transition-all duration-500">
              <div className="scale-150 group-hover:invert group-hover:brightness-0 transition-all">
                <SocialIcon logo="instagram" />
              </div>
            </div>
          </CustomLink>
          <CustomLink
            href="https://www.linkedin.com/company/android-club-vitc/"
            className="group"
          >
            <div className="w-20 h-20 glass-card rounded-2xl flex items-center justify-center border-white/10 group-hover:bg-tertiary group-hover:shadow-glow-cyan group-hover:-translate-y-2 transition-all duration-500">
              <div className="scale-150 group-hover:invert group-hover:brightness-0 transition-all">
                <SocialIcon logo="linkedin" />
              </div>
            </div>
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export { SocialConnect, Connect };
