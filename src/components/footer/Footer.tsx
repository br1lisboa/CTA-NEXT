import { ContactInfo } from "./components/ContactInfo";
import { ImageFooterContainer } from "./components/ImageFooterContainer";

interface FooterProps {
  imagesFooterLeft: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
  imagesFooterRight: {
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
  contactInfo: string[];
}

export function Footer(props: FooterProps) {
  const { imagesFooterLeft, imagesFooterRight, contactInfo } = props;
  return (
    <footer className="w-full bg-[#232323] flex-wrap text-white p-2 pl-4 pr-4 flex justify-between align-middle">
      <ImageFooterContainer images={imagesFooterLeft} />
      <ContactInfo text={contactInfo} />
      <ImageFooterContainer images={imagesFooterRight} />
    </footer>
  );
}
