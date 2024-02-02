import Image from "next/image";

const Registration = () => {
  return (
    <section className="flex justify-between items-center mt-16 -ml-16 mr-16">
      <Image
        src="/images/cube.webp"
        alt="Cube Image"
        width={766}
        height={560}
        priority
        className="mt-24 z-10"
      />

      <div className="flex flex-col gap-1">
        <span className="font-secondary text-4xl lowercase tracking-wider text-white">
          Application closes on&nbsp;
        </span>
        <span className="font-tertiary font-extrabold text-6xl tracking-wider text-secondary">
          FEB 20,&nbsp;<span className="text-primary">2024</span>
        </span>
      </div>

      {/* <span className="absolute top-28 flex flex-col font-secondary lowercase text-9xl text-transparent tracking-wider text-left text-stroke-secondary opacity-20 z-0">
        <span className="whitespace-nowrap text-stroke-primary">
          BIGGER<span>.&nbsp;</span>
        </span>
        <span className="whitespace-nowrap text-stroke-secondary">
          GRANDER
          <span>.&nbsp;</span>
        </span>
        <span className="whitespace-nowrap text-stroke-tertiary">
          WILDER<span>.&nbsp;</span>
        </span>
      </span> */}
    </section>
  );
};

export default Registration;
