import clsx from "clsx";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface TextMarqueeProps {
  mode?: "light" | "dark";
  type?: "primary" | "secondary";
}

const TextMarquee = ({
  mode = "light",
  type = "primary",
}: TextMarqueeProps) => {
  return (
    <Marquee>
      {[...Array(10)].map((index) =>
        type === "primary" ? (
          <p
            key={index}
            className={clsx("font-secondary flex gap-3 text-2xl md:text-3xl", {
              "text-primary": mode === "light",
              "text-dark": mode === "dark",
            })}
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
        ) : (
          <p
            key={index}
            className={clsx("font-primary flex gap-3 text-3xl", {
              "text-tertiary": mode === "light",
              "text-primary": mode === "dark",
            })}
          >
            <span className="ml-4">◌</span>
            <span>ILLUMINⱭͲe</span>
            <span>✺</span>
            <span>IGNIͲЄ</span>
            <span>🌞</span>
            <span>INSPIRς</span>
          </p>
        )
      )}
    </Marquee>
  );
};

export default TextMarquee;
