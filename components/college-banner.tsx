import Image from "next/image";

const CollegeBanner = () => {
  return (
<div className="relative w-full flex justify-center">
  <div className="w-full">
    <Image
      src="/images/college1.png"
      width={1920}  // High-resolution for full width
      height={800}  // Adjusted height to maintain aspect ratio
      alt="College"
      priority
      className="w-full h-auto object-cover filter grayscale"
    />
  </div>


 
  

      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-top gap-1 text-center font-secondary tracking-wider sm:gap-5 xl:-mt-4">
        <span className="text-xl lowercase  text-primary md:-mt-2 md:text-2xl lg:text-3xl xl:-mt-4">
          hackathon venue
        </span>
        <span className="text-2xl lowercase text-white md:text-3xl lg:text-4xl xl:-mt-2">
          Kasturba Hall, VIT Chennai
        </span>
        <span className="xs:pt-2 font-tertiary text-lg font-semibold tracking-normal text-tertiary md:-mt-2 lg:text-xl xl:-mt-6">
          Kelambakkam, Chennai, Tamil Nadu
        </span>
      </div>
    </div>
  );
};

export default CollegeBanner;
