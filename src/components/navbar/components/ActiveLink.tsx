import Link from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps {
  text: string;
  href: string;
  target:string;
}

export function ActiveLink(props: ActiveLinkProps) {
  const { text, href, target } = props;
  const { asPath } = useRouter();
  return (
    <Link
      className={asPath === href ? "text-[#36B776] font-bold" : undefined}
      href={href} target={target}
    >
      {text}
    </Link>
  );
}
