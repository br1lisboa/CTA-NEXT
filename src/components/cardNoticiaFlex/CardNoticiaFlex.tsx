import Link from "next/link";

interface NoticiaCardProps {
    id: string;
    titulo: string;
    imagenSrc: string;
    cuerpo: string;
    fecha: string;
    text: string;
}

export default function CardNoticiaFlex(props: NoticiaCardProps) {
    const { id, titulo, imagenSrc, cuerpo, fecha, text } = props;

    let route: string;
    if (text === "NOTICIAS") {
        route = `/noticias/${id}`;
    } else if (text === "OPINIONES") {
        route = `/opiniones/${id}`;
    } else {
        // Default route, you can modify this based on your requirements
        route = `/noticias/${id}`;
    }

    return (
        <Link href={route}>
            <div className="flex bg-white rounded p-4 mb-4">
                <div className="ml-4">
                    <p>{fecha}</p>
                    <h2 className="text-lg font-bold">{titulo}</h2>
                    <p>{cuerpo}</p>
                </div>
                <div className="flex-shrink-0">
                    <img src={imagenSrc} alt="Imagen" className="w-100 h-100" />
                </div>
            </div>
        </Link>
    )
}