"use client";
import Image from "next/image";
import Link from "next/link";
import DEALZY from "@/public/sponsors/logo2.png";
import SASHIDO from "@/public/sponsors/logo4.jpg";

const Sponsors = () => {
  const sponsors = [
    {
      logo: DEALZY,
      url: "https://dealzy.app/",
      alt: "DEALZY LOGO",
    },
    {
      logo: SASHIDO,
      url: "https://www.sashido.io/en/",
      alt: "SASHIDO LOGO",
    },
  ];
  return (
    <div className="z-20 flex flex-col items-center justify-center font-secondary">
      <div className="text-3xl text-white sm:text-6xl">
        <span className="text-tertiary">partnering</span> with
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-8 py-7 sm:gap-16">
        {sponsors.map((sponsor) => (
          <Link key={sponsor.url} href={sponsor.url} className="cursor-pointer">
            <Image
              src={sponsor.logo}
              className="opacity-1 transition duration-200 ease-in hover:opacity-100"
              height={60}
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
