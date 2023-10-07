import Link from "next/link";

interface AsideNoticiaProps {
    id: string;
    titulo: string;

}




export default function AsideNoticia(props: AsideNoticiaProps) {
    const { id, titulo } = props
    return (
        <Link href={`/noticias/${id}`}>
            <p className="text-[#878080] font-bold text-justify">{titulo}</p>
        </Link>
    )

}