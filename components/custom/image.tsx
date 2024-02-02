"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface CustomImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  fallbackSrc,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);

  return (
    <Image {...props} src={imgSrc} onError={() => setImgSrc(fallbackSrc)} />
  );
};

export default CustomImage;
