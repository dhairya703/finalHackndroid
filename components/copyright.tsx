import { CustomLink } from "@/components/custom";

const Copyright = () => {
  return (
    <div className="relative min-h-16 flex items-center justify-center overflow-clip">
      <div className="absolute mt-2 md:mt-8">
        <span className="text-stroke-secondary opacity-30 font-bold text-transparent lowercase font-secondary text-8xl md:text-9xl whitespace-nowrap tracking-widest leading-none align-middle">
          ͲechlςͲics
        </span>
      </div>
      <div>
        <span className="text-sm sm:text-md md:text-lg text-white font-tertiary items-center justify-center flex flex-wrap">
          <span className="whitespace-nowrap">Copyright © 2024&nbsp;</span>
          <CustomLink
            href="https://cce.edu.in"
            className="text-tertiary whitespace-nowrap"
          >
            Christ College of Engineering.&nbsp;
          </CustomLink>
          <span className="whitespace-nowrap">All Rights Reserved</span>
        </span>
      </div>
    </div>
  );
};

export default Copyright;
