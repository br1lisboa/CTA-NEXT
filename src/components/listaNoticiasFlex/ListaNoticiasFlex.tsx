
import CardNoticiaFlex from "../cardNoticiaFlex/CardNoticiaFlex"
export interface Noticia {
    id: string;
    titulo: string;
    imagen: string;
    cuerpo: string;
    fecha: string;
}


interface ListaNoticiasFlexProps {
    text: string;
    array: Noticia[]
}

export default function ListaNoticiasFlex(props: ListaNoticiasFlexProps) {

    const { text, array } = props
    return (
        <div className="flex gap-2 flex-col justify-start">
            <div className="text-xl font-bold mb-4 text-center text-[#36B776]">{text}</div>
            <hr />
            {array.map((noticia, index) => (
                <CardNoticiaFlex
                    id={noticia.id}
                    key={index}
                    titulo={noticia.titulo}
                    imagenSrc={noticia.imagen}
                    cuerpo={noticia.cuerpo}
                    fecha={noticia.fecha}
                    text={text}
                />
            ))}
        </div>
    );


}