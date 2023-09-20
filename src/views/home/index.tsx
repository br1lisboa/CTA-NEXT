import Image from "next/image";
import React from "react";

interface BannerProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

function Banner(props: BannerProps) {
  const { src, width, height, alt, ...rest } = props;
  return (
    <div className="flex justify-center w-full">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="my-6"
        {...rest}
      />
    </div>
  );
}

interface SeparatorProps {
  text: string;
}
function Separator(props: SeparatorProps) {
  const { text } = props;
  return (
    <div className="w-full border-b border-b-gray-200 mb-6">
      <p className="text-[#808080] mb-2 ml-4">{text}</p>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="bg-white h-full">
      <Banner
        src="./images/home/banner-home.svg"
        alt="CTA - banner"
        width={1200}
        height={300}
      />

      <Separator text="ÚLTIMAS NOTICIAS" />
    </div>
  );
}
