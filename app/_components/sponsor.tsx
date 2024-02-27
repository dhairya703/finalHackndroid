"use client";
import Image from "next/image";
import Link from "next/link";
import DEVFOLIO from "@/public/sponsors/devfolio.png";
import MULEARN from "@/public/sponsors/mulearn.png";
import FUNDESIGN from "@/public/sponsors/fundesign.png";

const Sponsors = () => {
  const sponsors = [
    {
      logo: DEVFOLIO,
      url: "https://devfolio.co/",
      alt: "DEVFOLIO LOGO",
    },
    {
      logo: FUNDESIGN,
      url: "https://fundesign.in",
      alt: "FUNDESIGN LOGO",
    },
    {
      logo: MULEARN,
      url: "https://mulearn.org",
      alt: "MULEARN LOGO",
    },
  ];
  return (
    <div className="z-10 flex flex-col items-center justify-center font-secondary">
      <div className="text-3xl text-white sm:text-6xl">
        <span className="text-tertiary">partnering</span> with
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-8 py-7 sm:gap-16">
        {sponsors.map((sponsor) => (
          <Link key={sponsor.url} href={sponsor.url} className="cursor-pointer">
            <Image
              src={sponsor.logo}
              className="opacity-50 transition duration-200 ease-in hover:opacity-100"
              height={33}
              onClick={() => window.open(sponsor.url)}
              alt={sponsor.alt}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
