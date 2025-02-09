import Marquee from "react-fast-marquee";
import Second from "@/public/gallery/IM2.jpg";
import Third from "@/public/gallery/IM3.jpg";
import Fourth from "@/public/gallery/IM4.jpg";
import Fifth from "@/public/gallery/IM5.jpg";
import First from "@/public/gallery/IM1.jpg";
import Image from "next/image";
import Link from "next/link";

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
      src: First,
      alt: "6",
    },

    {
      src: Third,
      alt: "7",
    },
    {
      src: Second,
      alt: "8",
    },
  
  {
    src: Fourth,
    alt: "8",
  },
    {
      src: Fifth,
      alt: "8",
    },
  ];
  return (
    <div className="z-40 flex flex-col items-center justify-center py-10">
      <div className="text-normal px-4 pb-4 pt-12 text-center font-secondary text-3xl sm:px-12 sm:pt-20 sm:text-4xl md:text-5xl lg:px-16 lg:pt-24 lg:text-6xl xl:px-32 xl:pt-32 2xl:px-48">
        glimpse into the&nbsp;
        <span className="text-tertiary">memories&nbsp;</span>we{" "}
        <span className="whitespace-nowrap">have created</span>
      </div>
      <Marquee pauseOnHover className="z-0 p-10">
        {images.map((image, index) => (
          <div className="z-0 -ml-14 hover:z-10" key={index}>
            <Image
              className="object-contain brightness-50 grayscale transition-all duration-200 ease-in hover:translate-x-[-20%] hover:scale-125 hover:brightness-100 hover:grayscale-0"
              src={image.src}
              alt={image.alt}
              height={200}
            />
          </div>
        ))}
      </Marquee>
      
    </div>
  );
};

export default Gallery;
