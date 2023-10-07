import Image from 'next/image';
import Link from 'next/link';

interface NoticiaCardProps {
  titulo: string;
  imagenSrc: string;
  cuerpo: string;
  id: string; // Asumiendo que tienes un ID único para cada noticia
}

export default function NoticiaCard(props: NoticiaCardProps) {
  const { titulo, imagenSrc, cuerpo, id } = props;

  return (
    <Link href={`/noticias/${id}`}>

        <div className="flex flex-col items-start w-full col-span-1 p-4 border border-gray-300 shadow-md rounded-md">
          <Image src={imagenSrc} alt={titulo} width={400} height={400} />
          <div className="p-3">
            <h3 className="text-lg font-bold">{titulo}</h3>
            <p className="mt-2">{cuerpo}</p>
          </div>
        </div>

    </Link>
  );
}

