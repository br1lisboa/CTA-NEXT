import Link from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps {
  text: string;
  href: string;
}

export function ActiveLink(props: ActiveLinkProps) {
  const { text, href } = props;
  const { asPath } = useRouter();
  return (
    <Link
      className={asPath === href ? "text-[#36B776] font-bold" : undefined}
      href={href}
    >
      {text}
    </Link>
  );
}
