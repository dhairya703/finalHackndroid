import { CustomText } from "@/components/custom";
import Marquee from "react-fast-marquee";
import First from "@/public/gallery/1.png";
import Second from "@/public/gallery/2.png";
import Third from "@/public/gallery/3.png";
import Fourth from "@/public/gallery/4.png";
import Fifth from "@/public/gallery/5.png";
import Sixth from "@/public/gallery/6.png";
import Image from "next/image";

const Gallery = () => {
  const images = [
    {
      src: First,
      alt: "1",
    },
    {
      src: Second,
      alt: "2",
    },
    {
      src: Third,
      alt: "3",
    },
    {
      src: Fourth,
      alt: "4",
    },
    {
      src: Fifth,
      alt: "5",
    },
    {
      src: Sixth,
      alt: "6",
    },
  ];
  return (
    <div className="z-40 flex flex-col items-center justify-center py-10">
      <div className="text-normal py-10 text-center font-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        glipmse into the&nbsp;
        <span className="text-secondary">memories&nbsp;</span>we have created
      </div>
      <Marquee pauseOnHover className="p-10">
        {images.map((image, index) => (
          <div className="-ml-14" key={index}>
            <Image
              className="object-contain grayscale transition-all duration-200 ease-in hover:scale-105 hover:grayscale-0"
              src={image.src}
              alt={image.alt}
              height={200}
            />
          </div>
        ))}
      </Marquee>
      <p className="font-tertiary text-sm font-semibold opacity-50 sm:text-lg">
        The Previous Edition of{" "}
        <span className="underline">DESIGNATHON by CODe</span>
      </p>
    </div>
  );
};

export default Gallery;
