import Image from "next/image";
import React from "react";
import Banner from "@/components/banner/Banner";
import Separator from "@/components/separator/Separator";
import ListaNoticias from "@/components/listaNoticias/ListaNoticias";
import AsideNoticias from "@/components/asideNoticias/AsideNoticias";


export function HomePage() {
  return (
    <div className="flex w-full p-4 gap-10">
      <div className="bg-white h-full w-3/4">
        <Banner
          src="/images/home/cta-fondo-azul.png"
          alt="CTA - banner"
          width={1200}
          height={300}
        />
        <Separator text="ÚLTIMAS NOTICIAS" className="" />
        <ListaNoticias />
      </div>
      <AsideNoticias />
    </div>
  );
}
