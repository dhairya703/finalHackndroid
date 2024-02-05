import Image from "next/image";
import DEVFOLIO from "@/public/sponsors/devfolio.png";
import POLYGON from "@/public/sponsors/polygon.png";
import REPLIT from "@/public/sponsors/replit.png";
import SOLANA from "@/public/sponsors/solana.png";
import FILECOIN from "@/public/sponsors/filecoin.png";
import Link from "next/link";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center font-secondary">
      <div className="text-3xl text-white sm:text-6xl">
        <span className="text-tertiary">partnering</span> with
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-8 p-7 opacity-50 sm:gap-16">
        <Link href="https://devfolio.co/">
          <Image
            className="text-white"
            src={DEVFOLIO}
            height={30}
            alt="DEVFOLIO LOGO"
          />
        </Link>
        <Link href="https://polygon.technology/">
          <Image
            className="text-white"
            src={POLYGON}
            height={30}
            alt="POLYGON LOGO"
          />
        </Link>
        <Link href="https://replit.com">
          <Image
            className="text-white"
            src={REPLIT}
            height={30}
            alt="REPLIT LOGO"
          />
        </Link>
        <Link href="https://solana.com">
          <Image
            className="text-white"
            src={SOLANA}
            height={30}
            alt="SOLANA LOGO"
          />
        </Link>
        <Link href="https://filecoin.io">
          <Image
            className="text-white"
            src={FILECOIN}
            height={30}
            alt="FILECOIN LOGO"
          />
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
