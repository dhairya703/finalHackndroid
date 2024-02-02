import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-between px-20 items-center h-screen overflow-hidden bg-dark">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col justify-center items-center">
          <span className="text-center font-tertiary font-extrabold text-3xl text-white">
            28&nbsp;
            <span className="text-tertiary">&</span>
            &nbsp;29&nbsp;FEB,&nbsp;
            <span className="text-tertiary">2024</span>
          </span>

          <Image
            src="/logos/hero-logo.svg"
            width={360}
            height={270}
            alt="Designathon Logo"
            priority
            className="-my-2"
          />
          <span className="text-center font-secondary lowercase text-2xl text-primary tracking-wider">
            BIGGER<span className="text-secondary">.&nbsp;</span>GRANDER
            <span className="text-secondary">.&nbsp;</span>WILDER
            <span className="text-secondary">.</span>
          </span>
        </div>

        <div className="flex justify-evenly flex-wrap gap-4">
          <div className="flex flex-col px-2 text-center">
            <p className="font-tertiary text-tertiary text-6xl font-extrabold">
              12
            </p>
            <p className="text-white font-secondary text-xl md:text-2xl lowercase">
              Hours
            </p>
          </div>

          <div className="flex flex-col px-2 text-center">
            <p className="font-tertiary text-tertiary text-6xl font-extrabold">
              20k
            </p>
            <p className="text-white font-secondary text-xl md:text-2xl lowercase">
              Prizepool
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/images/hero-img.svg"
        width={698}
        height={640}
        alt="Designathon Image"
        priority
        className=""
      />
    </div>
  );
};

export default Hero;
