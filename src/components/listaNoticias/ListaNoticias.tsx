import { useState, useEffect } from "react";
import NoticiaCard from "../cardNoticia/CardNoticia";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import Spinner from "@/components/spinner/Spinner";

interface Noticia {
    id: string;
    titulo: string;
    imagen: string;
    cuerpo: string;
}

export default function ListaNoticias() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productosRef = collection(db, "noticias");
                const querySnapshot = await getDocs(productosRef);
                const docs = querySnapshot.docs.map(doc => doc.data() as Noticia);
                setNoticias(docs);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data from Firestore: ", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {loading ? (
                <Spinner />
            ) : (
                noticias.map((noticia, index) => (
                    <NoticiaCard
                        key={index}
                        titulo={noticia.titulo}
                        imagenSrc={noticia.imagen}
                        cuerpo={noticia.cuerpo}
                        id={noticia.id} 
                    />
                ))
            )}
        </div>
    );
}
