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
//   return (
//     <div className="z-10 my-0 flex flex-col items-center justify-center gap-0 font-secondary sm:-my-6 md:-my-12 lg:-my-16 xl:gap-2">
//       <div className="text-center text-3xl tracking-wider text-white sm:text-4xl md:text-5xl lg:text-6xl">
//         <span className="text-tertiary">partnering</span> with
//       </div>
//       <div className="flex flex-wrap items-center justify-center gap-8 py-7 sm:gap-16">
//         {sponsors.map((sponsor) => (
//           <Link key={sponsor.url} href={sponsor.url} className="cursor-pointer">
//             <Image
//               src={sponsor.logo}
//               className="sm:scale-120 opacity-50 transition duration-200 ease-in hover:opacity-100 lg:scale-150"
//               height={28}
//               onClick={() => window.open(sponsor.url)}
//               alt={sponsor.alt}
//             />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Sponsors;
