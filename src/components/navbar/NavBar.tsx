import Link from "next/link";
import Image from "next/image";
import { ActiveLink } from "./components/ActiveLink";

interface NavBarProps {
  links: { name: string; href: string }[];
  networks: { icon: string; href: string; alt: string }[];
}

export function NavBar(props: NavBarProps) {
  const { links, networks } = props;
  return (
    <nav className="w-full">
      <div className="bg-[#232323] text-white p-2 flex justify-between flex-wrap">
        <div className="flex items-center">{getDay()}</div>
        <div className="flex gap-4 flex-wrap items-center">
          {networks.map((network) => (
            <Link key={network.href} href={network.href}>
              <Image
                src={network.icon}
                width={25}
                height={25}
                alt={network.alt}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="p-2 bg-[#D9D9D9]">
        <ul className="flex justify-center gap-12 flex-wrap text-[#808080]">
          {links.map((link) => (
            <ActiveLink key={link.href} text={link.name} href={link.href} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

function getDay() {
  const newDate = new Date();
  const formattedDate = newDate
    .toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();
  return formattedDate;
}
