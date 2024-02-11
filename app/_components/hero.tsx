import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex h-fit items-center justify-center overflow-hidden pt-8 sm:pt-12">
      <div className="flex h-fit flex-col items-center justify-evenly gap-4 overflow-hidden md:flex-row md:justify-center md:gap-0 md:px-8 lg:justify-center lg:gap-[6%] lg:px-36 xl:gap-[10%] xl:px-48">
        <div className="-mb-[120px] flex origin-top scale-75 transform flex-col items-center justify-center gap-12 md:-ml-10 lg:my-auto lg:-ml-4 lg:origin-center xl:ml-0 xl:scale-100">
          <div className="flex flex-col">
            <span className="text-center font-tertiary text-3xl font-extrabold text-white">
              28
              <span className="text-tertiary">&nbsp;&</span>
              &nbsp;29 FEB,&nbsp;
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
            <span className="text-center font-secondary text-2xl lowercase tracking-wider text-primary">
              BIGGER<span className="text-secondary">.&nbsp;</span>GRANDER
              <span className="text-secondary">.&nbsp;</span>WILDER
              <span className="text-secondary">.</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-evenly gap-4">
            <div className="flex flex-col px-2 text-center">
              <p className="font-tertiary text-6xl font-extrabold text-tertiary">
                12
              </p>
              <p className="font-secondary text-xl lowercase text-white md:text-2xl">
                Hours
              </p>
            </div>
            <div className="flex flex-col px-2 text-center">
              <p className="font-tertiary text-6xl font-extrabold text-tertiary">
                18k
              </p>
              <p className="font-secondary text-xl lowercase text-white md:text-2xl">
                Prizepool
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/images/hero-img.png"
          width={1047}
          height={960}
          alt="Designathon Image"
          priority
          className="h-auto w-full max-w-96 px-2 md:w-[50%] md:max-w-none xl:w-[60%] xl:max-w-[960px]"
        />
      </div>
    </div>
  );
};

export default Hero;
