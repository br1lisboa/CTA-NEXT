import Image from "next/image";

interface ImageFooterContainerProps {
  images: ImageFooterProps[];
}
interface ImageFooterProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}
export function ImageFooterContainer(props: ImageFooterContainerProps) {
  const { images } = props;
  return (
    <>
      {images.map((image) => (
        <div className="flex flex-col justify-center" key={image.src}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
      ))}
    </>
  );
}
