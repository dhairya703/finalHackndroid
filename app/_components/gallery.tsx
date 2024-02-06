import Marquee from "react-fast-marquee";
import Second from "@/public/gallery/2.png";
import Third from "@/public/gallery/3.png";
import Fourth from "@/public/gallery/4.png";
import Fifth from "@/public/gallery/5.png";
import Sixth from "@/public/gallery/6.png";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  const images = [
    {
      src: Fourth,
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
    {
      src: Third,
      alt: "7",
    },
    {
      src: Second,
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
        glipmse into the&nbsp;
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
      <p className="font-tertiary text-sm font-semibold opacity-50 transition-all duration-200 ease-in hover:opacity-100 sm:text-lg">
        The Previous Edition of{" "}
        <Link
          href="https://codedesignweek.netlify.app/designathon"
          className="underline"
          target="_blank"
        >
          DESIGNATHON by CODe
        </Link>
      </p>
    </div>
  );
};

export default Gallery;
