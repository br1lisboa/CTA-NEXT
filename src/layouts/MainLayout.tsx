import { Footer } from "@/components/footer/Footer";
import { NavBar } from "@/components/navbar/NavBar";
import Head from "next/head";
import React from "react";
import RadioPlayer from "@/components/RadioPlayer/RadioPlayer";




interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const navLinks = [
  { name: "INICIO", href: "/" },
  { name: "INSTITUCIONAL", href: "/institucional" },
  { name: "SECRETARÍAS", href: "/secretarias" },
  { name: "NOTICIAS Y OPINIONES", href: "/noticias-opiniones" },
  { name: "AFILIACIONES Y CONTACTO", href: "/afiliaciones-contacto" },
  { name: "BIBLIOTECA", href: "/biblioteca" },
];

const networks = [
  {
    icon: "/images/network/face.svg",
    href: "https://www.facebook.com/",
    alt: "CTA - facebook",
  },
  {
    icon: "/images/network/ytb.svg",
    href: "https://youtube.com/",
    alt: "CTA - youtube",
  },
  {
    icon: "/images/network/insta.svg",
    href: "https://www.instagram.com/",
    alt: "CTA - instagram",
  },
  {
    icon: "/images/network/rad.svg",
    href: "https://www.google.com/",
    alt: "CTA - google",
  },
];

const imagesFooterLeft = [
  { src: "/images/footer/ct.svg", width: 100, height: 80, alt: "CTA" },
  { src: "/images/footer/ituc.svg", width: 100, height: 80, alt: "CTA" },
];

const imagesFooterRight = [
  { src: "/images/footer/sigtur.svg", width: 100, height: 80, alt: "CTA" },
  { src: "/images/footer/cta.svg", width: 200, height: 80, alt: "CTA" },
];

const contactInfo = [
  "Entre Ríos 357 | Resistencia | Argentina | 500",
  "+54 362 476 8520",
  "ctaachaco@gmail.com",
];

export function MainLayout(props: MainLayoutProps) {
  const { children, title = "CTA" } = props;
  const urlStream = "https://104.238.205.177:7074/stream"
  return (
    <div className="h-screen w-screen flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>

      <NavBar links={navLinks} networks={networks} />

      <div className="p-3 flex-grow pl-10p pr-10p">{children}</div>

      <RadioPlayer streamUrl={urlStream} />
      <Footer
        contactInfo={contactInfo}
        imagesFooterLeft={imagesFooterLeft}
        imagesFooterRight={imagesFooterRight}
      />

    </div>
  );
}
