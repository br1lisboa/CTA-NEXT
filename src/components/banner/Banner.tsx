import Image from "next/image";


interface BannerProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}
export default function Banner(props: BannerProps) {
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