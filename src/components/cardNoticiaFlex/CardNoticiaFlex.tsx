import Link from "next/link";

interface NoticiaCardProps {
    id: string;
    titulo: string;
    imagenSrc: string;
    cuerpo: string;
    fecha: string;
    text: string;
}
const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

export default function CardNoticiaFlex(props: NoticiaCardProps) {
    const { id, titulo, imagenSrc, cuerpo, fecha, text } = props;
    const truncatedCuerpo = truncateString(cuerpo, 70);

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
            <div className="flex border rounded-md gap-2 bg-white rounded p-4 mb-4">
                <div className="flex-grow">
                    <div className="ml-4">
                        <p>{fecha}</p>
                        <h2 className="text-lg font-bold">{titulo}</h2>
                        <p className="p-2">{truncatedCuerpo}</p>
                    </div>
                </div>
                <div className="flex-shrink-0 w-40 h-40">
                    <img
                        src={imagenSrc}
                        alt="Imagen"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </Link>
    );
}