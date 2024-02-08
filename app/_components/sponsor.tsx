"use client";

import Image from "next/image";
import Link from "next/link";
import DEVFOLIO from "@/public/sponsors/devfolio.png";
import POLYGON from "@/public/sponsors/polygon.png";
import REPLIT from "@/public/sponsors/replit.png";
import SOLANA from "@/public/sponsors/solana.png";
import FILECOIN from "@/public/sponsors/filecoin.png";

const Sponsors = () => {
  const sponsors = [
    {
      logo: DEVFOLIO,
      url: "https://devfolio.co/",
      alt: "DEVFOLIO LOGO",
    },
    // {
    //   logo: POLYGON,
    //   url: "https://polygon.technology/",
    //   alt: "POLYGON LOGO",
    // },
    // {
    //   logo: REPLIT,
    //   url: "https://replit.com/",
    //   alt: "REPLIT LOGO",
    // },
    // {
    //   logo: SOLANA,
    //   url: "https://solana.com/",
    //   alt: "SOLANA LOGO",
    // },
    // {
    //   logo: FILECOIN,
    //   url: "https://filecoin.io/",
    //   alt: "FILECOIN LOGO",
    // },
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
