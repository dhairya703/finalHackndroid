"use client";

import Image from "next/image";
import { SocialIcon } from "./svg/icons";
import SectionLayout from "@/layouts/section-layout";
import { CustomLink } from "@/components/custom";

const Connect = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col justify-center gap-12 py-6 font-secondary text-white lg:py-12 -my-6 md:-my-16">
        <div className="flex flex-wrap justify-between gap-2 align-middle sm:gap-4">
          <p className="flex flex-wrap text-3xl lowercase leading-tight tracking-wide sm:text-4xl md:max-w-[80%] md:text-5xl lg:max-w-[70%] lg:text-6xl xl:max-w-[60%]">
            Want to&nbsp;
            <span className="whitespace-nowrap text-secondary">KNOW MORE?</span>
            connect with us.
          </p>

          <Image
            src="/icons/connect.svg"
            width={125}
            height={64}
            alt="Techetics Logo"
            priority
          />
        </div>

        <div className="z-10 flex w-fit flex-col gap-4 self-center">
          <p className="w-fit text-justify font-secondary text-lg font-medium text-primary md:text-xl">
            GET IN TOUCH
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 lg:justify-center lg:gap-12">
            <div className="flex gap-4">
              <Image
                src="/icons/arrow.svg"
                width={24}
                height={24}
                alt="Arrow Icon"
                priority
              />
              <CustomLink
                href="mailto:code@cce.edu.in"
                className="font-tertiary text-xl font-semibold hover:text-tertiary md:text-2xl xl:text-3xl"
              >
                code@cce.edu.in
              </CustomLink>
            </div>
            <div className="flex gap-4 self-center">
              <Image
                src="/icons/arrow.svg"
                width={24}
                height={24}
                alt="Arrow Icon"
                priority
              />
              <div className="flex flex-wrap font-tertiary text-lg font-extrabold md:text-xl xl:text-2xl">
                <CustomLink
                  href="tel:+91 9400743624"
                  className="whitespace-nowrap hover:text-tertiary"
                >
                  +91 9400743624
                </CustomLink>
                ,&nbsp;
                <CustomLink
                  href="tel:+91 7994043754"
                  className="whitespace-nowrap hover:text-tertiary"
                >
                  +91 7994043754
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

const SocialConnect = () => {
  return (
    <SectionLayout full>
      <div className="flex flex-col overflow-clip lg:flex-row">
        {/* Left Section */}
        <div className="z-10 flex flex-col items-center justify-center gap-6 border-r border-transparent px-6 py-6 lg:w-1/2 lg:flex-row lg:border-quarternary lg:p-12">
          <div className="flex gap-4">
            <CustomLink href="https://cce.edu.in">
              <Image
                src="/logos/cce-logo.png"
                width={280}
                height={280}
                alt="Christ College of Engineering Logo"
                priority
                className="h-20 w-auto"
              />
            </CustomLink>
            <CustomLink href="https://cce.edu.in/department/associations/1">
              <Image
                src="/logos/code-logo.png"
                width={280}
                height={280}
                alt="CODe Logo"
                priority
                className="h-20 w-auto"
              />
            </CustomLink>
          </div>

          <Image
            src="/icons/join.svg"
            width={280}
            height={280}
            alt="Connect Icon"
            priority
            className="h-6 w-auto"
          />

          {/* <CustomLink href="https://techletics-24.vercel.app"> */}
          <Image
            src="/logos/techletics-logo.svg"
            width={280}
            height={280}
            alt="Techletics Logo"
            priority
            className="h-20 w-auto"
          />
          {/* </CustomLink> */}
        </div>

        {/* Right Section */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 px-12 py-6 md:gap-8 lg:w-1/2 lg:p-12">
          <p className="text-md whitespace-nowrap font-secondary font-medium text-primary lg:text-lg">
            FOLLOW US
          </p>

          <div className="flex gap-6">
            <CustomLink
              href="https://instagram.com/designathon.in"
              className="h-16 w-16 rounded-full bg-white p-4 hover:bg-tertiary"
            >
              <SocialIcon logo="instagram" />
            </CustomLink>
            <CustomLink
              href="https://www.linkedin.com/company/code-design-week/"
              className="h-16 w-16 rounded-full bg-white p-4 hover:bg-tertiary"
            >
              <SocialIcon logo="linkedin" />
            </CustomLink>
            <CustomLink
              href="https://www.facebook.com/CODe.cce/"
              className="h-16 w-16 rounded-full bg-white p-4 hover:bg-tertiary"
            >
              <SocialIcon logo="facebook" />
            </CustomLink>
          </div>

          <Image
            src="/logos/techletics-metal.svg"
            width={480}
            height={480}
            alt="Techetics Logo"
            priority
            className="absolute -top-12 left-1/3 z-[-1] -rotate-[35deg] opacity-15"
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export { SocialConnect, Connect };
