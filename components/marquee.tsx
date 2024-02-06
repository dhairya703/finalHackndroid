import clsx from "clsx";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface TextMarqueeProps {
  mode?: "light" | "dark";
}

const TextMarquee = ({ mode = "light" }: TextMarqueeProps) => {
  return (
    <Marquee>
      {[...Array(10)].map((index) => (
        <p
          key={index}
          className={clsx(
            "flex gap-3 pt-3 font-secondary text-2xl md:text-3xl",
            {
              "text-primary": mode === "light",
              "text-dark": mode === "dark",
            },
          )}
        >
          <Image
            src="/icons/dot.svg"
            width={8}
            height={8}
            alt="Dot"
            priority
            className="ml-3"
          />

          <span>designathon</span>
          <span className="font-tertiary font-extrabold">&apos;24</span>
        </p>
      ))}
    </Marquee>
  );
};

export default TextMarquee;
