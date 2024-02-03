import Image from "next/image";

const CollegeBanner = () => {
  return (
    <div className="relative h-full w-full">
      <div className="h-full min-h-60 w-full">
        <Image
          src="/images/college.webp"
          width={4096}
          height={803}
          alt="College"
          priority
          className="min-h-60 object-cover"
        />
      </div>

      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-1 text-center font-secondary tracking-wider sm:gap-5 xl:-mt-4">
        <span className="text-xl lowercase  text-primary md:-mt-2 md:text-2xl lg:text-3xl xl:-mt-4">
          hackathon venue
        </span>
        <span className="text-2xl lowercase text-white md:text-3xl lg:text-4xl xl:-mt-2">
          christ college of engineering
        </span>
        <span className="xs:pt-2 font-tertiary text-lg font-semibold tracking-normal text-tertiary md:-mt-2 lg:text-xl xl:-mt-6">
          Irinjalakuda, Thrissur, Kerala
        </span>
      </div>
    </div>
  );
};

export default CollegeBanner;
